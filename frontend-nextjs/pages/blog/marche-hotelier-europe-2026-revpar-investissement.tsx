import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function HotelMarket2026ArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Marché hôtelier européen 2026 : pourquoi Paris, Madrid et Barcelone concentrent 60% des grandes transactions",
      description: "Paris, Barcelone et Madrid concentrent 60% des grandes transactions hôtelières en Europe. La concentration géographique du capital et les opportunités 2026.",
      metaDescription: "Marché hôtelier institutionnel européen 2026 : 22,6 Md€ de transactions, RevPAR +1-3%, 60% des transactions >50M€ concentrées sur Paris, Barcelone et Madrid. Analyse FINXIA Capital.",
      breadcrumbLabel: "Marché hôtelier européen 2026 : concentration géographique",
      keywords: "marché hôtelier Europe 2026, investissement hôtelier institutionnel, RevPAR Europe, Paris Madrid Barcelone hôtellerie, transactions hôtelières",
      backToBlog: 'Retour au blog',
      category: 'Hospitality',
      date: '20 août 2026',
      readTime: '4 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Hôtellerie Premium',
      lead: "22,6 milliards d'euros de transactions hôtelières en Europe en 2025 — une hausse de 30% qui ramène le secteur à son meilleur niveau depuis le pic pré-COVID de 2019. Mais ce chiffre agrégé masque une réalité plus étroite : le capital institutionnel se concentre sur un nombre restreint de marchés, et cette concentration dessine la carte des opportunités pour 2026.",
      p1: "Le rebond du marché hôtelier européen se lit dans les chiffres agrégés, mais se comprend dans leur répartition géographique. Le capital institutionnel ne se déploie pas uniformément : il se concentre sur un nombre restreint de marchés jugés suffisamment liquides pour absorber des volumes croissants — et cette concentration dessine la carte des opportunités pour 2026.",
      h2_1: "Pourquoi Paris, Barcelone et Madrid dominent",
      p2: "Ces trois marchés concentrent 60% des transactions hôtelières institutionnelles supérieures à 50 millions d'euros en Europe. Le RevPAR européen premium a progressé de 8,2% par rapport à 2019, porté par le tourisme d'affaires international et la demande MICE — un segment structurellement concentré sur les métropoles disposant d'infrastructure de congrès, de connectivité aérienne et d'une base de demande corporate dense. Paris, Barcelone et Madrid cochent les trois critères simultanément ; peu d'autres marchés européens le font à la même échelle.",
      p3: "La profondeur de marché compte autant que la demande touristique. Un investisseur qui repositionne un actif sur 24 à 36 mois a besoin d'un bassin d'acheteurs Core suffisamment large pour absorber la sortie une fois la performance stabilisée. Les marchés tier-1 offrent cette liquidité de sortie ; les marchés secondaires, même avec une demande touristique solide, ne l'offrent pas systématiquement.",
      h2_2: "Ce que 2026 change pour les investisseurs value-add",
      p4: "Le RevPAR européen progresse de 1 à 3% en 2026 — une croissance modérée, tirée davantage par l'ouverture de nouvelles chambres que par la performance organique des actifs existants. Dans ce contexte, la création de valeur ne vient plus mécaniquement du cycle de marché : elle vient de la sélection d'actifs sous-optimisés et de la discipline d'exécution du repositionnement. Le segment luxe et upper-upscale devrait surperformer, porté par un pricing power structurel — mais cette surperformance se capture activement, elle ne s'obtient pas passivement.",
      p5: "Pour un investisseur discipliné, la conséquence est directe : la concentration géographique n'est pas une contrainte, c'est un filtre de qualité. Les marchés à forte profondeur institutionnelle sont aussi ceux où la thèse de repositionnement — acquisition décotée, partenariat opérateur, stabilisation, rotation — dispose de la liquidité de sortie nécessaire pour se réaliser dans les délais prévus.",
      h2_3: "La discipline FINXIA sur ces marchés",
      p6: "FINXIA Capital cible spécifiquement les actifs 4-5 étoiles sous-optimisés dans ces métropoles tier-1 — Paris, Barcelone, Madrid, Milan — là où la profondeur de marché permet d'exécuter la séquence complète : acquisition sur décote, repositionnement de marque avec un opérateur de référence, stabilisation du RevPAR, rotation sélective vers des investisseurs Core. La concentration géographique n'est pas un choix de facilité — c'est la condition de la discipline de sortie.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Hôtellerie Premium',
      link1Text: 'La méthode de repositionnement complète',
      link2Title: 'Approche Européenne',
      link2Text: 'Nos marchés cibles : France, Espagne, Italie',
    },
    en: {
      title: "European Hotel Market 2026: Why Paris, Madrid and Barcelona Concentrate 60% of Major Transactions",
      description: "Paris, Barcelona and Madrid concentrate 60% of large European hotel transactions. Capital's geographic concentration and the 2026 opportunity set.",
      metaDescription: "European institutional hotel market 2026: €22.6bn in transactions, RevPAR +1-3%, 60% of transactions above €50M concentrated in Paris, Barcelona and Madrid. FINXIA Capital analysis.",
      breadcrumbLabel: "European Hotel Market 2026: Geographic Concentration",
      keywords: "European hotel market 2026, institutional hotel investment, European RevPAR, Paris Madrid Barcelona hospitality, hotel transactions",
      backToBlog: 'Back to blog',
      category: 'Hospitality',
      date: 'August 20, 2026',
      readTime: '4 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Premium Hospitality',
      lead: "€22.6 billion in European hotel transactions in 2025 — a 30% increase that brings the sector back to its best level since the pre-COVID peak of 2019. But that aggregate figure masks a narrower reality: institutional capital is concentrating on a small number of markets, and that concentration maps the opportunity set for 2026.",
      p1: "The European hotel market's rebound reads clearly in the aggregate figures, but it is only understood through their geographic distribution. Institutional capital is not deploying uniformly: it concentrates on a limited number of markets deemed liquid enough to absorb growing transaction volumes — and that concentration maps the opportunity set for 2026.",
      h2_1: "Why Paris, Barcelona and Madrid dominate",
      p2: "These three markets concentrate 60% of institutional hotel transactions above €50 million in Europe. European premium RevPAR has grown 8.2% versus 2019, driven by international business travel and MICE demand — a segment structurally concentrated in metros with convention infrastructure, air connectivity and a dense corporate demand base. Paris, Barcelona and Madrid tick all three boxes simultaneously; few other European markets do so at the same scale.",
      p3: "Market depth matters as much as tourism demand. An investor repositioning an asset over 24 to 36 months needs a Core buyer pool wide enough to absorb the exit once performance is stabilized. Tier-1 markets offer that exit liquidity; secondary markets, even with solid tourism demand, don't systematically offer it.",
      h2_2: "What 2026 changes for value-add investors",
      p4: "European RevPAR is growing 1 to 3% in 2026 — moderate growth, driven more by new room openings than organic performance of existing assets. In this context, value creation no longer comes mechanically from the market cycle: it comes from selecting underperforming assets and disciplined repositioning execution. The luxury and upper-upscale segment is expected to outperform, driven by structural pricing power — but that outperformance is captured actively, not obtained passively.",
      p5: "For a disciplined investor, the consequence is direct: geographic concentration isn't a constraint, it's a quality filter. Markets with deep institutional depth are also those where the repositioning thesis — discounted acquisition, operator partnership, stabilization, rotation — has the exit liquidity needed to play out within the expected timeframe.",
      h2_3: "FINXIA's discipline in these markets",
      p6: "FINXIA Capital specifically targets underperforming 4-5 star assets in these tier-1 metros — Paris, Barcelona, Madrid, Milan — where market depth enables execution of the full sequence: discounted acquisition, brand repositioning with a reference operator, RevPAR stabilization, selective rotation to Core investors. Geographic concentration isn't a choice of convenience — it's the condition for exit discipline.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Premium Hospitality Strategy',
      link1Text: 'The full repositioning method',
      link2Title: 'European Approach',
      link2Text: 'Our target markets: France, Spain, Italy',
    },
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDescription,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-08-20T09:00:00+02:00",
    "dateModified": "2026-08-20T09:00:00+02:00",
    "author": {
      "@type": "Person",
      "name": "Jean-Pierre Véron",
      "jobTitle": "Chairman & Founder",
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
    "articleSection": "Hospitality",
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/marche-hotelier-europe-2026-revpar-investissement/" : "https://finxiacapital.com/en/blog/european-hotel-market-2026-revpar-investment/"
      }
    ]
  };

  return (
    <div data-testid="article-hotel-market-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/marche-hotelier-europe-2026-revpar-investissement/" : "https://finxiacapital.com/en/blog/european-hotel-market-2026-revpar-investment/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/marche-hotelier-europe-2026-revpar-investissement/"
        hreflangEn="https://finxiacapital.com/en/blog/european-hotel-market-2026-revpar-investment/"
        hreflangDefault="https://finxiacapital.com/blog/marche-hotelier-europe-2026-revpar-investissement/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-08-20">
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
                <strong className="text-slate-900">Jean-Pierre Véron</strong> {t.authorBioRest}
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
                <Link href={language === 'fr' ? '/european-approach' : '/en/european-approach'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
