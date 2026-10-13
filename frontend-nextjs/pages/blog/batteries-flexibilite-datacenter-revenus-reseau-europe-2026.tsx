import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleBatteriesFlexibilitePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Batteries et flexibilité : quand le datacenter devient un actif du réseau électrique européen",
      description: "Batteries géantes, effacement rémunéré, mécanismes de capacité : les datacenters ne sont plus seulement des consommateurs d'électricité, ils deviennent des actifs réseau. Une ligne de revenus que les modèles de valorisation ignorent encore.",
      tag: "Investment Strategy",
      date: "13 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Un datacenter possède déjà des batteries : celles de ses onduleurs, dimensionnées pour quelques minutes. Les étendre à quelques heures change leur statut — d'équipement de sécurité, elles deviennent un actif réseau rémunéré. Cette bascule est en train de créer une ligne de revenus que la plupart des modèles de valorisation ignorent encore.",
      p1: "Les mécanismes existent et paient. En France, le mécanisme de capacité et les services système de RTE rémunèrent l'effacement et la réserve ; au Royaume-Uni et en Irlande, les enchères de capacité et les services de fréquence sont ouverts aux batteries depuis des années. Pour un campus de 20 MW équipé de 10 MWh de stockage, les revenus cumulés — capacité, effacement, arbitrage, réserve — se situent typiquement entre 0,5 et 1 million d'euros par an selon le marché et le niveau d'engagement.",
      p2: "Les pionniers sont connus : Microsoft exploite ses batteries d'onduleurs pour les services réseau à Dublin depuis 2023, des agrégateurs nordiques intègrent des datacenters dans leurs portefeuilles de flexibilité, et les concepteurs d'AI factories dimensionnent désormais le stockage en même temps que les GPU. Ce qui était un cas d'école devient une pratique de conception.",
      h2_1: "Le stockage change de statut",
      p3: "Le déclencheur est économique : le prix des batteries lithium a été divisé par deux en trois ans, et les systèmes quatre heures sont devenus un produit industriel standard. Ajouter 5 à 10 MWh à un campus existant ne relève plus du prototype, mais d'un chantier d'extension classique avec des fournisseurs établis et des garanties de performance.",
      p4: "Le deuxième effet est stratégique : dans les zones de raccordement tendues — Île-de-France, Londres, Dublin, Amsterdam — un opérateur capable d'effacer sa consommation aux heures critiques remonte dans la file d'attente. La flexibilité devient un argument d'accès au réseau, parfois plus décisif que le prix du foncier.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "La flexibilité crée une ligne de revenus non corrélée au taux d'occupation : les mécanismes de capacité paient la disponibilité, pas le remplissage. Cette décorrélation améliore le profil de risque d'un actif, et elle est encore peu valorisée — peu de data rooms documentent ces revenus, ce qui crée une asymétrie d'information pour l'acheteur préparé.",
      p6: "La discipline s'impose : pas de capex batterie sans contrat. Les revenus de flexibilité dépendent de règles de marché qui évoluent, et seuls les engagements fermes — contrat avec le gestionnaire de réseau ou un agrégateur établi — doivent figurer dans le business plan. Les revenus d'arbitrage spéculatif restent de l'upside, pas de la base.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, la revue de flexibilité fait désormais partie de la due diligence : puissance souscrite, dimensionnement des onduleurs, éligibilité aux mécanismes de capacité français, espagnol et italien, et existence d'agrégateurs actifs sur la zone. Un actif éligible non engagé est un actif sous-valorisé — c'est exactement notre terrain.",
      p8: "Les transformations brown partent avec un avantage : la puissance souscrite et l'historique de consommation existent déjà, deux conditions d'accès aux mécanismes. Là où un greenfield attend son raccordement, un site brown rénové peut contractualiser sa flexibilité dans les premiers mois d'exploitation.",
      h2_4: "Ce qu'il faut retenir",
      p9: "Batteries longue durée, mécanismes de capacité, accès au réseau : la flexibilité transforme le datacenter en actif du système électrique, avec des revenus que les modèles classiques ignorent. L'acheteur qui sait les valoriser paie le bon prix — le vendeur qui les ignore laisse de la valeur sur la table.",
      p10: "À surveiller : l'élargissement des mécanismes de capacité espagnol et italien aux actifs de flexibilité distribués, et l'apparition — imminente — de la ligne « revenus flexibilité » dans les data rooms des actifs européens.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Batteries and Flexibility: When the Datacenter Becomes an Asset of the European Power Grid",
      description: "Giant batteries, paid demand response, capacity mechanisms: datacenters are no longer just power consumers, they are becoming grid assets. A revenue line that valuation models still ignore.",
      tag: "Investment Strategy",
      date: "October 13, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "A datacenter already owns batteries: those in its UPS systems, sized for a few minutes. Extending them to a few hours changes their status — from safety equipment, they become a paid grid asset. This shift is creating a revenue line that most valuation models still ignore.",
      p1: "The mechanisms exist and they pay. In France, the capacity mechanism and RTE's system services reward demand response and reserve; in the UK and Ireland, capacity auctions and frequency services have been open to batteries for years. For a 20 MW campus fitted with 10 MWh of storage, combined revenues — capacity, demand response, arbitrage, reserve — typically range between 0.5 and 1 million euros per year depending on the market and commitment level.",
      p2: "The pioneers are well known: Microsoft has been using its UPS batteries for grid services in Dublin since 2023, Nordic aggregators integrate datacenters into their flexibility portfolios, and AI factory designers now size storage alongside GPUs. What used to be a case study is becoming a design practice.",
      h2_1: "Storage Changes Status",
      p3: "The trigger is economic: lithium battery prices have halved in three years, and four-hour systems have become a standard industrial product. Adding 5 to 10 MWh to an existing campus is no longer a prototype, but a routine extension project with established suppliers and performance guarantees.",
      p4: "The second effect is strategic: in constrained grid connection zones — Île-de-France, London, Dublin, Amsterdam — an operator able to shed consumption at peak hours moves up the connection queue. Flexibility becomes an argument for grid access, sometimes more decisive than land price.",
      h2_2: "What This Changes for Investors",
      p5: "Flexibility creates a revenue line uncorrelated with occupancy: capacity mechanisms pay for availability, not utilization. This decorrelation improves an asset's risk profile, and it is still poorly priced — few data rooms document these revenues, creating an information asymmetry for the prepared buyer.",
      p6: "Discipline is required: no battery capex without a contract. Flexibility revenues depend on evolving market rules, and only firm commitments — a contract with the grid operator or an established aggregator — should feature in the business plan. Speculative arbitrage revenue remains upside, not base case.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, the flexibility review is now part of due diligence: subscribed power, UPS sizing, eligibility for the French, Spanish and Italian capacity mechanisms, and the presence of active aggregators in the area. An eligible but uncommitted asset is an undervalued asset — exactly our hunting ground.",
      p8: "Brown transformations start with an advantage: subscribed power and consumption history already exist, two conditions for accessing the mechanisms. Where a greenfield site waits for its connection, a renovated brown site can contract its flexibility within the first months of operation.",
      h2_4: "Key Takeaways",
      p9: "Long-duration batteries, capacity mechanisms, grid access: flexibility turns the datacenter into a power system asset, with revenues that conventional models ignore. The buyer who knows how to value them pays the right price — the seller who ignores them leaves value on the table.",
      p10: "Worth watching: the widening of the Spanish and Italian capacity mechanisms to distributed flexibility assets, and the imminent arrival of a 'flexibility revenue' line in the data rooms of European assets.",
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
    "datePublished": "2026-10-13T09:00:00+02:00",
    "dateModified": "2026-10-13T09:00:00+02:00",
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
    "articleSection": "Investment Strategy",
    "keywords": language === 'fr' ? "batteries, flexibilité, datacenter, effacement, mécanisme de capacité, investissement infrastructure IA, green datacenter" : "batteries, flexibility, datacenter, demand response, capacity mechanism, AI infrastructure investment, green datacenter"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/batteries-flexibilite-datacenter-revenus-reseau-europe-2026" : "https://finxiacapital.com/en/blog/batteries-flexibility-datacenter-grid-revenue-europe-2026"
      }
    ]
  };

  return (
    <div data-testid="article-batteries-flexibilite-datacenter-revenus-reseau-europe-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/batteries-flexibilite-datacenter-revenus-reseau-europe-2026/" : "https://finxiacapital.com/en/blog/batteries-flexibility-datacenter-grid-revenue-europe-2026/"}
        keywords={language === 'fr' ? "batteries, flexibilité, datacenter, effacement, mécanisme de capacité, investissement infrastructure IA, green datacenter" : "batteries, flexibility, datacenter, demand response, capacity mechanism, AI infrastructure investment, green datacenter"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/batteries-flexibilite-datacenter-revenus-reseau-europe-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/batteries-flexibility-datacenter-grid-revenue-europe-2026/"
        hreflangDefault="https://finxiacapital.com/blog/batteries-flexibilite-datacenter-revenus-reseau-europe-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-13">
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
