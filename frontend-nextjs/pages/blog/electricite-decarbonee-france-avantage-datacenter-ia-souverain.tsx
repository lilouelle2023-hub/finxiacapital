import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleElectriciteDecarboneePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Électricité décarbonée : l'avantage français qui attire les datacenters IA",
      description: "Mix nucléaire et hydraulique décarboné à plus de 90 %, prix industriels compétitifs : la France devient une destination privilégiée pour les datacenters IA. Analyse d'un avantage sous-estimé.",
      tag: "Energy & Infrastructure",
      date: "11 septembre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Quand Mistral AI lève 3 milliards d'euros et annonce vouloir quadrupler sa capacité de calcul, une question suit immédiatement : où brancher tout cela ? De plus en plus, la réponse est la France. Pas seulement pour des raisons politiques. Pour une raison physique : son électricité.",
      p1: "Le mix électrique français repose sur le nucléaire et l'hydraulique. Résultat : une production décarbonée à plus de 90 %, disponible en continu, à des prix industriels parmi les plus bas d'Europe. Pour un datacenter IA qui tourne vingt-quatre heures sur vingt-quatre, ces trois caractéristiques comptent autant que le tarif affiché au mégawattheure.",
      p2: "La comparaison avec les voisins est instructive. L'Allemagne reste exposée au charbon et à la volatilité des prix depuis sa sortie du nucléaire. L'Irlande, longtemps favorite des hyperscalers, plafonne : les datacenters y absorbent déjà plus d'un cinquième de l'électricité nationale, et les nouveaux projets sont suspendus autour de Dublin. Les Pays-Bas ont connu un moratoire sur les permis.",
      h2_1: "Le carbone devient un critère économique",
      p3: "La directive européenne EED impose aux datacenters un reporting détaillé de leur consommation et de leur empreinte carbone. Les hyperscalers, eux, se sont engagés publiquement sur des objectifs de neutralité. Un mégawatt français, décarboné par construction, leur évite des achats de compensation coûteux et simplifie leur conformité réglementaire.",
      p4: "Les acteurs souverains raisonnent de la même façon. Le projet Campus AI, qui associe Mistral, NVIDIA et Bpifrance, a retenu un premier site de 1,4 GW en Seine-et-Marne. Le deuxième campus, financé à hauteur de 7,5 milliards d'euros avec MGX, suivra la même logique : rester au plus près d'une électricité abondante, stable et propre.",
      h2_2: "Un avantage qui ne se décrète pas",
      p5: "On ne construit pas un parc nucléaire en cinq ans. L'avantage français est le fruit de décisions prises il y a quarante ans, et il n'est pas éternel : les prolongations de réacteurs ont montré à quel point le système reste sensible. Mais à horizon 2030, aucun grand pays européen ne pourra répliquer ce mix.",
      p6: "L'Espagne offre un complément intéressant : un solaire abondant, des prix compétitifs, des terrains disponibles. C'est l'une des raisons pour lesquelles notre cartographie TITAN DC AI couvre les deux pays.",
      h2_3: "Ce que cela change pour l'investisseur",
      p7: "Chez FINXIA Capital, nous intégrons l'intensité carbone de l'électricité locale dans chaque modèle de valorisation. Elle influe sur le PUE effectif, sur l'attractivité locative auprès des hyperscalers, et bientôt sur la valeur de revente, à mesure que le reporting EED devient contraignant.",
      p8: "Concrètement, deux actifs techniquement identiques ne se valent pas s'ils sont branchés sur deux réseaux différents. Celui qui tourne à l'électricité décarbonée loue plus vite, plus cher, et à des locataires plus solides.",
      h2_4: "Ce qu'il faut retenir",
      p9: "La France possède un avantage réel dans la course aux datacenters IA : une électricité abondante, stable et décarbonée. Cet avantage attire déjà les capitaux, de Campus AI aux projets des hyperscalers.",
      p10: "Le risque serait de le gâcher par lenteur administrative. Les files d'attente de raccordement sont l'autre face du succès. Pour l'investisseur, cela renforce la valeur des actifs déjà raccordés ou dont le raccordement est en cours.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Decarbonized Electricity: France's Advantage in Attracting AI Datacenters",
      description: "A nuclear and hydro power mix that is over 90% decarbonized, competitive industrial prices: France is becoming a destination of choice for AI datacenters. Analysis of an underestimated advantage.",
      tag: "Energy & Infrastructure",
      date: "September 11, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "When Mistral AI raises 3 billion euros and announces plans to quadruple its compute capacity, one question follows immediately: where will all of this be plugged in? Increasingly, the answer is France. Not only for political reasons. For a physical one: its electricity.",
      p1: "The French power mix rests on nuclear and hydro. The result: production that is over 90% decarbonized, available around the clock, at industrial prices among the lowest in Europe. For an AI datacenter running 24/7, these three characteristics matter as much as the headline price per megawatt-hour.",
      p2: "The comparison with neighbors is instructive. Germany remains exposed to coal and price volatility since its nuclear exit. Ireland, long a hyperscaler favorite, is hitting a ceiling: datacenters already absorb more than a fifth of national electricity, and new projects around Dublin are suspended. The Netherlands went through a permit moratorium.",
      h2_1: "Carbon Becomes an Economic Criterion",
      p3: "The European EED directive requires datacenters to report their consumption and carbon footprint in detail. Hyperscalers, for their part, have made public neutrality commitments. A French megawatt, decarbonized by construction, saves them costly offset purchases and simplifies regulatory compliance.",
      p4: "Sovereign players reason the same way. Campus AI, which brings together Mistral, NVIDIA and Bpifrance, selected a first 1.4 GW site in the Paris region. The second campus, financed with 7.5 billion euros alongside MGX, will follow the same logic: staying close to abundant, stable and clean power.",
      h2_2: "An Advantage That Cannot Be Decreed",
      p5: "A nuclear fleet is not built in five years. France's advantage is the product of decisions made forty years ago, and it is not eternal, as reactor lifetime extensions have shown. But by 2030, no large European country will be able to replicate this mix.",
      p6: "Spain offers an interesting complement: abundant solar, competitive prices, available land. This is one reason our TITAN DC AI mapping covers both countries.",
      h2_3: "What It Changes for Investors",
      p7: "At FINXIA Capital, we factor the carbon intensity of local electricity into every valuation model. It affects effective PUE, rental attractiveness to hyperscalers, and soon resale value as EED reporting becomes binding.",
      p8: "Concretely, two technically identical assets are not worth the same if they sit on different grids. The one running on decarbonized power leases faster, at higher rents, to stronger tenants.",
      h2_4: "Key Takeaways",
      p9: "France holds a real advantage in the AI datacenter race: abundant, stable, decarbonized electricity. That advantage is already attracting capital, from Campus AI to hyperscaler projects.",
      p10: "The risk would be wasting it through administrative slowness. Connection queues are the flip side of success. For investors, that strengthens the value of assets already connected or in the process of connecting.",
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
    "datePublished": "2026-09-11T09:00:00+02:00",
    "dateModified": "2026-09-11T09:00:00+02:00",
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
    "keywords": language === 'fr' ? "électricité décarbonée, datacenter, IA, nucléaire, souveraineté numérique, green datacenter, PUE, investissement" : "decarbonized electricity, datacenter, AI, nuclear, digital sovereignty, green datacenter, PUE, investment"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/electricite-decarbonee-france-avantage-datacenter-ia-souverain" : "https://finxiacapital.com/en/blog/electricite-decarbonee-france-avantage-datacenter-ia-souverain"
      }
    ]
  };

  return (
    <div data-testid="article-electricite-decarbonee-france-avantage-datacenter-ia-souverain-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/electricite-decarbonee-france-avantage-datacenter-ia-souverain/" : "https://finxiacapital.com/en/blog/electricite-decarbonee-france-avantage-datacenter-ia-souverain/"}
        keywords={language === 'fr' ? "électricité décarbonée, datacenter, IA, nucléaire, souveraineté numérique, green datacenter, PUE, investissement" : "decarbonized electricity, datacenter, AI, nuclear, digital sovereignty, green datacenter, PUE, investment"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/electricite-decarbonee-france-avantage-datacenter-ia-souverain/"
        hreflangEn="https://finxiacapital.com/en/blog/electricite-decarbonee-france-avantage-datacenter-ia-souverain/"
        hreflangDefault="https://finxiacapital.com/blog/electricite-decarbonee-france-avantage-datacenter-ia-souverain/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-09-11">
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
