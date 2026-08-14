import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Article3Page() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Datacenters en Europe : pourquoi 2026 est l'année où les investisseurs en retard paieront le prix fort",
      description: "Les datacenters européens connaissent un déséquilibre structurel entre offre et demande. 2026 marque la dernière fenêtre d'entrée pour les investisseurs sur le segment brown-to-green avant l'arrivée des capitaux Core.",
      metaDescription: "Les datacenters européens connaissent un déséquilibre structurel entre offre et demande. 2026 marque la dernière fenêtre d'entrée pour les investisseurs sur le segment brown-to-green.",
      breadcrumbLabel: 'Datacenters en Europe : fenêtre 2026',
      keywords: 'marché datacenters Europe 2026, investissement datacenter Europe secondaire, Madrid Barcelone Milan datacenter, compression cap rates infrastructure, hyperscaler Europe marchés secondaires',
      backToBlog: 'Retour au blog',
      category: 'Market Analysis',
      date: '16 janvier 2026',
      readTime: '4 min de lecture',
      byline: 'Par Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital',
      sectionLabel: 'Recherche & Stratégie',
      lead: "Il y a deux ans, un investisseur qui regardait les datacenters européens avec attention voyait un marché de niche réservé aux spécialistes de l'infrastructure digitale. Aujourd'hui, il voit l'un des marchés les plus disputés d'Europe. Dans deux ans, il regardera en arrière et comprendra qu'il existait entre ces deux moments une fenêtre d'entrée exceptionnelle — et que cette fenêtre est en train de se fermer.",
      h2_1: 'La mécanique du déséquilibre',
      p1: "La demande en capacité de calcul en Europe a progressé de 40% entre 2023 et 2025, portée par trois vecteurs simultanés : le déploiement massif de modèles de langage par les hyperscalers américains en Europe, la souveraineté numérique qui pousse les États et grandes entreprises à rapatrier leurs données, et la croissance des workloads d'inférence IA qui nécessitent une latence minimale proche des utilisateurs finaux.",
      p2: "L'offre, elle, n'a pas suivi. Les marchés primaires — Amsterdam, Francfort, Dublin, Londres — sont en état de saturation avancée. Les contraintes de réseau électrique à Amsterdam ont gelé tout nouveau développement supérieur à 10 MW. À Francfort, les délais de livraison dépassent dix-huit mois pour des actifs existants. À Londres, les prix au kW ont progressé de 35% en dix-huit mois.",
      h2_2: 'Le déplacement vers les marchés secondaires',
      p3: "Ce déplacement produit un mouvement prévisible : les hyperscalers se déplacent vers les marchés secondaires. Madrid, Barcelone, Milan, Lyon, Varsovie, Athènes — des marchés où il existe encore de la puissance disponible, des actifs sous-exploités, et des régimes réglementaires favorables à l'investissement vert.",
      p4: "Ce déplacement n'est pas hypothétique. Il est documenté dans les mandats de recherche que les équipes Real Estate des hyperscalers ont engagés depuis début 2025. Microsoft, Google et Amazon cherchent simultanément des campus de 20 à 80 MW dans au moins six marchés secondaires européens. La signature de baux triple-net de 15 ans dans ces marchés a progressé de 180% entre 2024 et 2025.",
      h2_3: 'La prime de transformation comme moteur de rendement',
      p5: "Dans ce contexte, la thèse brown-to-green n'est plus une conviction de niche — c'est une réponse directe à une tension de marché identifiable et mesurable. Les actifs existants sous-exploités dans les marchés secondaires se négocient à des cap rates de 9% à 10%. Un hyperscaler en bail NNN de 15 ans dans le même marché, sur un actif certifié Tier III/IV avec PUE inférieur à 1,15, se négocie à 5% à 5,5%.",
      p6: "Cette compression de 400 à 500 points de base — multipliée par un NOI stabilisé — produit des multiples d'investissement que les marchés liquides ne peuvent plus offrir dans un environnement de taux normalisé. C'est arithmétique, pas spéculatif.",
      h2_4: 'La fenêtre se ferme',
      p7: "Deux signaux indiquent que cette fenêtre de compression des cap rates arrive à maturité. Le premier : les fonds infrastructure Core européens — Blackstone, Brookfield, DigitalBridge — ont annoncé des allocations significatives vers les datacenters européens de second rang pour 2026-2027. Quand les capitaux Core entrent sur un marché, les primes d'entrée disparaissent.",
      p8: "Le second : les PPA — Power Purchase Agreements — pour de l'énergie renouvelable dans les marchés secondaires européens sont de plus en plus disputés. Les prix d'accès à la puissance décarbonée, qui constituaient jusqu'ici un avantage structurel pour les actifs en développement, convergent vers ceux des marchés primaires.",
      h2_5: 'Ce que ça implique pour les allocateurs',
      p9: "Pour les investisseurs qui n'ont pas encore positionné de capital sur cette thèse, 2026 est vraisemblablement la dernière année où les points d'entrée sont cohérents avec des objectifs de rendement double-digit. L'alpha de transformation est encore accessible — mais il exige une capacité d'exécution technique que les véhicules généralistes ne possèdent pas.",
      p10: "Les acteurs qui sortiront gagnants de ce cycle ne seront pas nécessairement les plus capitalisés. Ce seront ceux qui auront combiné, au bon moment, l'expertise technique de transformation, l'accès aux locataires hyperscalers, et la structuration financière qui rend les actifs liquides pour les acheteurs Core à la sortie.",
      p11: "Cette combinaison est rare. Et dans les marchés rares, la prime va toujours à ceux qui arrivent en premier.",
      authorBioRest: 'est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d\'investissement propriétaire luxembourgeois positionné sur les actifs réels et l\'infrastructure IA. Co-auteure du livre blanc "Optimisation Énergétique des Datacenters Européens" (SSRN, Abstract ID 6597918, 2026).',
      learnMore: 'En savoir plus',
      link1Title: 'Stratégie TITAN',
      link1Text: 'Découvrez notre approche brown-to-green datacenter',
      link2Title: 'Marchés Européens',
      link2Text: 'France, Espagne, Italie : nos marchés cibles européens',
    },
    en: {
      title: 'European Datacenters: Why 2026 Is the Year Late Investors Pay the Full Price',
      description: 'European datacenters are experiencing a structural supply-demand imbalance. 2026 marks the last entry window for investors in the brown-to-green segment before Core capital arrives.',
      metaDescription: 'European datacenters are experiencing a structural supply-demand imbalance. 2026 marks the last entry window for investors in the brown-to-green segment.',
      breadcrumbLabel: 'European Datacenters: 2026 Window',
      keywords: 'European datacenter market 2026, secondary European datacenter investment, Madrid Barcelona Milan datacenter, infrastructure cap rate compression, hyperscaler European secondary markets',
      backToBlog: 'Back to blog',
      category: 'Market Analysis',
      date: 'January 16, 2026',
      readTime: '4 min read',
      byline: 'By Lila Benhammou, Co-Founder & CIO — FINXIA Capital',
      sectionLabel: 'Research & Strategy',
      lead: "Two years ago, an investor watching the European datacenter market closely saw a niche segment reserved for digital infrastructure specialists. Today, they see one of the most contested markets in Europe. In two years, they will look back and understand that an exceptional entry window existed between those two moments — and that this window is now closing.",
      h2_1: 'The mechanics of the imbalance',
      p1: "Demand for computing capacity in Europe grew 40% between 2023 and 2025, driven by three simultaneous forces: the massive rollout of language models by American hyperscalers across Europe, digital sovereignty pushing states and large enterprises to repatriate their data, and the growth of AI inference workloads that require minimal latency close to end users.",
      p2: "Supply has not kept pace. Primary markets — Amsterdam, Frankfurt, Dublin, London — are in a state of advanced saturation. Grid connection constraints in Amsterdam have frozen any new development above 10 MW. In Frankfurt, delivery timelines exceed eighteen months for existing assets. In London, price per kW has risen 35% in eighteen months.",
      h2_2: 'The shift to secondary markets',
      p3: "This shift produces a predictable movement: hyperscalers are moving toward secondary markets. Madrid, Barcelona, Milan, Lyon, Warsaw, Athens — markets where available power, underutilized assets, and regulatory regimes favorable to green investment still exist.",
      p4: "This shift is not hypothetical. It is documented in the research mandates that hyperscaler Real Estate teams have engaged since early 2025. Microsoft, Google and Amazon are simultaneously seeking 20 to 80 MW campuses in at least six European secondary markets. The signing of 15-year triple-net leases in these markets grew 180% between 2024 and 2025.",
      h2_3: 'The transformation premium as a return driver',
      p5: "In this context, the brown-to-green thesis is no longer a niche conviction — it is a direct response to an identifiable and measurable market tension. Underutilized existing assets in secondary markets trade at cap rates of 9% to 10%. A hyperscaler on a 15-year NNN lease in the same market, on a Tier III/IV certified asset with PUE below 1.15, trades at 5% to 5.5%.",
      p6: "This 400 to 500 basis point compression — multiplied by a stabilized NOI — produces investment multiples that liquid markets can no longer offer in a normalized rate environment. It is arithmetic, not speculative.",
      h2_4: 'The window is closing',
      p7: "Two signals indicate that this cap rate compression window is reaching maturity. The first: European Core infrastructure funds — Blackstone, Brookfield, DigitalBridge — have announced significant allocations toward second-tier European datacenters for 2026-2027. When Core capital enters a market, entry premiums disappear.",
      p8: "The second: PPAs — Power Purchase Agreements — for renewable energy in European secondary markets are increasingly contested. Access prices for decarbonized power, which until now constituted a structural advantage for assets in development, are converging toward those of primary markets.",
      h2_5: 'What this means for allocators',
      p9: "For investors who have not yet positioned capital on this thesis, 2026 is likely the last year in which entry points remain consistent with double-digit return objectives. Transformation alpha is still accessible — but it requires a technical execution capability that generalist vehicles do not possess.",
      p10: "The winners of this cycle will not necessarily be the most capitalized players. They will be those who combined, at the right time, technical transformation expertise, access to hyperscaler tenants, and financial structuring that makes assets liquid for Core buyers at exit.",
      p11: "This combination is rare. And in rare markets, the premium always goes to those who arrive first.",
      authorBioRest: 'is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure. Co-author of the white paper "Energy Optimization of European Datacenters" (SSRN, Abstract ID 6597918, 2026).',
      learnMore: 'Learn more',
      link1Title: 'TITAN Strategy',
      link1Text: 'Discover our brown-to-green datacenter approach',
      link2Title: 'European Markets',
      link2Text: 'France, Spain, Italy: our target European markets',
    },
  };

  const t = content[language];

  // Article Schema JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDescription,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-01-16T09:00:00+01:00",
    "dateModified": "2026-01-16T09:00:00+01:00",
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
    "articleSection": "Market Analysis",
    "keywords": t.keywords
  };

  // Breadcrumb Schema
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/datacenters-europe-2026-fenetre-opportunite/" : "https://finxiacapital.com/en/blog/european-datacenters-2026-investor-opportunity/"
      }
    ]
  };

  return (
    <div data-testid="article-3-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/datacenters-europe-2026-fenetre-opportunite/" : "https://finxiacapital.com/en/blog/european-datacenters-2026-investor-opportunity/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/datacenters-europe-2026-fenetre-opportunite/"
        hreflangEn="https://finxiacapital.com/en/blog/european-datacenters-2026-investor-opportunity/"
        hreflangDefault="https://finxiacapital.com/blog/datacenters-europe-2026-fenetre-opportunite/"
      />

      {/* Article Header */}
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-01-16">
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
              {t.sectionLabel}
            </p>
          </div>
        </header>

        {/* Article Content */}
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                {t.lead}
              </p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_1}</h2>

              <p>{t.p1}</p>

              <p>{t.p2}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_2}</h2>

              <p>{t.p3}</p>

              <p>{t.p4}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>

              <p>{t.p5}</p>

              <p>{t.p6}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_4}</h2>

              <p>{t.p7}</p>

              <p>{t.p8}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_5}</h2>

              <p>{t.p9}</p>

              <p>{t.p10}</p>

              <p>{t.p11}</p>
            </div>

            {/* Author Bio */}
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

            {/* Internal Links */}
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
