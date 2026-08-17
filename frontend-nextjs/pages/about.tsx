import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  CheckCircle, Award, Briefcase, Lightbulb, BarChart3,
  TrendingUp, Shield, Brain, Layers, ArrowRight, FileText, Download
} from 'lucide-react';
import SEO from '@/components/SEO';
import WhitepaperModal from '@/components/WhitepaperModal';

export default function AboutPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

  const differentiators = [
    {
      id: 'hybrid-architecture',
      icon: Layers, 
      title: language === 'fr' ? 'Architecture Hybride' : 'Hybrid Architecture',
      text: language === 'fr'
        ? "Structure multi-poches unique où l'expertise immobilier institutionnel de Jean-Pierre Véron (hôtellerie, résidentiel, logistique) se combine avec le profil tech/finance/IA de Lila Benhammou pour créer un véhicule hybride sans équivalent en Europe."
        : 'Unique multi-pocket structure where Jean-Pierre Véron\'s institutional real estate expertise (hospitality, residential, logistics) combines with Lila Benhammou\'s tech/finance/AI profile to create a hybrid vehicle without equivalent in Europe.'
    },
    {
      id: 'tech-driven',
      icon: Brain, 
      title: language === 'fr' ? 'Avantage Technologique' : 'Tech-Driven Edge',
      text: language === 'fr'
        ? "Discipline opérationnelle augmentée pour le sourcing, l'optimisation de portefeuille et le suivi des risques en temps réel — calibrée pour la transformation brown-to-green de datacenters européens. Dirigée par l'expertise IA et télécoms de Lila Benhammou."
        : 'Augmented operational discipline for deal sourcing, portfolio optimization, and real-time risk monitoring — calibrated for brown-to-green European datacenter transformation. Led by Lila Benhammou\'s AI and telecom expertise.'
    },
    {
      id: 'capital-recycling',
      icon: Shield, 
      title: language === 'fr' ? 'Recyclage du Capital' : 'Capital Recycling',
      text: language === 'fr'
        ? 'Le capital libéré par les sorties d\'actifs est réinvesti dans de nouvelles opportunités, sans dépendance aux cycles de levée externe.'
        : "Capital released from asset exits is reinvested into new opportunities, without reliance on external fundraising cycles."
    },
    {
      id: 'proprietary-discipline',
      icon: TrendingUp, 
      title: language === 'fr' ? 'Discipline Propriétaire' : 'Proprietary Discipline',
      text: language === 'fr'
        ? "Véhicule 100% capital propre — aucune dilution externe, aucun LP tiers. Chaque décision d'investissement est prise par les fondateurs avec leur propre capital engagé. Cette structure garantit un alignement total entre la stratégie long terme et l'exécution opérationnelle."
        : "100% own-equity vehicle — no external dilution, no third-party LP. Every investment decision is taken by the founders with their own committed capital. This structure guarantees full alignment between long-term strategy and operational execution."
    },
  ];

  const teamMembers = [
    {
      id: 'jean-pierre-veron',
      initials: 'JPV',
      image: '/images/jpv-photo.jpeg',
      name: 'Jean-Pierre Véron',
      role: language === 'fr' ? 'Président & Fondateur' : 'Chairman & Founder',
      bio: language === 'fr'
        ? "Professionnel de référence de l'investissement immobilier français et européen. Lead des stratégies Hôtellerie Premium et Résidentiel & Flex Living de FINXIA. Fondateur de Financière Rive Gauche, plateforme d'investissement immobilier paneuropéenne cédée en 2006 à un groupe immobilier européen coté — sortie réalisée deux ans avant la crise immobilière qui a restructuré le secteur. Directeur Général France de Kaufman & Broad pendant 20 ans — sous sa direction, la filiale France a réalisé plusieurs milliards d'euros de chiffre d'affaires cumulé. Président de Financière Norev. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels (hôtellerie, résidentiel, logistique) en Europe. L'ADN immobilier de FINXIA."
        : "Leading figure in French and European real estate investment. Lead of FINXIA's Premium Hospitality and Residential & Flex Living strategies. Founder of Financière Rive Gauche, a pan-European real estate investment platform divested in 2006 to a listed European real estate group — exit executed two years before the real estate crisis that restructured the sector. Managing Director France of Kaufman & Broad for 20 years — under his leadership, the French subsidiary generated several billion euros in cumulative revenue. Chairman of Financière Norev. Over 40 years of full-cycle track record across acquisition, development, restructuring and disposal of institutional real estate assets (hospitality, residential, logistics) across Europe. The real estate DNA of FINXIA.",
      linkedin: 'https://linkedin.com/in/jean-pierre-veron',
      highlights: [
        { icon: Award, text: language === 'fr' ? 'Sortie Financière Rive Gauche (2006, pré-crise)' : 'Financière Rive Gauche exit (2006, pre-crisis)' },
        { icon: Briefcase, text: language === 'fr' ? 'DG France Kaufman & Broad (20 ans)' : 'Managing Director France K&B (20 years)' },
        { icon: CheckCircle, text: language === 'fr' ? '40+ ans track record immobilier' : '40+ years real estate track record' },
      ],
    },
    {
      id: 'lila-benhammou',
      initials: 'LB',
      image: '/images/lbe-photo.jpeg',
      name: 'Lila Benhammou',
      role: language === 'fr' ? 'Co-Fondatrice & Directrice des Investissements (CIO)' : 'Co-Founder & Chief Investment Officer (CIO)',
      bio: language === 'fr'
        ? "Serial entrepreneur et investisseur avec 15+ ans de leadership cross-fonctionnel en asset management alternatif, private equity, infrastructure immobilière et transformation technologique. Lead des stratégies TITAN DC AI et C.CAPITAL de FINXIA Capital. Executive MBA — Kellogg School of Management, Northwestern University (Chicago). Carrière télécoms et IT : Etrali, Orange (France et Business Services), BT Global Services. Expertises acquises : négociation institutionnelle, gestion de comptes globaux, P&L, contrats outsourcing, transformation digitale, services cloud et ITSM. Expérience US : formation américaine, travail avec des clients internationaux sur plusieurs continents. Fondatrice de Humans4Help (H4H), spécialiste IA et automation d'entreprise — sortie réussie en 2023. Architecte de la stratégie TITAN DC AI et de son infrastructure opérationnelle. Expertise télécoms : fibre optique, raccordement HT, infrastructures réseau. Lead author du livre blanc sur l'optimisation énergétique des datacenters européens (2026). Basée entre Paris, Genève et Amsterdam. L'ADN investissement et tech de FINXIA."
        : "Serial entrepreneur and investor with 15+ years of cross-functional leadership in alternative asset management, private equity, real estate infrastructure and technology-driven business transformation. Lead of FINXIA Capital's TITAN DC AI and C.CAPITAL strategies. Executive MBA — Kellogg School of Management, Northwestern University (Chicago). Telecom and IT career: Etrali, Orange (France and Business Services), BT Global Services. Skills acquired: institutional negotiation, global account management, P&L, outsourcing contracts, digital transformation, cloud and ITSM services. US experience: American education, work with international clients across multiple continents. Founder of Humans4Help (H4H), enterprise AI and automation specialist — successful exit in 2023. Architect of the TITAN DC AI strategy and its operational infrastructure. Telecom expertise: fiber optics, HV connection, network infrastructure. Lead author of the white paper on European datacenter energy optimization (2026). Based between Paris, Geneva and Amsterdam. The investment and tech DNA of FINXIA.",
      linkedin: 'https://linkedin.com/in/lilabenhammou',
      highlights: [
        { icon: Lightbulb, text: language === 'fr' ? 'Architecte TITAN DC AI — infrastructure datacenter + télécoms' : 'TITAN DC AI architect — datacenter + telecom' },
        { icon: BarChart3, text: language === 'fr' ? 'Expérience telecoms (Orange, BT) + IT services + IA' : 'Telecom experience (Orange, BT) + IT services + AI' },
        { icon: CheckCircle, text: language === 'fr' ? 'Kellogg MBA (Chicago) + sortie entrepreneuriale H4H' : 'Kellogg MBA (Chicago) + H4H entrepreneurial exit' },
      ],
    },
  ];

