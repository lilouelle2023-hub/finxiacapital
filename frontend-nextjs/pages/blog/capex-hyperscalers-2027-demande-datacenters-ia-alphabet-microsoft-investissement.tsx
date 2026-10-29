import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleCapexHyperscalersPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Capex des hyperscalers : 300 milliards chez Alphabet, 175 chez Microsoft — quelle demande pour les datacenters ?",
      description: "Les résultats trimestriels confirment l'ampleur du cycle : Microsoft guide vers environ 175 milliards de dollars de capex en 2026, Alphabet prépare plus de 300 milliards pour 2027, Azure croît de 48 %. Analyse d'une demande d'infrastructure IA qui s'inscrit dans la durée — et de ses points de vigilance.",
      tag: "Investment Strategy",
      date: "29 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Les publications trimestrielles qui viennent de tomber donnent au cycle de l'infrastructure IA une visibilité rare. Microsoft table sur environ 175 milliards de dollars de dépenses d'investissement pour l'année civile 2026, après un trimestre où son capex a presque doublé à 39,4 milliards. Alphabet prépare, lui, plus de 300 milliards pour 2027. Derrière ces chiffres, une réalité physique : des datacenters à construire, raccorder et exploiter.",
      p1: "La demande, elle, est bien au rendez-vous : Azure progresse de 48 % sur un an, le cloud de Microsoft atteint 63,9 milliards de dollars de revenus trimestriels, et celui d'Alphabet a doublé pour atteindre 30,7 milliards. Ce ne sont plus des paris sur l'usage futur de l'IA — ce sont des revenus cloud existants qui tirent la capacité.",
      p2: "Le marché boursier, lui, fait la part des choses : Alphabet a perdu jusqu'à 10 % après ses résultats, sanctionné pour des dépenses jugées élevées malgré la croissance. Les investisseurs ne contestent plus la demande, ils scrutent les rendements. C'est une nuance importante pour qui investit dans la chaîne d'infrastructure.",
      h2_1: "Une demande pluriannuelle, pas un feu de paille",
      p3: "Ce que ces guidances changent, c'est l'horizon de visibilité. Des capex engagés sur 2026 et 2027 signifient des commandes de capacité qui se matérialiseront sur plusieurs années : serveurs, réseaux, mais aussi bâtiments, raccordements électriques et refroidissement. La chaîne d'infrastructure physique bénéficie d'un effet de carnet de commandes.",
      p4: "Pour l'Europe, la question est de savoir quelle part de ces gigantesques enveloppes viendra se localiser sur le continent. Les contraintes de souveraineté numérique, de résidence des données et de latence militent pour une part croissante de capacité européenne — encore faut-il que les sites, les permis et les mégawatts soient disponibles au moment où les commandes arrivent.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "La première lecture est favorable : des clients dont les capex se chiffrent en centaines de milliards sont des contreparties solides et des signataires de contrats longs. La demande de datacenters ne repose plus sur des projections, mais sur des budgets votés et publiés.",
      p6: "La seconde lecture appelle la discipline : la réaction boursière à Alphabet rappelle que la patience des marchés a des limites. Si les rendements de l'IA déçoivent, les capex seront revus — et les capacités les plus exposées à un seul client ou à des contrats courts en souffriront. La sélectivité sur les contreparties et la durée des engagements reste la meilleure protection.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, ces guidances confortent notre scénario central : la rareté des sites préparés et des mégawatts raccordés va persister face à une demande pluriannuelle. Nous privilégions les actifs dont la valeur tient à ce que les hyperscalers ne peuvent pas accélérer — le foncier connecté, la puissance disponible, les permis.",
      p8: "Nous retenons aussi la leçon de la réaction boursière : notre analyse de contreparties distingue les engagements fermes des intentions. Un actif adossé à un contrat long avec un client dont le capex est publié et financé ne présente pas le même profil qu'une capacité spéculative construite sur des anticipations.",
      h2_4: "Ce qu'il faut retenir",
      p9: "Microsoft vise environ 175 milliards de dollars de capex en 2026, Alphabet plus de 300 milliards en 2027, avec des croissances cloud de 48 % et un doublement respectivement. La demande d'infrastructure IA est documentée, pluriannuelle — mais les marchés exigent désormais des preuves de rendement, ce qui renforce la prime aux actifs bien contractualisés.",
      p10: "À surveiller : la localisation européenne de ces capex, les prochains contrats de capacité signés en Europe, et l'évolution du discours des hyperscalers sur le retour sur investissement de l'IA lors des prochains trimestriels.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Hyperscaler Capex: $300B at Alphabet, $175B at Microsoft — What Demand for Datacenters?",
      description: "Quarterly results confirm the scale of the cycle: Microsoft is guiding toward roughly $175 billion of capex in 2026, Alphabet is preparing more than $300 billion for 2027, and Azure is growing 48%. Analyzing AI infrastructure demand built to last — and its watch points.",
      tag: "Investment Strategy",
      date: "October 29, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "The quarterly results just released give the AI infrastructure cycle rare visibility. Microsoft is targeting roughly $175 billion of capital expenditure for calendar year 2026, after a quarter in which its capex nearly doubled to $39.4 billion. Alphabet is preparing more than $300 billion for 2027. Behind these figures lies a physical reality: datacenters to build, connect and operate.",
      p1: "Demand is clearly there: Azure is growing 48% year on year, Microsoft Cloud reached $63.9 billion in quarterly revenue, and Alphabet's cloud doubled to $30.7 billion. These are no longer bets on future AI usage — they are existing cloud revenues pulling capacity.",
      p2: "The stock market, however, is discerning: Alphabet fell as much as 10% after its results, penalized for spending deemed high despite growth. Investors no longer question demand; they scrutinize returns. This is an important nuance for anyone investing in the infrastructure chain.",
      h2_1: "Multi-Year Demand, Not a Flash in the Pan",
      p3: "What these guidances change is the visibility horizon. Capex committed for 2026 and 2027 means capacity orders materializing over several years: servers, networks, but also buildings, grid connections and cooling. The physical infrastructure chain benefits from an order-book effect.",
      p4: "For Europe, the question is how much of these gigantic envelopes will land on the continent. Digital sovereignty, data residency and latency requirements argue for a growing share of European capacity — provided sites, permits and megawatts are available when orders arrive.",
      h2_2: "What This Changes for Investors",
      p5: "The first reading is favorable: customers whose capex runs into hundreds of billions are solid counterparties and signatories of long contracts. Datacenter demand no longer rests on projections, but on voted and published budgets.",
      p6: "The second reading calls for discipline: the market reaction to Alphabet reminds us that investors' patience has limits. If AI returns disappoint, capex will be revised — and capacity most exposed to a single customer or short contracts will suffer. Selectivity on counterparties and commitment duration remains the best protection.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, these guidances support our central scenario: the scarcity of prepared sites and connected megawatts will persist against multi-year demand. We favor assets whose value lies in what hyperscalers cannot accelerate — connected land, available power, permits.",
      p8: "We also retain the lesson of the market reaction: our counterparty analysis distinguishes firm commitments from intentions. An asset backed by a long contract with a customer whose capex is published and financed does not have the same profile as speculative capacity built on expectations.",
      h2_4: "Key Takeaways",
      p9: "Microsoft is targeting roughly $175 billion of capex in 2026 and Alphabet more than $300 billion in 2027, with cloud growth of 48% and a doubling respectively. AI infrastructure demand is documented and multi-year — but markets now demand proof of returns, which strengthens the premium for well-contracted assets.",
      p10: "Worth watching: the European localization of this capex, upcoming capacity contracts signed in Europe, and how hyperscalers discuss AI return on investment in coming quarters.",
      authorBio: "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
      learnMoreTitle: "Learn more",
      link1Title: "Our Strategies",
      link1Desc: "Discover TITAN and our 3 other investment poles",
      link2Title: "European Approach",
      link2Desc: "France, Spain, Italy: our European target markets"
    }
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-10-29T09:00:00+01:00",
    "dateModified": "2026-10-29T09:00:00+01:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "worksFor": {
        "@type": "Organization",
        "name": "Finxia Capital",
        "url": "https://finxiacapital.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Finxia Capital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://finxiacapital.com/logo-finxia.png"
      }
    },
    "articleSection": "Investment Strategy",
    "keywords": language === 'fr' ? "capex hyperscalers, datacenter, IA, investissement infrastructure IA, Microsoft, Alphabet, cloud, GPU, souveraineté numérique" : "hyperscaler capex, datacenter, AI, AI infrastructure investment, Microsoft, Alphabet, cloud, GPU, digital sovereignty"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'fr' ? "Accueil" : "Home",
        "item": language === 'fr' ? "https://finxiacapital.com" : "https://finxiacapital.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": language === 'fr' ? "https://finxiacapital.com/blog" : "https://finxiacapital.com/en/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t.title,
        "item": language === 'fr' ? "https://finxiacapital.com/blog/capex-hyperscalers-2027-demande-datacenters-ia-alphabet-microsoft-investissement" : "https://finxiacapital.com/en/blog/hyperscaler-capex-2027-ai-datacenter-demand-alphabet-microsoft-investment"
      }
    ]
  };

  return (
    <div data-testid="article-capex-hyperscalers-2027-demande-datacenters-ia-alphabet-microsoft-investissement-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/capex-hyperscalers-2027-demande-datacenters-ia-alphabet-microsoft-investissement/" : "https://finxiacapital.com/en/blog/hyperscaler-capex-2027-ai-datacenter-demand-alphabet-microsoft-investment/"}
        keywords={language === 'fr' ? "capex hyperscalers, datacenter, IA, investissement infrastructure IA, Microsoft, Alphabet, cloud, GPU, souveraineté numérique" : "hyperscaler capex, datacenter, AI, AI infrastructure investment, Microsoft, Alphabet, cloud, GPU, digital sovereignty"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/capex-hyperscalers-2027-demande-datacenters-ia-alphabet-microsoft-investissement/"
        hreflangEn="https://finxiacapital.com/en/blog/hyperscaler-capex-2027-ai-datacenter-demand-alphabet-microsoft-investment/"
        hreflangDefault="https://finxiacapital.com/blog/capex-hyperscalers-2027-demande-datacenters-ia-alphabet-microsoft-investissement/"
      />
      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? "/blog" : "/en/blog"} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider">
                <Tag className="w-4 h-4" />
                {t.tag}
              </span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-29">
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
              {language === 'fr' ? 'Par Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital' : 'By Lila Benhammou, Co-Founder & CIO — FINXIA Capital'}
            </p>
          </div>
        </header>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">{t.lead}</p>
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_1}</h2>
              <p>{t.p3}</p>
              <p>{t.p4}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_2}</h2>
              <p>{t.p5}</p>
              <p>{t.p6}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p7}</p>
              <p>{t.p8}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_4}</h2>
              <p>{t.p9}</p>
              <p>{t.p10}</p>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Lila Benhammou</strong> {t.authorBio}
              </p>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-200">
              <h3 className="font-serif text-xl mb-6">{t.learnMoreTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={language === 'fr' ? "/strategies" : "/en/strategies"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link1Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link1Desc}</p>
                </Link>
                <Link href={language === 'fr' ? "/european-approach" : "/en/european-approach"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
