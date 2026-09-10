import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticlePpaRaccordementPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "PPA, raccordement, flexibilité : comment un datacenter sécurise son électricité (et sa valorisation)",
      description: "PPA de 10 à 20 ans, convention de raccordement, effacement : la due diligence énergétique est devenue le cœur de la valorisation d'un datacenter. Ce qu'un investisseur doit vérifier avant d'acquérir.",
      tag: "Investment Strategy",
      date: "12 septembre 2026",
      readTime: "7 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Un datacenter sans électricité sécurisée n'est pas un actif, c'est une coquille vide. Pourtant, beaucoup de transactions se concentrent encore sur les murs, la fibre et le PUE. La question qui devrait ouvrir toute due diligence est plus simple : d'où vient le courant, pour combien de temps, et à quel prix ?",
      p1: "Trois documents font aujourd'hui la valeur d'un site : la convention de raccordement avec le gestionnaire de réseau, le contrat d'approvisionnement, et l'autorisation d'exploitation. Si l'un des trois manque ou arrive à expiration, la valorisation théorique du site s'effondre.",
      p2: "Le premier document est le plus rare. En France, une prise de plusieurs dizaines de mégawatts se négocie sur cinq à sept ans avec RTE. Les opérateurs qui détiennent une convention ferme, avec une date et une puissance garanties, détiennent de fait une option sur le marché.",
      h2_1: "Le PPA est devenu la norme",
      p3: "Les hyperscalers et les AI factories signent désormais des contrats d'achat d'électricité de longue durée, dix à vingt ans, directement avec des producteurs. Ces PPA verrouillent le prix, garantissent l'origine décarbonée de l'énergie et rassurent les banques qui financent les projets. En Roumanie comme en Espagne, les développeurs n'annoncent plus un site sans PPA associé.",
      p4: "Pour un investisseur, un datacenter adossé à un PPA long se lit comme un actif immobilier adossé à un bail solide : revenus prévisibles, coût de l'énergie maîtrisé, risque résiduel limité. À l'inverse, un site exposé aux prix de marché peut voir sa marge divisée par deux en quelques mois de tension sur le courant.",
      h2_2: "La check-list de la due diligence énergétique",
      p5: "Avant d'acquérir, quatre vérifications s'imposent. La puissance contractuelle et sa date de mise à disposition. La possibilité de monter en charge sans repasser en file d'attente. Les clauses d'indexation du contrat d'achat. Et la solidité du poste source auquel le site est rattaché.",
      p6: "S'ajoutent deux questions plus récentes. Le site peut-il participer aux mécanismes de flexibilité et d'effacement, qui rémunèrent les gros consommateurs capables de réduire leur charge en pointe ? Et peut-il installer du stockage ou une production d'appoint ? Ces options-là valent de plus en plus cher.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, aucun dossier ne passe en comité sans une revue énergétique complète, menée avant toute offre. C'est souvent à ce stade que les projets meurent : raccordement incertain, PPA introuvable à prix acceptable, ou capacité insuffisante pour les densités des prochains GPU.",
      p8: "Cette discipline explique notre préférence pour les actifs brown. Un site industriel avec une convention historique de 20 MW et une autorisation d'exploitation en règle offre une base qu'aucun greenfield ne peut égaler avant des années. La transformation coûte de l'argent, mais le temps gagné n'a pas de prix sur ce marché.",
      h2_4: "Ce qu'il faut retenir",
      p9: "La valeur d'un datacenter se lit désormais dans ses contrats d'énergie autant que dans ses murs. PPA long, raccordement ferme, options de flexibilité : ce sont les trois piliers d'une valorisation défendable.",
      p10: "À surveiller : l'évolution des mécanismes de capacité et d'effacement en France et en Espagne. Ils pourraient ajouter une ligne de revenus significative aux actifs bien équipés d'ici 2028.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "PPAs, Grid Connections, Flexibility: How a Datacenter Secures Its Power (and Its Valuation)",
      description: "10 to 20-year PPAs, grid connection agreements, demand response: energy due diligence has become the core of datacenter valuation. What investors must check before acquiring.",
      tag: "Investment Strategy",
      date: "September 12, 2026",
      readTime: "7 min read",
      backToBlog: "Back to blog",
      lead: "A datacenter without secured power is not an asset; it is an empty shell. Yet many transactions still focus on walls, fiber and PUE. The question that should open any due diligence is simpler: where does the power come from, for how long, and at what price?",
      p1: "Three documents now determine a site's value: the grid connection agreement with the transmission operator, the supply contract, and the operating permit. If any of the three is missing or expiring, the site's theoretical valuation collapses.",
      p2: "The first document is the rarest. In France, a connection of several tens of megawatts is negotiated over five to seven years with RTE. Operators holding a firm agreement, with a guaranteed date and capacity, effectively hold an option on the market.",
      h2_1: "The PPA Has Become the Standard",
      p3: "Hyperscalers and AI factories now sign long-term power purchase agreements, ten to twenty years, directly with producers. These PPAs lock in price, guarantee the decarbonized origin of the energy, and reassure the banks financing the projects. In Romania as in Spain, developers no longer announce a site without an associated PPA.",
      p4: "For an investor, a datacenter backed by a long PPA reads like a property backed by a solid lease: predictable income, controlled energy costs, limited residual risk. Conversely, a site exposed to market prices can see its margin halved within a few months of power tension.",
      h2_2: "The Energy Due Diligence Checklist",
      p5: "Before acquiring, four checks are essential. Contracted capacity and its delivery date. The ability to scale up without going back into the queue. The indexation clauses of the purchase contract. And the robustness of the substation the site is attached to.",
      p6: "Two more recent questions join the list. Can the site participate in flexibility and demand-response schemes, which pay large consumers able to shed load at peak times? And can it host storage or backup generation? Those options are worth more every year.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, no file reaches the investment committee without a full energy review conducted before any offer. This is often where projects die: uncertain connection, no PPA at an acceptable price, or capacity insufficient for the densities of the next GPU generations.",
      p8: "This discipline explains our preference for brown assets. An industrial site with a historic 20 MW agreement and a valid operating permit offers a foundation no greenfield can match for years. Transformation costs money, but time saved is priceless in this market.",
      h2_4: "Key Takeaways",
      p9: "A datacenter's value now sits in its energy contracts as much as in its walls. Long PPA, firm connection, flexibility options: these are the three pillars of a defensible valuation.",
      p10: "Worth watching: the evolution of capacity and demand-response mechanisms in France and Spain. They could add a significant revenue line to well-equipped assets by 2028.",
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
    "datePublished": "2026-09-12T09:00:00+02:00",
    "dateModified": "2026-09-12T09:00:00+02:00",
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
    "keywords": language === 'fr' ? "PPA, datacenter, électricité, raccordement, effacement, investissement infrastructure IA, due diligence" : "PPA, datacenter, electricity, grid connection, demand response, AI infrastructure investment, due diligence"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/ppa-raccordement-securiser-electricite-datacenter-investisseur" : "https://finxiacapital.com/en/blog/ppa-raccordement-securiser-electricite-datacenter-investisseur"
      }
    ]
  };

  return (
    <div data-testid="article-ppa-raccordement-securiser-electricite-datacenter-investisseur-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/ppa-raccordement-securiser-electricite-datacenter-investisseur/" : "https://finxiacapital.com/en/blog/ppa-raccordement-securiser-electricite-datacenter-investisseur/"}
        keywords={language === 'fr' ? "PPA, datacenter, électricité, raccordement, effacement, investissement infrastructure IA, due diligence" : "PPA, datacenter, electricity, grid connection, demand response, AI infrastructure investment, due diligence"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/ppa-raccordement-securiser-electricite-datacenter-investisseur/"
        hreflangEn="https://finxiacapital.com/en/blog/ppa-raccordement-securiser-electricite-datacenter-investisseur/"
        hreflangDefault="https://finxiacapital.com/blog/ppa-raccordement-securiser-electricite-datacenter-investisseur/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-09-12">
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
