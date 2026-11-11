import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleCoreweaveQ3VerdictPage() {
  const { language } = useLanguage();

  const content = {
      "fr": {
            "title": "CoreWeave T3 2026 : revenus record, intérêts record — le verdict nuancé du marché",
            "description": "CoreWeave a battu le consensus au T3 2026 avec 3,66 milliards de dollars de revenus (+168 %) et relevé sa guidance, mais ses charges d'intérêts de 846 millions dépassent quatre fois son résultat opérationnel. Ce que cette publication charnière révèle de la valeur des néoclouds et des datacenters.",
            "tag": "Market Analysis",
            "date": "11 novembre 2026",
            "readTime": "7 min de lecture",
            "backToBlog": "Retour au blog",
            "lead": "CoreWeave a publié le 10 novembre un troisième trimestre que baissiers et haussiers peuvent tous deux revendiquer. Revenus de 3,66 milliards de dollars, en hausse de 168 %, au-dessus du consensus ; backlog contracté de 132,5 milliards ; guidance 2026 relevée à 13-13,3 milliards. Et dans le même temps : 709 millions de perte nette et 846 millions de charges d'intérêts — plus de quatre fois le résultat opérationnel de 207 millions. Le marché a rendu un verdict en demi-teinte, et il est instructif.",
            "p1": "La réaction boursière raconte l'hésitation. Clôture à 48,73 dollars, en repli de 0,5 %, puis séance après-clôture chaotique : envolée vers 54 dollars, rechute sous le cours de clôture jusqu'à 46,50, reprise finale au-delà de 54. Au matin du 11, le gain après-clôture se stabilise autour de 6 %. Le titre reste environ 73 % sous ses plus hauts, et la quasi-totalité des banques — Wells Fargo, Citi, UBS, Morgan Stanley, Rosenblatt — avait abaissé ses objectifs avant la publication.",
            "p2": "Ce que le marché sanctionne n'est donc plus la demande — elle est éclatante — mais la structure financière. C'est précisément la distinction que nous faisons depuis octobre : la valeur d'un néocloud ne se lit pas dans son carnet de commandes, mais dans l'écart entre ce que rapportent ses actifs et ce que coûte sa dette.",
            "h2_1": "Une machine à revenus adossée à une usine à intérêts",
            "p3": "Les chiffres du trimestre illustrent la mécanique. CoreWeave a levé environ 4,2 milliards de dollars en obligations convertibles et mis en place un programme d'émission au marché pouvant atteindre 35 millions d'actions. La charge d'intérêts du quatrième trimestre est guidée entre 1,05 et 1,15 milliard — en progression constante. Pour financer un capex 2026 de 37 à 39 milliards, la société compte désormais sur environ 9 milliards de prépaiements et dépôts clients attendus sur les trois prochains mois : ce sont les clients, OpenAI en tête, qui cofinancent la croissance.",
            "p4": "Le côté lumineux est réel : la puissance active dépasse 1,7 GW, la puissance contractée 4,6 GW, et la clientèle s'élargit au-delà des laboratoires — Canva, Substack, Wayve ont signé ce trimestre, pendant que les relations avec OpenAI, Cohere, Jane Street et Perplexity s'étendent. La marge opérationnelle ajustée atteint 10 %, un trimestre plus tôt que prévu. Le run-rate de sortie 2026 est guidé à 20-21 milliards de dollars.",
            "h2_2": "Ce que le marché price désormais",
            "p5": "La séance du 10 novembre a vu tout le secteur reculer dans l'attente : Nebius a cédé 5,3 %, Oracle 1,5 %. Le mois d'octobre avait déjà montré où se situe le vrai juge : le marché obligataire. L'obligation CoreWeave 2031 a brièvement dépassé 16 % de rendement et les CDS ont franchi 1 000 points de base. Les analystes actions valorisent le backlog ; les obligataires valorisent le bilan — et ce sont les obligataires qui financent la croissance.",
            "p6": "Reste la question de la dilution. Entre les convertibles, le programme d'émission au marché et une dette totale autour de 50 milliards, chaque trimestre de capex non couvert par les prépaiements clients se paie en nouvelle dette ou en nouvelles actions. Tant que les marchés du capital restent ouverts, la machine tourne ; l'assèchement des liquidités — taux Fed à 3,75-4 %, prudence post-midterms — est le scénario qui la grippe.",
            "h2_3": "Conséquences pour les propriétaires de datacenters",
            "p7": "Pour un propriétaire d'actifs, la publication conforte deux disciplines. Premièrement, la demande de capacité est vérifiée, contractée, en croissance — 132,5 milliards de backlog ne s'inventent pas. Deuxièmement, la contrepartie néocloud reste à structurer : prépaiements, dépôts de garantie, jalons de livraison. Le fait que CoreWeave collecte 9 milliards d'avances prouve que les clients finaux acceptent de cofinancer — c'est exactement la mécanique qu'un bailleur doit exiger à son échelle.",
            "p8": "Chez TITAN DC AI, nous retenons la leçon symétrique : les actifs loués à des signatures solides se financent même quand les actions du secteur chutent de 70 %, parce que la dette regarde le bail, pas le cours de Bourse. La liquidité de sortie d'un datacenter dépend de la solvabilité de son locataire — jamais de la météo boursière de son secteur.",
            "h2_4": "Ce qu'il faut retenir",
            "p9": "Trois faits : la demande IA est intacte et s'accélère même ; le coût du capital est devenu la variable décisive des néoclouds ; et le marché distingue désormais chirurgicalement les revenus contractés des promesses de croissance. CoreWeave publie un bon trimestre opérationnel dans un modèle financier qui reste tendu — les deux phrases sont vraies simultanément.",
            "p10": "Pour l'investisseur en actifs réels, la traduction est directe : posséder les murs et le foncier, exiger des baux longs auprès de signatures solides, et laisser aux autres le pari sur le refinancement perpétuel. C'est le sens de notre discipline sortie d'abord — et cette semaine la renforce.",
            "authorBio": "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
            "learnMoreTitle": "En savoir plus",
            "link1Title": "Nos Stratégies",
            "link1Desc": "Découvrez TITAN et nos 3 autres pôles d'investissement",
            "link2Title": "Approche Européenne",
            "link2Desc": "France, Espagne, Italie : nos marchés cibles européens"
      },
      "en": {
            "title": "CoreWeave Q3 2026: Record Revenue, Record Interest — the Market's Mixed Verdict",
            "description": "CoreWeave beat Q3 2026 consensus with $3.66bn revenue (+168%) and raised guidance, but its $846m interest expense exceeds operating income fourfold. What this pivotal report reveals about neocloud and datacenter value.",
            "tag": "Market Analysis",
            "date": "November 11, 2026",
            "readTime": "6 min read",
            "backToBlog": "Back to blog",
            "lead": "CoreWeave's November 10 Q3 report gave both bears and bulls ammunition. Revenue of $3.66bn, up 168%, above consensus; contracted backlog of $132.5bn; 2026 guidance raised to $13-13.3bn. And at the same time: a $709m net loss and $846m of net interest expense — more than four times the $207m operating income. The market delivered a mixed verdict, and it is instructive.",
            "p1": "The tape tells the hesitation. The stock closed at $48.73, down 0.5%, then whipsawed after hours: spike toward $54, break below the close to $46.50, recovery above $54. By Wednesday morning the after-hours gain settled near 6%. The stock remains roughly 73% below its highs, and nearly every bank — Wells Fargo, Citi, UBS, Morgan Stanley, Rosenblatt — had cut targets before the print.",
            "p2": "What the market punishes is no longer demand — it is spectacular — but the financial structure. That is precisely the distinction we have drawn since October: a neocloud's value lies not in its order book but in the gap between what its assets earn and what its debt costs.",
            "h2_1": "A Revenue Machine Backed by an Interest Factory",
            "p3": "The quarter illustrates the mechanics. CoreWeave raised about $4.2bn in convertible notes and set up an at-the-market program for up to 35 million shares. Q4 interest expense is guided at $1.05-1.15bn — rising steadily. To fund 2026 capex of $37-39bn, the company now counts on roughly $9bn of customer prepayments and deposits over the next three months: customers, led by OpenAI, are co-financing the growth.",
            "p4": "The bright side is real: active power exceeds 1.7 GW, contracted power 4.6 GW, and the customer base is broadening beyond labs — Canva, Substack and Wayve signed this quarter while OpenAI, Cohere, Jane Street and Perplexity expanded. Adjusted operating margin reached 10%, a quarter early. The 2026 exit run-rate is guided at $20-21bn.",
            "h2_2": "What the Market Prices Now",
            "p5": "The November 10 session saw the whole sector retreat in anticipation: Nebius fell 5.3%, Oracle 1.5%. October had already shown where the real judge sits: the bond market. CoreWeave's 2031 notes briefly yielded above 16% and CDS crossed 1,000 basis points. Equity analysts value the backlog; bondholders value the balance sheet — and bondholders fund the growth.",
            "p6": "Then there is dilution. Between convertibles, the ATM program and total debt near $50bn, every quarter of capex not covered by customer prepayments is paid in new debt or new shares. As long as capital markets stay open the machine runs; liquidity tightening — Fed rates at 3.75-4%, post-midterm caution — is the scenario that jams it.",
            "h2_3": "Consequences for Datacenter Owners",
            "p7": "For asset owners, the report confirms two disciplines. First, capacity demand is verified, contracted and growing — $132.5bn of backlog cannot be invented. Second, the neocloud counterparty must be structured: prepayments, security deposits, delivery milestones. The fact that CoreWeave collects $9bn of advances proves end customers accept co-financing — exactly the mechanism a landlord should require at its own scale.",
            "p8": "At TITAN DC AI we draw the symmetrical lesson: assets leased to strong signatures finance even when sector equities fall 70%, because debt looks at the lease, not the share price. A datacenter's exit liquidity depends on its tenant's solvency — never on its sector's stock-market weather.",
            "h2_4": "Key Takeaways",
            "p9": "Three facts: AI demand is intact, indeed accelerating; the cost of capital has become the neoclouds' decisive variable; and the market now surgically distinguishes contracted revenue from growth promises. CoreWeave posted a good operational quarter inside a financial model that remains stretched — both sentences are true at once.",
            "p10": "For real-asset investors the translation is direct: own the walls and the land, demand long leases from strong signatures, and leave to others the bet on perpetual refinancing. That is the meaning of our exit-first discipline — and this week strengthens it.",
            "authorBio": "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
            "learnMoreTitle": "Learn more",
            "link1Title": "Our Strategies",
            "link1Desc": "Discover TITAN and our 3 other investment poles",
            "link2Title": "European Approach",
            "link2Desc": "France, Spain, Italy: our European target markets"
      }
};

  const t = content[language];
  const frUrl = "https://finxiacapital.com/blog/coreweave-t3-2026-resultats-dette-neoclouds-verdict-marche/";
  const enUrl = "https://finxiacapital.com/en/blog/coreweave-q3-2026-results-debt-neoclouds-market-verdict/";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-11-11T09:00:00+01:00",
    "dateModified": "2026-11-11T09:00:00+01:00",
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
    "keywords": language === 'fr' ? "CoreWeave, néocloud, datacenter, dette, GPU, NVIDIA, IA, investissement, backlog" : "CoreWeave, neocloud, datacenter, debt, GPU, NVIDIA, AI, investment, backlog"
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
    <div data-testid="article-coreweave-q3-verdict-page" className="pt-20">
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-11-11"><Calendar className="w-4 h-4" />{t.date}</time>
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
