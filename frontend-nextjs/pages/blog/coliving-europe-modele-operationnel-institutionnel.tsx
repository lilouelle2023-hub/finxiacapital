import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ColivingArticlePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Coliving en Europe : pourquoi ce modèle opéré redéfinit le résidentiel institutionnel",
      description: "Coliving : marché mondial de 13 Md$ en 2026, projeté à 35 Md$ en 2030. 38% des investisseurs européens y sont déjà exposés. Analyse FINXIA Capital.",
      metaDescription: "Coliving : marché mondial de 13 Md$ en 2026, projeté à 35 Md$ en 2030. 38% des investisseurs européens (>1 000 Md€ d'AUM) y investissent déjà, 51% prévoient d'y entrer sous 3 ans. Analyse du modèle opérationnel FINXIA Capital.",
      breadcrumbLabel: "Coliving : le modèle opérationnel institutionnel",
      keywords: "coliving Europe, résidentiel opéré, flex living institutionnel, coliving investissement institutionnel, build-to-rent gestion locative, FINXIA Capital",
      backToBlog: 'Retour au blog',
      category: 'Residential',
      date: '20 août 2026',
      readTime: '4 min de lecture',
      byline: 'Par Jean-Pierre Véron, Président — FINXIA Capital',
      architectureLabel: 'Résidentiel & Flex Living',
      lead: "Le coliving n'est plus une niche expérimentale. Le marché mondial est valorisé à 13 milliards de dollars en 2026 et devrait atteindre 35 milliards d'ici 2030 — une trajectoire de croissance qui dépasse largement celle du résidentiel traditionnel. Ce qui change réellement pour un investisseur institutionnel, ce n'est pas la taille du marché : c'est la nature opérationnelle du modèle.",
      p1: "Une enquête auprès d'investisseurs européens gérant plus de 1 000 milliards d'euros d'actifs montre que 38% investissent déjà dans le coliving, et 51% prévoient de le faire dans les trois prochaines années. Cette conviction institutionnelle grandissante ne repose pas sur un pari spéculatif — elle repose sur un déficit structurel de logements de 4,5 millions d'unités en Europe et sur un taux d'occupation des résidences services qui dépasse 92% dans les métropoles tier-1.",
      h2_1: "Ce qui distingue le coliving du résidentiel traditionnel",
      p2: "Un immeuble résidentiel classique génère un loyer passif : le propriétaire encaisse, l'exploitation est minimale. Le coliving fonctionne à l'inverse — c'est un actif opéré, où la performance dépend directement de la qualité de gestion : optimisation des surfaces communes, digitalisation de la réservation et de la gestion locative, montée en gamme continue des services, taux de rotation des locataires maîtrisé. Cette dimension opérationnelle rapproche structurellement le coliving de l'hôtellerie — un parallèle que FINXIA Capital exploite directement, en appliquant au résidentiel opéré la même discipline de gestion active développée sur son pôle Hôtellerie Premium.",
      p3: "Le segment PBSA (résidences étudiantes), cousin proche du coliving par sa logique opérationnelle, illustre l'ampleur du mouvement : les investissements ont progressé de 52% en 2025, et pour la première fois l'activité en Europe continentale a dépassé celle du Royaume-Uni, son marché historique.",
      h2_2: "L'effet de portefeuille à la sortie",
      p4: "La discipline d'exécution ne s'arrête pas à l'exploitation quotidienne. Le coliving s'inscrit dans le même ciblage que le reste du pôle Résidentiel & Flex Living de FINXIA, détaillé dans notre thèse résidentielle plus large. Ce qui distingue le coliving, c'est l'effet de portefeuille à la sortie — la prime de liquidité qu'obtient un ensemble d'actifs stabilisés cédé en bloc plutôt qu'unité par unité — un levier de création de valeur à part entière, distinct du rendement locatif courant.",
      h2_3: "Un socle de compétences déjà démontré",
      p5: "La structuration d'actifs résidentiels grand format n'est pas un territoire nouveau pour l'équipe fondatrice de FINXIA — la même discipline de structuration foncière grand format et de coordination multi-partenaires qui fonde la thèse Résidentiel & Flex Living du fonds (détaillée dans notre analyse sur le déficit de logement, ci-dessous) s'applique directement au coliving. C'est ce socle de compétences, plus que la taille du marché, qui détermine la capacité à exécuter à l'échelle institutionnelle.",
      p6: "Le coliving redéfinit le résidentiel institutionnel parce qu'il exige la même rigueur qu'un actif opéré classique — hôtellerie, datacenter, logistique — appliquée à un besoin structurel : loger une population urbaine européenne en croissance, dans un marché où l'offre reste durablement inférieure à la demande.",
      authorBioRest: "est Président et Fondateur de FINXIA Capital SCSp. Plus de 40 ans de track record sur des cycles complets d'acquisition, développement, restructuration et cession d'actifs immobiliers institutionnels en Europe — Financière Rive Gauche, Directeur Général France de Kaufman & Broad (20 ans), Financière Norev.",
      learnMore: 'En savoir plus',
      link1Title: 'Notre Stratégie Résidentiel & Flex Living',
      link1Text: 'Coliving, PBSA, build-to-rent : la thèse complète',
      link2Title: 'Le Déficit de Logement en Europe',
      link2Text: '4,5 millions de logements manquants : la thèse résidentielle',
    },
    en: {
      title: "Coliving in Europe: Why This Operated Model Is Redefining Institutional Residential",
      description: "Coliving: global market of $13bn in 2026, projected to reach $35bn by 2030. 38% of European investors are already exposed. FINXIA Capital analysis.",
      metaDescription: "Coliving: $13bn global market in 2026, projected to reach $35bn by 2030. 38% of European investors (over €1 trillion AUM) already invest in it, 51% plan to enter within 3 years. FINXIA Capital's analysis of the operating model.",
      breadcrumbLabel: "Coliving: The Institutional Operating Model",
      keywords: "coliving Europe, operated residential, institutional flex living, coliving institutional investment, build-to-rent lease management, FINXIA Capital",
      backToBlog: 'Back to blog',
      category: 'Residential',
      date: 'August 20, 2026',
      readTime: '4 min read',
      byline: 'By Jean-Pierre Véron, Chairman — FINXIA Capital',
      architectureLabel: 'Residential & Flex Living',
      lead: "Coliving is no longer an experimental niche. The global market is valued at $13 billion in 2026 and is expected to reach $35 billion by 2030 — a growth trajectory well ahead of traditional residential. What really matters for an institutional investor isn't market size: it's the operational nature of the model.",
      p1: "A survey of European investors managing over €1 trillion in assets found 38% already invest in coliving, and 51% plan to within the next three years. This growing institutional conviction isn't built on a speculative bet — it rests on a structural deficit of 4.5 million housing units in Europe and on serviced residence occupancy rates exceeding 92% in tier-1 metros.",
      h2_1: "What sets coliving apart from traditional residential",
      p2: "A classic residential building generates passive rent: the owner collects, operations are minimal. Coliving works the opposite way — it's an operated asset, where performance depends directly on management quality: optimizing common areas, digitalizing booking and lease management, continuously upgrading service levels, managing tenant turnover. This operational dimension structurally brings coliving closer to hospitality — a parallel FINXIA Capital exploits directly, applying to operated residential the same active management discipline developed for its Premium Hospitality pillar.",
      p3: "The PBSA (student housing) segment, a close cousin of coliving in operational logic, illustrates the scale of the movement: investment grew 52% in 2025, and for the first time activity in Continental Europe exceeded that of the UK, its historical market.",
      h2_2: "The portfolio effect at exit",
      p4: "Execution discipline doesn't stop at day-to-day operations. Coliving follows the same targeting as the rest of FINXIA's Residential & Flex Living pillar, detailed in our broader residential thesis. What sets coliving apart is the portfolio effect at exit — the liquidity premium a set of stabilized assets commands when sold as a block rather than unit by unit — a value-creation lever in its own right, distinct from current rental yield.",
      h2_3: "An already-demonstrated skill base",
      p5: "Structuring large-format residential assets isn't new territory for FINXIA's founding team — the same large-format land structuring and multi-partner coordination discipline that underpins the fund's broader Residential & Flex Living thesis (detailed in our housing deficit analysis, linked below) applies directly to coliving. It's this skill base, more than market size, that determines the ability to execute a coliving thesis at institutional scale.",
      p6: "Coliving is redefining institutional residential because it demands the same rigor as a classic operated asset — hospitality, datacenter, logistics — applied to a structural need: housing a growing European urban population, in a market where supply remains durably below demand.",
      authorBioRest: "is Chairman and Founder of FINXIA Capital SCSp. Over 40 years of full-cycle track record in acquisition, development, restructuring and disposal of institutional real estate assets across Europe — Financière Rive Gauche, Managing Director France of Kaufman & Broad (20 years), Financière Norev.",
      learnMore: 'Learn more',
      link1Title: 'Our Residential & Flex Living Strategy',
      link1Text: 'Coliving, PBSA, build-to-rent: the full thesis',
      link2Title: 'The European Housing Deficit',
      link2Text: '4.5 million missing homes: the residential thesis',
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/coliving-europe-modele-operationnel-institutionnel/" : "https://finxiacapital.com/en/blog/coliving-europe-institutional-operating-model/"
      }
    ]
  };

  return (
    <div data-testid="article-coliving-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/coliving-europe-modele-operationnel-institutionnel/" : "https://finxiacapital.com/en/blog/coliving-europe-institutional-operating-model/"}
        keywords={t.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/coliving-europe-modele-operationnel-institutionnel/"
        hreflangEn="https://finxiacapital.com/en/blog/coliving-europe-institutional-operating-model/"
        hreflangDefault="https://finxiacapital.com/blog/coliving-europe-modele-operationnel-institutionnel/"
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

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p5}</p>
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
                <Link href={language === 'fr' ? '/blog/deficit-logement-europe-these-residentielle-flex-living' : '/en/blog/european-housing-deficit-residential-flex-living-thesis'} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
