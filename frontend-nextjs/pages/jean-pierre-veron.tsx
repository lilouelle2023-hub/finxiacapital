import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { buildBreadcrumbSchema } from '@/lib/breadcrumb';
import { ExternalLink, Calendar, User, Camera, MapPin, Mail, Briefcase } from 'lucide-react';
import SEO from '@/components/SEO';

export default function PressJPVPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

  const breadcrumbSchema = buildBreadcrumbSchema(
    language,
    'jean-pierre-veron',
    language === 'fr' ? "Jean-Pierre Véron" : "Jean-Pierre Véron"
  );

  const pressArticles = [
    {
      id: 'businessimmo-frg-norev',
      date: '2006-11-29',
      source: 'Business Immo',
      title: language === 'fr' 
        ? 'Jean-Pierre Véron quitte FRG pour créer Financière Norev' 
        : 'Jean-Pierre Véron leaves FRG to create Financière Norev',
      url: 'https://www.businessimmo.com/actualites/article/1936937625/jean-pierre-veron-quitte-frg-pour-creer-financiere-norev',
      category: language === 'fr' ? 'Presse immobilière' : 'Real Estate Press',
    },
    {
      id: 'lesechos-fadesa',
      date: '2005-10-13',
      source: 'Les Echos',
      title: language === 'fr' 
        ? 'Michel Bressot : Fadesa s\'implante en France avec Financière Rive Gauche' 
        : 'Michel Bressot: Fadesa establishes itself in France with Financière Rive Gauche',
      url: 'https://www.lesechos.fr/2005/10/michel-bressot-fadesa-simplante-en-france-avec-financiere-rive-gauche-619542',
      category: language === 'fr' ? 'Presse économique' : 'Economic Press',
    },
    {
      id: 'lesechos-vietnam',
      date: '1996-03-14',
      source: 'Les Echos',
      title: language === 'fr' 
        ? 'Des Français très discrets — Financière Rive Gauche au Vietnam' 
        : 'Very discreet French — Financière Rive Gauche in Vietnam',
      url: 'https://www.lesechos.fr/1996/03/des-francais-tres-discrets-831468',
      category: language === 'fr' ? 'Presse économique' : 'Economic Press',
    },
  ];

  const milestones = [
    {
      year: '1991',
      title: language === 'fr' ? 'Fondation de Financière Rive Gauche' : 'Foundation of Financière Rive Gauche',
      description: language === 'fr' 
        ? 'Création de FRG en puisant dans les structures de défaisances bancaires les meilleures opportunités foncières à maturité.' 
        : 'Creation of FRG by drawing from bank restructuring structures the best land opportunities at maturity.',
      icon: Briefcase,
    },
    {
      year: '2005',
      title: language === 'fr' ? 'Cession à Fadesa' : 'Sale to Fadesa',
      description: language === 'fr' 
        ? 'Cession de 70% du capital de FRG au groupe espagnol FADESA, puis OPA amicale de MARTINSA.' 
        : 'Sale of 70% of FRG capital to the Spanish group FADESA, followed by friendly takeover by MARTINSA.',
      icon: Briefcase,
    },
    {
      year: '2006',
      title: language === 'fr' ? 'Création de Financière Norev' : 'Creation of Financière Norev',
      description: language === 'fr' 
        ? 'Lancement du groupe de conseil, d\'investissement et de développements immobiliers. Levée de 100M€ pour NRE Partners.' 
        : 'Launch of the advisory, investment and real estate development group. 100M€ raise for NRE Partners.',
      icon: Briefcase,
    },
    {
      year: '2023',
      title: language === 'fr' ? 'Co-fondation de FINXIA Capital' : 'Co-foundation of FINXIA Capital',
      description: language === 'fr' 
        ? 'Association avec Lila Benhammou pour créer FINXIA Capital, SCSp luxembourgeoise déployant des stratégies institutionnelles en datacenter AI, hôtellerie premium et résidentiel flexible.' 
        : 'Partnership with Lila Benhammou to create FINXIA Capital, a Luxembourg SCSp deploying institutional strategies in AI datacenter, premium hospitality and flexible residential.',
      icon: Briefcase,
    },
  ];

  return (
    <div data-testid="press-jpv-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Presse & Parcours — Jean-Pierre Véron | Finxia Capital" : "Press & Career — Jean-Pierre Véron | Finxia Capital"}
        description={language === 'fr'
          ? "Jean-Pierre Véron, co-fondateur de Finxia Capital. 40+ ans de track record immobilier institutionnel. ESSEC, Master d'Urbanisme. Fondateur de Financière Rive Gauche, Norev, NRE Partners."
          : "Jean-Pierre Véron, co-founder of Finxia Capital. 40+ years of institutional real estate track record. ESSEC, Urban Planning Master. Founder of Financière Rive Gauche, Norev, NRE Partners."}
        canonical="https://finxiacapital.com/jean-pierre-veron/"
        keywords="Jean-Pierre Véron, Finxia Capital, Financière Rive Gauche, Norev, NRE Partners, immobilier institutionnel, ESSEC, FADESA, Binswanger, asset management"
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">
              {language === 'fr' ? 'Presse & Parcours' : 'Press & Career'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr'
                ? 'Jean-Pierre Véron'
                : 'Jean-Pierre Véron'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'Co-fondateur de Finxia Capital, Jean-Pierre Véron est un entrepreneur immobilier français avec 40+ ans de track record institutionnel. Diplômé de l\'ESSEC et d\'un Master d\'Urbanisme, il a fondé Financière Rive Gauche, Norev et NRE Partners avant de co-créer FINXIA Capital avec Lila Benhammou.'
                : 'Co-founder of Finxia Capital, Jean-Pierre Véron is a French real estate entrepreneur with 40+ years of institutional track record. Graduate of ESSEC and a Master in Urban Planning, he founded Financière Rive Gauche, Norev and NRE Partners before co-creating FINXIA Capital with Lila Benhammou.'}
            </p>
          </div>
        </div>
      </section>

      {/* Parcours / Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="overline mb-4">{language === 'fr' ? 'Parcours' : 'Career'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? '40+ ans de Track Record' : '40+ Years of Track Record'}
            </h2>
            <div className="section-divider mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="bg-slate-50 p-6 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <milestone.icon className="w-5 h-5 text-[#C45A3B]" />
                  <span className="text-[#C45A3B] text-sm font-bold">{milestone.year}</span>
                </div>
                <h3 className="font-serif text-lg mb-2">{milestone.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="overline mb-4">{language === 'fr' ? 'Articles & Mentions' : 'Articles & Mentions'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Dans la Presse' : 'In the Press'}
            </h2>
            <div className="section-divider mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pressArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-white p-6 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#C45A3B] text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 text-xs">{article.source}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg mb-3 group-hover:text-[#C45A3B] transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1 text-[#C45A3B] text-sm font-medium">
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === 'fr' ? 'Lire l\'article' : 'Read article'}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bio détaillée */}
      <section className="py-16 bg-[#1E2A3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C45A3B] font-medium uppercase tracking-wider text-sm mb-4">
                {language === 'fr' ? 'Biographie' : 'Biography'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                {language === 'fr' ? 'Un parcours immobilier de référence' : 'A reference real estate career'}
              </h2>
              <div className="section-divider mb-8" />
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  {language === 'fr'
                    ? 'Jean-Pierre Véron commence dans l\'industrie immobilière comme "conseiller grandes surfaces" chez BOURDAIS (devenu CBRE). Il prend ensuite la direction générale de KAUFMAN & BROAD DÉVELOPPEMENT pour diversifier le constructeur de villas en France.'
                    : 'Jean-Pierre Véron began his real estate career as a "retail advisor" at BOURDAIS (later CBRE). He then became General Manager of KAUFMAN & BROAD DEVELOPMENT to diversify the villa builder in France.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'En 1991, il fonde Financière Rive Gauche (FRG), qu\'il développe en puisant à contre-cycle dans les structures de défaisances bancaires de l\'époque les meilleures opportunités foncières à maturité. FRG est cédée en 2005 au groupe espagnol FADESA, puis fait l\'objet d\'une OPA amicale de MARTINSA.'
                    : 'In 1991, he founded Financière Rive Gauche (FRG), which he developed by counter-cyclically drawing from the bank restructuring structures of the time the best land opportunities at maturity. FRG was sold in 2005 to the Spanish group FADESA, then became the subject of a friendly takeover by MARTINSA.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'En 2006, il crée la Financière Norev, groupe de conseil, d\'investissement et de développements immobiliers, avec une filiale Norev Real Estate dédiée à l\'asset management. Il crée également NRE Partners, fonds d\'investissement de 100M€ de fonds propres avec un objectif de 400M€ sur trois ans, en partenariat avec des investisseurs institutionnels anglo-saxons.'
                    : 'In 2006, he created Financière Norev, a group of advisory, investment and real estate development, with a subsidiary Norev Real Estate dedicated to asset management. He also created NRE Partners, an investment fund with 100M€ of equity and a target of 400M€ over three years, in partnership with Anglo-Saxon institutional investors.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'En 2023, il co-fonde FINXIA Capital avec Lila Benhammou, structurant un véhicule d\'investissement propriétaire en SCSp luxembourgeoise dédié aux stratégies institutionnelles en datacenter AI, hôtellerie premium et résidentiel flexible.'
                    : 'In 2023, he co-founded FINXIA Capital with Lila Benhammou, structuring a proprietary investment vehicle in Luxembourg SCSp dedicated to institutional strategies in AI datacenter, premium hospitality and flexible residential.'}
                </p>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <h3 className="font-serif text-2xl text-white mb-6">
                {language === 'fr' ? 'Entreprises & Mandats' : 'Companies & Positions'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C45A3B] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">FINXIA</p>
                    <p className="text-slate-400 text-sm">{language === 'fr' ? 'Président — Depuis 2023' : 'President — Since 2023'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C45A3B] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Norev Développement</p>
                    <p className="text-slate-400 text-sm">{language === 'fr' ? 'Président — Depuis 2008' : 'President — Since 2008'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C45A3B] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">NRE Partners Asset Management</p>
                    <p className="text-slate-400 text-sm">{language === 'fr' ? 'Président — Depuis 2008' : 'President — Since 2008'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C45A3B] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Financière Rive Gauche (FRG)</p>
                    <p className="text-slate-400 text-sm">{language === 'fr' ? 'Fondateur & Président — 1991 à 2006' : 'Founder & President — 1991 to 2006'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C45A3B] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Kaufman & Broad Développement</p>
                    <p className="text-slate-400 text-sm">{language === 'fr' ? 'Directeur Général' : 'General Manager'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C45A3B] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">CBRE / BOURDAIS</p>
                    <p className="text-slate-400 text-sm">{language === 'fr' ? 'Conseiller grandes surfaces' : 'Retail Advisor'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {language === 'fr' ? 'Contacter Jean-Pierre Véron' : 'Contact Jean-Pierre Véron'}
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Pour toute demande de presse, d\'interview ou de partenariat autour de l\'immobilier institutionnel et de la stratégie FINXIA Capital.'
              : 'For any press, interview, or partnership request around institutional real estate and the FINXIA Capital strategy.'}
          </p>
          <a
            href="mailto:contact@finxiacapital.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            contact@finxiacapital.com
          </a>
        </div>
      </section>
    </div>
  );
}
