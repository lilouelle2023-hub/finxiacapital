/**
 * Centralized blog posts registry.
 *
 * Single source of truth for blog metadata used across the site
 * (homepage "Actualités" section, blog index, etc.).
 *
 * When publishing a new article:
 *   1. Create the page file under /pages/blog/<slug>.tsx (and optionally /pages/en/blog/<enSlug>.tsx)
 *   2. Add a new entry at the TOP of `blogPosts` below (or anywhere — list is sorted by date).
 *   3. The homepage "Actualités" block will automatically surface the 3 most recent entries.
 */

export type BlogCategory =
  | 'Investment Strategy'
  | 'Digital Infrastructure'
  | 'Regulatory Compliance'
  | 'TITAN Strategy'
  | 'Technical Guide'
  | 'Structure & Governance'
  | 'AI-Native'
  | 'Market Analysis';

export type BlogPost = {
  /** Filename slug under /pages/blog/<frSlug>.tsx — used as canonical link for both languages. */
  frSlug: string;
  /** Optional English-only slug under /pages/en/blog/<enSlug>.tsx (if translation exists). */
  enSlug?: string;
  /** ISO date (YYYY-MM-DD). Used for sorting: most recent first. */
  date: string;
  /** Reading time badge (e.g. "10 min"). */
  readTime: string;
  /** Tag / category used for the coloured label on the cards. */
  category: BlogCategory;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
};

/**
 * All published blog posts.
 * Order is irrelevant — callers sort by `date` descending.
 */
