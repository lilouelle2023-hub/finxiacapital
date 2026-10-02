import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleChaleurFatalePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Chaleur fatale des datacenters : comment la réglementation européenne transforme un déchet en revenu",
      description: "La directive EED impose aux datacenters d'étudier la valorisation de leur chaleur fatale — l'Allemagne la rend obligatoire dès 2026. Réseaux urbains, revenus complémentaires, décote pour les réfractaires : le nouveau calcul de l'investisseur.",
      tag: "Energy & Infrastructure",
      date: "2 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Un datacenter est une machine à produire de la chaleur. Chaque mégawatt consommé par les serveurs ressort sous forme d'air chaud ou d'eau tiède. Longtemps rejetée, cette chaleur fatale devient un actif : la réglementation européenne impose désormais d'étudier sa valorisation — et les opérateurs qui s'y prennent tôt en tirent un revenu.",
      p1: "La directive EED, applicable depuis 2024, oblige tout datacenter de plus de 500 kW à documenter sa performance énergétique, et au-delà d'un mégawatt à réaliser une étude de faisabilité sur la réutilisation de sa chaleur. En Allemagne, la loi sur l'efficacité énergétique va plus loin : les sites ouverts après juillet 2026 devront afficher un taux de réutilisation de chaleur de 10 %, puis 20 % à compter de 2028.",
      p2: "Le marché suit la réglementation. Paris, Stockholm, Francfort : les réseaux de chaleur urbains signent des contrats de vingt ans avec des opérateurs pour capter des boucles d'eau à 30 ou 40 degrés, qui alimentent piscines, logements et serres après un passage en pompe à chaleur.",
      h2_1: "Un gisement sous-estimé",
      p3: "Un campus de 10 MW rejette l'équivalent des besoins de chauffage de 8 000 à 12 000 logements. À 20 ou 30 euros le mégawattheure vendu au réseau, cela représente un à deux millions d'euros de revenus annuels — tout en améliorant les indicateurs ERF qui entrent dans les rapports réglementaires.",
      p4: "Le refroidissement liquide change la donne. Les racks GPU à 100 kW et plus fonctionnent en boucle d'eau directe : la chaleur sort à des températures bien plus exploitables que l'air chaud des salles traditionnelles. Ce qui était une contrainte de densité devient un argument de valorisation.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "Un datacenter raccordé à un réseau de chaleur se lit comme un actif à deux lignes de revenus : la colocation d'un côté, la vente d'énergie de l'autre. Cette deuxième ligne stabilise les flux et améliore la qualité du dossier auprès des banques et des acheteurs institutionnels.",
      p6: "À l'inverse, un site incapable de valoriser sa chaleur dans une zone dense supportera une décote croissante : permis plus difficiles, acceptabilité locale fragile, et bientôt — en Allemagne — non-conformité pure et simple. Le critère entre dans la due diligence au même titre que le PUE ou le raccordement.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, la cartographie de la chaleur fait partie de la revue initiale : présence d'un réseau urbain à moins d'un kilomètre, température de boucle atteignable, et discussions avec le gestionnaire de réseau de chaleur avant toute offre.",
      p8: "Nos actifs brown en zone urbaine dense — France, Espagne, Italie — sont les mieux placés : ils disposent déjà de la puissance et se trouvent là où vivent les futurs clients de la chaleur. La transformation intègre d'emblée les échangeurs et le refroidissement liquide qui rendent la valorisation possible.",
      h2_4: "Ce qu'il faut retenir",
      p9: "La chaleur fatale passe du statut de déchet à celui de produit. Réglementation EED, exigences allemandes, contrats de long terme avec les réseaux urbains : le mouvement est engagé et il rémunère les pionniers.",
      p10: "À surveiller : la transposition française et italienne des exigences de réutilisation, et les premières transactions de datacenters où la ligne « vente de chaleur » apparaît explicitement dans le modèle de valorisation.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Datacenter Waste Heat: How European Regulation Turns a Byproduct into Revenue",
      description: "The EED directive forces datacenters to study waste-heat reuse — Germany makes it mandatory from 2026. Urban networks, additional revenue, discounts for laggards: the investor's new calculus.",
      tag: "Energy & Infrastructure",
      date: "October 2, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "A datacenter is a heat-producing machine. Every megawatt consumed by servers comes out as hot air or warm water. Long discarded, this waste heat is becoming an asset: European regulation now requires operators to study its reuse — and early movers are turning it into revenue.",
      p1: "The EED directive, in force since 2024, requires every datacenter above 500 kW to document its energy performance, and those above one megawatt to conduct a waste-heat reuse feasibility study. In Germany, the Energy Efficiency Act goes further: sites opened after July 2026 must show a 10% heat reuse rate, rising to 20% from 2028.",
      p2: "The market is following regulation. Paris, Stockholm, Frankfurt: district heating networks are signing twenty-year contracts with operators to capture 30-to-40-degree water loops that feed pools, housing and greenhouses after a heat-pump lift.",
      h2_1: "An Underestimated Resource",
      p3: "A 10 MW campus rejects the heating equivalent of 8,000 to 12,000 homes. At 20 to 30 euros per megawatt-hour sold to the network, that is one to two million euros of annual revenue — while improving the ERF metrics that feed regulatory reports.",
      p4: "Liquid cooling changes the game. GPU racks at 100 kW and above run on direct water loops: heat exits at far more usable temperatures than the hot air of traditional halls. What was a density constraint becomes a valuation argument.",
      h2_2: "What This Changes for Investors",
      p5: "A datacenter connected to a heat network reads like a two-revenue-line asset: colocation on one side, energy sales on the other. This second line stabilizes cash flows and strengthens the file with banks and institutional buyers.",
      p6: "Conversely, a site unable to reuse its heat in a dense area will carry a growing discount: harder permits, fragile local acceptance, and soon — in Germany — outright non-compliance. The criterion now sits in due diligence alongside PUE and grid connection.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, heat mapping is part of the initial review: a district network within one kilometre, achievable loop temperature, and discussions with the heat network operator before any offer.",
      p8: "Our brown assets in dense urban areas — France, Spain, Italy — are best placed: they already hold the power capacity and sit where future heat customers live. Transformation integrates heat exchangers and liquid cooling from day one.",
      h2_4: "Key Takeaways",
      p9: "Waste heat is shifting from byproduct to product. EED regulation, German requirements, long-term contracts with urban networks: the movement is underway and it rewards pioneers.",
      p10: "Worth watching: the French and Italian transposition of reuse requirements, and the first datacenter transactions where a heat-sales line appears explicitly in the valuation model.",
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
    "datePublished": "2026-10-02T09:00:00+02:00",
    "dateModified": "2026-10-02T09:00:00+02:00",
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
    "keywords": language === 'fr' ? "chaleur fatale, datacenter, EED, green datacenter, refroidissement liquide, efficacité énergétique, investissement datacenter Europe" : "waste heat, datacenter, EED, green datacenter, liquid cooling, energy efficiency, datacenter investment Europe"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/chaleur-fatale-datacenters-europe-eed-investissement-2026" : "https://finxiacapital.com/en/blog/chaleur-fatale-datacenters-europe-eed-investissement-2026"
      }
    ]
  };

  return (
    <div data-testid="article-chaleur-fatale-datacenters-europe-eed-investissement-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/chaleur-fatale-datacenters-europe-eed-investissement-2026/" : "https://finxiacapital.com/en/blog/chaleur-fatale-datacenters-europe-eed-investissement-2026/"}
        keywords={language === 'fr' ? "chaleur fatale, datacenter, EED, green datacenter, refroidissement liquide, efficacité énergétique, investissement datacenter Europe" : "waste heat, datacenter, EED, green datacenter, liquid cooling, energy efficiency, datacenter investment Europe"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/chaleur-fatale-datacenters-europe-eed-investissement-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/chaleur-fatale-datacenters-europe-eed-investissement-2026/"
        hreflangDefault="https://finxiacapital.com/blog/chaleur-fatale-datacenters-europe-eed-investissement-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-02">
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
