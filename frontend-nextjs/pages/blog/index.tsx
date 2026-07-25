import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowRight, Zap, Filter } from 'lucide-react';
import SEO from '@/components/SEO';

export default function BlogIndexPage() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = React.useState('all');

  const newsItems = [
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

  const articles = [
    {
      slug: 'modular-datacenter-digital-sovereignty-europe-2026',
      title: language === 'fr'
        ? "Datacenters modulaires et souveraineté numérique : la nouvelle frontière de l'infrastructure IA européenne"
        : "Modular Datacenters and Digital Sovereignty: Europe's New AI Infrastructure Frontier",
      excerpt: language === 'fr'
        ? "Alors que l'Europe accélère sa stratégie de souveraineté numérique, les datacenters modulaires émergent comme la réponse la plus rapide et la plus efficace aux besoins croissants en capacité de calcul IA. Finxia Capital analyse ce phénomène de rupture."
        : "As Europe accelerates its digital sovereignty strategy, modular datacenters are emerging as the fastest and most efficient response to growing AI compute needs. Finxia Capital analyzes this breakthrough phenomenon.",
      date: '2026-07-10',
      category: 'Digital Infrastructure',
      readTime: '6 min'
    },
    {
      slug: 'datacenters-modulaires-schneider-electric-edge-computing',
      title: language === 'fr'
        ? "Les datacenters modulaires : le coup d'accélération de Schneider Electric et la révolution de l'edge computing"
        : "Modular Datacenters: Schneider Electric's Acceleration and the Edge Computing Revolution",
      excerpt: language === 'fr'
        ? "Schneider Electric investit 1,5 milliard d'euros dans les datacenters modulaires. Mais pourquoi cette architecture est-elle le futur de l'infrastructure IA ?"
        : "Schneider Electric invests 1.5 billion euros in modular datacenters. But why is this architecture the future of AI infrastructure?",
      date: '2026-07-04',
      category: 'Digital Infrastructure',
      readTime: '6 min'
    },
    {
      slug: 'gpu-puissance-electrique-france-ia-generative',
      title: language === 'fr'
        ? "GPU et puissance électrique : la France peut-elle alimenter l'IA générative ?"
        : "GPU and Electrical Power: Can France Power Generative AI?",
      excerpt: language === 'fr'
        ? "NVIDIA livre 100 000 H100 par trimestre. Chaque GPU consomme 700W. La France a 18 GW de demande datacenter en file d'attente. Qui obtiendra le raccordement ?"
        : "NVIDIA delivers 100,000 H100 per quarter. Each GPU consumes 700W. France has 18 GW of datacenter demand in queue. Who gets the connection?",
      date: '2026-07-04',
      category: 'Energy & Infrastructure',
      readTime: '7 min'
    },
    {
      slug: 'titan-dc-ai-strategie-investissement-finxia-capital',
      title: language === 'fr'
        ? "TITAN DC AI : comment FINXIA Capital structure l'investissement en datacenter intelligence artificielle"
        : "TITAN DC AI: How FINXIA Capital Structures AI Datacenter Investment",
      excerpt: language === 'fr'
        ? "FINXIA Capital déploie la stratégie TITAN DC AI — une approche institutionnelle sur les actifs réels de l'infrastructure IA. Découvrez la méthode."
        : "FINXIA Capital deploys the TITAN DC AI strategy — an institutional approach to AI infrastructure real assets. Discover the method.",
      date: '2026-07-04',
      category: 'Investment Strategy',
      readTime: '8 min'
    },
    {
      slug: 'anthropic-mistral-ia-francaise-datacenters-europe',
      title: language === 'fr'
        ? "Anthropic, Mistral et l'IA française : qui alimente vraiment les datacenters européens ?"
        : "Anthropic, Mistral and French AI: Who Really Powers European Datacenters?",
      excerpt: language === 'fr'
        ? "Anthropic lève 3,5 milliards de dollars, Mistral devient la licorne française de l'IA. Mais derrière ces modèles linguistiques, une question stratégique : où sont hébergés les datacenters qui les font tourner ?"
        : "Anthropic raises $3.5 billion, Mistral becomes France's AI unicorn. But behind these language models, a strategic question: where are the datacenters that run them hosted?",
      date: '2026-06-22',
      category: 'Digital Infrastructure',
      readTime: '6 min'
    },
    {
      slug: 'clouds-chinois-europe-datacenter-investissement',
      title: language === 'fr'
        ? "Les clouds chinois en Europe : une menace ou une opportunité pour les investisseurs ?"
        : "Chinese Clouds in Europe: A Threat or an Opportunity for Investors?",
      excerpt: language === 'fr'
        ? "Alibaba Cloud, Huawei Cloud, Tencent Cloud — les géants chinois investissent massivement en Europe. Mais leurs datacenters posent une question de souveraineté que les investisseurs ne peuvent plus ignorer."
        : "Alibaba Cloud, Huawei Cloud, Tencent Cloud — Chinese giants are investing massively in Europe. But their datacenters raise a sovereignty question that investors can no longer ignore.",
      date: '2026-06-22',
      category: 'Digital Infrastructure',
      readTime: '5 min'
    },
    {
      slug: 'neoclouds-vs-hyperscalers-europe',
      title: language === 'fr'
        ? "Néoclouds vs hyperscalers : qui construit l'avenir du cloud européen ?"
        : "Neoclouds vs Hyperscalers: Who is Building the Future of European Cloud?",
      excerpt: language === 'fr'
        ? "OVHcloud, Scaleway, STACKIT, IONOS — les néoclouds européens défient AWS, Azure et Google. Mais peuvent-ils vraiment rivaliser ? Analyse des investissements et des stratégies."
        : "OVHcloud, Scaleway, STACKIT, IONOS — European neoclouds challenge AWS, Azure and Google. But can they really compete? Analysis of investments and strategies.",
      date: '2026-06-22',
      category: 'Market Analysis',
      readTime: '7 min'
    },
    {
      slug: 'cloud-souverain-france-stackit-ovh-aws-azure',
      title: language === 'fr'
        ? "Cloud souverain français : Stackit, OVHcloud et la bataille contre AWS et Azure"
        : "French Sovereign Cloud: Stackit, OVHcloud and the Battle Against AWS and Azure",
      excerpt: language === 'fr'
        ? "Stackit, OVHcloud, Scaleway — les clouds souverains français défient les hyperscalers américains. Mais peuvent-ils vraiment rivaliser sans une infrastructure physique de rupture ?"
        : "Stackit, OVHcloud, Scaleway — French sovereign clouds challenge American hyperscalers. But can they really compete without breakthrough physical infrastructure?",
      date: '2026-06-22',
      category: 'Digital Infrastructure',
      readTime: '6 min'
    },
    {
      slug: 'data-centers-brown-to-green-europe-strategie-investissement',
      title: language === 'fr'
        ? "Data centers brown-to-green : pourquoi les actifs existants vont battre les greenfields en Europe"
        : "Brown-to-Green Datacenters: Why Existing Assets Will Beat Greenfields in Europe",
      excerpt: language === 'fr'
        ? "Les data centers existants mal optimisés offrent un rendement supérieur aux greenfields en Europe. Pourquoi le brown-to-green est la thèse de la décennie."
        : "Existing, poorly optimized datacenters offer superior returns over greenfields in Europe. Why brown-to-green is the decade's investment thesis.",
      date: '2026-05-23',
      category: 'Investment Strategy',
      readTime: '12 min'
    },
    {
      slug: 'data-centers-ia-energie-strategie-europe-2030',
      title: language === 'fr'
        ? "Data centers IA : l'angle mort énergétique de la stratégie européenne"
        : "AI Datacenters: The Energy Blind Spot of European Strategy",
      excerpt: language === 'fr'
        ? "L'IA fait exploser la demande électrique des data centers. L'Europe peut-elle aligner ambitions IA et contraintes réseau ? Analyse chiffrée (IEA, Irlande 21%) et stratégie FINXIA."
        : "AI is exploding datacenter electricity demand. Can Europe align AI ambitions with grid constraints? Data-driven analysis and FINXIA strategy.",
      date: '2026-05-16',
      category: 'Digital Infrastructure',
      readTime: '11 min'
    },
    {
      slug: 'stackit-lidl-cloud-souverain-infrastructure-data-centers-europe',
      title: language === 'fr'
        ? "Lidl, STACKIT et le cloud souverain européen : la souveraineté se joue dans le béton"
        : "Lidl, STACKIT and European Sovereign Cloud: Sovereignty is Built in Concrete",
      excerpt: language === 'fr'
        ? "STACKIT et Lidl font les gros titres pour le cloud souverain européen. Mais la souveraineté réelle se joue dans les MW, le réseau et l'efficacité énergétique."
        : "STACKIT and Lidl make headlines for European sovereign cloud. But real sovereignty is fought in megawatts, grid and energy efficiency.",
      date: '2026-05-09',
      category: 'Digital Infrastructure',
      readTime: '11 min'
    },
    {
      slug: 'eed-directive-secret-commercial-pue-datacenters-europe',
      title: language === 'fr'
        ? "Directive EED, secret commercial et PUE : ce que l'Europe ne veut pas voir sur ses data centers"
        : "EED Directive, Trade Secret and PUE: What Europe Won't Look at on its Datacenters",
      excerpt: language === 'fr'
        ? "L'Article 12 EED impose un reporting annuel aux data centers UE. Mais la transparence reste partielle. Ce que cela change pour les investisseurs et les actifs."
        : "EED Article 12 imposes annual reporting on EU datacenters. But transparency remains partial. What this changes for investors and assets.",
      date: '2026-05-02',
      category: 'Regulatory Compliance',
      readTime: '10 min'
    },
    {
      slug: language === 'fr' ? 'loi-pinm-statut-datacenter-brown-to-green' : 'pinm-law-datacenter-brown-to-green-status',
      title: language === 'fr'
        ? "Loi PINM : ce que le statut de Projet d'Intérêt National Majeur change pour les datacenters B2G"
        : "PINM Law: What the Major National Interest Project Status Changes for B2G Datacenters",
      excerpt: language === 'fr'
        ? "Le 14 avril 2026, l'Assemblée nationale adopte la loi PINM. Analyse de l'avantage structurel brown-to-green pour les datacenters européens."
        : "On April 14, 2026, the National Assembly adopts the PINM law. Analysis of the brown-to-green structural advantage for European datacenters.",
      date: '2026-04-20',
      category: 'TITAN Strategy',
      readTime: '8 min'
    },
    {
      slug: language === 'fr' ? 'titan-dc-ai-strategie-datacenters-europeens-finxia' : 'titan-dc-ai-european-datacenters-strategy-finxia',
      title: language === 'fr'
        ? "TITAN DC AI : La Transformation des Datacenters Européens Legacy"
        : "TITAN DC AI: Transforming European Legacy Datacenters",
      excerpt: language === 'fr'
        ? "La stratégie d'investissement de FINXIA Capital dédiée à l'acquisition et la transformation des datacenters européens legacy en plateformes haute efficacité pour l'IA."
        : "FINXIA Capital's investment strategy dedicated to acquiring and transforming European legacy datacenters into high-efficiency AI platforms.",
      date: '2026-04-15',
      category: 'TITAN Strategy',
      readTime: '10 min'
    },
    {
      slug: language === 'fr' ? 'eed-article-12-declaration-datacenter-guide-2026' : 'eed-article-12-datacenter-declaration-guide-2026',
      title: language === 'fr'
        ? "EED Article 12 : Guide Complet pour la Déclaration Obligatoire avant le 15 Mai 2026"
        : "EED Article 12: Complete Guide for Mandatory Declaration before May 15, 2026",
      excerpt: language === 'fr'
        ? "Le 15 mai 2026 est la première échéance de déclaration obligatoire imposée par l'EED Article 12. Guide complet pour les opérateurs de datacenters."
        : "May 15, 2026 is the first mandatory declaration deadline imposed by EED Article 12. Complete guide for datacenter operators.",
      date: '2026-04-15',
      category: 'Regulatory Compliance',
      readTime: '10 min'
    },
    {
      slug: language === 'fr' ? 'pue-optimisation-datacenters-europeens-guide-2026' : 'pue-optimization-european-datacenters-guide-2026',
      title: language === 'fr'
        ? "Optimisation PUE dans les Datacenters Européens : Guide 2026"
        : "PUE Optimization in European Datacenters: 2026 Guide",
      excerpt: language === 'fr'
        ? "Le PUE est devenu l'indicateur de performance le plus scruté de l'industrie des datacenters. Guide complet d'optimisation et de certification IPMVP."
        : "PUE has become the most scrutinized performance indicator in the datacenter industry. Complete optimization and IPMVP certification guide.",
      date: '2026-04-15',
      category: 'Technical Guide',
      readTime: '11 min'
    },
    {
      slug: language === 'fr' ? 'scsp-vs-raif-vehicule-investissement-luxembourgeois' : 'luxembourg-scsp-vs-raif-investment-vehicle',
      title: language === 'fr'
        ? "SCSp Luxembourgeoise vs RAIF : Quel Véhicule pour les Actifs Alternatifs ?"
        : "Luxembourg SCSp vs RAIF: Which Vehicle for Alternative Assets?",
      excerpt: language === 'fr'
        ? "FINXIA Capital est structurée en SCSp luxembourgeoise, et non en RAIF. Cette distinction reflète des choix stratégiques précis en matière de gouvernance."
        : "FINXIA Capital is structured as a Luxembourg SCSp, not a RAIF. This distinction reflects specific strategic choices in governance.",
      date: '2026-04-15',
      category: 'Structure & Governance',
      readTime: '10 min'
    },
    {
      slug: 'crise-energetique-datacenters-ia-europe',
      title: language === 'fr'
        ? "La prochaine crise énergétique de l'IA se joue dans les datacenters européens"
        : "AI's Next Energy Crisis is Playing Out in European Datacenters",
      excerpt: language === 'fr'
        ? "L'intelligence artificielle a un problème que personne ne veut regarder en face : elle consomme une quantité d'énergie que l'infrastructure existante ne peut pas absorber."
        : "Artificial intelligence has a problem no one wants to face: it consumes an amount of energy that existing infrastructure cannot absorb.",
      date: '2026-01-16',
      category: 'TITAN Strategy',
      readTime: '4 min'
    },
    {
      slug: 'gestion-fonds-18-agents-ia',
      title: language === 'fr'
        ? "Gérer un fonds alternatif avec 18 agents IA : ce que ça change vraiment"
        : "Managing an Alternative Fund with 18 AI Agents: What Really Changes",
      excerpt: language === 'fr'
        ? "La gestion d'actifs alternatifs a un problème de latence. Entre le signal et la décision, il se passe des semaines. L'architecture AI-native change la donne."
        : "Alternative asset management has a latency problem. Between signal and decision, weeks pass. AI-native architecture changes the game.",
      date: '2026-01-16',
      category: 'AI-Native',
      readTime: '4 min'
    },
    {
      slug: 'datacenters-europe-2026-fenetre-opportunite',
      title: language === 'fr'
        ? "Datacenters en Europe : pourquoi 2026 est l'année où les investisseurs en retard paieront le prix fort"
        : "European Datacenters: Why 2026 is the Year Late Investors Will Pay the Price",
      excerpt: language === 'fr'
        ? "Il y a deux ans, un investisseur qui regardait les datacenters européens voyait un marché de niche. Aujourd'hui, il voit l'un des marchés les plus disputés d'Europe."
        : "Two years ago, an investor looking at European datacenters saw a niche market. Today, they see one of Europe's most contested markets.",
      date: '2026-01-16',
      category: 'Market Analysis',
      readTime: '4 min'
    }
  ];

  // Group articles by month
  const groupedByMonth = articles.reduce((acc, article) => {
    const date = new Date(article.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const monthLabel = date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long'
    });
    
    if (!acc[monthKey]) {
      acc[monthKey] = { label: monthLabel, articles: [] };
    }
    acc[monthKey].articles.push(article);
    return acc;
  }, {} as Record<string, { label: string; articles: typeof articles }>);

  // Sort month keys descending
  const sortedMonths = Object.keys(groupedByMonth).sort((a, b) => b.localeCompare(a));

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
        "name": language === 'fr' ? "Blog" : "Blog",
        "item": "https://finxiacapital.com/blog"
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
        language="fr"
        ogLocale="fr_FR"
        hreflangFr="https://finxiacapital.com/blog/"
        hreflangEn="https://finxiacapital.com/en/blog/"
        hreflangDefault="https://finxiacapital.com/blog/"
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
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

      {/* News Feed */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-[#C45A3B]" />
              <h2 className="font-serif text-2xl text-slate-900">
                {language === 'fr' ? "Fil d'actualités" : 'News Feed'}
              </h2>
              <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                HPC • IA • DC • NVIDIA
              </span>
            </div>
            
            {/* Filter buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-slate-400 mr-1" />
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    activeFilter === filter.key
                      ? 'bg-[#C45A3B] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {filter.label[language === 'fr' ? 'fr' : 'en']}
                </button>
              ))}
            </div>
          </div>

          {/* News items grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded uppercase tracking-wider ${
                    item.topic === 'nvidia' ? 'bg-green-100 text-green-700' :
                    item.topic === 'hpc' ? 'bg-purple-100 text-purple-700' :
                    item.topic === 'ia' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {item.topicLabel[language === 'fr' ? 'fr' : 'en']}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 leading-snug mb-1">
                    {item.title[language === 'fr' ? 'fr' : 'en']}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
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
        </div>
      </section>

      {/* Articles grouped by month */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedMonths.map((monthKey) => {
            const month = groupedByMonth[monthKey];
            return (
              <div key={monthKey} className="mb-16 last:mb-0">
                <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mb-2 pb-4 border-b-2 border-[#C45A3B]">
                  {month.label}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {month.articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="group bg-slate-50 card-hover flex flex-col"
                    >
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-4 text-sm">
                          <span className="text-[#C45A3B] font-medium uppercase tracking-wider">
                            {article.category}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-600">{article.readTime}</span>
                        </div>
                        
                        <h3 className="font-serif text-xl md:text-2xl mb-4 group-hover:text-[#C45A3B] transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={article.date}>
                              {new Date(article.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                          </div>
                          <ArrowRight className="w-5 h-5 text-[#C45A3B] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
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
            href="/contact"
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
