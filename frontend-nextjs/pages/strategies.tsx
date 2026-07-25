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
        language === 'fr' ? 'Efficacité énergétique : protocole IPMVP, PUE certifié EU Taxonomy 8.1 et conforme Directive EED (PUE ≤ 1,30 d\'ici 2027)' : 'Energy efficiency: IPMVP protocol, EU Taxonomy 8.1-certified PUE and EED Directive-compliant (PUE ≤ 1.30 by 2027)',
        language === 'fr' ? 'Financement : capital propre + dette senior amortissante + Green Bond ESG ICMA conditionné aux objectifs PUE' : 'Financing: own equity + senior amortizing debt + ICMA ESG Green Bond conditioned on PUE targets',
      ],
      markets: language === 'fr' ? 'France · Espagne · Italie · Europe du Nord' : 'France · Spain · Italy · Northern Europe',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
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
        ? <><strong>Stratégie portée par Jean-Pierre Véron</strong> — Président, 40+ ans d'immobilier institutionnel. <br/><br/>Le segment hôtelier premium urbain génère des RevPAR soutenus par la demande internationale. <strong>Track record opérationnel</strong> : JPV a dirigé la reconversion de <strong>Centorial</strong> (immeuble de bureaux des années 1970 transformé en complexe hôtelier de luxe au coeur de Paris), la structuration de <strong>Coeur Défense</strong> (complexe mixed-use 180 000 m² à La Défense intégrant hôtellerie de standing), et le repositionnement du <strong>Washington Plaza</strong> (rehaussement de catégorie et optimisation opérationnelle menant à une valorisation +35%). <br/><br/><strong>La méthode Finxia</strong> : acquisition d'actifs 4-5 étoiles sous-optimisés dans les métropoles tier-1 européennes, repositionnement de marque en partenariat avec des opérateurs de référence (Marriott, Accor, Hilton), et stabilisation du RevPAR sur 24-36 mois avant rotation sélective. Cible de rendement : <strong>IRR 12-15%</strong> en value-add, <strong>yield en exploitation 5-7%</strong> en core-plus. <br/><br/>Le marché hôtelier européen premium affiche un RevPAR 2025 en hausse de +8,2% vs 2019 (pré-COVID), porté par le tourisme d'affaires international et la demande MICE. Paris, Barcelone et Madrid concentrent 60% des transactions hôtelières institutionnelles &gt;50M€ en Europe.</>
        : <><strong>Strategy led by Jean-Pierre Véron</strong> — Chairman, 40+ years of institutional real estate. <br/><br/>The urban premium hotel segment generates RevPAR supported by international demand. <strong>Operational track record</strong>: JPV led the conversion of <strong>Centorial</strong> (1970s office building transformed into a luxury hotel complex in central Paris), the structuring of <strong>Coeur Défense</strong> (180,000 m² mixed-use complex in La Défense integrating upscale hospitality), and the repositioning of <strong>Washington Plaza</strong> (category upgrade and operational optimization leading to +35% valuation). <br/><br/><strong>The Finxia method</strong>: acquisition of under-optimized 4-5 star assets in European tier-1 metropolises, brand repositioning in partnership with reference operators (Marriott, Accor, Hilton), and RevPAR stabilization over 24-36 months before selective rotation. Target return: <strong>IRR 12-15%</strong> in value-add, <strong>operating yield 5-7%</strong> in core-plus. <br/><br/>The European premium hotel market posted 2025 RevPAR up +8.2% vs 2019 (pre-COVID), driven by international business travel and MICE demand. Paris, Barcelona and Madrid concentrate 60% of institutional hotel transactions &gt;€50M in Europe.</>,
      approach: [
        language === 'fr' ? 'Cible : hôtels 4-5 étoiles sous-optimisés dans les métropoles tier-1 (Paris, Barcelone, Madrid, Milan) avec potentiel de repositionnement de marque' : 'Target: under-optimized 4-5 star hotels in tier-1 metropolises (Paris, Barcelona, Madrid, Milan) with brand repositioning potential',
        language === 'fr' ? 'Track record JPV : Centorial (reconversion bureaux → hôtel de luxe), Coeur Défense (180 000 m² mixed-use), Washington Plaza (rehaussement de catégorie +35% valorisation)' : 'JPV track record: Centorial (office conversion → luxury hotel), Coeur Défense (180,000 m² mixed-use), Washington Plaza (category upgrade +35% valuation)',
        language === 'fr' ? 'Partenariats opérateurs : Marriott, Accor, Hilton — repositionnement de marque et optimisation du RevPAR sur 24-36 mois' : 'Operator partnerships: Marriott, Accor, Hilton — brand repositioning and RevPAR optimization over 24-36 months',
        language === 'fr' ? 'Méthode : acquisition value-add, stabilisation opérationnelle, rotation sélective vers investisseurs Core ou REITs hôteliers' : 'Method: value-add acquisition, operational stabilization, selective rotation to Core investors or hotel REITs',
        language === 'fr' ? 'Rendement cible : IRR 12-15% (value-add) · yield exploitation 5-7% (core-plus)' : 'Target return: IRR 12-15% (value-add) · operating yield 5-7% (core-plus)',
        language === 'fr' ? 'Marché : RevPAR européen premium +8,2% vs 2019, 60% des transactions &gt;50M€ concentrées à Paris/Barcelone/Madrid' : 'Market: European premium RevPAR +8.2% vs 2019, 60% of transactions &gt;€50M concentrated in Paris/Barcelona/Madrid',
      ],
      markets: 'Paris · Barcelone · Madrid · Milan',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
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
        ? <><strong>Stratégie portée par Jean-Pierre Véron</strong> — Président, 40+ ans d'immobilier institutionnel. <br/><br/>Coliving, résidences services, build-to-rent — la demande dépasse structurellement l'offre dans les métropoles européennes. <strong>Track record</strong> : JPV a structuré l'aménagement de la <strong>Vallée du Camincourt</strong> (opération résidentielle de 450 logements mixant accession et location, sortie en bloc vers un investisseur Core allemand à +12% de prime vs budget), et piloté plusieurs opérations build-to-rent en Île-de-France générant des <strong>yield en exploitation 4,5-5,5%</strong>. <br/><br/><strong>Le déficit structurel est massif</strong> : l'Europe manque 4,5 millions de logements selon la Commission européenne. Dans les métropoles tier-1, le taux d'occupation des résidences services dépasse 92% et les loyers build-to-rent progressent de +4,8% par an. Finxia cible des actifs de 80-300 unités, opérés par des partenaires spécialisés (coliving, PBSA, seniors), avec des sorties calibrées vers des investisseurs Core à horizon 5-7 ans. <br/><br/>Cible : <strong>IRR 10-13%</strong> via création de valeur opérationnelle (optimisation des surfaces communes, digitalisation de la gestion locative, montée en gamme des prestations) et effet de portefeuille à la cession.</>
        : <><strong>Strategy led by Jean-Pierre Véron</strong> — Chairman, 40+ years of institutional real estate. <br/><br/>Coliving, serviced residences, build-to-rent — demand structurally exceeds supply in European metropolises. <strong>Track record</strong>: JPV structured the development of <strong>Vallée du Camincourt</strong> (residential operation of 450 units mixing ownership and rental, block exit to a German Core investor at +12% premium vs budget), and managed several build-to-rent operations in Île-de-France generating <strong>operating yields of 4.5-5.5%</strong>. <br/><br/><strong>The structural deficit is massive</strong>: Europe lacks 4.5 million housing units according to the European Commission. In tier-1 metropolises, serviced residence occupancy rates exceed 92% and build-to-rent rents grow by +4.8% annually. Finxia targets 80-300 unit assets, operated by specialized partners (coliving, PBSA, senior living), with exits calibrated for Core investors on a 5-7 year horizon. <br/><br/>Target: <strong>IRR 10-13%</strong> through operational value creation (optimization of common areas, digitization of rental management, upgrading of services) and portfolio effect at exit.</>,
      approach: [
        language === 'fr' ? 'Cible : actifs résidentiels 80-300 unités en métropoles tier-1 européennes (coliving, PBSA, build-to-rent, senior living)' : 'Target: residential assets of 80-300 units in European tier-1 metropolises (coliving, PBSA, build-to-rent, senior living)',
        language === 'fr' ? 'Track record JPV : Vallée du Camincourt (450 logements, sortie en bloc +12% prime), opérations BTR Île-de-France (yield 4,5-5,5%)' : 'JPV track record: Vallée du Camincourt (450 units, block exit +12% premium), BTR operations in Île-de-France (yield 4.5-5.5%)',
        language === 'fr' ? 'Partenariats opérateurs spécialisés : gestion locative digitale, optimisation des surfaces communes, montée en gamme des services' : 'Partnerships with specialized operators: digital rental management, optimization of common areas, upgrading of services',
        language === 'fr' ? 'Dynamique de marché : déficit de 4,5M logements en Europe, taux d\'occupation résidences services &gt;92%, loyers BTR +4,8%/an' : 'Market dynamic: 4.5M housing deficit in Europe, serviced residence occupancy &gt;92%, BTR rents +4.8%/year',
        language === 'fr' ? 'Sorties calibrées : bloc vers investisseurs Core à horizon 5-7 ans, effet de portefeuille et prime de liquidité' : 'Calibrated exits: block sales to Core investors on 5-7 year horizon, portfolio effect and liquidity premium',
        language === 'fr' ? 'Rendement cible : IRR 10-13% via création de valeur opérationnelle et effet de portefeuille' : 'Target return: IRR 10-13% through operational value creation and portfolio effect',
      ],
      markets: language === 'fr' ? 'Grandes Métropoles Européennes' : 'Major European Metropolises',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
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
        language === 'fr' ? 'Discipline : taux de conversion &lt;5%, conviction maximale, ticket moyen 2-10M€' : 'Discipline: &lt;5% conversion rate, maximum conviction, average ticket €2-10M',
      ],
      markets: 'Late-Stage · Secondaires · Special Situations',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
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
                      <p className="text-slate-700 text-sm leading-relaxed mb-4">
                        {language === 'fr'
                          ? "Là où nous installons des datacenters, nous créons de l'emploi local. Chaque site TITAN DC intègre un campus de formation pour jeunes de 18 à 25 ans (sans diplôme requis), avec formation pratique sur équipement réel : serveurs, racks, câblage, UPS."
                          : "Where we install datacenters, we create local jobs. Each TITAN DC site includes a training campus for young people aged 18-25 (no diploma required), with hands-on training on real equipment: servers, racks, cabling, UPS."}
                      </p>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {language === 'fr'
                          ? "Garantie d'embauche via les partenaires opérateurs qui louent les sites. Objectif : 70%+ d'emploi à 6 mois. Les projets DC s'implantent sur des territoires en transition — les emplois doivent rester sur ces territoires."
                          : "Hiring guarantee via operator partners who lease the sites. Target: 70%+ employment at 6 months. DC projects are located in transitioning territories — jobs must stay in those territories."}
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
                        <div className="flex items-center gap-6 mb-4">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-[#C45A3B]">≤ 1,30</div>
                            <div className="text-xs text-slate-300 uppercase tracking-wider mt-1">{language === 'fr' ? 'PUE cible' : 'Target PUE'}</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-[#C45A3B] uppercase tracking-wider mb-1">
                              {language === 'fr' ? 'Méthode IPMVP Option C' : 'IPMVP Option C Method'}
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {language === 'fr'
                                ? "Pour chaque actif acquis dans le cadre de TITAN DC AI, FINXIA Capital cible un PUE inférieur ou égal à 1,30 — seuil de référence de l'Article 21 EED à horizon 2027. La progression PUE sera mesurée selon la méthode IPMVP Option C et documentée en vue d'une certification indépendante."
                                : "For each asset acquired under TITAN DC AI, FINXIA Capital targets a PUE below or equal to 1.30 — the EED Article 21 reference threshold by 2027. PUE progression will be measured according to IPMVP Option C methodology and documented for independent certification."}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* TITAN DC AI - Timeline */}
                      <div className="my-8 p-6 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-6">
                          {language === 'fr' ? 'Calendrier d\'exécution' : 'Execution Timeline'}
                        </h4>
                        <div className="space-y-4">
                          {[
                            { quarter: 'Q2 2026', event: language === 'fr' ? 'Premier LOI signé sur actif TITAN DC AI · Due diligence technique lancée' : 'First LOI signed on TITAN DC AI asset · Technical due diligence launched' },
                            { quarter: 'Q3 2026', event: language === 'fr' ? 'Acquisition finalisée · Baseline PUE établie selon méthode IPMVP Option C' : 'Acquisition finalized · PUE baseline established per IPMVP Option C methodology' },
                            { quarter: 'Q4 2026', event: language === 'fr' ? 'Plan de rénovation énergétique en cours · Dossier Green Bond structuré' : 'Energy retrofit program in progress · Green Bond dossier structured' },
                            { quarter: '2027', event: language === 'fr' ? 'Première certification Bureau Veritas · Actif opérationnel IA-ready · Locataire en place' : 'First Bureau Veritas certification · Asset operational and AI-ready · Tenant in place' },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-20 pt-1">
                                <span className="text-xs font-bold text-[#C45A3B] uppercase tracking-wider">{item.quarter}</span>
                              </div>
                              <div className="flex-1 relative">
                                <div className="absolute left-0 top-2 w-2 h-2 bg-[#C45A3B] rounded-full" />
                                <div className="pl-4 border-l-2 border-slate-200 pb-4 last:border-0">
                                  <span className="text-slate-700 text-sm">{item.event}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* TITAN DC AI - Cadre réglementaire favorable */}
                      <div className="my-8 p-6 bg-white border-2 border-[#C45A3B]/20 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-6 flex items-center gap-2">
                          <span className="text-[#C45A3B]">✓</span>
                          {language === 'fr' ? 'Cadre réglementaire favorable' : 'Favorable Regulatory Framework'}
                        </h4>
                        <div className="space-y-6">
                          {/* Loi PINM */}
                          <div className="border-l-4 border-[#C45A3B] pl-4">
                            <h5 className="font-medium text-slate-800 mb-2">
                              {language === 'fr' ? 'Loi PINM (avril 2026)' : 'PINM Law (April 2026)'}
                            </h5>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {language === 'fr'
                                ? "La loi de simplification économique adoptée le 14 avril 2026 crée un statut de Projet d'Intérêt National Majeur pour les datacenters, réduisant les délais administratifs de 5-7 ans à fast track. Les actifs TITAN DC AI sont structurés pour qualifier à ce statut."
                                : "The economic simplification law adopted on April 14, 2026 creates a Major National Interest Project status for datacenters, reducing administrative delays from 5-7 years to fast track. TITAN DC AI assets are structured to qualify for this status."}
                            </p>
                          </div>

                          {/* EED Article 12 */}
                          <div className="border-l-4 border-slate-300 pl-4">
                            <h5 className="font-medium text-slate-800 mb-2">
                              {language === 'fr' ? 'EED Article 12 — deadline 15 mai 2026' : 'EED Article 12 — May 15, 2026 deadline'}
                            </h5>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {language === 'fr'
                                ? "Première échéance de déclaration obligatoire pour les datacenters européens. La stratégie TITAN DC AI est structurée pour anticiper cette conformité dès l'acquisition des premiers actifs — méthode IPMVP et certification indépendante intégrées au plan de rénovation."
                                : "First mandatory declaration deadline for European datacenters. The TITAN DC AI strategy is structured to anticipate this compliance from the first asset acquisitions — IPMVP methodology and independent certification integrated into the retrofit plan."}
                              {' '}
                              <a 
                                href={language === 'fr' ? '/blog/eed-article-12-declaration-datacenter-guide-2026' : '/en/blog/eed-article-12-datacenter-declaration-guide-2026'}
                                className="text-[#C45A3B] hover:underline text-xs font-medium"
                              >
                                {language === 'fr' ? '→ Lire notre guide complet' : '→ Read our complete guide'}
                              </a>
                            </p>
                          </div>

                          {/* Avantage B2G */}
                          <div className="border-l-4 border-slate-300 pl-4">
                            <h5 className="font-medium text-slate-800 mb-2">
                              {language === 'fr' ? 'Avantage brown-to-green explicite' : 'Explicit brown-to-green advantage'}
                            </h5>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {language === 'fr'
                                ? "En repositionnant des sites raccordés existants, TITAN DC AI contourne la file d'attente RTE qui représentait 50% des demandes de raccordement en 2025."
                                : "By repositioning existing connected sites, TITAN DC AI bypasses the RTE queue which represented 50% of connection requests in 2025."}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Pourquoi maintenant */}
                      <div className="my-8 p-6 bg-[#1E2A3A] text-white rounded-lg">
                        <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                          <span className="text-[#C45A3B] text-2xl">→</span>
                          {language === 'fr' ? 'Pourquoi maintenant' : 'Why now'}
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {language === 'fr'
                            ? "La Directive Efficacité Énergétique impose aux datacenters européens de déclarer leur consommation avant mai 2026 et d'atteindre un PUE ≤ 1,30 d'ici janvier 2027. Les actifs non conformes subissent une décote de valeur immédiate. TITAN DC AI acquiert précisément ces actifs en période de stress réglementaire, les met en conformité, et les repositionne comme infrastructure certifiée premium — capturant la compression de rendement entre l'entrée et la sortie."
                            : "The Energy Efficiency Directive requires European datacenters to declare their consumption before May 2026 and to achieve a PUE ≤ 1.30 by January 2027. Non-compliant assets suffer immediate value discount. TITAN DC AI acquires precisely these assets during regulatory stress, brings them into compliance, and repositions them as certified premium infrastructure — capturing the yield compression between entry and exit."}
                        </p>
                      </div>

                      {/* SSRN Research Anchor */}
                      <div className="my-8 p-6 bg-white border-l-4 border-[#C45A3B] rounded-lg">
                        <p className="text-slate-700 text-sm leading-relaxed italic">
                          {language === 'fr' ? (
                            <>FINXIA Capital a publié en 2026 une analyse académique sur SSRN portant sur l'optimisation PUE et le cadre réglementaire EED, qui structure directement la thèse d'investissement TITAN.{' '}
                              <a
                                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6597918"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="text-[#C45A3B] hover:underline font-medium not-italic"
                              >
                                Consulter la publication SSRN →
                              </a>
                            </>
                          ) : (
                            <>FINXIA Capital published in 2026 an academic analysis on SSRN covering PUE optimization and the EED regulatory framework, which directly structures the TITAN investment thesis.{' '}
                              <a
                                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6597918"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="text-[#C45A3B] hover:underline font-medium not-italic"
                              >
                                View SSRN publication →
                              </a>
                            </>
                          )}
                        </p>
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

                      {/* La crise de capacité électrique — avantage brownfield */}
                      <div className="my-8 p-6 bg-gradient-to-br from-[#C45A3B]/10 to-white border-l-4 border-[#C45A3B] rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                          <span className="text-[#C45A3B] text-2xl">⚡</span>
                          {language === 'fr' ? 'La crise de capacité électrique : un avantage structurel pour le brownfield' : 'The capacity crisis: a structural advantage for brownfield'}
                        </h4>
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                              <div className="text-3xl font-bold text-[#C45A3B]">18 GW</div>
                              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{language === 'fr' ? 'Demande réservée datacenters France' : 'Reserved datacenter demand France'}</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                              <div className="text-3xl font-bold text-[#C45A3B]">~15%</div>
                              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{language === 'fr' ? 'Concrétisé aujourd\'hui' : 'Realized today'}</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                              <div className="text-3xl font-bold text-[#C45A3B]">5</div>
                              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{language === 'fr' ? 'Sites fast track identifiés par l\'État' : 'Fast track sites identified by the State'}</div>
                            </div>
                          </div>
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {language === 'fr'
                              ? "RTE, le gestionnaire de réseau de transport français, fait face à une tension structurelle : 18 GW de capacité électrique sont aujourd'hui réservés aux projets datacenter sur le territoire français, mais seulement une fraction (~15%) est effectivement raccordée et opérationnelle. La file d'attente de raccordement bloque 50% des nouvelles demandes. Les acteurs greenfield attendent 5 à 7 ans pour un raccordement neuf."
                              : "RTE, the French transmission system operator, faces structural tension: 18 GW of electrical capacity is currently reserved for datacenter projects on French territory, but only a fraction (~15%) is actually connected and operational. The connection queue blocks 50% of new requests. Greenfield players wait 5 to 7 years for a new connection."}
                          </p>
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {language === 'fr'
                              ? "TITAN DC AI contourne cette contrainte en ciblant des sites industriels brownfield <strong>déjà raccordés au réseau HT</strong> — anciennes usines, friches manufacturières, entrepôts de première génération disposant d'un substation existant. Pas de file d'attente RTE. Pas de spéculation sur la capacité. Un raccordement existant = un avantage de temps de 3 à 5 ans."
                              : "TITAN DC AI bypasses this constraint by targeting brownfield industrial sites <strong>already connected to the HV grid</strong> — former factories, manufacturing brownfields, first-generation warehouses with an existing substation. No RTE queue. No capacity speculation. An existing connection = a 3 to 5 year time advantage."}
                          </p>
                        </div>
                      </div>

                      {/* Souveraineté numérique et atout énergétique français */}
                      <div className="my-8 p-6 bg-[#1E2A3A] text-white rounded-lg">
                        <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                          <span className="text-[#C45A3B] text-2xl">🛡️</span>
                          {language === 'fr' ? 'Souveraineté numérique française & européenne' : 'French & European digital sovereignty'}
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-3xl font-bold text-[#C45A3B]">92%</div>
                            <div className="text-xs text-slate-300 uppercase tracking-wider mt-1">{language === 'fr' ? 'Données occidentales stockées aux USA' : 'Western data stored in the USA'}</div>
                          </div>
                          <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="text-3xl font-bold text-[#C45A3B]">95%</div>
                            <div className="text-xs text-slate-300 uppercase tracking-wider mt-1">{language === 'fr' ? 'Électricité française décarbonisée' : 'French electricity decarbonized'}</div>
                          </div>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          {language === 'fr'
                            ? "L'IA générative, la défense européenne, la santé et les administrations publiques ont un besoin impératif d'infrastructure de calcul souveraine. Or, 92% des données de l'Occident sont stockées sur le sol américain. La dépendance stratégique est totale."
                            : "Generative AI, European defense, healthcare, and public administrations have an imperative need for sovereign computing infrastructure. Yet, 92% of Western data is stored on US soil. The strategic dependence is total."}
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          {language === 'fr'
                            ? "La France dispose d'un atout énergétique unique en Europe : un mix électrique <strong>95% décarbonisé</strong> (nucléaire + renouvelables), et un pays qui <strong>exporte 20% de sa production électrique</strong>. Cela fait du territoire français une destination de choix pour les hyperscalers en quête d'image carbone et de souveraineté."
                            : "France has a unique energy advantage in Europe: an electricity mix that is <strong>95% decarbonized</strong> (nuclear + renewables), and a country that <strong>exports 20% of its electricity production</strong>. This makes French territory a destination of choice for hyperscalers seeking carbon reputation and sovereignty."}
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {language === 'fr'
                            ? "TITAN DC AI transforme cet atout énergétique en infrastructure IA certifiée — capturant la double prime de la souveraineté numérique et de la décarbonation. Les locataires cibles (opérateurs cloud européens, administrations publiques, acteurs IA) paient un premium pour cette garantie."
                            : "TITAN DC AI transforms this energy advantage into certified AI infrastructure — capturing the double premium of digital sovereignty and decarbonization. Target tenants (European cloud operators, public administrations, AI actors) pay a premium for this guarantee."}
                        </p>
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
