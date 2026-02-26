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

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

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

# Routes
@api_router.get("/")
async def root():
    return {"message": "FINXIA Capital API", "status": "operational"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "FINXIA Capital API"}

@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactFormInput):
    """Submit contact form - stores in DB and can be forwarded to email"""
    try:
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
        
        await db.contact_submissions.insert_one(doc)
        
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
    except Exception as e:
        logging.error(f"Contact form submission error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact", response_model=List[ContactFormResponse])
async def get_contact_submissions():
    """Get all contact form submissions (admin endpoint)"""
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    return submissions

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
