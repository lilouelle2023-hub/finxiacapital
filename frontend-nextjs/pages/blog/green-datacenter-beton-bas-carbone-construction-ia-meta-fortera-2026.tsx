import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleBetonBasCarbonePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Green datacenter : le béton bas carbone devient un enjeu de la construction IA",
      description: "Meta vient de signer avec Fortera un accord pluriannuel portant sur 200 000 tonnes de crédits de ciment bas carbone. Derrière le contrat, un angle mort du green datacenter : le carbone gris de la construction. Et un avantage méconnu de la transformation brown-to-green.",
      tag: "Energy & Infrastructure",
      date: "31 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "L'accord est passé inaperçu dans le flux des annonces IA : Meta s'engage auprès de Fortera sur 200 000 tonnes de crédits associés au ciment bas carbone, dans le cadre d'un contrat pluriannuel qui soutiendra le développement de son usine du Missouri. C'est pourtant un signal fort : l'industrie du datacenter commence à s'attaquer au carbone de ses chantiers, pas seulement à celui de son électricité.",
      p1: "Le green datacenter se mesure habituellement au PUE — l'efficacité énergétique en exploitation. Mais ce ratio ne dit rien du béton et de l'acier coulés pour construire les salles. Or le cycle de construction IA actuel est massif : des campus entiers sortent de terre sur tous les continents, et avec eux des quantités considérables de carbone gris, émis avant même que le premier serveur ne s'allume.",
      p2: "Le ciment est un poste particulièrement émissif dans la construction, et les solutions bas carbone restent limitées en capacité. Les engagements comme celui de Meta servent justement à financer la montée en puissance de ces filières : l'acheteur garantit un débouché, le producteur investit. C'est la logique des PPA appliquée aux matériaux.",
      h2_1: "Le carbone gris, nouveau front du green datacenter",
      p3: "La pression monte des deux côtés : les hyperscalers ont des objectifs net zéro qui incluent leur scope 3 — donc leurs chantiers — et les cadres de reporting européens renforcent les exigences de transparence sur les émissions intégrées des actifs. Le carbone gris cesse d'être une variable invisible pour devenir une donnée reportée, puis comparée.",
      p4: "Pour les projets neufs, cela change la conception : choix des matériaux, optimisation des structures, contrats d'approvisionnement bas carbone. Les premiers campus qui documenteront sérieusement leur carbone gris disposeront d'un argument face aux collectivités, aux prêteurs et aux clients — au même titre que le PUE il y a dix ans.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "La valeur des actifs va progressivement intégrer cette dimension : à performance énergétique égale, un bâtiment dont le carbone gris est mesuré et limité sera mieux positionné face aux exigences des locataires et aux futures normes. Les contrats d'approvisionnement en matériaux bas carbone deviennent un élément de la diligence technique, au même titre que le raccordement ou le refroidissement.",
      p6: "Il y a aussi un enjeu de coût et de calendrier : les capacités de ciment bas carbone sont limitées, et les acheteurs qui sécurisent tôt leurs approvisionnements évitent une nouvelle file d'attente. Après les transformateurs et les GPU, les matériaux pourraient rejoindre la liste des goulets d'étranglement de la construction IA.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Notre biais brown-to-green possède ici un avantage structurel : transformer un bâtiment existant, c'est conserver sa structure et éviter l'essentiel du béton neuf. En carbone gris comme en délai, la réutilisation d'une enveloppe existante est imbattable — c'est un argument que nous documentons désormais dans nos analyses d'actifs.",
      p8: "Pour les extensions et les constructions nouvelles de nos sites, nous intégrons le critère matériaux : approvisionnements bas carbone lorsque les filières le permettent, et mesure du carbone évité par la transformation plutôt que la reconstruction. La sobriété carbone d'un actif commence avant son exploitation.",
      h2_4: "Ce qu'il faut retenir",
      p9: "L'accord Meta-Fortera sur 200 000 tonnes de crédits de ciment bas carbone marque l'entrée du carbone gris dans la stratégie des hyperscalers. Le green datacenter ne se joue plus seulement au PUE : il se joue aussi dans le béton — et la transformation d'actifs existants y offre un avantage mesurable.",
      p10: "À surveiller : d'autres contrats de matériaux bas carbone chez les hyperscalers, la montée en capacité des filières de ciment décarboné, et l'intégration du carbone gris dans les référentiels de reporting européens.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Green Datacenter: Low-Carbon Concrete Becomes an AI Construction Issue",
      description: "Meta has signed a multi-year agreement with Fortera covering 200,000 tons of low-carbon cement credits. Behind the contract lies a blind spot of the green datacenter: the embodied carbon of construction. And an overlooked advantage of brown-to-green transformation.",
      tag: "Energy & Infrastructure",
      date: "October 31, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "The deal went unnoticed in the flow of AI announcements: Meta has committed with Fortera to 200,000 tons of credits associated with low-carbon cement, under a multi-year contract supporting the development of its Missouri plant. It is a strong signal: the datacenter industry is starting to tackle the carbon of its construction sites, not just that of its electricity.",
      p1: "The green datacenter is usually measured by PUE — operational energy efficiency. But that ratio says nothing about the concrete and steel poured to build the halls. Yet the current AI construction cycle is massive: entire campuses are rising on every continent, and with them considerable amounts of embodied carbon, emitted before the first server is even switched on.",
      p2: "Cement is a particularly emissive component of construction, and low-carbon solutions remain limited in capacity. Commitments like Meta's are precisely meant to finance the scale-up of these supply chains: the buyer guarantees an outlet, the producer invests. It is PPA logic applied to materials.",
      h2_1: "Embodied Carbon: the Green Datacenter's New Front",
      p3: "Pressure is mounting on both sides: hyperscalers have net-zero targets that include their scope 3 — meaning their construction sites — and European reporting frameworks are strengthening transparency requirements on assets' embedded emissions. Embodied carbon is ceasing to be an invisible variable and becoming a reported, then compared, data point.",
      p4: "For new projects, this changes design: material choices, structural optimization, low-carbon procurement contracts. The first campuses to seriously document their embodied carbon will hold an argument with local authorities, lenders and customers — just as PUE did ten years ago.",
      h2_2: "What This Changes for Investors",
      p5: "Asset value will gradually integrate this dimension: at equal energy performance, a building whose embodied carbon is measured and limited will be better positioned against tenant requirements and future standards. Low-carbon material procurement contracts become part of technical due diligence, alongside grid connection and cooling.",
      p6: "There is also a cost and timeline issue: low-carbon cement capacity is limited, and buyers who secure supplies early avoid another queue. After transformers and GPUs, materials could join the list of AI construction bottlenecks.",
      h2_3: "How We Apply This at FINXIA",
      p7: "Our brown-to-green bias holds a structural advantage here: transforming an existing building means keeping its structure and avoiding most new concrete. In embodied carbon as in timeline, reusing an existing shell is unbeatable — an argument we now document in our asset analyses.",
      p8: "For extensions and new construction on our sites, we integrate the materials criterion: low-carbon procurement where supply chains allow, and measurement of the carbon avoided by transforming rather than rebuilding. An asset's carbon sobriety begins before operations.",
      h2_4: "Key Takeaways",
      p9: "The Meta-Fortera agreement on 200,000 tons of low-carbon cement credits marks embodied carbon's entry into hyperscaler strategy. The green datacenter is no longer just about PUE: it is also about concrete — and transforming existing assets offers a measurable advantage.",
      p10: "Worth watching: further low-carbon material contracts among hyperscalers, the scale-up of decarbonized cement supply chains, and the integration of embodied carbon into European reporting frameworks.",
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
    "datePublished": "2026-10-31T09:00:00+01:00",
    "dateModified": "2026-10-31T09:00:00+01:00",
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
    "articleSection": "Energy & Infrastructure",
    "keywords": language === 'fr' ? "green datacenter, béton bas carbone, carbone gris, datacenter, IA, Meta, Fortera, construction, brown-to-green, efficacité énergétique" : "green datacenter, low-carbon concrete, embodied carbon, datacenter, AI, Meta, Fortera, construction, brown-to-green, energy efficiency"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/green-datacenter-beton-bas-carbone-construction-ia-meta-fortera-2026" : "https://finxiacapital.com/en/blog/green-datacenter-low-carbon-concrete-ai-construction-meta-fortera-2026"
      }
    ]
  };

  return (
    <div data-testid="article-green-datacenter-beton-bas-carbone-construction-ia-meta-fortera-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/green-datacenter-beton-bas-carbone-construction-ia-meta-fortera-2026/" : "https://finxiacapital.com/en/blog/green-datacenter-low-carbon-concrete-ai-construction-meta-fortera-2026/"}
        keywords={language === 'fr' ? "green datacenter, béton bas carbone, carbone gris, datacenter, IA, Meta, Fortera, construction, brown-to-green, efficacité énergétique" : "green datacenter, low-carbon concrete, embodied carbon, datacenter, AI, Meta, Fortera, construction, brown-to-green, energy efficiency"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/green-datacenter-beton-bas-carbone-construction-ia-meta-fortera-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/green-datacenter-low-carbon-concrete-ai-construction-meta-fortera-2026/"
        hreflangDefault="https://finxiacapital.com/blog/green-datacenter-beton-bas-carbone-construction-ia-meta-fortera-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-31">
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
