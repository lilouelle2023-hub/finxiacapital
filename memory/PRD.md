# FINXIA CAPITAL Website - PRD

## Project Overview
Institutional website for FINXIA CAPITAL, a pan-European alternative asset manager specializing in hybrid multi-asset strategies.

## Original Requirements
- Bilingual website (French/English)
- Premium institutional design inspired by Tikehau Capital
- Contact email: contact@finxiacapital.com
- No performance figures (IRR, MOIC, yields)
- Deep blue/charcoal/bronze color scheme

## User Personas
1. **Institutional Investors** - Pension funds, insurance companies seeking alternative investments
2. **Family Offices** - High-net-worth families looking for diversified strategies
3. **Professional Private Investors** - Qualified investors exploring pan-European opportunities
4. **Financial Advisors** - Intermediaries researching fund options for clients

## Core Requirements
- 7 Pages: Homepage, About, Strategies, Risk Management, European Approach, Investors, Contact
- Language switcher (FR/EN)
- Contact form with backend storage
- Interactive European map
- Responsive design

## What's Implemented (Feb 2026)

### Frontend
- [x] Homepage with hero section, pillars, institutional framework
- [x] About page with philosophy, architecture, governance
- [x] Strategies page (4 strategies: Logistics, Hospitality, Residential, Capital)
- [x] Risk Management page with 7 risk framework items
- [x] European Approach page with interactive SVG map
- [x] Investors page with ILPA compliance info
- [x] Contact page with functional form
- [x] Bilingual support (FR/EN) via React Context
- [x] Navigation with scroll-aware styling
- [x] Footer with legal notices
- [x] Responsive design

### Backend
- [x] FastAPI server with /api prefix
- [x] Contact form submission endpoint (POST /api/contact)
- [x] MongoDB storage for contact submissions
- [x] Health check endpoint

### Design
- [x] Playfair Display (headings) + Manrope (body) fonts
- [x] Deep blue (#0F172A) / Bronze (#A16207) accent color scheme
- [x] Premium architectural imagery
- [x] Card hover animations
- [x] Company logo integration

## Tech Stack
- Frontend: React 19, Tailwind CSS, Lucide React icons
- Backend: FastAPI, Motor (async MongoDB)
- Database: MongoDB

## Testing Status
- Backend API: 100% pass
- Frontend UI: 85% pass
- Contact form integration: Working
- Language toggle: Working

## Backlog / Future Features
- P1: Investor portal (secure login area)
- P1: Email notifications for contact form (SendGrid integration)
- P2: CMS for portfolio updates
- P2: Blog/News section
- P3: Multi-fund structure support
- P3: ESG reporting page

## Next Tasks
1. Add email notification service for contact form submissions
2. Implement secure investor portal with authentication
3. Add more interactive elements to strategies page
