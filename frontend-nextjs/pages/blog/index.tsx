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
      slug: 'raccordement-electrique-datacenter-europe-investissement',
      title: language === 'fr'
        ? "Pourquoi l'Europe risque de perdre la bataille de l'IA par manque de raccordements électriques"
        : "Why Europe Risks Losing the AI Battle Due to Lack of Grid Connections",
      excerpt: language === 'fr'
        ? "67% des opérateurs européens citent l'accès à l'électricité comme leur défi numéro 1. Pour les investisseurs, ce goulot d'étranglement structurel crée une prime de rareté sur les actifs déjà raccordés."
        : "67% of European operators cite electricity access as their number one challenge. For investors, this structural bottleneck creates a scarcity premium on already-connected assets.",
      date: '2026-07-28',
      category: 'Investment Analysis',
      readTime: '8 min'
    },
    {
      slug: 'technologies-datacenter-ia-2026-800v-liquide-smr',
      title: language === 'fr'
        ? "800V DC, refroidissement liquide, SMR : les 3 technologies qui redessinent le datacenter IA en 2026"
        : "800V DC, Liquid Cooling, SMR: The 3 Technologies Reshaping AI Datacenters in 2026",
      excerpt: language === 'fr'
        ? "NVIDIA Blackwell impose 132 kW par rack. 67% des nouvelles capacités IA passent au refroidissement liquide. Ce que les investisseurs doivent savoir sur le reshape technologique du secteur."
        : "NVIDIA Blackwell imposes 132 kW per rack. 67% of new AI capacity switches to liquid cooling. What investors need to know about the sector's technological reshape.",
      date: '2026-07-29',
      category: 'Technology',
      readTime: '10 min'
    },
    {
      slug: 'consommation-electrique-datacenter-ia-2030-marche',
      title: language === 'fr'
        ? "L'IA pousse la consommation électrique des datacenters à 1 050 TWh d'ici 2030 — qui paiera la facture ?"
        : "AI Pushes Datacenter Electricity Consumption to 1,050 TWh by 2030 — Who Will Pay the Bill?",
      excerpt: language === 'fr'
        ? "Le marché de la consommation électrique des datacenters IA passera de 12,5 Md$ à 70,6 Md$ d'ici 2035. Analyse des conséquences sur les investissements, les prix et la régulation."
        : "The AI datacenter electricity consumption market will grow from $12.5B to $70.6B by 2035. Analysis of consequences on investments, pricing and regulation.",
      date: '2026-07-30',
      category: 'Economic Analysis',
      readTime: '9 min'
    },
    {
      slug: 'neoclouds-ai-factories-carte-investissements-europe',
      title: language === 'fr'
        ? "Néoclouds, AI Factories et souveraineté numérique : la nouvelle carte des investissements datacenter en Europe"
        : "Neoclouds, AI Factories and Digital Sovereignty: The New Map of Datacenter Investments in Europe",
      excerpt: language === 'fr'
        ? "Cerebras déploie 200 MW. Ferrovial investit 1 Md€ à Madrid. 50% de la capacité européenne pourrait être hors FLAP-D d'ici 2035. Où investir en 2026 ?"
        : "Cerebras deploys 200 MW. Ferrovial invests €1B in Madrid. 50% of European capacity could be outside FLAP-D by 2035. Where to invest in 2026?",
      date: '2026-07-31',
      category: 'Market Intelligence',
      readTime: '11 min'
    },
    {
      slug: 'nvidia-blackwell-liquid-cooling-european-datacenters-2026',
      title: language === 'fr'
        ? "NVIDIA Blackwell Ultra : 200 kW par rack, refroidissement liquide obligatoire — les datacenters européens en sursis"
        : "NVIDIA Blackwell Ultra: 200 kW per rack, mandatory liquid cooling — European datacenters on notice",
      excerpt: language === 'fr'
        ? "NVIDIA dévoile les Blackwell Ultra avec une densité de 200 kW par rack. Le refroidissement liquide devient incontournable. Quels datacenters européens survivront ?"
        : "NVIDIA unveils Blackwell Ultra with a density of 200 kW per rack. Liquid cooling becomes mandatory. Which European datacenters will survive?",
      date: '2026-07-25',
      category: 'Digital Infrastructure',
      readTime: '7 min'
    },
    {
      slug: 'european-sovereign-cloud-gaia-x-investors-2026',
      title: language === 'fr'
        ? "Cloud souverain européen : Gaia-X atteint 200 fournisseurs certifiés — ce que cela change pour les investisseurs"
        : "European Sovereign Cloud: Gaia-X Reaches 200 Certified Providers — What It Means for Investors",
      excerpt: language === 'fr'
        ? "Le projet Gaia-X compte désormais 200 fournisseurs certifiés. La France et l'Allemagne pilotent le déploiement. Analyse des implications pour les investisseurs en infrastructure."
        : "The Gaia-X project now has 200 certified providers. France and Germany lead deployment. Analysis of implications for infrastructure investors.",
      date: '2026-07-25',
      category: 'Digital Infrastructure',
      readTime: '6 min'
    },
    {
      slug: 'edge-computing-modular-datacenter-generative-ai-europe-2026',
      title: language === 'fr'
        ? "Edge computing et datacenters modulaires : la réponse européenne à l'explosion de l'IA générative"
        : "Edge Computing and Modular Datacenters: Europe's Answer to the Generative AI Explosion",
      excerpt: language === 'fr'
        ? "L'IA générative impose de nouvelles contraintes de latence. L'edge computing et les datacenters modulaires émergent comme la solution. Analyse pour les investisseurs."
        : "Generative AI imposes new latency constraints. Edge computing and modular datacenters are emerging as the solution. Analysis for investors.",
      date: '2026-07-25',
      category: 'Digital Infrastructure',
      readTime: '6 min'
    },
    {
      slug: 'green-datacenter-pue-transformation-eed-regulation-2026',
      title: language === 'fr'
        ? "Green datacenter : la transformation PUE et la réglementation EED redessinent l'investissement infrastructure en Europe"
        : "Green Datacenter: PUE Transformation and EED Regulation Are Reshaping Infrastructure Investment in Europe",
      excerpt: language === 'fr'
        ? "La directive EED et l'optimisation PUE transforment les datacenters européens. Guide pour les investisseurs sur la réglementation, la certification et les rendements."
        : "The EED directive and PUE optimization are transforming European datacenters. Guide for investors on regulation, certification and returns.",
      date: '2026-07-25',
      category: 'Energy & Infrastructure',
      readTime: '8 min'
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
              
              {sortedMonths.map((monthKey) => {
                const month = groupedByMonth[monthKey];
                return (
                  <div key={monthKey} className="mb-12 last:mb-0">
                    <h3 className="font-serif text-xl text-slate-700 mb-4 mt-6">
                      {month.label}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {month.articles.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/blog/${article.slug}`}
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
                {/* Podcast Teaser */}
                <div className="mb-6 p-4 bg-[#1E2A3A] rounded-xl text-white">
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
                <div className="space-y-3">
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
