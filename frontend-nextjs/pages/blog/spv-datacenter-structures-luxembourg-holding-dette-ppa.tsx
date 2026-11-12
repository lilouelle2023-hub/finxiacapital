import { ArrowLeft, Calendar, Tag, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

export default function ArticleDatacenterSpvPage() {
  const { language } = useLanguage();

  const content = {
  "fr": {
    "title": "SPV datacenter : holding, dette et PPA",
    "description": "Structuration d'un SPV datacenter : véhicule holding, dette de projet et contrat d'achat d'électricité (PPA). Cadre pratique pour les sites européens.",
    "tag": "Market Analysis",
    "date": "12 novembre 2026",
    "readTime": "12 min de lecture",
    "backToBlog": "Retour au blog",
    "author": "Lila Benhammou, Co-Fondatrice & CIO",
    "intro": "Un datacenter de 10 à 50 MW représente typiquement un investissement de plusieurs dizaines de millions d'euros, des engagements électriques de quinze à vingt ans et un bail dont la valeur dépend d'une seule signature. Encapsuler ce triptyque foncier, énergie et crédit locataire dans une entité juridique dédiée — le special purpose vehicle, ou SPV — est devenu la norme des transactions européennes. Cet article détaille comment nous structurons la chaîne de détention, la dette de projet et le contrat d'achat d'électricité autour d'un SPV d'actif.",
    "lead": "La logique est celle de l'anneau de confinement nucléaire : tout ce qui peut mal tourner — sinistre, litige, défaut de paiement, obligation réglementaire — doit rester à l'intérieur de la structure et ne jamais remonter vers les investisseurs. Bien conçue, la structure SPV transforme un actif complexe en un flux contracté lisible par un prêteur ; mal conçue, elle bloque le financement ou détruit la liquidité de sortie.",
    "sections": [
      {
        "h": "Pourquoi isoler l'actif dans un SPV",
        "ps": [
          "Le SPV répond à trois exigences. La première est la protection du bilan : en séparant l'actif dans une entité dédiée, les risques spécifiques au site — travaux, conformité environnementale, litiges de voisinage — sont juridiquement confinés. Le véhicule d'investissement ne met en jeu que son apport dans l'entité, pas son patrimoine global.",
          "La deuxième est la lisibilité du financement. Une banque ne prête jamais à un portefeuille : elle prête à un actif, contre un bail, une parcelle et un flux. Le SPV concentre exactement ce périmètre — l'immeuble, le bail, le contrat d'électricité, les permis — et devient le débiteur naturel de la dette de projet. C'est cette clarté qui permet au prêteur de dimensionner ses garanties et ses covenants.",
          "La troisième est la liquidité de sortie. Vendre des parts d'un SPV est structurellement plus simple que céder un actif bruts de droits : l'acquéreur reprend une entité propre, avec ses contrats, ses permis et ses obligations déclaratives déjà identifiés. En Europe, cette dimension a pris du poids avec la directive sur l'efficacité énergétique : les datacenters d'au moins 500 kW de puissance IT installée doivent désormais déclarer leurs performances chaque année à la base européenne, et un SPV bien tenu conserve l'historique complet de ces déclarations — un actif de diligence à lui seul."
        ],
        "link": null
      },
      {
        "h": "La chaîne de détention : du véhicule du fonds au SPV d'actif",
        "ps": [
          "La structure la plus courante compte trois maillons. En amont, le véhicule d'investissement — chez FINXIA, une SCSp luxembourgeoise — détient la stratégie et l'ensemble des participations. Au milieu, une holding intermédiaire regroupe, par pays ou par sous-stratégie, les participations dans les SPV d'actifs, ce qui simplifie la gouvernance et les flux de dividendes. En aval, chaque SPV d'actif, établi dans le pays du site, détient l'immobilier, le bail et les contrats d'exploitation.",
          "Ce découpage n'est pas dogmatique : certains actifs n'exigent pas de holding intermédiaire, d'autres en ajoutent une par co-investisseur. Deux principes guident la décision. D'abord, la séparation des risques : aucun créancier d'un site ne doit pouvoir saisir un autre site. Ensuite, la facilité d'entrée et de sortie des partenaires : la cession de parts d'une holding ou d'un SPV doit pouvoir se faire sans restructurer l'ensemble.",
          "Un point mérite l'attention des souscripteurs : la substance. Un SPV vide — sans gouvernance réelle, sans comptabilité propre, sans prise de décision documentée — fragilise la structuration fiscale et le raisonnement de non-recours attendu par le prêteur. Nous traitons la gouvernance de chaque SPV comme un livrable, pas comme une formalité."
        ],
        "link": {
          "href": "/blog/shell-lease-nnn-vs-build-to-suit-datacenter-europe/",
          "label": "Lire aussi : shell lease NNN ou build-to-suit — quel modèle locatif pour l'actif ?"
        }
      },
      {
        "h": "La dette de projet : garanties et covenants",
        "ps": [
          "La dette senior d'un datacenter est adossée à un paquet de sûretés classique : hypothèque sur l'immeuble, nantissement des parts du SPV, cession en garantie du bail, du PPA et des contrats d'assurance, comptes séquestrés pour les loyers. L'originalité du secteur tient à ce que la valeur de reprise repose moins sur le bâtiment que sur le contrat : la qualité du bail — durée, indexation, solidité de la signature — détermine le prix de la dette.",
          "Les covenants suivent la même logique. Le ratio de couverture du service de la dette mesure si le loyer contracté suffit à payer intérêts et principal ; le ratio prêt-valeur encadre l'endettement par rapport à la valeur de l'actif. Nous n'indiquons pas ici de seuils chiffrés car ils se négocient transaction par transaction et varient selon la maturité de l'actif et la qualité du locataire — toute fourchette générique serait un chiffre non sourcé.",
          "Le paysage des prêteurs s'est élargi. Les banques commerciales restent dominantes, mais les institutions multilatérales montrent l'intérêt de la maturité longue : la Banque européenne d'investissement, dont le siège est au Luxembourg, a consacré 14,4 milliards d'euros à la numérisation et à l'innovation technologique en 2024 et finance directement des opérateurs de datacenters européens. Pour un actif aux revenus contractés, la compétition entre prêteurs est une composante réelle du rendement final."
        ],
        "link": {
          "href": "/blog/financement-infrastructure-ia-gpu-credit-spv-dette-leasing-datacenter-2026/",
          "label": "Lire aussi : financer l'infrastructure IA — crédit, SPV et leasing GPU"
        }
      },
      {
        "h": "Le PPA et le bail : sécuriser les deux extrémités du flux",
        "ps": [
          "La trésorerie d'un SPV datacenter se lit de droite à gauche : le loyer entre, l'électricité sort. Les deux extrémités doivent être contractées avec la même rigueur. Côté revenus, le bail long terme est le pivot : un bail take-or-pay avec un locataire solvable transforme le SPV en émetteur de quasi-obligation. C'est pourquoi nous distinguons systématiquement les revenus contractés — titrisables, bancables — des revenus de consommation, plus volatils, qui exigent des protections supplémentaires.",
          "Côté charges, le contrat d'achat d'électricité — le PPA — fait plus que fixer un prix : il sécurise l'origine, la durée et les conditions de l'énergie qui alimente l'actif. Dans un contexte où les files d'attente de raccordement allongent les délais de mise en service partout en Europe, un PPA bien structuré est devenu une condition de financement autant qu'un contrat d'approvisionnement.",
          "Le point de vigilance est la cohérence des durées : un bail de quinze ans adossé à un PPA de cinq ans expose le SPV à un risque de révision tarifaire en cours de route. L'alignement des échéances énergétiques et locatives, la qualité du producteur et le mécanisme d'indexation sont les trois paramètres que nous documentons avant tout comité d'investissement."
        ],
        "link": {
          "href": "/blog/ppa-raccordement-securiser-electricite-datacenter-investisseur/",
          "label": "Lire aussi : PPA et raccordement — sécuriser l'électricité d'un datacenter en Europe"
        }
      },
      {
        "h": "La checklist du prêteur — et du souscripteur",
        "ps": [
          "Un prêteur expérimenté du secteur regarde six choses, dans cet ordre : la qualité du locataire et la part de revenus contractés ; la sécurité de l'alimentation électrique et l'état du raccordement ; les permis et la conformité déclarative, y compris les obligations de reporting énergétique européennes ; le plan de capex et sa couverture ; la gouvernance du SPV et la qualité de la comptabilité ; enfin, la liquidité de sortie — à qui l'actif peut-il être revendu.",
          "Le souscripteur actionnaires doit regarder les mêmes six points, mais avec une question supplémentaire : que se passe-t-il si le scénario central dérape ? Si le locataire part en cours de bail, les pénalités de résiliation couvrent-elles le refinancement ? Si le PPA se renégocie, le DSCR tient-il ? Si le marché de la sortie se ferme deux ans, le SPV survit-il à sa propre dette ? C'est la discipline que nous appliquons chez TITAN DC AI sur chaque acquisition : la structure SPV se juge à sa robustesse dans le scénario défavorable, pas dans le scénario central.",
          "Un dernier rappel : les structures décrites ici sont générales et chaque mise en œuvre relève d'un conseil juridique et fiscal spécifique. Ce contenu est fourni à titre informatif uniquement et ne constitue ni un conseil en investissement ni un conseil juridique ou fiscal."
        ],
        "link": {
          "href": "/strategies/",
          "label": "Découvrir la stratégie TITAN DC AI et nos autres pôles d'investissement"
        }
      }
    ],
    "sourcesTitle": "Références consultées",
    "sources": [
      {
        "label": "EUR-Lex — Directive (UE) 2023/1791, article 12 (obligations de déclaration des datacenters)",
        "url": "https://eur-lex.europa.eu/eli/dir/2023/1791/oj"
      },
      {
        "label": "EUR-Lex — Règlement délégué (UE) 2024/1364 (base de données européenne des datacenters, mars 2024)",
        "url": "https://eur-lex.europa.eu/eli/reg_del/2024/1364/oj"
      },
      {
        "label": "BEI — Data centres for Europe's digital future (advisory, février 2025)",
        "url": "https://advisory.eib.org/stories/data-centres-for-europe-digital-future"
      },
      {
        "label": "BEI — Activités financières de la Banque européenne d'investissement, rapport annuel 2024 (OJ C, 31 mars 2026)",
        "url": "https://eur-lex.europa.eu/eli/C/2026/1432/oj/eng"
      }
    ],
    "conclusionTitle": "Ce qu'il faut retenir",
    "conclusionPoints": [
      "Le SPV n'est pas une formalité : c'est l'outil qui confine les risques, rend l'actif finançable et préserve la liquidité de sortie.",
      "La chaîne véhicule du fonds → holding → SPV d'actif doit être arbitrée sur deux critères : séparation des risques et facilité de sortie des partenaires.",
      "La dette de projet se prix sur la qualité du bail plus que sur le bâtiment ; le PPA et le bail doivent être alignés en durée, en indexation et en solidité de contrepartie.",
      "La checklist du prêteur — locataire, énergie, permis, capex, gouvernance, sortie — est aussi celle du bon souscripteur, augmentée d'une question : la structure tient-elle dans le scénario défavorable ?"
    ],
    "authorBio": "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
    "learnMoreTitle": "En savoir plus",
    "link1Title": "Notre Stratégie TITAN DC AI",
    "link1Desc": "Découvrez la transformation brown-to-green des datacenters européens",
    "link2Title": "Nos Stratégies",
    "link2Desc": "TITAN et nos 3 autres pôles d'investissement"
  },
  "en": {
    "title": "Datacenter SPV: Holding, Debt and PPA Structures",
    "description": "How investors structure a datacenter SPV: holding vehicle, project debt, and power purchase agreement. A practical framework for European sites.",
    "tag": "Market Analysis",
    "date": "November 12, 2026",
    "readTime": "12 min read",
    "backToBlog": "Back to blog",
    "author": "Lila Benhammou, Co-Founder & CIO",
    "intro": "A 10 to 50 MW datacenter typically represents an investment of tens of millions of euros, fifteen-to-twenty-year power commitments and a lease whose value rests on a single signature. Encapsulating this land-power-tenant-credit triptych in a dedicated legal entity — the special purpose vehicle, or SPV — has become the norm for European transactions. This article details how we structure the holding chain, the project debt and the power purchase agreement around an asset SPV.",
    "lead": "The logic is that of a nuclear containment ring: everything that can go wrong — disaster, litigation, payment default, regulatory obligation — must stay inside the structure and never travel up to investors. Well designed, the SPV turns a complex asset into a readable contracted cash flow for a lender; badly designed, it blocks financing or destroys exit liquidity.",
    "sections": [
      {
        "h": "Why Isolate the Asset in an SPV",
        "ps": [
          "The SPV answers three requirements. The first is balance-sheet protection: by separating the asset into a dedicated entity, site-specific risks — construction, environmental compliance, neighbourhood disputes — are legally confined. The investment vehicle puts at stake only its stake in the entity, not its whole patrimony. For institutional co-investors, this ring-fencing is usually a precondition: their mandates rarely accept cross-liability between assets, and a shared vehicle without legal separation can block an otherwise attractive allocation.",
          "In practice, the SPV also creates a clean audit trail: every invoice, permit, filing and covenant certificate sits in one entity's accounts. When the time comes to refinance or sell, the data room is the SPV itself.",
          "The second is financing readability. A bank never lends to a portfolio: it lends against an asset, a lease, a plot and a cash flow. The SPV concentrates exactly that perimeter — the building, the lease, the power contract, the permits — and becomes the natural borrower for the project debt. That clarity is what lets the lender size its security package and covenants.",
          "The third is exit liquidity. Selling SPV shares is structurally simpler than transferring a raw asset: the buyer takes over a clean entity, with its contracts, permits and filing history already identified. In Europe this dimension has gained weight with the Energy Efficiency Directive: datacenters with at least 500 kW of installed IT power must now report their performance annually to the European database, and a well-kept SPV retains the full history of those filings — a diligence asset in itself."
        ],
        "link": null
      },
      {
        "h": "The Holding Chain: from Fund Vehicle to Asset SPV",
        "ps": [
          "The most common structure has three links. Upstream, the investment vehicle — at FINXIA, a Luxembourg SCSp — holds the strategy and all participations. In the middle, an intermediate holding aggregates, by country or sub-strategy, the stakes in the asset SPVs, simplifying governance and dividend flows. Downstream, each asset SPV, established in the site's country, holds the real estate, the lease and the operating contracts.",
          "This segmentation is not dogmatic: some assets require no intermediate holding, others add one per co-investor. Two principles guide the decision. First, risk separation: no creditor of one site should be able to seize another site. Second, ease of partner entry and exit: the transfer of shares in a holding or SPV must be possible without restructuring the whole.",
          "One point deserves underwriters' attention: substance. An empty SPV — no real governance, no dedicated accounting, no documented decision-making — weakens the tax structuring and the non-recourse reasoning expected by the lender. We treat each SPV's governance as a deliverable, not a formality."
        ],
        "link": {
          "href": "/en/blog/shell-lease-nnn-vs-build-to-suit-datacenter-leasing-europe/",
          "label": "Read also: NNN shell lease or build-to-suit — which leasing model for the asset?"
        }
      },
      {
        "h": "Project Debt: Security and Covenants",
        "ps": [
          "Senior datacenter debt is backed by a classic security package: mortgage on the building, pledge of SPV shares, assignment of the lease, the PPA and insurance contracts in security, escrowed accounts for rent. The sector's originality is that recovery value rests less on the building than on the contract: the quality of the lease — term, indexation, strength of the signature — determines the price of the debt. A generic shell leased for fifteen years to an investment-grade operator prices like infrastructure credit; a hyper-customised building leased to a single fragile tenant prices like venture debt, whatever the bricks are worth.",
          "Covenants follow the same logic. The debt service coverage ratio measures whether contracted rent suffices to pay interest and principal; the loan-to-value ratio frames leverage against asset value. We deliberately give no numerical thresholds here, as they are negotiated transaction by transaction and vary with asset maturity and tenant quality — any generic bracket would be an unsourced figure.",
          "The lender landscape has widened. Commercial banks remain dominant, but multilateral institutions show the value of long maturity: the European Investment Bank, headquartered in Luxembourg, devoted €14.4bn to digitalisation and technological innovation in 2024 and directly finances European datacenter operators. For an asset with contracted revenue, competition between lenders is a real component of final return."
        ],
        "link": {
          "href": "/en/blog/ai-infrastructure-financing-gpu-debt-spv-leasing-datacenter-2026/",
          "label": "Read also: financing AI infrastructure — credit, SPVs and GPU leasing"
        }
      },
      {
        "h": "The PPA and the Lease: Securing Both Ends of the Cash Flow",
        "ps": [
          "An asset SPV's cash flow reads right to left: rent comes in, electricity goes out. Both ends must be contracted with the same rigour. On the revenue side, the long-term lease is the pivot: a take-or-pay lease with a solvent tenant turns the SPV into a quasi-bond issuer. That is why we systematically distinguish contracted revenue — securitisable, bankable — from consumption revenue, more volatile, which demands extra protections.",
          "On the cost side, the power purchase agreement does more than fix a price: it secures the origin, duration and conditions of the energy feeding the asset. With grid-connection queues lengthening time-to-energisation across Europe, a well-structured PPA has become a financing condition as much as a supply contract.",
          "The watchpoint is duration coherence: a fifteen-year lease backed by a five-year PPA exposes the SPV to mid-route tariff re-pricing. The alignment of energy and lease maturities, the quality of the producer and the indexation mechanism are the three parameters we document before any investment committee. Where a long-term physical PPA is unavailable, layered arrangements — a shorter supply contract combined with green certificates, or a sleeved corporate PPA — can approximate the same bankability, provided the lender's counsel accepts the residual basis risk. None of these mechanics removes the core discipline: the SPV must show, on paper, that contracted revenue covers contracted costs through the debt tenor."
        ],
        "link": {
          "href": "/en/blog/ppa-grid-connection-datacenter-power-investor-guide/",
          "label": "Read also: PPAs and grid connection — securing datacenter power in Europe"
        }
      },
      {
        "h": "The Lender's Checklist — and the Underwriter's",
        "ps": [
          "An experienced sector lender looks at six things, in this order: tenant quality and the share of contracted revenue; power security and grid-connection status; permits and filing compliance, including European energy reporting obligations; the capex plan and its funding; SPV governance and accounting quality; and finally exit liquidity — who could the asset be sold to. The order matters: a weak answer on any of the first three is rarely cured by strength on the last three, because the first three determine whether the cash flow exists at all.",
          "An equity underwriter must look at the same six points, plus one extra question: what happens if the central scenario derails? If the tenant leaves mid-lease, do termination penalties cover refinancing? If the PPA is renegotiated, does the DSCR hold? If the exit market closes for two years, does the SPV survive its own debt? That is the discipline we apply at TITAN DC AI on every acquisition: the SPV structure is judged on its robustness in the downside scenario, not the central one.",
          "A final reminder: the structures described here are general and each implementation requires specific legal and tax advice. This content is provided for information purposes only and constitutes neither investment advice nor legal or tax advice."
        ],
        "link": {
          "href": "/en/strategies/",
          "label": "Discover the TITAN DC AI strategy and our other investment poles"
        }
      }
    ],
    "sourcesTitle": "References consulted",
    "sources": [
      {
        "label": "EUR-Lex — Directive (EU) 2023/1791, Article 12 (datacenter reporting obligations)",
        "url": "https://eur-lex.europa.eu/eli/dir/2023/1791/oj"
      },
      {
        "label": "EUR-Lex — Delegated Regulation (EU) 2024/1364 (European datacenter database, March 2024)",
        "url": "https://eur-lex.europa.eu/eli/reg_del/2024/1364/oj"
      },
      {
        "label": "EIB — Data centres for Europe's digital future (advisory, February 2025)",
        "url": "https://advisory.eib.org/stories/data-centres-for-europe-digital-future"
      },
      {
        "label": "EIB — Financial activities of the European Investment Bank, 2024 annual report (OJ C, 31 March 2026)",
        "url": "https://eur-lex.europa.eu/eli/C/2026/1432/oj/eng"
      }
    ],
    "conclusionTitle": "Key Takeaways",
    "conclusionPoints": [
      "The SPV is not a formality: it is the tool that confines risks, makes the asset financeable and preserves exit liquidity.",
      "The fund vehicle → holding → asset SPV chain should be arbitrated on two criteria: risk separation and ease of partner exit.",
      "Project debt is priced on lease quality more than the building; the PPA and the lease must align in duration, indexation and counterparty strength.",
      "The lender's checklist — tenant, power, permits, capex, governance, exit — is also the good underwriter's, plus one question: does the structure hold in the downside scenario?"
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
    "@type": "BlogPosting",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-11-12T09:00:00+01:00",
    "dateModified": "2026-11-12T09:00:00+01:00",
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
    "articleSection": "Market Analysis",
    "keywords": isFr ? "SPV datacenter, holding, dette de projet, PPA, datacenter, investissement Europe" : "datacenter SPV, holding structure, project finance, PPA, European datacenter investment"
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
        "item": isFr ? "https://finxiacapital.com/blog/spv-datacenter-structures-luxembourg-holding-dette-ppa" : "https://finxiacapital.com/en/blog/datacenter-spv-structures-luxembourg-holding-debt-ppa"
      }
    ]
  };

  return (
    <div data-testid="article-datacenter-spv-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={isFr ? "https://finxiacapital.com/blog/spv-datacenter-structures-luxembourg-holding-dette-ppa/" : "https://finxiacapital.com/en/blog/datacenter-spv-structures-luxembourg-holding-debt-ppa/"}
        keywords={isFr ? "SPV datacenter, holding, dette de projet, PPA, bail long terme, investissement Europe" : "datacenter SPV, holding, project debt, PPA, long-term lease, European investment"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={isFr ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/spv-datacenter-structures-luxembourg-holding-dette-ppa/"
        hreflangEn="https://finxiacapital.com/en/blog/datacenter-spv-structures-luxembourg-holding-debt-ppa/"
        hreflangDefault="https://finxiacapital.com/blog/spv-datacenter-structures-luxembourg-holding-dette-ppa/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-11-12">
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

              {t.sections.map((s: { h: string; ps: string[]; link: { href: string; label: string } | null }, i: number) => (
                <div key={i}>
                  <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{s.h}</h2>
                  {s.ps.map((p: string, j: number) => (
                    <p key={j}>{p}</p>
                  ))}
                  {s.link && (
                    <p className="text-sm">
                      <Link href={s.link.href} className="text-[#C45A3B] hover:underline">→ {s.link.label}</Link>
                    </p>
                  )}
                </div>
              ))}

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
