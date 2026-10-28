import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleCentralesNucleairesPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Datacenter IA : pourquoi NVIDIA évalue d'anciennes centrales nucléaires allemandes",
      description: "NVIDIA et PreussenElektra, filiale d'E.ON, vont évaluer huit anciennes centrales nucléaires allemandes comme sites potentiels d'usines à IA. Foncier industriel, raccordements haute tension, infrastructure en place : les friches électro-intensives deviennent des actifs stratégiques — et le brown-to-green une thèse centrale.",
      tag: "Energy & Infrastructure",
      date: "28 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "L'annonce est discrète mais symbolique : NVIDIA et PreussenElektra, la filiale de démantèlement d'E.ON, vont évaluer ensemble si d'anciennes centrales nucléaires allemandes peuvent accueillir des usines à IA. Huit sites en cours de démantèlement, avec en commun ce que le marché recherche désespérément : du foncier industriel, des raccordements électriques dimensionnés pour des centrales et une infrastructure déjà en place.",
      p1: "Le principe n'est pas de relancer le nucléaire — l'Allemagne a fermé son dernier réacteur en avril 2023 — mais de réutiliser ce qui a coûté des décennies à construire : les raccordements haute tension, les réseaux d'eau de refroidissement, les emprises foncières et l'acceptabilité d'un usage industriel. C'est le brown-to-green appliqué aux sites les plus électro-intensifs du pays.",
      p2: "La démarche reste prudente : il s'agit d'une évaluation ouverte, sans décision d'investissement ni choix de site, et les calendriers de démantèlement courent dans les années 2030. Reste que le signal compte : le premier fournisseur de puces IA au monde regarde désormais les friches énergétiques comme des gisements de capacité.",
      h2_1: "Pourquoi les friches électriques deviennent stratégiques",
      p3: "Le goulot d'étranglement de l'IA n'est plus seulement le GPU : ce sont les années d'attente pour un raccordement réseau et les délais de permis. Un site déjà raccordé en très haute tension, avec un historique industriel, élimine les deux principales files d'attente. C'est exactement ce que les opérateurs recherchent quand les engagements de capacité se chiffrent en gigawatts.",
      p4: "L'Europe regorge de ces actifs : centrales à charbon ou nucléaires déclassées, sites sidérurgiques, raffineries. Leur point commun : la puissance était déjà là. Dans un marché où le mégawatt disponible devient la ressource rare, ces friches sont des réserves de temps autant que de foncier.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "La revalorisation des friches électro-intensives change la lecture des bilans : des sites comptabilisés comme des passifs de démantèlement peuvent redevenir des actifs productifs. PreussenElektra le présente elle-même comme une réutilisation responsable et une nouvelle activité économique pour les régions.",
      p6: "Mais l'évaluation doit rester froide : une ancienne centrale n'est pas un datacenter clé en main. Les halles de turbines n'ont pas été conçues pour des racks haute densité ; il faut refaire le refroidissement, les sous-stations, la fibre, et composer avec des contraintes réglementaires spécifiques. Le brownfield crée de la valeur quand le coût de conversion reste inférieur au délai évité — pas automatiquement.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Cette annonce valide directement notre biais brown-to-green dans la stratégie TITAN DC AI : nous ciblons des sites existants déjà alimentés et raccordés, dont la transformation coûte moins cher et surtout moins de temps qu'un greenfield. Voir NVIDIA appliquer cette grille de lecture à d'anciennes centrales conforte notre thèse.",
      p8: "Nous en retenons aussi la discipline : l'évaluation site par site — qualité du raccordement, eau, foncier, cadre réglementaire — est exactement notre processus de sélection. Et nous restons sur des sites où la transformation est réalisable à court terme, pas sur des promesses de démantèlement à dix ans.",
      h2_4: "Ce qu'il faut retenir",
      p9: "NVIDIA et PreussenElektra vont évaluer huit anciennes centrales nucléaires allemandes comme candidats à des usines à IA. Au-delà du symbole, c'est la reconnaissance que les friches électro-intensives — raccordées, viabilisées, industrielles — sont devenues des actifs stratégiques du déploiement de l'IA.",
      p10: "À surveiller : les premiers sites retenus à l'issue de l'évaluation, les montages industriels qui en découleront, et des initiatives comparables sur d'anciennes centrales à charbon en Europe.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "AI Datacenters: Why NVIDIA Is Assessing Former German Nuclear Sites",
      description: "NVIDIA and PreussenElektra, an E.ON subsidiary, will assess eight former German nuclear plants as potential AI factory sites. Industrial land, high-voltage grid connections, existing infrastructure: electro-intensive brownfields are becoming strategic assets — and brown-to-green a core thesis.",
      tag: "Energy & Infrastructure",
      date: "October 28, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "A quiet but symbolic announcement: NVIDIA and PreussenElektra, E.ON's decommissioning subsidiary, will jointly assess whether former German nuclear power plants can host AI factories. Eight sites being dismantled, sharing what the market desperately seeks: industrial land, grid connections sized for power plants, and infrastructure already in place.",
      p1: "The principle is not to revive nuclear power — Germany shut down its last reactor in April 2023 — but to reuse what took decades to build: high-voltage connections, cooling water networks, land and the acceptance of industrial use. This is brown-to-green applied to the country's most electro-intensive sites.",
      p2: "The approach remains cautious: an open-ended assessment, with no investment decision or site selection, and decommissioning timelines running into the 2030s. Yet the signal matters: the world's leading AI chip supplier now looks at energy brownfields as reserves of capacity.",
      h2_1: "Why Electrical Brownfields Are Becoming Strategic",
      p3: "The AI bottleneck is no longer just the GPU: it is years of waiting for grid connections and permitting delays. A site already connected at very high voltage, with an industrial history, eliminates the two main queues. This is exactly what operators seek when capacity commitments are measured in gigawatts.",
      p4: "Europe is full of such assets: decommissioned coal or nuclear plants, steelworks, refineries. Their common point: power was already there. In a market where the available megawatt is the scarce resource, these brownfields are reserves of time as much as of land.",
      h2_2: "What This Changes for Investors",
      p5: "The revaluation of electro-intensive brownfields changes how balance sheets are read: sites booked as decommissioning liabilities can become productive assets again. PreussenElektra itself frames it as responsible reuse and new economic activity for the regions.",
      p6: "But assessment must stay cold-headed: a former power plant is not a turnkey datacenter. Turbine halls were not designed for high-density racks; cooling, substations and fiber must be rebuilt, under specific regulatory constraints. Brownfield creates value when conversion cost stays below the time saved — not automatically.",
      h2_3: "How We Apply This at FINXIA",
      p7: "This announcement directly validates our brown-to-green bias in the TITAN DC AI strategy: we target existing sites already powered and connected, whose transformation costs less and above all less time than greenfield. Seeing NVIDIA apply this reading grid to former nuclear plants confirms our thesis.",
      p8: "We also retain the discipline: site-by-site assessment — connection quality, water, land, regulatory framework — is exactly our selection process. And we stay on sites where transformation is achievable in the short term, not on ten-year decommissioning promises.",
      h2_4: "Key Takeaways",
      p9: "NVIDIA and PreussenElektra will assess eight former German nuclear plants as candidates for AI factories. Beyond the symbol, it is the recognition that electro-intensive brownfields — connected, serviced, industrial — have become strategic assets for AI deployment.",
      p10: "Worth watching: the first sites selected after the assessment, the industrial structures that follow, and similar initiatives on former coal plants across Europe.",
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
    "datePublished": "2026-10-28T09:00:00+01:00",
    "dateModified": "2026-10-28T09:00:00+01:00",
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
    "keywords": language === 'fr' ? "brown-to-green, datacenter, IA, NVIDIA, PreussenElektra, anciennes centrales nucléaires, raccordement électrique, friches industrielles, infrastructure IA" : "brown-to-green, datacenter, AI, NVIDIA, PreussenElektra, former nuclear sites, grid connection, brownfield, AI infrastructure"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/anciennes-centrales-nucleaires-datacenter-ia-nvidia-preussenelektra-brownfield-2026" : "https://finxiacapital.com/en/blog/former-nuclear-sites-ai-datacenter-nvidia-preussenelektra-brownfield-2026"
      }
    ]
  };

  return (
    <div data-testid="article-anciennes-centrales-nucleaires-datacenter-ia-nvidia-preussenelektra-brownfield-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/anciennes-centrales-nucleaires-datacenter-ia-nvidia-preussenelektra-brownfield-2026/" : "https://finxiacapital.com/en/blog/former-nuclear-sites-ai-datacenter-nvidia-preussenelektra-brownfield-2026/"}
        keywords={language === 'fr' ? "brown-to-green, datacenter, IA, NVIDIA, PreussenElektra, anciennes centrales nucléaires, raccordement électrique, friches industrielles, infrastructure IA" : "brown-to-green, datacenter, AI, NVIDIA, PreussenElektra, former nuclear sites, grid connection, brownfield, AI infrastructure"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/anciennes-centrales-nucleaires-datacenter-ia-nvidia-preussenelektra-brownfield-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/former-nuclear-sites-ai-datacenter-nvidia-preussenelektra-brownfield-2026/"
        hreflangDefault="https://finxiacapital.com/blog/anciennes-centrales-nucleaires-datacenter-ia-nvidia-preussenelektra-brownfield-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-28">
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
