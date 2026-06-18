import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Shield, Cpu, Scale, Server, Building, Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import {
  getLatestBlogPosts,
  getBlogPostHref,
  formatBlogDate,
} from '@/data/blogPosts';

export default function HomePage() {
  const { language } = useLanguage();

  // Structured Data for Organization (Schema.org) - FR
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://finxiacapital.com/#organization",
        "name": "FINXIA Capital",
        "url": "https://finxiacapital.com",
        "description": "Proprietary investment vehicle Luxembourg SCSp. Flagship strategy TITAN DC AI (datacenter brown-to-green transformation for AI in Europe), financed by equity + debt + Green Bond. Premium Hospitality, Urban Residential, C.CAPITAL. Augmented operational discipline across portfolio lifecycle.",
        "foundingDate": "2024",
        "legalName": "FINXIA Capital SCSp",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "LU",
          "addressLocality": "Luxembourg"
        },
        "email": "contact@finxiacapital.com",
        "sameAs": [
          "https://linkedin.com/company/finxiacapital",
          "https://www.crunchbase.com/organization/finxia-capital"
        ],
        "knowsAbout": [
          "Alternative Asset Management",
          "Proprietary SCSp Investment Vehicle",
          "Datacenter Investment",
          "AI Infrastructure Optimization",
          "European Real Estate",
          "Brown-to-Green Transformation",
          "PUE Optimization",
          "Energy Efficiency Datacenters",
          "EED Directive Compliance"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://finxiacapital.com/#website",
        "url": "https://finxiacapital.com",
        "name": "FINXIA Capital",
        "publisher": {
          "@id": "https://finxiacapital.com/#organization"
        },
        "inLanguage": ["fr", "en"]
      }
    ]
  };

  const pillars = [
    { 
      id: 'real-assets',
      icon: Shield, 
      title: language === 'fr' ? 'Actifs Réels' : 'Real Assets', 
      text: language === 'fr' 
        ? 'Les actifs réels restent le meilleur terrain de création de valeur. Datacenters, hôtellerie, résidentiel — des fondations tangibles.' 
        : 'Real assets remain the best ground for value creation. Datacenters, hospitality, residential — tangible foundations.'
    },
    { 
      id: 'titan-datacenter',
      icon: Cpu, 
      title: language === 'fr' ? 'TITAN DC — Infrastructure IA' : 'TITAN DC — AI Infrastructure', 
      text: language === 'fr'
        ? 'Datacenters brown-to-green : acquisition de friches industrielles, transformation en infrastructure IA basse consommation, certification PUE et financement Green Bond dédié.'
        : 'Brown-to-green datacenters: acquisition of industrial brownfields, transformation into low-energy AI infrastructure, PUE certification and dedicated Green Bond financing.'
    },
    { 
      id: 'institutional-discipline',
      icon: Scale, 
      title: language === 'fr' ? 'Discipline Institutionnelle' : 'Institutional Discipline', 
      text: language === 'fr'
        ? 'Une rigueur d\'exécution qui fait la différence. Chaque investissement fait l\'objet d\'une analyse fondamentale approfondie.'
        : 'Execution rigor that makes the difference. Every investment undergoes thorough fundamental analysis.'
    },
  ];

  const strategies = [
    {
      id: 'titan-datacenter',
      num: '01',
      icon: Server,
      title: language === 'fr' ? 'Datacenter AI Brown-to-Green' : 'AI Datacenter Brown-to-Green',
      subtitle: 'TITAN',
      founder: language === 'fr' ? 'Porté par Lila Benhammou' : 'Led by Lila Benhammou',
      text: language === 'fr' 
        ? 'Repositionnement de campus datacenters existants en infrastructure IA low-energy pour hyperscalers. Financement Green Bond ESG dédié.'
        : 'Repositioning of existing datacenter campuses into low-energy AI infrastructure for hyperscalers. Dedicated ESG Green Bond financing.',
      focus: language === 'fr' ? 'France · Espagne · Italie · Europe du Nord' : 'France · Spain · Italy · Northern Europe'
    },
    {
      id: 'hospitality-premium',
      num: '02',
      icon: Building,
      title: language === 'fr' ? 'Hôtellerie Premium' : 'Premium Hospitality',
      subtitle: language === 'fr' ? 'Rendement & Rotation' : 'Yield & Rotation',
      founder: language === 'fr' ? 'Porté par Jean-Pierre Véron' : 'Led by Jean-Pierre Véron',
      text: language === 'fr'
        ? 'Cash flow récurrent et rotation sélective d\'hôtels premium urbains.'
        : 'Recurring cash flow and selective rotation of premium urban hotels.',
      focus: 'Paris · Barcelone · Madrid · Milan'
    },
    {
      id: 'residential-flex',
      num: '03',
      icon: Home,
      title: language === 'fr' ? 'Résidentiel & Flex Living' : 'Residential & Flex Living',
      subtitle: language === 'fr' ? 'Plateforme Urbaine' : 'Urban Platform',
      founder: language === 'fr' ? 'Porté par Jean-Pierre Véron' : 'Led by Jean-Pierre Véron',
      text: language === 'fr'
        ? 'Portefeuilles opérés ciblant la demande urbaine flexible avec sorties en bloc.'
        : 'Operated portfolios targeting flexible urban demand with block exits.',
      focus: language === 'fr' ? 'Grandes Métropoles' : 'Major Metropolises'
    },
    {
      id: 'capital-opportunities',
      num: '04',
      icon: TrendingUp,
      title: 'Capital Opportunités',
      subtitle: 'C.CAPITAL',
      founder: language === 'fr' ? 'Porté par Lila Benhammou' : 'Led by Lila Benhammou',
      text: language === 'fr'
        ? 'Late-stage, secondaires décotés, situations spéciales. Taux de conversion <5%.'
        : 'Late-stage, discounted secondaries, special situations. <5% conversion rate.',
      focus: 'Late-Stage · Secondaires'
    },
  ];

  return (
    <div data-testid="home-page">
      <SEO
        title={language === 'fr' ? "Accueil — TITAN DC : Infrastructure Data Center low-energy pour l'IA en Europe | FINXIA Capital" : "Home — TITAN DC: Low-Energy Data Center Infrastructure for AI in Europe | FINXIA Capital"}
        description={language === 'fr' 
          ? "FINXIA Capital, véhicule d'investissement propriétaire SCSp luxembourgeois. Stratégie phare TITAN DC AI — infrastructure datacenter brown-to-green pour l'IA en Europe, financée par capital propre + dette + Green Bond." 
          : "FINXIA Capital, proprietary investment vehicle Luxembourg SCSp. Flagship TITAN DC AI — brown-to-green datacenter infrastructure for AI in Europe, financed by equity + debt + Green Bond."}
        canonical={language === 'fr' ? "https://finxiacapital.com/" : "https://finxiacapital.com/en/"}
        keywords="gestion actifs alternatifs Luxembourg, SCSp Luxembourg, AI-native fund, investissement alternatif Europe, datacenter AI brown to green, Green Bond ESG"
        ogImage="https://finxiacapital.com/og-image.jpg"
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/"
        hreflangEn="https://finxiacapital.com/en/"
        hreflangDefault="https://finxiacapital.com/"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20" data-testid="hero-section">
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(30, 42, 58, 0.92) 0%, rgba(30, 42, 58, 0.75) 50%, rgba(30, 42, 58, 0.6) 100%)',
            zIndex: 0
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl">
            <p className="overline mb-6 text-[#C45A3B] animate-fade-in">
              {language === 'fr' 
                ? 'TITAN DC · Infrastructure IA · SCSp · Luxembourg'
                : 'TITAN DC · AI Infrastructure · SCSp · Luxembourg'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 animate-slide-up">
              {language === 'fr' ? (
                <>
                  TITAN DC : Infrastructure<br/>
                  <span className="text-[#C45A3B]">Data Center low-energy pour l'IA en Europe.</span>
                </>
              ) : (
                <>
                  TITAN DC: Low-Energy<br/>
                  <span className="text-[#C45A3B]">Data Center Infrastructure for AI in Europe.</span>
                </>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed animate-slide-up stagger-1 max-w-3xl">
              {language === 'fr'
                ? 'FINXIA Capital est un véhicule d\'investissement propriétaire structuré en SCSp luxembourgeoise, déployant capital propre + dette + Green Bond sur la stratégie phare TITAN DC AI — transformation brown-to-green de datacenters européens en infrastructure IA basse consommation.'
                : 'FINXIA Capital is a proprietary investment vehicle structured as a Luxembourg SCSp, deploying equity + debt + Green Bond on its flagship TITAN DC AI strategy — brown-to-green transformation of European datacenters into low-energy AI infrastructure.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
              <Link
                href="/strategies"
                data-testid="hero-cta-strategies"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                {language === 'fr' ? "Découvrir nos axes d'investissements" : 'Explore our investment pillars'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                data-testid="hero-cta-contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all"
              >
                {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 md:py-32 bg-white" data-testid="pillars-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{language === 'fr' ? 'Notre Conviction' : 'Our Conviction'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Actifs Réels × Infrastructure IA' : 'Real Assets × AI Infrastructure'}
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div 
                key={pillar.id}
                className="bg-slate-50 p-10 card-hover text-center"
                data-testid={`pillar-card-${pillar.id}`}
              >
                <div className="w-16 h-16 bg-[#C45A3B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-8 h-8 text-[#C45A3B]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Overview */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="strategies-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{language === 'fr' ? 'Stratégies' : 'Strategies'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Quatre Pôles de Création de Valeur' : 'Four Value Creation Poles'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Une discipline d\'exécution institutionnelle. Une architecture opérationnelle augmentée, calibrée pour la transformation brown-to-green de datacenters européens.'
                : 'Institutional execution discipline. An augmented operational architecture, calibrated for brown-to-green European datacenter transformation.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((strategy) => (
              <div 
                key={strategy.id}
                className="bg-white p-8 strategy-card card-hover"
                data-testid={`strategy-preview-${strategy.id}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-serif text-[#C45A3B]">{strategy.num}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#C45A3B] mb-1">{strategy.subtitle}</p>
                    <h3 className="font-serif text-xl">{strategy.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{strategy.text}</p>
                <p className="text-xs font-medium text-[#C45A3B] uppercase tracking-wider mb-4">{strategy.founder}</p>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{strategy.focus}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/strategies"
              className="inline-flex items-center gap-2 text-[#C45A3B] font-semibold hover:underline"
            >
              {language === 'fr' ? 'Voir toutes nos stratégies' : 'View all strategies'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Double Culture Real Estate × IA Section */}
      <section className="py-24 md:py-32 bg-white" data-testid="double-culture-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{language === 'fr' ? 'Notre Différence' : 'Our Edge'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Double Culture Real Estate × IA' : 'Double Culture: Real Estate × AI'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {language === 'fr'
                ? "Les seuls à comprendre le métier de nos clients. 40 ans d'expertise immobilière institutionnelle croisée avec une maîtrise opérationnelle de l'IA et des infrastructures télécoms — fibre optique, raccordement HT, réseaux."
                : "The only ones who truly understand our clients' business. 40 years of institutional real estate expertise crossed with operational mastery of AI and telecom infrastructure — fiber optics, HV connection, networks."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">
                {language === 'fr' ? 'Langage bilingue' : 'Bilingual fluency'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? "Nous parlons le langage des ingénieurs réseau et des banques d'investissement. Nous savons pourquoi un hyperscaler exige un PUE < 1,2 ET une structure juridique luxembourgeoise."
                  : "We speak the language of network engineers and investment banks. We know why a hyperscaler demands PUE < 1.2 AND a Luxembourg legal structure."}
              </p>
            </div>
            <div className="bg-slate-50 p-8 border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">
                {language === 'fr' ? 'Infrastructure tangible' : 'Tangible infrastructure'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? "Nous ne déployons pas de code. Nous raccordons des câbles HT, certifions des dalles techniques, structurons des Green Bonds. L'IA est un levier, pas un produit."
                  : "We don't deploy code. We connect HV cables, certify technical slabs, structure Green Bonds. AI is a lever, not a product."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Architecture Section */}
      <section className="py-24 md:py-32 bg-[#1E2A3A] text-white" data-testid="ai-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline text-[#C45A3B] mb-4">
                {language === 'fr' ? 'Discipline Opérationnelle Augmentée' : 'Augmented Operational Discipline'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                {language === 'fr' 
                  ? 'La technologie au service de l\'exécution, pas du storytelling.'
                  : 'Technology in service of execution, not storytelling.'}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Finxia intègre une discipline opérationnelle augmentée — des outils propriétaires couvrent le sourcing, le suivi de performance, la veille réglementaire et l\'optimisation des sorties. L\'objectif : aucun signal perdu sur des actifs réels complexes.'
                  : 'Finxia integrates augmented operational discipline — proprietary tools cover sourcing, performance tracking, regulatory watch and exit optimization. Goal: no signal lost on complex real assets.'}
              </p>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Du sourcing augmenté qui identifie les friches industrielles avant le marché, au suivi de conformité PUE en temps réel — en passant par le suivi de dette, la gestion des revenus et l\'optimisation des sorties — chaque décision sur les actifs TITAN DC est augmentée.'
                  : 'From enhanced sourcing that identifies industrial brownfields before the market, to real-time PUE compliance tracking — through debt monitoring, revenue management and exit optimization — every decision on TITAN DC assets is augmented.'}
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                {language === 'fr'
                  ? 'Aucun signal n\'est perdu. Les actifs sont réels. L\'infrastructure est tangible. La combinaison est délibérée.'
                  : 'No signal is lost. The assets are real. The infrastructure is tangible. The combination is deliberate.'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-2xl font-serif text-[#C45A3B] mb-2">Deal Intelligence</div>
                <p className="text-slate-400 text-sm">{language === 'fr' ? 'Sourcing Augmenté' : 'Enhanced Sourcing'}</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-2xl font-serif text-[#C45A3B] mb-2">Asset Monitor</div>
                <p className="text-slate-400 text-sm">{language === 'fr' ? 'Suivi Temps Réel' : 'Real-Time Tracking'}</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-2xl font-serif text-[#C45A3B] mb-2">Debt Tracker</div>
                <p className="text-slate-400 text-sm">{language === 'fr' ? 'Suivi Dette' : 'Debt Monitoring'}</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-2xl font-serif text-[#C45A3B] mb-2">Revenue Manager</div>
                <p className="text-slate-400 text-sm">{language === 'fr' ? 'Optimisation Revenus' : 'Revenue Optimization'}</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-2xl font-serif text-[#C45A3B] mb-2">Ops Tracker</div>
                <p className="text-slate-400 text-sm">{language === 'fr' ? 'Suivi Opérationnel' : 'Operations Tracking'}</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-2xl font-serif text-[#C45A3B] mb-2">Exit Optimizer</div>
                <p className="text-slate-400 text-sm">{language === 'fr' ? 'Sorties Stratégiques' : 'Strategic Exits'}</p>
              </div>
            </div>
          </div>

          {/* Examples by Vertical */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">
              {language === 'fr' ? 'Exemples de valeur ajoutée par verticale' : 'Value Added Examples by Vertical'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 border-l-2 border-[#C45A3B]">
                <div className="text-[#C45A3B] text-xs font-semibold uppercase tracking-wider mb-3">TITAN DC AI</div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  {language === 'fr'
                    ? "Le sourcing augmenté identifie les friches industrielles correspondant aux critères techniques TITAN (emprise, raccordement HT, conformité ICPE) avant mise sur le marché. Le suivi de conformité PUE et les indicateurs réglementaires EED sont monitorés en continu sur chaque actif acquis en portefeuille."
                    : "Enhanced sourcing identifies industrial brownfields matching TITAN technical criteria (footprint, HV connection, ICPE compliance) before going to market. PUE compliance and EED regulatory indicators are continuously monitored on each acquired portfolio asset."}
                </p>
              </div>
              <div className="bg-white/5 p-6 border-l-2 border-[#C45A3B]">
                <div className="text-[#C45A3B] text-xs font-semibold uppercase tracking-wider mb-3">
                  {language === 'fr' ? 'Hôtellerie Premium' : 'Premium Hospitality'}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  {language === 'fr'
                    ? "Le Revenue Manager optimise les stratégies tarifaires en temps réel par établissement. L'Ops Tracker surveille les ratios de performance opérationnelle (RevPAR, GOP) et déclenche des alertes sur les dérives de coûts."
                    : "Revenue Manager optimizes pricing strategies in real time per property. Ops Tracker monitors operational performance ratios (RevPAR, GOP) and triggers alerts on cost drifts."}
                </p>
              </div>
              <div className="bg-white/5 p-6 border-l-2 border-[#C45A3B]">
                <div className="text-[#C45A3B] text-xs font-semibold uppercase tracking-wider mb-3">
                  {language === 'fr' ? 'Résidentiel & Flex Living' : 'Residential & Flex Living'}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  {language === 'fr'
                    ? "Le Deal Intelligence analyse les dynamiques de demande locative par micro-marché urbain. L'Exit Optimizer modélise les fenêtres de sortie optimales en fonction des conditions de marché pour les cessions en bloc."
                    : "Deal Intelligence analyzes rental demand dynamics by urban micro-market. Exit Optimizer models optimal exit windows based on market conditions for block disposals."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure SCSp */}
      <section className="py-24 md:py-32 bg-white" data-testid="structure-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B]">
                  <div className="text-xl font-serif text-[#1E2A3A] mb-2">
                    {language === 'fr' ? 'Capital Propre' : 'Equity Capital'}
                  </div>
                  <p className="text-slate-500 text-sm">
                    {language === 'fr' ? 'Founders\' Equity' : 'Founders\' Equity'}
                  </p>
                </div>
                <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B]">
                  <div className="text-xl font-serif text-[#1E2A3A] mb-2">
                    {language === 'fr' ? 'Levier Dette' : 'Debt Leverage'}
                  </div>
                  <p className="text-slate-500 text-sm">
                    {language === 'fr' ? 'Senior Leverage' : 'Senior Leverage'}
                  </p>
                </div>
                <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B]">
                  <div className="text-xl font-serif text-[#1E2A3A] mb-2">Green Bond</div>
                  <p className="text-slate-500 text-sm">TITAN DC AI Financing</p>
                </div>
                <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B]">
                  <div className="text-xl font-serif text-[#1E2A3A] mb-2">SCSp</div>
                  <p className="text-slate-500 text-sm">
                    {language === 'fr' ? 'Structure Luxembourg' : 'Luxembourg Structure'}
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="overline mb-4">
                {language === 'fr' ? 'Structure & Cadre' : 'Structure & Framework'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                SCSp Luxembourg
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed">
                {language === 'fr'
                  ? 'FINXIA Capital est structurée comme une Société en Commandite Spéciale (SCSp) de droit luxembourgeois, garantissant flexibilité, gouvernance rigoureuse et cadre réglementaire de premier plan pour les investisseurs professionnels.'
                  : 'FINXIA Capital is structured as a Luxembourg Special Limited Partnership (SCSp), ensuring flexibility, rigorous governance, and a first-class regulatory framework for professional investors.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capital & Structure */}
      <section className="py-24 md:py-32 bg-white" data-testid="capital-structure-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="overline mb-4">
                {language === 'fr' ? 'Capital & Structure' : 'Capital & Structure'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                {language === 'fr' ? 'Capital & Structure' : 'Capital & Structure'}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {language === 'fr'
                  ? "FINXIA Capital investit exclusivement ses fonds propres au travers d'une SCSp luxembourgeoise. Il n'y a pas de levée de capitaux auprès d'investisseurs tiers, pas de souscription publique, pas de LP. Chaque décision d'allocation engage directement le capital des associés fondateurs."
                  : "FINXIA Capital invests exclusively its own equity through a Luxembourg SCSp. There is no third-party fundraising, no public subscription, no LPs. Every allocation decision directly commits the founders' capital."}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                {language === 'fr'
                  ? "Sur certaines opérations ciblées, FINXIA Capital peut structurer des co-investissements institutionnels via SPV dédiés — permettant à des partenaires sélectionnés de participer deal-by-deal, sans entrée dans la structure SCSp principale."
                  : "On selected transactions, FINXIA Capital may structure institutional co-investments through dedicated SPVs — allowing selected partners to participate deal-by-deal, without entering the main SCSp structure."}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B]">
                <div className="text-xl font-serif text-[#1E2A3A] mb-2">
                  {language === 'fr' ? 'Capital propriétaire' : 'Proprietary Capital'}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? "100% fonds propres des associés fondateurs. Aucun LP, aucune levée externe."
                    : "100% founders' own equity. No LPs, no external fundraising."}
                </p>
              </div>
              <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B]">
                <div className="text-xl font-serif text-[#1E2A3A] mb-2">
                  {language === 'fr' ? 'Co-investissement deal-by-deal' : 'Deal-by-Deal Co-investment'}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? "SPV dédiés sur opérations ciblées pour partenaires institutionnels sélectionnés."
                    : "Dedicated SPVs on targeted operations for selected institutional partners."}
                </p>
              </div>
              <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B]">
                <div className="text-xl font-serif text-[#1E2A3A] mb-2">
                  {language === 'fr' ? 'Alignement direct' : 'Direct Alignment'}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'fr'
                    ? "Chaque décision d'allocation engage le capital des associés. Skin in the game total."
                    : "Every allocation decision commits founders' capital. Total skin in the game."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Campus IA Formation Section */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="campus-formation-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{language === 'fr' ? 'Impact Territorial' : 'Local Impact'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Campus IA Formation' : 'AI Training Campuses'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {language === 'fr'
                ? "Là où nous installons des datacenters, nous créons de l'emploi local."
                : "Where we install datacenters, we create local jobs."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border-t-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">{language === 'fr' ? 'Public cible' : 'Target audience'}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? "Jeunes de 18 à 25 ans, sans diplôme requis. Recrutement local sur les territoires d'implantation des sites TITAN DC."
                  : "Young people aged 18-25, no diploma required. Local recruitment on the territories where TITAN DC sites are located."}
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">{language === 'fr' ? 'Formation pratique' : 'Hands-on training'}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? "Formation sur équipement réel : serveurs, racks, câblage réseau, UPS, baies de distribution électrique. Apprentissage par la pratique sur le site."
                  : "Training on real equipment: servers, racks, network cabling, UPS, electrical distribution bays. Learning by doing on site."}
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">{language === 'fr' ? 'Emploi garanti' : 'Guaranteed employment'}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? "Garantie d'embauche via les partenaires opérateurs qui louent les sites. Objectif : 70%+ d'emploi à 6 mois."
                  : "Hiring guarantee via operator partners who lease the sites. Target: 70%+ employment at 6 months."}
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-[#1E2A3A]">{language === 'fr' ? 'Territoires en transition' : 'Territories in transition'}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? "Les projets DC s'implantent sur des territoires en transition — les emplois doivent rester sur ces territoires."
                  : "DC projects are located in transitioning territories — jobs must stay in those territories."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              {language === 'fr' ? 'Notre ADN' : 'Our DNA'}
            </h2>
            <div className="w-16 h-1 bg-[#C45A3B] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { value: '40+', label: language === 'fr' ? 'ans — Track record immobilier institutionnel' : 'years — Institutional real estate track record', sublabel: 'Jean-Pierre Véron' },
              { value: '2006', label: language === 'fr' ? 'Jean-Pierre Véron — Sortie Financière Rive Gauche' : 'Jean-Pierre Véron — Financière Rive Gauche exit', sublabel: language === 'fr' ? 'pré-crise' : 'pre-crisis' },
              { value: '2023', label: language === 'fr' ? 'Lila Benhammou — Fondatrice & sortie Humans4Help IA & automation' : 'Lila Benhammou — Founder & Humans4Help AI & automation exit', sublabel: '' },
              { value: '1', label: language === 'fr' ? 'Green Bond TITAN DC AI — Financement structuré dédié' : 'Green Bond TITAN DC AI — Dedicated structured financing', sublabel: '' },
              { value: '4', label: language === 'fr' ? 'stratégies d\'investissement complémentaires' : 'complementary investment strategies', sublabel: '' },
              { value: '3', label: language === 'fr' ? 'marchés : France, Espagne, Europe du Sud' : 'markets: France, Spain, Southern Europe', sublabel: '' },
              { value: '1', label: language === 'fr' ? 'publication académique — SSRN (en cours de revue)' : 'academic publication — SSRN (under review)', sublabel: 'Abstract ID 6597918' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-50">
                <div className="text-4xl font-bold text-[#C45A3B] mb-2">{stat.value}</div>
                <div className="text-slate-700 text-sm leading-tight">{stat.label}</div>
                {stat.sublabel && <div className="text-slate-500 text-xs mt-1">{stat.sublabel}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-First Differentiator Quote */}
      <section className="py-16 bg-[#1E2A3A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white text-2xl md:text-3xl font-serif leading-relaxed">
            {language === 'fr'
              ? '"Là où d\'autres construisent des outils, nous construisons des infrastructures — des datacenters aux formations locales, en passant par les Green Bonds."'
              : '"Where others build tools, we build infrastructure — from datacenters to local training, through Green Bonds."'}
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              {language === 'fr' ? 'Actualités' : 'News'}
            </h2>
            <div className="w-16 h-1 bg-[#C45A3B] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {getLatestBlogPosts(3).map((post) => {
              const href = getBlogPostHref(post, language);
              return (
                <Link
                  key={post.frSlug}
                  href={href}
                  className="bg-white p-6 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow"
                  data-testid={`home-news-card-${post.frSlug}`}
                >
                  <div className="text-[#C45A3B] text-xs font-medium uppercase mb-2">{post.category}</div>
                  <div className="text-slate-500 text-sm mb-3">{formatBlogDate(post.date, language)}</div>
                  <h3 className="font-serif text-xl mb-3">{post.title[language]}</h3>
                  <p className="text-slate-600 text-sm">{post.excerpt[language]}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {language === 'fr'
              ? "Discuter d'une opportunité de co-investissement"
              : "Discuss a co-investment opportunity"}
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Partenaires opérationnels, institutionnels et co-investisseurs sur opérations ciblées : notre équipe est disponible pour échanger.'
              : 'Operational partners, institutional investors and co-investors on targeted transactions: our team is available to engage.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/strategies"
              className="btn-secondary inline-flex items-center gap-2"
            >
              {language === 'fr' ? 'Découvrir nos Stratégies' : 'Discover our Strategies'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="btn-secondary inline-flex items-center gap-2"
            >
              {language === 'fr' ? 'Notre Équipe' : 'Our Team'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              data-testid="cta-contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
