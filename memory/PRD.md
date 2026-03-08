# FINXIA CAPITAL Website - PRD

## Project Overview
Site institutionnel pour FINXIA CAPITAL, gestionnaire d'actifs alternatifs pan-européen structuré en RAIF Luxembourg, spécialisé dans les stratégies multi-actifs hybrides.

## Original Requirements
- Site bilingue (FR/EN)
- Design institutionnel premium inspiré de Tikehau Capital
- Logo terracotta/orange (nouveau)
- Contact: contact@finxiacapital.com
- Pas de chiffres de performance (IRR, MOIC, rendements)
- Structure RAIF Luxembourg avec supervision CSSF

## User Personas
1. **Investisseurs Institutionnels** - Fonds de pension, assurances
2. **Family Offices** - Familles fortunées cherchant la diversification
3. **Investisseurs Privés Professionnels** - Qualifiés MiFID II
4. **Conseillers Financiers** - Intermédiaires recherchant des options de fonds

## Core Requirements
- 6 Pages: Accueil, À Propos, Stratégies, Gouvernance & Risques, Approche Européenne, Investisseurs, Contact
- Toggle de langue (FR/EN)
- Formulaire de contact avec stockage backend
- Design responsive
- Footer avec disclaimer MiFID II et risque en capital

## What's Implemented (Feb 2026)

### Frontend - React + Tailwind CSS
- [x] Homepage avec hero section, 3 piliers, 4 stratégies en preview, section RAIF
- [x] About page avec Vision, Trajectoire 2025-2029, Facteurs différenciants, Équipe fondatrice
- [x] Strategies page avec 4 stratégies détaillées (TITAN Logistics, Hospitality, Flex Living, C.CAPITAL)
- [x] Governance & Risks page avec cadre de risque à 4 dimensions
- [x] European Approach page avec 3 pays cibles (France, Espagne, Italie)
- [x] Investors page avec standards ILPA et reporting INREV
- [x] Contact page avec formulaire fonctionnel
- [x] Support bilingue FR/EN via React Context
- [x] Navigation avec nouveau logo terracotta
- [x] Footer avec disclaimer légal MiFID II

### Backend - FastAPI + MongoDB
- [x] API /api/contact pour soumission de formulaires
- [x] Stockage MongoDB des demandes de contact
- [x] Health check endpoint

### Design - Nouvelle Charte Terracotta
- [x] Logo orange/terracotta (finxia_LOGO_DEFINITIF.png)
- [x] Couleur d'accent: #C45A3B (terracotta)
- [x] Couleur principale: #1E2A3A (charcoal foncé)
- [x] Typographie: Playfair Display (titres) + Manrope (corps)
- [x] Images architecturales premium

### Équipe Fondatrice
- Jean-Pierre Véron - Fondateur & Président (ex-PDG K&B, 3ème fonds immobilier)
- Lila Benhammou - Co-Fondatrice & CIO (Serial entrepreneur Tech/IA)

## Testing Status (Feb 2026)
- Backend API: 100% pass (9/9 tests)
- Frontend UI: 98% pass
- Contact form: Working
- Language toggle: Working
- Navigation: All 6 pages working

## Tech Stack
- Frontend: React 19, Tailwind CSS, Lucide React, react-helmet-async
- Backend: FastAPI, Motor (async MongoDB)
- Database: MongoDB

## SEO & AI Discoverability (from Addendum)
- [ ] sitemap.xml à générer
- [ ] robots.txt avec autorisation GPTBot, ClaudeBot, PerplexityBot
- [ ] Schema.org Organization JSON-LD
- [ ] Google Search Console setup
- [ ] Bing Webmaster Tools setup
- [ ] LinkedIn Company Page

## Backlog / Future Features
- P0: Déploiement production
- P1: SEO et Schema.org
- P1: LinkedIn Company Page
- P1: Google Business Profile
- P2: Espace investisseur sécurisé
- P2: Notifications email (SendGrid)
- P3: CMS pour mises à jour
- P3: Blog/Actualités

## Files Modified (This Session)
- /app/frontend/src/index.css (nouvelle charte terracotta)
- /app/frontend/src/App.js (nouvelle page Governance)
- /app/frontend/src/pages/*.js (toutes les pages refaites)
- /app/frontend/src/components/Navigation.js (nouveau logo)
- /app/frontend/src/components/Footer.js (nouveau logo + disclaimer)
- /app/frontend/src/context/LanguageContext.js (nouvelles traductions)
