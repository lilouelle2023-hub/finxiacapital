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
      markets: 'France · Espagne · Portugal',
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
