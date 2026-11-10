import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleGoogleTpuInferencePage() {
  const { language } = useLanguage();

  const content = {
      "fr": {
            "title": "Google TPU 8tx et 8i Max : l'inférence devient la contrainte n°1 des datacenters",
            "description": "Google dévoile ses TPU 8tx et 8i Max, quatrième système TPU de l'année, déjà adopté par une centaine de clients. La demande IA bascule du training vers l'inférence continue : conséquences pour la conception des datacenters, le PUE et la stratégie d'investissement.",
            "tag": "Market Analysis",
            "date": "10 novembre 2026",
            "readTime": "7 min de lecture",
            "backToBlog": "Retour au blog",
            "lead": "Le 9 novembre, Google a présenté deux nouveaux systèmes TPU — 8tx et 8i Max —, le quatrième lancement silicium de l'année, revendiquant déjà une centaine de clients selon Amin Vahdat, responsable de l'infrastructure IA du groupe. Le signal est limpide : la bataille de l'IA ne se joue plus seulement sur l'entraînement des modèles, mais sur l'inférence, cette charge continue qui servira des milliards de requêtes quotidiennes. Pour les propriétaires de datacenters, c'est un changement de régime.",
            "p1": "Le rythme de Google est sans précédent : quatre générations de TPU en un an, là où le cycle historique du silicium était de dix-huit à vingt-quatre mois. Cette accélération confirme ce que les résultats des néoclouds — CoreWeave publie ce soir, Nebius jeudi — vont mesurer en temps réel : la demande de calcul ne ralentit pas, elle change de nature. L'entraînement crée des pics massifs et ponctuels ; l'inférence crée une charge permanente, prévisible, qui se monétise à la requête.",
            "p2": "Pour un actif immobilier, la différence est fondamentale. Un datacenter d'inférence doit tenir une densité élevée en continu, pas par à-coups ; il doit être proche des utilisateurs pour limiter la latence — ce qui redonne de la valeur aux sites périurbains européens et à l'edge computing ; et il doit absorber des architectures multiples, car aucun opérateur ne veut dépendre d'un seul fournisseur de puces, NVIDIA comprise.",
            "h2_1": "De la salle de training à l'usine d'inférence",
            "p3": "Les datacenters de training se concevaient comme des cathédrales : quelques sites gigantesques, très énergivores, optimisés pour des clusters homogènes. L'inférence impose une logique industrielle différente : capacité répartie, disponibilité maximale, coût par requête comme métrique reine. Le coût marginal de l'inférence — électricité, refroidissement, amortissement du silicium — détermine directement la marge des modèles. Quand Anthropic réduit de 20 % le prix de ses modèles Fable 5.2 et Mythos 5.2, comme le 9 novembre, c'est l'efficacité de l'infrastructure sous-jacente qui paie la différence.",
            "p4": "Cette évolution joue en faveur de l'Europe du sud et des sites brown-to-green : plutôt que des greenfields géants loin des bassins d'usage, l'inférence récompense des actifs de 5 à 40 MW bien connectés, proches des métropoles, alimentés en électricité décarbonée et capables d'accueillir successivement plusieurs générations de puces.",
            "h2_2": "Conception : densité continue, refroidissement, PUE",
            "p5": "Techniquement, l'inférence à grande échelle pousse trois curseurs. La densité par rack, qui rapproche les configurations inférence des standards HPC — le refroidissement liquide devient la norme, pas l'option. Le PUE, qui redevient une variable de compétitivité directe puisque chaque point d'efficacité se traduit en coût par requête. Et la flexibilité électrique : un actif capable de moduler sa charge gagne des revenus d'effacement et s'intègre mieux aux réseaux européens contraints.",
            "p6": "La réglementation EED, qui impose désormais la déclaration des performances énergétiques des datacenters en Europe, accélère ce tri : les actifs les moins efficaces verront leur coût d'exploitation publié et comparé. Dans un marché de l'inférence où la marge se joue au centime par million de tokens, la transparence énergétique devient un avantage commercial.",
            "h2_3": "Lecture investissement : privilégier les actifs multi-architectures",
            "p7": "Notre grille de lecture reste celle de la hiérarchie des preneurs, mais elle s'enrichit d'un critère : l'actif doit pouvoir servir successivement du GPU NVIDIA, du TPU hébergé, des puces d'inférence spécialisées type Cerebras, et demain d'autres architectures. Un bâtiment mono-architecture concentre un risque d'obsolescence que le rythme actuel du silicium — quatre TPU en un an — rend inacceptable pour un investisseur de long terme.",
            "p8": "C'est la logique de TITAN DC AI : des actifs réversibles, refroidissables en liquide, connectés aux bassins de demande européens, loués à des signatures solides. L'explosion de l'inférence élargit le pool de locataires potentiels — opérateurs de cloud souverain, hébergeurs, industriels déployant leurs propres modèles — au-delà du seul marché du training hyperscale.",
            "h2_4": "Ce qu'il faut retenir",
            "p9": "Trois faits structurent le marché cette semaine : Google industrialise l'inférence avec ses TPU 8tx et 8i Max et une centaine de clients ; les résultats de CoreWeave et Nebius vont donner la température de la demande de capacité ; et la guerre des prix des modèles transfère la pression sur l'efficacité des infrastructures. Le centre de gravité de la valeur se déplace du training vers l'inférence continue.",
            "p10": "Pour l'investisseur, la conséquence est claire : les actifs gagnants de la prochaine décennie ne seront pas nécessairement les plus gros, mais les plus flexibles — densité élevée en continu, refroidissement liquide, PUE bas documenté, proximité des usages, multi-architectures. C'est précisément le cahier des charges que nous appliquons à chaque acquisition.",
            "authorBio": "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
            "learnMoreTitle": "En savoir plus",
            "link1Title": "Nos Stratégies",
            "link1Desc": "Découvrez TITAN et nos 3 autres pôles d'investissement",
            "link2Title": "Approche Européenne",
            "link2Desc": "France, Espagne, Italie : nos marchés cibles européens"
      },
      "en": {
            "title": "Google TPU 8tx and 8i Max: Inference Becomes the #1 Datacenter Constraint",
            "description": "Google unveiled TPU 8tx and 8i Max, its fourth TPU system this year, already serving around a hundred customers. AI demand is shifting from training to continuous inference: consequences for datacenter design, PUE and investment strategy.",
            "tag": "Market Analysis",
            "date": "November 10, 2026",
            "readTime": "6 min read",
            "backToBlog": "Back to blog",
            "lead": "On November 9, Google introduced two new TPU systems — 8tx and 8i Max — its fourth silicon launch of the year, claiming around a hundred customers according to AI infrastructure chief Amin Vahdat. The signal is clear: the AI race is no longer only about training models, but about inference, the continuous workload serving billions of daily queries. For datacenter owners, this is a regime change.",
            "p1": "Google's pace is unprecedented: four TPU generations in one year, where the historical silicon cycle ran eighteen to twenty-four months. It confirms what neocloud earnings — CoreWeave tonight, Nebius Thursday — will measure in real time: compute demand is not slowing, it is changing nature. Training creates massive one-off peaks; inference creates permanent, predictable load monetised per query.",
            "p2": "For a real-estate asset, the difference is fundamental. An inference datacenter must sustain high density continuously, not in bursts; it must sit close to users to limit latency — restoring value to peri-urban European sites and edge computing; and it must absorb multiple architectures, as no operator wants to depend on a single chip vendor, NVIDIA included.",
            "h2_1": "From Training Hall to Inference Factory",
            "p3": "Training datacenters were designed as cathedrals: a few gigantic, energy-hungry sites optimised for homogeneous clusters. Inference imposes a different industrial logic: distributed capacity, maximum availability, cost per query as the core metric. The marginal cost of inference — power, cooling, silicon depreciation — directly determines model margins. When Anthropic cut Fable 5.2 and Mythos 5.2 prices by 20% on November 9, the underlying infrastructure efficiency paid the difference.",
            "p4": "This favours Southern Europe and brown-to-green sites: rather than giant greenfields far from demand, inference rewards 5-40 MW assets, well connected, near metro areas, powered by low-carbon electricity, able to host successive chip generations.",
            "h2_2": "Design: Continuous Density, Cooling, PUE",
            "p5": "At scale, inference pushes three sliders: rack density, bringing inference configurations close to HPC standards — liquid cooling becomes the norm, not an option; PUE, again a direct competitiveness variable since every efficiency point translates into cost per query; and electrical flexibility — assets able to modulate load earn demand-response revenues and integrate better with constrained European grids.",
            "p6": "The EED regulation, which now mandates energy performance reporting for European datacenters, accelerates this sorting: the least efficient assets will see operating costs published and compared. In an inference market where margins are fought over cents per million tokens, energy transparency becomes a commercial edge.",
            "h2_3": "Investment View: Favour Multi-Architecture Assets",
            "p7": "Our tenant-hierarchy framework gains one criterion: the asset must serve successively NVIDIA GPUs, hosted TPUs, specialised inference chips such as Cerebras, and tomorrow other architectures. A mono-architecture building concentrates an obsolescence risk that the current silicon pace — four TPUs in a year — makes unacceptable for a long-term investor.",
            "p8": "That is the TITAN DC AI logic: reversible, liquid-cooling-ready assets, connected to European demand pools, leased to strong signatures. The inference boom widens the pool of potential tenants — sovereign cloud operators, hosters, industrials deploying their own models — beyond hyperscale training alone.",
            "h2_4": "Key Takeaways",
            "p9": "Three facts structure the market this week: Google is industrialising inference with TPU 8tx and 8i Max and a hundred customers; CoreWeave and Nebius earnings will take the temperature of capacity demand; and the model price war transfers pressure onto infrastructure efficiency. The centre of gravity of value is shifting from training to continuous inference.",
            "p10": "For investors, the consequence is clear: the winning assets of the next decade will not necessarily be the largest, but the most flexible — sustained high density, liquid cooling, documented low PUE, proximity to usage, multi-architecture. That is precisely the specification we apply to every acquisition.",
            "authorBio": "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
            "learnMoreTitle": "Learn more",
            "link1Title": "Our Strategies",
            "link1Desc": "Discover TITAN and our 3 other investment poles",
            "link2Title": "European Approach",
            "link2Desc": "France, Spain, Italy: our European target markets"
      }
};

  const t = content[language];
  const frUrl = "https://finxiacapital.com/blog/google-tpu-8tx-inference-datacenter-europe-2026/";
  const enUrl = "https://finxiacapital.com/en/blog/google-tpu-8tx-8i-max-inference-datacenters-europe-2026/";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-11-10T09:00:00+01:00",
    "dateModified": "2026-11-10T09:00:00+01:00",
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
    "keywords": language === 'fr' ? "Google TPU, inference, IA, NVIDIA, GPU, datacenter, HPC, edge computing, investissement" : "Google TPU, inference, AI, NVIDIA, GPU, datacenter, HPC, edge computing, investment"
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
    <div data-testid="article-google-tpu-inference-page" className="pt-20">
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-11-10"><Calendar className="w-4 h-4" />{t.date}</time>
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
