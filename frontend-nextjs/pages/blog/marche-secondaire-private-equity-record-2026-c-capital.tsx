import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function SecondariesMarketArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Le marché secondaire du private equity franchit un nouveau record en 2026",
      description: "226 Md$ de volume secondaire PE en 2025, 121 Md$ au S1 2026 — nouveau record. Ce que cela change pour un investisseur sélectif. C.CAPITAL, FINXIA Capital.",
      metaDescription: "Secondaires PE : 226 Md$ de volume en 2025 (record), 121 Md$ au S1 2026 (nouveau record). LP-led +34%, GP-led +51%. Décotes resserrées à 5-10% sur les fonds de qualité. Analyse C.CAPITAL, FINXIA Capital.",
      breadcrumbLabel: "Marché secondaire PE : nouveau record",
      keywords: "marché secondaire private equity, secondaires LP-led GP-led, décote NAV private equity, liquidité private equity 2026, C.CAPITAL, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'C.CAPITAL',
      date: '21 août 2026',
      readTime: '5 min de lecture',
      byline: 'Par Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital',
      architectureLabel: 'C.CAPITAL',
      lead: "Le marché secondaire du private equity a clôturé 2025 sur un record de 226 milliards de dollars de volume. Le premier semestre 2026 a immédiatement battu ce record avec 121 milliards de dollars — la meilleure performance semestrielle jamais enregistrée. À ce rythme, 2026 devrait dépasser 250 milliards de dollars, soit près du double du volume de 2022.",
      p1: "Cette croissance ne vient pas d'un seul segment. Le volume LP-led a progressé de 34% sur un an pour atteindre 120 milliards de dollars en 2025, tandis que le volume GP-led a bondi de 51% pour atteindre 106 milliards. Les fonds secondaires ont levé 95 milliards de dollars de capital en 2025, déployés contre un flux de deals que Preqin estime désormais à 250-260 milliards de dollars pour l'année pleine 2026.",
      h2_1: "Pourquoi les décotes se resserrent — et pourquoi cela ne concerne pas tous les segments",
      p2: "L'environnement de décote s'est nettement amélioré pour les vendeurs. Les positions de private equity buyout se sont négociées à 94% de la valeur nette d'actif au premier semestre 2025, contre moins de 90% en 2022. Sur les fonds de qualité, les décotes se sont resserrées à 5-10%, loin des 15-25% observés durant le choc de taux de 2022-2023.",
      p3: "Ce resserrement général crée un paradoxe pour un investisseur sélectif : plus le marché secondaire mûrit et se resserre, plus l'avantage informationnel devient rare — et plus il devient précieux là où il subsiste. C'est précisément dans les poches où la décote reste large, malgré la compression générale du marché, que se trouve l'opportunité pour une stratégie à conviction élevée et volume limité.",
      h2_2: "La discipline C.CAPITAL dans un marché en pleine liquidité",
      p4: "Un marché secondaire abondant en capital n'est pas nécessairement un marché favorable à tous les acheteurs. Quand 95 milliards de dollars de capital secondaire cherchent à se déployer, la compétition sur les actifs les plus liquides et les mieux compris s'intensifie mécaniquement — ce qui comprime davantage les décotes sur ces segments et déplace l'opportunité réelle vers des poches moins disputées, nécessitant une expertise sectorielle plus fine pour être correctement évaluées.",
      p5: "C.CAPITAL, le pôle late-stage et secondaires décotés de FINXIA Capital porté par Lila Benhammou, est structuré pour cette configuration : une approche ultra-sélective, réservée aux opportunités où l'expertise sectorielle du fonds confère un avantage décisif, avec un taux de conversion volontairement inférieur à 5% et un ticket moyen de 2 à 10 millions d'euros.",
      h2_3: "Ce que le record 2026 signale pour la suite",
      p6: "Un marché secondaire qui double de volume en quatre ans n'élimine pas les inefficiences de pricing — il les redistribue. Les segments les plus liquides se resserrent, mais les poches nécessitant une expertise sectorielle spécifique, comme les secondaires d'infrastructure IA, restent structurellement moins arbitrées. C'est cette dispersion, plus que le volume agrégé, qui définit l'opportunité pour une stratégie à conviction.",
      authorBioRest: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital. Elle pilote la stratégie C.CAPITAL (late-stage, secondaires décotés) ainsi que l'infrastructure IA-native du fonds. Serial entrepreneure, elle a fondé Humans4help avant de co-créer FINXIA Capital. Autrice de deux ouvrages : « RPA, AI, Chatbots » (2020) et « Power-Bound — La guerre du mégawatt » (2026).",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie C.CAPITAL',
      link1Text: 'Late-stage, secondaires décotés, conviction maximale',
      link2Title: 'Secondaires Infrastructure IA',
      link2Text: 'Pourquoi la décote de 25-40% crée une fenêtre d\'entrée',
    },
    en: {
      title: "The Private Equity Secondaries Market Hits a New Record in 2026",
      description: "$226bn in PE secondaries volume in 2025, $121bn in H1 2026 — a new record. What this means for a selective investor. C.CAPITAL, FINXIA Capital.",
      metaDescription: "PE secondaries: $226bn volume in 2025 (record), $121bn in H1 2026 (new record). LP-led +34%, GP-led +51%. Discounts tightened to 5-10% on quality funds. C.CAPITAL analysis, FINXIA Capital.",
      breadcrumbLabel: "PE Secondaries Market: New Record",
      keywords: "private equity secondaries market, LP-led GP-led secondaries, PE NAV discount, private equity liquidity 2026, C.CAPITAL, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'C.CAPITAL',
      date: 'August 21, 2026',
      readTime: '5 min read',
      byline: 'By Lila Benhammou, Co-Founder & CIO — FINXIA Capital',
      architectureLabel: 'C.CAPITAL',
      lead: "The private equity secondaries market closed 2025 at a record $226 billion in volume. H1 2026 immediately beat that record with $121 billion — the strongest first half ever recorded. At this pace, 2026 is expected to exceed $250 billion, roughly double 2022's volume.",
      p1: "This growth isn't coming from a single segment. LP-led volume rose 34% year-on-year to $120 billion in 2025, while GP-led volume jumped 51% to $106 billion. Secondary funds raised $95 billion in capital in 2025, now being deployed against a deal flow Preqin estimates at $250-260 billion for full-year 2026.",
      h2_1: "Why discounts are tightening — and why it doesn't apply to every segment",
      p2: "The discount environment has improved significantly for sellers. Buyout private equity stakes traded at 94% of net asset value in H1 2025, compared with less than 90% in 2022. On quality funds, discounts have tightened to 5-10%, far from the 15-25% seen during the 2022-2023 rate shock.",
      p3: "This general tightening creates a paradox for a selective investor: the more the secondaries market matures and compresses, the rarer informational advantage becomes — and the more valuable it is where it still exists. It's precisely in the pockets where the discount remains wide, despite overall market compression, that the opportunity lies for a high-conviction, limited-volume strategy.",
      h2_2: "C.CAPITAL discipline in an abundantly liquid market",
      p4: "A secondaries market flush with capital isn't necessarily a market favorable to every buyer. When $95 billion in secondary capital seeks deployment, competition for the most liquid, best-understood assets mechanically intensifies — further compressing discounts on those segments and shifting the real opportunity toward less contested pockets that require finer sector expertise to be properly valued.",
      p5: "C.CAPITAL, FINXIA Capital's late-stage and discounted secondaries division led by Lila Benhammou, is structured for exactly this configuration: an ultra-selective approach, reserved for opportunities where the fund's sector expertise confers a decisive advantage, with a deliberately sub-5% conversion rate and an average ticket of €2-10 million.",
      h2_3: "What the 2026 record signals going forward",
      p6: "A secondaries market that doubles in volume over four years doesn't eliminate pricing inefficiencies — it redistributes them. The most liquid segments compress, but pockets requiring specific sector expertise, like AI infrastructure secondaries, remain structurally less arbitraged. It's this dispersion, more than aggregate volume, that defines the opportunity for a conviction-based strategy.",
      authorBioRest: "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital. She leads the C.CAPITAL strategy (late-stage, discounted secondaries) as well as the fund's AI-native infrastructure. A serial entrepreneur, she founded Humans4help before co-creating FINXIA Capital. Author of two books: \"RPA, AI, Chatbots\" (2020) and \"Power-Bound — The Megawatt War\" (2026).",
      learnMore: 'Learn more',
      link1Title: 'Our C.CAPITAL Strategy',
      link1Text: 'Late-stage, discounted secondaries, maximum conviction',
      link2Title: 'AI Infrastructure Secondaries',
      link2Text: 'Why the 25-40% discount creates an entry window',
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/marche-secondaire-private-equity-record-2026-c-capital/" : "https://finxiacapital.com/en/blog/private-equity-secondaries-market-record-2026-c-capital/"
      }
    ]
  };

  return (
    <div data-testid="article-secondaries-market-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/marche-secondaire-private-equity-record-2026-c-capital/" : "https://finxiacapital.com/en/blog/private-equity-secondaries-market-record-2026-c-capital/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/marche-secondaire-private-equity-record-2026-c-capital/"
        hreflangEn="https://finxiacapital.com/en/blog/private-equity-secondaries-market-record-2026-c-capital/"
        hreflangDefault="https://finxiacapital.com/blog/marche-secondaire-private-equity-record-2026-c-capital/"
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
                <Link href={language === 'fr' ? '/blog/secondaires-infrastructure-ia-decote-fenetre-entree' : '/en/blog/ai-infrastructure-secondaries-discount-entry-window'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
