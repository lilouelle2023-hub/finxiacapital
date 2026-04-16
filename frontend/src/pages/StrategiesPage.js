import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Server, Building, Home, TrendingUp, CheckCircle } from 'lucide-react';

export default function StrategiesPage() {
  const { language } = useLanguage();

  const strategies = [
    {
      id: 'titan-datacenter',
      icon: Server,
      num: '01',
      subtitle: 'TITAN',
      title: language === 'fr' ? 'Datacenter AI Brown-to-Green' : 'AI Datacenter Brown-to-Green',
      headline: language === 'fr' 
        ? 'L\'infrastructure de l\'IA a besoin d\'un terrain. Nous le construisons.'
        : 'AI infrastructure needs ground. We build it.',
      thesis: language === 'fr'
        ? 'Le pôle TITAN est notre conviction centrale. Nous ciblons des datacenters sous-performants — des actifs brown — pour les transformer en infrastructure IA de nouvelle génération : décarbonée, certifiée, dimensionnée pour les workloads d\'intelligence artificielle. La demande en capacité de calcul croit structurellement plus vite que l\'offre qualifiée. L\'écart de valeur entre un actif brown repositionné et un datacenter IA-ready est notre thèse. TITAN se finance via un Green Bond dédié — instrument aligné avec la nature de la transformation : du carbone vers la performance, de l\'obsolescence vers la certification.'
        : 'The TITAN division is our core conviction. We target underperforming datacenters — brown assets — to transform them into next-generation AI infrastructure: decarbonized, certified, sized for artificial intelligence workloads. Computing capacity demand grows structurally faster than qualified supply. The value gap between a repositioned brown asset and an AI-ready datacenter is our thesis. TITAN is financed via a dedicated Green Bond — an instrument aligned with the nature of the transformation: from carbon to performance, from obsolescence to certification.',
      approach: [
        language === 'fr' ? 'Acquisition de datacenters sous-performants énergétiquement' : 'Acquisition of energy-underperforming datacenters',
        language === 'fr' ? 'Transformation vers infrastructure IA décarbonée' : 'Transformation to decarbonized AI infrastructure',
        language === 'fr' ? 'Certification aux standards environnementaux' : 'Certification to environmental standards',
        language === 'fr' ? 'Cession à des acquéreurs Core avec prime de transition' : 'Sale to Core buyers with transition premium',
      ],
      markets: 'France · Espagne · Italie',
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

  return (
    <div data-testid="strategies-page" className="pt-20">
      <Helmet>
        <title>Stratégies d'Investissement · FINXIA Capital</title>
        <meta name="description" content="Quatre pôles de création de valeur : Datacenter AI Brown-to-Green, Hôtellerie Premium, Résidentiel Flex Living et Capital Opportunités." />
      </Helmet>

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

      {/* Strategies Detail */}
      <section className="py-16 bg-white" data-testid="strategies-detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {strategies.map((strategy, index) => (
            <div 
              key={index}
              className={`py-16 ${index !== strategies.length - 1 ? 'border-b border-slate-200' : ''}`}
              data-testid={`strategy-detail-${index}`}
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
                      {strategy.approach.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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
    </div>
  );
}
