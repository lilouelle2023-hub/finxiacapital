import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleAiActPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "AI Act et datacenters : ce que la réglementation européenne change pour les infrastructures IA",
      description: "L'AI Act impose aux fournisseurs de modèles d'IA une traçabilité complète de l'entraînement — énergie, calcul, données. Les datacenters européens deviennent un maillon de la conformité, et la capacité documentée prend de la valeur.",
      tag: "Digital Infrastructure",
      date: "12 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "L'AI Act ne vise pas les datacenters — et pourtant il va les transformer. En imposant aux fournisseurs de modèles une traçabilité détaillée de l'entraînement, le règlement européen fait de l'infrastructure un maillon de la conformité. Les opérateurs capables de documenter ce qui tourne chez eux tiennent un nouvel argument de vente.",
      p1: "Rappel du calendrier. Le règlement est entré en vigueur en août 2024. Les obligations pour les modèles d'IA à finalité générale s'appliquent depuis août 2025, et celles des systèmes à haut risque arrivent entre août 2026 et août 2027. Au-delà de 10^25 FLOPs d'entraînement, un modèle est présumé présenter un risque systémique — avec des obligations renforcées.",
      p2: "Ces obligations descendent la chaîne. Le fournisseur de modèle doit documenter l'énergie consommée par l'entraînement, le type de calcul utilisé et l'origine des données. Or toutes ces informations se trouvent physiquement dans un datacenter : le client demandera demain à son hébergeur des relevés que celui-ci n'a jamais eu à produire.",
      h2_1: "Une clause qui change les contrats",
      p3: "Les premiers effets sont contractuels. Les hyperscalers et les laboratoires d'IA intègrent désormais dans leurs accords de colocation des clauses de reporting : consommation par rack, mix énergétique horaire, journalisation des clusters d'entraînement. Un site incapable de fournir ces données se ferme une clientèle entière.",
      p4: "L'inverse est vrai aussi : un datacenter qui industrialise ce reporting — relevés automatisés, données horaires, traçabilité par cluster — peut facturer la conformité comme un service. La documentation devient une prestation, pas une corvée.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "La conformité AI Act crée une segmentation entre actifs documentés et actifs opaques. Un datacenter dont l'instrumentation produit nativement les relevés exigés capte la demande des fournisseurs de modèles soumis au règlement — c'est-à-dire bientôt tous ceux qui entraînent en Europe ou pour le marché européen.",
      p6: "Le risque est symétrique : un actif acheté sans instrumentation devra être rétrofité pour rester louable aux clients IA, un coût qui doit figurer dans le business plan dès l'acquisition. La question « le site produit-il ses relevés ? » rejoint le trio classique puissance, PUE, connectivité.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, nous scorons désormais la conformité documentaire des actifs : instrumentation par rack, historisation des consommations, capacité à isoler les relevés par client. Les transformations brown intègrent ce reporting dès la conception, au même titre que le refroidissement liquide.",
      p8: "Cette exigence rejoint notre lecture de la souveraineté numérique : les clients qui entraînent des modèles soumis à l'AI Act préfèrent des infrastructures européennes documentées plutôt que des capacités offshore opaques. La réglementation devient un avantage commercial pour qui s'y prépare.",
      h2_4: "Ce qu'il faut retenir",
      p9: "L'AI Act déplace la conformité vers l'infrastructure : énergie, calcul et données d'entraînement devront être documentés, et les datacenters fourniront les preuves. Les actifs instrumentés y gagnent ; les autres paieront le rattrapage.",
      p10: "À surveiller : les premiers codes de bonne pratique GPAI publiés par la Commission, et l'apparition des clauses de reporting AI Act dans les appels d'offres de colocation.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "AI Act and Datacenters: What European Regulation Changes for AI Infrastructure",
      description: "The AI Act requires AI model providers to fully document training — energy, compute, data. European datacenters become a link in the compliance chain, and documented capacity gains value.",
      tag: "Digital Infrastructure",
      date: "October 12, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "The AI Act does not target datacenters — yet it will transform them. By requiring model providers to document training in detail, the European regulation turns infrastructure into a link in the compliance chain. Operators able to document what runs in their facilities hold a new selling point.",
      p1: "A calendar reminder. The regulation entered into force in August 2024. Obligations for general-purpose AI models have applied since August 2025, and those for high-risk systems arrive between August 2026 and August 2027. Beyond 10^25 training FLOPs, a model is presumed to pose systemic risk — with reinforced obligations.",
      p2: "These obligations flow down the chain. The model provider must document the energy consumed by training, the type of compute used and the origin of the data. Yet all of this information physically lives in a datacenter: tomorrow, customers will ask their host for reports the host has never had to produce.",
      h2_1: "A Clause That Changes Contracts",
      p3: "The first effects are contractual. Hyperscalers and AI labs now embed reporting clauses in their colocation agreements: consumption per rack, hourly energy mix, logging of training clusters. A site unable to provide this data closes itself off from an entire customer base.",
      p4: "The reverse is also true: a datacenter that industrializes this reporting — automated records, hourly data, per-cluster traceability — can charge for compliance as a service. Documentation becomes a product, not a chore.",
      h2_2: "What This Changes for Investors",
      p5: "AI Act compliance creates a segmentation between documented and opaque assets. A datacenter whose instrumentation natively produces the required records captures demand from model providers subject to the regulation — soon, everyone training in Europe or for the European market.",
      p6: "The risk is symmetric: an asset bought without instrumentation will need retrofitting to remain rentable to AI customers, a cost that must sit in the business plan from acquisition. The question 'does the site produce its records?' joins the classic trio of power, PUE and connectivity.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, we now score the documentary compliance of assets: per-rack instrumentation, consumption historization, ability to isolate records per customer. Brown transformations embed this reporting from the design stage, alongside liquid cooling.",
      p8: "This requirement echoes our reading of digital sovereignty: customers training models subject to the AI Act prefer documented European infrastructure over opaque offshore capacity. Regulation becomes a commercial advantage for those who prepare for it.",
      h2_4: "Key Takeaways",
      p9: "The AI Act pushes compliance down to infrastructure: training energy, compute and data will have to be documented, and datacenters will supply the evidence. Instrumented assets win; the others will pay for the catch-up.",
      p10: "Worth watching: the first GPAI codes of practice published by the Commission, and the arrival of AI Act reporting clauses in colocation tenders.",
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
    "datePublished": "2026-10-12T09:00:00+02:00",
    "dateModified": "2026-10-12T09:00:00+02:00",
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
    "articleSection": "Digital Infrastructure",
    "keywords": language === 'fr' ? "AI Act, datacenter, IA, souveraineté numérique, conformité, investissement infrastructure IA, cloud souverain" : "AI Act, datacenter, AI, digital sovereignty, compliance, AI infrastructure investment, sovereign cloud"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/ai-act-datacenters-europe-obligations-investissement-2026" : "https://finxiacapital.com/en/blog/ai-act-european-datacenters-obligations-investment-2026"
      }
    ]
  };

  return (
    <div data-testid="article-ai-act-datacenters-europe-obligations-investissement-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/ai-act-datacenters-europe-obligations-investissement-2026/" : "https://finxiacapital.com/en/blog/ai-act-european-datacenters-obligations-investment-2026/"}
        keywords={language === 'fr' ? "AI Act, datacenter, IA, souveraineté numérique, conformité, investissement infrastructure IA, cloud souverain" : "AI Act, datacenter, AI, digital sovereignty, compliance, AI infrastructure investment, sovereign cloud"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/ai-act-datacenters-europe-obligations-investissement-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/ai-act-european-datacenters-obligations-investment-2026/"
        hreflangDefault="https://finxiacapital.com/blog/ai-act-datacenters-europe-obligations-investissement-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-12">
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
