# FINXIA Capital - Architecture de Déploiement

## Architecture Actuelle (Séparation Frontend/Backend)

### 🌐 Frontend (Next.js 15 SSG)
**Hébergement** : Netlify  
**URL** : https://finxiacapital.com  
**Repository** : github.com/lilouelle2023-hub/finxiacapital  
**Build** : Automatique via CI/CD Netlify

**Configuration** :
- Framework : Next.js 15 (Pages Router)
- Output : Static Site Generation (`output: 'export'`)
- Build command : `yarn build`
- Output directory : `out/`
- Domaine personnalisé : finxiacapital.com

**Fichiers clés** :
- `/app/netlify.toml` - Configuration Netlify
- `/app/frontend-nextjs/next.config.ts` - Config Next.js
- `/app/frontend-nextjs/.env.local` - Variables d'environnement

### 🔧 Backend (FastAPI)
**Hébergement** : Emergent Kubernetes  
**URL** : https://silly-mcclintock-1.preview.emergentagent.com  
**Port** : 8001

**Configuration** :
- Framework : FastAPI
- Database : MongoDB Atlas (fourni par Emergent)
- CORS : Permet toutes les origines (`*`)

**Endpoints API** :
- `GET /api/health` - Health check
- `POST /api/contact` - Formulaire de contact
- `GET /api/status-checks` - Status checks (optionnel)

**Fichiers clés** :
- `/app/backend/server.py` - Application FastAPI
- `/app/backend/requirements.txt` - Dépendances Python
- `/app/backend/.env` - Variables d'environnement

---

## Changements Récents (v2.0)

### ❌ Ancien Modèle (v1.0)
Backend servait les fichiers statiques Next.js :
```python
# ❌ Supprimé - causait des problèmes en Kubernetes
app.mount("/_next", StaticFiles(...))
@app.get("/{full_path:path}")
async def serve_nextjs_pages(full_path: str):
    # Servait les fichiers HTML statiques
```

**Problèmes** :
1. Dépendance sur le dossier `/out` qui n'existe pas en Kubernetes
2. Catch-all route interférait avec les routes API
3. Build Next.js requis pendant le déploiement backend
4. Complexité inutile

### ✅ Nouveau Modèle (v2.0)
Séparation complète Frontend/Backend :

**Frontend (Netlify)** :
- ✅ Déploie et sert les fichiers statiques Next.js
- ✅ CDN global automatique
- ✅ Build indépendant du backend
- ✅ HTTPS automatique
- ✅ Déploiements illimités gratuits

**Backend (Emergent K8s)** :
- ✅ Sert uniquement les API sous `/api/*`
- ✅ Pas de dépendance sur Next.js build
- ✅ Déploiement simplifié
- ✅ Scalabilité indépendante

---

## Variables d'Environnement

### Frontend (.env.local)
```env
NEXT_PUBLIC_BACKEND_URL=https://silly-mcclintock-1.preview.emergentagent.com
```

### Backend (.env)
```env
MONGO_URL=<fourni par Emergent en production>
DB_NAME=finxia_db
CORS_ORIGINS=*
```

---

## Flux de Requêtes

### 1. Chargement de la Page
```
User → finxiacapital.com (Netlify CDN)
     → HTML/CSS/JS Next.js servi instantanément
```

### 2. Appel API (ex: Formulaire de Contact)
```
Browser → fetch('https://silly-mcclintock-1.preview.emergentagent.com/api/contact')
        → FastAPI backend (Kubernetes)
        → MongoDB Atlas
        → Response JSON
```

---

## Déploiement

### Frontend (Netlify)
**Automatique via Git** :
1. Push vers GitHub `main` branch
2. Netlify détecte changement
3. Build Next.js (`yarn build`)
4. Déploie `/out` vers CDN
5. Live sur finxiacapital.com

**Manuel** :
```bash
cd /app/frontend-nextjs
yarn build
# Upload vers Netlify via dashboard ou CLI
```

### Backend (Emergent)
**Automatique** :
1. Code backend dans `/app/backend/`
2. Emergent build container
3. Deploy vers Kubernetes
4. MongoDB Atlas auto-configuré

**Santé** :
- Health check : `GET /api/health`
- Expected : `{"status":"healthy","service":"FINXIA Capital API","database":"connected"}`

---

## Tests

### Frontend
```bash
# Local dev
cd /app/frontend-nextjs
yarn dev -p 3001

# Production build test
yarn build
ls -la out/  # Vérifier fichiers générés

# Test Netlify
curl -s https://finxiacapital.com | grep "FINXIA Capital"
```

### Backend
```bash
# Health check
curl https://silly-mcclintock-1.preview.emergentagent.com/api/health

# Contact form
curl -X POST https://silly-mcclintock-1.preview.emergentagent.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

---

## Troubleshooting

### Frontend ne charge pas
1. Vérifier Netlify build logs
2. Vérifier `next build` local fonctionne
3. Vérifier domaine DNS (Cloudflare → Netlify)

### API ne répond pas
1. Vérifier backend health : `/api/health`
2. Vérifier CORS headers
3. Vérifier `NEXT_PUBLIC_BACKEND_URL` dans Netlify env vars
4. Vérifier logs Kubernetes Emergent

### Formulaire de contact ne fonctionne pas
1. Vérifier MongoDB connexion dans logs backend
2. Vérifier `MONGO_URL` configuré par Emergent
3. Tester endpoint avec curl (voir Tests ci-dessus)

---

## Avantages de l'Architecture Actuelle

| Aspect | Avantage |
|--------|----------|
| **Performance** | CDN Netlify global, Next.js SSG pré-rendu |
| **SEO** | HTML statique indexable dès le premier chargement |
| **Coût** | Frontend gratuit illimité sur Netlify |
| **Scalabilité** | Frontend/Backend scale indépendamment |
| **Simplicité** | Backend focus uniquement sur API |
| **Déploiement** | CI/CD automatique pour les deux |
| **Sécurité** | Séparation des préoccupations |

---

## Contact Technique

- **Frontend** : Netlify (finxiacapital.com)
- **Backend** : Emergent Kubernetes
- **Database** : MongoDB Atlas (Emergent-managed)
- **DNS** : Cloudflare
