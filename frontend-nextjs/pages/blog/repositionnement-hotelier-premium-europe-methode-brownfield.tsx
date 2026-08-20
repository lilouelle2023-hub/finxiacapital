import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function HotelRepositioningArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Repositionnement hôtelier premium en Europe : la méthode qui transforme un actif sous-optimisé en machine à cash-flow",
      description: "22,6 Md€ de transactions hôtelières en Europe en 2025 (+30%). La méthode FINXIA de repositionnement d'actifs 4-5 étoiles sous-optimisés.",
      metaDescription: "Marché hôtelier premium européen : 22,6 Md€ de transactions en 2025, plus de 90% des investisseurs prévoient de maintenir ou augmenter leur allocation en 2026. La méthode de repositionnement FINXIA Capital, portée par 40 ans de track record immobilier institutionnel.",
      breadcrumbLabel: "Repositionnement hôtelier premium : la méthode FINXIA",
      keywords: "hôtellerie premium Europe, repositionnement hôtelier, RevPAR, investissement hôtelier institutionnel, value-add hospitality, Marriott Accor Hilton, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'Hospitality',
      date: '20 août 2026',
      readTime: '5 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Hôtellerie Premium',
      lead: "Le marché hôtelier institutionnel européen vit son meilleur cycle depuis 2019. Mais le volume de transactions ne dit rien de la discipline d'exécution nécessaire pour transformer un actif sous-optimisé en performance value-add. C'est cette discipline — pas le cycle de marché — qui fait la différence entre un rendement core et un rendement value-add.",
      p1: "Les chiffres du cycle actuel sont sans ambiguïté. Les transactions hôtelières européennes ont atteint 22,6 milliards d'euros en 2025, en hausse de 30% sur un an — leur meilleur niveau depuis le pic pré-COVID de 2019. Plus de 90% des investisseurs institutionnels interrogés par CBRE prévoient de maintenir ou d'augmenter leur allocation au secteur hôtelier en 2026. Le RevPAR européen progresse de 1 à 3% en 2026, porté davantage par l'ouverture de nouvelles chambres que par la croissance organique — un signal que la discipline de sélection d'actifs compte plus que jamais.",
      h2_1: "Pourquoi le segment premium sous-optimisé reste sous-adressé",
      p2: "Les investisseurs core concentrent leur capital sur les villes portes d'entrée déjà stabilisées — Londres, Paris, Madrid, Rome. Ce comportement crée une zone aveugle structurelle : des actifs hôteliers 4-5 étoiles bien situés, mais sous-exploités par une gestion opérationnelle datée, une marque mal alignée avec la clientèle actuelle, ou un capex de rénovation reporté depuis trop longtemps. Ces actifs ne sont pas visibles dans les mandats core — ils nécessitent une phase de repositionnement actif avant de redevenir éligibles aux standards institutionnels.",
      p3: "Le segment luxe et upper-upscale devrait surperformer en 2026, porté par un pricing power structurel et une demande internationale résiliente. Mais cette surperformance ne se matérialise que sur les actifs correctement repositionnés — la prime va à l'exécution, pas à la détention passive.",
      h2_2: "La méthode : acquisition, repositionnement, stabilisation, rotation",
      p4: "La méthode FINXIA suit une séquence disciplinée en quatre temps. Acquisition d'actifs 4-5 étoiles sous-optimisés dans les métropoles tier-1 européennes — Paris, Barcelone, Madrid, Milan — avec un potentiel de repositionnement de marque identifié dès la due diligence. Partenariat avec un opérateur de référence (Marriott, Accor, Hilton) pour aligner l'actif sur un standard de marque reconnu et une distribution internationale. Stabilisation opérationnelle du RevPAR sur 24 à 36 mois — la fenêtre nécessaire pour que le marché reconnaisse le repositionnement. Rotation sélective vers des investisseurs Core ou des REITs hôteliers une fois la performance stabilisée et documentée.",
      p5: "Cette séquence n'est pas théorique chez FINXIA — elle prolonge un savoir-faire déjà démontré sur des cycles complets d'actifs institutionnels grand format. Le Centorial, ancien siège du Crédit Lyonnais à Paris, illustre la même discipline appliquée au tertiaire : restructuration lourde d'un actif patrimonial classé (façade haussmannienne, verrière Eiffel), repositionnement complet en plateforme multi-locataires. Cœur Défense, plus de 350 000 m² de bureaux à Paris La Défense, démontre la capacité à coordonner travaux, négociation multi-locataires et gouvernance technique à très grande échelle. Washington Plaza, ex-siège de Shell Petroleum, illustre le repositionnement d'un actif corporate emblématique en plateforme tertiaire premium. Ce sont les mêmes compétences — négociation institutionnelle, coordination de travaux, repositionnement de marque, discipline de sortie — qui s'appliquent à l'hôtellerie.",
      h2_3: "Ce que le cycle 2026 change concrètement",
      p6: "Un marché en hausse de 30% n'élimine pas la nécessité de sélectivité — il l'accentue. Quand le capital afflue vers les villes portes d'entrée déjà stabilisées, les actifs sous-optimisés se négocient avec une décote qui reflète leur besoin de repositionnement, pas leur potentiel réel une fois la marque et l'exploitation alignées. C'est précisément l'écart que la méthode FINXIA est structurée pour capturer : entrer sur la décote, sortir sur la performance stabilisée.",
      p7: "La discipline de sélectivité géographique reste stricte : Paris, Barcelone, Madrid et Milan concentrent la profondeur de marché, la liquidité de sortie et l'accès aux opérateurs de référence nécessaires pour exécuter cette méthode à l'échelle institutionnelle.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Hôtellerie Premium',
      link1Text: 'Découvrez la méthode complète et le track record JPV',
      link2Title: 'Jean-Pierre Véron',
      link2Text: 'Président — 40+ ans immobilier institutionnel européen',
    },
    en: {
      title: "Premium Hotel Repositioning in Europe: The Method That Turns an Underperforming Asset into a Cash-Flow Machine",
      description: "€22.6bn in European hotel transactions in 2025 (+30%). FINXIA's method for repositioning underperforming 4-5 star assets into value-add performance.",
      metaDescription: "European premium hotel market: €22.6bn in transactions in 2025, over 90% of investors plan to maintain or increase their allocation in 2026. The FINXIA Capital repositioning method, backed by 40 years of institutional real estate track record.",
      breadcrumbLabel: "Premium Hotel Repositioning: The FINXIA Method",
      keywords: "premium hospitality Europe, hotel repositioning, RevPAR, institutional hotel investment, value-add hospitality, Marriott Accor Hilton, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'Hospitality',
      date: 'August 20, 2026',
      readTime: '5 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Premium Hospitality',
      lead: "The European institutional hotel market is having its best cycle since 2019. But transaction volume says nothing about the execution discipline required to turn an underperforming asset into value-add performance. It's that discipline — not the market cycle — that separates a core return from a value-add return.",
      p1: "The current cycle's numbers are unambiguous. European hotel transactions reached €22.6 billion in 2025, up 30% year-on-year — the best level since the pre-COVID peak of 2019. Over 90% of institutional investors surveyed by CBRE expect to maintain or increase their allocation to hospitality in 2026. European RevPAR is growing 1 to 3% in 2026, driven more by new room openings than organic growth — a signal that asset selection discipline matters more than ever.",
      h2_1: "Why the underperforming premium segment remains underaddressed",
      p2: "Core investors concentrate their capital on already-stabilized gateway cities — London, Paris, Madrid, Rome. This behavior creates a structural blind spot: well-located 4-5 star hotel assets, underexploited by dated operational management, a brand misaligned with today's customer, or renovation capex deferred for too long. These assets are invisible to core mandates — they require an active repositioning phase before becoming eligible for institutional standards again.",
      p3: "The luxury and upper-upscale segment is expected to outperform in 2026, driven by structural pricing power and resilient international demand. But this outperformance only materializes on correctly repositioned assets — the premium goes to execution, not passive holding.",
      h2_2: "The method: acquisition, repositioning, stabilization, rotation",
      p4: "The FINXIA method follows a disciplined four-step sequence. Acquisition of underperforming 4-5 star assets in tier-1 European metros — Paris, Barcelona, Madrid, Milan — with repositioning potential identified from due diligence. Partnership with a reference operator (Marriott, Accor, Hilton) to align the asset with a recognized brand standard and international distribution. Operational RevPAR stabilization over 24 to 36 months — the window needed for the market to recognize the repositioning. Selective rotation to Core investors or hotel REITs once performance is stabilized and documented.",
      p5: "This sequence is not theoretical at FINXIA — it extends know-how already demonstrated across full cycles of large-format institutional assets. The Centorial, former Crédit Lyonnais headquarters in Paris, illustrates the same discipline applied to office space: heavy restructuring of a heritage-listed asset (Haussmannian façade, Eiffel-style glass roof), full repositioning into a multi-tenant platform. Cœur Défense, over 350,000 sqm of offices in Paris La Défense, demonstrates the ability to coordinate works, multi-tenant negotiation and technical governance at very large scale. Washington Plaza, former Shell Petroleum headquarters, illustrates the repositioning of an iconic corporate asset into a premium office platform. These are the same skills — institutional negotiation, works coordination, brand repositioning, exit discipline — that apply to hospitality.",
      h2_3: "What the 2026 cycle actually changes",
      p6: "A market up 30% doesn't eliminate the need for selectivity — it sharpens it. As capital flows into already-stabilized gateway cities, underperforming assets trade at a discount that reflects their need for repositioning, not their real potential once brand and operations are aligned. That's precisely the gap the FINXIA method is structured to capture: enter on the discount, exit on stabilized performance.",
      p7: "Geographic selectivity discipline stays strict: Paris, Barcelona, Madrid and Milan concentrate the market depth, exit liquidity and access to reference operators needed to execute this method at institutional scale.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Premium Hospitality Strategy',
      link1Text: 'Discover the full method and JPV track record',
      link2Title: 'Jean-Pierre Véron',
      link2Text: 'Chairman — 40+ years European institutional real estate',
    },
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDescription,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-08-20T09:00:00+02:00",
    "dateModified": "2026-08-20T09:00:00+02:00",
    "author": {
      "@type": "Person",
      "name": "Jean-Pierre Véron",
      "jobTitle": "Chairman & Founder",
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
    "articleSection": "Hospitality",
    "keywords": t.keywords
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'fr' ? "Accueil" : "Home",
        "item": language === 'fr' ? "https://finxiacapital.com/" : "https://finxiacapital.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": language === 'fr' ? "https://finxiacapital.com/blog/" : "https://finxiacapital.com/en/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t.breadcrumbLabel,
        "item": language === 'fr' ? "https://finxiacapital.com/blog/repositionnement-hotelier-premium-europe-methode-brownfield/" : "https://finxiacapital.com/en/blog/premium-hotel-repositioning-europe-brownfield-method/"
      }
    ]
  };

  return (
    <div data-testid="article-hotel-repositioning-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/repositionnement-hotelier-premium-europe-methode-brownfield/" : "https://finxiacapital.com/en/blog/premium-hotel-repositioning-europe-brownfield-method/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/repositionnement-hotelier-premium-europe-methode-brownfield/"
        hreflangEn="https://finxiacapital.com/en/blog/premium-hotel-repositioning-europe-brownfield-method/"
        hreflangDefault="https://finxiacapital.com/blog/repositionnement-hotelier-premium-europe-methode-brownfield/"
      />

      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? '/blog' : '/en/blog'} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>

            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider">
                <Tag className="w-4 h-4" />
                {t.category}
              </span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-08-20">
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
              {t.byline}
            </p>
            <p className="text-slate-400 text-xs mt-1">
              {t.architectureLabel}
            </p>
          </div>
        </header>

        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                {t.lead}
              </p>

              <p>{t.p1}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_1}</h2>
              <p>{t.p2}</p>
              <p>{t.p3}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_2}</h2>
              <p>{t.p4}</p>
              <p>{t.p5}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p6}</p>
              <p>{t.p7}</p>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Jean-Pierre Véron</strong> {t.authorBioRest}
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
              <h3 className="font-serif text-xl mb-6">{t.learnMore}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={language === 'fr' ? '/strategies' : '/en/strategies'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link1Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link1Text}</p>
                </Link>
                <Link href={language === 'fr' ? '/jean-pierre-veron' : '/en/jean-pierre-veron'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link2Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link2Text}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
