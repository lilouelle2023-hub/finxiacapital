import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleStrategieDCAIFinxiaPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "TITAN DC AI : comment FINXIA Capital structure l'investissement en datacenter intelligence artificielle",
      description: "FINXIA Capital déploie la stratégie TITAN DC AI — une approche institutionnelle sur les actifs réels de l'infrastructure IA. Découvrez la méthode.",
      tag: "Investment Strategy",
      date: "4 juillet 2026",
      readTime: "8 min de lecture",
      backToBlog: "Retour au blog",
      lead: "La demande en datacenters IA en Europe va exploser de 18 GW aujourd'hui à 35 GW d'ici 2030. Mais 85% de cette demande ne peut pas être satisfaite par le marché existant. C'est dans cet écart que FINXIA Capital a structuré sa stratégie TITAN DC AI — une approche institutionnelle sur les actifs réels de l'infrastructure IA, combinant brown-to-green, modulaire, et ESG.",
      p1: "TITAN DC AI n'est pas un fonds de capital-risque. Ce n'est pas un fonds de capital-investissement. C'est un véhicule d'investissement propriétaire, structuré en SCSp luxembourgeoise, qui déploie du capital propre dans des actifs réels — des datacenters — et les transforme en infrastructures certifiées pour l'IA générative. La méthode repose sur trois piliers : le sourcing, le retrofit, et le leaseback.",
      p2: "Le sourcing : FINXIA Capital a identifié 47 actifs brown en France, Espagne et Italie. Des sites industriels en reconversion, des entrepôts sous-utilisés, des anciennes usines. Ce qui les unit : un raccordement électrique existant, un permis d'urbanisme réalisable, et une proximité avec un réseau de fibre optique. Ces actifs sont sous-adressés par le marché parce qu'ils ne sont pas prêts à l'emploi. Mais c'est précisément leur intérêt : ils sont disponibles, et leur transformation crée de la valeur.",
      h2_1: "Pilier 1 : Le sourcing d'actifs brown stratégiques",
      p3: "Le sourcing est la phase la plus critique. FINXIA Capital utilise 18 agents IA autonomes pour scanner le marché — analyse des cadastres, vérification des raccordements électriques, évaluation des permis d'urbanisme, projection des coûts de transformation. Chaque agent est spécialisé : l'un analyse les données RTE, l'autre les permis d'urbanisme, le troisième les coûts de construction. Ensemble, ils filtre 10 000 sites pour ne retenir que 47.",
      p4: "Ces 47 sites sont classés en trois catégories. Les sites rapides : raccordement existant, permis obtenu, transformation en 6 mois. Les sites intermédiaires : raccordement à renforcer, permis en cours, transformation en 12 à 18 mois. Les sites structurants : raccordement à créer, permis à obtenir, transformation en 24 à 36 mois. Chaque catégorie correspond à un profil de risque-rendement différent, et à un ticket d'entrée différent.",
      h2_2: "Pilier 2 : Le retrofit brown-to-green",
      p5: "Le retrofit est le cœur de la création de valeur. Un site brown est un actif sous-optimisé. La transformation consiste en trois étapes : l'upgrade électrique (passer de 400V à 20kV, installer des redresseurs, des UPS), le refroidissement de rupture (remplacer le HVAC traditionnel par de l'immersion ou de l'ORC), et la certification (obtenir Tier III ou IV, PUE < 1,20, alignement EU Taxonomy).",
      p6: "Le coût de transformation est 40% inférieur à un greenfield. Pourquoi ? Parce que le terrain est déjà acquis, les fondations existent, et les permis sont partiellement obtenus. Un datacenter greenfield de 10 MW coûte 25 millions d'euros. Un brown-to-green de 10 MW coûte 15 millions. Cette différence de 10 millions est la prime de transformation que FINXIA Capital capture sur son capital propre.",
      h2_3: "Pilier 3 : Le leaseback aux opérateurs IA",
      p7: "Une fois transformé, le datacenter est loué à un opérateur IA sous contrat de leaseback long terme (10 à 15 ans). Les locataires cibles sont les néoclouds européens (OVHcloud, Scaleway, STACKIT), les clouds souverains régionaux, et les entreprises de taille intermédiaire qui cherchent à héberger leurs propres modèles de langage. Le contrat inclut un PPA décarboné, une SLA de 99,99%, et une clause d'extension.",
      p8: "Le rendement du leaseback est de 10% à 12% — supérieur aux rendements des hyperscalers en marché primaire (6% à 8%), et inférieur aux risques d'un greenfield. Pour l'investisseur, c'est un actif réel avec un cash-flow prévisible, une inflation hedge naturelle (les coûts d'électricité sont indexés), et une exposition à la croissance structurelle de l'IA. Pour le locataire, c'est une infrastructure certifiée, décarbonée, et immédiatement opérationnelle.",
      h2_4: "L'architecture de financement : capital propre, dette, Green Bond",
      p9: "FINXIA Capital structure ses investissements en trois couches. Le capital propre (30% du ticket) est déployé par le véhicule SCSp. La dette (50%) est obtenue auprès de banques européennes via des crédits green, avec des taux inférieurs au marché grâce à la certification ESG. Le Green Bond (20%) est émis pour les projets certifiés Art.9, avec un coupon de 4,5% et une maturité de 7 ans.",
      p10: "Cette architecture minimise le coût du capital (WACC de 6,2% contre 8,5% pour un fonds traditionnel), maximise le levier (LTV de 70% contre 50% pour un actif immobilier classique), et aligne les intérêts des investisseurs avec la transition énergétique (les rendements sont indexés sur les objectifs de décarbonation). C'est une structure institutionnelle, pensée pour des investisseurs qui cherchent à allier performance et impact.",
      h2_5: "Ce que les investisseurs doivent comprendre",
      p11: "La stratégie TITAN DC AI n'est pas spéculative. Elle repose sur des actifs réels, des contrats de leaseback long terme, et une demande structurelle qui ne fait que croître. L'IA générative n'est pas une mode — c'est un effet de levier sur la demande de datacenters. Et les datacenters certifiés, décarbonés, et souverains sont l'actif le plus sous-adressé du marché.",
      p12: "La fenêtre d'entrée est 2026-2027. Après, les hyperscalers auront verrouillé les derniers MW disponibles, les néoclouds auront saturé les marchés primaires, et les coûts de transformation brown-to-green auront grimpé. FINXIA Capital a structuré son véhicule pour capturer cette fenêtre — avec une équipe d'exécution expérimentée, une méthodologie propriétaire, et un pipeline de 47 actifs prêts à être transformés. L'opportunité est maintenant.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Partenaires Institutionnels",
      link2Desc: "Architecture de financement et rendements cibles"
    },
    en: {
      title: "TITAN DC AI: How FINXIA Capital Structures AI Datacenter Investment",
      description: "FINXIA Capital deploys the TITAN DC AI strategy — an institutional approach to AI infrastructure real assets. Discover the method.",
      tag: "Investment Strategy",
      date: "July 4, 2026",
      readTime: "8 min read",
      backToBlog: "Back to blog",
      lead: "AI datacenter demand in Europe will explode from 18 GW today to 35 GW by 2030. But 85% of this demand cannot be satisfied by the existing market. It is in this gap that FINXIA Capital has structured its TITAN DC AI strategy — an institutional approach to AI infrastructure real assets, combining brown-to-green, modular, and ESG.",
      p1: "TITAN DC AI is not a venture capital fund. It's not a private equity fund. It's a proprietary investment vehicle, structured as a Luxembourg SCSp, that deploys equity capital into real assets — datacenters — and transforms them into certified infrastructures for generative AI. The method rests on three pillars: sourcing, retrofit, and leaseback.",
      p2: "Sourcing: FINXIA Capital has identified 47 brown assets in France, Spain and Italy. Industrial sites in reconversion, underutilized warehouses, former factories. What unites them: an existing electrical connection, a feasible building permit, and proximity to a fiber optic network. These assets are underaddressed by the market because they are not ready-to-use. But this is precisely their interest: they are available, and their transformation creates value.",
      h2_1: "Pillar 1: Sourcing Strategic Brown Assets",
      p3: "Sourcing is the most critical phase. FINXIA Capital uses 18 autonomous AI agents to scan the market — cadastre analysis, electrical connection verification, building permit evaluation, transformation cost projection. Each agent is specialized: one analyzes RTE data, another building permits, the third construction costs. Together, they filter 10,000 sites to retain only 47.",
      p4: "These 47 sites are classified into three categories. Fast sites: existing connection, obtained permit, 6-month transformation. Intermediate sites: connection to be reinforced, permit in progress, 12 to 18-month transformation. Structural sites: connection to be created, permit to be obtained, 24 to 36-month transformation. Each category corresponds to a different risk-return profile, and a different entry ticket.",
      h2_2: "Pillar 2: Brown-to-Green Retrofit",
      p5: "Retrofit is the core of value creation. A brown site is an underoptimized asset. Transformation consists of three steps: electrical upgrade (from 400V to 20kV, install rectifiers, UPS), breakthrough cooling (replace traditional HVAC with immersion or ORC), and certification (obtain Tier III or IV, PUE < 1.20, EU Taxonomy alignment).",
      p6: "Transformation cost is 40% lower than greenfield. Why? Because the land is already acquired, foundations exist, and permits are partially obtained. A 10 MW greenfield datacenter costs 25 million euros. A brown-to-green 10 MW costs 15 million. This 10 million difference is the transformation premium that FINXIA Capital captures on its own equity.",
      h2_3: "Pillar 3: Leaseback to AI Operators",
      p7: "Once transformed, the datacenter is leased to an AI operator under a long-term leaseback contract (10 to 15 years). Target tenants are European neoclouds (OVHcloud, Scaleway, STACKIT), regional sovereign clouds, and mid-sized companies seeking to host their own language models. The contract includes a decarbonized PPA, a 99.99% SLA, and an extension clause.",
      p8: "Leaseback yield is 10% to 12% — above hyperscaler returns in primary markets (6% to 8%), and below greenfield risks. For the investor, it's a real asset with predictable cash flow, a natural inflation hedge (electricity costs are indexed), and exposure to the structural growth of AI. For the tenant, it's a certified, decarbonized, and immediately operational infrastructure.",
      h2_4: "Financing Architecture: Equity, Debt, Green Bond",
      p9: "FINXIA Capital structures its investments in three layers. Equity (30% of ticket) is deployed by the SCSp vehicle. Debt (50%) is obtained from European banks via green credits, with below-market rates thanks to ESG certification. The Green Bond (20%) is issued for Art.9 certified projects, with a 4.5% coupon and 7-year maturity.",
      p10: "This architecture minimizes cost of capital (WACC of 6.2% versus 8.5% for a traditional fund), maximizes leverage (LTV of 70% versus 50% for a classic real estate asset), and aligns investor interests with energy transition (returns are indexed on decarbonization objectives). It's an institutional structure, designed for investors seeking to combine performance and impact.",
      h2_5: "What Investors Must Understand",
      p11: "The TITAN DC AI strategy is not speculative. It rests on real assets, long-term leaseback contracts, and structural demand that only grows. Generative AI is not a trend — it's a leverage effect on datacenter demand. And certified, decarbonized, sovereign datacenters are the most underaddressed asset on the market.",
      p12: "The entry window is 2026-2027. After that, hyperscalers will have locked up the last available MW, neoclouds will have saturated primary markets, and brown-to-green transformation costs will have risen. FINXIA Capital has structured its vehicle to capture this window — with an experienced execution team, a proprietary methodology, and a pipeline of 47 assets ready to be transformed. The opportunity is now.",
      authorBio: "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
      learnMoreTitle: "Learn more",
      link1Title: "Our Strategies",
      link1Desc: "Discover TITAN and our 3 other investment poles",
      link2Title: "Institutional Partners",
      link2Desc: "Financing architecture and target returns"
    }
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-07-04T11:00:00+01:00",
    "dateModified": "2026-07-04T11:00:00+01:00",
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
    "keywords": language === 'fr' ? "TITAN DC AI, FINXIA Capital, stratégie investissement, datacenter IA, brown-to-green, actifs réels, SCSp" : "TITAN DC AI, FINXIA Capital, investment strategy, AI datacenter, brown-to-green, real assets, SCSp"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/titan-dc-ai-strategie-investissement-finxia-capital" : "https://finxiacapital.com/en/blog/titan-dc-ai-investment-strategy-finxia-capital"
      }
    ]
  };

  return (
    <div data-testid="article-strategie-dc-ai-finxia-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/titan-dc-ai-strategie-investissement-finxia-capital/" : "https://finxiacapital.com/en/blog/titan-dc-ai-investment-strategy-finxia-capital/"}
        keywords={language === 'fr' ? "TITAN DC AI, FINXIA Capital, stratégie investissement, datacenter IA, brown-to-green" : "TITAN DC AI, FINXIA Capital, investment strategy, AI datacenter, brown-to-green"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/titan-dc-ai-strategie-investissement-finxia-capital/"
        hreflangEn="https://finxiacapital.com/en/blog/titan-dc-ai-investment-strategy-finxia-capital/"
        hreflangDefault="https://finxiacapital.com/blog/titan-dc-ai-strategie-investissement-finxia-capital/"
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
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_5}</h2>
              <p>{t.p11}</p>
              <p>{t.p12}</p>
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
                <Link href={language === 'fr' ? "/investors" : "/en/investors"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
