import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Shield, Cpu, Scale, Server, Building, Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';

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
        "description": "AI-native alternative asset management vehicle. Luxembourg SCSp. Strategies: TITAN DC AI (datacenter brown-to-green transformation), Premium Hospitality, Urban Residential, C.CAPITAL. 18 AI agents operating continuously across portfolio lifecycle.",
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
          "Datacenter Investment",
          "AI Infrastructure Optimization",
          "European Real Estate",
          "SFDR Article 9",
          "Brown-to-Green Transformation",
          "PUE Optimization",
          "Energy Efficiency Datacenters"
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
      id: 'artificial-intelligence',
      icon: Cpu, 
      title: language === 'fr' ? 'Intelligence Artificielle' : 'Artificial Intelligence', 
      text: language === 'fr'
        ? '18 agents IA opérant en parallèle à chaque étape du cycle de vie du fonds. L\'alpha est dans l\'exécution augmentée.'
        : '18 AI agents operating in parallel at every stage of the fund lifecycle. Alpha is in augmented execution.'
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
      text: language === 'fr'
        ? 'Late-stage, secondaires décotés, situations spéciales. Taux de conversion <5%.'
        : 'Late-stage, discounted secondaries, special situations. <5% conversion rate.',
      focus: 'Late-Stage · Secondaires'
    },
  ];

  return (
    <div data-testid="home-page">
      <SEO
        title={language === 'fr' ? "Accueil — L'intelligence artificielle au service des actifs réels européens | FINXIA Capital" : "Home — Artificial intelligence serving European real assets | FINXIA Capital"}
        description={language === 'fr' 
          ? "FINXIA Capital, gestionnaire d'actifs alternatifs AI-native (SCSp luxembourgeoise). 4 stratégies, 18 agents IA : TITAN DC AI, Hôtellerie Premium, Résidentiel Urbain, C.CAPITAL." 
          : "FINXIA Capital, AI-native alternative asset management vehicle (Luxembourg SCSp). 4 strategies, 18 AI agents: TITAN DC AI, Premium Hospitality, Urban Residential, C.CAPITAL."}
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
                ? 'Gestion d\'Actifs Alternatifs · SCSp · Luxembourg'
                : 'Alternative Asset Management · SCSp · Luxembourg'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 animate-slide-up">
              {language === 'fr' ? (
                <>
                  L'intelligence artificielle<br/>
                  <span className="text-[#C45A3B]">au service des actifs réels européens.</span>
                </>
              ) : (
                <>
                  Artificial intelligence<br/>
                  <span className="text-[#C45A3B]">serving European real assets.</span>
                </>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed animate-slide-up stagger-1 max-w-3xl">
              {language === 'fr'
                ? 'FINXIA Capital est un véhicule d\'investissement propriétaire structuré en SCSp luxembourgeoise, déployant un capital de conviction avec une discipline institutionnelle à travers quatre piliers de création de valeur.'
                : 'FINXIA Capital is a proprietary investment vehicle structured as a Luxembourg SCSp, deploying conviction capital with institutional discipline across four value creation pillars.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
              <Link
                href="/strategies"
                data-testid="hero-cta-strategies"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                {language === 'fr' ? 'Découvrir TITAN DC AI' : 'Explore TITAN DC AI'}
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
              {language === 'fr' ? 'Actifs Réels × Intelligence Artificielle' : 'Real Assets × Artificial Intelligence'}
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
                ? 'Une discipline d\'exécution institutionnelle. Une architecture AI-native sans équivalent.'
                : 'Institutional execution discipline. An unmatched AI-native architecture.'}
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

      {/* AI Architecture Section */}
      <section className="py-24 md:py-32 bg-[#1E2A3A] text-white" data-testid="ai-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline text-[#C45A3B] mb-4">
                {language === 'fr' ? 'Architecture AI-Native' : 'AI-Native Architecture'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                {language === 'fr' 
                  ? 'Ce n\'est pas un outil. C\'est une façon de gérer.'
                  : 'It\'s not a tool. It\'s a way of managing.'}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Finxia est construit AI-native — pas dans le sens marketing du terme, dans le sens architectural. 18 agents d\'intelligence artificielle opèrent en continu à chaque étape du cycle de vie du portefeuille.'
                  : 'Finxia is built AI-native — not in the marketing sense, but in the architectural sense. 18 artificial intelligence agents operate continuously at every stage of the portfolio lifecycle.'}
              </p>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Du Deal Intelligence qui identifie les opportunités avant le marché, à l\'Asset Monitor qui surveille la performance en temps réel — en passant par le Debt Tracker, le Revenue Manager, l\'Ops Tracker et l\'Exit Optimizer — chaque décision est augmentée.'
                  : 'From Deal Intelligence that identifies opportunities before the market, to Asset Monitor that tracks performance in real-time — through Debt Tracker, Revenue Manager, Ops Tracker, and Exit Optimizer — every decision is augmented.'}
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                {language === 'fr'
                  ? 'Aucun signal n\'est perdu. Les actifs sont réels. L\'intelligence est artificielle. La combinaison est délibérée.'
                  : 'No signal is lost. The assets are real. The intelligence is artificial. The combination is deliberate.'}
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
                    ? "Le Deal Intelligence identifie les friches industrielles correspondant aux critères techniques TITAN (emprise, raccordement HT, conformité ICPE) avant mise sur le marché. L'Asset Monitor suit en continu la conformité PUE et les indicateurs réglementaires EED sur chaque actif en portefeuille."
                    : "Deal Intelligence identifies industrial brownfields matching TITAN technical criteria (footprint, HV connection, ICPE compliance) before going to market. Asset Monitor continuously tracks PUE compliance and EED regulatory indicators across each portfolio asset."}
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
              { value: '18', label: language === 'fr' ? 'agents IA autonomes — Architecture opérationnelle native' : 'autonomous AI agents — Native operational architecture', sublabel: '' },
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
              ? '"Là où les gestionnaires traditionnels utilisent l\'IA comme outil, FINXIA l\'utilise comme système d\'exploitation."'
              : '"Where traditional managers use AI as a tool, FINXIA uses it as an operating system."'}
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
            {[
              {
                date: language === 'fr' ? '23 mai 2026' : 'May 23, 2026',
                title: language === 'fr' ? 'Data centers brown-to-green : pourquoi les actifs existants vont battre les greenfields en Europe' : 'Brown-to-Green Datacenters: Why Existing Assets Will Beat Greenfields in Europe',
                excerpt: language === 'fr' ? 'Face aux délais de raccordement de 4-7 ans, aux coûts greenfield en hausse et aux contraintes PUE imposées par l\'EED, les data centers existants mal optimisés représentent la meilleure opportunité d\'investissement en Europe.' : 'Facing 4-7 year grid connection delays, rising greenfield costs and PUE constraints imposed by the EED, existing, poorly optimized datacenters represent the best investment opportunity in Europe.',
                link: '/blog/data-centers-brown-to-green-europe-strategie-investissement/',
                tag: 'Investment Strategy'
              },
              {
                date: language === 'fr' ? '16 mai 2026' : 'May 16, 2026',
                title: language === 'fr' ? 'Data centers IA : l\'angle mort énergétique de la stratégie européenne' : 'AI Datacenters: The Energy Blind Spot of European Strategy',
                excerpt: language === 'fr' ? 'L\'IA fait exploser la demande électrique des data centers : 415 TWh en 2024, potentiellement 945 TWh en 2030 (IEA). En Irlande, les data centers pèsent déjà 21% de la consommation nationale. Comment l\'Europe peut-elle aligner ambitions IA et contraintes réseau ?' : 'AI is exploding datacenter electricity demand: 415 TWh in 2024, potentially 945 TWh in 2030 (IEA). In Ireland, datacenters already account for 21% of national consumption. How can Europe align AI ambitions with grid constraints?',
                link: '/blog/data-centers-ia-energie-strategie-europe-2030/',
                tag: 'Digital Infrastructure'
              },
              {
                date: language === 'fr' ? '2 mai 2026' : 'May 2, 2026',
                title: language === 'fr' ? 'Directive EED, secret commercial et PUE : ce que l\'Europe ne veut pas voir sur ses data centers' : 'EED Directive, Trade Secret and PUE: What Europe Won\'t Look at on its Datacenters',
                excerpt: language === 'fr' ? 'L\'Article 12 EED impose un reporting annuel aux data centers UE dès 500 kW. Mais la transparence reste partielle et crée un marché à deux vitesses dont les investisseurs spécialisés peuvent tirer parti.' : 'EED Article 12 imposes annual reporting on EU datacenters from 500 kW. But transparency remains partial and creates a two-tier market that specialized investors can leverage.',
                link: '/blog/eed-directive-secret-commercial-pue-datacenters-europe/',
                tag: 'Regulatory Compliance'
              }
            ].map((news, idx) => (
              <Link 
                key={idx} 
                href={news.link}
                target={news.link.startsWith('http') ? '_blank' : '_self'}
                rel={news.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="bg-white p-6 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow"
              >
                <div className="text-[#C45A3B] text-xs font-medium uppercase mb-2">{news.tag}</div>
                <div className="text-slate-500 text-sm mb-3">{news.date}</div>
                <h3 className="font-serif text-xl mb-3">{news.title}</h3>
                <p className="text-slate-600 text-sm">{news.excerpt}</p>
              </Link>
            ))}
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
