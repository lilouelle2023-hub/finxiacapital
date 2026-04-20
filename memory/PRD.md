# FINXIA CAPITAL Website - PRD

## Project Overview
Site institutionnel bilingue (FR/EN) pour FINXIA Capital, véhicule d'investissement propriétaire structuré en SCSp luxembourgeoise, spécialisé dans les stratégies institutionnelles en datacenter AI (TITAN DC AI), hôtellerie premium et résidentiel flexible. Migration complète de React SPA vers Next.js 15 (Pages Router) pour Static Site Generation et déploiement Netlify.

## Original Requirements
- Site bilingue (FR/EN) avec `hreflang` et architecture multilingue complète
- Migration React SPA → Next.js 15 Pages Router (SSG `output: 'export'`)
- Parité visuelle/fonctionnelle 100% stricte avec ancien React app
- Déploiement Netlify
- SEO strict (Meta Tags, Canonical, Open Graph, JSON-LD, robots.txt, llms.txt, sitemap)
- Focus AI-native : 18 agents autonomes, co-fondatrice Lila Benhammou CIO
- Stratégie Brown-to-Green datacenter (TITAN DC AI)
- Structure : SCSp Luxembourg (véhicule propriétaire, pas RAIF/fonds collecté)

## User Personas
1. **Partenaires Institutionnels** - Fonds de pension, assurances (co-investissement deal-by-deal)
2. **Partenaires Financiers** - Banques, fonds de dette, investisseurs obligataires (Green Bonds)
3. **Investisseurs Professionnels** - Qualifiés MiFID II (Directive 2014/65/UE)
4. **Régulateurs / Presse / LLMs** - Discoverability académique (SSRN, Schema.org)

## What's Implemented (Feb 2026)

### Architecture Next.js 15 SSG
- [x] Pages Router avec dossier `/en/` mirror pour version anglaise
- [x] LanguageContext i18n via React Context (SSR-safe)
- [x] SEO component avec JSON-LD, Open Graph, hreflang, canonical
- [x] Build statique `output: 'export'` → `/out/` pour Netlify
- [x] `_redirects` Netlify avec 301 permanents

### Pages
- [x] Homepage (Accueil) — Hero, piliers, stratégies, Key Figures, News
- [x] About / À Propos — Bios Jean-Pierre Véron, Lila Benhammou + section "Native architecture — not a layer"
- [x] Strategies / Stratégies — TITAN DC AI, Hospitality, Flex Living, C.CAPITAL + Loi PINM
- [x] Governance / Gouvernance — 4D risk framework + Comité d'investissement
- [x] Investors / Partenaires Institutionnels — SCSp propriétaire + Co-investissement + Green Bonds + SSRN ref
- [x] European Approach — FR, ES, IT
- [x] Contact — Formulaire fonctionnel
- [x] Press — 3 items (SSRN, PRLog, article interne) + Hreflang
- [x] Blog — 9 articles bilingues complets (PUE, EED Art. 12, SCSp vs RAIF, TITAN DC AI, 18 agents IA, PINM…)

### Backend - FastAPI + MongoDB
- [x] API `/api/contact` (soumission formulaire)
- [x] MongoDB storage

### SEO & Discoverability
- [x] sitemap.xml
- [x] robots.txt (GPTBot, ClaudeBot, PerplexityBot authorized)
- [x] llms.txt pour LLM ingestion
- [x] Schema.org Organization + BreadcrumbList + Article JSON-LD
- [x] Hreflang FR/EN + x-default
- [x] Canonical URLs strictes
- [x] SSRN Publication link (Abstract ID 6597918) dans Footer global

### Design - Charte Terracotta
- [x] Couleur d'accent: #C45A3B (terracotta)
- [x] Couleur principale: #1E2A3A (charcoal)
- [x] Playfair Display (serif) + Manrope (sans)

## Session Feb 2026 — Dernières modifications

### Corrections finales (session en cours)
- [x] Suppression intégrale du disclaimer "Not a trading platform / forex broker" — retiré de `Footer.tsx`, `pages/about.tsx`, `pages/index.tsx` (boilerplate jugé nuisible à la crédibilité institutionnelle)
- [x] Ajout du lien SSRN « European Datacenter Energy Optimization, 2026 » sous la section Green Bonds de `/investors/` (FR + EN)
- [x] Redirections 301 pour slugs français dans `_redirects` : `/gouvernance` → `/governance/`, `/investisseurs` → `/investors/`, `/a-propos` → `/about/`, `/presse` → `/press/`
- [x] Suppression complète des références au PDF `FINXIA_LivreBlancPUE_V3_FINAL.pdf` (bouton download retiré de `about.tsx` et `press.tsx`, dossier `/public/documents/` supprimé) — le PDF sera réintégré lorsque le fichier final sera fourni
- [x] Build propre (`yarn build` → 36 pages SSG, 0 erreur, 0 lint warning)

## Tech Stack
- Frontend: Next.js 15 (Pages Router, Turbopack), React 19, Tailwind CSS, Lucide React
- Backend: FastAPI, Motor (async MongoDB)
- Database: MongoDB
- Deployment: Netlify (via `/app/netlify.toml`)

## Backlog / Future Features
- P1: Fournir le vrai PDF FINXIA_LivreBlancPUE_V3_FINAL.pdf (actuellement retiré du site)
- P1: Purge cache Cloudflare (nécessite credentials utilisateur)
- P2: LinkedIn Company Page setup
- P2: Google Business Profile setup
- P2: Emails custom (contact@, invest@ via Google Workspace ou similaire)
- P3: Espace investisseur sécurisé
- P3: Notifications email (SendGrid)

## Files Modified (Session Feb 2026)
- `/app/frontend-nextjs/pages/investors.tsx` — Ajout référence SSRN Green Bonds
- `/app/frontend-nextjs/pages/about.tsx` — Suppression disclaimer + bouton PDF
- `/app/frontend-nextjs/pages/index.tsx` — Suppression disclaimer
- `/app/frontend-nextjs/pages/press.tsx` — Suppression bouton PDF
- `/app/frontend-nextjs/components/Footer.tsx` — Suppression disclaimer (SSRN link conservé)
- `/app/frontend-nextjs/public/_redirects` — Ajout redirections 301 slugs FR

## Project Health
- Build: ✅ Clean (36 pages, 0 error, 0 warning)
- Lint: ✅ No issues
- 404 FR slugs: ✅ Résolus via 301 redirects
- Disclaimer boilerplate: ✅ Retiré intégralement
- PDF dangling links: ✅ Retirés intégralement
