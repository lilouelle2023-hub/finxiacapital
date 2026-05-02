# FINXIA Capital — Website PRD

## Original Problem Statement
Build a bilingual (FR/EN) institutional website for FINXIA Capital positioning the firm as a proprietary Luxembourg SCSp investment vehicle. Next.js 15 (Pages Router) with SSG, strict SEO (meta, canonical, OG, JSON-LD, robots.txt, llms.txt, sitemap, hreflang), deployed on Netlify.

## Architecture
- `/app/frontend-nextjs/` — Next.js 15 app (Pages Router, `output: 'export'`)
- `/app/frontend/server.js` — serve-handler serving `out/` on supervisor port 3000
- Pages: `/`, `/about`, `/strategies`, `/investors`, `/governance`, `/press`, `/contact`, `/european-approach`, `/blog/*`, plus `/en/*` mirrors (re-export pattern with `initialLanguage`)
- Components: `WhitepaperModal.tsx`, `SEO.tsx`, `Navigation.tsx`, `Footer.tsx`
- Integrations: Netlify Forms (whitepaper gated download)

## Completed
- Next.js 15 migration with strict visual/functional parity
- SEO: meta, canonical, OG, JSON-LD, sitemap.xml, robots.txt, llms.txt, hreflang
- FR slug 301 redirects via `public/_redirects`
- Preview supervisor wired to Next.js `out/`
- Founder bios, Heritage section with real PPTX photography, TITAN DC AI thesis
- Removed THERMIS / Portugal / LP-facing language
- Gated Whitepaper Modal with corporate-email validation via Netlify Forms
- Standardized blog bylines across 16 posts
- SSRN links updated with nofollow "under review"
- **2026-02-05** Fixed 3 homepage text bugs (hero FR, CTA FR/EN, Financière Rive Gauche full name)
- **2026-02-05** Split DNA "2 exits" into 2 distinct cards (JPV 2006 / LB 2023)
- **2026-02-05** Audit Perplexity — 5 chantiers + bonus :
  - C1: Ajout bloc "Capital & Structure" sur homepage après SCSp Luxembourg (exclusivité fonds propres + co-invest SPV)
  - C2: Confirmation — "Notre ADN" présente en FR et EN (ternary déjà en place, 7 stats)
  - C3: TITAN geography harmonisée "France · Espagne · Italie · Europe du Nord" (FR) / "France · Spain · Italy · Northern Europe" (EN) sur index.tsx + strategies.tsx
  - C4: Ajout tableau synthétique "Vue d'ensemble du portefeuille" sur /strategies (4 pôles × 5 colonnes)
  - C5a: News SSRN homepage enrichie du lien avantage compétitif TITAN DC AI
  - C5b: Bloc SSRN sur /strategies après "Pourquoi maintenant" (lien SSRN Abstract ID 6597918)
  - BONUS: Section "Exemples de valeur ajoutée par verticale" (3 cartes : TITAN, Hôtellerie, Résidentiel) sur homepage

## Backlog
- P1: Inform user to purge Netlify/Cloudflare cache to see deployed updates
- P2: LinkedIn Company Page + Google Business Profile setup
- P2: Custom email addresses (contact@finxiacapital.com)

## Tech Stack
Next.js 15, React 18, TypeScript, Tailwind, Netlify Forms (SSG deploy).
