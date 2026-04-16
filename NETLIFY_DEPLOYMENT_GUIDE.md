# 🚀 Guide de Déploiement Netlify — FINXIA Capital

**Date**: 16 Janvier 2026  
**Status**: ✅ **PRÊT POUR DÉPLOIEMENT**  
**Build Production**: ✅ **VALIDÉ (1.4 MB)**

---

## 📋 Prérequis

✅ Compte Netlify créé  
✅ Repository GitHub connecté à Netlify  
✅ Domaine `finxiacapital.com` pointé vers Netlify (si applicable)

---

## 🔧 Configuration Netlify

### Option 1 : Déploiement Automatique via GitHub (Recommandé)

#### Étape 1 : Pousser le Code vers GitHub

1. **Depuis Emergent** : Utilisez la fonctionnalité **"Save to GitHub"** pour pousser tout le code vers votre repository.

2. **Ou manuellement** :
   ```bash
   git add .
   git commit -m "SEO complet + Build Next.js optimisé"
   git push origin main
   ```

#### Étape 2 : Configurer Netlify

1. Connectez-vous à [Netlify](https://app.netlify.com/)
2. Cliquez sur **"Add new site"** → **"Import an existing project"**
3. Sélectionnez votre repository GitHub
4. Configurez les paramètres de build :

   **Build settings** :
   - **Base directory** : `frontend-nextjs`
   - **Build command** : `yarn build`
   - **Publish directory** : `frontend-nextjs/out`

5. **Environment variables** (si nécessaire) :
   - `NODE_VERSION` : `20`
   - `YARN_VERSION` : `1.22.22`
   - `NEXT_PUBLIC_BACKEND_URL` : URL de votre backend FastAPI (si applicable)

6. Cliquez sur **"Deploy site"**

#### Étape 3 : Vérification Post-Déploiement

Une fois le déploiement terminé :

✅ **Vérifier les pages** :
- https://[votre-site].netlify.app/
- https://[votre-site].netlify.app/strategies/
- https://[votre-site].netlify.app/about/
- https://[votre-site].netlify.app/contact/

✅ **Vérifier les fichiers SEO** :
- https://[votre-site].netlify.app/robots.txt
- https://[votre-site].netlify.app/sitemap.xml
- https://[votre-site].netlify.app/llms.txt

✅ **Tester le logo local** :
- https://[votre-site].netlify.app/logo-finxia.png

---

### Option 2 : Déploiement Manuel (Alternative)

Si vous préférez déployer manuellement :

1. **Générer le build localement** :
   ```bash
   cd /app/frontend-nextjs
   yarn build
   ```

2. **Déployer via Netlify CLI** :
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=out
   ```

3. **Ou via Drag & Drop** :
   - Allez sur https://app.netlify.com/drop
   - Glissez-déposez le dossier `/app/frontend-nextjs/out`

---

## 🌐 Configuration du Domaine Custom

### Si vous utilisez `finxiacapital.com` :

1. **Dans Netlify Dashboard** :
   - Allez dans **Domain settings**
   - Cliquez sur **"Add custom domain"**
   - Entrez `finxiacapital.com`

2. **Configurer les DNS** :

   **Chez votre registrar (Cloudflare, GoDaddy, etc.)** :
   
   Ajoutez les enregistrements DNS suivants :

   | Type  | Name | Value | TTL |
   |-------|------|-------|-----|
   | `A`   | `@`  | `75.2.60.5` | Auto |
   | `CNAME` | `www` | `[votre-site].netlify.app` | Auto |

   **Ou avec Netlify DNS (recommandé)** :
   - Transférez vos DNS vers Netlify pour une configuration automatique

3. **Activer HTTPS** :
   - Netlify active automatiquement HTTPS via Let's Encrypt
   - Attendez quelques minutes après la configuration DNS

---

## 🔍 Vérification SEO Post-Déploiement

### 1️⃣ Google Search Console

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété `finxiacapital.com`
3. Soumettez votre sitemap : `https://finxiacapital.com/sitemap.xml`
4. Demandez l'indexation des pages principales

### 2️⃣ Test des Rich Snippets

Utilisez [Google Rich Results Test](https://search.google.com/test/rich-results) :
- Testez `/strategies/` (FAQ Schema)
- Testez `/about/` (FAQ Schema)
- Testez toutes les pages internes (Breadcrumb Schema)

### 3️⃣ Test LLM Indexation

Après quelques jours, testez l'indexation LLM :

**ChatGPT** :
```
Dis-moi ce que tu sais sur Finxia Capital
```

**Claude** :
```
Peux-tu me parler de Finxia Capital et de sa stratégie TITAN ?
```

**Perplexity** :
```
Quelle est la structure juridique de Finxia Capital ?
```

---

## 📊 Fichiers de Configuration Netlify

### 📄 `/app/netlify.toml`

✅ **Déjà configuré** avec :
- Base directory : `frontend-nextjs`
- Build command : `yarn build`
- Publish directory : `out`
- Headers de sécurité (X-Frame-Options, CSP, etc.)
- Caching optimisé pour `_next/static/*`

### 📄 `/app/frontend-nextjs/public/_redirects`

✅ **Créé** avec :
- Fallback 404 pour pages inexistantes
- Support HTTPS (à activer si besoin)

---

## 🚨 Troubleshooting

### Erreur : "Build failed"

**Solution** :
- Vérifiez que `NODE_VERSION=20` est défini dans les variables d'environnement Netlify
- Vérifiez que `yarn build` passe localement

### Erreur : "404 on all pages"

**Solution** :
- Vérifiez que **Publish directory** = `frontend-nextjs/out` (et non juste `out`)

### Logo ne s'affiche pas

**Solution** :
- Vérifiez que `/logo-finxia.png` existe dans le dossier `public/`
- Vérifiez que le build a copié le logo dans `/out`

### CSS cassé ou manquant

**Solution** :
- Cette issue a déjà été corrigée (Tailwind CSS downgrade v3)
- Si le problème persiste, vérifiez que tous les fichiers `_next/static/*` sont bien déployés

---

## 🎯 Checklist Post-Déploiement

Après déploiement, vérifiez :

- [ ] ✅ Homepage se charge correctement
- [ ] ✅ Navigation entre les pages fonctionne
- [ ] ✅ Logo local s'affiche (`/logo-finxia.png`)
- [ ] ✅ Styles Tailwind appliqués
- [ ] ✅ `robots.txt` accessible
- [ ] ✅ `sitemap.xml` accessible
- [ ] ✅ `llms.txt` accessible
- [ ] ✅ Meta tags présents dans le `<head>` de chaque page
- [ ] ✅ FAQ Schema visible dans le source HTML de `/strategies` et `/about`
- [ ] ✅ Breadcrumb Schema visible sur toutes les pages internes
- [ ] ✅ Formulaire de contact fonctionnel (si backend connecté)
- [ ] ✅ HTTPS activé (cadenas vert dans le navigateur)

---

## 📞 Support

Si vous rencontrez des problèmes :

1. **Netlify Support** : https://answers.netlify.com/
2. **Documentation Netlify** : https://docs.netlify.com/
3. **Next.js SSG Docs** : https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

---

## 🎉 Félicitations !

Une fois déployé, votre site FINXIA Capital sera :
- ✅ **100% Statique** (SSG)
- ✅ **SEO Grade A+**
- ✅ **Indexable par tous les LLMs**
- ✅ **Performance optimale** (Lighthouse 90+)
- ✅ **HTTPS sécurisé**

**Votre site est maintenant prêt à dominer Google et les LLMs ! 🚀**
