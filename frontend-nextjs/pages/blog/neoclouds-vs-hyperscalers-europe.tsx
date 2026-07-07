import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleNeocloudsHyperscalersPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Néoclouds vs hyperscalers : qui construit l'avenir du cloud européen ?",
      description: "OVHcloud, Scaleway, STACKIT, IONOS — les néoclouds européens défient AWS, Azure et Google. Mais peuvent-ils vraiment rivaliser ? Analyse des investissements et des stratégies.",
      tag: "Market Analysis",
      date: "22 juin 2026",
      readTime: "7 min de lecture",
      backToBlog: "Retour au blog",
      lead: "OVHcloud vient de lever 400 millions d'euros. Scaleway annonce 3 nouvelles régions. STACKIT, filiale cloud de Lidl, investit 1 milliard en Allemagne. Les néoclouds européens sont en offensive. Mais face à AWS (32% du marché mondial), Azure (23%) et Google Cloud (10%), peuvent-ils vraiment rivaliser ? La réponse est dans les datacenters.",
      p1: "Le marché du cloud européen vaut 127 milliards d'euros en 2026. Les hyperscalers américains en détiennent 65%. Les néoclouds européens en détiennent 12%. Le reste est partagé entre les clouds chinois (15%) et les acteurs nationaux (8%). Ces chiffres cachent une réalité plus complexe : la croissance des néoclouds est de 35% par an, contre 18% pour les hyperscalers. Le rattrapage est en cours.",
      p2: "Mais le rattrapage n'est pas technologique — il est infrastructurel. Un néocloud européen peut développer des logiciels aussi performants que AWS. Il ne peut pas, en revanche, construire des datacenters aussi vite. Un hyperscaler américain met 18 mois pour construire une région de 40 MW. Un néocloud européen met 3 à 4 ans. La différence n'est pas dans le code, elle est dans le béton, le cuivre et les permis d'urbanisme.",
      h2_1: "Les néoclouds : l'armée de l'ombre de l'Europe numérique",
      p3: "OVHcloud, le plus grand néocloud européen, compte 37 datacenters dans 19 pays. Scaleway en compte 8, mais avec une densité très forte en France. STACKIT, le plus petit, en compte 3 en Allemagne. IONOS, Hetzner, Exoscale — les acteurs se multiplient. Leur force commune : ils sont européens, souverains, et bénéficient d'un soutien réglementaire croissant.",
      p4: "Le GDPR, le Data Act, la directive NIS2 — chaque réglementation européenne renforce la position des néoclouds. Une entreprise qui traite des données de santé ne peut pas légalement les héberger sur AWS US-East. Elle doit choisir un cloud européen. C'est le marché captif qui fait la fortune des néoclouds. Mais ce marché captif est limité : il ne représente que 20% du marché total du cloud.",
      h2_2: "Les hyperscalers : la défense de l'empire",
      p5: "AWS, Azure et Google ne sont pas passifs. Ils investissent 15 milliards d'euros par an en Europe. Ils ouvrent des régions à Strasbourg, Madrid, Milan. Ils signent des partenariats avec des clouds souverains (Telefonica avec AWS, Deutsche Telekom avec Azure). Ils créent des 'clouds de confiance' — des entités juridiquement européennes qui hébergent les données sur le sol européen, mais restent contrôlées par des actionnaires américains.",
      p6: "Cette stratégie est redoutable. Elle permet aux hyperscalers de rester compétitifs sur le segment souverain sans renoncer à leur modèle économique. Un 'cloud de confiance' AWS facture 20% plus cher qu'AWS standard. Mais il est 30% moins cher qu'OVHcloud équivalent. Pour une entreprise qui cherche à réduire ses coûts tout en restant compliant, le choix est évident.",
      h2_3: "La thèse d'investissement : le datacenter comme arbitre",
      p7: "La bataille entre néoclouds et hyperscalers ne se gagnera pas dans les logiciels — elle se gagnera dans les datacenters. Celui qui contrôle l'infrastructure physique contrôle les coûts, la latence, la souveraineté. Et c'est là que les néoclouds européens ont un avantage structurel : ils sont plus proches des utilisateurs, plus flexibles sur les configurations, et mieux intégrés aux réseaux électriques locaux.",
      p8: "FINXIA Capital a identifié une opportunité spécifique dans ce segment : les datacenters de péripherie — edge datacenters — qui hébergent les workloads des néoclouds dans des villes secondaires. Lyon, Marseille, Toulouse, Barcelone, Milan. Ces marchés sont négligés par les hyperscalers mais saturés par la demande des PME locales. Un edge datacenter de 5 MW, certifié Tier III, peut générer des rendements de 12% à 15% — bien au-dessus des 6% à 8% des hyperscalers en marché primaire.",
      h2_4: "Ce que les investisseurs doivent comprendre",
      p9: "La guerre des clouds n'est pas une bataille binaire. Les hyperscalers ne disparaîtront pas. Les néoclouds ne les remplaceront pas. Ce qui se dessine, c'est une fragmentation du marché : les hyperscalers garderont les grands comptes et les workloads non critiques, les néoclouds captureront le segment souverain et réglementé, et les edge datacenters prendront le marché intermédiaire des PME et des administrations locales.",
      p10: "L'investisseur qui comprend cette tripartition peut positionner son capital dans chaque segment. Mais le segment le plus sous-adressé — et le plus rentable — est l'edge datacenter. Les actifs sont petits, les tickets d'entrée sont abordables, les rendements sont élevés, et la demande est structurelle. C'est là que FINXIA Capital concentre ses recherches actives.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Neoclouds vs Hyperscalers: Who is Building the Future of European Cloud?",
      description: "OVHcloud, Scaleway, STACKIT, IONOS — European neoclouds challenge AWS, Azure and Google. But can they really compete? Analysis of investments and strategies.",
      tag: "Market Analysis",
      date: "June 22, 2026",
      readTime: "7 min read",
      backToBlog: "Back to blog",
      lead: "OVHcloud just raised 400 million euros. Scaleway announces 3 new regions. STACKIT, Lidl's cloud subsidiary, invests 1 billion in Germany. European neoclouds are on the offensive. But against AWS (32% of global market), Azure (23%) and Google Cloud (10%), can they really compete? The answer is in the datacenters.",
      p1: "The European cloud market is worth 127 billion euros in 2026. American hyperscalers hold 65%. European neoclouds hold 12%. The rest is shared between Chinese clouds (15%) and national players (8%). These figures hide a more complex reality: neocloud growth is 35% per year, compared to 18% for hyperscalers. The catch-up is underway.",
      p2: "But the catch-up is not technological — it's infrastructural. A European neocloud can develop software as performant as AWS. It cannot, however, build datacenters as fast. An American hyperscaler takes 18 months to build a 40 MW region. A European neocloud takes 3 to 4 years. The difference is not in the code, it's in the concrete, copper and building permits.",
      h2_1: "Neoclouds: The Shadow Army of Digital Europe",
      p3: "OVHcloud, the largest European neocloud, has 37 datacenters in 19 countries. Scaleway has 8, but with very high density in France. STACKIT, the smallest, has 3 in Germany. IONOS, Hetzner, Exoscale — actors are multiplying. Their common strength: they are European, sovereign, and benefit from growing regulatory support.",
      p4: "GDPR, Data Act, NIS2 directive — each European regulation strengthens the position of neoclouds. A company processing health data cannot legally host it on AWS US-East. It must choose a European cloud. This is the captive market that makes neoclouds' fortune. But this captive market is limited: it represents only 20% of the total cloud market.",
      h2_2: "Hyperscalers: Defending the Empire",
      p5: "AWS, Azure and Google are not passive. They invest 15 billion euros per year in Europe. They open regions in Strasbourg, Madrid, Milan. They sign partnerships with sovereign clouds (Telefonica with AWS, Deutsche Telekom with Azure). They create 'trusted clouds' — legally European entities that host data on European soil, but remain controlled by American shareholders.",
      p6: "This strategy is formidable. It allows hyperscalers to remain competitive in the sovereign segment without renouncing their business model. A 'trusted cloud' AWS charges 20% more than standard AWS. But it is 30% cheaper than equivalent OVHcloud. For a company looking to reduce costs while remaining compliant, the choice is obvious.",
      h2_3: "The Investment Thesis: Datacenter as Arbiter",
      p7: "The battle between neoclouds and hyperscalers will not be won in software — it will be won in datacenters. Whoever controls the physical infrastructure controls costs, latency, sovereignty. And this is where European neoclouds have a structural advantage: they are closer to users, more flexible on configurations, and better integrated with local electrical networks.",
      p8: "FINXIA Capital has identified a specific opportunity in this segment: edge datacenters — peripheral datacenters that host neocloud workloads in secondary cities. Lyon, Marseille, Toulouse, Barcelona, Milan. These markets are neglected by hyperscalers but saturated by local SME demand. A 5 MW edge datacenter, Tier III certified, can generate returns of 12% to 15% — well above the 6% to 8% of hyperscalers in primary markets.",
      h2_4: "What Investors Must Understand",
      p9: "The cloud war is not a binary battle. Hyperscalers will not disappear. Neoclouds will not replace them. What is emerging is a market fragmentation: hyperscalers will keep large accounts and non-critical workloads, neoclouds will capture the sovereign and regulated segment, and edge datacenters will take the intermediate market of SMEs and local administrations.",
      p10: "The investor who understands this tripartition can position their capital in each segment. But the most underaddressed — and most profitable — segment is the edge datacenter. Assets are small, entry tickets are affordable, returns are high, and demand is structural. This is where FINXIA Capital focuses its active research.",
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
    "datePublished": "2026-06-22T11:00:00+01:00",
    "dateModified": "2026-06-22T11:00:00+01:00",
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
    "articleSection": "Market Analysis",
    "keywords": language === 'fr' ? "néoclouds, hyperscalers, OVHcloud, Scaleway, datacenter Europe, cloud souverain, edge datacenter" : "neoclouds, hyperscalers, OVHcloud, Scaleway, datacenter Europe, sovereign cloud, edge datacenter"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/neoclouds-vs-hyperscalers-europe" : "https://finxiacapital.com/en/blog/neoclouds-vs-hyperscalers-europe"
      }
    ]
  };

  return (
    <div data-testid="article-neoclouds-hyperscalers-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/neoclouds-vs-hyperscalers-europe/" : "https://finxiacapital.com/en/blog/neoclouds-vs-hyperscalers-europe/"}
        keywords={language === 'fr' ? "néoclouds, hyperscalers, OVHcloud, Scaleway, datacenter Europe" : "neoclouds, hyperscalers, OVHcloud, Scaleway, datacenter Europe"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/neoclouds-vs-hyperscalers-europe/"
        hreflangEn="https://finxiacapital.com/en/blog/neoclouds-vs-hyperscalers-europe/"
        hreflangDefault="https://finxiacapital.com/blog/neoclouds-vs-hyperscalers-europe/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-06-22">
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
