import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

export default function ShellLeaseVsBuildToSuitPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Shell Lease NNN vs Build-to-Suit : Quel Modèle Locatif pour l'Infrastructure Datacenter en Europe ?",
      description: "Powered shell en triple net (NNN) ou build-to-suit sur mesure : deux modèles de location dominent le marché datacenter européen. Leurs implications en termes de risque, de contrôle technique et de rendement diffèrent fondamentalement.",
      tag: "Immobilier & Infrastructure",
      date: "Août 2026",
      readTime: "8 min de lecture",
      backToBlog: "Retour au blog",
      author: "Lila Benhammou, Co-Fondatrice & CIO",
      intro: "Lorsqu'un opérateur hyperscale ou un néocloud cherche à sécuriser de la capacité datacenter en Europe, deux modèles contractuels structurent l'essentiel des transactions : le Shell Lease en triple net (NNN), portant sur une « powered shell », et le Build-to-Suit, où l'infrastructure est conçue et livrée selon les spécifications techniques exactes du locataire. Ces deux modèles impliquent des répartitions de risque, de capital et de contrôle radicalement différentes entre propriétaire et locataire.",
      lead: "Pour un investisseur en actifs réels datacenter, le choix du modèle locatif n'est pas une question secondaire de structuration juridique — c'est une décision qui détermine le profil de risque de l'investissement, la durée d'engagement du capital, et la nature de l'exposition technologique.",
      h2_1: "1. La Powered Shell : La Frontière entre Structure et Équipement",
      p1: "Une powered shell est une installation sécurisée livrée avec la structure physique du bâtiment, l'alimentation électrique jusqu'au site et les options de connectivité — mais sans les équipements IT critiques : onduleurs (UPS), générateurs de secours et systèmes de refroidissement. Ces éléments relèvent du fit-out du locataire, qui les installe et les exploite selon ses propres spécifications techniques.",
      p2: "Cette frontière entre structure de base et aménagement locataire doit être documentée avec une précision contractuelle rigoureuse : elle détermine qui investit, qui maintient, et à qui appartient chaque composant en fin de bail.",
      h2_2: "2. Le Bail Triple Net (NNN) : Structure Dominante des Powered Shells",
      p3: "Les powered shells sont quasi systématiquement louées sous des baux triple net d'une durée de 10 à 20 ans ou plus, dans lesquels le locataire assume les « trois nets » : taxes foncières, assurance et maintenance. Le propriétaire perçoit un loyer net de ces charges, avec un profil de revenu prévisible et une exposition opérationnelle minimale — comparable, dans sa logique économique, à l'immobilier logistique ou industriel institutionnel.",
      p4: "Pour l'investisseur propriétaire, le NNN offre une visibilité de cash-flow élevée sur longue durée, adossée à la solvabilité du locataire plutôt qu'à la performance opérationnelle de l'actif lui-même.",
      h2_3: "3. Le Build-to-Suit : Contrôle Technique Total, Engagement Amont",
      p5: "Le Build-to-Suit inverse la logique : l'infrastructure est conçue, dès l'origine, selon les spécifications techniques précises d'un locataire identifié — densité de puissance par rack, architecture de refroidissement, redondance électrique. Ce modèle est particulièrement recherché par les hyperscalers dont les exigences techniques (refroidissement liquide, très haute densité GPU) dépassent les standards génériques d'une powered shell.",
      p6: "En contrepartie de cette personnalisation, le Build-to-Suit engage davantage de capital en amont côté investisseur-développeur, sur un horizon de pré-commercialisation plus long, et crée une dépendance technique plus forte à un locataire unique — un risque de concentration que le modèle powered shell, plus générique, atténue naturellement.",
      h2_4: "4. Rendement, Risque et Liquidité de Sortie",
      p7: "La powered shell en NNN offre un profil investisseur plus proche de l'immobilier core : rendement modéré, risque opérationnel limité, mais aussi liquidité de sortie plus large — un actif shell générique peut, en théorie, être relocalisé à un nouveau locataire technique en fin de bail sans reconstruction majeure. Le Build-to-Suit, à l'inverse, offre potentiellement un rendement ajusté au risque supérieur en phase de développement, mais une liquidité de sortie plus contrainte : un actif hyperconfiguré pour un locataire spécifique est structurellement plus difficile à requalifier pour un tiers.",
      h2_5: "5. L'Approche de FINXIA Capital sur le Marché Brown-to-Green",
      p8: "La stratégie TITAN DC AI de FINXIA Capital se positionne principalement sur des actifs existants en transformation — un contexte différent de l'arbitrage shell/build-to-suit qui s'applique typiquement au développement greenfield. Pour autant, la logique contractuelle reste pertinente au stade de la remise en location de la capacité rénovée : un actif repositionné avec un PUE optimisé et une conformité EU Taxonomy peut être commercialisé soit en powered shell NNN générique auprès d'un panel élargi de locataires potentiels, soit en configuration plus personnalisée pour un opérateur ayant des besoins techniques spécifiques.",
      p9: "Ce choix de commercialisation, mené actif par actif, conditionne directement le profil de sortie et la base d'acheteurs institutionnels adressable — un paramètre central de la thèse de repositionnement brown-to-green.",
      h2_6: "Conclusion",
      conclusion: "Shell Lease NNN et Build-to-Suit ne sont pas deux variantes d'un même contrat — ce sont deux philosophies d'allocation du risque entre propriétaire et locataire. Le premier privilégie la prévisibilité et la liquidité ; le second privilégie le contrôle technique et l'alignement avec un locataire spécifique. Pour l'investisseur en infrastructure datacenter européenne, le choix dépend moins d'une préférence générale que de la nature de l'actif, du profil du locataire visé et de l'horizon de sortie recherché.",
      authorBio: "est un gestionnaire d'actifs alternatifs. Ce contenu est fourni à titre informatif uniquement et ne constitue pas une offre de souscription ni un conseil en investissement.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Notre Stratégie TITAN DC AI",
      link1Desc: "Découvrez la transformation brown-to-green des datacenters européens",
      link2Title: "Nos Stratégies",
      link2Desc: "TITAN et nos 3 autres pôles d'investissement"
    },
    en: {
      title: "Shell Lease NNN vs Build-to-Suit: Which Leasing Model for Datacenter Infrastructure in Europe?",
      description: "Triple-net (NNN) powered shell or custom build-to-suit: two leasing models dominate the European datacenter market. Their implications for risk, technical control and returns differ fundamentally.",
      tag: "Real Assets & Infrastructure",
      date: "August 2026",
      readTime: "8 min read",
      backToBlog: "Back to blog",
      author: "Lila Benhammou, Co-Founder & CIO",
      intro: "When a hyperscale operator or a neocloud seeks to secure datacenter capacity in Europe, two contractual models structure the bulk of transactions: the triple-net (NNN) Shell Lease, covering a 'powered shell', and Build-to-Suit, where infrastructure is designed and delivered to the tenant's exact technical specifications. These two models involve radically different distributions of risk, capital and control between landlord and tenant.",
      lead: "For a datacenter real-assets investor, the choice of leasing model is not a secondary legal-structuring question — it is a decision that determines the investment's risk profile, the duration of capital commitment, and the nature of technology exposure.",
      h2_1: "1. The Powered Shell: The Boundary Between Structure and Equipment",
      p1: "A powered shell is a secure facility delivered with the physical building structure, power to the site and connectivity options — but without critical IT equipment: uninterruptible power supplies (UPS), backup generators and cooling systems. These fall under the tenant's fit-out, which the tenant installs and operates to its own technical specifications.",
      p2: "This boundary between base structure and tenant improvement must be documented with rigorous contractual precision: it determines who invests, who maintains, and who owns each component at lease end.",
      h2_2: "2. The Triple-Net (NNN) Lease: The Dominant Structure for Powered Shells",
      p3: "Powered shells are almost universally leased under triple-net leases lasting 10 to 20 years or more, in which the tenant assumes the 'three nets': property taxes, insurance and maintenance. The landlord collects rent net of these costs, with a predictable income profile and minimal operational exposure — comparable, in its economic logic, to institutional logistics or industrial real estate.",
      p4: "For the owner-investor, NNN offers high cash-flow visibility over a long horizon, backed by tenant creditworthiness rather than the asset's own operational performance.",
      h2_3: "3. Build-to-Suit: Full Technical Control, Upfront Commitment",
      p5: "Build-to-Suit reverses the logic: infrastructure is designed from the outset to the precise technical specifications of an identified tenant — power density per rack, cooling architecture, electrical redundancy. This model is particularly sought by hyperscalers whose technical requirements (liquid cooling, very high-density GPU) exceed the generic standards of a powered shell.",
      p6: "In exchange for this customization, Build-to-Suit commits more upfront capital on the investor-developer side, over a longer pre-leasing horizon, and creates stronger technical dependency on a single tenant — a concentration risk that the more generic powered shell model naturally mitigates.",
      h2_4: "4. Return, Risk and Exit Liquidity",
      p7: "The NNN powered shell offers an investor profile closer to core real estate: moderate return, limited operational risk, but also broader exit liquidity — a generic shell asset can, in theory, be re-let to a new technical tenant at lease end without major reconstruction. Build-to-Suit, conversely, potentially offers a higher risk-adjusted return during the development phase, but more constrained exit liquidity: an asset hyper-configured for a specific tenant is structurally harder to requalify for a third party.",
      h2_5: "5. FINXIA Capital's Approach in the Brown-to-Green Market",
      p8: "FINXIA Capital's TITAN DC AI strategy is positioned primarily on existing assets undergoing transformation — a different context from the shell/build-to-suit trade-off that typically applies to greenfield development. Even so, the contractual logic remains relevant at the stage of re-leasing renovated capacity: a repositioned asset with optimized PUE and EU Taxonomy compliance can be marketed either as a generic NNN powered shell to a broad panel of potential tenants, or in a more customized configuration for an operator with specific technical needs.",
      p9: "This leasing decision, made asset by asset, directly shapes the exit profile and the addressable base of institutional buyers — a central parameter of the brown-to-green repositioning thesis.",
      h2_6: "Conclusion",
      conclusion: "Shell Lease NNN and Build-to-Suit are not two variants of the same contract — they are two philosophies for allocating risk between landlord and tenant. The former favors predictability and liquidity; the latter favors technical control and alignment with a specific tenant. For the European datacenter infrastructure investor, the choice depends less on a general preference than on the nature of the asset, the profile of the targeted tenant, and the desired exit horizon.",
      authorBio: "is an alternative asset manager. This content is provided for information purposes only and does not constitute a subscription offer or investment advice.",
      learnMoreTitle: "Learn more",
      link1Title: "Our TITAN DC AI Strategy",
      link1Desc: "Discover the brown-to-green transformation of European datacenters",
      link2Title: "Our Strategies",
      link2Desc: "TITAN and our 3 other investment poles"
    }
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-08-17T09:00:00+02:00",
    "dateModified": "2026-08-17T09:00:00+02:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "worksFor": {
        "@type": "Organization",
        "name": "FINXIA Capital"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "FINXIA Capital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://finxiacapital.com/logo-finxia.png"
      }
    },
    "articleSection": language === 'fr' ? "Immobilier & Infrastructure" : "Real Assets & Infrastructure",
    "keywords": language === 'fr' ? "Shell Lease NNN, Build-to-Suit, powered shell, datacenter Europe, triple net, FINXIA Capital" : "Shell Lease NNN, Build-to-Suit, powered shell, European datacenter, triple net, FINXIA Capital"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/shell-lease-nnn-vs-build-to-suit-datacenter-europe" : "https://finxiacapital.com/en/blog/shell-lease-nnn-vs-build-to-suit-datacenter-leasing-europe"
      }
    ]
  };

  return (
    <div data-testid="article-shell-lease-vs-bts-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/shell-lease-nnn-vs-build-to-suit-datacenter-europe/" : "https://finxiacapital.com/en/blog/shell-lease-nnn-vs-build-to-suit-datacenter-leasing-europe/"}
        keywords={language === 'fr' ? "Shell Lease NNN, Build-to-Suit, powered shell, datacenter Europe, triple net, hyperscale, brown-to-green" : "Shell Lease NNN, Build-to-Suit, powered shell, European datacenter, triple net, hyperscale, brown-to-green"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/shell-lease-nnn-vs-build-to-suit-datacenter-europe/"
        hreflangEn="https://finxiacapital.com/en/blog/shell-lease-nnn-vs-build-to-suit-datacenter-leasing-europe/"
        hreflangDefault="https://finxiacapital.com/blog/shell-lease-nnn-vs-build-to-suit-datacenter-europe/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-08-17">
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
              {language === 'fr' ? 'Par ' : 'By '}{t.author} — FINXIA Capital
            </p>
          </div>
        </header>

        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                {t.intro}
              </p>

              <p className="text-lg text-slate-600 mb-8">{t.lead}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_1}</h2>
              <p>{t.p1}</p>
              <p>{t.p2}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_2}</h2>
              <p>{t.p3}</p>
              <p>{t.p4}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p5}</p>
              <p>{t.p6}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_4}</h2>
              <p>{t.p7}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_5}</h2>
              <p>{t.p8}</p>
              <p>{t.p9}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_6}</h2>
              <p>{t.conclusion}</p>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Finxia Capital</strong> {t.authorBio}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a href="mailto:contact@finxiacapital.com" className="text-[#C45A3B] hover:underline">
                  contact@finxiacapital.com
                </a>
                <span className="text-slate-400">•</span>
                <a href="https://finxiacapital.com" className="text-[#C45A3B] hover:underline">
                  finxiacapital.com
                </a>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <h3 className="font-serif text-xl mb-6">{t.learnMoreTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={language === 'fr' ? "/strategies" : "/en/strategies"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link1Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link1Desc}</p>
                </Link>
                <Link href={language === 'fr' ? "/strategies" : "/en/strategies"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
