import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function SeniorLivingArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Senior Living en Europe : le troisième pilier du résidentiel opéré que les investisseurs découvrent",
      description: "16,1 Md€ investis dans le senior living européen en 2025, pénétration institutionnelle sous 3%. Le segment démographique sous-investi. FINXIA Capital.",
      metaDescription: "Senior Living Europe : 16,1 Md€ investis en 2025, pénétration institutionnelle sous 3% malgré 30% de la population 65+ d'ici 2030 en France/Allemagne/Italie. Le segment sous-investi du résidentiel opéré. FINXIA Capital.",
      breadcrumbLabel: "Senior Living : le pilier sous-investi",
      keywords: "senior living Europe, résidences seniors investissement, vieillissement démographique immobilier, résidentiel opéré seniors, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'Residential',
      date: '21 août 2026',
      readTime: '5 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Résidentiel & Flex Living',
      lead: "16,1 milliards d'euros ont été investis dans le senior living européen en 2025, dont un record de 11,8 milliards au Royaume-Uni. Hors Royaume-Uni, l'activité a presque doublé par rapport à 2024, portée par le rebond des pays nordiques. Pourtant, la pénétration institutionnelle du segment reste inférieure à 3% dans la plupart des pays européens — un écart considérable entre la dynamique démographique et l'allocation de capital réelle.",
      p1: "Cet écart ne relève pas du mystère : selon Eurostat, plus de 30% de la population en France, en Allemagne et en Italie aura plus de 65 ans d'ici 2030. La part des 65 ans et plus dans l'Union européenne devrait passer de 22% en 2024 à 28% en 2045, soit près de 29 millions de personnes supplémentaires. Cette 'vague grise' est l'une des tendances démographiques les plus prévisibles d'Europe — et pourtant l'un des segments immobiliers les moins capitalisés par le capital institutionnel.",
      h2_1: "Pourquoi la demande institutionnelle s'accélère maintenant",
      p2: "L'investissement dans les secteurs immobiliers opérés (OpRE) représente une part croissante de l'investissement total en Europe depuis 2022, passant de 30% à 38%. Près de deux investisseurs sur cinq prévoient d'augmenter encore leur allocation à ces secteurs dans les trois prochaines années. Le retour de la liquidité en 2025 devrait renforcer la demande institutionnelle pour le senior living en 2026, soutenue par un capital Core et value-add substantiel en quête d'exposition au segment.",
      p3: "Ce retard d'allocation face à une demande démographique aussi prévisible crée une configuration rare : un segment où le risque de demande est structurellement documenté, mais où l'offre de capital institutionnel reste largement inférieure à l'opportunité. C'est exactement le type de déséquilibre que la thèse résidentielle opérée de FINXIA est structurée pour capturer.",
      h2_2: "Le senior living, un actif opéré au même titre que le coliving et le PBSA",
      p4: "Le senior living partage la même logique opérationnelle que le reste du résidentiel flexible : la performance dépend de la qualité de gestion active — services de santé intégrés, personnel qualifié, taux d'occupation piloté — bien davantage que de la simple détention immobilière. C'est cette dimension opérationnelle, commune à l'ensemble du résidentiel opéré, qui rapproche structurellement le senior living du coliving, du PBSA et du build-to-rent au sein d'un même savoir-faire de gestion d'actifs.",
      p5: "FINXIA Capital cible le senior living au même titre que les autres segments du résidentiel flex, avec des actifs opérés par des partenaires spécialisés du secteur santé-résidentiel, dans le cadre de la même discipline de structuration grand format appliquée à l'ensemble du pôle Résidentiel & Flex Living.",
      h2_3: "Une classe d'actifs à surveiller de près en 2026",
      p6: "Le senior living européen combine trois caractéristiques rares pour un investisseur institutionnel : une demande démographique documentée sur plusieurs décennies, une offre de capital encore largement inférieure à l'opportunité, et un modèle opérationnel directement transposable au savoir-faire déjà déployé sur le coliving, le PBSA et le build-to-rent. C'est cette combinaison qui en fait, selon nous, le prochain terrain d'exécution naturel de la thèse résidentielle FINXIA.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Résidentiel & Flex Living',
      link1Text: 'La thèse complète et le track record JPV',
      link2Title: 'PBSA : Classe d\'Actifs à Part Entière',
      link2Text: 'Comment les résidences étudiantes ont gagné leur place',
    },
    en: {
      title: "Senior Living in Europe: The Third Pillar of Operated Residential Investors Are Discovering",
      description: "€16.1bn invested in European senior living in 2025, institutional penetration below 3%. The underinvested demographic segment. FINXIA Capital.",
      metaDescription: "Senior Living Europe: €16.1bn invested in 2025, institutional penetration below 3% despite 30% of the population 65+ by 2030 in France/Germany/Italy. Operated residential's underinvested pillar. FINXIA Capital.",
      breadcrumbLabel: "Senior Living: The Underinvested Pillar",
      keywords: "senior living Europe, senior housing investment, demographic ageing real estate, operated senior residential, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'Residential',
      date: 'August 21, 2026',
      readTime: '5 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Residential & Flex Living',
      lead: "€16.1 billion was invested in European senior living in 2025, including a record €11.8 billion in the UK. Excluding the UK, activity nearly doubled versus 2024, driven by a Nordic rebound. Yet institutional penetration of the segment remains below 3% in most European countries — a considerable gap between demographic momentum and actual capital allocation.",
      p1: "That gap isn't hard to explain: according to Eurostat, more than 30% of the population in France, Germany and Italy will be 65 or older by 2030. The share of the 65+ population in the EU is projected to rise from 22% in 2024 to 28% by 2045 — nearly 29 million additional people. This 'silver wave' is one of Europe's most predictable demographic trends — and yet one of its least capitalized real estate segments by institutional capital.",
      h2_1: "Why institutional demand is accelerating now",
      p2: "Investment in operated real estate (OpRE) sectors has taken a growing share of total European investment since 2022, rising from 30% to 38%. Nearly two in five investors plan to increase their allocation to these sectors further over the next three years. The return of liquidity in 2025 is expected to strengthen institutional demand for senior living in 2026, supported by substantial core and value-add capital seeking exposure to the sector.",
      p3: "This allocation lag against such predictable demographic demand creates a rare setup: a segment where demand risk is structurally documented, but where institutional capital supply remains well below the opportunity. That's exactly the kind of imbalance FINXIA's operated residential thesis is structured to capture.",
      h2_2: "Senior living, an operated asset alongside coliving and PBSA",
      p4: "Senior living shares the same operational logic as the rest of flexible residential: performance depends on active management quality — integrated healthcare services, qualified staff, managed occupancy — far more than on simple property ownership. It's this operational dimension, common across operated residential, that structurally brings senior living close to coliving, PBSA and build-to-rent within the same asset management know-how.",
      p5: "FINXIA Capital targets senior living alongside the other flex residential segments, with assets operated by specialized healthcare-residential partners, under the same large-format structuring discipline applied across the entire Residential & Flex Living pillar.",
      h2_3: "An asset class to watch closely in 2026",
      p6: "European senior living combines three rare traits for an institutional investor: demographic demand documented over several decades, a capital supply still well below the opportunity, and an operating model directly transposable to the know-how already deployed on coliving, PBSA and build-to-rent. This combination is, in our view, what makes it the natural next execution ground for FINXIA's residential thesis.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Residential & Flex Living Strategy',
      link1Text: 'The full thesis and JPV track record',
      link2Title: 'PBSA: An Asset Class in Its Own Right',
      link2Text: 'How student housing earned its place',
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
    "articleSection": "Residential",
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/senior-living-europe-troisieme-pilier-residentiel-opere/" : "https://finxiacapital.com/en/blog/senior-living-europe-third-pillar-operated-residential/"
      }
    ]
  };

  return (
    <div data-testid="article-senior-living-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/senior-living-europe-troisieme-pilier-residentiel-opere/" : "https://finxiacapital.com/en/blog/senior-living-europe-third-pillar-operated-residential/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/senior-living-europe-troisieme-pilier-residentiel-opere/"
        hreflangEn="https://finxiacapital.com/en/blog/senior-living-europe-third-pillar-operated-residential/"
        hreflangDefault="https://finxiacapital.com/blog/senior-living-europe-troisieme-pilier-residentiel-opere/"
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
                <Link href={language === 'fr' ? '/blog/pbsa-residences-etudiantes-europe-classe-actifs-a-part-entiere' : '/en/blog/pbsa-student-housing-europe-asset-class-in-its-own-right'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
