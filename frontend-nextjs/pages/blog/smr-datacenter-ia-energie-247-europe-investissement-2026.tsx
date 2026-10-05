import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleSmrDatacenterPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "SMR pour datacenters IA : le pari nucléaire 24/7 qui redessine l'investissement énergétique en Europe",
      description: "Les hyperscalers passent au 24/7 carbon-free energy : chaque heure de calcul doit être décarbonée. Aux États-Unis, ils achètent des réacteurs. En Europe, les datacenters raccordés au nucléaire français tiennent déjà l'atout maître.",
      tag: "Energy & Infrastructure",
      date: "5 octobre 2026",
      readTime: "7 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Aux États-Unis, les hyperscalers ne signent plus seulement des contrats solaires : ils achètent des réacteurs. Amazon, Microsoft et Google ont verrouillé près de 10 GW nucléaires en deux ans. En Europe, le mouvement commence — et il va réécrire la valeur des sites.",
      p1: "Le raisonnement est simple. Un datacenter IA consomme en continu, jour et nuit. Or un PPA classique garantit une énergie renouvelable sur l'année, pas sur l'heure : à 3 heures du matin sans vent, le site tourne sur le mix du réseau. Les hyperscalers passent donc au 24/7 carbon-free energy : chaque heure de consommation doit être couverte par une production décarbonée.",
      p2: "Seules trois sources tiennent cette promesse à l'échelle d'un campus de plusieurs centaines de mégawatts : l'hydroélectricité, le nucléaire existant et les SMR — ces petits réacteurs modulaires de 50 à 300 MW conçus pour être fabriqués en usine et installés au plus près des sites de consommation.",
      h2_1: "Où en est l'Europe",
      p3: "La France dispose d'un atout unique : un parc nucléaire qui fournit déjà une électricité décarbonée à prix compétitif, et le programme NUWARD qui vise une première unité SMR à l'horizon 2030. Le Royaume-Uni avance avec Rolls-Royce SMR ; la Pologne et la République tchèque ont signé des accords. Mais aucun SMR ne tourne encore en Europe : les premières connexions réelles sont attendues entre 2030 et 2032.",
      p4: "En attendant, le marché se positionne. Les contrats signés aux États-Unis le montrent : l'électricité nucléaire 24/7 se monnaie 30 à 50 % au-dessus du prix de gros, parce qu'elle combine trois valeurs — volume, constance et décarbonation.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "La prime 24/7 crée une segmentation nouvelle du marché. Un datacenter raccordé à une source décarbonée pilotable — nucléaire français, hydro nordique — capte une clientèle hyperscaler prête à payer plus cher le mégawattheure. Un site dépendant d'un mix intermittent subit l'effet inverse.",
      p6: "Pour les projets de long terme, la proximité d'un futur SMR devient une option de valeur : un site situé dans le périmètre d'un programme modulaire gagnera en attractivité à mesure que les unités seront financées. L'inverse est vrai aussi : parier sur un SMR non financé comme source principale relève du pari réglementaire, pas de la stratégie.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, nous scorons chaque actif sur sa trajectoire énergétique à dix ans : mix actuel du réseau, contrats 24/7 accessibles, et distance aux programmes nucléaires en cours. La France et les pays nordiques dominent ce classement ; l'Espagne progresse grâce à son couple solaire-hydroélectricité.",
      p8: "Notre conviction : les actifs brown français raccordés au parc nucléaire historique offrent dès aujourd'hui l'équivalent fonctionnel d'un SMR — une électricité pilotable et décarbonée — sans attendre 2032 ni porter le risque de construction.",
      h2_4: "Ce qu'il faut retenir",
      p9: "Le 24/7 carbon-free energy devient le standard des hyperscalers, et le nucléaire — existant ou modulaire — est le seul moyen de le tenir à grande échelle en Europe. Les actifs déjà raccordés à une source pilotable décarbonée bénéficient d'une avance de cinq à sept ans.",
      p10: "À surveiller : les premiers contrats SMR européens signés par des hyperscalers, la décision finale d'investissement de NUWARD, et l'arrivée du critère 24/7 dans les appels d'offres de colocation.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "SMRs for AI Datacenters: The 24/7 Nuclear Bet Reshaping Energy Investment in Europe",
      description: "Hyperscalers are moving to 24/7 carbon-free energy: every hour of compute must be decarbonized. In the US they are buying reactors. In Europe, datacenters wired into French nuclear already hold the winning card.",
      tag: "Energy & Infrastructure",
      date: "October 5, 2026",
      readTime: "7 min read",
      backToBlog: "Back to blog",
      lead: "In the United States, hyperscalers no longer just sign solar contracts: they buy reactors. Amazon, Microsoft and Google have locked in nearly 10 GW of nuclear capacity in two years. In Europe, the movement is starting — and it will redraw the value of sites.",
      p1: "The reasoning is simple. An AI datacenter consumes power continuously, day and night. A classic PPA guarantees renewable energy over the year, not over the hour: at 3 a.m. without wind, the site runs on the grid mix. Hyperscalers are therefore moving to 24/7 carbon-free energy: every hour of consumption must be covered by decarbonized generation.",
      p2: "Only three sources can keep that promise at the scale of a campus of several hundred megawatts: hydropower, existing nuclear, and SMRs — small modular reactors of 50 to 300 MW designed to be factory-built and installed close to consumption sites.",
      h2_1: "Where Europe Stands",
      p3: "France holds a unique asset: a nuclear fleet already delivering decarbonized power at competitive prices, and the NUWARD program targeting a first SMR unit around 2030. The UK is moving ahead with Rolls-Royce SMR; Poland and the Czech Republic have signed agreements. But no SMR is running in Europe yet: first real connections are expected between 2030 and 2032.",
      p4: "Meanwhile, the market is positioning. Contracts signed in the United States show it: 24/7 nuclear power trades 30 to 50% above wholesale prices, because it combines three values — volume, constancy and decarbonization.",
      h2_2: "What This Changes for Investors",
      p5: "The 24/7 premium creates a new market segmentation. A datacenter connected to a dispatchable decarbonized source — French nuclear, Nordic hydro — captures hyperscaler customers willing to pay more per megawatt-hour. A site dependent on an intermittent mix suffers the reverse effect.",
      p6: "For long-term projects, proximity to a future SMR becomes a value option: a site within a modular program's perimeter gains attractiveness as units get financed. The reverse is also true: betting on an unfunded SMR as the primary source is a regulatory gamble, not a strategy.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, we score every asset on its ten-year energy trajectory: current grid mix, accessible 24/7 contracts, and distance to ongoing nuclear programs. France and the Nordic countries top this ranking; Spain is progressing thanks to its solar-hydro pairing.",
      p8: "Our conviction: French brown assets connected to the historic nuclear fleet already offer the functional equivalent of an SMR — dispatchable, decarbonized power — without waiting for 2032 or carrying construction risk.",
      h2_4: "Key Takeaways",
      p9: "24/7 carbon-free energy is becoming the hyperscaler standard, and nuclear — existing or modular — is the only way to deliver it at scale in Europe. Assets already connected to a dispatchable decarbonized source hold a five-to-seven-year head start.",
      p10: "Worth watching: the first European SMR contracts signed by hyperscalers, NUWARD's final investment decision, and the arrival of the 24/7 criterion in colocation tenders.",
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
    "datePublished": "2026-10-05T09:00:00+02:00",
    "dateModified": "2026-10-05T09:00:00+02:00",
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
    "keywords": language === 'fr' ? "SMR, nucléaire, datacenter, IA, énergie 24/7, green datacenter, investissement infrastructure IA, Europe" : "SMR, nuclear, datacenter, AI, 24/7 carbon-free energy, green datacenter, AI infrastructure investment, Europe"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/smr-datacenter-ia-energie-247-europe-investissement-2026" : "https://finxiacapital.com/en/blog/smr-datacenter-ia-energie-247-europe-investissement-2026"
      }
    ]
  };

  return (
    <div data-testid="article-smr-datacenter-ia-energie-247-europe-investissement-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/smr-datacenter-ia-energie-247-europe-investissement-2026/" : "https://finxiacapital.com/en/blog/smr-datacenter-ia-energie-247-europe-investissement-2026/"}
        keywords={language === 'fr' ? "SMR, nucléaire, datacenter, IA, énergie 24/7, green datacenter, investissement infrastructure IA, Europe" : "SMR, nuclear, datacenter, AI, 24/7 carbon-free energy, green datacenter, AI infrastructure investment, Europe"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/smr-datacenter-ia-energie-247-europe-investissement-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/smr-datacenter-ia-energie-247-europe-investissement-2026/"
        hreflangDefault="https://finxiacapital.com/blog/smr-datacenter-ia-energie-247-europe-investissement-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-05">
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
