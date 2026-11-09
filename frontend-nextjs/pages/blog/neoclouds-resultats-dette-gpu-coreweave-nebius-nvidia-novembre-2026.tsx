import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleNeocloudsResultatsNovembrePage() {
  const { language } = useLanguage();

  const content = {
      "fr": {
            "title": "Dette GPU : ce que les résultats de CoreWeave, Nebius et NVIDIA diront vraiment",
            "description": "Semaine du 10 au 17 novembre 2026 : Nebius, CoreWeave, IREN puis NVIDIA publient leurs résultats. Dette de 35,1 Md$, intérêts à 24,9 % du chiffre d'affaires, obligations à 80 cents : ce que les filings disent du modèle néocloud.",
            "tag": "Market Analysis",
            "date": "9 novembre 2026",
            "readTime": "7 min de lecture",
            "backToBlog": "Retour au blog",
            "lead": "Du 10 au 17 novembre, toute la chaîne de valeur de l'IA passe au scanner : Nebius et CoreWeave publient le 10, IREN et NVIDIA le 17. Après la tempête d'octobre — CoreWeave a touché un plus bas historique à 44 dollars le 5 novembre —, ce ne sont plus les promesses qui compteront, mais les lignes des filings.",
            "p1": "Commençons par les chiffres exacts, tirés des résultats du deuxième trimestre. CoreWeave portait 35,1 milliards de dollars de dette au bilan fin juin, en hausse de 64 % en six mois, contre 5,5 milliards de trésorerie. Les intérêts ont absorbé 24,9 % du chiffre d'affaires trimestriel. Les capitaux propres atteignent 5 milliards pour 72 milliards de passif total. Côté crédit, les obligations se négocient autour de 80 cents et les CDS dépassent 1 100 points de base : le marché price un risque de défaut, pas un simple ralentissement.",
            "p2": "Deuxième enseignement des documents officiels : à GPU identiques, le prix de la dette dépend du client. La facilité DDTL 4.0 de CoreWeave, adossée à un contrat investment grade, est sortie à SOFR + 2,25 % avec une note A3. La DDTL 5.0, garantie par des clients non notés, s'est faite à SOFR + 4,50 % en Ba2. Les obligations senior non garanties paient 9,6 à 9,75 %. Un locataire solvable fait baisser le coût de financement de 225 à 300 points de base : il vaut plus que son propre chiffre d'affaires.",
            "h2_1": "Le carnet de commandes n'est pas un revenu",
            "p3": "CoreWeave affiche 103,7 milliards de dollars d'obligations contractuelles restantes, soit dix fois ses revenus annualisés. Nscale, dans son document d'introduction en bourse, va plus loin : 103,4 milliards de valeur contractuelle totale pour 140,6 millions de revenus semestriels. Nebius revendique plus de 40 milliards d'engagements clients, soit plus de dix-sept fois sa base de revenus annualisée. Un carnet de commandes n'est pas un chiffre d'affaires : c'est un calendrier de construction à financer.",
            "p4": "Les bilans, eux, diffèrent profondément. Nebius porte 8,5 milliards de dette, quasiment couverts par 8 milliards de trésorerie, et a collecté environ 6 milliards de revenus différés prépayés par ses clients — du financement sans intérêts. CoreWeave, à l'inverse, a financé 93 % de ses levées du deuxième trimestre par la dette. Même secteur, même matériel, deux risques très différents.",
            "h2_2": "Ce que Gartner a vraiment dit le 14 octobre",
            "p5": "Le cabinet prévoit que plus de 80 % des néoclouds cesseront leurs opérations indépendantes d'ici 2030, et estime que plus de 3 500 milliards de dollars de dépenses d'infrastructure IA seraient exposés à des dépréciations si le rythme d'investissement se maintient. Pour couvrir capex, coût du financement et un rendement de 12 % sur le capital, il faudrait 8 500 milliards de revenus cumulés d'ici 2030 — contre 3 600 milliards au mieux attendus.",
            "p6": "Nuance importante : cesser d'exister en indépendant ne signifie pas faire défaut. Les structures de dette adossée aux GPU isolent le matériel, le contrat client et le bail dans une filiale dédiée : en cas de rachat, le collatéral survit. Le risque de consolidation décrit par Gartner est porté par les actionnaires. Les prêteurs garantis, eux, l'ont déjà tarifé — c'est précisément ce que dit l'écart entre SOFR + 2,25 % et 9,75 %.",
            "h2_3": "Ce que nous regarderons cette semaine",
            "p7": "Chez CoreWeave mardi : la charge d'intérêts face à la guidance de 860 à 940 millions de dollars, la discipline sur le capex de 35 à 39 milliards, les renouvellements de contrats — et le cours de l'obligation 2032 autour du seuil de 80 cents. Chez Nebius : les prépaiements clients et tout nouveau financement garanti. Chez NVIDIA le 17 : la première lecture de la demande de GPU depuis la tempête d'octobre.",
            "p8": "Notre grille de lecture chez FINXIA reste inchangée. La valeur d'un actif IA se mesure à la qualité de son locataire et à la durée de son contrat, pas au nombre de GPU qu'il héberge. C'est le principe de TITAN DC AI : posséder l'enveloppe physique, la louer longtemps à des contreparties solvables, et laisser le risque technologique à ceux qui choisissent de le porter.",
            "h2_4": "Ce qu'il faut retenir",
            "p9": "Cette semaine tranchera entre deux scénarios : une consolidation ordonnée du secteur, ou une crise de refinancement si le crédit se referme encore. Dans les deux cas, la couche la plus défendable de la chaîne reste la même — le foncier, le bâtiment, le raccordement électrique, le bail long.",
            "p10": "Trois chiffres à garder en tête mardi : 35,1 milliards de dette, 24,9 % d'intérêts rapportés au chiffre d'affaires, 80 cents sur l'obligation. Si la dette passe durablement sous ce seuil, la consolidation s'accélère. Si les carnets tiennent, octobre restera un épisode de valorisation, pas le début d'une crise systémique.",
            "authorBio": "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
            "learnMoreTitle": "En savoir plus",
            "link1Title": "Nos Stratégies",
            "link1Desc": "Découvrez TITAN et nos 3 autres pôles d'investissement",
            "link2Title": "Approche Européenne",
            "link2Desc": "France, Espagne, Italie : nos marchés cibles européens"
      },
      "en": {
            "title": "GPU Debt: What CoreWeave, Nebius and NVIDIA Earnings Will Really Say",
            "description": "November 10-17, 2026: Nebius, CoreWeave, IREN and NVIDIA report. $35.1bn of debt, interest at 24.9% of revenue, bonds at 80 cents: what the filings actually say about the neocloud model.",
            "tag": "Market Analysis",
            "date": "November 9, 2026",
            "readTime": "7 min read",
            "backToBlog": "Back to blog",
            "lead": "From November 10 to 17, the entire AI value chain goes under the scanner: Nebius and CoreWeave report on the 10th, IREN and NVIDIA on the 17th. After October's storm — CoreWeave hit an all-time low of $44 on November 5 — filings will matter more than promises.",
            "p1": "Start with exact Q2 figures. CoreWeave carried $35.1bn of debt at end-June, up 64% in six months, against $5.5bn of cash. Interest absorbed 24.9% of quarterly revenue. Equity stands at $5bn against $72bn of total liabilities. Bonds trade near 80 cents and CDS exceed 1,100 basis points: credit markets are pricing default risk, not a slowdown.",
            "p2": "Second filing lesson: identical GPUs, different debt prices. CoreWeave's DDTL 4.0, backed by an investment-grade contract, priced at SOFR + 2.25% rated A3; DDTL 5.0, backed by unrated customers, at SOFR + 4.50% rated Ba2; senior unsecured notes pay 9.6-9.75%. A creditworthy tenant cuts funding costs by 225-300 basis points — worth more than its own revenue.",
            "h2_1": "A Backlog Is Not Revenue",
            "p3": "CoreWeave shows $103.7bn of remaining performance obligations, ten times annualized revenue. Nscale's IPO filing goes further: $103.4bn of total contract value against $140.6m of half-year revenue. Nebius claims over $40bn of customer commitments, more than seventeen times its annualized base. A backlog is not revenue: it is a construction schedule to finance.",
            "p4": "Balance sheets differ deeply. Nebius carries $8.5bn of debt almost fully covered by $8bn of cash, plus roughly $6bn of customer-prepaid deferred revenue — interest-free funding. CoreWeave, by contrast, financed 93% of its Q2 raises with debt. Same sector, same hardware, very different risks.",
            "h2_2": "What Gartner Actually Said on October 14",
            "p5": "Gartner expects over 80% of neoclouds to cease independent operations by 2030, and estimates more than $3.5 trillion of AI infrastructure spending is exposed to impairments at current capex pace. Covering capex, financing costs and a 12% return would require $8.5 trillion of cumulative revenue through 2030 — versus $3.6 trillion expected at best.",
            "p6": "Important nuance: ceasing independent operations is not defaulting. GPU-backed debt structures ring-fence the hardware, customer contract and lease in a dedicated subsidiary: collateral survives an acquisition. The consolidation risk Gartner describes sits with equity holders; secured lenders already priced it — that is exactly what the gap between SOFR + 2.25% and 9.75% says.",
            "h2_3": "What We Will Watch This Week",
            "p7": "At CoreWeave on Tuesday: interest expense versus the $860-940m guidance, discipline on the $35-39bn capex plan, contract renewals — and the 2032 bond around the 80-cent line. At Nebius: customer prepayments and any new secured financing. At NVIDIA on the 17th: the first read on GPU demand since October's storm.",
            "p8": "Our reading framework at FINXIA is unchanged. An AI asset's value is measured by tenant quality and contract duration, not by the GPU count it hosts. That is the TITAN DC AI principle: own the physical envelope, lease it long to solvent counterparties, and leave technology risk to those who choose to carry it.",
            "h2_4": "Key Takeaways",
            "p9": "This week will decide between two scenarios: orderly sector consolidation, or a refinancing crisis if credit tightens further. Either way, the most defensible layer of the chain stays the same — land, building, grid connection, long lease.",
            "p10": "Three numbers to keep in mind on Tuesday: $35.1bn of debt, interest at 24.9% of revenue, 80 cents on the bond. If debt trades durably below that line, consolidation accelerates. If backlogs hold, October will remain a valuation episode, not the start of a systemic crisis.",
            "authorBio": "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
            "learnMoreTitle": "Learn more",
            "link1Title": "Our Strategies",
            "link1Desc": "Discover TITAN and our 3 other investment poles",
            "link2Title": "European Approach",
            "link2Desc": "France, Spain, Italy: our European target markets"
      }
};

  const t = content[language];
  const frUrl = "https://finxiacapital.com/blog/neoclouds-resultats-dette-gpu-coreweave-nebius-nvidia-novembre-2026/";
  const enUrl = "https://finxiacapital.com/en/blog/neocloud-earnings-gpu-debt-coreweave-nebius-nvidia-november-2026/";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-11-09T09:00:00+01:00",
    "dateModified": "2026-11-09T09:00:00+01:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "worksFor": { "@type": "Organization", "name": "Finxia Capital", "url": "https://finxiacapital.com" }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Finxia Capital",
      "logo": { "@type": "ImageObject", "url": "https://finxiacapital.com/logo-finxia.png" }
    },
    "articleSection": "Market Analysis",
    "keywords": language === 'fr' ? "neocloud, dette GPU, CoreWeave, Nebius, NVIDIA, datacenter, IA, investissement, Gartner" : "neocloud, GPU debt, CoreWeave, Nebius, NVIDIA, datacenter, AI, investment, Gartner"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": language === 'fr' ? "Accueil" : "Home", "item": language === 'fr' ? "https://finxiacapital.com" : "https://finxiacapital.com/en/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": language === 'fr' ? "https://finxiacapital.com/blog" : "https://finxiacapital.com/en/blog" },
      { "@type": "ListItem", "position": 3, "name": t.title, "item": language === 'fr' ? frUrl : enUrl }
    ]
  };

  return (
    <div data-testid="article-neoclouds-resultats-novembre-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? frUrl : enUrl}
        keywords={articleSchema.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr={frUrl}
        hreflangEn={enUrl}
        hreflangDefault={frUrl}
      />
      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? "/blog" : "/en/blog"} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider"><Tag className="w-4 h-4" />{t.tag}</span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-11-09"><Calendar className="w-4 h-4" />{t.date}</time>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">{t.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">{t.title}</h1>
            <p className="text-slate-500 text-sm">{language === 'fr' ? 'Par Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital' : 'By Lila Benhammou, Co-Founder & CIO — FINXIA Capital'}</p>
          </div>
        </header>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">{t.lead}</p>
              <p>{t.p1}</p><p>{t.p2}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_1}</h2>
              <p>{t.p3}</p><p>{t.p4}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_2}</h2>
              <p>{t.p5}</p><p>{t.p6}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p7}</p><p>{t.p8}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_4}</h2>
              <p>{t.p9}</p><p>{t.p10}</p>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-200"><p className="text-slate-600 text-sm leading-relaxed"><strong className="text-slate-900">Lila Benhammou</strong> {t.authorBio}</p></div>
            <div className="mt-16 pt-8 border-t border-slate-200">
              <h3 className="font-serif text-xl mb-6">{t.learnMoreTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={language === 'fr' ? "/strategies" : "/en/strategies"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]"><h4 className="font-medium text-slate-900 mb-2">{t.link1Title}</h4><p className="text-slate-600 text-sm">{t.link1Desc}</p></Link>
                <Link href={language === 'fr' ? "/european-approach" : "/en/european-approach"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]"><h4 className="font-medium text-slate-900 mb-2">{t.link2Title}</h4><p className="text-slate-600 text-sm">{t.link2Desc}</p></Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
