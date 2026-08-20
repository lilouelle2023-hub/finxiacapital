import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function BuildToRentArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Build-to-Rent en Europe : comment le secteur Living est devenu la première classe d'actifs immobiliers",
      description: "Le secteur Living a représenté 30% des investissements immobiliers directs en Europe en 2025 — 1ère classe d'actifs 2 ans de suite. Analyse FINXIA Capital.",
      metaDescription: "Build-to-Rent Europe : le secteur Living représente 30% des investissements immobiliers directs en 2025, 1ère classe d'actifs 2 ans de suite. Croissance +34% (2024), +22% (2025). Analyse FINXIA Capital.",
      breadcrumbLabel: "Build-to-Rent : la première classe d'actifs",
      keywords: "build-to-rent Europe, secteur Living immobilier, investissement résidentiel institutionnel, BTR classe d'actifs, résidentiel opéré Europe, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'Residential',
      date: '21 août 2026',
      readTime: '5 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Résidentiel & Flex Living',
      lead: "En 2025, le secteur Living — build-to-rent, coliving, résidences services — a représenté 30% des investissements directs en immobilier européen, la première classe d'actifs pour la deuxième année consécutive. Ce n'est plus un segment émergent : c'est devenu le centre de gravité du capital institutionnel immobilier en Europe.",
      p1: "La trajectoire de croissance confirme la bascule structurelle : +34% en 2024, +22% en 2025, avec une croissance annuelle stable de 10 à 15% anticipée pour 2026. Les volumes d'investissement devraient dépasser 27 milliards d'euros en 2026, contre 25 milliards en 2025. Cette accélération ne relève pas d'un effet de rattrapage ponctuel — elle reflète une réorientation durable du capital institutionnel vers des actifs opérés à revenu récurrent.",
      h2_1: "Le déficit d'offre qui soutient la thèse sur le long terme",
      p2: "Les mises en chantier résidentielles devraient reculer de 5% en 2025 et de nouveau en 2026 — un recul plus marqué encore dans les métropoles, où les livraisons chutent de 11% en 2025. Ce déficit d'offre, combiné à une urbanisation continue et à des coûts d'accession à la propriété élevés, crée les conditions d'une rareté locative durable, pas conjoncturelle.",
      p3: "C'est cette rareté structurelle qui distingue le build-to-rent d'un simple pari de cycle. Un investisseur qui construit ou acquiert un actif locatif géré aujourd'hui capture une demande qui ne se résorbera pas au rythme de la construction neuve dans les 5 à 10 prochaines années.",
      h2_2: "Pourquoi le build-to-rent exige une discipline opérationnelle, pas seulement foncière",
      p4: "Le build-to-rent partage avec le coliving et le PBSA une caractéristique déterminante : la performance dépend de la gestion active, pas de la détention passive. Optimisation des surfaces communes, digitalisation de la gestion locative, montée en gamme continue des services — ce sont ces leviers opérationnels, plus que l'appréciation de marché, qui déterminent le rendement final.",
      p5: "Cette discipline de structuration grand format s'appuie directement sur le savoir-faire déjà démontré par l'équipe fondatrice sur la Vallée du Camincourt, plateforme logistique de 116 991 m² développée en partenariat avec Elcimaï — le même socle de compétences qui structure aujourd'hui l'ensemble du ciblage résidentiel de FINXIA, détaillé dans notre thèse sur le déficit de logement.",
      h2_3: "Ce que la bascule Living change pour l'allocation institutionnelle",
      p6: "Quand une classe d'actifs devient la première destination du capital immobilier européen deux années de suite, l'enjeu pour un investisseur n'est plus de justifier l'allocation — c'est de sélectionner l'exécution la plus disciplinée au sein d'un segment de plus en plus disputé. La structuration grand format et la discipline opérationnelle, pas l'accès au capital, deviennent le facteur différenciant.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Résidentiel & Flex Living',
      link1Text: 'La thèse complète et le track record JPV',
      link2Title: '4,5 Millions de Logements Manquants',
      link2Text: 'La thèse résidentielle de FINXIA Capital',
    },
    en: {
      title: "Build-to-Rent in Europe: How the Living Sector Became the Top Real Estate Asset Class",
      description: "The Living sector accounted for 30% of direct European real estate investment in 2025 — top asset class 2 years running. FINXIA Capital analysis.",
      metaDescription: "Build-to-Rent Europe: the Living sector represents 30% of direct real estate investment in 2025, #1 asset class 2 years running. Growth +34% (2024), +22% (2025). FINXIA Capital analysis.",
      breadcrumbLabel: "Build-to-Rent: The Top Asset Class",
      keywords: "build-to-rent Europe, Living sector real estate, institutional residential investment, BTR asset class, operated residential Europe, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'Residential',
      date: 'August 21, 2026',
      readTime: '5 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Residential & Flex Living',
      lead: "In 2025, the Living sector — build-to-rent, coliving, serviced residences — accounted for 30% of direct European real estate investment, the top asset class for the second consecutive year. This is no longer an emerging segment: it has become the center of gravity for institutional real estate capital in Europe.",
      p1: "The growth trajectory confirms the structural shift: +34% in 2024, +22% in 2025, with stable annual growth of 10 to 15% expected for 2026. Investment volumes are expected to exceed €27 billion in 2026, up from €25 billion in 2025. This acceleration isn't a one-off catch-up effect — it reflects a durable reallocation of institutional capital toward operated, recurring-income assets.",
      h2_1: "The supply deficit sustaining the long-term thesis",
      p2: "Residential housing starts are forecast to drop 5% in 2025 and again in 2026 — an even sharper decline in cities, where completions fall 11% in 2025. This supply deficit, combined with continued urbanization and high homeownership costs, creates the conditions for durable rental scarcity, not a cyclical one.",
      p3: "It's this structural scarcity that sets build-to-rent apart from a simple cycle bet. An investor who builds or acquires a managed rental asset today captures demand that won't be resolved at the pace of new construction over the next 5 to 10 years.",
      h2_2: "Why build-to-rent demands operational, not just land, discipline",
      p4: "Build-to-rent shares a defining trait with coliving and PBSA: performance depends on active management, not passive ownership. Optimizing common areas, digitalizing lease management, continuously upgrading service levels — these operational levers, more than market appreciation, determine the final return.",
      p5: "This large-format structuring discipline draws directly on know-how already demonstrated by the founding team on Vallée du Camincourt, a 116,991 sqm logistics platform developed in partnership with Elcimaï — the same skill base that structures FINXIA's entire residential targeting today, detailed in our housing deficit thesis.",
      h2_3: "What the Living shift changes for institutional allocation",
      p6: "When an asset class becomes the top destination for European real estate capital two years running, the challenge for an investor is no longer justifying the allocation — it's selecting the most disciplined execution within an increasingly contested segment. Large-format structuring and operational discipline, not access to capital, become the differentiating factor.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Residential & Flex Living Strategy',
      link1Text: 'The full thesis and JPV track record',
      link2Title: '4.5 Million Missing Homes',
      link2Text: "FINXIA Capital's residential thesis",
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/build-to-rent-europe-2026-secteur-living-premiere-classe-actifs/" : "https://finxiacapital.com/en/blog/build-to-rent-europe-2026-living-sector-top-asset-class/"
      }
    ]
  };

  return (
    <div data-testid="article-btr-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/build-to-rent-europe-2026-secteur-living-premiere-classe-actifs/" : "https://finxiacapital.com/en/blog/build-to-rent-europe-2026-living-sector-top-asset-class/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/build-to-rent-europe-2026-secteur-living-premiere-classe-actifs/"
        hreflangEn="https://finxiacapital.com/en/blog/build-to-rent-europe-2026-living-sector-top-asset-class/"
        hreflangDefault="https://finxiacapital.com/blog/build-to-rent-europe-2026-secteur-living-premiere-classe-actifs/"
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
                <Link href={language === 'fr' ? '/blog/deficit-logement-europe-these-residentielle-flex-living' : '/en/blog/european-housing-deficit-residential-flex-living-thesis'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
