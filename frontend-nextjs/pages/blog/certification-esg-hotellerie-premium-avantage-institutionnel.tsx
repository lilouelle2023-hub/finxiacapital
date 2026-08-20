import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function HotelESGArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Certification ESG hôtelière : d'argument marketing à critère d'éligibilité institutionnelle",
      description: "Les actifs hôteliers certifiés BREEAM ou LEED se négocient avec une prime de 4,3%. En 2026, l'ESG devient un critère d'éligibilité, pas un argument marketing.",
      metaDescription: "Hôtellerie ESG 2026 : prime verte de 4,3% pour les actifs certifiés, 55% des investisseurs prévoient d'être acheteurs nets en 2025. Pourquoi la certification devient un critère d'éligibilité, pas un argument marketing. FINXIA Capital.",
      breadcrumbLabel: "Certification ESG : avantage institutionnel",
      keywords: "ESG hôtellerie, certification BREEAM LEED hôtel, prime verte immobilier, investissement hôtelier durable, green premium hospitality, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'Hospitality',
      date: '21 août 2026',
      readTime: '4 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Hôtellerie Premium',
      lead: "En 2026, la certification ESG d'un actif hôtelier ne relève plus de la communication institutionnelle — elle conditionne l'accès au financement vert et aux contrats corporate premium. Les hôtels sans pratiques de durabilité documentées se retrouvent exclus des programmes fournisseurs privilégiés, des tiers de financement vert et des contrats de voyage d'affaires à forte valeur.",
      p1: "La bascule est mesurable. Les actifs certifiés aux plus hauts standards — BREEAM Outstanding, LEED Platinum — se négocient avec une prime verte moyenne de 4,3% en 2026. Ce n'est plus une prime marginale réservée aux actifs trophées : c'est devenu un facteur de valorisation systématique, intégré dans les modèles d'évaluation des investisseurs institutionnels.",
      h2_1: "Pourquoi la conviction d'achat institutionnelle s'accélère malgré le resserrement du financement",
      p2: "55% des investisseurs prévoyaient d'être acheteurs nets en 2025, contre 47% en 2024 — une progression qui reflète l'apaisement des inquiétudes sur le financement et les rendements, porté par un environnement de taux plus favorable en première moitié d'année. Mais cette conviction s'accompagne de deux réserves structurelles : la hausse des coûts de construction, citée par 65% des investisseurs comme premier obstacle, et les risques géopolitiques et macroéconomiques, cités par 44%.",
      p3: "Ces deux réserves convergent vers une même conclusion opérationnelle : les investisseurs veulent acheter, mais sélectivement, sur des actifs dont le profil de risque est documenté et maîtrisé. La certification ESG répond directement à cette exigence — elle transforme un jugement qualitatif sur la qualité d'un actif en un critère vérifiable, auditable, intégrable dans un modèle de sous-écriture institutionnel.",
      h2_2: "Ce que le durcissement réglementaire 2026 change concrètement",
      p4: "Le cadre 2026 relève l'exigence : les hôtels premium et boutique ne peuvent plus s'appuyer sur une communication environnementale vague ou des éléments ESG superficiels. Ils doivent démontrer une preuve crédible — traçabilité opérationnelle, réparabilité, consommation responsable, impact positif mesurable. Les actifs sans pratiques documentées se retrouvent exclus des programmes fournisseurs privilégiés, des tiers de financement vert et des contrats de voyage d'affaires à forte valeur.",
      p5: "Pour un investisseur value-add, cette évolution change la nature même du repositionnement d'un actif sous-optimisé : la mise en conformité ESG n'est plus une option de rénovation parmi d'autres, elle devient une condition de sortie. Un actif repositionné sans certification documentée risque de se négocier avec une décote au moment de la rotation vers un investisseur Core — l'inverse exact de l'objectif de la méthode.",
      h2_3: "L'intégration ESG dans la méthode FINXIA",
      p6: "La méthode d'acquisition-repositionnement-stabilisation-rotation de FINXIA intègre la certification ESG comme un jalon de la phase de stabilisation, au même titre que l'alignement de marque avec l'opérateur partenaire. L'objectif n'est pas la certification pour elle-même — c'est la prime de valorisation qu'elle sécurise au moment de la sortie, et l'accès qu'elle garantit aux investisseurs Core dont les mandats excluent désormais les actifs non certifiés.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Hôtellerie Premium',
      link1Text: 'La méthode acquisition-repositionnement-stabilisation-rotation',
      link2Title: 'Financement Hôtelier 2026',
      link2Text: 'Pourquoi la dette senior seule ne suffit plus',
    },
    en: {
      title: "Hotel ESG Certification: From Marketing Argument to Institutional Eligibility Criterion",
      description: "BREEAM- or LEED-certified hotel assets trade at a 4.3% premium. In 2026, ESG becomes an eligibility criterion, not a marketing argument.",
      metaDescription: "Hospitality ESG 2026: 4.3% green premium for certified assets, 55% of investors plan to be net buyers in 2025. Why certification becomes an eligibility criterion, not a marketing argument. FINXIA Capital.",
      breadcrumbLabel: "ESG Certification: Institutional Advantage",
      keywords: "hospitality ESG, BREEAM LEED hotel certification, green premium real estate, sustainable hotel investment, green premium hospitality, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'Hospitality',
      date: 'August 21, 2026',
      readTime: '4 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Premium Hospitality',
      lead: "By 2026, ESG certification on a hotel asset is no longer a matter of institutional communication — it conditions access to green financing and premium corporate contracts. Hotels without documented sustainability practices find themselves excluded from preferred vendor programs, green financing tiers and high-value corporate travel contracts.",
      p1: "The shift is measurable. Assets certified to the highest standards — BREEAM Outstanding, LEED Platinum — trade at an average green premium of 4.3% in 2026. This is no longer a marginal premium reserved for trophy assets: it has become a systematic valuation factor, built into institutional investors' underwriting models.",
      h2_1: "Why institutional buying conviction is accelerating despite tighter financing",
      p2: "55% of investors intended to be net buyers in 2025, up from 47% in 2024 — a rise reflecting easing concerns over financing and yields, aided by a more favorable rate environment in the first half of the year. But that conviction comes with two structural caveats: rising construction costs, cited by 65% of investors as the top challenge, and geopolitical and macroeconomic risks, cited by 44%.",
      p3: "Both caveats converge on the same operational conclusion: investors want to buy, but selectively, on assets with a documented and controlled risk profile. ESG certification directly answers that requirement — it turns a qualitative judgment about an asset's quality into a verifiable, auditable criterion that can be built into an institutional underwriting model.",
      h2_2: "What the 2026 regulatory tightening changes in practice",
      p4: "The 2026 framework raises the bar: premium and boutique hotels can no longer rely on vague environmental messaging or superficial ESG elements. They must demonstrate credible evidence — operational traceability, repairability, responsible consumption, measurable positive impact. Assets without documented practices find themselves excluded from preferred vendor programs, green financing tiers and high-value corporate travel contracts.",
      p5: "For a value-add investor, this shift changes the very nature of repositioning an underperforming asset: ESG compliance is no longer one renovation option among others — it becomes an exit condition. A repositioned asset without documented certification risks trading at a discount at rotation to a Core investor — the exact opposite of the method's objective.",
      h2_3: "ESG integration within the FINXIA method",
      p6: "FINXIA's acquisition-repositioning-stabilization-rotation method builds ESG certification into the stabilization phase, on par with brand alignment with the partner operator. The goal isn't certification for its own sake — it's the valuation premium it secures at exit, and the access it guarantees to Core investors whose mandates now exclude uncertified assets.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Premium Hospitality Strategy',
      link1Text: 'The acquisition-repositioning-stabilization-rotation method',
      link2Title: 'Hotel Financing 2026',
      link2Text: 'Why senior debt alone no longer cuts it',
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/certification-esg-hotellerie-premium-avantage-institutionnel/" : "https://finxiacapital.com/en/blog/esg-certification-premium-hospitality-institutional-advantage/"
      }
    ]
  };

  return (
    <div data-testid="article-hotel-esg-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/certification-esg-hotellerie-premium-avantage-institutionnel/" : "https://finxiacapital.com/en/blog/esg-certification-premium-hospitality-institutional-advantage/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/certification-esg-hotellerie-premium-avantage-institutionnel/"
        hreflangEn="https://finxiacapital.com/en/blog/esg-certification-premium-hospitality-institutional-advantage/"
        hreflangDefault="https://finxiacapital.com/blog/certification-esg-hotellerie-premium-avantage-institutionnel/"
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
                <Link href={language === 'fr' ? '/blog/financement-hotelier-dette-jv-operateur-europe-2026' : '/en/blog/hotel-financing-debt-operator-jv-europe-2026'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
