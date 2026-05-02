# FINXIA Capital — Website PRD

## Original Problem Statement
Build a bilingual (FR/EN) institutional website for FINXIA Capital positioning the firm as a proprietary Luxembourg SCSp investment vehicle. Next.js 15 (Pages Router) with SSG, strict SEO (meta, canonical, OG, JSON-LD, robots.txt, llms.txt, sitemap, hreflang), deployed on Netlify.

## Architecture
- `/app/frontend-nextjs/` — Next.js 15 app (Pages Router, `output: 'export'`)
- `/app/frontend/server.js` — serves the exported `out/` folder on supervisor port 3000
- Pages: `/`, `/about`, `/strategies`, `/investors`, `/governance`, `/press`, `/contact`, `/european-approach`, `/blog/*`, plus `/en/*` mirrors
- Components: `WhitepaperModal.tsx`, `SEO.tsx`, `Navigation.tsx`, `Footer.tsx`
- Integrations: Netlify Forms (whitepaper gated download)

## Completed
- Next.js 15 migration with strict visual/functional parity (prior sessions)
- SEO: meta, canonical, OG, JSON-LD, sitemap.xml, robots.txt, llms.txt, hreflang
- FR slug 301 redirects via `public/_redirects`
- Preview supervisor wired to Next.js `out/`
- Founder bios, Heritage section with real PPTX photography, TITAN DC AI thesis
- Removed THERMIS / Portugal / LP-facing language
- Gated Whitepaper Modal with corporate-email validation via Netlify Forms
- Standardized blog bylines across 16 posts
- SSRN links updated with nofollow "under review"
- **2026-02: Fixed 3 homepage text bugs** (hero paragraph FR, CTA FR/EN, "Financière Rive Gauche" full name)

## Backlog
- P1: Inform user to purge Netlify/Cloudflare cache to see deployed blog byline updates
- P2: LinkedIn Company Page + Google Business Profile setup
- P2: Custom email addresses (contact@finxiacapital.com)

## Tech Stack
Next.js 15, React 18, TypeScript, Tailwind, Netlify Forms (SSG deploy).
