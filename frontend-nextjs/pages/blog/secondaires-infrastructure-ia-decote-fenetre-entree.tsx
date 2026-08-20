import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function AIInfraSecondariesArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Secondaires d'infrastructure IA : pourquoi la décote de 25-40% crée une fenêtre d'entrée",
      description: "Le marché secondaire général se resserre à 5-10% de décote, mais l'infrastructure IA reste décotée de 25-40%. Pourquoi cet écart persiste. C.CAPITAL.",
      metaDescription: "Secondaires infrastructure IA : décote de 25-40% vs derniers tours, contre 5-10% sur le marché secondaire général. Resserrement LP sur l'illiquide, thèse C.CAPITAL. Analyse FINXIA Capital.",
      breadcrumbLabel: "Secondaires infrastructure IA : la décote",
      keywords: "secondaires infrastructure IA, décote private equity IA, LP illiquide infrastructure, thèse C.CAPITAL, investissement secondaire IA, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'C.CAPITAL',
      date: '21 août 2026',
      readTime: '5 min de lecture',
      byline: 'Par Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital',
      architectureLabel: 'C.CAPITAL',
      lead: "Le marché secondaire général du private equity s'est nettement resserré : les décotes sur les fonds de qualité sont tombées à 5-10% en 2025-2026, contre 15-25% durant le choc de taux de 2022-2023. Les secondaires d'infrastructure IA, eux, continuent de se négocier avec une décote de 25-40% par rapport aux derniers tours de financement. Cet écart n'est pas une anomalie de marché — c'est le signal d'une dislocation structurelle qui persiste.",
      p1: "L'explication tient en un mot : illiquidité. De nombreux LP se sont resserrés sur les actifs illiquides depuis le choc de taux 2022-2023, et cette aversion n'a pas disparu avec la reprise générale du marché secondaire. Or l'infrastructure IA — datacenters, capacité de calcul, plateformes cloud — reste par nature un actif à cycle long, capital-intensif, difficile à valoriser sur les méthodologies classiques de private equity. C'est précisément cette difficulté de valorisation qui maintient la décote large, même quand la liquidité générale du marché s'améliore.",
      h2_1: "Pourquoi le resserrement général du marché ne comble pas cet écart",
      p2: "Le marché secondaire a levé 95 milliards de dollars de capital en 2025, et ce capital cherche naturellement les actifs les plus faciles à sous-écrire — les positions dans des sociétés au business model établi, aux comparables clairs, à la trajectoire de sortie documentée. L'infrastructure IA ne coche pas ces cases aussi facilement : les cycles de dépenses capex des hyperscalers, les évolutions technologiques rapides (GPU, refroidissement liquide, architecture datacenter) et l'absence de comparables cotés matures rendent la valorisation plus complexe. Le capital généraliste évite mécaniquement cette complexité — ce qui maintient la décote large pour les acteurs disposant de l'expertise sectorielle pour la traverser.",
      p3: "Cette dynamique confirme une règle simple des marchés secondaires : la décote ne se resserre pas au rythme de la liquidité disponible, mais au rythme de la capacité collective du marché à comprendre et sous-écrire un actif. Sur l'infrastructure IA, cette capacité reste rare — ce qui maintient l'opportunité ouverte pour les investisseurs qui la possèdent.",
      h2_2: "La thèse C.CAPITAL sur ce segment",
      p4: "C.CAPITAL cible spécifiquement les secondaires d'infrastructure IA décotés de 25 à 40% par rapport aux derniers tours, en tirant parti du resserrement des LP sur les actifs illiquides. Cette thèse n'est pas isolée du reste du fonds : l'expertise sectorielle sur l'infrastructure IA développée via la stratégie TITAN DC AI — connaissance opérationnelle des datacenters, de la puissance électrique, du refroidissement, des cycles de la demande cloud — constitue précisément l'avantage informationnel qui permet à C.CAPITAL de sous-écrire correctement des positions que le marché généraliste ne sait pas valoriser.",
      p5: "C'est cette transversalité entre pôles — l'expertise TITAN DC AI qui nourrit la conviction C.CAPITAL sur les secondaires d'infrastructure IA — qui distingue une plateforme multi-stratégies intégrée d'un fonds mono-thèse classique.",
      h2_3: "Une fenêtre qui reste ouverte, pas éternelle",
      p6: "Le resserrement général du marché secondaire — 121 milliards de dollars de volume au premier semestre 2026, un nouveau record — signale une normalisation progressive de la liquidité privée. Cette normalisation finira, à terme, par comprimer aussi la décote sur l'infrastructure IA, à mesure que davantage d'acteurs développent l'expertise sectorielle nécessaire pour la sous-écrire. C'est cette fenêtre temporaire, avant la compression généralisée, que la discipline de conviction de C.CAPITAL est structurée pour capturer.",
      authorBioRest: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital. Elle pilote la stratégie C.CAPITAL (late-stage, secondaires décotés) ainsi que l'infrastructure IA-native du fonds. Serial entrepreneure, elle a fondé Humans4help avant de co-créer FINXIA Capital. Autrice de deux ouvrages : « RPA, AI, Chatbots » (2020) et « Power-Bound — La guerre du mégawatt » (2026).",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie C.CAPITAL',
      link1Text: 'Late-stage, secondaires décotés, conviction maximale',
      link2Title: 'Le Marché Secondaire PE en 2026',
      link2Text: 'Un nouveau record, et ce qu\'il change pour la sélectivité',
    },
    en: {
      title: "AI Infrastructure Secondaries: Why the 25-40% Discount Creates an Entry Window",
      description: "The broader secondaries market tightened to 5-10% discounts, but AI infrastructure stays at 25-40%. Why this gap persists. C.CAPITAL, FINXIA Capital.",
      metaDescription: "AI infrastructure secondaries: 25-40% discount vs last rounds, versus 5-10% on the broader secondaries market. LP tightening on illiquid assets, the C.CAPITAL thesis. FINXIA Capital analysis.",
      breadcrumbLabel: "AI Infrastructure Secondaries: The Discount",
      keywords: "AI infrastructure secondaries, AI private equity discount, illiquid infrastructure LP, C.CAPITAL thesis, AI secondary investment, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'C.CAPITAL',
      date: 'August 21, 2026',
      readTime: '5 min read',
      byline: 'By Lila Benhammou, Co-Founder & CIO — FINXIA Capital',
      architectureLabel: 'C.CAPITAL',
      lead: "The broader private equity secondaries market has tightened significantly: discounts on quality funds fell to 5-10% in 2025-2026, down from 15-25% during the 2022-2023 rate shock. AI infrastructure secondaries, by contrast, continue trading at a 25-40% discount to last funding rounds. That gap isn't a market anomaly — it's the signal of a structural dislocation that persists.",
      p1: "The explanation comes down to one word: illiquidity. Many LPs tightened their exposure to illiquid assets following the 2022-2023 rate shock, and that aversion hasn't disappeared with the broader secondaries market recovery. AI infrastructure — datacenters, compute capacity, cloud platforms — remains by nature a long-cycle, capital-intensive asset, difficult to value using classic private equity methodologies. It's precisely this valuation difficulty that keeps the discount wide, even as overall market liquidity improves.",
      h2_1: "Why the broader market's tightening doesn't close this gap",
      p2: "The secondaries market raised $95 billion in capital in 2025, and that capital naturally seeks the easiest assets to underwrite — positions in companies with established business models, clear comparables, documented exit paths. AI infrastructure doesn't tick those boxes as easily: hyperscaler capex spending cycles, rapid technological shifts (GPUs, liquid cooling, datacenter architecture) and the absence of mature listed comparables make valuation more complex. Generalist capital mechanically avoids this complexity — which keeps the discount wide for players with the sector expertise to navigate it.",
      p3: "This dynamic confirms a simple rule of secondaries markets: the discount doesn't tighten at the pace of available liquidity, but at the pace of the market's collective ability to understand and underwrite an asset. On AI infrastructure, that capability remains scarce — which keeps the opportunity open for investors who possess it.",
      h2_2: "The C.CAPITAL thesis on this segment",
      p4: "C.CAPITAL specifically targets AI infrastructure secondaries discounted 25-40% versus last rounds, leveraging LP tightening on illiquid assets. This thesis isn't isolated from the rest of the fund: the AI infrastructure sector expertise developed through the TITAN DC AI strategy — operational knowledge of datacenters, power capacity, cooling, cloud demand cycles — is precisely the informational advantage that lets C.CAPITAL correctly underwrite positions the generalist market can't properly value.",
      p5: "It's this cross-pillar synergy — TITAN DC AI expertise feeding C.CAPITAL conviction on AI infrastructure secondaries — that sets an integrated multi-strategy platform apart from a classic single-thesis fund.",
      h2_3: "A window that stays open, not forever",
      p6: "The broader secondaries market's tightening — $121 billion in volume in H1 2026, a new record — signals a gradual normalization of private liquidity. That normalization will eventually compress the AI infrastructure discount too, as more players develop the sector expertise needed to underwrite it. It's this temporary window, ahead of broader compression, that C.CAPITAL's conviction discipline is structured to capture.",
      authorBioRest: "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital. She leads the C.CAPITAL strategy (late-stage, discounted secondaries) as well as the fund's AI-native infrastructure. A serial entrepreneur, she founded Humans4help before co-creating FINXIA Capital. Author of two books: \"RPA, AI, Chatbots\" (2020) and \"Power-Bound — The Megawatt War\" (2026).",
      learnMore: 'Learn more',
      link1Title: 'Our C.CAPITAL Strategy',
      link1Text: 'Late-stage, discounted secondaries, maximum conviction',
      link2Title: 'The PE Secondaries Market in 2026',
      link2Text: 'A new record, and what it changes for selectivity',
    },
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDescription,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-08-21T09:00:00+02:00",
    "dateModified": "2026-08-21T09:00:00+02:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & CIO",
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
    "articleSection": "C.CAPITAL",
    "keywords": t.keywords
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'fr' ? "Accueil" : "Home",
        "item": language === 'fr' ? "https://finxiacapital.com/" : "https://finxiacapital.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": language === 'fr' ? "https://finxiacapital.com/blog/" : "https://finxiacapital.com/en/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t.breadcrumbLabel,
        "item": language === 'fr' ? "https://finxiacapital.com/blog/secondaires-infrastructure-ia-decote-fenetre-entree/" : "https://finxiacapital.com/en/blog/ai-infrastructure-secondaries-discount-entry-window/"
      }
    ]
  };

  return (
    <div data-testid="article-ai-secondaries-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/secondaires-infrastructure-ia-decote-fenetre-entree/" : "https://finxiacapital.com/en/blog/ai-infrastructure-secondaries-discount-entry-window/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/secondaires-infrastructure-ia-decote-fenetre-entree/"
        hreflangEn="https://finxiacapital.com/en/blog/ai-infrastructure-secondaries-discount-entry-window/"
        hreflangDefault="https://finxiacapital.com/blog/secondaires-infrastructure-ia-decote-fenetre-entree/"
      />

      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? '/blog' : '/en/blog'} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider">
                <Tag className="w-4 h-4" />
                {t.category}
              </span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-08-21">
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
              {t.byline}
            </p>
            <p className="text-slate-400 text-xs mt-1">
              {t.architectureLabel}
            </p>
          </div>
        </header>

        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                {t.lead}
              </p>

              <p>{t.p1}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_1}</h2>
              <p>{t.p2}</p>
              <p>{t.p3}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_2}</h2>
              <p>{t.p4}</p>
              <p>{t.p5}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p6}</p>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Lila Benhammou</strong> {t.authorBioRest}
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
              <h3 className="font-serif text-xl mb-6">{t.learnMore}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={language === 'fr' ? '/strategies' : '/en/strategies'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link1Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link1Text}</p>
                </Link>
                <Link href={language === 'fr' ? '/blog/marche-secondaire-private-equity-record-2026-c-capital' : '/en/blog/private-equity-secondaries-market-record-2026-c-capital'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link2Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link2Text}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
