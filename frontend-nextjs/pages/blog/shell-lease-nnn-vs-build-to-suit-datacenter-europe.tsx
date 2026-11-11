import { ArrowLeft, Calendar, Tag, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

export default function ShellLeaseVsBuildToSuitPage() {
  const { language } = useLanguage();

  const content = {
  "fr": {
    "title": "Shell lease NNN ou build-to-suit : le comparatif",
    "description": "Shell lease NNN ou build-to-suit pour un datacenter en Europe : répartition des risques et des responsabilités, tableau comparatif et critères de choix.",
    "tag": "Investment Strategy",
    "date": "11 novembre 2026",
    "readTime": "12 min de lecture",
    "backToBlog": "Retour au blog",
    "author": "Lila Benhammou, Co-Fondatrice & CIO",
    "intro": "Quand un hyperscaler, un opérateur de cloud souverain ou un néocloud sécurise de la capacité datacenter en Europe, deux montages contractuels structurent l'essentiel des transactions : le shell lease en triple net (NNN), portant sur une powered shell, et le build-to-suit, où l'infrastructure est conçue puis livrée selon les spécifications techniques exactes du locataire. Derrière ces deux termes se cachent deux philosophies opposées d'allocation du capital, du risque et du contrôle technique entre propriétaire et locataire.",
    "lead": "Ce choix n'a rien d'académique. Selon CBRE, le taux de vacance des datacenters européens est passé sous les 10 % pour la première fois fin 2024 et devrait atteindre un plus bas historique de 6,5 % fin 2026, alors que plus de 750 MW de nouvelle capacité sont attendus sur l'année. Dans un marché où la capacité se pré-loue avant même d'être construite, la structure du bail détermine qui porte le risque de développement, qui finance les équipements techniques — et qui capte la valeur à la sortie.",
    "sections": [
      {
        "h": "Powered shell et build-to-suit : de quoi parle-t-on exactement ?",
        "ps": [
          "Une powered shell est un bâtiment sécurisé livré avec sa structure physique, l'alimentation électrique jusqu'au site et les options de connectivité — mais sans les équipements techniques critiques : onduleurs (UPS), groupes électrogènes de secours et systèmes de refroidissement. Ces éléments relèvent du fit-out du locataire, qui les conçoit, les installe et les exploite selon ses propres spécifications. Le propriétaire fournit l'enveloppe et l'énergie disponible ; le locataire y construit sa salle informatique.",
          "Le build-to-suit inverse la logique. Le développeur-propriétaire conçoit et livre une installation complète, dimensionnée selon les spécifications d'un locataire identifié dès l'origine : densité de puissance par rack, architecture de refroidissement — souvent liquide pour les charges GPU —, niveau de redondance électrique, exigences de sécurité. Ce modèle domine chez les hyperscalers, dont les standards techniques dépassent ceux d'une shell générique.",
          "Entre les deux, la frontière exacte des responsabilités est la clause la plus importante du contrat : elle détermine qui investit, qui maintient, qui assure, et à qui appartient chaque composant en fin de bail. Le tableau ci-dessous donne un exemple de répartition courante sur le marché européen — à titre illustratif, car chaque contrat se négocie."
        ],
        "link": {
          "href": "/blog/financement-infrastructure-ia-gpu-credit-spv-dette-leasing-datacenter-2026/",
          "label": "Lire aussi : comment se finance l'infrastructure IA — crédit, SPV et leasing GPU"
        }
      },
      {
        "h": "Le tableau comparatif",
        "ps": [
          "Au-delà des définitions, c'est la comparaison critère par critère qui éclaire la décision. Voici les huit dimensions que nous examinons systématiquement avant de structurer ou d'acquérir un actif."
        ],
        "link": null
      },
      {
        "h": "Ce que dit le marché européen en 2026",
        "ps": [
          "Les données de CBRE brossent un marché sous tension. Au premier trimestre 2026, le taux de vacance européen s'établissait à 7,3 % en moyenne, avec de forts écarts : 5 % à Francfort, 6,7 % à Paris, 8,6 % à Londres et 9,4 % à Amsterdam. La prévision de fin d'année est un plus bas historique de 6,5 % pour l'ensemble de l'Europe, malgré une offre nouvelle record : plus de 750 MW livrés en 2026, portant le marché total à environ 13 GW, en hausse de 20 % sur un an.",
          "La structure de la demande évolue vite. Les signatures de néoclouds sur la colocation européenne ont quadruplé au premier semestre 2026, à 420 MW contre 89 MW un an plus tôt — l'essentiel dans les pays nordiques, où l'électricité renouvelable est moins chère. Côté prix, les loyers demandés en Europe atteignaient en 2026 entre 165 et 265 dollars par kW et par mois sur les déploiements de 250 à 500 kW, Francfort se situant en haut de fourchette (235-265 dollars).",
          "Dans un tel marché, le rapport de force penche côté propriétaires — et il modifie l'arbitrage entre les deux modèles. Le shell NNN permet de conserver un actif générique pendant que le locataire finance son propre capex technique : le bailleur capte la rareté sans s'exposer à l'obsolescence des équipements. Le build-to-suit ne se justifie pleinement que lorsque le locataire est de premier ordre et ses exigences techniques — refroidissement liquide, très haute densité — inaccessibles à une shell standard. Deux paramètres pèsent de plus en plus dans la négociation : l'efficacité énergétique, désormais déclarée sous la directive EED, et la sécurisation de l'alimentation électrique, qui conditionne la valeur de toute l'opération."
        ],
        "link": {
          "href": "/blog/pue-optimisation-datacenters-europeens-guide-2026/",
          "label": "Lire aussi : PUE, définition et optimisation pour les datacenters européens"
        }
      },
      {
        "h": "Comment choisir : la grille de lecture de l'investisseur",
        "ps": [
          "Quatre questions structurent la décision. Qui paie le capex technique, et à quel coût du capital ? Quelle est la solvabilité du locataire — sa signature transforme-t-elle le bail en quasi-obligation ? L'actif est-il réversible, c'est-à-dire relouable à un tiers sans reconstruction majeure ? Et quel est l'horizon de sortie visé ? Un investisseur core à dix ans ne regarde pas le même contrat qu'un développeur à trois ans.",
          "Le rythme du silicium ajoute un argument en faveur de la réversibilité : avec quatre générations de puces lancées par un seul acteur en un an, un bâtiment configuré pour une architecture unique concentre un risque d'obsolescence réel. La powered shell générique conserve l'optionnalité — elle peut accueillir successivement des configurations différentes au gré des évolutions du marché.",
          "C'est la logique que nous appliquons chez TITAN DC AI sur le segment brown-to-green : repositionner des actifs existants, optimiser leur efficacité, puis les commercialiser en shell NNN auprès d'un panel élargi de locataires — opérateurs de cloud souverain, hébergeurs, entreprises — plutôt que de verrouiller chaque actif sur une configuration unique. Le choix se fait actif par actif, en fonction du locataire visé et de la liquidité de sortie recherchée. Ce contenu est fourni à titre informatif uniquement et ne constitue pas un conseil en investissement."
        ],
        "link": {
          "href": "/blog/ppa-raccordement-securiser-electricite-datacenter-investisseur/",
          "label": "Lire aussi : PPA et raccordement — sécuriser l'électricité d'un datacenter"
        }
      },
      {
        "h": "Questions fréquentes",
        "ps": [],
        "link": null
      }
    ],
    "respTitle": "Exemple de répartition des responsabilités",
    "respNote": "Répartition courante sur le marché européen, à titre illustratif — chaque contrat se négocie.",
    "respHeaders": [
      "Composant",
      "Powered shell (NNN)",
      "Build-to-suit"
    ],
    "respRows": [
      [
        "Gros œuvre, façade, toiture",
        "Propriétaire",
        "Propriétaire-développeur"
      ],
      [
        "Raccordement haute tension au site",
        "Propriétaire",
        "Propriétaire-développeur"
      ],
      [
        "Onduleurs (UPS) et groupes électrogènes",
        "Locataire",
        "Développeur, selon les spécifications du locataire"
      ],
      [
        "Systèmes de refroidissement",
        "Locataire",
        "Développeur, selon les spécifications du locataire"
      ],
      [
        "Racks, câblage, sécurité IT",
        "Locataire",
        "Locataire"
      ],
      [
        "Maintenance de la structure",
        "Locataire (bail triple net)",
        "Selon contrat, souvent propriétaire"
      ]
    ],
    "tableTitle": "Shell lease NNN vs build-to-suit : les huit critères",
    "tableHeaders": [
      "Critère",
      "Shell lease NNN",
      "Build-to-suit"
    ],
    "tableRows": [
      [
        "Ce qui est livré",
        "Structure sécurisée, électricité jusqu'au site, connectivité",
        "Installation complète, conçue sur spécifications du locataire"
      ],
      [
        "Capex d'équipement technique",
        "Locataire",
        "Propriétaire-développeur"
      ],
      [
        "Durée de bail usuelle",
        "10 à 20 ans",
        "15 à 25 ans, parfois davantage"
      ],
      [
        "Contrôle technique",
        "Locataire (fit-out)",
        "Locataire (dès la conception)"
      ],
      [
        "Risque de relocation en fin de bail",
        "Modéré : actif générique",
        "Élevé : actif spécifique"
      ],
      [
        "Profil de revenu",
        "Net, prévisible, indexé",
        "Loyer ajusté au risque, plus élevé en phase développement"
      ],
      [
        "Pool d'acheteurs à la sortie",
        "Large (fonds core, value-add)",
        "Restreint (acheteurs spécialisés)"
      ],
      [
        "Locataires types",
        "Opérateurs de colocation, clouds souverains, néoclouds structurés",
        "Hyperscalers, très grandes plateformes IA"
      ]
    ],
    "faqTitle": "Questions fréquentes",
    "faq": [
      {
        "q": "Quelle est la différence entre un shell lease et un build-to-suit ?",
        "a": "Le shell lease porte sur une powered shell : le propriétaire livre la structure, l'alimentation électrique jusqu'au site et la connectivité, et le locataire installe ses équipements techniques. Dans un build-to-suit, le développeur livre l'installation complète, conçue selon les spécifications du locataire."
      },
      {
        "q": "Quelle est la durée typique d'un bail datacenter en triple net ?",
        "a": "Les baux NNN sur les powered shells courent usuellement de 10 à 20 ans, une pratique de marché documentée par CBRE sur les transactions européennes. Les montages build-to-suit hyperscale vont souvent au-delà, de 15 à 25 ans."
      },
      {
        "q": "Qui finance les équipements techniques dans une powered shell ?",
        "a": "Le locataire finance et installe onduleurs, groupes électrogènes et refroidissement. Le loyer par MW est plus faible qu'en build-to-suit, mais le capex du propriétaire reste limité à l'enveloppe et au raccordement."
      },
      {
        "q": "Un actif build-to-suit peut-il être reloué à un autre locataire ?",
        "a": "C'est possible mais potentiellement coûteux si l'actif a été hyperconfiguré : très haute densité, refroidissement propriétaire, sécurité spécifique. Les clauses de réversibilité et de remise en état se négocient donc dès la signature."
      },
      {
        "q": "Quel modèle privilégier pour un actif existant repositionné (brown-to-green) ?",
        "a": "Le shell NNN générique élargit à la fois le pool de locataires potentiels et celui des acheteurs à la sortie. Le build-to-suit ne se justifie, dans ce contexte, que si un locataire de premier ordre s'engage sur une longue durée avant les travaux."
      }
    ],
    "sourcesTitle": "Références consultées",
    "sources": [
      {
        "label": "CBRE — European Data Centres Outlook 2026 (janvier 2026)",
        "url": "https://www.cbre.com/insights/books/european-real-estate-market-outlook-2026/data-centres"
      },
      {
        "label": "CBRE — Global Data Center Trends 2026 (juin 2026)",
        "url": "https://www.cbre.com/insights/reports/global-data-center-trends-2026"
      },
      {
        "label": "Data Center Dynamics — Europe data center market to grow by nearly a quarter in 2026 (18 août 2026)",
        "url": "https://www.datacenterdynamics.com/en/news/cbre-europe-data-center-market-to-grow-by-nearly-a-quarter-in-2026/"
      },
      {
        "label": "Data Center Knowledge — Power, Not Space: The Colocation Battleground in 2026 (14 janvier 2026)",
        "url": "https://www.datacenterknowledge.com/colocation/power-not-space-the-colocation-battleground-in-2026"
      }
    ],
    "conclusionTitle": "Ce qu'il faut retenir",
    "conclusionPoints": [
      "Shell lease NNN et build-to-suit sont deux philosophies d'allocation du risque : le premier privilégie la prévisibilité et la liquidité, le second le contrôle technique et l'alignement sur un locataire unique.",
      "Le marché européen 2026 renforce le pouvoir de négociation des propriétaires : vacance à 6,5-7,3 % selon CBRE, offre pré-louée, loyers en hausse.",
      "La powered shell NNN conserve l'optionnalité technique et un large pool d'acheteurs à la sortie ; le build-to-suit offre un potentiel de loyer supérieur au prix d'un risque de concentration.",
      "La bonne décision est toujours croisée : nature de l'actif × qualité de la signature × horizon de sortie. Ce contenu est informatif et ne constitue pas un conseil en investissement."
    ],
    "authorBio": "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
    "learnMoreTitle": "En savoir plus",
    "link1Title": "Notre Stratégie TITAN DC AI",
    "link1Desc": "Découvrez la transformation brown-to-green des datacenters européens",
    "link2Title": "Nos Stratégies",
    "link2Desc": "TITAN et nos 3 autres pôles d'investissement"
  },
  "en": {
    "title": "Shell Lease NNN vs Build-to-Suit: How to Choose",
    "description": "NNN shell lease or build-to-suit for a European datacenter: risk and responsibility allocation, comparison table and decision criteria for investors.",
    "tag": "Investment Strategy",
    "date": "November 11, 2026",
    "readTime": "12 min read",
    "backToBlog": "Back to blog",
    "author": "Lila Benhammou, Co-Founder & CIO",
    "intro": "When a hyperscaler, a sovereign cloud operator or a neocloud secures datacenter capacity in Europe, two contractual structures govern most transactions: the triple-net (NNN) shell lease, covering a powered shell, and build-to-suit, where infrastructure is designed and delivered to the tenant's exact technical specifications. Behind these two terms lie two opposite philosophies for allocating capital, risk and technical control between landlord and tenant.",
    "lead": "The choice is anything but academic. According to CBRE, European datacenter vacancy fell below 10% for the first time in late 2024 and is forecast to reach an all-time low of 6.5% by the end of 2026, with more than 750 MW of new capacity expected this year. In a market where capacity is pre-let before it is built, the lease structure determines who carries development risk, who funds the technical equipment — and who captures value at exit.",
    "sections": [
      {
        "h": "Powered Shell and Build-to-Suit: What Exactly Are We Talking About?",
        "ps": [
          "A powered shell is a secure building delivered with its physical structure, power supply to the site and connectivity options — but without critical technical equipment: uninterruptible power supplies (UPS), backup generators and cooling systems. These fall to the tenant's fit-out, which the tenant designs, installs and operates to its own specifications. The landlord provides the envelope and available power; the tenant builds its computer room inside.",
          "Build-to-suit reverses the logic. The developer-landlord designs and delivers a complete facility, dimensioned to the specifications of a tenant identified from the outset: power density per rack, cooling architecture — often liquid for GPU loads — electrical redundancy levels, security requirements. This model dominates among hyperscalers, whose technical standards exceed those of a generic shell.",
          "Between the two, the exact boundary of responsibilities is the most important clause in the contract: it determines who invests, who maintains, who insures, and who owns each component at lease end. The table below shows a common allocation in the European market — for illustration, as every contract is negotiated."
        ],
        "link": {
          "href": "/en/blog/ai-infrastructure-financing-gpu-debt-spv-leasing-datacenter-2026/",
          "label": "Read also: how AI infrastructure is financed — credit, SPVs and GPU leasing"
        }
      },
      {
        "h": "The Comparison Table",
        "ps": [
          "Beyond definitions, the criterion-by-criterion comparison is what informs the decision. Here are the eight dimensions we systematically examine before structuring or acquiring an asset."
        ],
        "link": null
      },
      {
        "h": "What the European Market Says in 2026",
        "ps": [
          "CBRE data depicts a market under strain. In Q1 2026, the European vacancy rate averaged 7.3%, with wide disparities: 5% in Frankfurt, 6.7% in Paris, 8.6% in London and 9.4% in Amsterdam. The year-end forecast is an all-time low of 6.5% across Europe, despite record new supply: more than 750 MW delivered in 2026, taking the total market to roughly 13 GW, up 20% year on year.",
          "The demand structure is evolving fast. Neocloud signings for European colocation quadrupled in H1 2026, to 420 MW from 89 MW a year earlier — mostly in the Nordics, where renewable electricity is cheaper. On pricing, European asking rents in 2026 reached $165-265 per kW per month on 250-500 kW deployments, with Frankfurt at the top of the range ($235-265).",
          "In such a market, the balance of power tilts towards landlords — and it changes the trade-off between the two models. The NNN shell keeps the asset generic while the tenant funds its own technical capex: the landlord captures scarcity without exposure to equipment obsolescence. Build-to-suit is fully justified only when the tenant is first-tier and its technical requirements — liquid cooling, very high density — exceed what a standard shell can host. Two parameters weigh increasingly in negotiations: energy efficiency, now reported under the EED directive, and power security, which conditions the value of the entire transaction."
        ],
        "link": {
          "href": "/en/blog/pue-optimization-european-datacenters-guide-2026/",
          "label": "Read also: PUE, definition and optimisation for European datacenters"
        }
      },
      {
        "h": "How to Choose: the Investor's Reading Grid",
        "ps": [
          "Four questions structure the decision. Who pays the technical capex, and at what cost of capital? How strong is the tenant covenant — does the signature turn the lease into a quasi-bond? Is the asset reversible, meaning re-lettable to a third party without major reconstruction? And what exit horizon is targeted? A ten-year core investor does not read the same contract as a three-year developer.",
          "The pace of silicon adds an argument for reversibility: with four chip generations launched by a single player in one year, a building configured for a single architecture concentrates real obsolescence risk. The generic powered shell preserves optionality — it can successively host different configurations as the market evolves.",
          "That is the logic we apply at TITAN DC AI in the brown-to-green segment: reposition existing assets, optimise their efficiency, then market them as NNN shells to an expanded panel of tenants — sovereign cloud operators, hosters, enterprises — rather than locking each asset into a single configuration. The choice is made asset by asset, based on the target tenant and the exit liquidity sought. This content is provided for information purposes only and does not constitute investment advice."
        ],
        "link": {
          "href": "/en/blog/ppa-grid-connection-datacenter-power-investor-guide/",
          "label": "Read also: PPAs and grid connection — securing datacenter power"
        }
      },
      {
        "h": "Frequently Asked Questions",
        "ps": [],
        "link": null
      }
    ],
    "respTitle": "Example Responsibility Allocation",
    "respNote": "A common allocation in the European market, for illustration — every contract is negotiated.",
    "respHeaders": [
      "Component",
      "Powered shell (NNN)",
      "Build-to-suit"
    ],
    "respRows": [
      [
        "Shell and core, facade, roof",
        "Landlord",
        "Developer-landlord"
      ],
      [
        "High-voltage grid connection to site",
        "Landlord",
        "Developer-landlord"
      ],
      [
        "UPS and backup generators",
        "Tenant",
        "Developer, to tenant specifications"
      ],
      [
        "Cooling systems",
        "Tenant",
        "Developer, to tenant specifications"
      ],
      [
        "Racks, cabling, IT security",
        "Tenant",
        "Tenant"
      ],
      [
        "Structural maintenance",
        "Tenant (triple-net lease)",
        "Contract-dependent, often landlord"
      ]
    ],
    "tableTitle": "NNN Shell Lease vs Build-to-Suit: the Eight Criteria",
    "tableHeaders": [
      "Criterion",
      "NNN shell lease",
      "Build-to-suit"
    ],
    "tableRows": [
      [
        "What is delivered",
        "Secure structure, power to site, connectivity",
        "Complete facility designed to tenant specifications"
      ],
      [
        "Technical equipment capex",
        "Tenant",
        "Developer-landlord"
      ],
      [
        "Typical lease term",
        "10 to 20 years",
        "15 to 25 years, sometimes longer"
      ],
      [
        "Technical control",
        "Tenant (fit-out)",
        "Tenant (from design stage)"
      ],
      [
        "Re-letting risk at lease end",
        "Moderate: generic asset",
        "High: tenant-specific asset"
      ],
      [
        "Income profile",
        "Net, predictable, indexed",
        "Risk-adjusted rent, higher in development phase"
      ],
      [
        "Exit buyer pool",
        "Broad (core, value-add funds)",
        "Narrow (specialist buyers)"
      ],
      [
        "Typical tenants",
        "Colocation operators, sovereign clouds, structured neoclouds",
        "Hyperscalers, very large AI platforms"
      ]
    ],
    "faqTitle": "Frequently Asked Questions",
    "faq": [
      {
        "q": "What is the difference between a shell lease and build-to-suit?",
        "a": "A shell lease covers a powered shell: the landlord delivers the structure, power to the site and connectivity, and the tenant installs its technical equipment. In build-to-suit, the developer delivers the complete facility, designed to the tenant's specifications."
      },
      {
        "q": "What is the typical term of a triple-net datacenter lease?",
        "a": "NNN leases on powered shells usually run 10 to 20 years, a market practice documented by CBRE on European transactions. Hyperscale build-to-suit structures often run longer, 15 to 25 years."
      },
      {
        "q": "Who funds the technical equipment in a powered shell?",
        "a": "The tenant funds and installs UPS, generators and cooling. Rent per MW is lower than in build-to-suit, but landlord capex remains limited to the envelope and grid connection."
      },
      {
        "q": "Can a build-to-suit asset be re-let to another tenant?",
        "a": "It can, but potentially at high cost if the asset was hyper-configured: very high density, proprietary cooling, specific security. Reversibility and reinstatement clauses are therefore negotiated at signing."
      },
      {
        "q": "Which model should be favoured for a repositioned brown-to-green asset?",
        "a": "The generic NNN shell widens both the pool of potential tenants and the pool of exit buyers. In this context, build-to-suit is justified only if a first-tier tenant commits to a long term before works begin."
      }
    ],
    "sourcesTitle": "References consulted",
    "sources": [
      {
        "label": "CBRE — European Data Centres Outlook 2026 (January 2026)",
        "url": "https://www.cbre.com/insights/books/european-real-estate-market-outlook-2026/data-centres"
      },
      {
        "label": "CBRE — Global Data Center Trends 2026 (June 2026)",
        "url": "https://www.cbre.com/insights/reports/global-data-center-trends-2026"
      },
      {
        "label": "Data Center Dynamics — Europe data center market to grow by nearly a quarter in 2026 (18 August 2026)",
        "url": "https://www.datacenterdynamics.com/en/news/cbre-europe-data-center-market-to-grow-by-nearly-a-quarter-in-2026/"
      },
      {
        "label": "Data Center Knowledge — Power, Not Space: The Colocation Battleground in 2026 (14 January 2026)",
        "url": "https://www.datacenterknowledge.com/colocation/power-not-space-the-colocation-battleground-in-2026"
      }
    ],
    "conclusionTitle": "Key Takeaways",
    "conclusionPoints": [
      "NNN shell lease and build-to-suit are two philosophies of risk allocation: the former favours predictability and liquidity, the latter technical control and alignment with a single tenant.",
      "The 2026 European market strengthens landlords' negotiating power: vacancy at 6.5-7.3% per CBRE, pre-let supply, rising rents.",
      "The NNN powered shell preserves technical optionality and a broad exit buyer pool; build-to-suit offers higher rent potential at the price of concentration risk.",
      "The right decision is always a cross-product: nature of the asset × quality of the signature × exit horizon. This content is informational and does not constitute investment advice."
    ],
    "authorBio": "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
    "learnMoreTitle": "Learn more",
    "link1Title": "Our TITAN DC AI Strategy",
    "link1Desc": "Discover the brown-to-green transformation of European datacenters",
    "link2Title": "Our Strategies",
    "link2Desc": "TITAN and our 3 other investment poles"
  }
};

  const t = content[language];
  const isFr = language === 'fr';

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": t.title,
        "description": t.description,
        "image": "https://finxiacapital.com/logo-finxia.png",
        "datePublished": "2026-08-17T09:00:00+02:00",
        "dateModified": "2026-11-11T09:00:00+01:00",
        "author": {
          "@type": "Person",
          "name": "Lila Benhammou",
          "jobTitle": "Co-Founder & Chief Investment Officer",
          "worksFor": {
            "@type": "Organization",
            "name": "FINXIA Capital"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "FINXIA Capital",
          "logo": {
            "@type": "ImageObject",
            "url": "https://finxiacapital.com/logo-finxia.png"
          }
        },
        "articleSection": "Investment Strategy",
        "keywords": isFr ? "shell lease NNN, build-to-suit, powered shell, datacenter Europe, bail triple net" : "shell lease NNN, build-to-suit, powered shell, European datacenter, triple net lease"
      },
      {
        "@type": "FAQPage",
        "mainEntity": t.faq.map((f: { q: string; a: string }) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isFr ? "Accueil" : "Home",
        "item": isFr ? "https://finxiacapital.com" : "https://finxiacapital.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": isFr ? "https://finxiacapital.com/blog" : "https://finxiacapital.com/en/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t.title,
        "item": isFr ? "https://finxiacapital.com/blog/shell-lease-nnn-vs-build-to-suit-datacenter-europe" : "https://finxiacapital.com/en/blog/shell-lease-nnn-vs-build-to-suit-datacenter-leasing-europe"
      }
    ]
  };

  const renderTable = (headers: string[], rows: string[][]) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-sm border border-slate-200">
        <thead>
          <tr className="bg-slate-50">
            {headers.map((h: string, i: number) => (
              <th key={i} className="text-left p-3 font-medium text-slate-900 border-b border-slate-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: string[], i: number) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
              {row.map((cell: string, j: number) => (
                <td key={j} className="p-3 text-slate-600 border-b border-slate-100 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div data-testid="article-shell-lease-vs-bts-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={isFr ? "https://finxiacapital.com/blog/shell-lease-nnn-vs-build-to-suit-datacenter-europe/" : "https://finxiacapital.com/en/blog/shell-lease-nnn-vs-build-to-suit-datacenter-leasing-europe/"}
        keywords={isFr ? "shell lease NNN, build-to-suit, powered shell, datacenter Europe, bail triple net, hyperscale, brown-to-green" : "shell lease NNN, build-to-suit, powered shell, European datacenter, triple net, hyperscale, brown-to-green"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={isFr ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/shell-lease-nnn-vs-build-to-suit-datacenter-europe/"
        hreflangEn="https://finxiacapital.com/en/blog/shell-lease-nnn-vs-build-to-suit-datacenter-leasing-europe/"
        hreflangDefault="https://finxiacapital.com/blog/shell-lease-nnn-vs-build-to-suit-datacenter-europe/"
      />

      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={isFr ? "/blog" : "/en/blog"} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider">
                <Tag className="w-4 h-4" />
                {t.tag}
              </span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-11-11">
                <Calendar className="w-4 h-4" />
                {t.date}
              </time>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">{t.readTime}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              {t.title}
            </h1>

            <p className="text-slate-500 text-sm">
              {isFr ? 'Par ' : 'By '}{t.author} — FINXIA Capital
            </p>
          </div>
        </header>

        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                {t.intro}
              </p>

              <p className="text-lg text-slate-600 mb-8">{t.lead}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.sections[0].h}</h2>
              {t.sections[0].ps.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
              <h3 className="font-serif text-xl mt-8 mb-2">{t.respTitle}</h3>
              <p className="text-sm text-slate-500 mb-4">{t.respNote}</p>
              {renderTable(t.respHeaders, t.respRows)}
              {t.sections[0].link && (
                <p className="text-sm">
                  <Link href={t.sections[0].link.href} className="text-[#C45A3B] hover:underline">→ {t.sections[0].link.label}</Link>
                </p>
              )}

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.sections[1].h}</h2>
              {t.sections[1].ps.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
              <h3 className="font-serif text-xl mt-8 mb-4">{t.tableTitle}</h3>
              {renderTable(t.tableHeaders, t.tableRows)}

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.sections[2].h}</h2>
              {t.sections[2].ps.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
              {t.sections[2].link && (
                <p className="text-sm">
                  <Link href={t.sections[2].link.href} className="text-[#C45A3B] hover:underline">→ {t.sections[2].link.label}</Link>
                </p>
              )}

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.sections[3].h}</h2>
              {t.sections[3].ps.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
              {t.sections[3].link && (
                <p className="text-sm">
                  <Link href={t.sections[3].link.href} className="text-[#C45A3B] hover:underline">→ {t.sections[3].link.label}</Link>
                </p>
              )}
              <p className="text-sm mt-4">
                <Link href={isFr ? "/strategies/" : "/en/strategies/"} className="text-[#C45A3B] hover:underline">→ {isFr ? "Découvrir nos stratégies d'investissement" : "Discover our investment strategies"}</Link>
              </p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.faqTitle}</h2>
              <div className="space-y-6">
                {t.faq.map((f: { q: string; a: string }, i: number) => (
                  <div key={i} className="border-l-4 border-[#C45A3B] pl-4">
                    <p className="font-medium text-slate-900 mb-2">{f.q}</p>
                    <p className="text-slate-600">{f.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-slate-50 border-l-4 border-[#C45A3B]">
                <p className="font-serif text-xl mb-4">{t.conclusionTitle}</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  {t.conclusionPoints.map((p: string, i: number) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <p className="font-serif text-xl mb-4">{t.sourcesTitle}</p>
                <ul className="space-y-2 text-sm">
                  {t.sources.map((s: { label: string; url: string }, i: number) => (
                    <li key={i}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline inline-flex items-center gap-1">
                        {s.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Finxia Capital</strong> {t.authorBio}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a href="mailto:contact@finxiacapital.com" className="text-[#C45A3B] hover:underline">
                  contact@finxiacapital.com
                </a>
                <span className="text-slate-400">•</span>
                <a href="https://finxiacapital.com" className="text-[#C45A3B] hover:underline">
                  finxiacapital.com
                </a>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <h3 className="font-serif text-xl mb-6">{t.learnMoreTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={isFr ? "/strategies" : "/en/strategies"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link1Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link1Desc}</p>
                </Link>
                <Link href={isFr ? "/strategies" : "/en/strategies"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link2Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link2Desc}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
