import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  CheckCircle, Award, Briefcase, Lightbulb, BarChart3,
  TrendingUp, Shield, Brain, Layers, ArrowRight
} from 'lucide-react';
import SEO from '@/components/SEO';

export default function AboutPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

  const differentiators = [
    {
      id: 'hybrid-architecture',
      icon: Layers, 
      title: language === 'fr' ? 'Architecture Hybride' : 'Hybrid Architecture',
      text: language === 'fr'
        ? 'Structure multi-poches unique combinant immobilier (logistique, hôtellerie, résidentiel) avec des opportunités de capital late-stage pour des rendements amplifiés.'
        : 'Unique multi-pocket structure combining real estate (logistics, hospitality, residential) with late-stage capital opportunities for enhanced returns.'
    },
    {
      id: 'tech-driven',
      icon: Brain, 
      title: language === 'fr' ? 'Avantage Technologique' : 'Tech-Driven Edge',
      text: language === 'fr'
        ? 'Infrastructure d\'agents IA propriétaires pour le sourcing, l\'optimisation de portefeuille et le suivi des risques en temps réel.'
        : 'Proprietary AI agent infrastructure for deal sourcing, portfolio optimization, and real-time risk monitoring.'
    },
    {
      id: 'snowball-strategy',
      icon: Shield, 
      title: language === 'fr' ? 'Stratégie Snowball' : 'Snowball Strategy',
      text: language === 'fr'
        ? 'Mécanisme de recyclage du capital amplifiant les rendements par réinvestissement stratégique à travers les cycles.'
        : 'Capital recycling mechanism amplifying returns through strategic reinvestment across cycles.'
    },
    {
      id: 'aligned-interests',
      icon: TrendingUp, 
      title: language === 'fr' ? 'Alignement des Intérêts' : 'Aligned Interests',
      text: language === 'fr'
        ? 'Engagement significatif du GP avec rémunération liée à la performance. Notre succès est directement lié aux résultats des investisseurs.'
        : 'Significant GP commitment with performance-based compensation. Our success is directly tied to investor outcomes.'
    },
  ];

  const teamMembers = [
    {
      id: 'jean-pierre-veron',
      initials: 'JPV',
      name: 'Jean-Pierre Véron',
      role: language === 'fr' ? 'Co-Fondateur & Président' : 'Co-Founder & Chairman',
      bio: language === 'fr'
        ? "Professionnel de référence de l'investissement immobilier français et européen. Fondateur de Financière Rive Gauche, plateforme d'investissement immobilier paneuropéenne cédée en 2006 au groupe espagnol coté Fadesa — sortie réussie marquant l'aboutissement d'un cycle d'acquisition, développement et valorisation d'envergure. Directeur Général France de Kaufman & Broad pendant 20 ans — l'un des premiers promoteurs immobiliers cotés en France. Président de Financière Norev. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe."
        : "Leading figure in French and European real estate investment. Founder of Financière Rive Gauche, a pan-European real estate investment platform divested in 2006 to listed Spanish group Fadesa — a successful exit marking the completion of a large-scale acquisition, development and value-creation cycle. Managing Director France of Kaufman & Broad for 20 years — one of France's premier listed real estate developers. Chairman of Financière Norev. Over 40 years of full-cycle track record across acquisition, development, restructuring and disposal of institutional real estate assets across Europe.",
      linkedin: 'https://linkedin.com/in/jean-pierre-veron',
      highlights: [
        { icon: Award, text: language === 'fr' ? 'Fondateur Financière Rive Gauche' : 'Founder Financière Rive Gauche' },
        { icon: Briefcase, text: language === 'fr' ? 'DG France Kaufman & Broad (20 ans)' : 'Managing Director France K&B (20 years)' },
        { icon: CheckCircle, text: language === 'fr' ? '40+ ans track record immobilier' : '40+ years real estate track record' },
      ],
    },
    {
      id: 'lila-benhammou',
      initials: 'LB',
      name: 'Lila Benhammou',
      role: language === 'fr' ? 'Co-Fondatrice & Directrice des Investissements (CIO)' : 'Co-Founder & Chief Investment Officer (CIO)',
      bio: language === 'fr'
        ? "Serial entrepreneur senior avec un parcours croisé en finance, intelligence artificielle et télécoms. Executive MBA — Kellogg School of Management, Northwestern University (Chicago). Fondatrice de H4H — sortie réussie en 2023. Architecte de l'infrastructure IA de FINXIA Capital (18 agents autonomes). Lead author du livre blanc SSRN sur l'optimisation énergétique des datacenters européens (2026). Basée entre Paris, Genève et Amsterdam."
        : "Senior serial entrepreneur with a cross-functional background in finance, artificial intelligence and telecoms. Executive MBA — Kellogg School of Management, Northwestern University (Chicago). Founder of H4H — successful exit in 2023. Architect of FINXIA Capital's AI infrastructure (18 autonomous agents). Lead author of the SSRN white paper on European datacenter energy optimization (2026). Based between Paris, Geneva and Amsterdam.",
      linkedin: 'https://linkedin.com/in/lilabenhammou',
      highlights: [
        { icon: Lightbulb, text: language === 'fr' ? 'Architecte infrastructure IA (18 agents)' : 'AI infrastructure architect (18 agents)' },
        { icon: BarChart3, text: language === 'fr' ? 'Sortie H4H réussie (2023)' : 'H4H successful exit (2023)' },
        { icon: CheckCircle, text: language === 'fr' ? 'Lead author SSRN 2026' : 'SSRN lead author 2026' },
      ],
    },
  ];

  // FAQ Schema for About page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que Finxia Capital ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finxia Capital est un véhicule d'investissement propriétaire structuré en SCSp luxembourgeoise, déployant du capital sur 4 pôles : Datacenter AI Brown-to-Green (TITAN), Hôtellerie Premium, Résidentiel Flex Living et Capital Opportunités, avec une architecture AI-native de 18 agents IA."
        }
      },
      {
        "@type": "Question",
        "name": "Comment fonctionne l'approche AI-native de Finxia Capital ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finxia Capital déploie 18 agents d'intelligence artificielle opérant en continu : Deal Intelligence, Asset Monitor, Debt Tracker, Revenue Manager, Ops Tracker, Exit Optimizer — couvrant chaque étape du cycle de vie du portefeuille."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la structure juridique de Finxia Capital ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finxia Capital est structurée en SCSp (Société en Commandite Spéciale) luxembourgeoise, véhicule propriétaire sans levée externe, finançant TITAN via Green Bond ESG et dette senior."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://finxiacapital.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'fr' ? "À Propos" : "About",
        "item": "https://finxiacapital.com/about"
      }
    ]
  };

  return (
    <div data-testid="about-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Jean-Pierre Véron & Lila Benhammou — Équipe FINXIA Capital SCSp Luxembourg | 40 ans track record immobilier + AI-native" : "Jean-Pierre Véron & Lila Benhammou — FINXIA Capital Team Luxembourg SCSp | 40-year real estate track record + AI-native"}
        description={language === 'fr' 
          ? "Jean-Pierre Véron (Co-Fondateur, 40+ ans immobilier — exit Rive Gauche → Fadesa 2006) & Lila Benhammou (Co-Fondatrice & CIO, MBA Kellogg Northwestern, exit H4H 2023, finance · IA · telecom) — Architecture AI-native 18 agents autonomes. FINXIA Capital SCSp Luxembourg."
          : "Jean-Pierre Véron (Co-Founder, 40+ years real estate — Rive Gauche exit → Fadesa 2006) & Lila Benhammou (Co-Founder & CIO, MBA Kellogg Northwestern, H4H exit 2023, finance · AI · telecom) — AI-native architecture 18 autonomous agents. FINXIA Capital Luxembourg SCSp."}
        canonical={language === 'fr' ? "https://finxiacapital.com/about/" : "https://finxiacapital.com/en/about/"}
        keywords="Jean-Pierre Véron, Lila Benhammou, FINXIA Capital équipe, gestionnaire alternatif Luxembourg SCSp, 18 agents IA investissement, AI-native asset management, Kaufman Broad, Financière Rive Gauche, Fadesa exit 2006, H4H exit 2023, Kellogg Northwestern MBA"
        faqSchema={faqSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/about/"
        hreflangEn="https://finxiacapital.com/en/about/"
        hreflangDefault="https://finxiacapital.com/about/"
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">{language === 'fr' ? 'À Propos' : 'About'}</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' 
                ? 'Gestion Alternative avec Excellence Européenne'
                : 'Alternative Management with European Excellence'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'FINXIA Capital est un véhicule d\'investissement propriétaire, structuré en SCSp luxembourgeoise, combinant discipline institutionnelle et architecture AI-native pour créer de la valeur sur les actifs réels.'
                : 'FINXIA Capital is a proprietary investment vehicle, structured as a Luxembourg SCSp, combining institutional discipline and AI-native architecture to create value in real assets.'}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-32 bg-[#1E2A3A] text-white" data-testid="vision-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline text-[#C45A3B] mb-4">
                {language === 'fr' ? 'Notre Vision' : 'Our Vision'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                {language === 'fr' 
                  ? 'Façonner l\'Avenir de l\'Investissement Alternatif Européen'
                  : 'Shaping the Future of European Alternative Investment'}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {language === 'fr'
                  ? 'FINXIA Capital ambitionne de devenir un gestionnaire d\'actifs alternatifs pan-européen de référence, reconnu pour sa discipline institutionnelle, sa capacité d\'innovation et son aptitude à générer une valeur durable à travers les cycles de marché.'
                  : 'FINXIA Capital aims to become a reference pan-European alternative asset manager, recognized for its institutional discipline, innovation capacity, and ability to generate sustainable value across market cycles.'}
              </p>
            </div>
            <div>
              <p className="overline text-[#C45A3B] mb-4">
                {language === 'fr' ? 'Trajectoire 2025-2029' : 'Roadmap 2025-2029'}
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#C45A3B]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C45A3B] font-bold">2025</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {language === 'fr' ? 'Fondation & Déploiement' : 'Foundation & Deployment'}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {language === 'fr' 
                        ? 'Structuration, partenariats stratégiques, premiers investissements'
                        : 'Structuring, strategic partnerships, first investments'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#C45A3B]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C45A3B] font-bold">2027</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {language === 'fr' ? 'Optimisation & Croissance' : 'Optimization & Growth'}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {language === 'fr'
                        ? 'Création de valeur par gestion active, expansion géographique'
                        : 'Value creation through active management, geographic expansion'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#C45A3B]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C45A3B] font-bold">2029</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {language === 'fr' ? 'Réalisation de Valeur' : 'Value Realization'}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {language === 'fr'
                        ? 'Sorties stratégiques, distribution, préparation Fonds II'
                        : 'Strategic exits, distribution, Fund II preparation'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Héritage — Realisations Track Record */}
      <section className="py-24 md:py-32 bg-white" data-testid="heritage-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">
              {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? '40 ans de track record immobilier institutionnel' : '40 years of institutional real estate track record'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {language === 'fr'
                ? "Quatre décennies de structuration d'opérations immobilières complexes en Europe — restructurations patrimoniales, repositionnements corporate, co-promotions de grande envergure. Le même ADN brownfield qui structure aujourd'hui la thèse TITAN DC AI."
                : "Four decades of structuring complex real estate operations across Europe — heritage restructurings, corporate repositionings, large-scale co-developments. The same brownfield DNA that structures the TITAN DC AI thesis today."}
            </p>
          </div>

          {/* Block 1 — Le Centorial */}
          <div className="mb-20" data-testid="heritage-block-centorial">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <p className="text-[#C45A3B] text-xs uppercase tracking-wider mb-3">
                  {language === 'fr' ? 'Réalisation N°01' : 'Realization No. 01'}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">Le Centorial</h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">
                  {language === 'fr' ? 'Ancien siège Crédit Lyonnais · 47 000 m² · Paris IXe' : 'Former Crédit Lyonnais HQ · 47,000 sqm · Paris 9th arr.'}
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {language === 'fr'
                    ? "Restructuration lourde de l'un des plus emblématiques sièges bancaires parisiens du XIXe siècle. La façade haussmannienne et la verrière intérieure de type Eiffel ont été intégralement préservées et classées monuments historiques."
                    : "Heavy restructuring of one of the most iconic 19th-century Parisian banking headquarters. The Haussmannian façade and the Eiffel-style interior glass dome were fully preserved and listed as historical monuments."}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? "Repositionnement complet en plateforme tertiaire institutionnelle multi-locataires."
                    : "Full repositioning into a multi-tenant institutional tertiary platform."}
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-3">
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 group">
                  <img src="/images/centorial.jpg" loading="lazy"
                    alt={language === 'fr' ? "Centorial — Façade haussmannienne, ancien Crédit Lyonnais" : "Centorial — Haussmannian façade, former Crédit Lyonnais"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 group">
                  <img src="/images/centorial-2.jpg" loading="lazy"
                    alt={language === 'fr' ? "Centorial — Atrium intérieur sous verrière classée" : "Centorial — Interior atrium under listed glass dome"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>

          {/* Block 2 — Cœur Défense */}
          <div className="mb-20" data-testid="heritage-block-coeur-defense">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 grid grid-cols-2 gap-3 lg:order-1 order-2">
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 group">
                  <img src="/images/coeur-defense.jpg" loading="lazy"
                    alt={language === 'fr' ? "Cœur Défense — Façade courbe extérieure, Paris La Défense" : "Cœur Défense — Curved exterior façade, Paris La Défense"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 group">
                  <img src="/images/coeur-defense-2.jpg" loading="lazy"
                    alt={language === 'fr' ? "Cœur Défense — Atrium intérieur, espaces communs" : "Cœur Défense — Interior atrium, common areas"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 order-1">
                <p className="text-[#C45A3B] text-xs uppercase tracking-wider mb-3">
                  {language === 'fr' ? 'Réalisation N°02' : 'Realization No. 02'}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">Cœur Défense</h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">
                  {language === 'fr' ? 'Tertiaire grand format · Paris La Défense' : 'Large-scale tertiary · Paris La Défense'}
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {language === 'fr'
                    ? "Opération institutionnelle de référence sur l'un des plus grands ensembles de bureaux d'Europe. Démonstration d'une discipline d'exécution — coordination travaux, négociation multi-locataires, gouvernance technique — sur un actif de plus de 350 000 m²."
                    : "Reference institutional operation on one of Europe's largest office complexes. Demonstration of execution discipline — works coordination, multi-tenant negotiation, technical governance — on an asset of over 350,000 sqm."}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? "Repositionnement en plateforme multi-locataires premium avec espaces communs et services intégrés."
                    : "Repositioning into a premium multi-tenant platform with common areas and integrated services."}
                </p>
              </div>
            </div>
          </div>

          {/* Block 3 — Washington Plaza */}
          <div className="mb-20" data-testid="heritage-block-washington-plaza">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <p className="text-[#C45A3B] text-xs uppercase tracking-wider mb-3">
                  {language === 'fr' ? 'Réalisation N°03' : 'Realization No. 03'}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">Washington Plaza</h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">
                  {language === 'fr' ? 'Ex-Shell Petroleum · Paris VIIIe' : 'Ex-Shell Petroleum · Paris 8th arr.'}
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {language === 'fr'
                    ? "Repositionnement complet d'un siège corporate emblématique des années 1970 — l'ancien quartier général de Shell Petroleum — en plateforme tertiaire institutionnelle premium au cœur du 8ᵉ arrondissement parisien."
                    : "Full repositioning of an iconic 1970s corporate headquarters — the former Shell Petroleum HQ — into a premium institutional tertiary platform in the heart of Paris's 8th arrondissement."}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? "Architecture curvilinéaire emblématique préservée, mise aux standards énergétiques et tertiaires modernes."
                    : "Iconic curvilinear architecture preserved, upgraded to modern energy and tertiary standards."}
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-3 gap-3">
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 group col-span-2">
                  <img src="/images/washington-plaza-2.jpg" loading="lazy"
                    alt={language === 'fr' ? "Washington Plaza — Façade Art Déco signée, ex-Shell Petroleum Paris" : "Washington Plaza — Signed Art Deco façade, ex-Shell Petroleum Paris"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="grid grid-rows-2 gap-3">
                  <div className="aspect-square overflow-hidden bg-slate-100 group">
                    <img src="/images/washington-plaza.jpg" loading="lazy"
                      alt={language === 'fr' ? "Washington Plaza — Vue aérienne du complexe curvilinéaire" : "Washington Plaza — Aerial view of the curvilinear complex"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="aspect-square overflow-hidden bg-slate-100 group">
                    <img src="/images/washington-plaza-3.jpg" loading="lazy"
                      alt={language === 'fr' ? "Washington Plaza — Façade extérieure secondaire" : "Washington Plaza — Secondary exterior façade"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 4 — Vallée du Camincourt — Logistics → TITAN DC AI */}
          <div className="mb-8" data-testid="heritage-block-camincourt">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 lg:order-1 order-2">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100 group relative">
                  <img src="/images/camincourt-logistics.jpg" loading="lazy"
                    alt={language === 'fr' ? "Plateforme logistique Vallée du Camincourt — 116 991 m² SDP, Saint-Sauveur (80)" : "Camincourt logistics platform — 116,991 sqm GFA, Saint-Sauveur (80) France"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 right-3 bg-[#C45A3B] text-white text-[10px] uppercase tracking-wider px-3 py-1.5 font-medium">
                    {language === 'fr' ? 'ADN TITAN DC AI' : 'TITAN DC AI DNA'}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 order-1">
                <p className="text-[#C45A3B] text-xs uppercase tracking-wider mb-3">
                  {language === 'fr' ? 'Réalisation N°04 — Pivot industriel' : 'Realization No. 04 — Industrial pivot'}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">{language === 'fr' ? 'Vallée du Camincourt' : 'Camincourt Valley'}</h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">
                  {language === 'fr' ? 'Plateforme logistique · 116 991 m² SDP · Saint-Sauveur (80) · Partenariat Elcimaï' : 'Logistics platform · 116,991 sqm GFA · Saint-Sauveur (80) FR · Elcimaï partnership'}
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {language === 'fr'
                    ? "Développement industriel grand format sur un terrain de 294 659 m². Vente en État Futur d'Achèvement, en partenariat avec Elcimaï — référence française de la conception logistique haute performance."
                    : "Large-scale industrial development on a 294,659 sqm site. Off-plan sale (VEFA) structure, in partnership with Elcimaï — French reference in high-performance logistics design."}
                </p>
                <div className="border-l-4 border-[#C45A3B] pl-4 py-2 bg-slate-50">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {language === 'fr'
                      ? <><strong className="text-slate-900">Lien stratégique TITAN DC AI :</strong> même savoir-faire structurel — dalle technique grand format, raccordement énergétique haute densité, conformité ICPE — directement transposable aux datacenters AI européens.</>
                      : <><strong className="text-slate-900">Strategic link to TITAN DC AI:</strong> same structural know-how — large-format technical slabs, high-density energy connection, ICPE compliance — directly transposable to European AI datacenters.</>}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm italic mt-12 max-w-3xl mx-auto">
            {language === 'fr'
              ? "Réalisations historiques de l'équipe fondatrice — tertiaire prime, patrimoine classé et infrastructure logistique grand format. Le même savoir-faire — restructuration brownfield, négociation institutionnelle, certification — est aujourd'hui appliqué aux datacenters européens via TITAN DC AI."
              : "Historical track record of the founding team — prime tertiary, listed heritage and large-scale logistics infrastructure. The same know-how — brownfield restructuring, institutional negotiation, certification — is today applied to European datacenters via TITAN DC AI."}
          </p>
        </div>
      </section>
      <section className="py-24 md:py-32 bg-white" data-testid="differentiators-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">
              {language === 'fr' ? 'Ce Qui Nous Distingue' : 'What Sets Us Apart'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Facteurs Différenciants' : 'Differentiating Factors'}
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-50 p-8 border-t-4 border-[#C45A3B] card-hover"
                data-testid={`differentiator-${item.id}`}
              >
                <item.icon className="w-10 h-10 text-[#C45A3B] mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">
              {language === 'fr' ? 'Équipe Fondatrice' : 'Founding Team'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Leadership Expérimenté' : 'Experienced Leadership'}
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white p-8 md:p-10 shadow-sm" 
                data-testid={`founder-card-${member.id}`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-[#1E2A3A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-serif text-2xl">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                    <p className="text-[#C45A3B] font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="space-y-3 border-t border-slate-200 pt-6">
                  {member.highlights.map((highlight, idx) => (
                    <div key={`${member.id}-highlight-${idx}`} className="flex items-center gap-3">
                      <highlight.icon className="w-5 h-5 text-[#C45A3B] flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{highlight.text}</span>
                    </div>
                  ))}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#C45A3B] hover:underline text-sm font-medium mt-4"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Accompanying Team */}
          <div className="mt-16 text-center">
            <div className="bg-white p-10 max-w-2xl mx-auto">
              <p className="text-slate-600 text-lg leading-relaxed">
                {language === 'fr' 
                  ? 'Accompagnés par une équipe de professionnels spécialisés par domaine : immobilier, finance, juridique, technologie et opérations.'
                  : 'Supported by a team of professionals specialized by domain: real estate, finance, legal, technology and operations.'}
              </p>
            </div>
          </div>

          {/* AI-Native Architecture Section */}
          <div className="mt-16">
            <div className="bg-[#1E2A3A] p-10 md:p-12 max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">
                {language === 'fr' ? 'Une architecture native — pas une couche' : 'Native architecture — not a layer'}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                {language === 'fr'
                  ? "FINXIA Capital n'a pas ajouté l'intelligence artificielle à un modèle de gestion traditionnel. Le fonds a été conçu dès le premier jour comme un véhicule AI-native : les 18 agents autonomes de FINXIA ne sont pas des outils d'aide à la décision — ils sont l'infrastructure opérationnelle du fonds, couvrant l'ensemble du cycle d'investissement de la détection de deal à la sortie d'actif."
                  : "FINXIA Capital did not add artificial intelligence to a traditional management model. The vehicle was designed from day one as AI-native: FINXIA's 18 autonomous agents are not decision-support tools — they are the fund's operational infrastructure, covering the full investment lifecycle from deal origination to asset exit."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/european-approach" className="group p-8 bg-slate-50 card-hover border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-3 group-hover:text-[#C45A3B] transition-colors">
                {language === 'fr' ? 'Approche Européenne' : 'European Approach'}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {language === 'fr' 
                  ? 'Découvrez notre stratégie de déploiement sur les marchés français, espagnol et italien.'
                  : 'Discover our deployment strategy across French, Spanish and Italian markets.'}
              </p>
              <span className="text-[#C45A3B] text-sm font-medium inline-flex items-center gap-2">
                {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/contact" className="group p-8 bg-slate-50 card-hover border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-3 group-hover:text-[#C45A3B] transition-colors">
                {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {language === 'fr' 
                  ? 'Investisseurs institutionnels et partenaires stratégiques : contactez notre équipe.'
                  : 'Institutional investors and strategic partners: contact our team.'}
              </p>
              <span className="text-[#C45A3B] text-sm font-medium inline-flex items-center gap-2">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
