import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleImmersionCoolingPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Refroidissement par immersion : la réponse des datacenters européens à la densité GPU de l'IA",
      description: "L'air ne suffit plus face aux racks GPU de 100 kW et plus. Refroidissement liquide direct et immersion redessinent la salle blanche — et la facture énergétique. Ce que l'investisseur doit vérifier avant de parier sur l'immersion.",
      tag: "Energy & Infrastructure",
      date: "16 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Le refroidissement par air atteint ses limites physiques : au-delà de 30 à 40 kW par rack, ventiler devient un combat perdu. Avec les racks GPU d'entraînement IA qui dépassent désormais 100 kW, le liquide n'est plus une option — et l'immersion, longtemps marginale, devient un sujet de conception sérieux pour les datacenters européens.",
      p1: "Rappel technique. L'air évacue confortablement 10 à 20 kW par rack. Le liquide direct sur puce — direct-to-chip — monte au-delà de 100 kW. Les racks accélérateurs récents, chez NVIDIA comme chez ses concurrents, sont conçus d'origine pour le liquide. L'immersion va plus loin : le serveur entier est plongé dans un fluide diélectrique, monophasé ou diphasé.",
      p2: "La technologie n'est pas exotique : le HPC l'utilise depuis des années, et des fournisseurs européens — Submer en Espagne, Iceotope au Royaume-Uni, Asperitas aux Pays-Bas — en ont fait des produits industriels. L'Open Compute Project publie des spécifications ouvertes. Ce qui change, c'est la demande : la densité GPU rend le débat concret.",
      h2_1: "Ce que l'immersion change dans une salle blanche",
      p3: "Plus de ventilateurs de serveurs, presque plus de climatisation de salle : selon les retours d'exploitation, le PUE partiel des installations immergées peut approcher 1,1, contre 1,3 à 1,5 pour du air classique. La chaleur est récupérée à température élevée, donc réutilisable — un atout direct au regard de la directive EED.",
      p4: "Les contraintes sont réelles : charge au sol élevée, logistique du fluide, formation des exploitants, garanties constructeurs à valider serveur par serveur. L'immersion n'est pas un produit en rayon, c'est un choix d'exploitation qui engage vingt ans.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "L'arbitrage économique est simple : l'immersion coûte plus cher au capex, moins cher à l'opex énergétique. Elle se justifie à haute densité — au-delà de 50 à 80 kW par rack — et perd son sens sur un site de colocation classique à 10 kW. La question n'est donc pas « pour ou contre l'immersion », mais « quelle densité vise ce site, pour quels clients ? ».",
      p6: "En pratique, peu de sites existants seront rétrofités en immersion complète : la structure, la dalle et les équipes n'ont pas été conçues pour. La stratégie dominante reste le liquide direct sur puce, avec une conception « immersion-ready » qui préserve l'option pour les phases futures.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, nous évaluons chaque actif sur sa trajectoire de refroidissement : densité actuelle, densité cible des clients, compatibilité liquide direct, faisabilité structurelle d'une évolution vers l'immersion. Un site figé à l'air se ferme la clientèle IA ; un site conçu liquide la capte.",
      p8: "Sur les transformations brown, la question structurelle est décisive : charge admissible de la dalle, hauteur sous plafond, réseau hydraulique à créer. C'est un point de due diligence technique autant qu'un argument de valorisation — la flexibilité thermique d'un actif vaut de la valeur.",
      h2_4: "Ce qu'il faut retenir",
      p9: "La densité GPU impose le liquide ; l'immersion est la variante la plus aboutie pour les très hautes densités, avec un PUE et une récupération de chaleur que l'air ne peut pas égaler. Mais c'est un choix d'exploitation de long terme, pas un équipement interchangeable.",
      p10: "À surveiller : la généralisation des garanties constructeurs sur serveurs immergés, et l'effet du reporting EED — qui récompense publiquement les sites les plus efficaces.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Immersion Cooling: European Datacenters' Answer to AI GPU Density",
      description: "Air cooling is no longer enough against 100 kW-plus GPU racks. Direct liquid and immersion cooling are redrawing the white room — and the energy bill. What investors should check before betting on immersion.",
      tag: "Energy & Infrastructure",
      date: "October 16, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "Air cooling is hitting its physical limits: beyond 30 to 40 kW per rack, ventilation becomes a losing battle. With AI training GPU racks now exceeding 100 kW, liquid is no longer optional — and immersion, long marginal, is becoming a serious design topic for European datacenters.",
      p1: "A technical reminder. Air comfortably removes 10 to 20 kW per rack. Direct-to-chip liquid goes beyond 100 kW. Recent accelerator racks, from NVIDIA and its competitors alike, are designed for liquid from the outset. Immersion goes further: the entire server is submerged in a dielectric fluid, single-phase or two-phase.",
      p2: "The technology is not exotic: HPC has used it for years, and European suppliers — Submer in Spain, Iceotope in the UK, Asperitas in the Netherlands — have turned it into industrial products. The Open Compute Project publishes open specifications. What has changed is demand: GPU density makes the debate concrete.",
      h2_1: "What Immersion Changes in a White Room",
      p3: "No more server fans, almost no room air conditioning: according to operating feedback, the partial PUE of immersed installations can approach 1.1, versus 1.3 to 1.5 for conventional air cooling. Heat is recovered at high temperature, and therefore reusable — a direct advantage under the EED directive.",
      p4: "The constraints are real: high floor loading, fluid logistics, operator training, OEM warranties to be validated server by server. Immersion is not an off-the-shelf product; it is an operating choice that commits a site for twenty years.",
      h2_2: "What This Changes for Investors",
      p5: "The economic trade-off is simple: immersion costs more in capex, less in energy opex. It pays off at high density — beyond 50 to 80 kW per rack — and loses its meaning on a conventional 10 kW colocation site. The question is therefore not 'for or against immersion', but 'what density does this site target, for which customers?'.",
      p6: "In practice, few existing sites will be retrofitted to full immersion: the structure, the slab and the teams were not designed for it. The dominant strategy remains direct-to-chip liquid, with an 'immersion-ready' design that preserves the option for future phases.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, we assess each asset on its cooling trajectory: current density, target density of customers, direct liquid compatibility, structural feasibility of an evolution toward immersion. A site frozen on air closes itself to AI customers; a liquid-designed site captures them.",
      p8: "On brown transformations, the structural question is decisive: slab load capacity, ceiling height, hydraulic network to be built. This is a technical due diligence point as much as a valuation argument — an asset's thermal flexibility is worth value.",
      h2_4: "Key Takeaways",
      p9: "GPU density mandates liquid; immersion is the most accomplished variant for very high densities, with a PUE and heat recovery that air cannot match. But it is a long-term operating choice, not an interchangeable piece of equipment.",
      p10: "Worth watching: the generalization of OEM warranties on immersed servers, and the effect of EED reporting — which publicly rewards the most efficient sites.",
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
    "datePublished": "2026-10-16T09:00:00+02:00",
    "dateModified": "2026-10-16T09:00:00+02:00",
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
    "keywords": language === 'fr' ? "refroidissement immersion, datacenter, IA, GPU, NVIDIA, green datacenter, PUE, investissement infrastructure IA" : "immersion cooling, datacenter, AI, GPU, NVIDIA, green datacenter, PUE, AI infrastructure investment"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/refroidissement-immersion-datacenter-gpu-ia-europe-investissement-2026" : "https://finxiacapital.com/en/blog/immersion-cooling-datacenter-gpu-ai-europe-investment-2026"
      }
    ]
  };

  return (
    <div data-testid="article-refroidissement-immersion-datacenter-gpu-ia-europe-investissement-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/refroidissement-immersion-datacenter-gpu-ia-europe-investissement-2026/" : "https://finxiacapital.com/en/blog/immersion-cooling-datacenter-gpu-ai-europe-investment-2026/"}
        keywords={language === 'fr' ? "refroidissement immersion, datacenter, IA, GPU, NVIDIA, green datacenter, PUE, investissement infrastructure IA" : "immersion cooling, datacenter, AI, GPU, NVIDIA, green datacenter, PUE, AI infrastructure investment"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/refroidissement-immersion-datacenter-gpu-ia-europe-investissement-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/immersion-cooling-datacenter-gpu-ai-europe-investment-2026/"
        hreflangDefault="https://finxiacapital.com/blog/refroidissement-immersion-datacenter-gpu-ia-europe-investissement-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-16">
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
