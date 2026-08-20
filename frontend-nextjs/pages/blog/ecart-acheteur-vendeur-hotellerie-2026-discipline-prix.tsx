import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function HotelBidAskArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "L'écart acheteur-vendeur hôtelier en 2026 : pourquoi la discipline de prix devient le facteur n°1",
      description: "L'incertitude 2026 élargit l'écart de prix acheteur-vendeur dans l'hôtellerie. Pourquoi la discipline d'entrée prime sur le timing de marché. FINXIA Capital.",
      metaDescription: "Hôtellerie 2026 : l'écart entre attentes de prix acheteurs et vendeurs se creuse sous l'effet de l'incertitude géopolitique. Pourquoi la discipline de prix, plus que le volume de transactions, détermine la performance value-add. FINXIA Capital.",
      breadcrumbLabel: "Écart acheteur-vendeur : discipline de prix",
      keywords: "négociation prix hôtelier, écart acheteur vendeur immobilier, discipline d'investissement value-add, marché hôtelier incertitude 2026, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'Hospitality',
      date: '21 août 2026',
      readTime: '4 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Hôtellerie Premium',
      lead: "Le sentiment d'investissement hôtelier s'est nettement refroidi au printemps 2026, sous l'effet des tensions géopolitiques dominant l'actualité du secteur. Ce refroidissement se traduit concrètement par un écart croissant entre les attentes de prix des acheteurs et des vendeurs — et par des volumes de transaction ralentis dans les segments où cet écart ne s'est pas encore résorbé.",
      p1: "Ce n'est pas un signal négatif pour un investisseur discipliné — c'est l'inverse. Un marché où l'incertitude élargit l'écart de prix est un marché qui récompense la capacité à documenter une thèse de repositionnement précise, plutôt que la capacité à suivre le consensus de marché. Les investisseurs stratégiques de long terme considèrent d'ailleurs l'incertitude actuelle comme une fenêtre d'acquisition à des valorisations favorables.",
      h2_1: "Pourquoi l'écart de prix se creuse sur les actifs sous-optimisés",
      p2: "Les vendeurs d'actifs 4-5 étoiles sous-exploités ancrent leurs attentes de prix sur la performance théorique d'un actif repositionné — pas sur sa performance actuelle. Les acheteurs disciplinés, eux, structurent leur prix d'entrée sur la performance documentée aujourd'hui, avec une prime conditionnelle réservée au potentiel de repositionnement une fois celui-ci confirmé par la due diligence opérationnelle. Cet écart de méthode, pas seulement de chiffres, explique pourquoi les transactions ralentissent sur les actifs les plus complexes à sous-écrire.",
      p3: "Les marchés les plus liquides d'Europe — Royaume-Uni, France, Espagne — concentrent la plus grande profondeur d'acheteurs Core capables d'absorber un actif repositionné en sortie. C'est cette profondeur de marché qui, en dernier ressort, détermine si un écart de prix se résorbe rapidement ou s'installe durablement.",
      h2_2: "La discipline d'entrée comme avantage compétitif",
      p4: "Dans un marché à écart de prix élevé, la discipline consiste à refuser de payer la performance théorique au moment de l'acquisition. FINXIA structure son prix d'entrée sur la performance opérationnelle documentée de l'actif au moment de la due diligence — jamais sur la promesse d'un repositionnement non encore exécuté. La prime de repositionnement se capture à la sortie, sur une performance stabilisée et vérifiable sur 24 à 36 mois, pas à l'entrée sur une hypothèse.",
      p5: "Cette discipline n'est pas nouvelle chez FINXIA — elle prolonge la même rigueur de structuration de prix appliquée par l'équipe fondatrice sur des opérations tertiaires grand format comme Cœur Défense et Washington Plaza, où la négociation institutionnelle a systématiquement séparé la valeur actuelle documentée de la valeur potentielle à réaliser.",
      h2_3: "Ce que 2026 confirme sur le cycle value-add",
      p6: "Un marché en incertitude ne suspend pas la thèse de repositionnement — il en accentue la pertinence. Plus l'écart de prix se creuse entre actifs stabilisés et actifs sous-optimisés, plus la discipline d'entrée devient le facteur déterminant de la performance finale, davantage que le timing macro du cycle de marché.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Hôtellerie Premium',
      link1Text: 'La méthode acquisition-repositionnement-stabilisation-rotation',
      link2Title: 'Certification ESG Hôtellerie',
      link2Text: "D'argument marketing à critère d'éligibilité institutionnelle",
    },
    en: {
      title: "The 2026 Hotel Bid-Ask Gap: Why Pricing Discipline Is Now Factor One",
      description: "2026 uncertainty widens the hotel buyer-seller price gap. Why entry discipline matters more than market timing. FINXIA Capital.",
      metaDescription: "Hospitality 2026: the gap between buyer and seller price expectations widens under geopolitical uncertainty. Why pricing discipline, more than transaction volume, determines value-add performance. FINXIA Capital.",
      breadcrumbLabel: "Bid-Ask Gap: Pricing Discipline",
      keywords: "hotel price negotiation, real estate bid-ask gap, value-add investment discipline, hotel market uncertainty 2026, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'Hospitality',
      date: 'August 21, 2026',
      readTime: '4 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Premium Hospitality',
      lead: "Hotel investment sentiment cooled noticeably in spring 2026 under geopolitical headlines dominating sector conversations. That cooling shows up concretely as a widening gap between buyer and seller price expectations — and as slower transaction volumes in segments where that gap hasn't yet closed.",
      p1: "That's not a negative signal for a disciplined investor — it's the opposite. A market where uncertainty widens the pricing gap is a market that rewards the ability to document a precise repositioning thesis, rather than the ability to follow market consensus. Strategic long-term investors, in fact, view current uncertainty as an acquisition window at favorable valuations.",
      h2_1: "Why the pricing gap widens on underperforming assets",
      p2: "Sellers of underexploited 4-5 star assets anchor their price expectations on a repositioned asset's theoretical performance — not on its current performance. Disciplined buyers, by contrast, structure their entry price on documented performance today, with a conditional premium reserved for repositioning potential once confirmed by operational due diligence. This gap in method, not just in numbers, explains why transactions slow on the assets hardest to underwrite.",
      p3: "Europe's most liquid markets — the UK, France, Spain — concentrate the greatest depth of Core buyers able to absorb a repositioned asset at exit. That market depth ultimately determines whether a pricing gap closes quickly or persists.",
      h2_2: "Entry discipline as a competitive advantage",
      p4: "In a high bid-ask-gap market, discipline means refusing to pay for theoretical performance at acquisition. FINXIA structures its entry price on the asset's documented operational performance at the time of due diligence — never on the promise of a repositioning not yet executed. The repositioning premium is captured at exit, on stabilized, verifiable performance over 24 to 36 months — not at entry on a hypothesis.",
      p5: "This discipline isn't new at FINXIA — it extends the same pricing structuring rigor applied by the founding team on large-format tertiary operations like Cœur Défense and Washington Plaza, where institutional negotiation systematically separated documented current value from potential value yet to be realized.",
      h2_3: "What 2026 confirms about the value-add cycle",
      p6: "An uncertain market doesn't suspend the repositioning thesis — it sharpens its relevance. The wider the pricing gap between stabilized and underperforming assets, the more entry discipline becomes the determining factor for final performance, more than the macro timing of the market cycle.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Premium Hospitality Strategy',
      link1Text: 'The acquisition-repositioning-stabilization-rotation method',
      link2Title: 'Hotel ESG Certification',
      link2Text: 'From marketing argument to institutional eligibility criterion',
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/ecart-acheteur-vendeur-hotellerie-2026-discipline-prix/" : "https://finxiacapital.com/en/blog/hotel-bid-ask-gap-2026-pricing-discipline/"
      }
    ]
  };

  return (
    <div data-testid="article-hotel-bidask-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/ecart-acheteur-vendeur-hotellerie-2026-discipline-prix/" : "https://finxiacapital.com/en/blog/hotel-bid-ask-gap-2026-pricing-discipline/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/ecart-acheteur-vendeur-hotellerie-2026-discipline-prix/"
        hreflangEn="https://finxiacapital.com/en/blog/hotel-bid-ask-gap-2026-pricing-discipline/"
        hreflangDefault="https://finxiacapital.com/blog/ecart-acheteur-vendeur-hotellerie-2026-discipline-prix/"
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
                <Link href={language === 'fr' ? '/blog/certification-esg-hotellerie-premium-avantage-institutionnel' : '/en/blog/esg-certification-premium-hospitality-institutional-advantage'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
