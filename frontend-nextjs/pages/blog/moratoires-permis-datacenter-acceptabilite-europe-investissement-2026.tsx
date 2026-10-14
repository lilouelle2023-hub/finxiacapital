import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleMoratoiresPermisPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Moratoires et permis : quand l'acceptabilité locale fixe la valeur des datacenters européens",
      description: "Dublin, Amsterdam, Francfort : les moratoires et permis durcis ont fait du foncier autorisé la ressource la plus rare du marché des datacenters. Pour l'investisseur, le permis n'est plus une formalité — c'est l'actif.",
      tag: "Market Analysis",
      date: "14 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Sur le marché européen des datacenters, la rareté a changé de nature. Ce n'est plus le capital qui manque, ni même les GPU : c'est le foncier autorisé. Dublin, Amsterdam et Francfort ont montré qu'un moratoire pouvait geler des milliards de projets — et revaloriser instantanément les sites existants.",
      p1: "Dublin a ouvert le bal : face à un réseau saturé, le gestionnaire EirGrid a de facto suspendu les nouveaux raccordements dans le comté dès 2021. Amsterdam a imposé en 2019 une pause puis des règles strictes de localisation. Francfort a adopté un plan directeur qui cantonne les nouveaux sites à des zones dédiées. Trois marchés majeurs, trois formes de rationnement.",
      p2: "Les causes sont structurelles : concurrence pour l'électricité et l'eau, impact paysager, pression sur le logement et les terres agricoles. L'opposition locale s'est organisée, et les élus répondent. Un permis de construire un datacenter n'est plus une formalité technique : c'est une décision politique.",
      h2_1: "Le permis est devenu l'actif",
      p3: "Conséquence directe sur les prix : l'écart se creuse entre foncier autorisé et foncier nu. Sur les marchés contraints, un terrain viabilisé avec permis et promesse de raccordement se négocie plusieurs fois le prix du même terrain sans autorisation. La valeur s'est déplacée de la construction vers l'autorisation.",
      p4: "Le marché M&A l'a intégré : les transactions premium portent désormais sur des sites autorisés ou en exploitation, et les projets en phase d'approbation se vendent avec une décote de risque explicite. Le permis d'un datacenter existant — y compris modeste — possède une valeur de rareté que les bilans ne capturaient pas hier.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "Le risque permis entre dans la due diligence au même titre que le PUE ou la connectivité : solidité juridique de l'autorisation, possibilité d'extension, relation avec la commune et le gestionnaire de réseau. Deux actifs techniquement identiques peuvent valoir très différemment selon la robustesse de leur permis.",
      p6: "La discipline est simple : ne payer que ce qui est autorisé. Un projet « sous réserve d'extension » doit être valorisé sur sa capacité permise, l'extension restant de l'upside gratuit. À l'inverse, un site dont le permis autorise déjà la phase deux vaut plus cher que ce que suggère son seul bilan d'exploitation.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, la revue des permis ouvre la due diligence : validité et portée de l'autorisation, marges d'extension, conformité EED à venir, ancrage local de l'exploitant. Un permis fragile ou contesté est un motif d'abandon, quel que soit le prix.",
      p8: "C'est un avantage supplémentaire de notre biais brown-to-green : un site en exploitation possède son permis, son historique et un voisinage qui le connaît. Transformer un actif existant est presque toujours plus rapide — et politiquement moins risqué — que d'autoriser une construction neuve.",
      h2_4: "Ce qu'il faut retenir",
      p9: "Moratoires, plans directeurs, oppositions locales : l'autorisation est devenue la ressource critique des datacenters européens. La valeur migre vers les sites permis, et les actifs existants en sont les premiers bénéficiaires.",
      p10: "À surveiller : les permis conditionnés à la réutilisation de la chaleur fatale ou à des objectifs EED, et les premières extensions de moratoires dans les métropoles françaises.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Moratoria and Permits: When Local Acceptance Sets the Value of European Datacenters",
      description: "Dublin, Amsterdam, Frankfurt: moratoria and tightened permits have made authorized land the scarcest resource in the datacenter market. For investors, the permit is no longer a formality — it is the asset.",
      tag: "Market Analysis",
      date: "October 14, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "In the European datacenter market, scarcity has changed nature. What is missing is no longer capital, nor even GPUs: it is authorized land. Dublin, Amsterdam and Frankfurt have shown that a moratorium can freeze billions in projects — and instantly revalue existing sites.",
      p1: "Dublin led the way: facing a saturated grid, operator EirGrid de facto suspended new connections in the county from 2021. Amsterdam imposed a pause in 2019, followed by strict siting rules. Frankfurt adopted a master plan confining new sites to dedicated zones. Three major markets, three forms of rationing.",
      p2: "The causes are structural: competition for power and water, landscape impact, pressure on housing and farmland. Local opposition has organized, and elected officials respond. A datacenter building permit is no longer a technical formality: it is a political decision.",
      h2_1: "The Permit Has Become the Asset",
      p3: "The direct consequence on prices: the gap is widening between authorized and bare land. In constrained markets, serviced land with a permit and a grid connection promise trades at several times the price of the same land without authorization. Value has shifted from construction to authorization.",
      p4: "The M&A market has internalized this: premium transactions now involve permitted or operating sites, while projects in the approval phase sell with an explicit risk discount. The permit of an existing datacenter — even a modest one — carries a scarcity value that balance sheets did not capture yesterday.",
      h2_2: "What This Changes for Investors",
      p5: "Permit risk enters due diligence on par with PUE or connectivity: the legal solidity of the authorization, the possibility of extension, the relationship with the municipality and the grid operator. Two technically identical assets can be worth very different amounts depending on the robustness of their permit.",
      p6: "The discipline is simple: only pay for what is authorized. A project 'subject to extension approval' should be valued on its permitted capacity, with the extension as free upside. Conversely, a site whose permit already authorizes phase two is worth more than its operating accounts alone suggest.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, the permit review opens due diligence: validity and scope of the authorization, extension headroom, upcoming EED compliance, the operator's local anchoring. A fragile or contested permit is grounds for walking away, whatever the price.",
      p8: "This is an additional advantage of our brown-to-green bias: an operating site holds its permit, its track record and a neighborhood that knows it. Transforming an existing asset is almost always faster — and politically less risky — than permitting a new build.",
      h2_4: "Key Takeaways",
      p9: "Moratoria, master plans, local opposition: authorization has become the critical resource for European datacenters. Value is migrating toward permitted sites, and existing assets are the first beneficiaries.",
      p10: "Worth watching: permits conditioned on waste-heat reuse or EED targets, and the first moratorium extensions in French metropolitan areas.",
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
    "datePublished": "2026-10-14T09:00:00+02:00",
    "dateModified": "2026-10-14T09:00:00+02:00",
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
    "keywords": language === 'fr' ? "datacenter, permis, moratoire, investissement infrastructure IA, foncier, green datacenter, souveraineté numérique" : "datacenter, permit, moratorium, AI infrastructure investment, land, green datacenter, digital sovereignty"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/moratoires-permis-datacenter-acceptabilite-europe-investissement-2026" : "https://finxiacapital.com/en/blog/datacenter-moratoria-permits-europe-investment-2026"
      }
    ]
  };

  return (
    <div data-testid="article-moratoires-permis-datacenter-acceptabilite-europe-investissement-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/moratoires-permis-datacenter-acceptabilite-europe-investissement-2026/" : "https://finxiacapital.com/en/blog/datacenter-moratoria-permits-europe-investment-2026/"}
        keywords={language === 'fr' ? "datacenter, permis, moratoire, investissement infrastructure IA, foncier, green datacenter, souveraineté numérique" : "datacenter, permit, moratorium, AI infrastructure investment, land, green datacenter, digital sovereignty"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/moratoires-permis-datacenter-acceptabilite-europe-investissement-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/datacenter-moratoria-permits-europe-investment-2026/"
        hreflangDefault="https://finxiacapital.com/blog/moratoires-permis-datacenter-acceptabilite-europe-investissement-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-14">
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
