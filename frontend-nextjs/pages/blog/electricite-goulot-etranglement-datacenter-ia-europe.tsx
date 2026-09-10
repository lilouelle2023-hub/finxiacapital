import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleElectriciteGoulotPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Électricité : le vrai goulot d'étranglement des datacenters IA en Europe",
      description: "18 GW de demande en file d'attente auprès de RTE, des délais de raccordement qui doublent : en Europe, ce n'est plus le GPU qui manque, c'est le mégawatt. Analyse pour investisseurs.",
      tag: "Energy & Infrastructure",
      date: "10 septembre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Pendant deux ans, tout le monde a parlé de la pénurie de GPU. Elle n'est pas terminée, mais elle n'est plus le problème principal. En Europe, le facteur limitant des projets de datacenters IA s'appelle désormais le mégawatt. Rien qu'en France, 18 GW de demande sont en file d'attente auprès de RTE. Le constat vaut pour presque tous les marchés européens.",
      p1: "Quelques chiffres pour situer. RTE recense environ 12 000 demandes de raccordement en attente, soit quelque 35 GW de capacité supplémentaire d'ici 2030. Une part importante vient des datacenters, qui promettent des revenus par mégawatt très supérieurs aux usages industriels classiques. Les délais s'allongent en conséquence : cinq à sept ans dans certaines régions, contre deux à trois ans il y a dix ans.",
      p2: "Le décalage est frappant. Un rack Blackwell Ultra consomme 200 kW, et NVIDIA peut en livrer des milliers par trimestre. En face, une prise de plusieurs dizaines de mégawatts sur le réseau français se négocie en années. Le hardware va vite, l'électricité va lentement. Toute la difficulté est là.",
      h2_1: "La rareté ne concerne pas que la France",
      p3: "L'Irlande a suspendu une large part des nouveaux projets autour de Dublin, où les datacenters pèsent déjà plus de 20 % de la consommation nationale. Amsterdam a gelé les permis pendant plusieurs mois. Francfort voit ses prix de l'électricité industrielle augmenter à un rythme que les opérateurs n'avaient jamais connu. Partout, le même scénario se répète : la demande arrive plus vite que le réseau.",
      p4: "Cette tension a une conséquence directe sur les prix. Un terrain avec un raccordement confirmé et une autorisation en cours de validité se vend nettement plus cher qu'un terrain équivalent sans électricité. L'écart peut atteindre plusieurs millions d'euros par mégawatt sécurisé.",
      h2_2: "Ce que paie vraiment le marché",
      p5: "Les hyperscalers et les opérateurs de colocation ne cherchent plus des mètres carrés. Ils achètent des mégawatts datés. Un site raccordé disponible en 2027 vaut plus qu'un site deux fois plus grand disponible en 2031. Le temps est devenu la variable dominante des modèles financiers.",
      p6: "Pour les investisseurs, cela change la lecture des actifs. Un datacenter brownfield avec une prise existante, même modeste, dispose d'une option de valeur considérable : celle de monter en puissance sans repartir au bout de la file d'attente.",
      h2_3: "Notre lecture chez FINXIA",
      p7: "Nous considérons le raccordement électrique comme le premier critère de sélection de la stratégie TITAN DC AI, avant le bâtiment et avant la localisation. Un actif sans électricité sécurisée n'est pas un datacenter en puissance, c'est un entrepôt qui attend.",
      p8: "C'est aussi ce qui rend la transformation brown-to-green intéressante. Les sites industriels disposent souvent de raccordements obtenus à une époque où personne ne se les disputait. Les remettre à niveau coûte moins cher que d'attendre six ans une prise neuve.",
      h2_4: "Ce qu'il faut retenir",
      p9: "Trois idées simples. La contrainte numéro un des datacenters IA en Europe est électrique, pas informatique. Le calendrier de raccordement détermine la valeur d'un actif autant que sa surface. Et cette situation va durer, car les renforcements de réseau se comptent en décennies, pas en trimestres.",
      p10: "Le prochain indicateur à suivre : les décisions de RTE et de la CRE sur la priorisation des raccordements. Ce sont ces arbitrages, plus que les annonces de GPU, qui fixeront la carte des datacenters français de 2030.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Electricity: The Real Bottleneck for AI Datacenters in Europe",
      description: "18 GW of demand queued with RTE, connection timelines doubling: in Europe, the scarce resource is no longer the GPU, it is the megawatt. Analysis for investors.",
      tag: "Energy & Infrastructure",
      date: "September 10, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "For two years, everyone talked about the GPU shortage. It is not over, but it is no longer the main problem. In Europe, the limiting factor for AI datacenter projects is now the megawatt. In France alone, 18 GW of demand is queued with grid operator RTE. The same holds for most European markets.",
      p1: "A few figures for context. RTE counts roughly 12,000 pending connection requests, representing some 35 GW of additional capacity by 2030. A large share comes from datacenters, which promise far higher revenues per megawatt than traditional industrial uses. Timelines are stretching accordingly: five to seven years in some regions, versus two to three a decade ago.",
      p2: "The contrast is striking. A Blackwell Ultra rack draws 200 kW, and NVIDIA can ship thousands per quarter. Meanwhile, a multi-tens-of-megawatts grid connection in France is negotiated in years. Hardware moves fast, electricity moves slowly. That is the whole difficulty.",
      h2_1: "Scarcity Is Not Just French",
      p3: "Ireland has suspended a large share of new projects around Dublin, where datacenters already account for more than 20% of national consumption. Amsterdam froze permits for months. Frankfurt is seeing industrial electricity prices rise at a pace operators have never experienced. Everywhere, the same story: demand arrives faster than the grid.",
      p4: "This tension feeds directly into prices. Land with a confirmed connection and a valid permit sells for markedly more than equivalent land without power. The gap can reach several million euros per secured megawatt.",
      h2_2: "What the Market Actually Pays For",
      p5: "Hyperscalers and colocation operators no longer shop for square meters. They buy dated megawatts. A connected site available in 2027 is worth more than a site twice the size available in 2031. Time has become the dominant variable in financial models.",
      p6: "For investors, this changes how assets should be read. A brownfield datacenter with an existing connection, even a modest one, holds a valuable option: the ability to scale up without going back to the end of the queue.",
      h2_3: "Our View at FINXIA",
      p7: "We treat the grid connection as the first selection criterion of our TITAN DC AI strategy, ahead of the building and ahead of location. An asset without secured power is not a datacenter in waiting; it is a warehouse waiting.",
      p8: "This is also what makes brown-to-green transformation attractive. Industrial sites often hold connections obtained at a time when nobody was competing for them. Upgrading them costs less than waiting six years for a new one.",
      h2_4: "Key Takeaways",
      p9: "Three simple ideas. The number one constraint on European AI datacenters is electrical, not computational. Connection timing determines an asset's value as much as its floor area. And this will last, because grid reinforcement is measured in decades, not quarters.",
      p10: "The next indicator to watch: RTE and CRE decisions on connection prioritization. Those rulings, more than GPU announcements, will draw the map of French datacenters in 2030.",
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
    "datePublished": "2026-09-10T09:00:00+02:00",
    "dateModified": "2026-09-10T09:00:00+02:00",
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
    "keywords": language === 'fr' ? "électricité, datacenter, IA, raccordement RTE, mégawatt, investissement infrastructure IA, green datacenter" : "electricity, datacenter, AI, grid connection, megawatt, AI infrastructure investment, green datacenter"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/electricite-goulot-etranglement-datacenter-ia-europe" : "https://finxiacapital.com/en/blog/electricite-goulot-etranglement-datacenter-ia-europe"
      }
    ]
  };

  return (
    <div data-testid="article-electricite-goulot-etranglement-datacenter-ia-europe-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/electricite-goulot-etranglement-datacenter-ia-europe/" : "https://finxiacapital.com/en/blog/electricite-goulot-etranglement-datacenter-ia-europe/"}
        keywords={language === 'fr' ? "électricité, datacenter, IA, raccordement RTE, mégawatt, investissement infrastructure IA, green datacenter" : "electricity, datacenter, AI, grid connection, megawatt, AI infrastructure investment, green datacenter"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/electricite-goulot-etranglement-datacenter-ia-europe/"
        hreflangEn="https://finxiacapital.com/en/blog/electricite-goulot-etranglement-datacenter-ia-europe/"
        hreflangDefault="https://finxiacapital.com/blog/electricite-goulot-etranglement-datacenter-ia-europe/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-09-10">
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
