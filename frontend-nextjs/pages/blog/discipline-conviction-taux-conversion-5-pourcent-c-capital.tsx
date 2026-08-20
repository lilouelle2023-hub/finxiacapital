import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ConvictionDisciplineArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Pourquoi un taux de conversion inférieur à 5% est un avantage, pas une contrainte",
      description: "Dans un marché secondaire qui a levé 95 Md$ en 2025, la sélectivité devient plus précieuse que l'accès au deal flow. La philosophie C.CAPITAL.",
      metaDescription: "C.CAPITAL applique un taux de conversion volontairement inférieur à 5%. Pourquoi la discipline de conviction surperforme la diversification dans un marché secondaire abondant en capital. FINXIA Capital.",
      breadcrumbLabel: "Discipline de conviction : <5% de conversion",
      keywords: "discipline d'investissement conviction, taux de conversion private equity, sélectivité secondaires, philosophie C.CAPITAL, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'C.CAPITAL',
      date: '21 août 2026',
      readTime: '4 min de lecture',
      byline: 'Par Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital',
      architectureLabel: 'C.CAPITAL',
      lead: "C.CAPITAL examine un grand nombre d'opportunités de secondaires et de positions late-stage — et en convertit volontairement moins de 5% en investissements réels. Dans un marché où 95 milliards de dollars de capital secondaire cherchent à se déployer, ce taux n'est pas un signe de rareté d'opportunités. C'est une discipline délibérée.",
      p1: "La logique est simple à énoncer, difficile à tenir : plus le deal flow disponible augmente, plus la tentation de diversifier pour déployer le capital plus vite augmente aussi. C'est précisément cette tentation que la discipline de conviction est structurée pour résister. Un taux de conversion bas n'est pas un objectif en soi — c'est la conséquence mécanique d'un principe simple : n'investir que là où l'expertise sectorielle du fonds confère un avantage informationnel décisif, jamais par défaut de mieux.",
      h2_1: "Pourquoi l'abondance de capital rend la sélectivité plus urgente, pas moins",
      p2: "Le marché secondaire a battu un nouveau record au premier semestre 2026 avec 121 milliards de dollars de volume. Quand le capital disponible croît plus vite que le nombre d'opportunités réellement différenciées, la compétition sur les actifs les plus visibles s'intensifie mécaniquement — ce qui comprime leur rendement espéré. Dans ce contexte, la discipline de sélectivité n'est pas un luxe de gérant prudent : c'est la condition pour continuer à capturer un rendement ajusté du risque supérieur à la moyenne du marché.",
      p3: "Un ticket moyen de 2 à 10 millions d'euros, conjugué à un taux de conversion sous 5%, signifie que chaque position fait l'objet d'une due diligence sectorielle approfondie plutôt que d'une évaluation standardisée appliquée à un grand volume de deals. C'est un choix structurel : moins de positions, mais chacune sous-écrite avec l'avantage informationnel que l'expertise TITAN DC AI et le réseau institutionnel de FINXIA confèrent sur des segments spécifiques.",
      h2_2: "Ce que cette discipline signifie concrètement",
      p4: "Sur les secondaires d'infrastructure IA, la discipline se traduit par le refus de sous-écrire une position dont la valorisation ne peut pas être documentée avec la même rigueur qu'un actif TITAN DC AI en propre. Sur les positions late-stage pré-IPO, elle se traduit par le refus de suivre une valorisation de marché sans conviction indépendante sur la trajectoire de l'entreprise. Dans les deux cas, le taux de conversion bas est la trace visible d'un processus de décision qui refuse le compromis sur la conviction.",
      p5: "Cette discipline rejoint, sous une forme différente, celle appliquée sur les trois autres pôles de FINXIA : sélectivité géographique sur l'hôtellerie premium, discipline de structuration grand format sur le résidentiel, discipline de prix d'entrée sur TITAN DC AI. Le principe commun est le même — refuser de déployer du capital sans l'avantage informationnel qui justifie la conviction.",
      h2_3: "La discipline comme avantage compétitif durable",
      p6: "Dans un marché secondaire qui double de volume tous les quatre ans, la discipline de sélectivité devient elle-même un avantage compétitif — pas parce qu'elle limite l'exposition au risque, mais parce qu'elle garantit que chaque position déployée bénéficie d'un avantage informationnel réel. C'est cette discipline, plus que la taille du deal flow accessible, qui détermine la performance de long terme d'une stratégie secondaire à conviction.",
      authorBioRest: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital. Elle pilote la stratégie C.CAPITAL (late-stage, secondaires décotés) ainsi que l'infrastructure IA-native du fonds. Serial entrepreneure, elle a fondé Humans4help avant de co-créer FINXIA Capital. Autrice de deux ouvrages : « RPA, AI, Chatbots » (2020) et « Power-Bound — La guerre du mégawatt » (2026).",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie C.CAPITAL',
      link1Text: 'Late-stage, secondaires décotés, conviction maximale',
      link2Title: 'Marchés Pré-IPO et Forge Global',
      link2Text: 'Comment C.CAPITAL accède aux leaders tech américains',
    },
    en: {
      title: "Why a Sub-5% Conversion Rate Is an Advantage, Not a Constraint",
      description: "In a secondaries market that raised $95bn in 2025, selectivity becomes more valuable than access to deal flow. The C.CAPITAL philosophy.",
      metaDescription: "C.CAPITAL applies a deliberately sub-5% conversion rate. Why conviction discipline outperforms diversification in a capital-abundant secondaries market. FINXIA Capital.",
      breadcrumbLabel: "Conviction Discipline: Sub-5% Conversion",
      keywords: "investment conviction discipline, private equity conversion rate, secondaries selectivity, C.CAPITAL philosophy, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'C.CAPITAL',
      date: 'August 21, 2026',
      readTime: '4 min read',
      byline: 'By Lila Benhammou, Co-Founder & CIO — FINXIA Capital',
      architectureLabel: 'C.CAPITAL',
      lead: "C.CAPITAL reviews a large number of secondaries and late-stage opportunities — and deliberately converts fewer than 5% into actual investments. In a market where $95 billion in secondary capital is seeking deployment, that rate isn't a sign of scarce opportunities. It's a deliberate discipline.",
      p1: "The logic is simple to state, hard to maintain: the more available deal flow grows, the greater the temptation to diversify in order to deploy capital faster. It's exactly that temptation the conviction discipline is structured to resist. A low conversion rate isn't a goal in itself — it's the mechanical consequence of a simple principle: invest only where the fund's sector expertise confers a decisive informational advantage, never by default.",
      h2_1: "Why capital abundance makes selectivity more urgent, not less",
      p2: "The secondaries market hit a new record in H1 2026 with $121 billion in volume. When available capital grows faster than the number of genuinely differentiated opportunities, competition for the most visible assets mechanically intensifies — compressing their expected return. In this context, selectivity discipline isn't a cautious manager's luxury: it's the condition for continuing to capture above-average risk-adjusted returns.",
      p3: "An average ticket of €2-10 million, combined with a sub-5% conversion rate, means each position undergoes deep sector due diligence rather than a standardized assessment applied across a large volume of deals. It's a structural choice: fewer positions, but each underwritten with the informational advantage that FINXIA's TITAN DC AI expertise and institutional network confer on specific segments.",
      h2_2: "What this discipline means in practice",
      p4: "On AI infrastructure secondaries, discipline means refusing to underwrite a position whose valuation can't be documented with the same rigor as a proprietary TITAN DC AI asset. On late-stage pre-IPO positions, it means refusing to follow a market valuation without independent conviction on the company's trajectory. In both cases, the low conversion rate is the visible trace of a decision process that refuses to compromise on conviction.",
      p5: "This discipline connects, in a different form, to the one applied across FINXIA's other three pillars: geographic selectivity on premium hospitality, large-format structuring discipline on residential, entry pricing discipline on TITAN DC AI. The common principle is the same — refuse to deploy capital without the informational advantage that justifies conviction.",
      h2_3: "Discipline as a durable competitive advantage",
      p6: "In a secondaries market that doubles in volume every four years, selectivity discipline itself becomes a competitive advantage — not because it limits risk exposure, but because it ensures every deployed position benefits from a real informational advantage. It's this discipline, more than the size of accessible deal flow, that determines the long-term performance of a conviction-based secondaries strategy.",
      authorBioRest: "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital. She leads the C.CAPITAL strategy (late-stage, discounted secondaries) as well as the fund's AI-native infrastructure. A serial entrepreneur, she founded Humans4help before co-creating FINXIA Capital. Author of two books: \"RPA, AI, Chatbots\" (2020) and \"Power-Bound — The Megawatt War\" (2026).",
      learnMore: 'Learn more',
      link1Title: 'Our C.CAPITAL Strategy',
      link1Text: 'Late-stage, discounted secondaries, maximum conviction',
      link2Title: 'Pre-IPO Markets and Forge Global',
      link2Text: 'How C.CAPITAL accesses US tech leaders',
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/discipline-conviction-taux-conversion-5-pourcent-c-capital/" : "https://finxiacapital.com/en/blog/conviction-discipline-sub-5-percent-conversion-rate-c-capital/"
      }
    ]
  };

  return (
    <div data-testid="article-conviction-discipline-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/discipline-conviction-taux-conversion-5-pourcent-c-capital/" : "https://finxiacapital.com/en/blog/conviction-discipline-sub-5-percent-conversion-rate-c-capital/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/discipline-conviction-taux-conversion-5-pourcent-c-capital/"
        hreflangEn="https://finxiacapital.com/en/blog/conviction-discipline-sub-5-percent-conversion-rate-c-capital/"
        hreflangDefault="https://finxiacapital.com/blog/discipline-conviction-taux-conversion-5-pourcent-c-capital/"
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
                <Link href={language === 'fr' ? '/blog/marches-liquidite-pre-ipo-forge-global-leaders-tech-americaine' : '/en/blog/pre-ipo-liquidity-markets-forge-global-us-tech-leaders'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
