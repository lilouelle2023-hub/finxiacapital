import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleDsxPodPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "NVIDIA DSX POD : l'usine à IA en conteneur qui redéfinit le modular datacenter",
      description: "Annoncé au GTC Berlin : le DSX POD de NVIDIA embarque sept racks Vera Rubin dans un conteneur assemblé et validé en usine, déployable en 14 jours sur un site préparé. Le modular datacenter passe à l'échelle industrielle — et le time-to-tokens devient la métrique qui compte.",
      tag: "Digital Infrastructure",
      date: "22 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "C'est l'une des annonces marquantes du GTC Berlin : NVIDIA a présenté le DSX POD, une usine à IA complète — sept racks Vera Rubin, réseau, câblage, alimentation et refroidissement liquide — assemblée et validée en usine dans un conteneur de 28 tonnes, transportable par camion sur route ordinaire. Sur un site préparé, le déploiement passerait de six mois à quatorze jours.",
      p1: "Le principe inverse la logique historique du datacenter. Jusqu'ici, tout se construisait sur place : le bâtiment, puis l'énergie, puis les racks, puis le câblage, puis la validation — une séquence qui courait sur des années. Avec le DSX POD, l'intégration se fait en usine, en parallèle de la préparation du site. Arrivé à destination, le conteneur n'a plus qu'à être posé, raccordé et testé, a expliqué Ian Buck, vice-président hyperscale de NVIDIA.",
      p2: "Dix-sept partenaires industriels sont associés au programme — Dell, HPE, Lenovo, Schneider Electric, Vertiv, Eaton, Delta ou encore le français Bull — avec des livraisons mondiales annoncées pour début 2027. Vertiv et NVIDIA affichent de leur côté une approche pré-ingénierée qui, dans leur scénario modélisé, génère jusqu'à 30 % de tokens cumulés supplémentaires sur les douze premiers mois à capacité installée égale ; Polar Data Centers l'applique déjà à la première phase de 41 MW de son site de Herøya, en Norvège.",
      h2_1: "Le time-to-tokens, nouvelle métrique de l'infrastructure",
      p3: "Jensen Huang l'a résumé en une phrase : une usine à IA crée de la valeur quand elle commence à produire des tokens, pas quand la construction est terminée. Chaque mois de chantier est un mois de revenus perdus sur des actifs qui coûtent des centaines de millions d'euros. La vitesse de mise en production devient un avantage compétitif mesurable — et un critère d'investissement à part entière.",
      p4: "Pour l'Europe, où les délais de permis et de raccordement électrique sont le premier goulot d'étranglement, l'équation change de nature : le temps de construction n'est plus le problème. C'est la préparation du site — foncier, puissance, raccordement — qui devient le chemin critique. Le conteneur n'efface pas la contrainte électrique, il la met en évidence.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "La standardisation réduit le risque d'exécution poste par poste : moins d'intégration sur site, moins d'aléas de chantier, une validation industrielle en amont. Pour un investisseur en infrastructure, cela se traduit par des courbes de montée en charge plus prévisibles et un capital qui reste moins longtemps immobilisé sans revenus.",
      p6: "Mais la valeur ne disparaît pas, elle se déplace : vers les sites préparés — foncier viabilisé, mégawatts contractualisés, permis obtenus — et vers l'exploitation. Un conteneur livré en quatorze jours sur un site sans électricité reste un conteneur. La rareté n'est plus dans le matériel, elle est dans le mégawatt.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, cette industrialisation conforte notre lecture : la valeur se concentre sur ce qui ne s'industrialise pas — le foncier connecté, la puissance électrique sécurisée, les permis. Nos actifs sont précisément ces sites préparés sur lesquels les capacités pré-fabriquées viendront se poser.",
      p8: "Notre approche brown-to-green y trouve un relais direct : transformer un site existant, déjà alimenté et raccordé, c'est offrir exactement ce que le modèle DSX POD exige — une plateforme prête à recevoir de la capacité en semaines plutôt qu'en années.",
      h2_4: "Ce qu'il faut retenir",
      p9: "Le DSX POD fait passer le modular datacenter du prototype à l'industrie : une usine à IA validée en usine, déployée en quatorze jours, livrée par dix-sept partenaires dès début 2027. La construction cesse d'être le goulot d'étranglement ; le site préparé et le mégawatt deviennent les actifs critiques.",
      p10: "À surveiller : les premières livraisons DSX POD début 2027 et les premiers déploiements européens — à commencer par le site Polar de Herøya, qui servira de référence opérationnelle.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "NVIDIA DSX POD: The Containerized AI Factory Redefining the Modular Datacenter",
      description: "Announced at GTC Berlin: NVIDIA's DSX POD packs seven Vera Rubin racks into a container assembled and validated at the factory, deployable in 14 days on a prepared site. The modular datacenter goes industrial — and time-to-tokens becomes the metric that matters.",
      tag: "Digital Infrastructure",
      date: "October 22, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "One of the standout announcements at GTC Berlin: NVIDIA introduced DSX POD, a complete AI factory — seven Vera Rubin racks, networking, cabling, power and liquid cooling — assembled and validated at the plant inside a 28-tonne container that can travel by truck on ordinary roads. On a prepared site, deployment drops from six months to as little as fourteen days.",
      p1: "The principle reverses the historical logic of the datacenter. Until now, everything was built on site: the building, then power, then racks, then cabling, then validation — a sequence that ran over years. With DSX POD, integration happens in the factory, in parallel with site preparation. Once delivered, the container only needs to be placed, connected and tested, explained Ian Buck, NVIDIA's vice president of hyperscale computing.",
      p2: "Seventeen industrial partners are part of the program — Dell, HPE, Lenovo, Schneider Electric, Vertiv, Eaton, Delta and France's Bull among them — with worldwide deliveries announced for early 2027. Vertiv and NVIDIA, for their part, tout a pre-engineered approach that, in their modeled scenario, generates up to 30% more cumulative tokens over the first twelve months at equal installed capacity; Polar Data Centers is already applying it to the first 41 MW phase of its Herøya site in Norway.",
      h2_1: "Time-to-Tokens: Infrastructure's New Metric",
      p3: "Jensen Huang summed it up in one sentence: an AI factory creates value when it starts producing tokens, not when construction is complete. Every month of construction is a month of lost revenue on assets costing hundreds of millions of euros. Speed to production becomes a measurable competitive advantage — and an investment criterion in its own right.",
      p4: "For Europe, where permitting and grid connection delays are the primary bottleneck, the equation changes in nature: construction time is no longer the problem. Site preparation — land, power, grid connection — becomes the critical path. The container does not erase the power constraint; it highlights it.",
      h2_2: "What This Changes for Investors",
      p5: "Standardization reduces execution risk line by line: less on-site integration, fewer construction contingencies, industrial validation upstream. For an infrastructure investor, this translates into more predictable ramp-up curves and capital that sits idle for less time without revenue.",
      p6: "But value does not disappear — it shifts: toward prepared sites — serviced land, contracted megawatts, granted permits — and toward operations. A container delivered in fourteen days to a site without power remains a container. Scarcity is no longer in the hardware; it is in the megawatt.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, this industrialization confirms our reading: value concentrates on what cannot be industrialized — connected land, secured electrical power, permits. Our assets are precisely those prepared sites on which prefabricated capacity will land.",
      p8: "Our brown-to-green approach finds a direct relay here: transforming an existing site, already powered and connected, offers exactly what the DSX POD model requires — a platform ready to receive capacity in weeks rather than years.",
      h2_4: "Key Takeaways",
      p9: "DSX POD moves the modular datacenter from prototype to industry: an AI factory validated at the plant, deployed in fourteen days, delivered by seventeen partners from early 2027. Construction ceases to be the bottleneck; the prepared site and the megawatt become the critical assets.",
      p10: "Worth watching: the first DSX POD deliveries in early 2027 and the first European deployments — starting with Polar's Herøya site, which will serve as the operational reference.",
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
    "datePublished": "2026-10-22T09:00:00+02:00",
    "dateModified": "2026-10-22T09:00:00+02:00",
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
    "keywords": language === 'fr' ? "NVIDIA DSX POD, modular datacenter, usine IA, datacenter conteneur, IA, GPU, Vera Rubin, infrastructure IA, edge computing" : "NVIDIA DSX POD, modular datacenter, AI factory, container datacenter, AI, GPU, Vera Rubin, AI infrastructure, edge computing"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/nvidia-dsx-pod-usine-ia-conteneur-modular-datacenter-europe-2026" : "https://finxiacapital.com/en/blog/nvidia-dsx-pod-containerized-ai-factory-modular-datacenter-europe-2026"
      }
    ]
  };

  return (
    <div data-testid="article-nvidia-dsx-pod-usine-ia-conteneur-modular-datacenter-europe-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/nvidia-dsx-pod-usine-ia-conteneur-modular-datacenter-europe-2026/" : "https://finxiacapital.com/en/blog/nvidia-dsx-pod-containerized-ai-factory-modular-datacenter-europe-2026/"}
        keywords={language === 'fr' ? "NVIDIA DSX POD, modular datacenter, usine IA, datacenter conteneur, IA, GPU, Vera Rubin, infrastructure IA, edge computing" : "NVIDIA DSX POD, modular datacenter, AI factory, container datacenter, AI, GPU, Vera Rubin, AI infrastructure, edge computing"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/nvidia-dsx-pod-usine-ia-conteneur-modular-datacenter-europe-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/nvidia-dsx-pod-containerized-ai-factory-modular-datacenter-europe-2026/"
        hreflangDefault="https://finxiacapital.com/blog/nvidia-dsx-pod-usine-ia-conteneur-modular-datacenter-europe-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-22">
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
