import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function HotelFinancingArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Financement hôtelier en 2026 : pourquoi la dette senior seule ne suffit plus",
      description: "Les conditions de dette se durcissent en 2026. La structuration en JV opérateur devient le levier dominant du financement hôtelier value-add.",
      metaDescription: "Financement hôtelier 2026 : durcissement des conditions de dette après la détente de 2025. Pourquoi la structuration en JV opérateur et capital mezzanine devient la norme. Analyse FINXIA Capital.",
      breadcrumbLabel: "Financement hôtelier : dette vs JV opérateur",
      keywords: "financement hôtelier Europe, dette senior hôtellerie, JV opérateur hôtelier, capital structuré hôtellerie, financement value-add, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'Hospitality',
      date: '21 août 2026',
      readTime: '5 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Hôtellerie Premium',
      lead: "La Banque Centrale Européenne a ramené son taux de dépôt de 3,00% à 2,00% entre décembre 2024 et juin 2025, offrant un répit bienvenu au financement hôtelier. Mais 2026 a inversé la tendance : les prêteurs resserrent leurs conditions, et le financement par dette senior classique ne suffit plus à financer une acquisition value-add à l'échelle institutionnelle.",
      p1: "Le durcissement n'est pas anecdotique. Les prêteurs imposent des conditions plus strictes, et les propriétaires et promoteurs hôteliers font face à une dette plus chère et à des conditions de refinancement plus dures. Un écart croissant se creuse entre les attentes de prix des acheteurs et des vendeurs, ce qui ralentit les volumes de transaction dans certains segments — même si les marchés core, comme le Royaume-Uni (3,4 Md€), la France (3,0 Md€) et l'Espagne (2,1 Md€), restent les plus liquides d'Europe sur les transactions single-asset en 2025.",
      h2_1: "Le glissement vers les structures hybrides",
      p2: "Face à ce resserrement, la structuration évolue : certains prêteurs combinent dette senior, financement mezzanine et capital structuré pour atteindre un niveau de levier plus élevé sur les actifs qui le justifient. Les structures vont du partenariat opérateur classique jusqu'à des montages en preferred equity plus complexes. Cette hybridation n'est pas une contrainte technique — c'est devenu la condition d'accès aux actifs les plus attractifs, ceux qui nécessitent un repositionnement avant de redevenir éligibles aux standards institutionnels.",
      p3: "La méthode FINXIA anticipe structurellement ce contexte. Le partenariat avec un opérateur de référence n'est pas seulement un levier de distribution et de marque — c'est aussi un partenaire de structuration financière, capable d'apporter une garantie de performance opérationnelle qui améliore les conditions de financement obtenues sur l'acquisition.",
      h2_2: "Pourquoi l'incertitude de marché devient un point d'entrée",
      p4: "Les investisseurs stratégiques de long terme considèrent l'incertitude actuelle comme une fenêtre d'acquisition à des valorisations favorables — même si le sentiment d'investissement s'est refroidi sous l'effet des tensions géopolitiques qui dominent l'actualité du secteur depuis le printemps 2026. C'est une dynamique classique de cycle value-add : la volatilité du financement décourage les acheteurs non structurés et élargit la décote accessible aux investisseurs disposant d'une discipline de structuration et d'un accès au capital patient.",
      p5: "Cette discipline de structuration financière rejoint directement le savoir-faire institutionnel déjà démontré par l'équipe fondatrice de FINXIA sur des opérations tertiaires grand format — Centorial, Cœur Défense, Washington Plaza — où la négociation multi-partenaires et la structuration de capital complexe ont été déterminantes pour la création de valeur.",
      h2_3: "Ce que cela change pour l'exécution de la méthode FINXIA",
      p6: "Un marché où la dette senior classique ne suffit plus favorise les acteurs capables de structurer un financement hybride sur mesure, plutôt que ceux qui dépendent d'un unique canal de dette bancaire. C'est précisément la discipline que la méthode d'acquisition-repositionnement-stabilisation-rotation de FINXIA est structurée pour exploiter : entrer avec une structure de capital robuste, sortir sur une performance stabilisée et documentée.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Hôtellerie Premium',
      link1Text: 'La méthode acquisition-repositionnement-stabilisation-rotation',
      link2Title: 'Marché Hôtelier Européen 2026',
      link2Text: 'Concentration géographique et opportunités value-add',
    },
    en: {
      title: "Hotel Financing in 2026: Why Senior Debt Alone No Longer Cuts It",
      description: "Debt conditions are tightening in 2026. How operator JV structuring and structured capital are becoming the dominant lever for value-add hotel financing.",
      metaDescription: "Hotel financing 2026: debt conditions tighten after 2025's brief easing. Why operator JV structuring and mezzanine capital are becoming the norm. FINXIA Capital analysis.",
      breadcrumbLabel: "Hotel Financing: Debt vs Operator JV",
      keywords: "European hotel financing, hotel senior debt, hotel operator JV, structured hospitality capital, value-add financing, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'Hospitality',
      date: 'August 21, 2026',
      readTime: '5 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Premium Hospitality',
      lead: "The European Central Bank cut its deposit rate from 3.00% to 2.00% between December 2024 and June 2025, offering welcome relief to hotel financing. But 2026 reversed the trend: lenders are tightening conditions, and classic senior debt financing no longer covers a value-add acquisition at institutional scale.",
      p1: "The tightening isn't marginal. Lenders are imposing stricter conditions, and hotel owners and developers face more expensive debt and tougher refinancing terms. A widening gap has opened between buyer and seller price expectations, slowing transaction volumes in some segments — even as core markets like the UK (€3.4bn), France (€3.0bn) and Spain (€2.1bn) remain Europe's most liquid single-asset markets in 2025.",
      h2_1: "The shift toward hybrid structures",
      p2: "Facing this tightening, structuring is evolving: some lenders now blend senior debt, mezzanine financing and structured equity to reach higher leverage on assets that justify it. Structures range from straightforward operator partnerships to more complex preferred equity arrangements. This hybridization isn't a technical constraint — it has become the price of admission to the most attractive assets, the ones that require repositioning before becoming eligible again for institutional standards.",
      p3: "The FINXIA method structurally anticipates this context. Partnership with a reference operator isn't just a distribution and brand lever — it's also a financial structuring partner, able to provide an operational performance guarantee that improves the financing terms obtained on acquisition.",
      h2_2: "Why market uncertainty becomes an entry point",
      p4: "Strategic long-term investors view current uncertainty as an acquisition window at favorable valuations — even as investment sentiment has cooled under the geopolitical headlines that have dominated sector conversations since spring 2026. This is a classic value-add cycle dynamic: financing volatility discourages unstructured buyers and widens the discount available to investors with structuring discipline and access to patient capital.",
      p5: "This financial structuring discipline connects directly to the institutional know-how already demonstrated by FINXIA's founding team on large-format tertiary operations — Centorial, Cœur Défense, Washington Plaza — where multi-partner negotiation and complex capital structuring were decisive for value creation.",
      h2_3: "What this changes for FINXIA method execution",
      p6: "A market where classic senior debt no longer suffices favors players capable of structuring bespoke hybrid financing, rather than those dependent on a single bank debt channel. That's precisely the discipline FINXIA's acquisition-repositioning-stabilization-rotation method is structured to exploit: enter with a robust capital structure, exit on stabilized, documented performance.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Premium Hospitality Strategy',
      link1Text: 'The acquisition-repositioning-stabilization-rotation method',
      link2Title: 'European Hotel Market 2026',
      link2Text: 'Geographic concentration and value-add opportunities',
    },
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDescription,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-08-21T09:00:00+02:00",
    "dateModified": "2026-08-21T09:00:00+02:00",
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/financement-hotelier-dette-jv-operateur-europe-2026/" : "https://finxiacapital.com/en/blog/hotel-financing-debt-operator-jv-europe-2026/"
      }
    ]
  };

  return (
    <div data-testid="article-hotel-financing-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/financement-hotelier-dette-jv-operateur-europe-2026/" : "https://finxiacapital.com/en/blog/hotel-financing-debt-operator-jv-europe-2026/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/financement-hotelier-dette-jv-operateur-europe-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/hotel-financing-debt-operator-jv-europe-2026/"
        hreflangDefault="https://finxiacapital.com/blog/financement-hotelier-dette-jv-operateur-europe-2026/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-08-21">
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
                <Link href={language === 'fr' ? '/blog/marche-hotelier-europe-2026-revpar-investissement' : '/en/blog/european-hotel-market-2026-revpar-investment'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
