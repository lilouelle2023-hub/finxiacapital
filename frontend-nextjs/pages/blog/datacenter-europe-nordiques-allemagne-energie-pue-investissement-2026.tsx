import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleNordiquesAllemagneDatacenterPage() {
  const { language } = useLanguage();

  const content = {
    "fr": {
        "title": "Datacenter : pourquoi les capitaux remontent vers les pays nordiques et l'Allemagne",
        "description": "Électricité renouvelable, free cooling et chaleur fatale attirent les capitaux dans les pays nordiques, tandis que l'Allemagne combine demande cloud, interconnexion et règles PUE exigeantes. Analyse des avantages, coûts et risques pour l'investisseur en datacenter.",
        "tag": "Digital Infrastructure",
        "lead": "La carte européenne du datacenter ne se lit plus seulement depuis Francfort, Londres, Amsterdam ou Paris. Elle remonte vers l'hydroélectricité scandinave et les réseaux de chaleur finlandais, tout en restant solidement ancrée en Allemagne. Deux logiques différentes attirent les capitaux : au nord, l'énergie et le climat ; en Allemagne, la demande et l'interconnexion.",
        "p1": "Le mouvement nordique est mesurable. Microsoft a engagé 3,2 milliards de dollars pour développer son infrastructure cloud et IA en Suède. En 2026, Equinix et CPP Investments ont acquis atNorth sur la base d'une valeur d'entreprise d'environ 4 milliards de dollars, avec 1 GW de puissance sécurisée pour sa croissance. Le marché ne paie pas seulement des bâtiments : il paie un accès futur à l'électricité.",
        "p2": "Le climat fait une partie du travail de refroidissement. Le free cooling et les températures froides permettent à de nouveaux sites de viser un PUE autour de 1,1 à 1,2, sous réserve de la charge et de la conception. Les réseaux de chaleur urbains offrent en outre un débouché à la chaleur fatale. Mais un PUE théorique n'est ni un PUE annuel mesuré ni une garantie de marge.",
        "h2_1": "Nordiques et Allemagne : deux thèses, pas une seule",
        "p3": "Dans les pays nordiques, l'investisseur cherche d'abord une électricité abondante et bas carbone, du foncier et une efficacité énergétique favorable. En Allemagne, il achète plutôt la proximité des entreprises, du cloud souverain et de DE-CIX à Francfort. Google illustre cette profondeur de demande avec un programme de 5,5 milliards d'euros entre 2026 et 2029, comprenant un nouveau datacenter à Dietzenbach et des investissements à Hanau.",
        "p4": "L'Allemagne impose aussi le cadre technique le plus visible. Dans l'état actuel de l'EnEfG, les nouveaux datacenters mis en service depuis juillet 2026 doivent atteindre un PUE maximal de 1,2 et un taux de réutilisation d'énergie de 10 %, puis 15 % en 2027 et 20 % en 2028 selon leur date d'ouverture. Une réforme est en discussion : les textes applicables et le calendrier doivent donc être revérifiés à chaque closing.",
        "h2_2": "Pour et contre : ce que cache le PUE",
        "p5": "Pour les Nordiques : énergie renouvelable, climat favorable, possibilités de valoriser la chaleur et foncier disponible hors des métropoles. Contre : coûts de construction, éloignement de certains clients, files de raccordement et fiscalité moins accommodante. La Finlande a ainsi fait passer les datacenters de la classe d'électricité réduite à la classe générale le 1er juillet 2026, soit +2,19 centimes par kWh selon le gouvernement.",
        "p6": "Pour l'Allemagne : clients industriels denses, écosystème cloud et interconnexion de premier plan. Contre : prix de l'électricité, réseau contraint autour de Francfort et obligations de chaleur qui imposent un débouché réel. Un site excellent pour l'inférence de proximité n'est pas nécessairement le meilleur pour un entraînement HPC massif. La charge de travail doit décider de la géographie.",
        "h2_3": "Comment nous l'appliquons chez FINXIA",
        "p7": "Dans TITAN DC AI, nous comparons le coût complet du mégawatt livré : raccordement, fiscalité, construction, refroidissement et délai de mise en service. Nous distinguons également la chaleur techniquement récupérable de la chaleur réellement vendue ou injectée dans un réseau. Cette différence change le compte d'exploitation et la conformité réglementaire.",
        "p8": "Notre lecture brown-to-green privilégie les friches électro-intensives lorsque les infrastructures existantes raccourcissent réellement le projet. Elle reste sélective : un raccordement ancien peut être insuffisant pour des racks NVIDIA haute densité, et un réseau de chaleur proche ne vaut que si son opérateur veut contractualiser.",
        "h2_4": "Ce qu'il faut retenir",
        "p9": "Les Nordiques sont une thèse énergie-efficacité ; l'Allemagne une thèse demande-interconnexion sous contrainte réglementaire. Aucune n'est supérieure en soi. Le bon choix dépend du client, de la latence, du prix complet de l'électricité et du calendrier de raccordement. Les meilleurs projets documentent ces quatre éléments avant d'annoncer des mégawatts.",
        "p10": "À surveiller : les prix de l'électricité par zone, les délais réels de raccordement, l'évolution de l'EnEfG allemand et la capacité des opérateurs à publier des PUE et taux de réutilisation mesurés plutôt que des objectifs de conception.",
        "learnMoreTitle": "En savoir plus",
        "link1Title": "Nos Stratégies",
        "link1Desc": "Découvrez TITAN et nos 3 autres pôles d'investissement",
        "link2Title": "Approche Européenne",
        "link2Desc": "France, Espagne, Italie : nos marchés cibles européens",
        "date": "28 octobre 2026",
        "readTime": "6 min de lecture",
        "backToBlog": "Retour au blog",
        "authorBio": "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA."
    },
    "en": {
        "title": "Datacenters: Why Capital Is Moving to the Nordics and Germany",
        "description": "Renewable power, free cooling and heat reuse attract capital to the Nordics, while Germany offers cloud demand and interconnection under strict PUE rules. A comparison of the advantages, costs and risks for datacenter investors.",
        "tag": "Digital Infrastructure",
        "lead": "Europe's datacenter map no longer revolves only around FLAP markets. Capital is moving toward Scandinavian hydropower and Finnish district heating, while Germany retains its gravitational pull. These are two different investment theses: energy and climate in the north, demand and interconnection in Germany.",
        "p1": "The Nordic shift is tangible. Microsoft committed $3.2 billion to Swedish cloud and AI infrastructure. In 2026, Equinix and CPP Investments acquired atNorth at an enterprise value of about $4 billion, with 1 GW of secured power for expansion. Investors are buying future power access as much as buildings.",
        "p2": "Cold weather supports free cooling and new-site PUE targets around 1.1 to 1.2, depending on load and design. District-heating networks can monetise waste heat. But design PUE is neither measured annual PUE nor guaranteed margin.",
        "h2_1": "Two Distinct Investment Cases",
        "p3": "The Nordics offer low-carbon energy, land and cooling advantages. Germany offers enterprise demand, sovereign-cloud requirements and DE-CIX interconnection. Google's €5.5 billion programme for 2026-2029, including Dietzenbach and Hanau, demonstrates the depth of that demand.",
        "p4": "Germany also has the most visible technical framework. Under the current EnEfG, new facilities commissioned from July 2026 must reach PUE 1.2 and staged energy-reuse requirements of 10%, 15% and 20%. Reform discussions make transaction-date legal checks essential.",
        "h2_2": "Pros and Cons Beyond PUE",
        "p5": "Nordic advantages include renewable energy, climate, heat networks and land. Drawbacks include construction costs, distance from some customers, grid queues and changing taxation. Finland moved datacenters into its general electricity-tax class on 1 July 2026, adding 2.19 euro cents per kWh according to the government.",
        "p6": "Germany offers industrial customers and exceptional interconnection, but power prices, Frankfurt grid constraints and heat-reuse duties raise the bar. A low-latency inference site and a massive HPC training campus do not call for the same geography.",
        "h2_3": "How We Apply This at FINXIA",
        "p7": "Within TITAN DC AI, we compare the full cost per delivered megawatt: grid connection, tax, construction, cooling and commissioning delay. We also separate technically recoverable heat from heat actually sold or injected into a network.",
        "p8": "Our brown-to-green approach favours electro-intensive brownfields only where existing infrastructure genuinely shortens delivery. Legacy power may not support high-density NVIDIA racks, and nearby district heating matters only with a credible counterparty.",
        "h2_4": "Key Takeaways",
        "p9": "The Nordics are an energy-efficiency thesis; Germany is a demand-and-interconnection thesis under regulatory pressure. Workload, latency, full power cost and connection timing should determine the choice.",
        "p10": "Watch zonal power prices, actual grid queues, EnEfG reform and whether operators publish measured PUE and heat-reuse performance rather than design targets.",
        "learnMoreTitle": "Learn more",
        "link1Title": "Our Strategies",
        "link1Desc": "Discover TITAN and our 3 other investment poles",
        "link2Title": "European Approach",
        "link2Desc": "France, Spain, Italy: our European target markets",
        "date": "October 28, 2026",
        "readTime": "6 min read",
        "backToBlog": "Back to blog",
        "authorBio": "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure."
    }
};

  const t = content[language];
  const frUrl = "https://finxiacapital.com/blog/datacenter-europe-nordiques-allemagne-energie-pue-investissement-2026/";
  const enUrl = "https://finxiacapital.com/en/blog/datacenter-europe-nordics-germany-energy-pue-investment-2026/";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-10-28T09:00:00+01:00",
    "dateModified": "2026-10-28T09:00:00+01:00",
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
    "articleSection": "Digital Infrastructure",
    "keywords": language === 'fr' ? "datacenter, pays nordiques, Allemagne, PUE, énergie, HPC, NVIDIA, green datacenter, investissement" : "datacenter, Nordics, Germany, PUE, energy, HPC, NVIDIA, green datacenter, investment"
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
    <div data-testid="article-datacenter-nordiques-allemagne-page" className="pt-20">
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-28"><Calendar className="w-4 h-4" />{t.date}</time>
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
