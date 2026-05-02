# FINXIA Capital — Website PRD

## Original Problem Statement
Build a bilingual (FR/EN) institutional website for FINXIA Capital positioning the firm as a proprietary Luxembourg SCSp investment vehicle. Next.js 15 (Pages Router) with SSG, strict SEO (meta, canonical, OG, JSON-LD, robots.txt, llms.txt, sitemap, hreflang), deployed on Netlify.

## Architecture
- `/app/frontend-nextjs/` — Next.js 15 app (Pages Router, `output: 'export'`)
- `/app/frontend/server.js` — serve-handler serving `out/` on supervisor port 3000
- Pages: `/`, `/about`, `/strategies`, `/investors`, `/governance`, `/press`, `/contact`, `/european-approach`, `/blog/*`, `/guides/*`, `/auteurs/*`, plus `/en/*` mirrors
- Components: `WhitepaperModal.tsx`, `SEO.tsx`, `Navigation.tsx` (with Ressources dropdown), `Footer.tsx`
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
- **2026-02-05** Audit Perplexity — 5 chantiers + bonus (Capital & Structure block, TITAN geography harmonized, portfolio table on /strategies, SSRN linked to TITAN, 18 agents examples)
- **2026-02-05** SEO LLM content strategy — 6-step audit executed:
  - Rewrote EED Article 12 blog from stub (~200 mots) to 2 500+ mots with 7 H2 + 8 FAQ + FAQPage JSON-LD
  - Rewrote PUE guide blog from stub (~350 mots) to 2 500+ mots with 7 H2 + 8 FAQ + anonymized case study + FAQPage JSON-LD
  - Created NEW `/guides/eed-directive-datacenter-2026/` definitive reference guide (4 000+ mots, 8 H2, 12 FAQ, Article + FAQPage + BreadcrumbList JSON-LD)
  - Created NEW `/auteurs/lila-benhammou/` author profile page with Person JSON-LD (E-E-A-T signal)
  - Added "Ressources" dropdown in main navigation (Guide EED + Blog)
  - Internal link cluster: bylines link to author page, cross-links between articles, anchor text "guide complet EED datacenters 2026" → /guides/eed-directive-datacenter-2026/
  - Organization schema already present on homepage (verified)
  - `sameAs` left empty on Person schema per user choice
  - FR only for this pass (EN pages keep stub placeholder)
- **2026-02-06** Homepage "Actualités" section refactored to dynamic pull:
  - New single-source-of-truth data file `/app/frontend-nextjs/data/blogPosts.ts`
  - Homepage now maps `getLatestBlogPosts(3)` — auto-sorted by `date` DESC
  - Localized date formatter + bilingual title/excerpt fields
  - Added `data-testid="home-news-card-<slug>"` for each card
  - Verified in static HTML: top 3 now correctly show brown-to-green (23 mai), data-centers-ia (16 mai), stackit-lidl (9 mai)
  - Future posts will surface automatically by adding an entry to `blogPosts`

## Backlog
- P1: Translate the 3 long-form articles (EED, PUE, Guide, Author) to English
- P1: Inform user to purge Netlify/Cloudflare cache to see deployed updates
- P2: LinkedIn articles — manually republish EED Art.12, PUE, TITAN brownfield under Lila profile with canonical links back
- P2: SSRN accepted paper — add backlink in abstract to /guides/eed-directive-datacenter-2026/
- P2: LinkedIn Company Page + Google Business Profile setup
- P2: Custom email addresses (contact@finxiacapital.com)
- P2: Add sameAs to Lila Person Schema once LinkedIn profile URL confirmed

## Tech Stack
Next.js 15, React 18, TypeScript, Tailwind, Netlify Forms (SSG deploy).

## Draft artifacts
- `/app/memory/drafts/01_eed-article-12-rewrite.md`
- `/app/memory/drafts/02_pue-guide-rewrite.md`
- `/app/memory/drafts/03_guide-eed-definitif.md`
- `/app/memory/drafts/04_auteur-lila-benhammou.md`
