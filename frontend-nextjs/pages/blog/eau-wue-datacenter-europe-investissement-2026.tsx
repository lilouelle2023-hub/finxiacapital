import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleEauWuePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Eau et datacenters : le WUE, prochaine frontière de l'investissement numérique en Europe",
      description: "Après l'électricité, l'eau devient la contrainte numéro un des datacenters européens. EED, sécheresses en Espagne et en Italie, permis suspendus : le WUE entre dans la due diligence — et redistribue les valorisations.",
      tag: "Energy & Infrastructure",
      date: "7 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Après l'électricité, l'eau. Un datacenter refroidi par évaporation peut consommer autant d'eau qu'une ville de 10 000 habitants. En Espagne et en Italie, où la sécheresse devient structurelle, cette consommation transforme les permis — et bientôt les valorisations.",
      p1: "Quelques repères. Un mégawatt informatique refroidi par tour évaporative absorbe 25 à 30 millions de litres par an. Depuis 2024, la directive EED impose aux datacenters de plus de 500 kW de déclarer leur WUE — le water usage effectiveness, qui mesure les litres consommés par kilowattheure informatique. Comme le PUE il y a dix ans, l'indicateur sort de l'ombre.",
      p2: "Le terrain devance la réglementation. En Aragon, l'opposition locale a imposé un plafond hydrique à un projet hyperscale. En Catalogne comme en Castille, les déclarations d'utilité publique examinent désormais le plan eau au même titre que le raccordement électrique. Aux Pays-Bas, des permis ont été suspendus pour cette seule raison.",
      h2_1: "Les technologies qui divisent la consommation",
      p3: "Le refroidissement liquide direct-to-chip change l'équation : la chaleur part dans une boucle d'eau fermée, sans évaporation. Un rack GPU de 100 kW refroidi par liquide consomme 80 à 90 % d'eau en moins qu'une salle évaporative équivalente. L'adiabatique, lui, n'utilise l'eau que quelques centaines d'heures par an, les jours les plus chauds.",
      p4: "La géographie reste un choix technologique. Le free cooling nordique fonctionne à l'air presque toute l'année ; dans le sud de l'Espagne ou de l'Italie, seules les boucles fermées et le liquide permettent de tenir un WUE inférieur à 0,2 litre par kilowattheure — le seuil que les collectivités commencent à exiger.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "Le WUE entre en due diligence au même titre que le PUE. Un site évaporatif dans une zone de stress hydrique porte trois risques cumulés : refus de permis pour l'extension, renégociation des prélèvements en sécheresse, et coût de mise aux normes. Ces risques se chiffrent — et commencent à apparaître dans les décotes.",
      p6: "À l'inverse, un actif en boucle fermée ou en liquide dispose d'une double prime : acceptabilité locale immédiate et compatibilité avec les densités GPU, qui imposent de toute façon le refroidissement liquide. La contrainte eau et la contrainte densité se résolvent par la même technologie — il est rare qu'un investissement règle deux problèmes à la fois.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, la revue initiale inclut désormais un score eau : bassin versant, historique de sécheresse sur vingt ans, technologie de refroidissement installée et WUE cible après transformation. En Espagne et en Italie, l'absence de plan eau crédible est devenue un critère éliminatoire.",
      p8: "Nos transformations brown intègrent le refroidissement liquide dès la conception. Le surcoût est réel — de l'ordre de 10 à 15 % du budget technique — mais il sécurise le permis, la densité et la sortie. Sur un actif détenu dix ans, c'est le meilleur calcul du dossier.",
      h2_4: "Ce qu'il faut retenir",
      p9: "L'eau rejoint l'électricité au rang des contraintes structurantes du datacenter européen. EED, sécheresses, exigences locales : le WUE sera dans toutes les data rooms d'ici deux ans.",
      p10: "À surveiller : les premiers seuils WUE contraignants en Espagne et aux Pays-Bas, et l'apparition de la ligne « plan eau » dans les permis de construire des campus de plus de 50 MW.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Water and Datacenters: WUE, the Next Frontier of Digital Investment in Europe",
      description: "After electricity, water is becoming the top constraint for European datacenters. EED, droughts in Spain and Italy, suspended permits: WUE enters due diligence — and reshuffles valuations.",
      tag: "Energy & Infrastructure",
      date: "October 7, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "After electricity, water. An evaporative-cooled datacenter can consume as much water as a town of 10,000 people. In Spain and Italy, where drought is becoming structural, this consumption is reshaping permits — and soon valuations.",
      p1: "A few benchmarks. One IT megawatt cooled by evaporative towers absorbs 25 to 30 million litres per year. Since 2024, the EED directive has required datacenters above 500 kW to report their WUE — water usage effectiveness, the litres consumed per IT kilowatt-hour. Like PUE ten years ago, the metric is stepping out of the shadows.",
      p2: "The field is ahead of regulation. In Aragon, local opposition imposed a water cap on a hyperscale project. In Catalonia as in Castile, public-interest reviews now examine the water plan alongside the grid connection. In the Netherlands, permits have been suspended for this reason alone.",
      h2_1: "Technologies That Cut Consumption",
      p3: "Direct-to-chip liquid cooling changes the equation: heat leaves in a closed water loop, with no evaporation. A 100 kW GPU rack cooled by liquid consumes 80 to 90% less water than an equivalent evaporative hall. Adiabatic systems use water only a few hundred hours per year, on the hottest days.",
      p4: "Geography remains a technology choice. Nordic free cooling runs on air almost year-round; in southern Spain or Italy, only closed loops and liquid cooling can hold WUE below 0.2 litres per kilowatt-hour — the threshold municipalities are starting to demand.",
      h2_2: "What This Changes for Investors",
      p5: "WUE enters due diligence alongside PUE. An evaporative site in a water-stressed area carries three cumulative risks: permit refusal for expansion, renegotiated abstraction rights during droughts, and compliance retrofit costs. These risks can be priced — and are starting to show up in discounts.",
      p6: "Conversely, a closed-loop or liquid-cooled asset earns a double premium: immediate local acceptance and compatibility with GPU densities, which require liquid cooling anyway. The water constraint and the density constraint are solved by the same technology — it is rare for one investment to fix two problems at once.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, the initial review now includes a water score: watershed, twenty-year drought history, installed cooling technology and target WUE after transformation. In Spain and Italy, the absence of a credible water plan has become an eliminatory criterion.",
      p8: "Our brown transformations integrate liquid cooling from the design stage. The extra cost is real — around 10 to 15% of the technical budget — but it secures the permit, the density and the exit. On an asset held for ten years, it is the best calculation in the file.",
      h2_4: "Key Takeaways",
      p9: "Water joins electricity as a structural constraint on the European datacenter. EED, droughts, local requirements: WUE will be in every data room within two years.",
      p10: "Worth watching: the first binding WUE thresholds in Spain and the Netherlands, and the appearance of a water-plan line in building permits for campuses above 50 MW.",
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
    "datePublished": "2026-10-07T09:00:00+02:00",
    "dateModified": "2026-10-07T09:00:00+02:00",
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
    "keywords": language === 'fr' ? "eau, WUE, datacenter, refroidissement liquide, green datacenter, EED, investissement infrastructure IA" : "water, WUE, datacenter, liquid cooling, green datacenter, EED, AI infrastructure investment"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/eau-wue-datacenter-europe-investissement-2026" : "https://finxiacapital.com/en/blog/water-wue-datacenter-europe-investment-2026"
      }
    ]
  };

  return (
    <div data-testid="article-eau-wue-datacenter-europe-investissement-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/eau-wue-datacenter-europe-investissement-2026/" : "https://finxiacapital.com/en/blog/water-wue-datacenter-europe-investment-2026/"}
        keywords={language === 'fr' ? "eau, WUE, datacenter, refroidissement liquide, green datacenter, EED, investissement infrastructure IA" : "water, WUE, datacenter, liquid cooling, green datacenter, EED, AI infrastructure investment"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/eau-wue-datacenter-europe-investissement-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/water-wue-datacenter-europe-investment-2026/"
        hreflangDefault="https://finxiacapital.com/blog/eau-wue-datacenter-europe-investissement-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-07">
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
