import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  CheckCircle, Award, Briefcase, Lightbulb, BarChart3,
  TrendingUp, Shield, Brain, Layers, ArrowRight
} from 'lucide-react';
import SEO from '@/components/SEO';

export default function AboutPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

  const differentiators = [
    {
      id: 'hybrid-architecture',
      icon: Layers, 
      title: language === 'fr' ? 'Architecture Hybride' : 'Hybrid Architecture',
      text: language === 'fr'
        ? 'Structure multi-poches unique combinant immobilier (logistique, hôtellerie, résidentiel) avec des opportunités de capital late-stage pour des rendements amplifiés.'
        : 'Unique multi-pocket structure combining real estate (logistics, hospitality, residential) with late-stage capital opportunities for enhanced returns.'
    },
    {
      id: 'tech-driven',
      icon: Brain, 
      title: language === 'fr' ? 'Avantage Technologique' : 'Tech-Driven Edge',
      text: language === 'fr'
        ? 'Infrastructure d\'agents IA propriétaires pour le sourcing, l\'optimisation de portefeuille et le suivi des risques en temps réel.'
        : 'Proprietary AI agent infrastructure for deal sourcing, portfolio optimization, and real-time risk monitoring.'
    },
    {
      id: 'snowball-strategy',
      icon: Shield, 
      title: language === 'fr' ? 'Stratégie Snowball' : 'Snowball Strategy',
      text: language === 'fr'
        ? 'Mécanisme de recyclage du capital amplifiant les rendements par réinvestissement stratégique à travers les cycles.'
        : 'Capital recycling mechanism amplifying returns through strategic reinvestment across cycles.'
    },
    {
      id: 'aligned-interests',
      icon: TrendingUp, 
      title: language === 'fr' ? 'Alignement des Intérêts' : 'Aligned Interests',
      text: language === 'fr'
        ? 'Engagement significatif du GP avec rémunération liée à la performance. Notre succès est directement lié aux résultats des investisseurs.'
        : 'Significant GP commitment with performance-based compensation. Our success is directly tied to investor outcomes.'
    },
  ];

  const teamMembers = [
    {
      id: 'jean-pierre-veron',
      initials: 'JPV',
      name: 'Jean-Pierre Véron',
      role: language === 'fr' ? 'Fondateur & Président' : 'Founder & Chairman',
      bio: language === 'fr'
        ? 'Professionnel chevronné de l\'investissement immobilier avec plus de 25 ans d\'expérience. FINXIA CAPITAL représente son troisième fonds institutionnel dédié à l\'immobilier européen. Ancien PDG de K&B, plateforme d\'investissement immobilier pan-européenne de premier plan.'
        : 'Seasoned real estate investment professional with over 25 years of experience. FINXIA CAPITAL represents his third institutional fund dedicated to European real estate. Former CEO of K&B, a leading pan-European real estate investment platform.',
      highlights: [
        { icon: Award, text: language === 'fr' ? '3ème fonds immobilier institutionnel' : 'Third institutional real estate fund' },
        { icon: Briefcase, text: language === 'fr' ? 'Ancien PDG de K&B' : 'Former CEO of K&B' },
        { icon: CheckCircle, text: language === 'fr' ? '25+ ans en investissement immobilier' : '25+ years in real estate investment' },
      ],
    },
    {
      id: 'lila-benhammou',
      initials: 'LB',
      name: 'Lila Benhammou',
      role: language === 'fr' ? 'Co-Fondatrice & Directrice des Investissements' : 'Co-Founder & Chief Investment Officer',
      bio: language === 'fr'
        ? 'Serial entrepreneur avec une expertise approfondie dans les technologies émergentes, l\'intelligence artificielle et la finance quantitative. Apporte des approches novatrices à la gestion d\'actifs et à l\'optimisation de portefeuille.'
        : 'Serial entrepreneur with deep expertise in emerging technologies, artificial intelligence, and quantitative finance. Brings innovative approaches to asset management and portfolio optimization.',
      highlights: [
        { icon: Lightbulb, text: language === 'fr' ? 'Serial entrepreneur en Tech & IA' : 'Serial entrepreneur in Tech & AI' },
        { icon: BarChart3, text: language === 'fr' ? 'Finance quantitative' : 'Quantitative finance background' },
        { icon: CheckCircle, text: language === 'fr' ? 'Approche innovation' : 'Innovation-driven approach' },
      ],
    },
  ];

  // FAQ Schema for About page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que Finxia Capital ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finxia Capital est un véhicule d'investissement propriétaire structuré en SCSp luxembourgeoise, déployant du capital sur 4 pôles : Datacenter AI Brown-to-Green (TITAN), Hôtellerie Premium, Résidentiel Flex Living et Capital Opportunités, avec une architecture AI-native de 18 agents IA."
        }
      },
      {
        "@type": "Question",
        "name": "Comment fonctionne l'approche AI-native de Finxia Capital ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finxia Capital déploie 18 agents d'intelligence artificielle opérant en continu : Deal Intelligence, Asset Monitor, Debt Tracker, Revenue Manager, Ops Tracker, Exit Optimizer — couvrant chaque étape du cycle de vie du portefeuille."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la structure juridique de Finxia Capital ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finxia Capital est structurée en SCSp (Société en Commandite Spéciale) luxembourgeoise, véhicule propriétaire sans levée externe, finançant TITAN via Green Bond ESG et dette senior."
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
        "name": language === 'fr' ? "À Propos" : "About",
        "item": "https://finxiacapital.com/about"
      }
    ]
  };

  return (
    <div data-testid="about-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "À Propos — Notre Vision" : "About — Our Vision"}
        description={language === 'fr' 
          ? "FINXIA Capital combine actifs réels et intelligence artificielle. Équipe expérimentée en finance, immobilier et IA. SCSp Luxembourg, 18 agents IA natifs."
          : "FINXIA Capital combines real assets and artificial intelligence. Experienced team in finance, real estate and AI. Luxembourg SCSp, 18 native AI agents."}
        canonical="https://finxiacapital.com/about/"
        keywords="Finxia Capital équipe, gestionnaire alternatif Luxembourg SCSp, 18 agents IA investissement, AI-native asset management, Jean-Pierre Véron, Lila Benhammou"
        faqSchema={faqSchema}
        breadcrumbSchema={breadcrumbSchema}
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">{language === 'fr' ? 'À Propos' : 'About'}</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' 
                ? 'Gestion Alternative avec Excellence Européenne'
                : 'Alternative Management with European Excellence'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'FINXIA Capital est un véhicule d\'investissement propriétaire, structuré en SCSp luxembourgeoise, combinant discipline institutionnelle et architecture AI-native pour créer de la valeur sur les actifs réels.'
                : 'FINXIA Capital is a proprietary investment vehicle, structured as a Luxembourg SCSp, combining institutional discipline and AI-native architecture to create value in real assets.'}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-32 bg-[#1E2A3A] text-white" data-testid="vision-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline text-[#C45A3B] mb-4">
                {language === 'fr' ? 'Notre Vision' : 'Our Vision'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                {language === 'fr' 
                  ? 'Façonner l\'Avenir de l\'Investissement Alternatif Européen'
                  : 'Shaping the Future of European Alternative Investment'}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {language === 'fr'
                  ? 'FINXIA Capital ambitionne de devenir un gestionnaire d\'actifs alternatifs pan-européen de référence, reconnu pour sa discipline institutionnelle, sa capacité d\'innovation et son aptitude à générer une valeur durable à travers les cycles de marché.'
                  : 'FINXIA Capital aims to become a reference pan-European alternative asset manager, recognized for its institutional discipline, innovation capacity, and ability to generate sustainable value across market cycles.'}
              </p>
            </div>
            <div>
              <p className="overline text-[#C45A3B] mb-4">
                {language === 'fr' ? 'Trajectoire 2025-2029' : 'Roadmap 2025-2029'}
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#C45A3B]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C45A3B] font-bold">2025</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {language === 'fr' ? 'Fondation & Déploiement' : 'Foundation & Deployment'}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {language === 'fr' 
                        ? 'Structuration, partenariats stratégiques, premiers investissements'
                        : 'Structuring, strategic partnerships, first investments'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#C45A3B]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C45A3B] font-bold">2027</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {language === 'fr' ? 'Optimisation & Croissance' : 'Optimization & Growth'}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {language === 'fr'
                        ? 'Création de valeur par gestion active, expansion géographique'
                        : 'Value creation through active management, geographic expansion'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#C45A3B]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C45A3B] font-bold">2029</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">
                      {language === 'fr' ? 'Réalisation de Valeur' : 'Value Realization'}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {language === 'fr'
                        ? 'Sorties stratégiques, distribution, préparation Fonds II'
                        : 'Strategic exits, distribution, Fund II preparation'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 md:py-32 bg-white" data-testid="differentiators-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">
              {language === 'fr' ? 'Ce Qui Nous Distingue' : 'What Sets Us Apart'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Facteurs Différenciants' : 'Differentiating Factors'}
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-50 p-8 border-t-4 border-[#C45A3B] card-hover"
                data-testid={`differentiator-${item.id}`}
              >
                <item.icon className="w-10 h-10 text-[#C45A3B] mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">
              {language === 'fr' ? 'Équipe Fondatrice' : 'Founding Team'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Leadership Expérimenté' : 'Experienced Leadership'}
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white p-8 md:p-10 shadow-sm" 
                data-testid={`founder-card-${member.id}`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-[#1E2A3A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-serif text-2xl">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                    <p className="text-[#C45A3B] font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="space-y-3 border-t border-slate-200 pt-6">
                  {member.highlights.map((highlight, idx) => (
                    <div key={`${member.id}-highlight-${idx}`} className="flex items-center gap-3">
                      <highlight.icon className="w-5 h-5 text-[#C45A3B] flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Accompanying Team */}
          <div className="mt-16 text-center">
            <div className="bg-white p-10 max-w-2xl mx-auto">
              <p className="text-slate-600 text-lg leading-relaxed">
                {language === 'fr' 
                  ? 'Accompagnés par une équipe de professionnels spécialisés par domaine : immobilier, finance, juridique, technologie et opérations.'
                  : 'Supported by a team of professionals specialized by domain: real estate, finance, legal, technology and operations.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/european-approach" className="group p-8 bg-slate-50 card-hover border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-3 group-hover:text-[#C45A3B] transition-colors">
                {language === 'fr' ? 'Approche Européenne' : 'European Approach'}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {language === 'fr' 
                  ? 'Découvrez notre stratégie de déploiement sur les marchés français, espagnol et italien.'
                  : 'Discover our deployment strategy across French, Spanish and Italian markets.'}
              </p>
              <span className="text-[#C45A3B] text-sm font-medium inline-flex items-center gap-2">
                {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/contact" className="group p-8 bg-slate-50 card-hover border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-3 group-hover:text-[#C45A3B] transition-colors">
                {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {language === 'fr' 
                  ? 'Investisseurs institutionnels et partenaires stratégiques : contactez notre équipe.'
                  : 'Institutional investors and strategic partners: contact our team.'}
              </p>
              <span className="text-[#C45A3B] text-sm font-medium inline-flex items-center gap-2">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
