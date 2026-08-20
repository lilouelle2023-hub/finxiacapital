import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function PreIPOMarketsArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Marchés de liquidité pré-IPO : comment C.CAPITAL accède aux leaders tech américains avant l'introduction en bourse",
      description: "L'IA capte 67% du financement des marchés privés en 2025, contre 9% en 2022. Comment Forge Global ouvre un accès secondaire aux leaders IA et cloud.",
      metaDescription: "Marchés pré-IPO : l'IA capte 67% du financement privé en 2025 (contre 9% en 2022), financement IA de 8,2 Md$ à 94,6 Md$. Forge Global suit ~200 sociétés pré-IPO. Accès secondaire C.CAPITAL. FINXIA Capital.",
      breadcrumbLabel: "Marchés pré-IPO : l'accès secondaire",
      keywords: "marché pré-IPO, Forge Global, secondaire late-stage tech, financement IA private markets, liquidité pré-IPO, C.CAPITAL, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'C.CAPITAL',
      date: '21 août 2026',
      readTime: '5 min de lecture',
      byline: 'Par Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital',
      architectureLabel: 'C.CAPITAL',
      lead: "Les sociétés d'intelligence artificielle ont capté 67% de l'ensemble du financement des marchés privés en 2025, contre seulement 9% en 2022 — alors qu'elles ne représentent que 20% des sociétés qui lèvent des capitaux. Le financement total de l'IA est passé de 8,2 milliards de dollars en 2022 à 94,6 milliards de dollars en 2025. Cette concentration de capital crée une nouvelle catégorie d'opportunité : l'accès secondaire aux positions late-stage avant l'introduction en bourse.",
      p1: "Les plateformes de liquidité pré-IPO comme Forge Global se sont structurées précisément pour répondre à cette demande. Forge suit un indice de prix indicatif quotidien sur environ 200 sociétés pré-IPO, et facilite la vente de titres détenus par des salariés et des investisseurs historiques. C'est un mécanisme de marché qui n'existait pas à cette échelle il y a dix ans — et qui transforme la manière dont un investisseur institutionnel peut accéder à l'IA late-stage sans passer par un tour de financement primaire.",
      h2_1: "Ce que le cycle IPO 2025-2026 valide sur cette thèse",
      p2: "Les sorties récentes confirment la solidité du pipeline. CoreWeave, fournisseur cloud spécialisé dans la location de clusters GPU Nvidia, est entrée en bourse en mars 2025. Cerebras Systems a commencé sa cotation au Nasdaq en mai 2026, levant environ 3,5 milliards de dollars pour une valorisation proche de 48,8 milliards. SpaceX a réalisé l'une des IPO les plus attendues de l'histoire en juin 2026, levant 75 milliards de dollars pour financer ses ambitions IA et datacenters spatiaux.",
      p3: "Chacune de ces sorties valide la même thèse : les positions accumulées en pré-IPO sur ces sociétés, via les marchés secondaires, capturent une part significative de la création de valeur qui se matérialise ensuite à la cotation. C'est cette fenêtre — entre le dernier tour privé et l'introduction en bourse — que le marché secondaire pré-IPO permet désormais de capturer avec une liquidité qui n'existait pas auparavant.",
      h2_2: "L'approche C.CAPITAL sur les positions late-stage américaines",
      p4: "C.CAPITAL accède aux positions secondaires late-stage sur les leaders technologiques américains de l'IA et de l'infrastructure cloud via ces marchés de liquidité pré-IPO. Cette approche complète la thèse sur les secondaires d'infrastructure IA décotés : là où l'une cible la décote structurelle sur des actifs d'infrastructure difficiles à valoriser, l'autre cible l'accès à des positions de croissance déjà bien comprises par le marché, mais historiquement fermées aux investisseurs hors du capital-risque primaire.",
      p5: "La discipline reste la même sur les deux volets : conviction maximale, taux de conversion volontairement inférieur à 5%, ticket moyen de 2 à 10 millions d'euros. L'accès au marché ne remplace pas la sélectivité — il l'élargit.",
      h2_3: "Une classe d'actifs encore jeune, déjà validée par le marché",
      p6: "Le succès de sorties comme SpaceX, Cerebras et CoreWeave ne garantit pas la performance des prochaines — mais il confirme que le mécanisme de marché fonctionne : la liquidité pré-IPO capture une part réelle de la création de valeur des leaders technologiques américains avant leur cotation. C'est ce mécanisme, combiné à la discipline sectorielle de C.CAPITAL, qui structure l'accès de FINXIA Capital à cette classe d'actifs.",
      authorBioRest: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital. Elle pilote la stratégie C.CAPITAL (late-stage, secondaires décotés) ainsi que l'infrastructure IA-native du fonds. Serial entrepreneure, elle a fondé Humans4help avant de co-créer FINXIA Capital. Autrice de deux ouvrages : « RPA, AI, Chatbots » (2020) et « Power-Bound — La guerre du mégawatt » (2026).",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie C.CAPITAL',
      link1Text: 'Late-stage, secondaires décotés, conviction maximale',
      link2Title: 'Secondaires Infrastructure IA',
      link2Text: 'Pourquoi la décote de 25-40% crée une fenêtre d\'entrée',
    },
    en: {
      title: "Pre-IPO Liquidity Markets: How C.CAPITAL Accesses US Tech Leaders Before They Go Public",
      description: "AI captures 67% of private markets funding in 2025, up from 9% in 2022. How Forge Global opens secondary access to AI and cloud leaders.",
      metaDescription: "Pre-IPO markets: AI captures 67% of private funding in 2025 (up from 9% in 2022), AI funding from $8.2bn to $94.6bn. Forge Global tracks ~200 pre-IPO companies. C.CAPITAL secondary access. FINXIA Capital.",
      breadcrumbLabel: "Pre-IPO Markets: Secondary Access",
      keywords: "pre-IPO market, Forge Global, late-stage tech secondary, AI private markets funding, pre-IPO liquidity, C.CAPITAL, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'C.CAPITAL',
      date: 'August 21, 2026',
      readTime: '5 min read',
      byline: 'By Lila Benhammou, Co-Founder & CIO — FINXIA Capital',
      architectureLabel: 'C.CAPITAL',
      lead: "AI companies captured 67% of all private markets funding in 2025, up from just 9% in 2022 — despite representing only 20% of companies raising capital. Total AI funding rose from $8.2 billion in 2022 to $94.6 billion in 2025. This capital concentration creates a new category of opportunity: secondary access to late-stage positions ahead of an IPO.",
      p1: "Pre-IPO liquidity platforms like Forge Global have structured themselves precisely to meet this demand. Forge tracks a daily indicative price index across roughly 200 pre-IPO companies, and facilitates the sale of shares held by employees and early investors. It's a market mechanism that didn't exist at this scale a decade ago — and it's transforming how an institutional investor can access late-stage AI without going through a primary funding round.",
      h2_1: "What the 2025-2026 IPO cycle validates about this thesis",
      p2: "Recent exits confirm the strength of the pipeline. CoreWeave, a cloud provider specializing in renting Nvidia GPU clusters, went public in March 2025. Cerebras Systems began trading on Nasdaq in May 2026, raising approximately $3.5 billion at a valuation near $48.8 billion. SpaceX completed one of the most anticipated IPOs in history in June 2026, raising $75 billion to fund its AI and space datacenter ambitions.",
      p3: "Each of these exits validates the same thesis: positions accumulated pre-IPO in these companies, via secondary markets, capture a meaningful share of the value creation that later materializes at listing. It's this window — between the last private round and the IPO — that the pre-IPO secondary market now allows investors to capture with liquidity that didn't previously exist.",
      h2_2: "The C.CAPITAL approach to US late-stage positions",
      p4: "C.CAPITAL accesses late-stage secondary positions in leading US AI and cloud infrastructure companies via these pre-IPO liquidity markets. This approach complements the discounted AI infrastructure secondaries thesis: where one targets the structural discount on infrastructure assets that are hard to value, the other targets access to growth positions already well understood by the market, but historically closed to investors outside primary venture capital.",
      p5: "The discipline stays the same on both fronts: maximum conviction, a deliberately sub-5% conversion rate, an average ticket of €2-10 million. Market access doesn't replace selectivity — it broadens it.",
      h2_3: "A still-young asset class, already validated by the market",
      p6: "The success of exits like SpaceX, Cerebras and CoreWeave doesn't guarantee the performance of the next ones — but it confirms the market mechanism works: pre-IPO liquidity captures a real share of US tech leaders' value creation ahead of listing. It's this mechanism, combined with C.CAPITAL's sector discipline, that structures FINXIA Capital's access to this asset class.",
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/marches-liquidite-pre-ipo-forge-global-leaders-tech-americaine/" : "https://finxiacapital.com/en/blog/pre-ipo-liquidity-markets-forge-global-us-tech-leaders/"
      }
    ]
  };

  return (
    <div data-testid="article-preipo-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/marches-liquidite-pre-ipo-forge-global-leaders-tech-americaine/" : "https://finxiacapital.com/en/blog/pre-ipo-liquidity-markets-forge-global-us-tech-leaders/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/marches-liquidite-pre-ipo-forge-global-leaders-tech-americaine/"
        hreflangEn="https://finxiacapital.com/en/blog/pre-ipo-liquidity-markets-forge-global-us-tech-leaders/"
        hreflangDefault="https://finxiacapital.com/blog/marches-liquidite-pre-ipo-forge-global-leaders-tech-americaine/"
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
