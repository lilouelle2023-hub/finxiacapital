import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleDatacenterHierarchiePreneursPage() {
  const { language } = useLanguage();

  const content = {
      "fr": {
            "title": "Datacenters : la hiérarchie des preneurs, des GAFAM à Cerebras en passant par les néoclouds",
            "description": "GAFAM en signature-obligation, NVIDIA en faiseur de marché, Cerebras en preneur à fort potentiel concentré, néoclouds sous surveillance : comment hiérarchiser la qualité des contreparties d'un datacenter en 2026.",
            "tag": "Market Analysis",
            "date": "9 novembre 2026",
            "readTime": "7 min de lecture",
            "backToBlog": "Retour au blog",
            "lead": "Le prix de la dette GPU l'a montré cet automne : à matériel identique, tout dépend de qui signe le contrat. SOFR + 2,25 % pour un locataire investment grade, SOFR + 4,50 % pour un client non noté, 9,75 % en non garanti. Pour un propriétaire de datacenter, la hiérarchie des preneurs est devenue la première variable de risque — devant le PUE, devant le prix du foncier.",
            "p1": "Au sommet, les GAFAM et hyperscalers notés — Microsoft, Google, Amazon, Meta, Oracle. Leur signature transforme un bail en actif quasi obligataire : c'est ce qui a permis à Applied Digital de contracter 300 MW sur quinze ans pour 7,5 milliards de dollars, et au marché des ABS d'accepter les baux hyperscalers comme collatéral. Le cap rate de 5,5 à 6,5 % payé sur ces actifs est le prix de cette qualité de signature.",
            "p2": "Juste en dessous, une catégorie nouvelle : les fabricants de puces devenus contreparties. NVIDIA a accepté en septembre 2025 de racheter jusqu'à 6,3 milliards de dollars de capacité inutilisée de CoreWeave jusqu'en 2032 — une garantie de demande qui soutient directement le financement du locataire. Puis, en août 2026, NVIDIA a structuré avec Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs et KKR des plateformes destinées à mobiliser plus de 500 milliards de dollars de capital tiers pour l'infrastructure IA.",
            "h2_1": "Le cas Cerebras : preneur d'avenir, concentration à surveiller",
            "p3": "Cerebras illustre la troisième marche. Le fabricant de puces wafer-scale est entré au Nasdaq en mai 2026 en levant 5,55 milliards de dollars, fort d'un contrat-cadre avec OpenAI évalué à plus de 10 milliards pour 750 MW de capacité d'inférence, extensible à 2 GW d'ici 2030, et d'un accord-cadre avec AWS. La société déploie ses propres datacenters, y compris en France et dans les pays nordiques — c'est un preneur potentiel de premier plan pour l'Europe.",
            "p4": "Mais le dossier impose la vigilance : 86 % du chiffre d'affaires 2025 provenait de deux entités émiraties, la guidance de marge brute 2026 a été abaissée à 38-41 % dès le premier trimestre post-IPO — l'action a perdu 20 % ce jour-là — et la société loue temporairement de la capacité à des tiers le temps de construire la sienne. Un preneur solide en devenir, pas encore une signature-obligation. La bonne structure : bail ferme mais cautionné, avec des jalons de livraison.",
            "h2_2": "Les néoclouds : la marche sous surveillance",
            "p5": "Au bas de l'échelle de crédit, les néoclouds à forte dette. Les chiffres sont désormais publics : CoreWeave porte 35,1 milliards de dollars de dette, ses obligations cotent autour de 80 cents, ses CDS dépassent 1 100 points de base. Gartner prévoit que 80 % des acteurs du segment cesseront d'exister en indépendants d'ici 2030. Louer à un néocloud n'est pas interdit — cela se structure : prépaiements, dépôts de garantie, jalons de livraison, et un plan B de re-commercialisation de l'actif.",
            "p6": "La leçon de l'échelle des taux est limpide : la qualité du preneur ne change pas seulement le risque de loyer impayé, elle change le coût de tout le capital de l'actif. Un bail signé par un GAFAM fait baisser la dette de 225 à 300 points de base ; un bail signé par un néocloud fragile peut rendre l'actif infinançable.",
            "h2_3": "Notre grille de lecture chez FINXIA",
            "p7": "Nous notons chaque contrepartie sur quatre axes : la solvabilité autonome (survit-elle à une consolidation ?), la diversité de sa clientèle, la part de ses revenus contractés, et sa flexibilité technique — un preneur multi-architectures expose moins l'actif à l'obsolescence d'un seul type de puce.",
            "p8": "Dans TITAN DC AI, cette discipline se traduit par des baux longs avec des opérateurs de cloud souverain, des hébergeurs de confiance et des entreprises industrielles — des signatures moins spectaculaires qu'un néocloud en croissance, mais dont la solidité traverse les cycles. C'est le sens de notre article sur la sortie : un actif n'est liquide que si son locataire l'est.",
            "h2_4": "Ce qu'il faut retenir",
            "p9": "La hiérarchie 2026 des preneurs tient en quatre étages : GAFAM en signature-obligation ; fabricants de puces en faiseurs de marché (NVIDIA) ou en preneurs d'avenir à structurer (Cerebras) ; néoclouds sous surveillance, à n'accepter qu'avec des protections fortes ; et acteurs non notés, à refuser sauf garantie externe.",
            "p10": "Le réflexe à adopter avant tout bail : lire la contrepartie comme un créancier, pas comme un commercial. Le loyer affiché n'est qu'une promesse ; sa valeur dépend de la probabilité que celui qui l'a signée soit encore là dans dix ans.",
            "authorBio": "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
            "learnMoreTitle": "En savoir plus",
            "link1Title": "Nos Stratégies",
            "link1Desc": "Découvrez TITAN et nos 3 autres pôles d'investissement",
            "link2Title": "Approche Européenne",
            "link2Desc": "France, Espagne, Italie : nos marchés cibles européens"
      },
      "en": {
            "title": "Datacenters: The Tenant Hierarchy, from GAFAM to Cerebras via Neoclouds",
            "description": "GAFAM as bond-grade signatures, NVIDIA as market maker, Cerebras as high-potential concentrated tenant, neoclouds on watch: how to rank datacenter counterparty quality in 2026.",
            "tag": "Market Analysis",
            "date": "November 9, 2026",
            "readTime": "7 min read",
            "backToBlog": "Back to blog",
            "lead": "GPU debt pricing showed it this autumn: with identical hardware, everything depends on who signs. SOFR + 2.25% for an investment-grade tenant, SOFR + 4.50% for an unrated customer, 9.75% unsecured. For a datacenter owner, the tenant hierarchy has become the first risk variable — ahead of PUE, ahead of land price.",
            "p1": "At the top: rated GAFAM and hyperscalers — Microsoft, Google, Amazon, Meta, Oracle. Their signature turns a lease into a quasi-bond asset: it allowed Applied Digital to contract 300 MW over fifteen years for $7.5bn, and the ABS market to accept hyperscale leases as collateral. The 5.5-6.5% cap rate paid on these assets is the price of signature quality.",
            "p2": "Just below, a new category: chip makers as counterparties. In September 2025 NVIDIA agreed to buy back up to $6.3bn of CoreWeave's unused capacity through 2032 — a demand guarantee directly supporting the tenant's financing. Then in August 2026, NVIDIA structured with Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs and KKR platforms to mobilise over $500bn of third-party capital for AI infrastructure.",
            "h2_1": "The Cerebras Case: Future Tenant, Concentration to Watch",
            "p3": "Cerebras illustrates the third tier. The wafer-scale chip maker listed on Nasdaq in May 2026, raising $5.55bn, backed by a framework agreement with OpenAI valued above $10bn for 750 MW of inference capacity, expandable to 2 GW by 2030, plus an AWS term sheet. The company is deploying its own datacenters, including in France and the Nordics — a potentially first-rate tenant for Europe.",
            "p4": "But the file demands vigilance: 86% of 2025 revenue came from two UAE entities, FY2026 gross margin guidance was cut to 38-41% at the first post-IPO quarter — the stock fell 20% that day — and the company is temporarily renting third-party capacity while building its own. A solid tenant in the making, not yet a bond-grade signature. The right structure: a firm lease with guarantees and delivery milestones.",
            "h2_2": "Neoclouds: The Tier on Watch",
            "p5": "At the bottom of the credit scale, high-debt neoclouds. Figures are now public: CoreWeave carries $35.1bn of debt, its bonds trade near 80 cents, its CDS exceed 1,100 basis points. Gartner expects 80% of the segment to cease independent operations by 2030. Leasing to a neocloud is not forbidden — it must be structured: prepayments, security deposits, delivery milestones, and an asset re-letting plan B.",
            "p6": "The rate ladder's lesson is clear: tenant quality changes not only the default risk on rent, but the cost of all the asset's capital. A GAFAM-signed lease cuts debt costs by 225-300 basis points; a lease signed by a fragile neocloud can render the asset unfinanceable.",
            "h2_3": "Our Reading Framework at FINXIA",
            "p7": "We score every counterparty on four axes: standalone solvency (does it survive consolidation?), customer diversity, share of contracted revenue, and technical flexibility — a multi-architecture tenant exposes the asset less to single-chip obsolescence.",
            "p8": "Within TITAN DC AI this discipline means long leases with sovereign cloud operators, trusted hosters and industrial companies — signatures less spectacular than a growing neocloud, but whose strength crosses cycles. That is the point of our exit article: an asset is only as liquid as its tenant.",
            "h2_4": "Key Takeaways",
            "p9": "The 2026 tenant hierarchy has four floors: GAFAM as bond-grade signatures; chip makers as market makers (NVIDIA) or future tenants to structure (Cerebras); neoclouds on watch, acceptable only with strong protections; and unrated players, refused absent external guarantees.",
            "p10": "The reflex to adopt before any lease: read the counterparty like a creditor, not like a salesperson. The advertised rent is only a promise; its value depends on the probability that its signatory is still there in ten years.",
            "authorBio": "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
            "learnMoreTitle": "Learn more",
            "link1Title": "Our Strategies",
            "link1Desc": "Discover TITAN and our 3 other investment poles",
            "link2Title": "European Approach",
            "link2Desc": "France, Spain, Italy: our European target markets"
      }
};

  const t = content[language];
  const frUrl = "https://finxiacapital.com/blog/datacenter-hierarchie-preneurs-gafam-nvidia-cerebras-neoclouds-2026/";
  const enUrl = "https://finxiacapital.com/en/blog/datacenter-tenant-hierarchy-hyperscalers-nvidia-cerebras-neoclouds-2026/";

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
    "keywords": language === 'fr' ? "datacenter, preneur, GAFAM, NVIDIA, Cerebras, neocloud, contrepartie, IA, investissement" : "datacenter, tenant, hyperscalers, NVIDIA, Cerebras, neocloud, counterparty, AI, investment"
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
    <div data-testid="article-datacenter-hierarchie-preneurs-page" className="pt-20">
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
