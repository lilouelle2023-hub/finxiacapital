import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleIberiaDatacenterPage() {
  const { language } = useLanguage();

  const content = {
    "fr": {
        "title": "Espagne et Portugal : la nouvelle frontière du datacenter européen ?",
        "description": "Aragón et Sines concentrent des investissements géants dans les datacenters IA. Énergie renouvelable, foncier et câbles sous-marins soutiennent la péninsule ibérique, mais l'eau, le raccordement et l'exécution restent décisifs pour l'investisseur.",
        "tag": "Market Analysis",
        "lead": "L'Ibérie n'est plus seulement une solution de repli face aux marchés saturés de Francfort ou d'Amsterdam. Elle devient une destination de premier choix pour l'IA. En Aragón, AWS a porté son programme espagnol à 33,7 milliards d'euros en mars 2026. À Sines, Microsoft, Nscale et Start Campus développent une infrastructure adossée à des GPU NVIDIA et aux câbles atlantiques.",
        "p1": "Les chiffres impressionnent, mais la géographie explique surtout le mouvement. L'Aragón offre du foncier, du solaire et de l'éolien, avec une région cloud déjà opérationnelle. Sines ajoute un autre avantage : une position de carrefour entre l'Europe, l'Afrique et les Amériques. Les câbles sous-marins et l'interconnexion transforment un site côtier en infrastructure numérique internationale.",
        "p2": "Start Campus illustre cette combinaison. Son campus vise 1,2 GW sur six bâtiments, sur le site d'une ancienne centrale à charbon. SIN01 est en exploitation ; SIN02 est développé avec une capacité prévue de 180 MW. Le refroidissement réutilise les prises d'eau de mer de l'ancienne centrale, sans consommer d'eau douce pour le refroidissement selon l'exploitant. Le brown-to-green y est concret, pas seulement rhétorique.",
        "h2_1": "Deux places fortes, deux moteurs de valeur",
        "p3": "En Espagne, la valeur vient d'abord de l'échelle énergétique et industrielle. Le programme AWS doit s'étendre aux trois provinces aragonaises, avec des capacités de production et de réparation de serveurs. Microsoft a également annoncé près de 6,7 milliards d'euros d'investissements en Aragón. Cette concentration attire fournisseurs et compétences, mais elle peut aussi tendre les réseaux et les ressources locales.",
        "p4": "Au Portugal, Sines tire sa valeur de la connectivité et de la réutilisation d'un site électro-intensif. Microsoft a annoncé un projet de 10 milliards de dollars avec Nscale et Start Campus ; Nscale prévoit d'y déployer environ 12 600 GPU NVIDIA GB300 dans le cadre initial. Reste à distinguer les montants annoncés, les bâtiments livrés et les contrats effectivement en production.",
        "h2_2": "Pour et contre : l'eau avant le storytelling",
        "p5": "Pour : énergie renouvelable compétitive, disponibilité foncière, câbles internationaux et volonté d'attirer les infrastructures IA. Contre : stress hydrique dans plusieurs zones espagnoles, pics de température estivaux, délais de raccordement autour de certains hubs et risque d'exécution propre aux campus de très grande taille. Le PUE annuel peut diverger fortement du PUE de conception.",
        "p6": "Le refroidissement devient donc un choix d'investissement. L'évaporation peut réduire la consommation électrique mais augmente la pression sur l'eau ; les circuits fermés et le refroidissement direct sur puce changent ce compromis. MSCI estime qu'environ 30 % des datacenters en construction dans le monde se trouvent dans des régions où la rareté de l'eau devrait s'aggraver d'ici 2050. L'Ibérie ne peut pas traiter ce point en note de bas de page.",
        "h2_3": "Comment nous l'appliquons chez FINXIA",
        "p7": "Dans TITAN DC AI, nous examinons séparément l'eau douce, l'eau de mer, la puissance raccordée et la puissance réellement disponible à la date cible. Nous testons le modèle avec des vagues de chaleur et une montée en charge progressive. Un campus n'est pas valorisé sur son gigawatt final, mais sur chaque phase financée, autorisée et louée.",
        "p8": "Sines renforce notre conviction sur le brown-to-green : reprendre une centrale déclassée peut conserver du foncier industriel, des ouvrages de refroidissement et une connexion électrique. Mais chaque actif doit prouver sa performance mesurée, son impact sur le milieu marin et la solidité de ses contrats clients. La réutilisation ne dispense d'aucune diligence.",
        "h2_4": "Ce qu'il faut retenir",
        "p9": "L'Espagne est une thèse d'échelle énergétique et industrielle ; le Portugal, une thèse de connectivité atlantique et de réutilisation d'infrastructures. Les deux peuvent offrir de meilleurs délais que les marchés historiques, mais seulement si l'eau et le réseau sont sécurisés. Pour l'investisseur, la phase livrée compte davantage que le masterplan.",
        "p10": "À surveiller : la mise en service de SIN02, les déploiements NVIDIA effectifs à Sines, les nouvelles autorisations de prélèvement d'eau en Aragón et les délais de raccordement des projets espagnols annoncés.",
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
        "title": "Spain and Portugal: Europe's New Datacenter Frontier?",
        "description": "Aragón and Sines are attracting huge AI datacenter investments. Renewable energy, land and subsea cables support Iberia, but water, grid connections and execution remain decisive for investors.",
        "tag": "Market Analysis",
        "lead": "Iberia is no longer merely an alternative to saturated Frankfurt or Amsterdam. It is becoming a first-choice AI destination. AWS lifted its Spanish programme to €33.7 billion in March 2026, while Microsoft, Nscale and Start Campus are developing NVIDIA-backed infrastructure at Sines.",
        "p1": "Geography explains the shift. Aragón combines land, solar and wind with an operating cloud region. Sines adds Atlantic connectivity between Europe, Africa and the Americas. Subsea cables and interconnection turn a coastal industrial site into international digital infrastructure.",
        "p2": "Start Campus targets 1.2 GW across six buildings on a former coal plant. SIN01 is operational and 180 MW SIN02 is under development. Seawater cooling reuses legacy intake infrastructure and avoids freshwater consumption for cooling, according to the operator.",
        "h2_1": "Two Hubs, Two Value Drivers",
        "p3": "Spain's strength is energy and industrial scale. AWS plans to expand across all three Aragonese provinces, including server manufacturing and repair. Microsoft has announced nearly €6.7 billion for Aragón. This concentration attracts suppliers and skills, but can strain grids and local resources.",
        "p4": "Portugal's Sines proposition rests on connectivity and reuse of an electro-intensive site. Microsoft announced a $10 billion project with Nscale and Start Campus; Nscale's initial plan covers about 12,600 NVIDIA GB300 GPUs. Announcements, delivered buildings and live customer workloads must be assessed separately.",
        "h2_2": "Pros and Cons: Water Before Narrative",
        "p5": "Advantages include competitive renewables, land, international cables and pro-investment policies. Risks include water stress, summer heat, grid delays around some hubs and execution risk on giant campuses. Annual measured PUE can differ materially from design PUE.",
        "p6": "Cooling is therefore an investment choice. Evaporation can save electricity while increasing water pressure; closed loops and direct-to-chip systems change that trade-off. MSCI estimates about 30% of datacenters under construction globally are in regions expected to face worsening water scarcity by 2050.",
        "h2_3": "How We Apply This at FINXIA",
        "p7": "Within TITAN DC AI, we assess freshwater, seawater, connected power and power actually available at the target date separately. Models are stress-tested for heatwaves and phased utilisation. A campus is valued phase by phase, not on its final headline gigawatt.",
        "p8": "Sines supports our brown-to-green conviction: decommissioned power sites can offer industrial land, cooling works and grid infrastructure. Each asset must still prove measured performance, marine impact and customer-contract strength.",
        "h2_4": "Key Takeaways",
        "p9": "Spain is an energy-and-industrial-scale thesis; Portugal is an Atlantic-connectivity and infrastructure-reuse thesis. Both can outperform legacy markets on delivery only when water and grid access are secured.",
        "p10": "Watch SIN02 commissioning, actual NVIDIA deployments at Sines, new water-abstraction permits in Aragón and grid-connection timing for announced Spanish projects.",
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
  const frUrl = "https://finxiacapital.com/blog/datacenter-espagne-portugal-iberia-investissement-sines-aragon-2026/";
  const enUrl = "https://finxiacapital.com/en/blog/datacenter-spain-portugal-iberia-investment-sines-aragon-2026/";

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
    "articleSection": "Market Analysis",
    "keywords": language === 'fr' ? "datacenter, Espagne, Portugal, Ibérie, Sines, Aragón, NVIDIA, GPU, IA, green datacenter" : "datacenter, Spain, Portugal, Iberia, Sines, Aragon, NVIDIA, GPU, AI, green datacenter"
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
    <div data-testid="article-datacenter-espagne-portugal-page" className="pt-20">
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
