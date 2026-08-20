import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function PBSAArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "PBSA : pourquoi les résidences étudiantes sont devenues une classe d'actifs à part entière",
      description: "67% des investisseurs européens classent le PBSA parmi leurs 3 secteurs préférés. Comment les résidences étudiantes sont devenues une priorité d'allocation.",
      metaDescription: "PBSA Europe : 67% des investisseurs le classent parmi leurs 3 secteurs préférés (enquête INREV 2025), 78% prévoient d'augmenter leur exposition en 2026. Taux d'occupation 96%. Analyse FINXIA Capital.",
      breadcrumbLabel: "PBSA : classe d'actifs à part entière",
      keywords: "PBSA Europe, résidences étudiantes investissement, student housing institutionnel, classe d'actifs résidentiel opéré, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'Residential',
      date: '21 août 2026',
      readTime: '5 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Résidentiel & Flex Living',
      lead: "Dans l'enquête INREV 2025 sur les intentions d'investissement, les résidences étudiantes se classent au 3ème rang des secteurs préférés des investisseurs institutionnels européens, avec 67% des répondants la sélectionnant — très au-dessus de sa moyenne historique. Le PBSA n'est plus un segment de niche : c'est devenu une priorité d'allocation.",
      p1: "La confiance des investisseurs continue de progresser à l'approche de 2026 : 78% des répondants signalent leur intention d'augmenter leur exposition au secteur. Le marché européen comptait, fin 2025, près de 295 portefeuilles représentant plus de 2 470 actifs opérationnels — une échelle qui confirme la maturité institutionnelle du segment, loin de son statut de niche d'il y a une décennie.",
      h2_1: "Un déficit d'offre structurel qui dépasse celui du résidentiel classique",
      p2: "Le PBSA affiche un taux d'occupation de 96% en Europe continentale — un niveau qui traduit une tension locative encore plus marquée que sur le résidentiel classique. Le taux de couverture nette (provision rate) ne dépasse que 25% en Europe continentale et 35% au Royaume-Uni, ce qui signifie que l'immense majorité de la demande étudiante reste logée hors du parc PBSA institutionnel — une réserve de croissance considérable pour les opérateurs capables de livrer une offre qualitative.",
      p3: "Les inscriptions étudiantes internationales en Europe devraient croître de 5% par an jusqu'en 2030, ajoutant une pression de demande structurelle à un marché déjà en sous-offre chronique. C'est cette combinaison — déficit d'offre documenté et croissance démographique prévisible — qui distingue le PBSA d'un pari conjoncturel sur la démographie étudiante.",
      h2_2: "Un marché fragmenté en voie de consolidation",
      p4: "Le marché reste aujourd'hui hautement fragmenté, mais l'émergence d'opérateurs et de plateformes de référence se poursuit, portée par un mouvement de consolidation. Cette dynamique n'est pas sans tension : la totalité des investisseurs interrogés se déclarent préoccupés par l'impact de la réglementation sur leur activité, aux côtés de la hausse des coûts de construction et d'exploitation.",
      p5: "Pour un investisseur disposant d'une discipline de structuration grand format, cette fragmentation est une opportunité plutôt qu'un obstacle : elle ouvre la voie à des acquisitions de portefeuilles consolidés auprès d'opérateurs sous-capitalisés, avec un effet de portefeuille à la sortie comparable à celui recherché sur le coliving et le build-to-rent.",
      h2_3: "La place du PBSA dans la thèse FINXIA",
      p6: "FINXIA Capital cible le PBSA au même titre que le coliving et le build-to-rent, dans le cadre du même ciblage résidentiel détaillé dans notre thèse sur le déficit de logement. La discipline de structuration grand format démontrée sur la Vallée du Camincourt s'applique directement : dalle technique, conformité réglementaire, coordination multi-partenaires.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Résidentiel & Flex Living',
      link1Text: 'La thèse complète et le track record JPV',
      link2Title: 'Build-to-Rent : Première Classe d\'Actifs',
      link2Text: 'Comment le secteur Living a dépassé tous les autres',
    },
    en: {
      title: "PBSA: Why Student Housing Became an Asset Class in Its Own Right",
      description: "67% of European investors rank PBSA among their top 3 preferred sectors. How student housing became an allocation priority. FINXIA Capital.",
      metaDescription: "PBSA Europe: 67% of investors rank it among their top 3 preferred sectors (2025 INREV survey), 78% plan to increase exposure in 2026. 96% occupancy rate. FINXIA Capital analysis.",
      breadcrumbLabel: "PBSA: An Asset Class in Its Own Right",
      keywords: "PBSA Europe, student housing investment, institutional student accommodation, operated residential asset class, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'Residential',
      date: 'August 21, 2026',
      readTime: '5 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Residential & Flex Living',
      lead: "In the 2025 INREV Investor Intentions survey, student accommodation ranks 3rd among European institutional investors' preferred sectors, with 67% of respondents selecting it — far above its historical average. PBSA is no longer a niche segment: it has become an allocation priority.",
      p1: "Investor confidence keeps rising ahead of 2026: 78% of respondents signal plans to increase their exposure to the sector. By the end of 2025, the European market comprised nearly 295 portfolios representing more than 2,470 operational assets — a scale that confirms the segment's institutional maturity, far from its niche status a decade ago.",
      h2_1: "A structural supply deficit deeper than classic residential",
      p2: "PBSA posts a 96% occupancy rate in continental Europe — a level that reflects even tighter rental pressure than classic residential. Net provision rates reach only 25% in continental Europe and 35% in the UK, meaning the vast majority of student demand remains housed outside the institutional PBSA stock — a considerable growth reserve for operators able to deliver quality supply.",
      p3: "International student enrollments in Europe are forecast to grow 5% annually through 2030, adding structural demand pressure to a market already in chronic undersupply. It's this combination — a documented supply deficit and predictable demographic growth — that sets PBSA apart from a cyclical bet on student demographics.",
      h2_2: "A fragmented market on the path to consolidation",
      p4: "The market remains highly fragmented today, but the emergence of leading operators and platforms continues, driven by consolidation. This dynamic isn't without tension: 100% of surveyed investors report concerns about the impact of regulation on their business, alongside rising construction and operating costs.",
      p5: "For an investor with large-format structuring discipline, this fragmentation is an opportunity rather than an obstacle: it opens the door to consolidated portfolio acquisitions from under-capitalized operators, with a portfolio effect at exit comparable to that sought in coliving and build-to-rent.",
      h2_3: "PBSA's place in the FINXIA thesis",
      p6: "FINXIA Capital targets PBSA alongside coliving and build-to-rent, within the same residential targeting detailed in our housing deficit thesis. The large-format structuring discipline demonstrated on Vallée du Camincourt applies directly: technical slab structuring, regulatory compliance, multi-partner coordination.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Residential & Flex Living Strategy',
      link1Text: 'The full thesis and JPV track record',
      link2Title: 'Build-to-Rent: The Top Asset Class',
      link2Text: 'How the Living sector overtook every other',
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/pbsa-residences-etudiantes-europe-classe-actifs-a-part-entiere/" : "https://finxiacapital.com/en/blog/pbsa-student-housing-europe-asset-class-in-its-own-right/"
      }
    ]
  };

  return (
    <div data-testid="article-pbsa-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/pbsa-residences-etudiantes-europe-classe-actifs-a-part-entiere/" : "https://finxiacapital.com/en/blog/pbsa-student-housing-europe-asset-class-in-its-own-right/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/pbsa-residences-etudiantes-europe-classe-actifs-a-part-entiere/"
        hreflangEn="https://finxiacapital.com/en/blog/pbsa-student-housing-europe-asset-class-in-its-own-right/"
        hreflangDefault="https://finxiacapital.com/blog/pbsa-residences-etudiantes-europe-classe-actifs-a-part-entiere/"
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
                <Link href={language === 'fr' ? '/blog/build-to-rent-europe-2026-secteur-living-premiere-classe-actifs' : '/en/blog/build-to-rent-europe-2026-living-sector-top-asset-class'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
