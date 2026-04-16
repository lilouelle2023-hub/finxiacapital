import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Shield, Cpu, Scale, Server, Building, Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';

export default function HomePage() {
  const { language } = useLanguage();

  // Structured Data for Organization (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FINXIA Capital",
    "url": "https://finxiacapital.com",
    "logo": "https://finxiacapital.com/logo-finxia.png",
    "description": "Véhicule d'investissement propriétaire structuré en SCSp luxembourgeoise. Datacenter AI Brown-to-Green, Hôtellerie Premium, Résidentiel Flex Living.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@finxiacapital.com"
    }
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
      focus: 'France · Espagne · Portugal'
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
        title="Accueil — Build in the real world, Scaled with AI"
        description="Finxia Capital — Véhicule d'investissement propriétaire SCSp Luxembourg. Datacenter AI Brown-to-Green, Hôtellerie Premium, Résidentiel Flex. 18 agents IA natifs. Build in the real world. Scaled with AI."
        canonical="https://finxiacapital.com/"
        keywords="gestion actifs alternatifs Luxembourg, SCSp Luxembourg, AI-native fund, investissement alternatif Europe, datacenter AI brown to green, Green Bond ESG"
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
              Build in the real world.<br/>
              <span className="text-[#C45A3B]">Scaled with AI.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed animate-slide-up stagger-1 max-w-3xl">
              {language === 'fr'
                ? 'Finxia Capital est un véhicule d\'investissement propriétaire, structuré en SCSp luxembourgeoise. Un capital de conviction, déployé avec une discipline institutionnelle sur quatre pôles de création de valeur.'
                : 'Finxia Capital is a proprietary investment vehicle, structured as a Luxembourg SCSp. Conviction capital, deployed with institutional discipline across four value creation poles.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
              <Link
                href="/strategies"
                data-testid="hero-cta-strategies"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                {language === 'fr' ? 'Découvrir nos Stratégies' : 'Discover Our Strategies'}
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

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Build in the real world. Scaled with AI.
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Investisseurs institutionnels, partenaires stratégiques : notre équipe est disponible pour répondre à vos questions.'
              : 'Institutional investors, strategic partners: our team is available to answer your questions.'}
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
