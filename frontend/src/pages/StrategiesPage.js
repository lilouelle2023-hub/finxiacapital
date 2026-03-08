import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Warehouse, Building, Home, TrendingUp, CheckCircle } from 'lucide-react';

export default function StrategiesPage() {
  const { language } = useLanguage();

  const strategies = [
    {
      icon: Warehouse,
      num: '01',
      subtitle: 'TITAN',
      title: language === 'fr' ? 'Logistique Brown-to-Green' : 'Brown-to-Green Logistics',
      headline: language === 'fr' 
        ? 'Transformation de plateformes logistiques obsolètes vers la certification LEED Platinum'
        : 'Transformation of obsolete logistics platforms to LEED Platinum certification',
      thesis: language === 'fr'
        ? 'Nous ciblons des plateformes logistiques existantes sous-performantes énergétiquement pour les repositionner aux meilleurs standards ESG européens. Notre thèse repose sur l\'écart de valeur entre actifs "brown" et actifs certifiés LEED ou BREEAM.'
        : 'We target existing energy-underperforming logistics platforms to reposition them to the best European ESG standards. Our thesis rests on the value gap between "brown" assets and LEED or BREEAM certified assets.',
      approach: [
        language === 'fr' ? 'Acquisition d\'actifs Grade B/C avec potentiel de certification' : 'Acquisition of Grade B/C assets with certification potential',
        language === 'fr' ? 'Programme de rénovation énergétique intensif (18-24 mois)' : 'Intensive energy renovation program (18-24 months)',
        language === 'fr' ? 'Relocation à des locataires investment grade' : 'Relocation to investment grade tenants',
        language === 'fr' ? 'Cession à des acquéreurs Core une fois la certification obtenue' : 'Sale to Core buyers once certification obtained',
      ],
      markets: 'France · Espagne · Italie',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    },
    {
      icon: Building,
      num: '02',
      subtitle: language === 'fr' ? 'Rendement & Rotation' : 'Yield & Rotation',
      title: language === 'fr' ? 'Hôtellerie Premium' : 'Premium Hospitality',
      headline: language === 'fr'
        ? 'Portefeuille d\'hôtels premium européens combinant génération de revenus récurrents et rotation sélective'
        : 'Premium European hotel portfolio combining recurring revenue generation and selective rotation',
      thesis: language === 'fr'
        ? 'Le segment hôtelier premium urbain offre une résilience structurelle grâce à des RevPAR soutenus par la demande internationale. Notre approche hybride combine des actifs long terme générateurs de cash flow avec des opportunités de rotation après repositionnement.'
        : 'The urban premium hotel segment offers structural resilience through RevPAR supported by international demand. Our hybrid approach combines long-term cash flow generating assets with rotation opportunities post-repositioning.',
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
      icon: Home,
      num: '03',
      subtitle: language === 'fr' ? 'Plateforme Urbaine' : 'Urban Platform',
      title: language === 'fr' ? 'Résidentiel & Flex Living' : 'Residential & Flex Living',
      headline: language === 'fr'
        ? 'Stratégies résidentielles opérées ciblant la demande urbaine flexible avec sorties en bloc institutionnelles'
        : 'Operated residential strategies targeting flexible urban demand with institutional block exits',
      thesis: language === 'fr'
        ? 'La demande pour le logement flexible urbain (coliving, résidences services, build-to-rent) dépasse structurellement l\'offre dans les métropoles européennes. Nous constituons des portefeuilles opérés avec des partenaires spécialisés pour maximiser les taux d\'occupation et préparer des sorties en bloc.'
        : 'Demand for flexible urban housing (coliving, serviced residences, build-to-rent) structurally exceeds supply in European metropolises. We build operated portfolios with specialized partners to maximize occupancy rates and prepare block exits.',
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
      icon: TrendingUp,
      num: '04',
      subtitle: 'C.CAPITAL',
      title: 'Capital Opportunités',
      headline: language === 'fr'
        ? 'Investissements late-stage, secondaires et situations spéciales avec une approche disciplinée et hautement sélective'
        : 'Late-stage investments, secondaries and special situations with a disciplined and highly selective approach',
      thesis: language === 'fr'
        ? 'Le segment late-stage et secondaires offre des opportunités de décote significatives avec une visibilité accrue sur les actifs sous-jacents. Notre approche ultra-sélective se concentre sur les situations où notre expertise sectorielle nous confère un avantage informationnel.'
        : 'The late-stage and secondaries segment offers significant discount opportunities with increased visibility on underlying assets. Our ultra-selective approach focuses on situations where our sector expertise gives us an informational advantage.',
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
        <meta name="description" content="Découvrez nos quatre stratégies d'investissement : Logistique Brown-to-Green, Hôtellerie Premium, Résidentiel Flex Living et Capital Opportunités." />
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
                ? 'Une conviction commune : la rigueur d\'exécution fait la différence. Chaque stratégie est déployée avec une discipline institutionnelle et un horizon de création de valeur clairement défini.'
                : 'One common conviction: execution rigor makes the difference. Each strategy is deployed with institutional discipline and a clearly defined value creation horizon.'}
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
                      {strategy.approach.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
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
