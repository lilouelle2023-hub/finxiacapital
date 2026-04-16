from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

# Configure logging first
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="FINXIA Capital API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# MongoDB connection - lazy initialization
mongo_client: Optional[AsyncIOMotorClient] = None
db = None

def get_database():
    global mongo_client, db
    if mongo_client is None:
        mongo_url = os.environ.get('MONGO_URL', '')
        if mongo_url:
            mongo_client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=5000)
            db_name = os.environ.get('DB_NAME', 'finxia_db')
            db = mongo_client[db_name]
            logger.info(f"MongoDB connected to database: {db_name}")
        else:
            logger.warning("MONGO_URL not configured, database will be None")
    return db

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactFormInput(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=200)
    investor_type: Optional[str] = Field(None, max_length=100)
    message: str = Field(..., min_length=10, max_length=5000)
    language: str = Field(default="fr")

class ContactFormResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    name: str
    email: str
    company: Optional[str]
    investor_type: Optional[str]
    message: str
    language: str
    submitted_at: str
    status: str

# Health check endpoint - simple and fast (no DB check for startup)
@app.get("/health")
async def root_health():
    """Root health check for container startup"""
    return {"status": "ok"}

@api_router.get("/")
async def root():
    return {"message": "FINXIA Capital API", "status": "operational"}

@api_router.get("/health")
async def health_check():
    """API health check with optional DB status"""
    try:
        database = get_database()
        if database is not None:
            # Quick ping to check DB connection
            await database.command('ping')
            return {"status": "healthy", "service": "FINXIA Capital API", "database": "connected"}
    except Exception as e:
        logger.warning(f"Database health check failed: {e}")
    return {"status": "healthy", "service": "FINXIA Capital API", "database": "not_checked"}

@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactFormInput):
    """Submit contact form - stores in DB and can be forwarded to email"""
    try:
        database = get_database()
        if database is None:
            raise HTTPException(status_code=503, detail="Database not available")
            
        contact_id = str(uuid.uuid4())
        submitted_at = datetime.now(timezone.utc).isoformat()
        
        doc = {
            "id": contact_id,
            "name": form_data.name,
            "email": form_data.email,
            "company": form_data.company,
            "investor_type": form_data.investor_type,
            "message": form_data.message,
            "language": form_data.language,
            "submitted_at": submitted_at,
            "status": "pending",
            "contact_email": "contact@finxiacapital.com"
        }
        
        await database.contact_submissions.insert_one(doc)
        
        return ContactFormResponse(
            id=contact_id,
            name=form_data.name,
            email=form_data.email,
            company=form_data.company,
            investor_type=form_data.investor_type,
            message=form_data.message,
            language=form_data.language,
            submitted_at=submitted_at,
            status="submitted"
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Contact form submission error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact", response_model=List[ContactFormResponse])
async def get_contact_submissions():
    """Get all contact form submissions (admin endpoint)"""
    try:
        database = get_database()
        if database is None:
            return []
        submissions = await database.contact_submissions.find({}, {"_id": 0}).sort("submitted_at", -1).to_list(100)
        return submissions
    except Exception as e:
        logger.error(f"Error fetching submissions: {e}")
        return []

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    database = get_database()
    if database is None:
        raise HTTPException(status_code=503, detail="Database not available")
    
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await database.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    try:
        database = get_database()
        if database is None:
            return []
        status_checks = await database.status_checks.find({}, {"_id": 0}).to_list(100)
        for check in status_checks:
            if isinstance(check['timestamp'], str):
                check['timestamp'] = datetime.fromisoformat(check['timestamp'])
        return status_checks
    except Exception as e:
        logger.error(f"Error fetching status checks: {e}")
        return []

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Note: Next.js frontend is deployed separately on Netlify
# Backend only serves API endpoints under /api/*
# No static file serving needed in Kubernetes deployment

@app.on_event("startup")
async def startup_event():
    logger.info("FINXIA Capital API starting up...")
    # Initialize database connection
    get_database()
    logger.info("FINXIA Capital API ready")

@app.on_event("shutdown")
async def shutdown_db_client():
    global mongo_client
    if mongo_client:
        mongo_client.close()
        logger.info("MongoDB connection closed")
