import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function HousingDeficitArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "4,5 millions de logements manquants : la thèse résidentielle de FINXIA Capital en Europe",
      description: "4,5 millions de logements manquent en Europe. Investissement résidentiel à 62,2 Md€ en 2025 (+22%). La thèse Résidentiel & Flex Living de FINXIA Capital.",
      metaDescription: "Déficit de 4,5 millions de logements en Europe (Commission européenne). Investissement résidentiel institutionnel : 62,2 Md€ en 2025, plus de 70 Md€ attendus en 2026. La thèse Résidentiel & Flex Living de FINXIA Capital.",
      breadcrumbLabel: "Déficit de logement en Europe : la thèse résidentielle FINXIA",
      keywords: "déficit logement Europe, résidentiel flex living, build-to-rent, PBSA coliving investissement, immobilier résidentiel institutionnel Europe, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'Residential',
      date: '20 août 2026',
      readTime: '5 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Résidentiel & Flex Living',
      lead: "L'Europe manque 4,5 millions de logements selon la Commission européenne. Ce déficit structurel n'est pas conjoncturel — il s'accumule depuis une décennie de sous-construction face à une croissance démographique urbaine continue. L'investissement résidentiel institutionnel répond à cette rareté : 62,2 milliards d'euros déployés en 2025, en hausse de 22%, avec un dépassement des 70 milliards attendu en 2026.",
      p1: "Le déficit de logements ne se résorbe pas au rythme de la construction neuve. Dans les métropoles tier-1 européennes, le taux d'occupation des résidences services dépasse 92% — un niveau qui signale une demande structurellement supérieure à l'offre disponible, pas un pic conjoncturel. Les loyers du secteur build-to-rent progressent de 4,8% par an, une trajectoire que seule une rareté persistante peut soutenir sur la durée.",
      h2_1: "Pourquoi le capital institutionnel accélère sur le résidentiel flexible",
      p2: "L'investissement résidentiel européen a progressé de 34% en 2024 et de 22% en 2025 — une accélération continue, pas un rebond ponctuel. Une croissance stable de 10 à 15% est anticipée pour 2026. Ce mouvement de capital reflète un changement structurel dans la manière dont les investisseurs institutionnels perçoivent le résidentiel : non plus comme un actif défensif à faible rendement, mais comme une classe d'actifs opérée, avec un potentiel de création de valeur comparable à l'hôtellerie ou à la logistique.",
      p3: "Le segment PBSA (résidences étudiantes) illustre cette dynamique : les investissements ont bondi de 52% en 2025, et pour la première fois, l'activité en Europe continentale a dépassé celle du Royaume-Uni — signe que la thèse résidentielle institutionnelle dépasse désormais son marché historique.",
      h2_2: "Le coliving, segment le plus dynamique du résidentiel opéré",
      p4: "Le coliving émerge comme le sous-segment le plus dynamique de cette classe d'actifs : marché mondial valorisé à 13 milliards de dollars en 2026, sur une trajectoire de croissance qui dépasse largement celle du résidentiel traditionnel. L'adoption institutionnelle suit la même dynamique — plus d'un tiers des grands investisseurs européens y sont déjà exposés, et la majorité prévoit d'y entrer sous trois ans.",
      p5: "Cette dynamique n'est pas isolée : elle s'inscrit dans une classe d'actifs plus large — coliving, PBSA, build-to-rent — où la performance dépend d'une gestion active plutôt que d'un loyer passif. Nous détaillons le modèle opérationnel du coliving, et ce qu'il change pour la création de valeur résidentielle, dans une analyse dédiée.",
      h2_3: "La thèse FINXIA : structuration grand format transposée au résidentiel opéré",
      p6: "FINXIA Capital cible des actifs résidentiels de 80 à 300 unités dans les métropoles tier-1 européennes — coliving, résidences étudiantes, build-to-rent, senior living — opérés par des partenaires spécialisés, avec des sorties calibrées en bloc vers des investisseurs Core à horizon 5 à 7 ans. Cette approche s'appuie directement sur un savoir-faire déjà démontré : la Vallée du Camincourt, plateforme logistique de 116 991 m² développée en partenariat avec Elcimaï sur un terrain de près de 300 000 m², illustre la capacité à structurer des actifs grand format — dalle technique, raccordement énergétique haute densité, conformité réglementaire — le même socle de compétences qui s'applique aujourd'hui à la fois au résidentiel opéré et, via TITAN DC AI, aux datacenters européens.",
      p7: "La création de valeur ne vient pas seulement de l'appréciation de marché — elle vient de l'optimisation opérationnelle active et de l'effet de portefeuille à la cession, pour une performance alignée sur les standards institutionnels européens.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Résidentiel & Flex Living',
      link1Text: 'La thèse complète et le track record JPV',
      link2Title: 'Coliving : le Modèle Opérationnel',
      link2Text: 'Pourquoi ce modèle opéré redéfinit le résidentiel institutionnel',
    },
    en: {
      title: "4.5 Million Missing Homes: FINXIA Capital's Residential Thesis in Europe",
      description: "Europe is short 4.5 million homes. Residential investment reached €62.2bn in 2025 (+22%). FINXIA Capital's Residential & Flex Living thesis.",
      metaDescription: "4.5 million housing unit deficit in Europe (European Commission). Institutional residential investment: €62.2bn in 2025, over €70bn expected in 2026. FINXIA Capital's Residential & Flex Living thesis.",
      breadcrumbLabel: "European Housing Deficit: The FINXIA Residential Thesis",
      keywords: "European housing deficit, residential flex living, build-to-rent, PBSA coliving investment, institutional residential real estate Europe, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'Residential',
      date: 'August 20, 2026',
      readTime: '5 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Residential & Flex Living',
      lead: "Europe is short 4.5 million housing units, according to the European Commission. This structural deficit isn't cyclical — it has accumulated over a decade of underbuilding against continuous urban demographic growth. Institutional residential investment responds to that scarcity: €62.2 billion deployed in 2025, up 22%, with over €70 billion expected in 2026.",
      p1: "The housing deficit isn't closing at the pace of new construction. In tier-1 European metros, occupancy rates for serviced residences exceed 92% — a level that signals demand structurally exceeding available supply, not a cyclical peak. Build-to-rent rents are growing 4.8% a year, a trajectory only persistent scarcity can sustain over time.",
      h2_1: "Why institutional capital is accelerating into flexible residential",
      p2: "European residential investment grew 34% in 2024 and 22% in 2025 — a continuous acceleration, not a one-off rebound. Stable growth of 10 to 15% is anticipated for 2026. This capital movement reflects a structural shift in how institutional investors view residential: no longer a defensive, low-yield asset, but an operated asset class with value-creation potential comparable to hospitality or logistics.",
      p3: "The PBSA (student housing) segment illustrates this dynamic: investment jumped 52% in 2025, and for the first time, activity in Continental Europe exceeded that of the UK — a sign the institutional residential thesis now extends beyond its historical market.",
      h2_2: "Coliving, the most dynamic segment of operated residential",
      p4: "Coliving is emerging as the most dynamic sub-segment of this asset class: a global market valued at $13 billion in 2026, on a growth trajectory well ahead of traditional residential. Institutional adoption is following the same curve — over a third of major European investors are already exposed, and a majority plan to enter within three years.",
      p5: "This dynamic isn't isolated: it belongs to a broader asset class — coliving, PBSA, build-to-rent — where performance depends on active management rather than passive rent. We detail the coliving operating model, and what it changes for residential value creation, in a dedicated analysis.",
      h2_3: "The FINXIA thesis: large-format structuring transposed to operated residential",
      p6: "FINXIA Capital targets residential assets of 80 to 300 units in tier-1 European metros — coliving, student housing, build-to-rent, senior living — operated by specialized partners, with block exits calibrated for Core investors on a 5 to 7 year horizon. This approach draws directly on already-demonstrated know-how: Vallée du Camincourt, a 116,991 sqm logistics platform developed in partnership with Elcimaï on nearly 300,000 sqm of land, illustrates the ability to structure large-format assets — technical slab, high-density power connection, regulatory compliance — the same skill base that today applies both to operated residential and, via TITAN DC AI, to European datacenters.",
      p7: "Value creation doesn't come only from market appreciation — it comes from active operational optimization and portfolio effect at exit, for performance aligned with European institutional standards.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Residential & Flex Living Strategy',
      link1Text: 'The full thesis and JPV track record',
      link2Title: 'Coliving: The Operating Model',
      link2Text: 'Why this operated model is redefining institutional residential',
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
    "articleSection": "Residential",
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/deficit-logement-europe-these-residentielle-flex-living/" : "https://finxiacapital.com/en/blog/european-housing-deficit-residential-flex-living-thesis/"
      }
    ]
  };

  return (
    <div data-testid="article-housing-deficit-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/deficit-logement-europe-these-residentielle-flex-living/" : "https://finxiacapital.com/en/blog/european-housing-deficit-residential-flex-living-thesis/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/deficit-logement-europe-these-residentielle-flex-living/"
        hreflangEn="https://finxiacapital.com/en/blog/european-housing-deficit-residential-flex-living-thesis/"
        hreflangDefault="https://finxiacapital.com/blog/deficit-logement-europe-these-residentielle-flex-living/"
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
              <p>{t.p7}</p>
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
                <Link href={language === 'fr' ? '/blog/coliving-europe-modele-operationnel-institutionnel' : '/en/blog/coliving-europe-institutional-operating-model'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
