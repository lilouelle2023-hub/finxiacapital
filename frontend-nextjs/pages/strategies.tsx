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
      subtitle: 'TITAN',
      title: language === 'fr' ? 'Datacenter AI Brown-to-Green' : 'AI Datacenter Brown-to-Green',
      headline: language === 'fr' 
        ? 'L\'infrastructure de l\'IA a besoin d\'un socle. Nous le transformons.'
        : 'AI infrastructure needs a foundation. We transform it.',
      thesis: language === 'fr'
        ? 'Le pôle TITAN est notre conviction centrale. Nous ciblons des campus existants sous-exploités pour les repositionner en infrastructure IA de nouvelle génération : low-energy, certifiée, dimensionnée pour des locataires hyperscaler en bail long terme. La thèse est simple. Un datacenter standard consomme trop, coûte trop, et ne répond plus aux exigences ESG des grands cloud providers. En déployant une infrastructure énergétique de rupture — refroidissement haute efficacité, récupération de chaleur serveurs, production d\'énergie on-site — nous comprimons les coûts opérationnels, améliorons le NOI, et créons une prime de sortie significative auprès des acquéreurs Core infrastructure. Du brown au green : moins d\'énergie consommée, plus de valeur créée. TITAN se finance via un Green Bond ESG dédié, instrument calibré pour cette transformation — labellisé, structuré avec nos partenaires bancaires, sans dilution equity.'
        : 'The TITAN division is our core conviction. We target underutilized existing campuses to reposition them as next-generation AI infrastructure: low-energy, certified, sized for hyperscaler tenants on long-term leases. The thesis is simple. A standard datacenter consumes too much, costs too much, and no longer meets the ESG requirements of major cloud providers. By deploying breakthrough energy infrastructure — high-efficiency cooling, server heat recovery, on-site energy production — we compress operational costs, improve NOI, and create a significant exit premium with Core infrastructure buyers. From brown to green: less energy consumed, more value created. TITAN is financed via a dedicated ESG Green Bond, an instrument calibrated for this transformation — labeled, structured with our banking partners, without equity dilution.',
      approach: [
        language === 'fr' ? 'Acquisition de campus datacenters sous-exploités' : 'Acquisition of underutilized datacenter campuses',
        language === 'fr' ? 'Déploiement infrastructure énergétique : refroidissement haute efficacité, récupération chaleur' : 'Deployment of energy infrastructure: high-efficiency cooling, heat recovery',
        language === 'fr' ? 'Production d\'énergie on-site et certification ESG' : 'On-site energy production and ESG certification',
        language === 'fr' ? 'Location hyperscalers long terme et cession acquéreurs Core' : 'Long-term hyperscaler leasing and sale to Core buyers',
      ],
      markets: language === 'fr' ? 'France · Espagne · Europe' : 'France · Spain · Europe',
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
        ? 'Le segment hôtelier premium urbain génère des RevPAR soutenus par la demande internationale. Finxia combine des actifs long terme producteurs de cash flow avec des opportunités de rotation après repositionnement opérationnel.'
        : 'The urban premium hotel segment generates RevPAR supported by international demand. Finxia combines long-term cash flow producing assets with rotation opportunities after operational repositioning.',
      approach: [
        language === 'fr' ? 'Acquisition d\'hôtels 4-5 étoiles dans les métropoles européennes' : 'Acquisition of 4-5 star hotels in European metropolises',
        language === 'fr' ? 'Asset management actif en partenariat avec des opérateurs de référence' : 'Active asset management in partnership with reference operators',
        language === 'fr' ? 'Optimisation du RevPAR par repositionnement de marque' : 'RevPAR optimization through brand repositioning',
        language === 'fr' ? 'Rotation sélective après stabilisation opérationnelle' : 'Selective rotation after operational stabilization',
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
        ? 'Coliving, résidences services, build-to-rent — la demande dépasse structurellement l\'offre dans les métropoles européennes. Finxia constitue des portefeuilles opérés avec des partenaires spécialisés, calibrés pour des sorties en bloc vers investisseurs Core.'
        : 'Coliving, serviced residences, build-to-rent — demand structurally exceeds supply in European metropolises. Finxia builds operated portfolios with specialized partners, calibrated for block exits to Core investors.',
      approach: [
        language === 'fr' ? 'Constitution de portefeuilles multi-actifs résidentiels' : 'Constitution of multi-asset residential portfolios',
        language === 'fr' ? 'Partenariats avec opérateurs spécialisés (coliving, PBSA)' : 'Partnerships with specialized operators (coliving, PBSA)',
        language === 'fr' ? 'Optimisation du yield par asset management actif' : 'Yield optimization through active asset management',
        language === 'fr' ? 'Préparation de sorties en bloc vers investisseurs Core' : 'Preparation of block exits to Core investors',
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
        ? 'Late-stage, secondaires décotés, situations spéciales. Une approche ultra-sélective — réservée aux opportunités où notre expertise sectorielle nous confère un avantage décisif. Taux de conversion volontairement bas. Conviction maximale sur chaque position.'
        : 'Late-stage, discounted secondaries, special situations. An ultra-selective approach — reserved for opportunities where our sector expertise confers a decisive advantage. Deliberately low conversion rate. Maximum conviction on each position.',
      approach: [
        language === 'fr' ? 'Participation à des tours de financement late-stage' : 'Participation in late-stage financing rounds',
        language === 'fr' ? 'Acquisition de positions secondaires décotées' : 'Acquisition of discounted secondary positions',
        language === 'fr' ? 'Situations spéciales avec thèse de restructuration' : 'Special situations with restructuring thesis',
        language === 'fr' ? 'Approche disciplinée avec taux de conversion <5%' : 'Disciplined approach with <5% conversion rate',
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
          "text": "TITAN se finance via un Green Bond ESG dédié, instrument calibré pour cette transformation — labellisé SFDR Art.9, structuré avec nos partenaires bancaires, sans dilution equity."
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
        keywords="datacenter AI brown to green, hôtellerie premium Europe, coliving investissement, late-stage secondaires Luxembourg, Green Bond ESG SFDR, hyperscaler lease"
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
                ? 'Une discipline d\'exécution institutionnelle. Une architecture AI-native qui n\'a pas d\'équivalent dans la gestion alternative européenne.'
                : 'Institutional execution discipline. An AI-native architecture unmatched in European alternative management.'}
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
                ? "Cette transformation s'appuie sur un financement structuré via Green Bond ESG conforme SFDR Article 9, permettant de financer la décarbonation sans dilution du capital propriétaire. L'approche combine acquisition de campus existants, déploiement d'infrastructure énergétique de rupture (refroidissement haute efficacité, récupération chaleur, production on-site), et certification ESG pour créer une prime de sortie significative."
                : "This transformation relies on structured financing via SFDR Article 9 compliant ESG Green Bonds, enabling decarbonization financing without equity dilution. The approach combines acquisition of existing campuses, deployment of breakthrough energy infrastructure (high-efficiency cooling, heat recovery, on-site production), and ESG certification to create significant exit premiums."}
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              {language === 'fr'
                ? "En parallèle, nos stratégies Hôtellerie Premium et Résidentiel Flex Living (coliving, PBSA, build-to-rent) capitalisent sur la dynamique structurelle de la demande urbaine européenne, avec des sorties calibrées vers investisseurs Core. Le pôle C.Capital cible des opportunités late-stage et secondaires décotés, avec un taux de conversion volontairement inférieur à 5 % pour maximiser la conviction sur chaque position."
                : "In parallel, our Premium Hospitality and Flex Living Residential strategies (coliving, PBSA, build-to-rent) capitalize on the structural dynamics of European urban demand, with exits calibrated for Core investors. The C.Capital division targets late-stage and discounted secondary opportunities, with a deliberately sub-5% conversion rate to maximize conviction on each position."}
            </p>
            <p className="text-slate-700 leading-relaxed">
              {language === 'fr'
                ? "Structurée en SCSp Luxembourg avec capital propre et sans levée externe, FINXIA Capital allie discipline institutionnelle, architecture AI-native (18 agents IA opérant en continu), et expertise sectorielle approfondie pour créer de la valeur durable sur les actifs réels européens."
                : "Structured as a Luxembourg SCSp with proprietary capital and no external fundraising, FINXIA Capital combines institutional discipline, AI-native architecture (18 AI agents operating continuously), and deep sector expertise to create sustainable value in European real assets."}
            </p>
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

                  {/* TITAN DC AI - Certification PUE */}
                  {strategy.id === 'titan-datacenter' && (
                    <>
                      <div className="my-8 p-6 bg-gradient-to-br from-[#1E2A3A] to-[#2A3A4A] text-white rounded-lg border-l-4 border-[#C45A3B]">
                        <h4 className="font-semibold text-white mb-4">
                          {language === 'fr' ? 'Certification énergétique indépendante' : 'Independent Energy Certification'}
                        </h4>
                        <div className="flex items-center gap-6 mb-4">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-[#C45A3B]">1,08</div>
                            <div className="text-xs text-slate-300 uppercase tracking-wider mt-1">PUE</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-[#C45A3B] uppercase tracking-wider mb-1">
                              {language === 'fr' ? 'Certifié IPMVP Bureau Veritas' : 'IPMVP Bureau Veritas Certified'}
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {language === 'fr'
                                ? "Le datacenter partenaire de TITAN DC AI affiche un PUE mesuré de 1,08 — certifié selon la méthode IPMVP Option C par Bureau Veritas. Cette certification conditionne les clauses SLL des green bonds ICMA et constitue la preuve technique de la thèse brown-to-green."
                                : "TITAN DC AI partner datacenter displays a measured PUE of 1.08 — certified according to IPMVP Option C method by Bureau Veritas. This certification conditions ICMA green bond SLL clauses and constitutes technical proof of the brown-to-green thesis."}
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
                            { quarter: 'Q2 2026', event: language === 'fr' ? 'LOI signée avec premier datacenter partenaire' : 'LOI signed with first partner datacenter' },
                            { quarter: 'Q3 2026', event: language === 'fr' ? 'Déploiement plateforme IA · Baseline IPMVP active' : 'AI platform deployment · Active IPMVP baseline' },
                            { quarter: 'Q4 2026', event: language === 'fr' ? 'Closing TITAN DC AI · Première certification BV' : 'TITAN DC AI closing · First BV certification' },
                            { quarter: '2027', event: language === 'fr' ? 'Mise en service · Première distribution investisseurs' : 'Commissioning · First investor distribution' },
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
                    </>
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
                  ? 'Reporting INREV, conformité ILPA et transparence totale pour investisseurs institutionnels.'
                  : 'INREV reporting, ILPA compliance and full transparency for institutional investors.'}
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