export const blogPosts: BlogPost[] = [
  {
    frSlug: 'data-centers-brown-to-green-europe-strategie-investissement',
    date: '2026-05-23',
    readTime: '12 min',
    category: 'Investment Strategy',
    title: {
      fr: "Data centers brown-to-green : pourquoi les actifs existants vont battre les greenfields en Europe",
      en: "Brown-to-Green Datacenters: Why Existing Assets Will Beat Greenfields in Europe",
    },
    excerpt: {
      fr: "Face aux délais de raccordement de 4-7 ans, aux coûts greenfield en hausse et aux contraintes PUE imposées par l'EED, les data centers existants mal optimisés représentent la meilleure opportunité d'investissement en Europe.",
      en: "Facing 4-7 year grid connection delays, rising greenfield costs and PUE constraints imposed by the EED, existing, poorly optimized datacenters represent the best investment opportunity in Europe.",
    },
  },
  {
    frSlug: 'data-centers-ia-energie-strategie-europe-2030',
    date: '2026-05-16',
    readTime: '11 min',
    category: 'Digital Infrastructure',
    title: {
      fr: "Data centers IA : l'angle mort énergétique de la stratégie européenne",
      en: "AI Datacenters: The Energy Blind Spot of European Strategy",
    },
    excerpt: {
      fr: "L'IA fait exploser la demande électrique des data centers : 415 TWh en 2024, potentiellement 945 TWh en 2030 (IEA). En Irlande, les data centers pèsent déjà 21% de la consommation nationale. Comment l'Europe peut-elle aligner ambitions IA et contraintes réseau ?",
      en: "AI is exploding datacenter electricity demand: 415 TWh in 2024, potentially 945 TWh in 2030 (IEA). In Ireland, datacenters already account for 21% of national consumption. How can Europe align AI ambitions with grid constraints?",
    },
  },
  {
    frSlug: 'stackit-lidl-cloud-souverain-infrastructure-data-centers-europe',
    date: '2026-05-09',
    readTime: '11 min',
    category: 'Digital Infrastructure',
    title: {
      fr: "Lidl, STACKIT et le cloud souverain européen : la souveraineté se joue dans le béton",
      en: "Lidl, STACKIT and European Sovereign Cloud: Sovereignty is Built in Concrete",
    },
    excerpt: {
      fr: "STACKIT et Lidl font les gros titres pour le cloud souverain européen. Mais la souveraineté réelle se joue dans les MW, le réseau et l'efficacité énergétique des data centers sous-jacents.",
      en: "STACKIT and Lidl make headlines for European sovereign cloud. But real sovereignty is fought in megawatts, grid and energy efficiency of the underlying datacenters.",
    },
  },
  {
    frSlug: 'eed-directive-secret-commercial-pue-datacenters-europe',
    date: '2026-05-02',
    readTime: '10 min',
    category: 'Regulatory Compliance',
    title: {
      fr: "Directive EED, secret commercial et PUE : ce que l'Europe ne veut pas voir sur ses data centers",
      en: "EED Directive, Trade Secret and PUE: What Europe Won't Look at on its Datacenters",
    },
    excerpt: {
      fr: "L'Article 12 EED impose un reporting annuel aux data centers UE dès 500 kW. Mais la transparence reste partielle et crée un marché à deux vitesses dont les investisseurs spécialisés peuvent tirer parti.",
      en: "EED Article 12 imposes annual reporting on EU datacenters from 500 kW. But transparency remains partial and creates a two-tier market that specialized investors can leverage.",
    },
  },
  {
    frSlug: 'loi-pinm-statut-datacenter-brown-to-green',
    enSlug: 'pinm-law-datacenter-brown-to-green-status',
    date: '2026-04-20',
    readTime: '8 min',
    category: 'TITAN Strategy',
    title: {
      fr: "Loi PINM : ce que le statut de Projet d'Intérêt National Majeur change pour les datacenters B2G",
      en: "PINM Law: What the Major National Interest Project Status Changes for B2G Datacenters",
    },
    excerpt: {
      fr: "Le 14 avril 2026, l'Assemblée nationale adopte la loi PINM. Analyse de l'avantage structurel brown-to-green pour les datacenters européens.",
      en: "On April 14, 2026, the National Assembly adopts the PINM law. Analysis of the brown-to-green structural advantage for European datacenters.",
    },
  },
  {
    frSlug: 'titan-dc-ai-strategie-datacenters-europeens-finxia',
    enSlug: 'titan-dc-ai-european-datacenters-strategy-finxia',
    date: '2026-04-15',
    readTime: '10 min',
    category: 'TITAN Strategy',
    title: {
      fr: "TITAN DC AI : La Transformation des Datacenters Européens Legacy",
      en: "TITAN DC AI: Transforming European Legacy Datacenters",
    },
    excerpt: {
      fr: "La stratégie d'investissement de FINXIA Capital dédiée à l'acquisition et la transformation des datacenters européens legacy en plateformes haute efficacité pour l'IA.",
      en: "FINXIA Capital's investment strategy dedicated to acquiring and transforming European legacy datacenters into high-efficiency AI platforms.",
    },
  },
  {
    frSlug: 'eed-article-12-declaration-datacenter-guide-2026',
    enSlug: 'eed-article-12-datacenter-declaration-guide-2026',
    date: '2026-04-15',
    readTime: '10 min',
    category: 'Regulatory Compliance',
    title: {
      fr: "EED Article 12 : Guide Complet pour la Déclaration Obligatoire avant le 15 Mai 2026",
      en: "EED Article 12: Complete Guide for Mandatory Declaration before May 15, 2026",
    },
    excerpt: {
      fr: "Le 15 mai 2026 est la première échéance de déclaration obligatoire imposée par l'EED Article 12. Guide complet pour les opérateurs de datacenters.",
      en: "May 15, 2026 is the first mandatory declaration deadline imposed by EED Article 12. Complete guide for datacenter operators.",
    },
  },
  {
    frSlug: 'pue-optimisation-datacenters-europeens-guide-2026',
    enSlug: 'pue-optimization-european-datacenters-guide-2026',
    date: '2026-04-15',
    readTime: '11 min',
    category: 'Technical Guide',
    title: {
      fr: "Optimisation PUE dans les Datacenters Européens : Guide 2026",
      en: "PUE Optimization in European Datacenters: 2026 Guide",
    },
    excerpt: {
      fr: "Le PUE est devenu l'indicateur de performance le plus scruté de l'industrie des datacenters. Guide complet d'optimisation et de certification IPMVP.",
      en: "PUE has become the most scrutinized performance indicator in the datacenter industry. Complete optimization and IPMVP certification guide.",
    },
  },
  {
    frSlug: 'scsp-vs-raif-vehicule-investissement-luxembourgeois',
    enSlug: 'luxembourg-scsp-vs-raif-investment-vehicle',
    date: '2026-04-15',
    readTime: '10 min',
    category: 'Structure & Governance',
    title: {
      fr: "SCSp Luxembourgeoise vs RAIF : Quel Véhicule pour les Actifs Alternatifs ?",
      en: "Luxembourg SCSp vs RAIF: Which Vehicle for Alternative Assets?",
    },
    excerpt: {
      fr: "FINXIA Capital est structurée en SCSp luxembourgeoise, et non en RAIF. Cette distinction reflète des choix stratégiques précis en matière de gouvernance.",
      en: "FINXIA Capital is structured as a Luxembourg SCSp, not a RAIF. This distinction reflects specific strategic choices in governance.",
    },
  },
  {
    frSlug: 'crise-energetique-datacenters-ia-europe',
    enSlug: 'ai-energy-crisis-european-datacenters',
    date: '2026-01-16',
    readTime: '4 min',
    category: 'TITAN Strategy',
    title: {
      fr: "La prochaine crise énergétique de l'IA se joue dans les datacenters européens",
      en: "AI's Next Energy Crisis is Playing Out in European Datacenters",
    },
    excerpt: {
      fr: "L'intelligence artificielle a un problème que personne ne veut regarder en face : elle consomme une quantité d'énergie que l'infrastructure existante ne peut pas absorber.",
      en: "Artificial intelligence has a problem no one wants to face: it consumes an amount of energy that existing infrastructure cannot absorb.",
    },
  },
  {
    frSlug: 'gestion-fonds-18-agents-ia',
    enSlug: 'managing-alternative-fund-18-ai-agents',
    date: '2026-01-16',
    readTime: '4 min',
    category: 'AI-Native',
    title: {
      fr: "Gérer un fonds alternatif avec 18 agents IA : ce que ça change vraiment",
      en: "Managing an Alternative Fund with 18 AI Agents: What Really Changes",
    },
    excerpt: {
      fr: "La gestion d'actifs alternatifs a un problème de latence. Entre le signal et la décision, il se passe des semaines. L'architecture AI-native change la donne.",
      en: "Alternative asset management has a latency problem. Between signal and decision, weeks pass. AI-native architecture changes the game.",
    },
  },
  {
    frSlug: 'datacenters-europe-2026-fenetre-opportunite',
    enSlug: 'european-datacenters-2026-investor-opportunity',
    date: '2026-01-16',
    readTime: '4 min',
    category: 'Market Analysis',
    title: {
      fr: "Datacenters en Europe : pourquoi 2026 est l'année où les investisseurs en retard paieront le prix fort",
      en: "European Datacenters: Why 2026 is the Year Late Investors Will Pay the Price",
    },
    excerpt: {
      fr: "Il y a deux ans, un investisseur qui regardait les datacenters européens voyait un marché de niche. Aujourd'hui, il voit l'un des marchés les plus disputés d'Europe.",
      en: "Two years ago, an investor looking at European datacenters saw a niche market. Today, they see one of Europe's most contested markets.",
    },
  },
];

/**
 * Returns posts sorted by date descending (most recent first).
 */
export const getSortedBlogPosts = (): BlogPost[] =>
  [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/**
 * Returns the N most recent posts (sorted by date descending).
 */
export const getLatestBlogPosts = (count: number): BlogPost[] =>
  getSortedBlogPosts().slice(0, count);

/**
 * Returns the canonical blog URL for a given language.
 * The FR slug is used as the shared URL across the site today; when an EN
 * translation exists, the /en/blog/<enSlug> route is linked.
 */
export const getBlogPostHref = (post: BlogPost, language: 'fr' | 'en'): string => {
  if (language === 'en' && post.enSlug) {
    return `/en/blog/${post.enSlug}/`;
  }
  return `/blog/${post.frSlug}/`;
};

/**
 * Localized date formatter for blog cards (e.g. "23 mai 2026" / "May 23, 2026").
 */
export const formatBlogDate = (isoDate: string, language: 'fr' | 'en'): string => {
  const d = new Date(`${isoDate}T00:00:00Z`);
  return d.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
};
