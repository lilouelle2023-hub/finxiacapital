# 📦 Instructions Upload Vercel - FINXIA Capital HomePage

## Fichier ZIP Créé : `finxia-nextjs-homepage.zip`

**Localisation** : `/tmp/finxia-nextjs-homepage.zip`

---

## 🚀 Étapes de Déploiement sur Vercel

### **1. Créer/Se Connecter à Vercel**
- Allez sur : https://vercel.com/signup
- Connectez-vous avec GitHub, GitLab, ou email

### **2. Créer un Nouveau Projet**
- Cliquez sur **"Add New..."** → **"Project"**
- Choisissez **"Deploy from a template or import"**

### **3. Uploader le ZIP**
- Sélectionnez **"Upload ZIP"** ou **"Import Git Repository"**
- Si ZIP direct n'est pas disponible, utilisez la méthode CI/CD :
  1. Extrayez le ZIP localement
  2. Uploadez le dossier `out/` via l'interface Vercel
  
**OU Méthode Alternative (Recommandée)** :
1. Extrayez le ZIP sur votre machine
2. Ouvrez un terminal dans le dossier extrait
3. Installez Vercel CLI : `npm install -g vercel`
4. Connectez-vous : `vercel login`
5. Déployez : `vercel --prod`

### **4. Configuration du Projet**

Si Vercel vous demande la configuration :

```
Framework Preset: Next.js
Build Command: yarn build
Output Directory: out
Install Command: yarn install
Root Directory: ./
```

### **5. Variables d'Environnement**

Ajoutez cette variable dans les Settings du projet :

```
NEXT_PUBLIC_BACKEND_URL=https://finxia-preview.preview.emergentagent.com
```

### **6. Déployer**

- Cliquez sur **"Deploy"**
- Attendez 2-3 minutes
- Vous obtiendrez une URL de type : `finxia-capital-xxx.vercel.app`

---

## ✅ Après Déploiement

1. **Testez l'URL** fournie par Vercel
2. **Vérifiez l'indexabilité** :
   ```bash
   curl https://votre-url.vercel.app/ | grep "Build in the real world"
   ```
3. **Validez visuellement** le design, navigation, contenu
4. **Donnez-moi le GO** pour migrer les 7 autres pages

---

## 🌐 Configuration Domaine Personnalisé (Optionnel)

Si vous avez déjà `finxiacapital.com` :

1. Dans Vercel → **Settings** → **Domains**
2. Ajoutez `finxiacapital.com` et `www.finxiacapital.com`
3. Vercel vous donne des enregistrements DNS à configurer
4. Allez dans votre registrar de domaine (Cloudflare, GoDaddy, etc.)
5. Ajoutez les enregistrements DNS fournis par Vercel

**Si domaine sur Cloudflare** :
- CNAME : `www` → `cname.vercel-dns.com`
- A Record : `@` → IP Vercel (fournie)

---

## 📊 Contenu du ZIP

```
finxia-nextjs-homepage.zip
├── out/
│   ├── index.html (HomePage complète - 22KB)
│   ├── 404.html
│   └── _next/ (Assets CSS/JS/Fonts)
├── .env.local (Variables environnement)
├── next.config.ts (Config Next.js)
├── package.json
└── yarn.lock
```

---

## 🆘 Besoin d'Aide ?

Si vous rencontrez des problèmes :
1. Vérifiez que `NEXT_PUBLIC_BACKEND_URL` est bien configuré
2. Assurez-vous que le build s'exécute sans erreurs
3. Contactez le support Vercel (très réactif)

---

**Temps estimé : 5-10 minutes** ⏱️

Bonne chance ! 🚀
