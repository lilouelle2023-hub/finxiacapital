import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleDatacentersModulairesPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Les datacenters modulaires : le coup d'accélération de Schneider Electric et la révolution de l'edge computing",
      description: "Schneider Electric investit 1,5 milliard d'euros dans les datacenters modulaires. Mais pourquoi cette architecture est-elle le futur de l'infrastructure IA ?",
      tag: "Digital Infrastructure",
      date: "4 juillet 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Schneider Electric vient d'annoncer un investissement de 1,5 milliard d'euros dans les datacenters modulaires. Le fabricant français de solutions électriques, qui fournit déjà 40% des équipements des hyperscalers mondiaux, mise sur une architecture qui promet de réduire les délais de construction de 70% et les coûts de 50%. Mais pourquoi cette approche est-elle le futur de l'infrastructure IA ?",
      p1: "Un datacenter modulaire, c'est simple : au lieu de construire un bâtiment de 10 000 m² en béton, on assemble des conteneurs préfabriqués. Chaque conteneur est une unité autonome — refroidissement, électrique, réseau, sécurité. On les pose sur un terrain, on les raccorde au réseau, et en 6 mois on a un datacenter opérationnel. Contre 3 à 4 ans pour un datacenter traditionnel.",
      p2: "L'avantage est double. D'abord, la vitesse. Quand une entreprise comme Anthropic annonce qu'elle a besoin de 10 000 GPU dans les 12 mois, les hyperscalers ne peuvent pas attendre 4 ans. Les modules leur permettent de déployer rapidement. Ensuite, la flexibilité. On peut ajouter des modules au fur et à mesure de la demande. Un datacenter de 5 MW devient un datacenter de 50 MW en ajoutant 9 conteneurs. C'est le modèle Lego appliqué à l'infrastructure critique.",
      h2_1: "Schneider Electric : le pari de l'industrialisation",
      p3: "Schneider n'est pas un nouveau venu. Le groupe français fournit déjà les équipements électriques des plus grands datacenters du monde. Mais son investissement dans les modules marque un changement de posture : au lieu de vendre des composants, il vend des systèmes complets. Chaque module est un produit standardisé, avec des certifications Tier III ou IV, des PUE inférieurs à 1,20, et une intégration native aux réseaux intelligents.",
      p4: "Le modèle économique est astucieux. Schneider ne construit pas les datacenters — il vend les modules. L'opérateur achète le terrain, raccorde l'électricité, et pose les modules. Schneider fournit la maintenance, la mise à jour, et l'extension. C'est un modèle de revenus récurrents : chaque module génère un contrat de maintenance de 15 ans. Pour un investisseur, c'est une infrastructure avec un LTV prévisible.",
      h2_2: "Les modules face au défi énergétique français",
      p5: "La France a un problème unique : une demande de datacenters qui explose (18 GW réservés, RTE annonce 35 GW d'ici 2030) et une capacité de raccordement qui peine à suivre. Les datacenters traditionnels demandent 2 à 3 ans de permis. Les modules, 6 mois. Mais le goulot d'étranglement n'est pas le bâtiment — c'est le réseau électrique. RTE, l'opérateur du réseau de transport, a une file d'attente de 12 000 demandes de raccordement.",
      p6: "C'est là que la modularité devient stratégique. Un module de 5 MW peut fonctionner sur un réseau de distribution existant, sans nécessiter de nouveau poste de transformation. Un module de 20 MW, oui. Mais un opérateur intelligent commence par 5 MW, génère des revenus, et finance l'extension du réseau avec ses cash-flows. C'est le modèle brown-to-green que FINXIA Capital applique : transformer des actifs existants en infrastructures certifiées, étape par étape.",
      h2_3: "La thèse d'investissement : modulaire comme levier de déploiement",
      p7: "FINXIA Capital a intégré la modularité dans sa stratégie TITAN DC AI. Les 47 actifs brown identifiés en France, Espagne et Italie ne sont pas des sites pour des datacenters de 100 MW. Ce sont des sites pour des modules de 5 à 10 MW, déployables rapidement, extensibles progressivement, et alignables EU Taxonomy. L'avantage : un ticket d'entrée plus bas, un délai de rentabilité plus court, et une flexibilité stratégique.",
      p8: "Le calcul est simple. Un module de 5 MW, coût de transformation 8 millions d'euros, génère 1,2 million d'euros de revenus annuels. Avec un contrat d'achat d'électricité (PPA) décarboné, le rendement est de 12% à 15%. C'est supérieur aux rendements des hyperscalers en marché primaire (6% à 8%), et inférieur aux risques d'un greenfield (3 à 5 ans de délai). C'est le sweet spot du brown-to-green modulaire.",
      h2_4: "Ce que les investisseurs doivent comprendre",
      p9: "Le datacenter modulaire n'est pas une mode. C'est une réponse structurelle à un problème structurel : la demande de capacité IA croît plus vite que la capacité de construire. Les hyperscalers l'ont compris : Microsoft, Google et Amazon testent tous des solutions modulaires. Les néoclouds européens l'ont compris : OVHcloud et Scaleway déploient des modules pour étendre rapidement leur couverture.",
      p10: "La fenêtre d'investissement est 2026-2028. Après, les modules seront standardisés, les prix seront compétitifs, et la prime de premier entrant sera absorbée. Celui qui investit maintenant dans les sites modulaires — les actifs brown avec les bonnes caractéristiques de raccordement — capturera la prime de transformation. C'est là que FINXIA Capital positionne son capital.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Modular Datacenters: Schneider Electric's Acceleration and the Edge Computing Revolution",
      description: "Schneider Electric invests 1.5 billion euros in modular datacenters. But why is this architecture the future of AI infrastructure?",
      tag: "Digital Infrastructure",
      date: "July 4, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "Schneider Electric just announced a 1.5 billion euro investment in modular datacenters. The French electrical solutions manufacturer, which already supplies 40% of equipment to global hyperscalers, is betting on an architecture that promises to reduce construction times by 70% and costs by 50%. But why is this approach the future of AI infrastructure?",
      p1: "A modular datacenter is simple: instead of building a 10,000 m² concrete building, you assemble prefabricated containers. Each container is an autonomous unit — cooling, electrical, network, security. You place them on a site, connect them to the grid, and in 6 months you have an operational datacenter. Versus 3 to 4 years for a traditional datacenter.",
      p2: "The advantage is twofold. First, speed. When a company like Anthropic announces it needs 10,000 GPUs within 12 months, hyperscalers can't wait 4 years. Modules allow rapid deployment. Second, flexibility. You can add modules as demand grows. A 5 MW datacenter becomes a 50 MW datacenter by adding 9 containers. It's the Lego model applied to critical infrastructure.",
      h2_1: "Schneider Electric: The Industrialization Bet",
      p3: "Schneider is not a newcomer. The French group already supplies electrical equipment to the world's largest datacenters. But its investment in modules marks a shift in posture: instead of selling components, it sells complete systems. Each module is a standardized product, with Tier III or IV certifications, PUE below 1.20, and native integration with smart grids.",
      p4: "The business model is clever. Schneider doesn't build the datacenters — it sells the modules. The operator buys the land, connects the electricity, and places the modules. Schneider provides maintenance, updates, and expansion. It's a recurring revenue model: each module generates a 15-year maintenance contract. For an investor, it's infrastructure with predictable LTV.",
      h2_2: "Modules Facing the French Energy Challenge",
      p5: "France has a unique problem: exploding datacenter demand (18 GW reserved, RTE forecasts 35 GW by 2030) and connection capacity struggling to keep up. Traditional datacenters require 2 to 3 years of permits. Modules, 6 months. But the bottleneck is not the building — it's the electrical grid. RTE, the transmission network operator, has a queue of 12,000 connection requests.",
      p6: "This is where modularity becomes strategic. A 5 MW module can operate on an existing distribution network, without requiring a new transformation station. A 20 MW module, yes. But a smart operator starts with 5 MW, generates revenue, and finances grid expansion with cash flows. This is the brown-to-green model that FINXIA Capital applies: transforming existing assets into certified infrastructures, step by step.",
      h2_3: "The Investment Thesis: Modular as a Deployment Lever",
      p7: "FINXIA Capital has integrated modularity into its TITAN DC AI strategy. The 47 brown assets identified in France, Spain and Italy are not sites for 100 MW datacenters. They are sites for 5 to 10 MW modules, rapidly deployable, progressively extensible, and EU Taxonomy alignable. The advantage: lower entry ticket, shorter payback period, and strategic flexibility.",
      p8: "The calculation is simple. A 5 MW module, transformation cost 8 million euros, generates 1.2 million euros in annual revenue. With a decarbonized power purchase agreement (PPA), the return is 12% to 15%. This is above hyperscaler returns in primary markets (6% to 8%), and below greenfield risks (3 to 5 years delay). It's the sweet spot of modular brown-to-green.",
      h2_4: "What Investors Must Understand",
      p9: "Modular datacenter is not a trend. It is a structural response to a structural problem: AI capacity demand grows faster than construction capacity. Hyperscalers have understood this: Microsoft, Google and Amazon are all testing modular solutions. European neoclouds have understood this: OVHcloud and Scaleway deploy modules to rapidly extend their coverage.",
      p10: "The investment window is 2026-2028. After that, modules will be standardized, prices will be competitive, and the first-mover premium will be absorbed. Whoever invests now in modular sites — brown assets with the right connection characteristics — will capture the transformation premium. This is where FINXIA Capital positions its capital.",
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
    "datePublished": "2026-07-04T09:00:00+01:00",
    "dateModified": "2026-07-04T09:00:00+01:00",
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
    "articleSection": "Digital Infrastructure",
    "keywords": language === 'fr' ? "datacenter modulaire, Schneider Electric, edge computing, brown-to-green, infrastructure IA, investissement" : "modular datacenter, Schneider Electric, edge computing, brown-to-green, AI infrastructure, investment"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/datacenters-modulaires-schneider-electric-edge-computing" : "https://finxiacapital.com/en/blog/modular-datacenters-schneider-electric-edge-computing"
      }
    ]
  };

  return (
    <div data-testid="article-datacenters-modulaires-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/datacenters-modulaires-schneider-electric-edge-computing/" : "https://finxiacapital.com/en/blog/modular-datacenters-schneider-electric-edge-computing/"}
        keywords={language === 'fr' ? "datacenter modulaire, Schneider Electric, edge computing, infrastructure IA" : "modular datacenter, Schneider Electric, edge computing, AI infrastructure"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/datacenters-modulaires-schneider-electric-edge-computing/"
        hreflangEn="https://finxiacapital.com/en/blog/modular-datacenters-schneider-electric-edge-computing/"
        hreflangDefault="https://finxiacapital.com/blog/datacenters-modulaires-schneider-electric-edge-computing/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-07-04">
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
