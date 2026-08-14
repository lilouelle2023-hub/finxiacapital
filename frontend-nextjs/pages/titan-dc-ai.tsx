import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Server, Shield, Leaf, Zap, Building2, Mail, ExternalLink, TrendingUp } from 'lucide-react';
import SEO from '@/components/SEO';

export default function TitanDcAiPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": language === 'fr' ? "TITAN DC AI — Campus Moselle | FINXIA Capital" : "TITAN DC AI — Moselle Campus | FINXIA Capital",
    "description": language === 'fr'
      ? "Campus IA Moselle : 140 MW de capacité HPC, extensible à 540 MW. HTB 225 kV opérationnel, PUE ≤ 1,05. LOI signée juin 2026. Build-to-Suit, Forward Funding, Green Bond."
      : "Moselle AI Campus: 140 MW HPC capacity, scalable to 540 MW. Operational HTB 225 kV, PUE ≤ 1.05. LOI signed June 2026. Build-to-Suit, Forward Funding, Green Bond.",
    "url": "https://finxiacapital.com/titan-dc-ai/",
    "mainEntity": {
      "@type": "Project",
      "name": "TITAN DC AI — Campus IA Moselle",
      "alternateName": "DCMAX.AI",
      "description": language === 'fr'
        ? "Infrastructure datacenter de 140 MW IT load (540 MW à terme) dédiée à l'IA, financée par FINXIA Capital."
        : "140 MW IT load datacenter infrastructure (540 MW at scale), dedicated to AI, financed by FINXIA Capital.",
      "url": "https://dcmax.ai",
      "sponsor": {
        "@type": "Organization",
        "name": "FINXIA Capital",
        "url": "https://finxiacapital.com",
        "description": "Proprietary investment vehicle Luxembourg SCSp."
      },
      "location": {
        "@type": "Place",
        "name": "Campus IA Moselle",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Moselle",
          "addressRegion": "Grand Est",
          "addressCountry": "FR"
        }
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Puissance IT — Tranche 1", "value": "140 MW" },
        { "@type": "PropertyValue", "name": "Puissance totale à terme", "value": "540 MW" },
        { "@type": "PropertyValue", "name": "Raccordement", "value": "HTB 225 kV — opérationnel" },
        { "@type": "PropertyValue", "name": "PUE cible", "value": "≤ 1,05" }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'fr' ? "Accueil" : "Home",
        "item": language === 'fr' ? "https://finxiacapital.com/" : "https://finxiacapital.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'fr' ? "TITAN DC AI — Campus Moselle" : "TITAN DC AI — Moselle Campus",
        "item": language === 'fr' ? "https://finxiacapital.com/titan-dc-ai/" : "https://finxiacapital.com/en/titan-dc-ai/"
      }
    ]
  };

  const kpis = [
    {
      value: '140 MW',
      label: language === 'fr' ? 'Capacité IT — Tranche 1' : 'IT Capacity — Phase 1',
      desc: language === 'fr'
        ? 'Livraison phasée : 20 MW (déc. 2027), 20 MW (déc. 2028), 100 MW (déc. 2029)'
        : 'Phased delivery: 20 MW (Dec. 2027), 20 MW (Dec. 2028), 100 MW (Dec. 2029)',
    },
    {
      value: '540 MW',
      label: language === 'fr' ? 'Capacité totale à terme' : 'Total capacity at scale',
      desc: language === 'fr'
        ? 'Après extension Port de Moselle (+400 MW)'
        : 'After Port de Moselle extension (+400 MW)',
    },
    {
      value: 'HTB 225 kV',
      label: language === 'fr' ? 'Raccordement' : 'Grid Connection',
      desc: language === 'fr'
        ? 'Opérationnel sur site — zéro file d\'attente RTE'
        : 'Operational on-site — zero RTE queue',
    },
    {
      value: '≤ 1,05',
      label: language === 'fr' ? 'PUE cible' : 'Target PUE',
      desc: language === 'fr'
        ? 'Refroidissement liquide, GPU-dense'
        : 'Liquid cooling, GPU-dense',
    },
    {
      value: 'Juin 2026',
      label: language === 'fr' ? 'Preuve d\'exécution' : 'Proof of execution',
      desc: language === 'fr'
        ? 'LOI signée — opérateur cloud investment-grade, bail Shell Lease NNN 15 ans'
        : 'LOI signed — investment-grade cloud operator, 15-year Shell Lease NNN',
    },
  ];

  const models = [
    {
      id: 'bts',
      icon: Building2,
      title: 'Build-to-Suit',
      subtitle: language === 'fr' ? 'Construction sur mesure' : 'Custom-built',
      text: language === 'fr'
        ? 'Construction sur mesure selon les spécifications de l\'opérateur (densité, redondance, réseau, sécurité). Engagement long terme (10–15 ans) qui sécurise le financement et réduit le risque de vacance.'
        : 'Custom-built to the operator\'s specifications (density, redundancy, network, security). Long-term commitment (10–15 years) securing financing and reducing vacancy risk.',
    },
    {
      id: 'forward',
      icon: Zap,
      title: 'Forward Funding',
      subtitle: language === 'fr' ? 'Financement anticipé' : 'Pre-development funding',
      text: language === 'fr'
        ? 'L\'opérateur participe au financement de la construction en échange d\'un droit d\'usage prioritaire et d\'un prix de colocation indexé sur des références de marché transparentes. Réduction du TCO de 15 à 25 % vs. colocation standard.'
        : 'The operator participates in construction financing in exchange for priority usage rights and colocation pricing indexed to transparent market references. 15–25% TCO reduction vs. standard colocation.',
    },
    {
      id: 'colo',
      icon: Server,
      title: 'Colocation',
      subtitle: language === 'fr' ? 'Espace partagé' : 'Shared space',
      text: language === 'fr'
        ? 'Espace blanc dans un environnement partagé, avec garanties de puissance, redondance électrique N+1 et bande passante réseau multi-homed. Engagements flexibles (12–36 mois).'
        : 'White space in a shared environment, with power guarantees, N+1 electrical redundancy and multi-homed network bandwidth. Flexible commitments (12–36 months).',
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title={language === 'fr'
          ? "TITAN DC AI — Campus Moselle | Disponibilité & Financement | FINXIA Capital"
          : "TITAN DC AI — Moselle Campus | Availability & Financing | FINXIA Capital"}
        description={language === 'fr'
          ? "Le Campus IA Moselle, actif phare de la stratégie TITAN DC AI de FINXIA Capital. 140 MW de capacité HPC extensible à 540 MW, raccordement HTB 225 kV opérationnel, PUE ≤ 1,05. LOI signée. Build-to-Suit, Forward Funding, Green Bond."
          : "The Moselle AI Campus, flagship asset of FINXIA Capital's TITAN DC AI strategy. 140 MW HPC capacity scalable to 540 MW, operational HTB 225 kV, PUE ≤ 1.05. LOI signed. Build-to-Suit, Forward Funding, Green Bond."}
        canonical={language === 'fr' ? "https://finxiacapital.com/titan-dc-ai/" : "https://finxiacapital.com/en/titan-dc-ai/"}
        keywords="TITAN DC AI, datacenter Moselle, capacité HPC France, Build-to-Suit datacenter, Forward Funding infrastructure, Green Bond datacenter, FINXIA Capital, DCMAX.AI"
        ogImage="https://finxiacapital.com/og-titan-dc-ai.jpg"
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/titan-dc-ai/"
        hreflangEn="https://finxiacapital.com/en/titan-dc-ai/"
        hreflangDefault="https://finxiacapital.com/titan-dc-ai/"
        structuredData={structuredData}
        breadcrumbSchema={breadcrumbSchema}
      />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(135deg, rgba(30, 42, 58, 0.92) 0%, rgba(30, 42, 58, 0.8) 50%, rgba(30, 42, 58, 0.7) 100%)',
            zIndex: 0
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl">
            <p className="overline mb-6 text-[#C45A3B]">
              {language === 'fr' ? 'Stratégie TITAN DC AI · Campus IA Moselle' : 'TITAN DC AI Strategy · Moselle AI Campus'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              {language === 'fr' ? (
                <>TITAN DC AI — Campus<br /><span className="text-[#C45A3B]">Intelligence Artificielle Moselle.</span></>
              ) : (
                <>TITAN DC AI — Moselle<br /><span className="text-[#C45A3B]">Artificial Intelligence Campus.</span></>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed max-w-3xl">
              {language === 'fr'
                ? '140 MW de capacité HPC ultra-dense en France, extensible à 540 MW. Développé et financé par FINXIA Capital.'
                : '140 MW of ultra-dense HPC capacity in France, scalable to 540 MW. Developed and financed by FINXIA Capital.'}
            </p>
            <p className="text-slate-400 mb-12 max-w-3xl">
              {language === 'fr'
                ? 'Infrastructure brown-to-green raccordée directement au réseau HTB 225 kV. Première tranche livrée par phases entre 2027 et 2029 ; l\'extension Port de Moselle porte la capacité totale à 540 MW.'
                : 'Brown-to-green infrastructure directly connected to the 225 kV HV grid. First phase delivered in stages between 2027 and 2029; the Port de Moselle extension brings total capacity to 540 MW.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://dcmax.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                {language === 'fr' ? 'Je cherche de la capacité →' : 'Looking for capacity →'}
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/investors"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all"
              >
                {language === 'fr' ? 'Devenir investisseur' : 'Become an investor'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Le projet en chiffres */}
      <section className="py-16 md:py-24 bg-[#1E2A3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="overline text-[#C45A3B] mb-4">{language === 'fr' ? 'Le projet' : 'The project'}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              {language === 'fr' ? 'Le projet en chiffres' : 'Project highlights'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                <div className="text-3xl font-bold text-[#C45A3B] mb-2">{kpi.value}</div>
                <p className="text-white font-medium text-sm mb-1">{kpi.label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{kpi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positionnement institutionnel */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{language === 'fr' ? 'Notre approche' : 'Our approach'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Positionnement institutionnel' : 'Institutional positioning'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {language === 'fr'
                ? 'FINXIA Capital — véhicule d\'investissement propriétaire SCSp luxembourgeois — déploie la stratégie TITAN DC AI sur trois piliers structurants :'
                : 'FINXIA Capital — proprietary investment vehicle Luxembourg SCSp — deploys the TITAN DC AI strategy on three structuring pillars:'}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 border-l-4 border-[#C45A3B]">
              <div className="w-12 h-12 bg-[#C45A3B]/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#C45A3B]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">
                {language === 'fr' ? 'Actifs réels' : 'Real assets'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'Infrastructure physique financée en capital propre, avec un effet de levier de dette structurée et un volet Green Bond pour la composante de rénovation énergétique. Le pipeline est validé par une LOI signée avec un opérateur cloud investment-grade (juin 2026, bail Shell Lease NNN 15 ans) — première preuve d\'exécution commerciale.'
                  : 'Physical infrastructure financed with equity, structured debt leverage and a Green Bond tranche for the energy renovation component. The pipeline is validated by an LOI signed with an investment-grade cloud operator (June 2026, 15-year Shell Lease NNN) — first proof of commercial execution.'}
              </p>
            </div>
            <div className="bg-slate-50 p-8 border-l-4 border-[#C45A3B]">
              <div className="w-12 h-12 bg-[#C45A3B]/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-[#C45A3B]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">
                {language === 'fr' ? 'Brown-to-green' : 'Brown-to-green'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'Reprise d\'actifs existants avec une trajectoire de décarbonation conforme à l\'EU Taxonomy. Le PUE cible (≤ 1,05) place le projet parmi les sites les plus efficaces d\'Europe.'
                  : 'Acquisition of existing assets with an EU Taxonomy-aligned decarbonization trajectory. The target PUE (≤ 1.05) places the project among the most efficient sites in Europe.'}
              </p>
            </div>
            <div className="bg-slate-50 p-8 border-l-4 border-[#C45A3B]">
              <div className="w-12 h-12 bg-[#C45A3B]/10 rounded-full flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-[#C45A3B]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">
                {language === 'fr' ? 'Gouvernance ESG' : 'ESG Governance'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'Reporting SFDR Article 8, audit annuel des émissions (Scope 1, 2, 3), conformité EU Taxonomy sur les critères DNSH. La composante Green Bond est dédiée à la rénovation énergétique et à l\'installation de production solaire sur site.'
                  : 'SFDR Article 8 reporting, annual emissions audit (Scope 1, 2, 3), EU Taxonomy DNSH compliance. The Green Bond component is dedicated to energy renovation and on-site solar power installation.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structure de financement — SANS rendements publiés */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="overline mb-4">{language === 'fr' ? 'Capital & Structure' : 'Capital & Structure'}</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                {language === 'fr' ? 'Structure de financement' : 'Financing structure'}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Structure en trois couches : capital propre (parts de SCSp), dette structurée (obligations senior, adossées aux contrats long terme 10–15 ans signés avec les opérateurs), et Green Bond (obligations vertes certifiées, dédiées aux dépenses éligibles EU Taxonomy).'
                  : 'Three-layer structure: equity (SCSp shares), structured debt (senior obligations, backed by 10–15 year long-term contracts signed with operators), and Green Bond (certified green obligations, dedicated to EU Taxonomy-eligible expenditures).'}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Les rendements cibles par couche (IRR, coupons) ne sont pas publiés sur cette page — documentation complète disponible sous NDA auprès des investisseurs qualifiés.'
                  : 'Target returns per layer (IRR, coupons) are not published on this page — full documentation available under NDA to qualified investors.'}
              </p>
              <a
                href="mailto:contact@finxiacapital.com"
                className="inline-flex items-center gap-2 text-[#C45A3B] font-semibold hover:underline"
              >
                <Mail className="w-4 h-4" />
                {language === 'fr' ? 'Documentation investisseurs (sous NDA) →' : 'Investor documentation (under NDA) →'}
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-6 border-l-4 border-[#C45A3B]">
                <div className="text-xl font-serif text-[#1E2A3A] mb-2">
                  {language === 'fr' ? 'Capital propre' : 'Equity'}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? 'Parts de SCSp — majorité détenue par FINXIA Capital. Alignement direct des intérêts.'
                    : 'SCSp shares — majority held by FINXIA Capital. Direct alignment of interests.'}
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-[#C45A3B]">
                <div className="text-xl font-serif text-[#1E2A3A] mb-2">
                  {language === 'fr' ? 'Dette structurée' : 'Structured debt'}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? 'Obligations senior adossées aux contrats de long terme (10–15 ans). Visibilité de cash-flows compatible avec un gearing d\'infrastructure.'
                    : 'Senior obligations backed by long-term contracts (10–15 years). Cash-flow visibility compatible with infrastructure gearing.'}
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-[#C45A3B]">
                <div className="text-xl font-serif text-[#1E2A3A] mb-2">Green Bond</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? 'Obligations vertes certifiées, éligibles EU Taxonomy. Dédiées aux dépenses de rénovation énergétique et à la production solaire sur site.'
                    : 'Certified green bonds, EU Taxonomy eligible. Dedicated to energy renovation expenditures and on-site solar power production.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modèles commerciaux */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{language === 'fr' ? 'Offre' : 'Offer'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Modèles commerciaux disponibles' : 'Commercial models available'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {models.map((m) => (
              <div key={m.id} className="bg-slate-50 p-8 card-hover text-center">
                <div className="w-16 h-16 bg-[#C45A3B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <m.icon className="w-8 h-8 text-[#C45A3B]" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C45A3B] mb-2">{m.subtitle}</p>
                <h3 className="font-serif text-2xl mb-4">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lien DCMAX.AI */}
      <section className="py-24 md:py-32 bg-[#1E2A3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="overline text-[#C45A3B] mb-4">{language === 'fr' ? 'Spécifications techniques' : 'Technical specifications'}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              {language === 'fr' ? 'La fiche technique complète' : 'Full technical datasheet'}
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-3xl">
              {language === 'fr'
                ? 'Plans électriques, schémas de refroidissement, topologie réseau, planning de livraison — la fiche technique détaillée est publiée sur le site dédié du campus, maintenu par l\'équipe technique DCMAX.AI.'
                : 'Electrical plans, cooling schematics, network topology, delivery timeline — the detailed datasheet is published on the campus\'s dedicated site, maintained by the DCMAX.AI technical team.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://dcmax.ai/specifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                {language === 'fr' ? 'Consulter les spécifications →' : 'View specifications →'}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://dcmax.ai/disponibilite/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all"
              >
                {language === 'fr' ? 'Vérifier la disponibilité' : 'Check availability'}
              </a>
              <a
                href="https://dcmax.ai/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all"
              >
                {language === 'fr' ? 'Contacter l\'équipe opérateurs' : 'Contact the operators team'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact segmenté */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{language === 'fr' ? 'Contact' : 'Contact'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Contactez l\'équipe' : 'Contact the team'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 border-l-4 border-[#C45A3B]">
              <div className="w-12 h-12 bg-[#C45A3B]/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#C45A3B]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#1E2A3A]">
                {language === 'fr' ? 'Investisseurs' : 'Investors'}
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                {language === 'fr'
                  ? 'Documentation financière, structure de dette, due diligence (sous NDA)'
                  : 'Financial documentation, debt structure, due diligence (under NDA)'}
              </p>
              <a
                href="mailto:contact@finxiacapital.com"
                className="inline-flex items-center gap-2 text-[#C45A3B] font-semibold hover:underline"
              >
                <Mail className="w-4 h-4" />
                contact@finxiacapital.com
              </a>
            </div>
            <div className="bg-slate-50 p-8 border-l-4 border-[#C45A3B]">
              <div className="w-12 h-12 bg-[#C45A3B]/10 rounded-full flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-[#C45A3B]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#1E2A3A]">
                {language === 'fr' ? 'Opérateurs / Capacité' : 'Operators / Capacity'}
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                {language === 'fr'
                  ? 'Fiche technique, étude de faisabilité, visite de site, devis'
                  : 'Technical datasheet, feasibility study, site visit, quote'}
              </p>
              <a
                href="mailto:capacity@dcmax.ai"
                className="inline-flex items-center gap-2 text-[#C45A3B] font-semibold hover:underline"
              >
                <Mail className="w-4 h-4" />
                capacity@dcmax.ai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {language === 'fr' ? 'Vous cherchez de la capacité HPC ou IA en France ?' : 'Looking for HPC or AI capacity in France?'}
          </h2>
          <p className="text-slate-600 text-lg mb-10">
            {language === 'fr'
              ? '140 MW livrés par phases entre 2027 et 2029, extensible à 540 MW. HTB 225 kV opérationnel. PUE cible ≤ 1,05. Réponse sous 48 heures.'
              : '140 MW delivered in phases between 2027 and 2029, scalable to 540 MW. Operational HTB 225 kV. Target PUE ≤ 1.05. Response within 48 hours.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://dcmax.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              {language === 'fr' ? 'Découvrir le Campus Moselle →' : 'Discover the Moselle Campus →'}
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              {language === 'fr' ? 'Nous contacter' : 'Contact us'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            {language === 'fr'
              ? 'DCMAX.AI est développé et financé par FINXIA Capital, véhicule d\'investissement propriétaire SCSp luxembourgeois.'
              : 'DCMAX.AI is developed and financed by FINXIA Capital, proprietary investment vehicle Luxembourg SCSp.'}
          </p>
        </div>
      </section>
    </div>
  );
}
