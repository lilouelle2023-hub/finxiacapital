import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Shield, Cpu, Scale } from 'lucide-react';

export default function HomePage() {
  const { t, language } = useLanguage();

  const pillars = [
    { 
      icon: Shield, 
      title: language === 'fr' ? 'Indépendance' : 'Independence', 
      text: language === 'fr' 
        ? 'Aucun conflit d\'intérêt. Nos décisions sont guidées par la seule conviction de créer de la valeur durable.' 
        : 'No conflicts of interest. Our decisions are guided solely by conviction to create lasting value.'
    },
    { 
      icon: Scale, 
      title: language === 'fr' ? 'Rigueur' : 'Rigor', 
      text: language === 'fr'
        ? 'Chaque investissement fait l\'objet d\'une analyse fondamentale approfondie avec une thèse défendable.'
        : 'Every investment undergoes thorough fundamental analysis with a defensible thesis.'
    },
    { 
      icon: Cpu, 
      title: language === 'fr' ? 'Technologie' : 'Technology', 
      text: language === 'fr'
        ? 'Infrastructure d\'agents IA propriétaires pour l\'analyse de marché et le monitoring — un avantage compétitif structurel.'
        : 'Proprietary AI agent infrastructure for market analysis and monitoring — a structural competitive advantage.'
    },
  ];

  const strategies = [
    {
      num: '01',
      title: language === 'fr' ? 'Logistique Brown-to-Green' : 'Brown-to-Green Logistics',
      subtitle: 'TITAN',
      text: language === 'fr' 
        ? 'Transformation de plateformes logistiques d\'actifs énergétiquement obsolètes vers la certification LEED Platinum.'
        : 'Transformation of energy-obsolete logistics platforms to LEED Platinum certification.',
      focus: 'France · Espagne · Italie'
    },
    {
      num: '02',
      title: language === 'fr' ? 'Hôtellerie Premium' : 'Premium Hospitality',
      subtitle: language === 'fr' ? 'Rendement & Rotation' : 'Yield & Rotation',
      text: language === 'fr'
        ? 'Portefeuille d\'hôtels premium combinant génération de revenus récurrents et rotation sélective.'
        : 'Premium hotel portfolio combining recurring revenue generation and selective rotation.',
      focus: 'Paris · Barcelone · Madrid · Milan'
    },
    {
      num: '03',
      title: language === 'fr' ? 'Résidentiel & Flex Living' : 'Residential & Flex Living',
      subtitle: language === 'fr' ? 'Plateforme Urbaine' : 'Urban Platform',
      text: language === 'fr'
        ? 'Stratégies résidentielles opérées ciblant la demande urbaine flexible avec sorties en blocs.'
        : 'Operated residential strategies targeting flexible urban demand with block exits.',
      focus: language === 'fr' ? 'Grandes Métropoles' : 'Major Metropolises'
    },
    {
      num: '04',
      title: 'Capital Opportunités',
      subtitle: 'C.CAPITAL',
      text: language === 'fr'
        ? 'Investissements late-stage, secondaires et situations spéciales avec approche hautement sélective.'
        : 'Late-stage investments, secondaries and special situations with highly selective approach.',
      focus: 'Late-Stage · Secondaires'
    },
  ];

  return (
    <div data-testid="home-page">
      <Helmet>
        <title>FINXIA Capital — Gestion d'Actifs Alternatifs · RAIF Luxembourg</title>
        <meta name="description" content="FINXIA Capital est un fonds d'investissement alternatif européen structuré en RAIF luxembourgeois, déployant des stratégies institutionnelles en immobilier et capital privé." />
        <meta property="og:title" content="FINXIA Capital — Gestion d'Actifs Alternatifs" />
        <meta property="og:description" content="Gestionnaire d'actifs alternatifs européen · Structure RAIF Luxembourg" />
        <meta property="og:site_name" content="FINXIA Capital" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" data-testid="hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <p className="overline mb-6 text-[#C45A3B] animate-fade-in">
              {language === 'fr' 
                ? 'Gestion d\'Actifs Alternatifs · Structure RAIF · Luxembourg'
                : 'Alternative Asset Management · RAIF Structure · Luxembourg'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 animate-slide-up">
              {language === 'fr' 
                ? 'Créer de la Valeur Durable. À Travers l\'Europe.'
                : 'Creating Lasting Value. Across Europe.'}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed animate-slide-up stagger-1 max-w-3xl">
              {language === 'fr'
                ? 'FINXIA Capital déploie des stratégies alternatives multi-actifs sur les marchés immobiliers et de capitaux privés européens. Une approche institutionnelle, indépendante et disciplinée.'
                : 'FINXIA Capital deploys multi-asset alternative strategies in European real estate and private capital markets. An institutional, independent, and disciplined approach.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
              <Link
                to="/strategies"
                data-testid="hero-cta-strategies"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                {language === 'fr' ? 'Découvrir nos Stratégies' : 'Discover Our Strategies'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
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
            <p className="overline mb-4">{language === 'fr' ? 'Nos Piliers' : 'Our Pillars'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Trois Convictions Fondamentales' : 'Three Core Convictions'}
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-10 card-hover text-center"
                data-testid={`pillar-card-${index}`}
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
                ? 'Une conviction commune : la rigueur d\'exécution fait la différence.'
                : 'One common conviction: execution rigor makes the difference.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-white p-8 strategy-card card-hover"
                data-testid={`strategy-preview-${index}`}
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
              to="/strategies"
              className="inline-flex items-center gap-2 text-[#C45A3B] font-semibold hover:underline"
            >
              {language === 'fr' ? 'Voir toutes nos stratégies' : 'View all strategies'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Structure RAIF */}
      <section className="py-24 md:py-32 bg-[#1E2A3A] text-white" data-testid="structure-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline text-[#C45A3B] mb-4">
                {language === 'fr' ? 'Structure & Cadre' : 'Structure & Framework'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                {language === 'fr' ? 'RAIF Luxembourg' : 'Luxembourg RAIF'}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {language === 'fr'
                  ? 'FINXIA Capital est structurée comme un Reserved Alternative Investment Fund (RAIF) de droit luxembourgeois, garantissant une gouvernance rigoureuse et une supervision via notre AIFM agréé CSSF.'
                  : 'FINXIA Capital is structured as a Luxembourg Reserved Alternative Investment Fund (RAIF), ensuring rigorous governance and supervision through our CSSF-licensed AIFM.'}
              </p>
              <Link
                to="/governance"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#C45A3B] transition-colors"
              >
                {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-3xl font-serif text-[#C45A3B] mb-2">RAIF</div>
                <p className="text-slate-400 text-sm">Luxembourg Structure</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-3xl font-serif text-[#C45A3B] mb-2">CSSF</div>
                <p className="text-slate-400 text-sm">AIFM Supervision</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-3xl font-serif text-[#C45A3B] mb-2">INREV</div>
                <p className="text-slate-400 text-sm">Reporting Standards</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-3xl font-serif text-[#C45A3B] mb-2">MiFID II</div>
                <p className="text-slate-400 text-sm">Professional Investors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {language === 'fr' 
              ? 'Entrons en Contact'
              : 'Let\'s Connect'}
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Investisseurs institutionnels, partenaires stratégiques et contreparties : notre équipe est disponible pour répondre à vos questions.'
              : 'Institutional investors, strategic partners and counterparties: our team is available to answer your questions.'}
          </p>
          <Link
            to="/contact"
            data-testid="cta-contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
