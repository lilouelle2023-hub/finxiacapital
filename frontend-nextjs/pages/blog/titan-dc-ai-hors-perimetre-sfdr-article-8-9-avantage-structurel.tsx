import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

export default function OutsideSFDRScopePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Pourquoi TITAN DC AI Échappe à la Classification SFDR Article 8/9 — et Pourquoi C'est un Avantage Structurel",
      description: "TITAN DC AI n'est ni Article 8 ni Article 9 au sens de SFDR. Ce n'est pas une lacune de conformité : c'est la conséquence directe d'un choix de structuration en capital propre, sans levée auprès d'investisseurs tiers.",
      tag: "Structure & Gouvernance",
      date: "Août 2026",
      readTime: "8 min de lecture",
      backToBlog: "Retour au blog",
      author: "Lila Benhammou, Co-Fondatrice & CIO",
      intro: "Une question revient régulièrement de la part d'investisseurs institutionnels et d'analystes qui découvrent la stratégie TITAN DC AI : quelle est sa classification SFDR — Article 8 (« light green ») ou Article 9 (« dark green ») ? La réponse surprend souvent : ni l'une ni l'autre. Et ce n'est pas un oubli de conformité, mais une conséquence directe et délibérée de la structure de capital du véhicule.",
      lead: "Comprendre pourquoi exige de revenir au périmètre exact du règlement SFDR — un point que la communication de marché, y compris la nôtre par le passé sur certains supports, a parfois simplifié à l'excès.",
      h2_1: "1. Ce que SFDR Classifie Réellement",
      p1: "Le règlement européen SFDR (Sustainable Finance Disclosure Regulation) impose des obligations de transparence aux acteurs des marchés financiers et aux conseillers financiers sur la manière dont ils intègrent les risques de durabilité dans leurs décisions d'investissement. Ses articles 8 et 9 définissent des catégories de « produits financiers » : l'Article 8 pour les produits qui promeuvent des caractéristiques environnementales ou sociales, l'Article 9 pour les produits dont l'objectif d'investissement est la durabilité elle-même.",
      p2: "Le point central, souvent perdu dans la vulgarisation du sujet : SFDR s'applique aux produits financiers commercialisés auprès d'investisseurs. Un fonds qui lève du capital auprès de tiers — souscripteurs institutionnels, family offices, investisseurs privés — entre dans le périmètre de classification, quelle que soit sa stratégie ESG sous-jacente.",
      h2_3: "2. Le Cas TITAN DC AI : Capital Propre, Pas de Levée Tierce",
      p3: "TITAN DC AI est déployé par un véhicule propriétaire, en capital propre (fonds propres), sans souscription ouverte à des investisseurs tiers. Il n'y a pas de produit financier commercialisé au sens où SFDR l'entend — pas de prospectus de souscription, pas de part de fonds vendue à des LPs externes pour cette stratégie. La structure de gouvernance et de capital place donc, mécaniquement, TITAN DC AI hors du champ d'application de la classification Article 8/9.",
      p4: "Ce n'est ni un choix de contournement réglementaire, ni un vide juridique : c'est la conséquence logique d'un modèle où FINXIA Capital investit son propre capital plutôt que de lever des fonds tiers pour cette stratégie spécifique.",
      h2_4: "3. Hors Périmètre SFDR ne Signifie Pas Hors Discipline ESG",
      p5: "L'absence de classification SFDR ne dispense en rien d'une discipline de reporting extra-financier. TITAN DC AI applique un audit annuel des émissions (Scope 1, 2 et 3), une conformité aux critères DNSH (Do No Significant Harm) de l'EU Taxonomy, et mobilise des instruments de financement dédiés — notamment un Green Bond certifié ICMA pour la composante rénovation énergétique et solaire — dont les standards de reporting sont, sur le plan technique, au moins aussi exigeants que ceux imposés par un classement Article 8.",
      p6: "La différence n'est donc pas une différence de rigueur, mais une différence de destinataire : un reporting SFDR répond à une obligation réglementaire envers des investisseurs tiers ; le reporting ESG volontaire de TITAN DC AI répond à une discipline de gestion interne et à la demande de transparence des co-investisseurs directs du véhicule.",
      h2_5: "4. Pourquoi C'est un Avantage Structurel",
      p7: "Le déploiement en capital propre élimine un ensemble de contraintes propres aux fonds classifiés SFDR : pas de risque de greenwashing réglementaire (le risque de requalification d'un produit Article 9 vers Article 8, ou d'un Article 8 vers Article 6, a généré une vague de « déclassements » observée sur le marché européen ces dernières années), pas de contrainte de composition de portefeuille imposée par un seuil réglementaire de pourcentage d'actifs durables, et une flexibilité de gouvernance totale sur le rythme et la nature de la transformation ESG engagée sur chaque actif.",
      p8: "Cette flexibilité permet à FINXIA Capital de conduire une stratégie de transformation brown-to-green actif par actif, sans devoir justifier en continu d'un seuil agrégé de portefeuille auprès d'un régulateur ou d'un superviseur de fonds — tout en maintenant, par choix et non par obligation, des standards de reporting alignés sur les meilleures pratiques du marché durable.",
      h2_6: "Conclusion",
      conclusion: "TITAN DC AI n'est pas classifié SFDR Article 8 ou 9 — et ce n'est pas une faiblesse de positionnement. C'est la conséquence directe d'une structuration en capital propre qui place le véhicule hors du périmètre réglementaire applicable aux produits commercialisés à des tiers, tout en maintenant volontairement une discipline de reporting ESG et de conformité EU Taxonomy alignée sur les standards les plus exigeants du marché. L'alignement total entre FINXIA Capital et le capital déployé — sans intermédiation ni dilution — reste la caractéristique structurante de la stratégie.",
      authorBio: "est un gestionnaire d'actifs alternatifs. Ce contenu est fourni à titre informatif uniquement et ne constitue pas une offre de souscription ni un conseil en investissement.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Notre Stratégie TITAN DC AI",
      link1Desc: "Découvrez la transformation brown-to-green des datacenters européens",
      link2Title: "Gouvernance",
      link2Desc: "Structure du véhicule et cadre réglementaire"
    },
    en: {
      title: "Why TITAN DC AI Falls Outside SFDR Article 8/9 Classification — and Why That's a Structural Advantage",
      description: "TITAN DC AI is neither Article 8 nor Article 9 under SFDR. This is not a compliance gap: it is the direct consequence of a proprietary-equity structuring choice, without raising capital from third-party investors.",
      tag: "Structure & Governance",
      date: "August 2026",
      readTime: "8 min read",
      backToBlog: "Back to blog",
      author: "Lila Benhammou, Co-Founder & CIO",
      intro: "A question regularly comes up from institutional investors and analysts discovering the TITAN DC AI strategy: what is its SFDR classification — Article 8 ('light green') or Article 9 ('dark green')? The answer often surprises: neither. And this is not a compliance oversight, but a direct and deliberate consequence of the vehicle's capital structure.",
      lead: "Understanding why requires revisiting the exact scope of the SFDR regulation — a point that market communication, including our own on certain materials in the past, has occasionally oversimplified.",
      h2_1: "1. What SFDR Actually Classifies",
      p1: "The European SFDR (Sustainable Finance Disclosure Regulation) imposes transparency obligations on financial market participants and financial advisers regarding how they integrate sustainability risks into investment decisions. Its Articles 8 and 9 define categories of 'financial products': Article 8 for products promoting environmental or social characteristics, Article 9 for products whose investment objective is sustainability itself.",
      p2: "The central point, often lost in the popularization of the topic: SFDR applies to financial products marketed to investors. A fund raising capital from third parties — institutional subscribers, family offices, private investors — falls within classification scope, regardless of its underlying ESG strategy.",
      h2_3: "2. The TITAN DC AI Case: Proprietary Equity, No Third-Party Raise",
      p3: "TITAN DC AI is deployed by an owner-operated vehicle, with proprietary equity (own capital), with no subscription open to third-party investors. There is no financial product marketed in the sense SFDR intends — no subscription prospectus, no fund units sold to external LPs for this strategy. The governance and capital structure therefore mechanically places TITAN DC AI outside the scope of Article 8/9 classification.",
      p4: "This is neither a regulatory workaround nor a legal loophole: it is the logical consequence of a model where FINXIA Capital invests its own capital rather than raising third-party funds for this specific strategy.",
      h2_4: "3. Outside SFDR Scope Does Not Mean Outside ESG Discipline",
      p5: "The absence of SFDR classification in no way exempts the vehicle from extra-financial reporting discipline. TITAN DC AI applies an annual emissions audit (Scope 1, 2 and 3), compliance with EU Taxonomy DNSH (Do No Significant Harm) criteria, and mobilizes dedicated financing instruments — notably an ICMA-certified Green Bond for the energy renovation and solar component — whose reporting standards are, technically, at least as demanding as those imposed under an Article 8 classification.",
      p6: "The difference is therefore not one of rigor, but of recipient: SFDR reporting responds to a regulatory obligation toward third-party investors; TITAN DC AI's voluntary ESG reporting responds to internal management discipline and the transparency demanded by the vehicle's direct co-investors.",
      h2_5: "4. Why This Is a Structural Advantage",
      p7: "Deployment via proprietary equity eliminates a set of constraints specific to SFDR-classified funds: no regulatory greenwashing risk (the risk of an Article 9 product being reclassified to Article 8, or an Article 8 product down to Article 6, has generated a wave of 'downgrades' observed across the European market in recent years), no portfolio-composition constraint imposed by a regulatory threshold of sustainable-asset percentage, and full governance flexibility over the pace and nature of the ESG transformation undertaken on each asset.",
      p8: "This flexibility allows FINXIA Capital to run a brown-to-green transformation strategy asset by asset, without having to continuously justify an aggregated portfolio threshold to a regulator or fund supervisor — while voluntarily maintaining reporting standards aligned with the best practices of the sustainable market.",
      h2_6: "Conclusion",
      conclusion: "TITAN DC AI is not classified SFDR Article 8 or 9 — and this is not a positioning weakness. It is the direct consequence of a proprietary-equity structuring that places the vehicle outside the regulatory scope applicable to products marketed to third parties, while voluntarily maintaining ESG reporting discipline and EU Taxonomy compliance aligned with the market's most demanding standards. Total alignment between FINXIA Capital and the capital deployed — without intermediation or dilution — remains the strategy's defining characteristic.",
      authorBio: "is an alternative asset manager. This content is provided for information purposes only and does not constitute a subscription offer or investment advice.",
      learnMoreTitle: "Learn more",
      link1Title: "Our TITAN DC AI Strategy",
      link1Desc: "Discover the brown-to-green transformation of European datacenters",
      link2Title: "Governance",
      link2Desc: "Vehicle structure and regulatory framework"
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
    "articleSection": language === 'fr' ? "Structure & Gouvernance" : "Structure & Governance",
    "keywords": language === 'fr' ? "SFDR Article 8, SFDR Article 9, TITAN DC AI, capital propre, fonds propres, EU Taxonomy, FINXIA Capital" : "SFDR Article 8, SFDR Article 9, TITAN DC AI, proprietary equity, EU Taxonomy, FINXIA Capital"
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
        "item": language === 'fr' ? "https://finxiacapital.com/blog/titan-dc-ai-hors-perimetre-sfdr-article-8-9-avantage-structurel" : "https://finxiacapital.com/en/blog/titan-dc-ai-outside-sfdr-article-8-9-structural-advantage"
      }
    ]
  };

  return (
    <div data-testid="article-outside-sfdr-scope-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/titan-dc-ai-hors-perimetre-sfdr-article-8-9-avantage-structurel/" : "https://finxiacapital.com/en/blog/titan-dc-ai-outside-sfdr-article-8-9-structural-advantage/"}
        keywords={language === 'fr' ? "SFDR Article 8, SFDR Article 9, TITAN DC AI, capital propre, EU Taxonomy, FINXIA Capital, hors périmètre SFDR" : "SFDR Article 8, SFDR Article 9, TITAN DC AI, proprietary equity, EU Taxonomy, FINXIA Capital, outside SFDR scope"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/titan-dc-ai-hors-perimetre-sfdr-article-8-9-avantage-structurel/"
        hreflangEn="https://finxiacapital.com/en/blog/titan-dc-ai-outside-sfdr-article-8-9-structural-advantage/"
        hreflangDefault="https://finxiacapital.com/blog/titan-dc-ai-hors-perimetre-sfdr-article-8-9-avantage-structurel/"
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

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p3}</p>
              <p>{t.p4}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_4}</h2>
              <p>{t.p5}</p>
              <p>{t.p6}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_5}</h2>
              <p>{t.p7}</p>
              <p>{t.p8}</p>

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
                <Link href={language === 'fr' ? "/governance" : "/en/governance"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
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
