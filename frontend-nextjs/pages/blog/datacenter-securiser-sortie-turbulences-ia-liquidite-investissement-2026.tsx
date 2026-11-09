import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleDatacenterSecuriserSortiePage() {
  const { language } = useLanguage();

  const content = {
      "fr": {
            "title": "Turbulences IA : pourquoi nous souscrivons un datacenter en pensant d'abord à la sortie",
            "description": "Dans un marché IA volatil, la rentabilité d'un datacenter se juge à sa liquidité de sortie. Baux take-or-pay, pénalités NPV, cap rates hyperscalers à 5,5-6,5 %, prudence de Moody's sur la valeur terminale : les règles d'une souscription sortie d'abord.",
            "tag": "Investment Strategy",
            "date": "9 novembre 2026",
            "readTime": "7 min de lecture",
            "backToBlog": "Retour au blog",
            "lead": "La tempête qui secoue les néoclouds depuis octobre rappelle une règle que les périodes euphoriques font oublier : un actif ne vaut que ce qu'un acheteur solvable acceptera de payer demain. Pour un datacenter, cela signifie souscrire la sortie avant l'entrée — et refuser tout actif dont la liquidité dépend d'une seule hypothèse de croissance.",
            "p1": "Que voit-on sur les transactions récentes ? Les deals qui traversent la tourmente ont tous la même anatomie. Applied Digital a signé en mai 2026 un bail take-or-pay de quinze ans sur 300 MW avec un hyperscaler investment grade américain : 7,5 milliards de dollars de revenus contractés, jusqu'à 18,2 milliards avec options. Hut 8 a suivi en juillet avec un bail de 9,8 milliards sur 352 MW. Ces actifs se financent et se refinancent, quelle que soit la météo boursière des néoclouds.",
            "p2": "À l'inverse, un bâtiment conçu sur mesure pour un seul locataire fragile — densité extrême, refroidissement propriétaire, bail court adossé à du matériel — n'a plus d'acheteur naturel le jour où ce locataire vacille. La consolidation annoncée par Gartner créera exactement ce type d'actifs orphelins.",
            "h2_1": "La sortie se construit au jour de l'entrée",
            "p3": "Trois mécanismes contractuels font la liquidité d'un datacenter. Le take-or-pay, désormais standard sur les baux hyperscalers : le locataire paie qu'il utilise ou non la capacité. Les pénalités de résiliation indexées sur la valeur actuelle des loyers restants, qui protègent le financement d'un départ anticipé. Et les garanties de la maison mère notée, qui transforment un bail en quasi-obligation corporate.",
            "p4": "Moody's illustre la prudence requise : dans sa méthodologie de notation des ABS datacenters, l'agence n'accorde aucune valeur terminale aux bâtiments à l'échéance légale — seule la valeur du foncier est retenue, faute de visibilité long terme. Autrement dit, le marché du crédit souscrit déjà comme nous le faisons : le bâti ne vaut que par ses revenus contractés, et le sol reste la valeur refuge ultime.",
            "h2_2": "Qui achètera demain ?",
            "p5": "Le pool d'acheteurs de sortie est connu : fonds infrastructure core, REIT spécialisés — le véhicule de Blackstone cible des rendements de 5,75 à 7 % sur des actifs neufs loués à des hyperscalers investment grade —, et le marché des titrisations, déjà à 57 milliards de dollars émis aux États-Unis avec 130 milliards attendus d'ici 2028 selon Morgan Stanley. Ces acheteurs paient des cap rates de 5,5 à 6,5 % pour l'hyperscale stabilisé. Mais ils exigent tous la même chose : un locataire dont la signature vaut une obligation.",
            "p6": "La demande sous-jacente ne manque pas : fin 2025, 89 % de la capacité en construction dans les Amériques était déjà pré-louée et le taux de vacance était tombé à 4,2 %. Ce n'est pas la demande qui trie les actifs — c'est la qualité des signatures.",
            "h2_3": "Comment nous l'appliquons chez TITAN DC AI",
            "p7": "Notre discipline tient en trois refus. Refus d'un actif dont la valeur de revente suppose une croissance continue des loyers. Refus d'une conception irréversible qui ne pourrait accueillir qu'un seul type de charge de travail. Refus d'un locataire dont le bilan ne survivrait pas à une consolidation du secteur. Chaque acquisition est notée d'abord sur sa liquidité de sortie, ensuite seulement sur son rendement.",
            "p8": "La transformation brown-to-green joue ici un rôle sous-estimé : reprendre un bâtiment existant réduit le coût d'entrée par MW, accélère la mise en revenus et conserve un actif standard, réversible, que plusieurs catégories d'acheteurs pourront se disputer à la sortie.",
            "h2_4": "Ce qu'il faut retenir",
            "p9": "En période de turbulences, la prime va aux actifs liquides : bail long en take-or-pay, locataire investment grade ou souverain, conception réversible, foncier contrôlé. Tout le reste — les mégawatts spectaculaires adossés à des signatures fragiles — s'achètera dans douze mois avec une décote.",
            "p10": "La question que nous posons avant chaque comité n'est pas « combien rapportera cet actif ? » mais « à qui le revendrons-nous, et à quel prix, si le marché se ferme pendant deux ans ? ». Tant que la réponse n'est pas écrite, l'acquisition n'est pas prête.",
            "authorBio": "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
            "learnMoreTitle": "En savoir plus",
            "link1Title": "Nos Stratégies",
            "link1Desc": "Découvrez TITAN et nos 3 autres pôles d'investissement",
            "link2Title": "Approche Européenne",
            "link2Desc": "France, Espagne, Italie : nos marchés cibles européens"
      },
      "en": {
            "title": "AI Turbulence: Why We Underwrite a Datacenter Exit-First",
            "description": "In a volatile AI market, a datacenter's return is judged by its exit liquidity. Take-or-pay leases, NPV termination penalties, 5.5-6.5% hyperscaler cap rates, Moody's zero terminal value: the rules of exit-first underwriting.",
            "tag": "Investment Strategy",
            "date": "November 9, 2026",
            "readTime": "7 min read",
            "backToBlog": "Back to blog",
            "lead": "The storm hitting neoclouds since October recalls a rule euphoric periods forget: an asset is worth only what a solvent buyer will pay tomorrow. For a datacenter, that means underwriting the exit before the entry — and refusing any asset whose liquidity depends on a single growth assumption.",
            "p1": "Recent deals show the pattern. Applied Digital signed a 15-year take-or-pay lease on 300 MW with a US investment-grade hyperscaler in May 2026: $7.5bn of contracted revenue, up to $18.2bn with options. Hut 8 followed in July with a $9.8bn lease on 352 MW. These assets finance and refinance regardless of neocloud equity weather.",
            "p2": "Conversely, a building custom-designed for one fragile tenant — extreme density, proprietary cooling, a short hardware-backed lease — has no natural buyer the day that tenant wobbles. The consolidation Gartner predicts will create exactly such orphaned assets.",
            "h2_1": "The Exit Is Built on Day One",
            "p3": "Three contractual mechanisms create datacenter liquidity: take-or-pay, now standard on hyperscale leases — the tenant pays whether or not it uses the capacity; termination penalties indexed to the NPV of remaining rent, protecting financing against early departure; and rated parent guarantees that turn a lease into quasi-corporate debt.",
            "p4": "Moody's illustrates the required prudence: in its datacenter ABS methodology, the agency grants no terminal value to buildings at legal final maturity — only land value is retained, given the lack of long-term visibility. Credit markets already underwrite as we do: the building is worth its contracted income, and the land is the ultimate store of value.",
            "h2_2": "Who Buys Tomorrow?",
            "p5": "The exit buyer pool is known: core infrastructure funds, specialist REITs — Blackstone's vehicle targets 5.75-7% yields on new assets leased to investment-grade hyperscalers — and the securitization market, already at $57bn issued in the US with $130bn more expected by 2028 per Morgan Stanley. These buyers pay 5.5-6.5% cap rates for stabilized hyperscale. All demand the same thing: a tenant whose signature equals a bond.",
            "p6": "Underlying demand is not the issue: at end-2025, 89% of capacity under construction in the Americas was pre-let and vacancy had fallen to 4.2%. It is not demand that sorts assets — it is the quality of signatures.",
            "h2_3": "How We Apply This at TITAN DC AI",
            "p7": "Our discipline is three refusals: refusing an asset whose resale value assumes continuous rent growth; refusing an irreversible design that could host only one workload type; refusing a tenant whose balance sheet would not survive sector consolidation. Every acquisition is scored first on exit liquidity, only then on yield.",
            "p8": "Brown-to-green conversion plays an underrated role: reusing an existing building lowers entry cost per MW, accelerates time to revenue and preserves a standard, reversible asset that several buyer categories can contest at exit.",
            "h2_4": "Key Takeaways",
            "p9": "In turbulent times, the premium goes to liquid assets: long take-or-pay lease, investment-grade or sovereign tenant, reversible design, controlled land. Everything else — spectacular megawatts backed by fragile signatures — will be bought twelve months from now at a discount.",
            "p10": "The question we ask before every committee is not 'how much will this asset yield?' but 'who do we sell it to, at what price, if the market closes for two years?' Until that answer is written, the acquisition is not ready.",
            "authorBio": "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
            "learnMoreTitle": "Learn more",
            "link1Title": "Our Strategies",
            "link1Desc": "Discover TITAN and our 3 other investment poles",
            "link2Title": "European Approach",
            "link2Desc": "France, Spain, Italy: our European target markets"
      }
};

  const t = content[language];
  const frUrl = "https://finxiacapital.com/blog/datacenter-securiser-sortie-turbulences-ia-liquidite-investissement-2026/";
  const enUrl = "https://finxiacapital.com/en/blog/datacenter-securing-exit-ai-turbulence-liquidity-investment-2026/";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-11-09T09:00:00+01:00",
    "dateModified": "2026-11-09T09:00:00+01:00",
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
    "articleSection": "Investment Strategy",
    "keywords": language === 'fr' ? "datacenter, sortie, liquidité, IA, investissement, hyperscaler, take-or-pay, TITAN DC" : "datacenter, exit, liquidity, AI, investment, hyperscaler, take-or-pay, TITAN DC"
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
    <div data-testid="article-datacenter-securiser-sortie-page" className="pt-20">
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-11-09"><Calendar className="w-4 h-4" />{t.date}</time>
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
