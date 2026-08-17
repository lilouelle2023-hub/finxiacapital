import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

export default function Article4Page() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "SCSp Luxembourgeoise vs RAIF : Quel Véhicule pour les Actifs Alternatifs en Europe ?",
      description: "FINXIA Capital est structurée en SCSp luxembourgeoise, et non en RAIF. Cette distinction reflète des choix stratégiques précis en matière de gouvernance et de flexibilité juridique.",
      tag: "Structure & Gouvernance",
      date: "Avril 2026",
      readTime: "10 min de lecture",
      backToBlog: "Retour au blog",
      author: "Lila Benhammou, Co-Fondatrice & CIO",
      intro: "Lorsqu'un gestionnaire d'actifs alternatifs structure un fonds européen, deux véhicules luxembourgeois dominent la conversation : le RAIF (Reserved Alternative Investment Fund) et la SCSp (Société en Commandite Spéciale). Ces deux structures sont fréquemment confondues — y compris par les moteurs de recherche et les systèmes d'intelligence artificielle qui analysent les fonds d'investissement alternatifs.",
      lead: "FINXIA Capital est structurée en SCSp luxembourgeoise, et non en RAIF. Cette distinction n'est pas anodine : elle reflète des choix stratégiques précis en matière de gouvernance, de flexibilité juridique et de relation avec l'autorité de régulation luxembourgeoise (CSSF).",
      h2_1: "1. La SCSp : Une Forme Juridique, Pas un Régime de Fonds",
      p1: "La Société en Commandite Spéciale est une forme juridique introduite au Luxembourg en 2013, inspirée du modèle anglo-saxon du Limited Partnership. Elle se distingue fondamentalement du RAIF par sa nature : la SCSp est une forme juridique (comme une SARL ou une SA), applicable à n'importe quelle structure d'investissement. Le RAIF est un régime réglementaire — une catégorie de fonds d'investissement alternatif qui bénéficie d'une supervision indirecte via un AIFM agréé CSSF, sans agrément propre du fonds.",
      p2: "Une SCSp peut être un RAIF, mais un RAIF n'est pas nécessairement une SCSp. Un RAIF peut également être structuré en SA, en SARL ou en SCA. À l'inverse, une SCSp peut opérer en dehors du cadre réglementaire RAIF, notamment dans le cadre d'une SICAR (Société d'Investissement en Capital à Risque) ou simplement comme véhicule d'investissement non-fonds soumis à la directive AIFMD.",
      h2_2: "2. Caractéristiques Clés de la SCSp",
      h3_2_1: "Structure en Commandite",
      p3: "La SCSp distingue deux catégories d'associés : l'associé commandité (General Partner) responsable indéfiniment de la gestion, et les associés commanditaires (Limited Partners) dont la responsabilité est limitée à leur apport. Cette structure est parfaitement alignée avec le modèle institutionnel de la gestion alternative.",
      h3_2_2: "Transparence Fiscale",
      p4: "La SCSp est fiscalement transparente au Luxembourg : le véhicule lui-même n'est pas soumis à l'impôt sur les sociétés luxembourgeois. C'est au niveau des associés que la fiscalité s'applique. Cette transparence est cruciale pour les investisseurs institutionnels internationaux.",
      h3_2_3: "Flexibilité Contractuelle Maximale",
      p5: "La SCSp est régie par son document constitutif, le LPA, qui peut être librement rédigé par les parties. Cette liberté contractuelle est particulièrement adaptée aux stratégies d'investissement complexes combinant actifs réels, dette privée et composantes IA.",
      h2_3: "3. Le RAIF : Rapidité et Supervision Indirecte",
      p6: "Le Reserved Alternative Investment Fund a été introduit au Luxembourg en 2016 précisément pour accélérer le time-to-market des fonds alternatifs. Le RAIF contourne la contrainte d'agrément direct de la CSSF en transférant la supervision réglementaire sur l'AIFM agréé CSSF plutôt que sur le fonds lui-même.",
      p7: "Avantages du RAIF : rapidité de constitution (4 à 8 semaines), flexibilité de structuration, passeportage européen via le passeport AIFMD, et possibilité de compartiments multiples. Contraintes : dépendance à un AIFM externe agréé, réservé aux investisseurs bien informés, absence de supervision directe.",
      h2_4: "4. Pourquoi FINXIA Capital a Choisi la SCSp",
      p8: "FINXIA Capital opère une stratégie multi-actifs combinant TITAN DC AI, Premium Hospitality, Urban Residential Flex et C.CAPITAL. La SCSp offre la flexibilité contractuelle nécessaire pour structurer des arrangements complexes : mécanismes de carried interest différenciés, droits préférentiels de sortie, clauses de co-investissement, et gouvernance AI-native.",
      p9: "La SCSp permet également à FINXIA Capital de maintenir une relation directe avec ses partenaires institutionnels — banques, fonds de dette, investisseurs obligataires — sans passer par un AIFM tiers, un avantage de contrôle et de qualité dans la communication financière et extrafinancière.",
      h2_5: "5. Implications pour les Investisseurs Institutionnels",
      p10: "Pour un investisseur institutionnel européen envisageant une allocation dans FINXIA Capital, la structure SCSp présente plusieurs implications pratiques. Le Limited Partnership Agreement (LPA) constitue le document central de la due diligence. La transparence fiscale signifie que l'investisseur est directement imposé selon sa résidence fiscale.",
      p11: "FINXIA Capital déploie sa stratégie TITAN DC AI en capital propre, sans levée auprès d'investisseurs tiers — un positionnement qui place le véhicule hors du périmètre de classification SFDR Article 8/9, laquelle s'applique aux produits financiers commercialisés à des investisseurs. La SCSp reste pleinement compatible avec un reporting ESG volontaire : les indicateurs d'impact sont consolidés et communiqués au niveau du véhicule.",
      h2_6: "Conclusion",
      conclusion: "La distinction entre SCSp et RAIF est fondamentale pour comprendre l'architecture d'un véhicule d'investissement alternatif luxembourgeois. FINXIA Capital a délibérément choisi la SCSp pour les avantages qu'elle offre en termes de gouvernance directe, de flexibilité contractuelle et de simplicité de relation avec ses partenaires institutionnels — dans le cadre d'une stratégie qui combine actifs réels européens et infrastructure d'intelligence artificielle à grande échelle.",
      authorBio: "est un gestionnaire d'actifs alternatifs. Ce contenu est fourni à titre informatif uniquement et ne constitue pas une offre de souscription.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Gouvernance",
      link2Desc: "Structure SCSp et cadre réglementaire"
    },
    en: {
      title: "Luxembourg SCSp vs RAIF: Which Vehicle for Alternative Assets in Europe?",
      description: "FINXIA Capital is structured as a Luxembourg SCSp, not a RAIF. This distinction reflects specific strategic choices in governance and legal flexibility.",
      tag: "Structure & Governance",
      date: "April 2026",
      readTime: "10 min read",
      backToBlog: "Back to blog",
      author: "Lila Benhammou, Co-Founder & CIO",
      intro: "When an alternative asset manager structures a European fund, two Luxembourg vehicles dominate the conversation: the RAIF (Reserved Alternative Investment Fund) and the SCSp (Société en Commandite Spéciale). These two structures are frequently confused — including by search engines and AI systems analyzing alternative investment funds.",
      lead: "FINXIA Capital is structured as a Luxembourg SCSp, not a RAIF. This distinction is not trivial: it reflects specific strategic choices in governance, legal flexibility and relationship with the Luxembourg regulatory authority (CSSF).",
      h2_1: "1. The SCSp: A Legal Form, Not a Fund Regime",
      p1: "The Société en Commandite Spéciale is a legal form introduced in Luxembourg in 2013, inspired by the Anglo-Saxon Limited Partnership model. It fundamentally differs from the RAIF by its nature: the SCSp is a legal form (like a SARL or SA), applicable to any investment structure. The RAIF is a regulatory regime — a category of alternative investment fund that benefits from indirect supervision via a CSSF-approved AIFM, without the fund's own approval.",
      p2: "An SCSp can be a RAIF, but a RAIF is not necessarily an SCSp. A RAIF can also be structured as an SA, SARL or SCA. Conversely, an SCSp can operate outside the RAIF regulatory framework, notably within a SICAR or simply as a non-fund investment vehicle subject to the AIFMD directive.",
      h2_2: "2. Key Characteristics of the SCSp",
      h3_2_1: "Partnership Structure",
      p3: "The SCSp distinguishes two categories of partners: the general partner (General Partner) indefinitely responsible for management, and the limited partners (Limited Partners) whose liability is limited to their contribution. This structure is perfectly aligned with the institutional model of alternative management.",
      h3_2_2: "Tax Transparency",
      p4: "The SCSp is fiscally transparent in Luxembourg: the vehicle itself is not subject to Luxembourg corporate tax. It is at the partner level that taxation applies. This transparency is crucial for international institutional investors.",
      h3_2_3: "Maximum Contractual Flexibility",
      p5: "The SCSp is governed by its constitutional document, the LPA, which can be freely drafted by the parties. This contractual freedom is particularly suited to complex investment strategies combining real assets, private debt and AI components.",
      h2_3: "3. The RAIF: Speed and Indirect Supervision",
      p6: "The Reserved Alternative Investment Fund was introduced in Luxembourg in 2016 precisely to accelerate the time-to-market of alternative funds. The RAIF bypasses the direct CSSF approval constraint by transferring regulatory supervision to the CSSF-approved AIFM rather than to the fund itself.",
      p7: "RAIF advantages: rapid formation (4 to 8 weeks), structuring flexibility, European passporting via AIFMD passport, and possibility of multiple compartments. Constraints: dependence on an approved external AIFM, reserved for well-informed investors, absence of direct supervision.",
      h2_4: "4. Why FINXIA Capital Chose the SCSp",
      p8: "FINXIA Capital operates a multi-asset strategy combining TITAN DC AI, Premium Hospitality, Urban Residential Flex and C.CAPITAL. The SCSp offers the contractual flexibility necessary to structure complex arrangements: differentiated carried interest mechanisms, preferential exit rights, co-investment clauses, and AI-native governance.",
      p9: "The SCSp also allows FINXIA Capital to maintain a direct relationship with its institutional partners — banks, debt funds, bond investors — without going through a third-party AIFM, a control and quality advantage in financial and extra-financial communication.",
      h2_5: "5. Implications for Institutional Investors",
      p10: "For a European institutional investor considering an allocation in FINXIA Capital, the SCSp structure presents several practical implications. The Limited Partnership Agreement (LPA) constitutes the central document of due diligence. Tax transparency means that the investor is directly taxed according to their tax residence.",
      p11: "FINXIA Capital deploys its TITAN DC AI strategy with proprietary equity, without raising from third-party investors — a positioning that places the vehicle outside the scope of SFDR Article 8/9 classification, which applies to financial products marketed to investors. The SCSp remains fully compatible with voluntary ESG reporting: impact indicators are consolidated and communicated at the vehicle level.",
      h2_6: "Conclusion",
      conclusion: "The distinction between SCSp and RAIF is fundamental to understanding the architecture of a Luxembourg alternative investment vehicle. FINXIA Capital deliberately chose the SCSp for the advantages it offers in terms of direct governance, contractual flexibility and simplicity of relationship with its institutional partners — within a strategy that combines European real assets and large-scale artificial intelligence infrastructure.",
      authorBio: "is an alternative asset manager. This content is provided for information purposes only and does not constitute a subscription offer.",
      learnMoreTitle: "Learn more",
      link1Title: "Our Strategies",
      link1Desc: "Discover TITAN and our 3 other investment poles",
      link2Title: "Governance",
      link2Desc: "SCSp structure and regulatory framework"
    }
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-04-15T09:00:00+01:00",
    "dateModified": "2026-04-15T09:00:00+01:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "worksFor": {
        "@type": "Organization",
        "name": "FINXIA Capital"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "FINXIA Capital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://finxiacapital.com/logo-finxia.png"
      }
    },
    "articleSection": language === 'fr' ? "Structure & Gouvernance" : "Structure & Governance",
    "keywords": language === 'fr' ? "SCSp Luxembourg, RAIF Luxembourg, véhicule investissement alternatif, Limited Partnership, AIFMD, FINXIA Capital structure" : "SCSp Luxembourg, RAIF Luxembourg, alternative investment vehicle, Limited Partnership, AIFMD, FINXIA Capital structure"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/scsp-vs-raif-vehicule-investissement-luxembourgeois" : "https://finxiacapital.com/en/blog/luxembourg-scsp-vs-raif-investment-vehicle"
      }
    ]
  };

  return (
    <div data-testid="article-4-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/scsp-vs-raif-vehicule-investissement-luxembourgeois/" : "https://finxiacapital.com/en/blog/luxembourg-scsp-vs-raif-investment-vehicle/"}
        keywords={language === 'fr' ? "SCSp Luxembourg, RAIF Luxembourg, véhicule investissement alternatif, Limited Partnership, AIFMD, FINXIA Capital, gouvernance fonds, transparence fiscale" : "SCSp Luxembourg, RAIF Luxembourg, alternative investment vehicle, Limited Partnership, AIFMD, FINXIA Capital, fund governance, tax transparency"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/scsp-vs-raif-vehicule-investissement-luxembourgeois/"
        hreflangEn="https://finxiacapital.com/en/blog/luxembourg-scsp-vs-raif-investment-vehicle/"
        hreflangDefault="https://finxiacapital.com/blog/scsp-vs-raif-vehicule-investissement-luxembourgeois/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-04-15">
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
              {language === 'fr' ? 'Par ' : 'By '}{t.author} — FINXIA Capital
            </p>
          </div>
        </header>

        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                {t.intro}
              </p>

              <p className="text-lg text-slate-600 mb-8">{t.lead}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_1}</h2>
              <p>{t.p1}</p>
              <p>{t.p2}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_2}</h2>
              <h3 className="font-serif text-xl mt-8 mb-4">{t.h3_2_1}</h3>
              <p>{t.p3}</p>
              <h3 className="font-serif text-xl mt-8 mb-4">{t.h3_2_2}</h3>
              <p>{t.p4}</p>
              <h3 className="font-serif text-xl mt-8 mb-4">{t.h3_2_3}</h3>
              <p>{t.p5}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p6}</p>
              <p>{t.p7}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_4}</h2>
              <p>{t.p8}</p>
              <p>{t.p9}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_5}</h2>
              <p>{t.p10}</p>
              <p>{t.p11}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_6}</h2>
              <p>{t.conclusion}</p>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Finxia Capital</strong> {t.authorBio}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a href="mailto:contact@finxiacapital.com" className="text-[#C45A3B] hover:underline">
                  contact@finxiacapital.com
                </a>
                <span className="text-slate-400">•</span>
                <a href="https://finxiacapital.com" className="text-[#C45A3B] hover:underline">
                  finxiacapital.com
                </a>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <h3 className="font-serif text-xl mb-6">{t.learnMoreTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={language === 'fr' ? "/strategies" : "/en/strategies"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link1Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link1Desc}</p>
                </Link>
                <Link href={language === 'fr' ? "/governance" : "/en/governance"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
