import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowRight, Zap, Filter } from 'lucide-react';
import SEO from '@/components/SEO';
import blogPosts from '@/data/blogPosts.json';

export default function BlogIndexPage() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = React.useState('all');

  const newsItems = [
    {
      id: 27,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-08-07',
      title: {
        fr: "NVIDIA commande 1,2 million de GPU Blackwell pour 2027 — la penurie de puces menace les datacenters europeens",
        en: "NVIDIA orders 1.2 million Blackwell GPUs for 2027 — chip shortage threatens European datacenters"
      },
      source: 'Reuters'
    },
    {
      id: 28,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-08-06',
      title: {
        fr: "Atos et Schneider Electric lancent un datacenter modulaire green de 50 MW pour le cloud souverain francais",
        en: "Atos and Schneider Electric launch a 50 MW green modular datacenter for French sovereign cloud"
      },
      source: 'Les Echos'
    },
    {
      id: 29,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-08-06',
      title: {
        fr: "L'UE impose la certification energie-carbone pour tous les modeles IA d'ici 2028 — les datacenters en premiere ligne",
        en: "EU mandates energy-carbon certification for all AI models by 2028 — datacenters on the front line"
      },
      source: 'Bloomberg'
    },

    {
      id: 24,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2026-08-05',
      title: {
        fr: "Le supercalculateur exascale francais atteint 2 ExaFLOPS — 4 milliards d'euros investis pour la souverainete numerique",
        en: "French exascale supercomputer reaches 2 ExaFLOPS — 4 billion euros invested for digital sovereignty"
      },
      source: 'HPC Wire'
    },
    {
      id: 25,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-08-04',
      title: {
        fr: "Google annonce 3 milliards d'euros d'investissement en Pologne — 2 datacenters hyperscale a Varsovie",
        en: "Google announces 3 billion euros investment in Poland — 2 hyperscale datacenters in Warsaw"
      },
      source: 'Bloomberg'
    },
    {
      id: 26,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-08-04',
      title: {
        fr: "xAI de Elon Musk deploye 100 000 GPU H100 a Memphis — le plus grand cluster d'entrainement IA au monde",
        en: "Elon Musk's xAI deploys 100,000 H100 GPUs in Memphis — the world's largest AI training cluster"
      },
      source: 'TechCrunch'
    },
    {
      id: 20,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-07-28',
      title: {
        fr: "67% des opérateurs européens citent l'accès à l'électricité comme défi numéro 1 — prime de rareté sur les actifs raccordés",
        en: "67% of European operators cite electricity access as top challenge — scarcity premium on connected assets"
      },
      source: 'EUDCA 2026'
    },
    {
      id: 21,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-07-27',
      title: {
        fr: "NVIDIA aligne les hyperscalers sur l'architecture 800V DC — les PDB convertissent directement 800V en 6V pour les accélérateurs IA",
        en: "NVIDIA aligns hyperscalers on 800V DC architecture — PDBs convert 800V directly to 6V for AI accelerators"
      },
      source: 'PCIM 2026'
    },
    {
      id: 22,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-07-26',
      title: {
        fr: "Le marché de la consommation électrique des datacenters IA atteindra 70,6 Md$ d'ici 2035 — CAGR de 18,9%",
        en: "AI datacenter electricity consumption market to reach $70.6B by 2035 — 18.9% CAGR"
      },
      source: 'Precedence Research'
    },
    {
      id: 23,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-07-25',
      title: {
        fr: "Cerebras déploie 200 MW en Europe d'ici fin 2027 — Ferrovial investit 1 Md€ à Madrid",
        en: "Cerebras deploys 200 MW in Europe by end 2027 — Ferrovial invests €1B in Madrid"
      },
      source: 'DataX Connect'
    },
    {
      id: 17,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-07-24',
      title: {
        fr: "NVIDIA annonce les HBM4 pour 2027 : 48 GB par stack, 12-Hi — les supercalculateurs européens se réorganisent",
        en: "NVIDIA announces HBM4 for 2027: 48 GB per stack, 12-Hi — European supercomputers reorganize"
      },
      source: 'Bloomberg'
    },
    {
      id: 18,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-07-23',
      title: {
        fr: "L'Europe déploie son premier datacenter sous-marin en Méditerranée — refroidissement naturel et latences record",
        en: "Europe deploys its first underwater datacenter in the Mediterranean — natural cooling and record latency"
      },
      source: 'Les Echos'
    },
    {
      id: 19,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-07-22',
      title: {
        fr: "L'UE exige la certification carbone pour tous les datacenters alimentant des modèles IA d'ici 2028",
        en: "EU mandates carbon certification for all datacenters powering AI models by 2028"
      },
      source: 'Reuters'
    },
    {
      id: 14,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-07-10',
      title: {
        fr: "NVIDIA dévoile les Blackwell Ultra : 200 kW par rack, refroidissement liquide obligatoire — les datacenters européens en sursis",
        en: "NVIDIA unveils Blackwell Ultra: 200 kW per rack, liquid cooling mandatory — European datacenters on notice"
      },
      source: 'Bloomberg'
    },
    {
      id: 15,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-07-09',
      title: {
        fr: "Le projet de cloud souverain Gaia-X atteint 200 fournisseurs certifiés — la France et l'Allemagne pilotent le déploiement",
        en: "Gaia-X sovereign cloud project reaches 200 certified providers — France and Germany lead deployment"
      },
      source: "Les Echos"
    },
    {
      id: 16,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-07-09',
      title: {
        fr: "Meta investit 15 milliards de dollars dans un méga-datacenter en Lorraine — la plus grande infrastructure IA d'Europe",
        en: "Meta invests $15 billion in mega-datacenter in Lorraine — Europe's largest AI infrastructure"
      },
      source: 'Reuters'
    },
    {
      id: 11,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-07-08',
      title: {
        fr: "NVIDIA annonce 500 000 GPU Blackwell pour 2027 — les hyperscalers européens se précipitent sur les précommandes",
        en: "NVIDIA announces 500,000 Blackwell GPUs for 2027 — European hyperscalers rush pre-orders"
      },
      source: 'Reuters'
    },
    {
      id: 12,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-07-07',
      title: {
        fr: "La France débloque 2 milliards d'euros pour les datacenters green — les projets PUE < 1,2 prioritaires",
        en: "France unlocks 2 billion euros for green datacenters — PUE < 1.2 projects prioritized"
      },
      source: "Les Echos"
    },
    {
      id: 13,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-07-07',
      title: {
        fr: "DeepSeek lance un modèle open-source de 671 milliards de paramètres — l'entraînement coûte 10x moins cher que GPT-4",
        en: "DeepSeek launches 671-billion-parameter open-source model — training costs 10x less than GPT-4"
      },
      source: 'TechCrunch'
    },
    {
      id: 1,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-07-04',
      title: {
        fr: "NVIDIA dépasse les 4 000 milliards de capitalisation — les H100 alimentent la ruée vers l'or des datacenters",
        en: "NVIDIA surpasses $4 trillion market cap — H100 GPUs fuel the datacenter gold rush"
      },
      source: 'Bloomberg / Reuters'
    },
    {
      id: 2,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-07-02',
      title: {
        fr: "Schneider Electric injecte 1,5 milliard d'euros dans les datacenters modulaires — l'edge computing devient stratégique",
        en: "Schneider Electric invests €1.5B in modular datacenters — edge computing becomes strategic"
      },
      source: 'Les Echos'
    },
    {
      id: 3,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-07-01',
      title: {
        fr: "Mistral lève 1,2 milliard — son modèle Large atteint la performance GPT-4 sur les benchmarks européens",
        en: "Mistral raises $1.2B — its Large model reaches GPT-4 performance on European benchmarks"
      },
      source: 'TechCrunch'
    },
    {
      id: 4,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2026-06-30',
      title: {
        fr: "Le Jupiter exascale allemand entre en production — 1 ExaFLOPS pour la recherche européenne en IA",
        en: "Germany's Jupiter exascale supercomputer enters production — 1 ExaFLOPS for European AI research"
      },
      source: 'HPC Wire'
    },
    {
      id: 5,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-06-28',
      title: {
        fr: "L'Irlande suspend 70% des nouveaux projets de datacenters — la crise énergétique frappe l'Europe",
        en: "Ireland suspends 70% of new datacenter projects — energy crisis hits Europe"
      },
      source: 'The Irish Times'
    },
    {
      id: 6,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-06-25',
      title: {
        fr: "Blackwell B200 : 4,3x plus rapide que H100, 120 kW par serveur — la consommation électrique explose",
        en: "Blackwell B200: 4.3x faster than H100, 120 kW per server — power consumption explodes"
      },
      source: 'AnandTech'
    },
    {
      id: 7,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-06-22',
      title: {
        fr: "Anthropic lève 3,5 milliards de dollars — Claude 4 réduit les hallucinations de 40%",
        en: "Anthropic raises $3.5 billion — Claude 4 reduces hallucinations by 40%"
      },
      source: 'Financial Times'
    },
    {
      id: 8,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-06-20',
      title: {
        fr: "Microsoft investit 8 milliards de dollars en France — 3 nouveaux datacenters cloud annoncés",
        en: "Microsoft invests $8 billion in France — 3 new cloud datacenters announced"
      },
      source: 'La Tribune'
    },
    {
      id: 9,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2026-06-18',
      title: {
        fr: "AMD MI350 : 288 GB HBM3e, 35 petaFLOPS FP8 — la concurrence s'intensifie face à NVIDIA",
        en: "AMD MI350: 288 GB HBM3e, 35 petaFLOPS FP8 — competition intensifies against NVIDIA"
      },
      source: "Tom's Hardware"
    },
    {
      id: 10,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-06-15',
      title: {
        fr: "L'UE adopte l'AI Act — les datacenters européens doivent prouver la traçabilité des modèles",
        en: "EU adopts AI Act — European datacenters must prove model traceability"
      },
      source: 'Politico EU'
    }
  ];

  const filters = [
    { key: 'all', label: { fr: 'Tout', en: 'All' } },
    { key: 'hpc', label: { fr: 'HPC', en: 'HPC' } },
    { key: 'ia', label: { fr: 'IA', en: 'AI' } },
    { key: 'dc', label: { fr: 'Datacenter', en: 'Datacenter' } },
    { key: 'nvidia', label: { fr: 'NVIDIA', en: 'NVIDIA' } }
  ];

  const filteredNews = activeFilter === 'all'
    ? newsItems
    : newsItems.filter(item => item.topic === activeFilter);

  // Single source of truth: data/blogPosts.json (also feeds sitemap.xml and feed.xml).
  // Per-post href resolves to the real EN page when one exists, otherwise falls back
  // to the FR page (never links to a slug that doesn't correspond to an actual file).
  //
  // Articles are grouped by strategic pole (not by month) for readability — a reader
  // scanning the blog should immediately see which fund strategy an article belongs to.
  const FUND_LEVEL_SLUGS = new Set([
    'scsp-vs-raif-vehicule-investissement-luxembourgeois',
    'gestion-fonds-18-agents-ia'
  ]);

  const POLE_ORDER = ['titan', 'hospitality', 'residential', 'fund'] as const;
  type PoleKey = typeof POLE_ORDER[number];

  const POLE_LABELS: Record<PoleKey, { fr: string; en: string }> = {
    titan: { fr: 'TITAN DC AI', en: 'TITAN DC AI' },
    hospitality: { fr: 'Hôtellerie Premium', en: 'Premium Hospitality' },
    residential: { fr: 'Résidentiel & Flex Living', en: 'Residential & Flex Living' },
    fund: { fr: 'Fonds & Gouvernance', en: 'Fund & Governance' },
  };

  const getPole = (post: typeof blogPosts[number]): PoleKey => {
    if (post.category === 'Hospitality') return 'hospitality';
    if (post.category === 'Residential') return 'residential';
    if (FUND_LEVEL_SLUGS.has(post.frSlug)) return 'fund';
    return 'titan';
  };

  const articles = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .map((post) => {
      const hasEn = Boolean(post.enSlug);
      const href = (language === 'en' && hasEn)
        ? `/en/blog/${post.enSlug}`
        : `/blog/${post.frSlug}`;
      const localizedTitle = (post.title as Record<string, string>)[language] ?? post.title.fr;
      const localizedExcerpt = (post.excerpt as Record<string, string>)[language] ?? post.excerpt.fr;
      return {
        key: post.frSlug,
        href,
        title: localizedTitle,
        excerpt: localizedExcerpt,
        date: post.date,
        category: post.category,
        readTime: post.readTime,
        pole: getPole(post)
      };
    });

  // Group articles by strategic pole (dates stay sorted desc within each pole)
  const groupedByPole = articles.reduce((acc, article) => {
    if (!acc[article.pole]) {
      acc[article.pole] = [];
    }
    acc[article.pole].push(article);
    return acc;
  }, {} as Record<PoleKey, typeof articles>);

  // Only render poles that actually have published articles, in the fixed strategic order
  const activePoles = POLE_ORDER.filter((pole) => (groupedByPole[pole]?.length ?? 0) > 0);

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://finxiacapital.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'fr' ? "Blog" : "Blog",
        "item": language === 'fr' ? "https://finxiacapital.com/blog/" : "https://finxiacapital.com/en/blog/"
      }
    ]
  };

  return (
    <div data-testid="blog-index-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Blog — Recherche & Stratégie" : "Blog — Research & Strategy"}
        description={language === 'fr'
          ? "Analyses expertes sur les datacenters européens, optimisation PUE, réglementation EED et gestion de fonds alternative par IA — par FINXIA Capital."
          : "Expert analysis on European datacenters, PUE optimization, EED regulation and AI-driven alternative fund management — by FINXIA Capital."}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/" : "https://finxiacapital.com/en/blog/"}
        keywords="blog Finxia Capital, datacenter IA Europe, investissement alternatif, AI-native fund, thought leadership immobilier, analyse marché datacenters"
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/"
        hreflangEn="https://finxiacapital.com/en/blog/"
        hreflangDefault="https://finxiacapital.com/blog/"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">
              {language === 'fr' ? 'Blog' : 'Blog'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' ? 'Recherche & Stratégie' : 'Research & Strategy'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'Analyses approfondies sur les datacenters IA, l\'investissement alternatif et l\'architecture AI-native. Thought leadership par l\'équipe Finxia Capital.'
                : 'In-depth analysis on AI datacenters, alternative investment and AI-native architecture. Thought leadership by the Finxia Capital team.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Articles + News Sidebar */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN — Articles (2/3) */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mb-2 pb-4 border-b-2 border-[#C45A3B]">
                {language === 'fr' ? 'Articles' : 'Articles'}
              </h2>
              
              {activePoles.map((poleKey) => {
                const poleArticles = groupedByPole[poleKey];
                return (
                  <div key={poleKey} className="mb-12 last:mb-0">
                    <div className="flex items-baseline gap-3 mb-4 mt-6 pb-2 border-b border-slate-200">
                      <h3 className="font-serif text-xl text-slate-900">
                        {POLE_LABELS[poleKey][language]}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {poleArticles.length} {poleArticles.length > 1 ? (language === 'fr' ? 'articles' : 'articles') : (language === 'fr' ? 'article' : 'article')}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {poleArticles.map((article) => (
                        <Link
                          key={article.key}
                          href={article.href}
                          className="group bg-slate-50 card-hover flex flex-col"
                        >
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-3 text-xs">
                              <span className="text-[#C45A3B] font-medium uppercase tracking-wider">
                                {article.category}
                              </span>
                              <span className="text-slate-400">•</span>
                              <span className="text-slate-600">{article.readTime}</span>
                            </div>
                            
                            <h4 className="font-serif text-lg mb-3 group-hover:text-[#C45A3B] transition-colors leading-snug">
                              {article.title}
                            </h4>
                            
                            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Calendar className="w-3.5 h-3.5" />
                                <time dateTime={article.date}>
                                  {new Date(article.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </time>
                              </div>
                              <ArrowRight className="w-4 h-4 text-[#C45A3B] group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN — News Sidebar (1/3, sticky) */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="lg:sticky lg:top-28">
                {/* News Feed — EN HAUT */}
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-[#C45A3B]" />
                  <h3 className="font-serif text-xl text-slate-900">
                    {language === 'fr' ? "Fil d'actualités" : 'News Feed'}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  HPC • IA • DC • NVIDIA
                </p>
                
                {/* Filter buttons */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <Filter className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  {filters.map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setActiveFilter(filter.key)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                        activeFilter === filter.key
                          ? 'bg-[#C45A3B] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {filter.label[language === 'fr' ? 'fr' : 'en']}
                    </button>
                  ))}
                </div>

                {/* News items — vertical list */}
                <div className="space-y-3 mb-6">
                  {filteredNews.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded uppercase tracking-wider ${
                          item.topic === 'nvidia' ? 'bg-green-100 text-green-700' :
                          item.topic === 'hpc' ? 'bg-purple-100 text-purple-700' :
                          item.topic === 'ia' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {item.topicLabel[language === 'fr' ? 'fr' : 'en']}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-900 leading-snug mb-1">
                          {item.title[language === 'fr' ? 'fr' : 'en']}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                          <span>{item.source}</span>
                          <span>•</span>
                          <time dateTime={item.date}>
                            {new Date(item.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                              day: 'numeric',
                              month: 'short'
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Podcast Teaser — APRÈS les actualités */}
                <div className="p-4 bg-[#1E2A3A] rounded-xl text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="/images/finxia-podcast-cover.png"
                      alt="Finxia Capital Insights"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-xs text-[#C45A3B] font-semibold uppercase tracking-wider">Podcast</p>
                      <p className="text-sm font-medium">Finxia Capital Insights</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mb-3">
                    {language === 'fr'
                      ? "Épisode 1 : L'électricité, le vrai goulot d'étranglement de l'IA en France"
                      : "Episode 1: Electricity, the Real Bottleneck of AI in France"}
                  </p>
                  <Link href="/podcast/" className="text-xs font-medium text-[#C45A3B] hover:text-white transition-colors inline-flex items-center gap-1">
                    {language === 'fr' ? 'Écouter' : 'Listen'}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1E2A3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            {language === 'fr' 
              ? 'Recevoir nos analyses par email'
              : 'Receive our analysis by email'}
          </h2>
          <p className="text-slate-300 mb-6">
            {language === 'fr'
              ? 'Analyses exclusives sur les actifs alternatifs et l\'IA en gestion de portefeuille.'
              : 'Exclusive analysis on alternative assets and AI in portfolio management.'}
          </p>
          <Link
            href="/newsletter"
            className="btn-primary inline-flex items-center gap-2"
          >
            {language === 'fr' ? "S'inscrire à la newsletter" : 'Subscribe to Newsletter'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
