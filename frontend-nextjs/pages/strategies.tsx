import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Server, Building, Home, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

export default function StrategiesPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

  const strategies = [
    {
      id: 'titan-datacenter',
      icon: Server,
      num: '01',
      subtitle: language === 'fr' ? 'Stratégie brownfield · Campus 40 MW · EU Taxonomy 8.1' : 'Brownfield strategy · 40 MW Campus · EU Taxonomy 8.1',
      title: language === 'fr' ? 'TITAN DC AI — Datacenters IA Souverains Européens' : 'TITAN DC AI — Sovereign European AI Datacenters',
      headline: language === 'fr' 
        ? 'L\'infrastructure de l\'IA a besoin d\'un socle. Nous le transformons.'
        : 'AI infrastructure needs a foundation. We transform it.',
      thesis: language === 'fr'
        ? <><strong>Stratégie portée par Lila Benhammou</strong> — CIO & architecte de l'infrastructure TITAN DC AI. <br/><br/>L'Europe dispose d'un stock massif d'actifs industriels sous-valorisés — friches manufacturières, anciens sites auto, entrepôts de première génération — dont les caractéristiques structurelles (dalle technique, raccordement électrique haute densité, emprise foncière) les rendent directement convertibles en datacenters IA de nouvelle génération. <br/><br/><strong>Le défi énergétique est central</strong> : RTE, le gestionnaire de réseau de transport français, a identifié près de <strong>18 GW de demande réservée aux datacenters</strong> sur le territoire français, dont seulement ~15% sont aujourd'hui concrétisés. La file d'attente de raccordement bloque 50% des nouvelles demandes. En 2025, l'État français a identifié 5 sites « fast track » pour accélérer les projets stratégiques. TITAN DC AI cible précisément des sites brownfield <strong>déjà raccordés</strong>, contournant cette contrainte structurelle. <br/><br/><strong>La souveraineté numérique est un impératif</strong> : 92% des données de l'Occident sont stockées sur le sol américain. L'IA générative, la défense, la santé et les administrations publiques européennes ont besoin d'infrastructure de calcul souveraine. La France dispose d'un atout décisif : un mix électrique <strong>95% décarbonisé</strong> et exportant 20% de sa production — ce qui fait de son territoire une destination de choix pour les hyperscalers en quête d'image carbone. TITAN DC AI transforme cette énergie disponible en infrastructure IA certifiée, capturant la prime de souveraineté et de décarbonation.</>
        : <><strong>Strategy led by Lila Benhammou</strong> — CIO & architect of TITAN DC AI infrastructure. <br/><br/>Europe holds a massive stock of undervalued industrial assets — manufacturing brownfields, former automotive sites, first-generation warehouses — whose structural characteristics (technical slabs, high-density electrical connection, land footprint) make them directly convertible into next-generation AI datacenters. <br/><br/><strong>The energy challenge is central</strong>: RTE, the French transmission system operator, has identified nearly <strong>18 GW of datacenter demand</strong> on French territory, of which only ~15% is currently realized. The connection queue blocks 50% of new requests. In 2025, the French government identified 5 "fast track" sites to accelerate strategic projects. TITAN DC AI specifically targets <strong>already-connected</strong> brownfield sites, bypassing this structural constraint. <br/><br/><strong>Digital sovereignty is imperative</strong>: 92% of Western data is stored on US soil. Generative AI, defense, healthcare, and European public administrations need sovereign computing infrastructure. France has a decisive advantage: an electricity mix that is <strong>95% decarbonized</strong> and exports 20% of its production — making its territory a destination of choice for hyperscalers seeking carbon reputation. TITAN DC AI transforms this available energy into certified AI infrastructure, capturing the sovereignty and decarbonization premium.</>,
      approach: [
        language === 'fr' ? 'Cible d\'actifs : sites industriels brownfield 20-70 MW IT en France, Espagne, Italie et Europe du Nord' : 'Target assets: 20-70 MW IT brownfield industrial sites in France, Spain, Italy and Northern Europe',
        language === 'fr' ? 'Avantage coût : entrée significativement moins chère au MW que le greenfield, délais de mise en service réduits' : 'Cost advantage: significantly cheaper entry per MW than greenfield, reduced commissioning timelines',
        language === 'fr' ? 'Avantage réseau : les sites brownfield sont déjà raccordés au réseau HT — contournement de la file d\'attente RTE qui bloque 50% des nouvelles demandes de raccordement datacenter en France' : 'Grid advantage: brownfield sites are already connected to the HV grid — bypassing the RTE queue which blocks 50% of new datacenter connection requests in France',
        language === 'fr' ? 'Clients : opérateurs cloud tier-2 européens, acteurs IA inférence, administrations publiques, souveraineté des données' : 'Tenants: European tier-2 cloud operators, AI inference players, public administrations, data sovereignty',
        language === 'fr' ? 'Modèle cible : bail NNN long terme (10-15 ans) · engagement locataire recherché avant ou au commissioning · revenu contractualisé conditionné à la conformité technique' : 'Target model: long-term NNN lease (10-15 years) · tenant commitment sought before or at commissioning · contractualized revenue conditioned on technical compliance',
        language === 'fr' ? 'Efficacité énergétique : protocole IPMVP, PUE ciblé conforme EU Taxonomy 8.1 et Directive EED (PUE ≤ 1,30 d\'ici 2027), certification indépendante prévue 2027' : 'Energy efficiency: IPMVP protocol, PUE target compliant with EU Taxonomy 8.1 and EED Directive (PUE ≤ 1.30 by 2027), independent certification planned for 2027',
        language === 'fr' ? 'Financement : capital propre + dette senior amortissante + Green Bond ESG ICMA conditionné aux objectifs PUE' : 'Financing: own equity + senior amortizing debt + ICMA ESG Green Bond conditioned on PUE targets',
      ],
      markets: language === 'fr' ? 'France · Espagne · Italie · Europe du Nord' : 'France · Spain · Italy · Northern Europe',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fm=webp',
    },
    {
      id: 'hospitality-premium',
      icon: Building,
      num: '02',
      subtitle: language === 'fr' ? 'Rendement & Rotation' : 'Yield & Rotation',
      title: language === 'fr' ? 'Hôtellerie Premium' : 'Premium Hospitality',
      headline: language === 'fr'
        ? 'La résilience structurelle d\'un actif, l\'intelligence d\'un opérateur.'
        : 'The structural resilience of an asset, the intelligence of an operator.',
      thesis: language === 'fr'
        ? <><strong>Stratégie portée par Jean-Pierre Véron</strong> — Président, 40+ ans d'immobilier institutionnel. <br/><br/>Le segment hôtelier premium urbain génère des RevPAR soutenus par la demande internationale. <strong>Track record brownfield de JPV</strong> — expertise directement transposable au repositionnement hôtelier : <strong>Centorial</strong> (ancien siège Crédit Lyonnais du XIXe siècle, 47 000 m², Paris IXe — restructuration lourde avec façade haussmannienne et verrière Eiffel classées monuments historiques, repositionné en plateforme tertiaire multi-locataires) ; <strong>Coeur Défense</strong> (opération institutionnelle sur l'un des plus grands ensembles de bureaux d'Europe, 350 000+ m², Paris La Défense — repositionnement en plateforme multi-locataires premium avec espaces communs et services intégrés) ; <strong>Washington Plaza</strong> (ex-siège Shell Petroleum, Paris VIIIe — repositionnement d'un siège corporate emblématique des années 1970 en plateforme tertiaire institutionnelle premium). <br/><br/><strong>La méthode Finxia</strong> : acquisition d'actifs hôteliers 4-5 étoiles sous-optimisés dans les métropoles tier-1 européennes, repositionnement de marque en partenariat avec des opérateurs de référence (Marriott, Accor, Hilton), et stabilisation du RevPAR sur 24-36 mois avant rotation sélective. Cible de rendement : performance value-add supérieure aux standards institutionnels européens, profil d'exploitation aligné core-plus. <br/><br/>Le marché hôtelier européen premium affiche un RevPAR 2025 en hausse de +8,2% vs 2019 (pré-COVID), porté par le tourisme d'affaires international et la demande MICE. Paris, Barcelone et Madrid concentrent 60% des transactions hôtelières institutionnelles &gt;50M€ en Europe.</>
        : <><strong>Strategy led by Jean-Pierre Véron</strong> — Chairman, 40+ years of institutional real estate. <br/><br/>The urban premium hotel segment generates RevPAR supported by international demand. <strong>JPV brownfield track record</strong> — expertise directly transposable to hotel repositioning: <strong>Centorial</strong> (former Crédit Lyonnais HQ from the 19th century, 47,000 sqm, Paris 9th arr. — heavy restructuring with Haussmannian façade and Eiffel glass dome listed as historical monuments, repositioned into a multi-tenant institutional tertiary platform); <strong>Coeur Défense</strong> (institutional operation on one of Europe's largest office complexes, 350,000+ sqm, Paris La Défense — repositioned into a premium multi-tenant platform with common areas and integrated services); <strong>Washington Plaza</strong> (former Shell Petroleum HQ, Paris 8th arr. — repositioning of an iconic 1970s corporate headquarters into a premium institutional tertiary platform). <br/><br/><strong>The Finxia method</strong>: acquisition of under-optimized 4-5 star hotel assets in European tier-1 metropolises, brand repositioning in partnership with reference operators (Marriott, Accor, Hilton), and RevPAR stabilization over 24-36 months before selective rotation. Target return: value-add performance above European institutional benchmarks, core-plus operating profile. <br/><br/>The European premium hotel market posted 2025 RevPAR up +8.2% vs 2019 (pre-COVID), driven by international business travel and MICE demand. Paris, Barcelona and Madrid concentrate 60% of institutional hotel transactions &gt;€50M in Europe.</>,
      approach: [
        language === 'fr' ? 'Cible : hôtels 4-5 étoiles sous-optimisés dans les métropoles tier-1 (Paris, Barcelone, Madrid, Milan) avec potentiel de repositionnement de marque' : 'Target: under-optimized 4-5 star hotels in tier-1 metropolises (Paris, Barcelona, Madrid, Milan) with brand repositioning potential',
        language === 'fr' ? 'Track record JPV : Centorial (47 000 m², restructuration patrimoniale classée), Coeur Défense (350 000+ m² bureaux, repositionnement multi-locataires), Washington Plaza (ex-Shell, repositionnement tertiaire premium)' : 'JPV track record: Centorial (47,000 sqm, listed heritage restructuring), Coeur Défense (350,000+ sqm offices, multi-tenant repositioning), Washington Plaza (ex-Shell, premium tertiary repositioning)',
        language === 'fr' ? 'Partenariats opérateurs : Marriott, Accor, Hilton — repositionnement de marque et optimisation du RevPAR sur 24-36 mois' : 'Operator partnerships: Marriott, Accor, Hilton — brand repositioning and RevPAR optimization over 24-36 months',
        language === 'fr' ? 'Méthode : acquisition value-add, stabilisation opérationnelle, rotation sélective vers investisseurs Core ou REITs hôteliers' : 'Method: value-add acquisition, operational stabilization, selective rotation to Core investors or hotel REITs',
        language === 'fr' ? 'Rendement cible : performance value-add supérieure aux standards institutionnels européens' : 'Target return: value-add performance above European institutional benchmarks',
        language === 'fr' ? 'Marché : RevPAR européen premium +8,2% vs 2019, 60% des transactions >50M€ concentrées à Paris/Barcelone/Madrid' : 'Market: European premium RevPAR +8.2% vs 2019, 60% of transactions >€50M concentrated in Paris/Barcelona/Madrid',
      ],
      markets: 'Paris · Barcelone · Madrid · Milan',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80&fm=webp',
    },
    {
      id: 'residential-flex',
      icon: Home,
      num: '03',
      subtitle: language === 'fr' ? 'Plateforme Urbaine' : 'Urban Platform',
      title: language === 'fr' ? 'Résidentiel & Flex Living' : 'Residential & Flex Living',
      headline: language === 'fr'
        ? 'La ville évolue. Le logement suit.'
        : 'The city evolves. Housing follows.',
      thesis: language === 'fr'
        ? <><strong>Stratégie portée par Jean-Pierre Véron</strong> — Président, 40+ ans d'immobilier institutionnel. <br/><br/>Coliving, résidences services, build-to-rent — la demande dépasse structurellement l'offre dans les métropoles européennes. <strong>Track record de structuration grand format de JPV</strong> — expertise transposable au résidentiel et au flex living : <strong>Vallée du Camincourt</strong> (plateforme logistique de 116 991 m² SDP sur un terrain de 294 659 m² à Saint-Sauveur (80), développée en partenariat avec Elcimaï — référence française de la conception logistique haute performance — structure VEFA). Ce même savoir-faire structurel — dalle technique grand format, raccordement énergétique haute densité, conformité ICPE — est directement transposable aux datacenters AI européens via TITAN DC AI et au résidentiel flex via la structuration de plateformes opérées. <br/><br/><strong>Le déficit structurel est massif</strong> : l'Europe manque 4,5 millions de logements selon la Commission européenne. Dans les métropoles tier-1, le taux d'occupation des résidences services dépasse 92% et les loyers build-to-rent progressent de +4,8% par an. Finxia cible des actifs de 80-300 unités, opérés par des partenaires spécialisés (coliving, PBSA, seniors), avec des sorties calibrées vers des investisseurs Core à horizon 5-7 ans. <br/><br/>Cible : création de valeur opérationnelle (optimisation des surfaces communes, digitalisation de la gestion locative, montée en gamme des prestations) et effet de portefeuille à la cession, pour une performance alignée sur les standards institutionnels européens.</>
        : <><strong>Strategy led by Jean-Pierre Véron</strong> — Chairman, 40+ years of institutional real estate. <br/><br/>Coliving, serviced residences, build-to-rent — demand structurally exceeds supply in European metropolises. <strong>JPV large-scale structuring track record</strong> — expertise transposable to residential and flex living: <strong>Vallée du Camincourt</strong> (logistics platform of 116,991 sqm GFA on a 294,659 sqm site in Saint-Sauveur (80), developed in partnership with Elcimaï — French reference in high-performance logistics design — off-plan/VEFA structure). This same structural know-how — large-format technical slabs, high-density energy connection, ICPE compliance — is directly transposable to European AI datacenters via TITAN DC AI and to flex residential via the structuring of operated platforms. <br/><br/><strong>The structural deficit is massive</strong>: Europe lacks 4.5 million housing units according to the European Commission. In tier-1 metropolises, serviced residence occupancy rates exceed 92% and build-to-rent rents grow by +4.8% annually. Finxia targets 80-300 unit assets, operated by specialized partners (coliving, PBSA, senior living), with exits calibrated for Core investors on a 5-7 year horizon. <br/><br/>Target: operational value creation (optimization of common areas, digitization of rental management, upgrading of services) and portfolio effect at exit, for performance aligned with European institutional benchmarks.</>,
      approach: [
        language === 'fr' ? 'Cible : actifs résidentiels 80-300 unités en métropoles tier-1 européennes (coliving, PBSA, build-to-rent, senior living)' : 'Target: residential assets of 80-300 units in European tier-1 metropolises (coliving, PBSA, build-to-rent, senior living)',
        language === 'fr' ? 'Track record JPV : Vallée du Camincourt (116 991 m² logistique, partenariat Elcimaï, structure VEFA) — savoir-faire structuration grand format transposable' : 'JPV track record: Vallée du Camincourt (116,991 sqm logistics, Elcimaï partnership, off-plan/VEFA structure) — large-scale structuring know-how transposable',
        language === 'fr' ? 'Partenariats opérateurs spécialisés : gestion locative digitale, optimisation des surfaces communes, montée en gamme des services' : 'Partnerships with specialized operators: digital rental management, optimization of common areas, upgrading of services',
        language === 'fr' ? 'Dynamique de marché : déficit de 4,5M logements en Europe, taux d\'occupation résidences services >92%, loyers BTR +4,8%/an' : 'Market dynamic: 4.5M housing deficit in Europe, serviced residence occupancy >92%, BTR rents +4.8%/year',
        language === 'fr' ? 'Sorties calibrées : bloc vers investisseurs Core à horizon 5-7 ans, effet de portefeuille et prime de liquidité' : 'Calibrated exits: block sales to Core investors on 5-7 year horizon, portfolio effect and liquidity premium',
        language === 'fr' ? 'Rendement cible : création de valeur opérationnelle et effet de portefeuille, aligné sur les standards institutionnels européens' : 'Target return: operational value creation and portfolio effect, aligned with European institutional benchmarks',
      ],
      markets: language === 'fr' ? 'Grandes Métropoles Européennes' : 'Major European Metropolises',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&fm=webp',
    },
    {
      id: 'capital-opportunities',
      icon: TrendingUp,
      num: '04',
      subtitle: 'C.CAPITAL',
      title: 'Capital Opportunités',
      headline: language === 'fr'
        ? 'Là où la visibilité sur l\'actif crée l\'avantage informationnel.'
        : 'Where asset visibility creates informational advantage.',
      thesis: language === 'fr'
        ? <><strong>Stratégie portée par Lila Benhammou</strong> — CIO, expertise finance × IA. <br/><br/>Late-stage, secondaires décotés, situations spéciales. Une approche ultra-sélective — réservée aux opportunités où notre expertise sectorielle nous confère un avantage décisif. <strong>Thèses actuelles</strong> : (1) secondaires d'infrastructure IA décotés de 25-40% par rapport aux last rounds, suite au resserrement des LP sur les actifs illiquides ; (2) situations spéciales dans l'immobilier de télécoms (tours, fibre) où la consolidation sectorielle crée des primes de contrôle ; (3) financements late-stage de scale-ups européennes en datacenter edge et cloud souverain, segments où notre réseau opérationnel TITAN DC AI nous donne une visibilité informationnelle unique. <br/><br/>Taux de conversion volontairement bas (&lt;5%). Conviction maximale sur chaque position. Ticket moyen : 2-10M€.</>
        : <><strong>Strategy led by Lila Benhammou</strong> — CIO, finance × AI expertise. <br/><br/>Late-stage, discounted secondaries, special situations. An ultra-selective approach — reserved for opportunities where our sector expertise confers a decisive advantage. <strong>Current theses</strong>: (1) AI infrastructure secondaries discounted 25-40% vs last rounds, following LP tightening on illiquid assets; (2) special situations in telecom real estate (towers, fiber) where sector consolidation creates control premiums; (3) late-stage financing of European scale-ups in edge datacenter and sovereign cloud, segments where our TITAN DC AI operational network gives us unique informational visibility. <br/><br/>Deliberately low conversion rate (&lt;5%). Maximum conviction on each position. Average ticket: €2-10M.</>,
      approach: [
        language === 'fr' ? 'Focus : secondaires d\'infrastructure IA décotés 25-40% vs last rounds, resserrement LP sur illiquide' : 'Focus: AI infrastructure secondaries discounted 25-40% vs last rounds, LP tightening on illiquid assets',
        language === 'fr' ? 'Situations spéciales immobilier télécoms : tours, fibre — consolidation sectorielle créant des primes de contrôle' : 'Telecom real estate special situations: towers, fiber — sector consolidation creating control premiums',
        language === 'fr' ? 'Late-stage datacenter edge & cloud souverain : visibilité TITAN DC AI comme avantage informationnel' : 'Late-stage edge datacenter & sovereign cloud: TITAN DC AI visibility as informational advantage',
        language === 'fr' ? 'Discipline : taux de conversion <5%, conviction maximale, ticket moyen 2-10M€' : 'Discipline: <5% conversion rate, maximum conviction, average ticket €2-10M',
      ],
      markets: 'Late-Stage · Secondaires · Special Situations',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fm=webp',
    },
  ];

  // FAQ Schema for Strategies page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que la stratégie TITAN ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TITAN est la stratégie phare de Finxia Capital : acquisition et transformation de datacenters en infrastructure IA décarbonée, financée via un Green Bond ESG, ciblant des locataires hyperscaler en bail long terme."
        }
      },
      {
        "@type": "Question",
        "name": "Comment Finxia Capital finance-t-elle la stratégie TITAN ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TITAN se finance via un Green Bond ESG dédié, instrument calibré pour cette transformation — structuré selon les principes ICMA Green Bond et la Taxonomie Verte Européenne, avec nos partenaires bancaires, sans dilution equity."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles sont les 4 stratégies d'investissement de Finxia Capital ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finxia Capital déploie 4 stratégies : TITAN Datacenter AI Brown-to-Green, Hôtellerie Premium, Résidentiel Flex Living (coliving, PBSA, build-to-rent), et C.Capital (late-stage, secondaires décotés, situations spéciales)."
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
        "name": language === 'fr' ? "Stratégies" : "Strategies",
        "item": "https://finxiacapital.com/strategies"
      }
    ]
  };

  return (
    <div data-testid="strategies-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Stratégies — TITAN, Hôtellerie, Résidentiel, C.Capital" : "Strategies — TITAN, Hospitality, Residential, C.Capital"}
        description={language === 'fr'
          ? "Découvrez les 4 stratégies de FINXIA Capital : TITAN DC AI (datacenter brown-to-green), Hôtellerie Premium, Résidentiel Urbain Flex et C.CAPITAL."
          : "Discover FINXIA Capital's 4 strategies: TITAN DC AI (datacenter brown-to-green transformation), Premium Hospitality, Urban Residential Flex, and C.CAPITAL."}
        canonical={language === 'fr' ? "https://finxiacapital.com/strategies/" : "https://finxiacapital.com/en/strategies/"}
        keywords="datacenter AI brown to green, hôtellerie premium Europe, coliving investissement, late-stage secondaires Luxembourg, Green Bond ESG ICMA, hyperscaler lease"
        faqSchema={faqSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/strategies/"
        hreflangEn="https://finxiacapital.com/en/strategies/"
        hreflangDefault="https://finxiacapital.com/strategies/"
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">
              {language === 'fr' ? 'Nos Stratégies' : 'Our Strategies'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' 
                ? 'Quatre Pôles de Création de Valeur'
                : 'Four Value Creation Poles'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'Une discipline d\'exécution institutionnelle. Une architecture opérationnelle calibrée pour la transformation brown-to-green de datacenters européens.'
                : 'Institutional execution discipline. An operational architecture calibrated for brown-to-green European datacenter transformation.'}
            </p>
          </div>
        </div>
      </section>

      {/* SEO-Rich Context Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-700 leading-relaxed mb-6">
              {language === 'fr' 
                ? "FINXIA Capital déploie ses stratégies d'investissement sur quatre pôles complémentaires, avec une approche institutionnelle rigoureuse. Notre stratégie phare, TITAN Datacenter AI, cible la transformation brown-to-green d'infrastructures datacenters en Europe, positionnées pour répondre à la demande croissante des hyperscalers en quête de baux long terme et d'infrastructure décarbonée." 
                : "FINXIA Capital deploys its investment strategies across four complementary pillars, with a rigorous institutional approach. Our flagship strategy, TITAN Datacenter AI, targets the brown-to-green transformation of datacenter infrastructure in Europe, positioned to meet the growing demand from hyperscalers seeking long-term leases and decarbonized infrastructure."}
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              {language === 'fr'
                ? "Cette transformation s'appuie sur un financement structuré via Green Bond ESG aligné ICMA Green Bond Principles et Taxonomie Verte Européenne (Règlement 2020/852), permettant de financer la décarbonation sans dilution du capital propriétaire. L'approche combine acquisition de campus existants, déploiement d'infrastructure énergétique de rupture (refroidissement haute efficacité, récupération chaleur, production on-site), et certification ESG pour créer une prime de sortie significative."
                : "This transformation relies on structured financing via ESG Green Bonds aligned with ICMA Green Bond Principles and the EU Taxonomy (Regulation 2020/852), enabling decarbonization financing without equity dilution. The approach combines acquisition of existing campuses, deployment of breakthrough energy infrastructure (high-efficiency cooling, heat recovery, on-site production), and ESG certification to create significant exit premiums."}
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              {language === 'fr'
                ? "En parallèle, nos stratégies Hôtellerie Premium et Résidentiel Flex Living (coliving, PBSA, build-to-rent) capitalisent sur la dynamique structurelle de la demande urbaine européenne, avec des sorties calibrées vers investisseurs Core. Le pôle C.Capital cible des opportunités late-stage et secondaires décotés, avec un taux de conversion volontairement inférieur à 5 % pour maximiser la conviction sur chaque position."
                : "In parallel, our Premium Hospitality and Flex Living Residential strategies (coliving, PBSA, build-to-rent) capitalize on the structural dynamics of European urban demand, with exits calibrated for Core investors. The C.Capital division targets late-stage and discounted secondary opportunities, with a deliberately sub-5% conversion rate to maximize conviction on each position."}
            </p>
            <p className="text-slate-700 leading-relaxed">
              {language === 'fr'
                ? "Structurée en SCSp Luxembourg avec capital propre et sans levée externe, FINXIA Capital allie discipline institutionnelle, expertise sectorielle approfondie (immobilier institutionnel, télécoms, IA) et financement structuré (Green Bond + dette) pour créer de la valeur durable sur les actifs réels européens."
                : "Structured as a Luxembourg SCSp with proprietary capital and no external fundraising, FINXIA Capital combines institutional discipline, deep sector expertise (institutional real estate, telecoms, AI) and structured financing (Green Bond + debt) to create sustainable value in European real assets."}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Overview Table */}
      <section className="py-16 bg-slate-50" data-testid="portfolio-overview-table">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              {language === 'fr' ? "Vue d'ensemble du portefeuille" : 'Portfolio Overview'}
            </h2>
            <div className="w-16 h-1 bg-[#C45A3B] mx-auto" />
          </div>
          <div className="overflow-x-auto bg-white border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-[#1E2A3A] text-white">
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">{language === 'fr' ? 'Pôle' : 'Pillar'}</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">{language === 'fr' ? 'Rôle dans FINXIA' : 'Role within FINXIA'}</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">{language === 'fr' ? 'Profil' : 'Profile'}</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">{language === 'fr' ? 'Horizon' : 'Horizon'}</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">{language === 'fr' ? 'Univers' : 'Universe'}</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-700">
                <tr className="border-t border-slate-200">
                  <td className="px-5 py-4 font-semibold text-[#1E2A3A]">TITAN DC AI</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Infrastructure core IA' : 'Core AI infrastructure'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Rendement + croissance long terme' : 'Yield + long-term growth'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? '5–7 ans' : '5–7 years'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Datacenters brownfield EU' : 'EU brownfield datacenters'}</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50/50">
                  <td className="px-5 py-4 font-semibold text-[#1E2A3A]">{language === 'fr' ? 'Hôtellerie Premium' : 'Premium Hospitality'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Cash-flow récurrent & rotation sélective' : 'Recurring cash-flow & selective rotation'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Rendement courant' : 'Current yield'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? '4–6 ans' : '4–6 years'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Hôtels urbains EU 4–5★' : '4–5★ EU urban hotels'}</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-5 py-4 font-semibold text-[#1E2A3A]">{language === 'fr' ? 'Résidentiel & Flex Living' : 'Residential & Flex Living'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Plateforme opérée, sorties en bloc' : 'Operated platform, block exits'}</td>
                  <td className="px-5 py-4">Value-add</td>
                  <td className="px-5 py-4">{language === 'fr' ? '5–8 ans' : '5–8 years'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Résidentiel flexible grandes métropoles' : 'Flexible residential, major metros'}</td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50/50">
                  <td className="px-5 py-4 font-semibold text-[#1E2A3A]">C.CAPITAL</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Opportuniste / convexité' : 'Opportunistic / convexity'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'High alpha, <5% conversion' : 'High alpha, <5% conversion'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? '3–5 ans' : '3–5 years'}</td>
                  <td className="px-5 py-4">{language === 'fr' ? 'Late-stage, secondaires décotés, situations spéciales' : 'Late-stage, discounted secondaries, special situations'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategies Detail */}
      <section className="py-16 bg-white" data-testid="strategies-detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {strategies.map((strategy, index) => (
            <div 
              key={strategy.id}
              className={`py-16 ${index !== strategies.length - 1 ? 'border-b border-slate-200' : ''}`}
              data-testid={`strategy-detail-${strategy.id}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-serif text-[#C45A3B]">{strategy.num}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C45A3B] mb-1">{strategy.subtitle}</p>
                      <h2 className="font-serif text-2xl md:text-3xl">{strategy.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-slate-800 mb-6 leading-relaxed">
                    {strategy.headline}
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {strategy.thesis}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-4">
                      {language === 'fr' ? 'Notre Approche' : 'Our Approach'}
                    </h4>
                    <ul className="space-y-3">
                      {strategy.approach.map((item, idx) => (
                        <li key={`${strategy.id}-approach-${idx}`} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* TITAN DC AI - Campus IA Formation */}
                  {strategy.id === 'titan-datacenter' && (
                    <div className="my-8 p-6 bg-white border-l-4 border-[#C45A3B] rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-4">
                        {language === 'fr' ? 'Campus IA Formation' : 'AI Training Campus'}
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {language === 'fr'
                          ? "Là où nous installons des datacenters, nous créons de l'emploi local. Chaque site TITAN DC intègre un campus de formation pour jeunes de 18-25 ans (sans diplôme requis) sur équipement réel, avec garantie d'embauche via nos opérateurs locataires — objectif 70%+ d'emploi à 6 mois, ancré sur le territoire du site."
                          : "Where we install datacenters, we create local jobs. Each TITAN DC site includes a training campus for young people aged 18-25 (no diploma required) on real equipment, with a hiring guarantee via our operator tenants — targeting 70%+ employment at 6 months, anchored in the site's territory."}
                      </p>
                    </div>
                  )}

                  {/* TITAN DC AI - Certification PUE */}
                  {strategy.id === 'titan-datacenter' && (
                    <>
                      <div className="my-8 p-6 bg-gradient-to-br from-[#1E2A3A] to-[#2A3A4A] text-white rounded-lg border-l-4 border-[#C45A3B]">
                        <h4 className="font-semibold text-white mb-4">
                          {language === 'fr' ? 'Certification énergétique indépendante' : 'Independent Energy Certification'}
                        </h4>
                        <div className="flex items-center gap-6">
                          <div className="text-center flex-shrink-0">
                            <div className="text-5xl font-bold text-[#C45A3B]">≤ 1,30</div>
                            <div className="text-xs text-slate-300 uppercase tracking-wider mt-1">{language === 'fr' ? 'PUE cible' : 'Target PUE'}</div>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {language === 'fr'
                              ? "Seuil de référence EED 2027, par actif — certification indépendante (IPMVP Option C)."
                              : "EED 2027 reference threshold, per asset — independent certification (IPMVP Option C)."}
                          </p>
                        </div>
                      </div>

                      {/* Horizon d'investissement */}
                      <div className="my-8 p-6 bg-white border-2 border-slate-200 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-4">
                          {language === 'fr' ? "Horizon d'investissement" : 'Investment horizon'}
                        </h4>
                        <div className="grid sm:grid-cols-3 gap-4 mb-4">
                          {[
                            { period: language === 'fr' ? 'Acquisition' : 'Acquisition', date: language === 'fr' ? 'À partir de 2026' : 'From 2026' },
                            { period: language === 'fr' ? 'Transformation & Stabilisation' : 'Transformation & Stabilization', date: '2027 — 2029' },
                            { period: language === 'fr' ? 'Sorties stratégiques' : 'Strategic exits', date: language === 'fr' ? 'À partir de 2031' : 'From 2031' },
                          ].map((phase, idx) => (
                            <div key={idx} className="border-l-4 border-[#C45A3B] pl-3 py-1">
                              <p className="text-[#C45A3B] text-xs uppercase tracking-wider font-medium mb-1">{phase.period}</p>
                              <p className="text-slate-700 text-sm font-medium">{phase.date}</p>
                            </div>
                          ))}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {language === 'fr'
                            ? 'Horizon cible de détention : 5 à 6 ans par actif.'
                            : 'Target holding horizon: 5 to 6 years per asset.'}
                        </p>
                      </div>

                      {/* Pour aller plus loin — deep dives blog */}
                      <div className="my-8 p-6 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-4">
                          {language === 'fr' ? 'Pour aller plus loin' : 'Learn more'}
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            {
                              fr: { href: '/blog/data-centers-brown-to-green-europe-strategie-investissement', label: 'La thèse brown-to-green en détail' },
                              en: { href: '/blog/data-centers-brown-to-green-europe-strategie-investissement', label: 'The brown-to-green thesis in detail (FR)' },
                            },
                            {
                              fr: { href: '/blog/raccordement-electrique-datacenter-europe-investissement', label: 'Raccordement électrique : la prime de rareté' },
                              en: { href: '/en/blog/grid-connection-datacenter-europe-investment', label: 'Grid connection: the scarcity premium' },
                            },
                            {
                              fr: { href: '/blog/loi-pinm-statut-datacenter-brown-to-green', label: 'Loi PINM : l\'avantage réglementaire' },
                              en: { href: '/en/blog/pinm-law-datacenter-brown-to-green-status', label: 'PINM Law: the regulatory advantage' },
                            },
                            {
                              fr: { href: '/blog/eed-article-12-declaration-datacenter-guide-2026', label: 'EED Article 12 : le guide de conformité' },
                              en: { href: '/en/blog/eed-article-12-datacenter-declaration-guide-2026', label: 'EED Article 12: the compliance guide' },
                            },
                            {
                              fr: { href: '/blog/pue-optimisation-datacenters-europeens-guide-2026', label: 'Optimisation PUE : la méthode' },
                              en: { href: '/en/blog/pue-optimization-european-datacenters-guide-2026', label: 'PUE optimization: the method' },
                            },
                            {
                              fr: { href: '/blog/souverainete-numerique-atout-energetique-francais-datacenter-ia', label: 'Souveraineté numérique : l\'atout énergétique français' },
                              en: { href: '/en/blog/digital-sovereignty-french-energy-advantage-ai-datacenter', label: 'Digital sovereignty: France\'s energy advantage' },
                            },
                            {
                              fr: { href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6597918', label: 'Notre publication académique SSRN' },
                              en: { href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6597918', label: 'Our SSRN academic publication' },
                              external: true,
                            },
                          ].map((link, idx) => {
                            const l = language === 'fr' ? link.fr : link.en;
                            return (
                              <a
                                key={idx}
                                href={l.href}
                                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})}
                                className="flex items-center justify-between gap-2 px-4 py-3 bg-white border border-slate-200 hover:border-[#C45A3B] text-sm text-slate-700 hover:text-[#C45A3B] transition-colors"
                              >
                                {l.label}
                                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}

                  {/* C.CAPITAL - Portfolio Targets */}
                  {strategy.id === 'capital-opportunities' && (
                    <div className="my-8 p-6 bg-slate-50 rounded-lg border-l-4 border-[#C45A3B]">
                      <h4 className="font-semibold text-slate-800 mb-2">
                        {language === 'fr' ? 'Sociétés ciblées' : 'Target Companies'}
                      </h4>
                      <p className="text-slate-500 text-xs uppercase tracking-wider mb-6">
                        {language === 'fr' ? 'Late-stage IA · Infrastructure · Secondaires' : 'Late-stage AI · Infrastructure · Secondaries'}
                      </p>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        {language === 'fr'
                          ? "Univers cible indicatif : sociétés late-stage dans l'IA, l'infrastructure cloud et les marchés secondaires décotés. Chaque position fait l'objet d'une analyse approfondie avant engagement. Taux de conversion volontairement maintenu sous 5%."
                          : "Indicative target universe: late-stage companies in AI, cloud infrastructure, and discounted secondary markets. Every position undergoes thorough analysis before commitment. Conversion rate deliberately maintained below 5%."}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                        {['Cohere', 'Mercor', 'OpenAI', 'Revolut', 'Anthropic', 'Cursor'].map((company) => (
                          <div key={company} className="bg-white px-3 py-2 text-sm text-slate-700 font-medium border border-slate-200">
                            {company}
                          </div>
                        ))}
                      </div>
                      <p className="text-slate-500 text-xs mt-4 italic">
                        {language === 'fr'
                          ? "Source secondaire : marchés de liquidité pré-IPO via Forge Global."
                          : "Secondary source: pre-IPO liquidity markets via Forge Global."}
                      </p>
                    </div>
                  )}

                  <p className="text-sm font-semibold text-[#C45A3B] uppercase tracking-wider">
                    {strategy.markets}
                  </p>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={strategy.image}
                      alt={strategy.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/governance" className="group p-8 bg-white card-hover border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-3 group-hover:text-[#C45A3B] transition-colors">
                {language === 'fr' ? 'Gouvernance & Risques' : 'Governance & Risks'}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {language === 'fr' 
                  ? 'Découvrez notre cadre de gestion des risques et structure SCSp Luxembourg.'
                  : 'Discover our risk management framework and Luxembourg SCSp structure.'}
              </p>
              <span className="text-[#C45A3B] text-sm font-medium inline-flex items-center gap-2">
                {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/investors" className="group p-8 bg-white card-hover border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-3 group-hover:text-[#C45A3B] transition-colors">
                {language === 'fr' ? 'Espace Investisseurs' : 'Investors'}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {language === 'fr' 
                  ? 'TITAN DC AI déployé sur capital propre FINXIA + Green Bonds. Structure SCSp Luxembourg pour partenaires institutionnels MiFID II.'
                  : 'TITAN DC AI deployed on FINXIA own equity + Green Bonds. Luxembourg SCSp structure for MiFID II institutional partners.'}
              </p>
              <span className="text-[#C45A3B] text-sm font-medium inline-flex items-center gap-2">
                {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