const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://finxiacapital.com/about/#jean-pierre-veron",
        "name": "Jean-Pierre Véron",
        "jobTitle": "Chairman & Founder",
        "worksFor": {
          "@type": "Organization",
          "name": "FINXIA Capital",
          "url": "https://finxiacapital.com"
        },
        "alumniOf": [
          {
            "@type": "Organization",
            "name": "Kaufman & Broad"
          },
          {
            "@type": "Organization",
            "name": "Financière Rive Gauche"
          }
        ],
        "knowsAbout": [
          "Real Estate Investment",
          "Premium Hospitality",
          "Residential Investment",
          "European Real Estate"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://finxiacapital.com/about/#lila-benhammou",
        "name": "Lila Benhammou",
        "jobTitle": "Co-Founder & Chief Investment Officer (CIO)",
        "worksFor": {
          "@type": "Organization",
          "name": "FINXIA Capital",
          "url": "https://finxiacapital.com"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Kellogg School of Management, Northwestern University"
          }
        ],
        "knowsAbout": [
          "AI Infrastructure",
          "Datacenter Investment",
          "Telecom Infrastructure",
          "Alternative Asset Management",
          "Green Bond Structuring"
        ]
      }
    ]
  };

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
          "text": "Finxia Capital est un véhicule d'investissement propriétaire structuré en SCSp luxembourgeoise, déployant du capital sur 4 pôles : Datacenter AI Brown-to-Green (TITAN), Hôtellerie Premium, Résidentiel Flex Living et Capital Opportunités. Stratégie phare TITAN DC AI financée par capital propre + dette + Green Bond dédié."
        }
      },
      {
        "@type": "Question",
        "name": "Comment fonctionne l'approche opérationnelle de Finxia Capital ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finxia Capital intègre une discipline opérationnelle augmentée couvrant chaque étape du cycle de vie du portefeuille : sourcing de friches industrielles, suivi de conformité PUE, gestion de dette, optimisation des revenus, suivi opérationnel et optimisation des sorties — le tout calibré pour la transformation brown-to-green de datacenters européens."
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
        title={language === 'fr' ? "Jean-Pierre Véron & Lila Benhammou — Équipe FINXIA Capital SCSp Luxembourg | 40 ans track record immobilier + TITAN DC AI" : "Jean-Pierre Véron & Lila Benhammou — FINXIA Capital Team Luxembourg SCSp | 40-year real estate track record + TITAN DC AI"}
        description={language === 'fr' 
          ? "Jean-Pierre Véron (Fondateur, 40+ ans immobilier — sortie Rive Gauche 2006 pré-crise) & Lila Benhammou (Co-Fondatrice & CIO, MBA Kellogg Northwestern, sortie Humans4Help 2023, finance · IA · telecom) — Architecte de TITAN DC AI, infrastructure datacenter brown-to-green pour l'IA en Europe. FINXIA Capital SCSp Luxembourg."
          : "Jean-Pierre Véron (Founder, 40+ years real estate — Rive Gauche exit 2006 pre-crisis) & Lila Benhammou (Co-Founder & CIO, MBA Kellogg Northwestern, Humans4Help exit 2023, finance · AI · telecom) — Architect of TITAN DC AI, brown-to-green datacenter infrastructure for AI in Europe. FINXIA Capital Luxembourg SCSp."}
        canonical={language === 'fr' ? "https://finxiacapital.com/about/" : "https://finxiacapital.com/en/about/"}
        keywords="Jean-Pierre Véron, Lila Benhammou, FINXIA Capital équipe, gestionnaire alternatif Luxembourg SCSp, TITAN DC AI investissement, datacenter brown-to-green, Green Bond, Kaufman Broad, Financière Rive Gauche, Humans4Help, Kellogg Northwestern MBA"
        faqSchema={faqSchema}
        breadcrumbSchema={breadcrumbSchema}
        structuredData={personSchema}
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
                ? 'Investissement Propriétaire avec Excellence Européenne'
                : 'Proprietary Investment with European Excellence'}
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
                  ? "FINXIA Capital ambitionne de constituer un portefeuille d'actifs réels européens de référence, géré avec une discipline institutionnelle et un avantage technologique distinctif."
                  : "FINXIA Capital aims to build a reference portfolio of European real assets, managed with institutional discipline and a distinctive technological edge."}
              </p>
            </div>
            <div>
              <p className="overline text-[#C45A3B] mb-4">
                {language === 'fr' ? 'Trajectoire 2025-2029' : 'Roadmap 2025-2029'}
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#C45A3B]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C45A3B] font-bold text-[11px] leading-tight text-center">2025<br/>2026</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {language === 'fr' ? 'Fondation & Déploiement' : 'Foundation & Deployment'}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {language === 'fr' 
                        ? "Structuration juridique et fiscale SCSp finalisée. Identification de sites brownfield cibles en France, Espagne, Italie. Ambition : portefeuille multi-sites de datacenters IA souverains, optimisation énergétique certifiée EU Taxonomy 8.1, financement Green Bond ESG."
                        : "SCSp legal and tax structuring finalized. Target brownfield site identification across France, Spain, Italy. Ambition: multi-site portfolio of sovereign AI datacenters, EU Taxonomy 8.1-certified energy optimization, ESG Green Bond financing."}
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
                        ? 'Transformation des actifs acquis, certification énergétique EU Taxonomy, stabilisation des baux NNN long terme, expansion géographique ciblée.'
                        : 'Transformation of acquired assets, EU Taxonomy energy certification, stabilization of long-term NNN leases, targeted geographic expansion.'}
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
                        ? 'Sorties stratégiques sur actifs maturés, capitalisation de la valeur créée, déploiement des cycles suivants.'
                        : 'Strategic exits on matured assets, capitalization of value created, deployment of subsequent cycles.'}
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

          {/* Stat Banner — 3 Md€+ */}
          <div className="mb-20" data-testid="heritage-stat-banner">
            <div className="bg-[#C45A3B]/5 border-l-4 border-[#C45A3B] px-8 py-10 md:py-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:gap-10 gap-4">
                <div className="shrink-0">
                  <p className="font-serif text-5xl md:text-6xl text-[#C45A3B] leading-none">
                    3 Md€<span className="text-3xl md:text-4xl align-top">+</span>
                  </p>
                </div>
                <div className="md:border-l md:border-[#C45A3B]/30 md:pl-8">
                  <p className="text-slate-700 leading-relaxed">
                    {language === 'fr'
                      ? "Chiffre d'affaires cumulé réalisé par l'équipe fondatrice sur cycles complets — acquisition, transformation, cession."
                      : "Cumulative revenue generated by the founding team across full cycles — acquisition, transformation, disposal."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 1 — Le Centorial */}
          <div className="mb-20" data-testid="heritage-block-centorial">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <p className="text-[#C45A3B] text-xs uppercase tracking-wider mb-3">
                  {language === 'fr' ? 'Réalisation N°01' : 'Realization No. 01'}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-2">Le Centorial</h3>
                <p className="text-slate-400 text-xs italic mb-4">
                  {language === 'fr'
                    ? 'Rôle : Jean-Pierre Véron — Investisseur et pilote de la restructuration'
                    : 'Role: Jean-Pierre Véron — Investor and restructuring lead'}
                </p>
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
              <div className="lg:col-span-7 grid grid-cols-1 gap-3 lg:order-1 order-2">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 group">
                  <img src="/images/coeur-defense-2.jpg" loading="lazy"
                    alt={language === 'fr' ? "Cœur Défense — Façade emblématique, Paris La Défense" : "Cœur Défense — Iconic façade, Paris La Défense"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 order-1">
                <p className="text-[#C45A3B] text-xs uppercase tracking-wider mb-3">
                  {language === 'fr' ? 'Réalisation N°02' : 'Realization No. 02'}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-2">Cœur Défense</h3>
                <p className="text-slate-400 text-xs italic mb-4">
                  {language === 'fr'
                    ? 'Rôle : Jean-Pierre Véron — Intervenant sur le repositionnement (période DG France, Kaufman & Broad)'
                    : 'Role: Jean-Pierre Véron — Contributor on repositioning (during Managing Director France tenure at Kaufman & Broad)'}
                </p>
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
                <h3 className="font-serif text-2xl md:text-3xl mb-2">Washington Plaza</h3>
                <p className="text-slate-400 text-xs italic mb-4">
                  {language === 'fr'
                    ? 'Rôle : Jean-Pierre Véron — Investisseur et repositionnement stratégique'
                    : 'Role: Jean-Pierre Véron — Investor and strategic repositioning'}
                </p>
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
              <div className="lg:col-span-7 grid grid-cols-2 gap-3">
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 group">
                  <img src="/images/washington-plaza-2.jpg" loading="lazy"
                    alt={language === 'fr' ? "Washington Plaza — Façade Art Déco signée, ex-Shell Petroleum Paris" : "Washington Plaza — Signed Art Deco façade, ex-Shell Petroleum Paris"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 group">
                  <img src="/images/washington-plaza.jpg" loading="lazy"
                    alt={language === 'fr' ? "Washington Plaza — Hall d'accueil intérieur design contemporain" : "Washington Plaza — Contemporary design entrance lobby"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                <h3 className="font-serif text-2xl md:text-3xl mb-2">{language === 'fr' ? 'Vallée du Camincourt' : 'Camincourt Valley'}</h3>
                <p className="text-slate-400 text-xs italic mb-4">
                  {language === 'fr'
                    ? 'Rôle : Jean-Pierre Véron — Co-promoteur via Financière Rive Gauche, partenariat Elcimaï'
                    : 'Role: Jean-Pierre Véron — Co-developer via Financière Rive Gauche, Elcimaï partnership'}
                </p>
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


      {/* Campus IA Formation */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="campus-formation-about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{language === 'fr' ? 'Impact Territorial' : 'Local Impact'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Campus IA Formation' : 'AI Training Campuses'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {language === 'fr'
                ? "FINXIA Capital structure des partenariats avec des formateurs et opérateurs locaux pour former des talents techniques là où nos datacenters s'implantent."
                : "FINXIA Capital builds partnerships with local trainers and operators to develop technical talent where our datacenters are located."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">{language === 'fr' ? 'Formation immersive' : 'Immersive training'}</h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? "Via des partenaires formateurs et opérateurs locaux, des cursus pratiques sont dispensés sur équipement réel — serveurs, racks, câblage, UPS — en immersion sur les sites TITAN DC. Jeunes de 18 à 25 ans, sans diplôme requis."
                  : "Through local training and operator partners, practical courses are delivered on real equipment — servers, racks, cabling, UPS — immersed on TITAN DC sites. Young people aged 18-25, no diploma required."}
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">{language === 'fr' ? 'Insertion professionnelle' : 'Professional integration'}</h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? "Les partenaires opérateurs qui louent les sites garantissent l'embauche des talents formés. Objectif : 70%+ d'emploi à 6 mois. Les projets DC s'implantent sur des territoires en transition — les emplois doivent rester sur ces territoires."
                  : "Operator partners who lease the sites guarantee hiring of trained talent. Target: 70%+ employment at 6 months. DC projects are located in transitioning territories — jobs must stay in those territories."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepaper — Research Publication Download */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200" data-testid="whitepaper-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="w-20 h-20 bg-[#C45A3B]/10 border-l-4 border-[#C45A3B] flex items-center justify-center">
                <FileText className="w-10 h-10 text-[#C45A3B]" />
              </div>
            </div>
            <div className="lg:col-span-10">
              <p className="overline mb-3 text-[#C45A3B]">
                {language === 'fr' ? 'Publication de Recherche — FINXIA Capital' : 'Research Publication — FINXIA Capital'}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-slate-900">
                {language === 'fr'
                  ? 'Optimisation Énergétique des Datacenters Européens sous la Directive EED'
                  : 'European Datacenter Energy Optimization under the EED Directive'}
              </h2>
              <p className="text-slate-500 text-sm mb-5 font-medium">
                {language === 'fr' ? 'Livre Blanc — Avril 2026 · 60+ pages' : 'White Paper — April 2026 · 60+ pages'}
              </p>
              <p className="text-slate-700 leading-relaxed mb-6 max-w-3xl">
                {language === 'fr'
                  ? "Analyse réglementaire complète de la Directive Efficacité Énergétique (Art. 12 et 21), cadre IPMVP, anatomie du PUE, stratégies d'optimisation certifiables et perspective investisseur. Destiné aux directeurs techniques, responsables énergie et équipes d'investissement infrastructure."
                  : "Complete regulatory analysis of the Energy Efficiency Directive (Art. 12 and 21), IPMVP framework, PUE anatomy, certifiable optimization strategies and investor perspective. Designed for technical directors, energy managers and infrastructure investment teams."}
              </p>
              <button
                type="button"
                onClick={() => setWhitepaperOpen(true)}
                data-testid="whitepaper-cta-about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C45A3B] text-white font-medium hover:bg-[#A04A2F] transition-colors"
              >
                <Download className="w-4 h-4" />
                {language === 'fr' ? 'Télécharger le Livre Blanc' : 'Download the White Paper'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Double Culture Real Estate × IA */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="double-culture-about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{language === 'fr' ? 'Notre Différence' : 'Our Edge'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Double Culture Real Estate × IA' : 'Double Culture: Real Estate × AI'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {language === 'fr'
                ? "Les seuls à comprendre le métier de nos clients. 40 ans d'expertise immobilière institutionnelle + expertise opérationnelle en IA + background télécoms (fibre, HT, réseaux). Nous parlons le langage des ingénieurs réseau et des banques d'investissement."
                : "The only ones who truly understand our clients' business. 40 years of institutional real estate expertise + operational AI expertise + telecom background (fiber, HV, networks). We speak the language of network engineers and investment banks."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">
                {language === 'fr' ? 'Nous savons ce que demande un hyperscaler' : 'We know what a hyperscaler demands'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? "Nous savons pourquoi un hyperscaler exige un PUE < 1,2 ET une structure juridique luxembourgeoise. Nous comprenons la différence entre un raccordement HT et une ligne fibre — parce que nous avons structuré les deux."
                  : "We know why a hyperscaler demands PUE < 1.2 AND a Luxembourg legal structure. We understand the difference between an HV connection and a fiber line — because we have structured both."}
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">
                {language === 'fr' ? 'Infrastructure avant le code' : 'Infrastructure before code'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? "Nous ne déployons pas de logiciels. Nous raccordons des câbles HT, certifions des dalles techniques, structurons des Green Bonds. L'IA est un levier opérationnel, pas un produit fini."
                  : "We don't deploy software. We connect HV cables, certify technical slabs, structure Green Bonds. AI is an operational lever, not a finished product."}
              </p>
            </div>
          </div>
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
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-[#C45A3B]/30"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-[#1E2A3A] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-serif text-2xl">{member.initials}</span>
                    </div>
                  )}
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
                {language === 'fr' ? 'Discipline Opérationnelle Augmentée' : 'Augmented Operational Discipline'}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                {language === 'fr'
                  ? "FINXIA Capital intègre une discipline opérationnelle augmentée à chaque étape du cycle d'investissement — du sourcing de friches industrielles à la certification PUE, en passant par le suivi de dette et l'optimisation des sorties. Les outils propriétaires de FINXIA couvrent l'ensemble du cycle : identification d'opportunités brownfield, modélisation financière, suivi de performance réglementaire (EED, EU Taxonomy), gestion des risques ESG et structuration de Green Bonds."
                  : "FINXIA Capital integrates augmented operational discipline at every stage of the investment cycle — from sourcing industrial brownfields to PUE certification, through debt monitoring and exit optimization. FINXIA's proprietary tools cover the full cycle: brownfield opportunity identification, financial modeling, regulatory performance tracking (EED, EU Taxonomy), ESG risk management and Green Bond structuring."}
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
                  ? 'Partenaires opérationnels, institutionnels et co-investisseurs sur opérations ciblées : contactez notre équipe.'
                  : 'Operational partners, institutional partners and co-investors on targeted transactions: contact our team.'}
              </p>
              <span className="text-[#C45A3B] text-sm font-medium inline-flex items-center gap-2">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <WhitepaperModal isOpen={whitepaperOpen} onClose={() => setWhitepaperOpen(false)} />
    </div>
  );
}
