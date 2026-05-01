import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

export default function Article8Page() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Loi PINM : ce que le statut de Projet d'Intérêt National Majeur change pour les datacenters B2G",
      tag: "TITAN Strategy",
      date: "Avril 2026",
      readTime: "8 min de lecture",
      author: "Lila Benhammou, Co-Fondatrice & CIO",
      backToBlog: "Retour au blog"
    },
    en: {
      title: "PINM Law: What the Major National Interest Project Status Changes for B2G Datacenters",
      tag: "TITAN Strategy",
      date: "April 2026",
      readTime: "8 min read",
      author: "Lila Benhammou, Co-Founder & CIO",
      backToBlog: "Back to blog"
    }
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t.title,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-04-20T09:00:00+01:00",
    "dateModified": "2026-04-20T09:00:00+01:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "worksFor": { "@type": "Organization", "name": "FINXIA Capital" }
    },
    "publisher": {
      "@type": "Organization",
      "name": "FINXIA Capital",
      "logo": { "@type": "ImageObject", "url": "https://finxiacapital.com/logo-finxia.png" }
    }
  };

  return (
    <div data-testid="article-8-page" className="pt-20">
      <SEO
        title={t.title}
        description={language === 'fr' ? "Le 14 avril 2026, la loi PINM change les règles du jeu pour les datacenters européens. Analyse de l'avantage structurel brown-to-green par Lila Benhammou, CIO FINXIA Capital." : "On April 14, 2026, the PINM law changes the game for European datacenters. Analysis of brown-to-green structural advantage by Lila Benhammou, CIO FINXIA Capital."}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/loi-pinm-statut-datacenter-brown-to-green/" : "https://finxiacapital.com/en/blog/pinm-law-datacenter-brown-to-green-status/"}
        keywords={language === 'fr' ? "loi PINM, Projet Intérêt National Majeur, datacenter France, brown-to-green, raccordement RTE, TITAN DC AI, souveraineté numérique" : "PINM law, Major National Interest Project, France datacenter, brown-to-green, RTE connection, TITAN DC AI, digital sovereignty"}
        structuredData={articleSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/loi-pinm-statut-datacenter-brown-to-green/"
        hreflangEn="https://finxiacapital.com/en/blog/pinm-law-datacenter-brown-to-green-status/"
        hreflangDefault="https://finxiacapital.com/blog/loi-pinm-statut-datacenter-brown-to-green/"
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
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-04-20">
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
                {language === 'fr'
                  ? "Le 14 avril 2026, l'Assemblée nationale a adopté la loi de simplification de la vie économique. Son article 15 est passé presque inaperçu dans la presse généraliste. Pour les investisseurs positionnés sur les datacenters européens, il change pourtant les règles du jeu."
                  : "On April 14, 2026, the National Assembly adopted the economic simplification law. Its article 15 went almost unnoticed in the mainstream press. For investors positioned on European datacenters, it changes the game."}
              </p>

              <p>{language === 'fr' ? "Voici ce que cela signifie concrètement — et pourquoi l'approche brown-to-green (B2G) en sort renforcée." : "Here's what it means concretely — and why the brown-to-green (B2G) approach emerges strengthened."}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">
                {language === 'fr' ? "Qu'est-ce que le statut PINM ?" : "What is PINM status?"}
              </h2>

              <p>{language === 'fr' ? "Un datacenter peut désormais être qualifié de Projet d'Intérêt National Majeur (PINM) par décret, dès lors qu'il présente « une importance particulière pour la transition numérique, la transition écologique ou la souveraineté nationale »." : "A datacenter can now be qualified as a Major National Interest Project (PINM) by decree, as long as it presents \"particular importance for digital transition, ecological transition or national sovereignty\"."}</p>

              <p>{language === 'fr' ? "Ce statut ouvre trois avantages opérationnels majeurs :" : "This status opens three major operational advantages:"}</p>

              <ul className="space-y-2">
                <li>{language === 'fr' ? "Procédures administratives accélérées — délais de 5-7 ans réduits à fast track" : "Accelerated administrative procedures — 5-7 year delays reduced to fast track"}</li>
                <li>{language === 'fr' ? "Gestion centralisée par l'État — substitution aux collectivités locales" : "Centralized management by the State — substitution for local authorities"}</li>
                <li>{language === 'fr' ? "Reconnaissance d'intérêt public majeur — accès facilité aux financements ESG" : "Recognition of major public interest — facilitated access to ESG financing"}</li>
              </ul>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">
                {language === 'fr' ? "Le vrai problème que cette loi résout" : "The Real Problem This Law Solves"}
              </h2>

              <p>{language === 'fr' ? "En 2025, la moitié des demandes de raccordement à RTE concernait des datacenters. Cette congestion a porté les délais moyens de raccordement à 5-7 ans. Le PINM n'est pas qu'un label administratif. C'est un accès prioritaire à la file d'attente réseau — le principal goulot d'étranglement du secteur en France aujourd'hui." : "In 2025, half of RTE connection requests concerned datacenters. This congestion has brought average connection delays to 5-7 years. PINM is not just an administrative label. It's priority access to the network queue — the main bottleneck in the sector in France today."}</p>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">
                {language === 'fr' ? "Pourquoi le B2G est structurellement avantagé" : "Why B2G is Structurally Advantaged"}
              </h2>

              <p>{language === 'fr' ? "L'approche brown-to-green consiste à repositionner des datacenters existants en infrastructures haute efficacité. Ces sites disposent déjà d'un raccordement électrique en place. Cela change tout." : "The brown-to-green approach consists of repositioning existing datacenters into high-efficiency infrastructures. These sites already have an electrical connection in place. This changes everything."}</p>

              <div className="bg-slate-50 p-6 my-8 border-l-4 border-[#C45A3B]">
                <p className="text-sm font-medium text-slate-800 mb-2">
                  {language === 'fr' ? "Avantage clé :" : "Key advantage:"}
                </p>
                <p className="text-slate-700 text-sm">
                  {language === 'fr'
                    ? "Le PINM accélère le greenfield jusqu'au niveau de vitesse que le B2G atteignait déjà sans lui. Pour TITAN DC AI, cela signifie cumuler les deux avantages : un site raccordé existant ET une éligibilité au statut PINM."
                    : "PINM accelerates greenfield to the speed level that B2G was already achieving without it. For TITAN DC AI, this means combining both advantages: an existing connected site AND eligibility for PINM status."}
                </p>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">
                {language === 'fr' ? "Ce que les investisseurs doivent retenir" : "What Investors Should Remember"}
              </h2>

              <p>{language === 'fr' ? "La loi PINM valide trois éléments de la thèse d'investissement datacenter en France :" : "The PINM law validates three elements of the datacenter investment thesis in France:"}</p>

              <ol className="space-y-3">
                <li><strong>{language === 'fr' ? "La souveraineté numérique est une priorité d'État durable" : "Digital sovereignty is a sustainable State priority"}</strong> — {language === 'fr' ? "L'article 15 s'inscrit dans une politique industrielle construite depuis le Sommet de l'IA de février 2025." : "Article 15 is part of an industrial policy built since the AI Summit of February 2025."}</li>
                <li><strong>{language === 'fr' ? "Le raccordement électrique reste le vrai actif rare" : "Electrical connection remains the real scarce asset"}</strong> — {language === 'fr' ? "Un datacenter existant avec raccordement en place vaut structurellement plus qu'un terrain nu — même qualifié PINM." : "An existing datacenter with connection in place is structurally worth more than bare land — even PINM-qualified."}</li>
                <li><strong>{language === 'fr' ? "La performance énergétique est le critère de survie réglementaire" : "Energy performance is the regulatory survival criterion"}</strong> — {language === 'fr' ? "Entre l'EED, la Taxonomie Verte et les conditions fiscales, les datacenters non optimisés sont en sursis." : "Between EED, Green Taxonomy and fiscal conditions, non-optimized datacenters are on borrowed time."}</li>
              </ol>

              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">Conclusion</h2>

              <p>{language === 'fr' ? "La loi du 14 avril 2026 est une bonne nouvelle pour le secteur. Pour les investisseurs qui ont choisi le bon angle d'entrée — des actifs existants, raccordés, avec une technologie d'optimisation énergétique certifiée — la fenêtre est maintenant ouverte, et la loi vient de la sécuriser davantage." : "The law of April 14, 2026 is good news for the sector. For investors who have chosen the right entry angle — existing assets, connected, with certified energy optimization technology — the window is now open, and the law has just secured it further."}</p>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Lila Benhammou</strong> {language === 'fr' ? "est Co-Fondatrice et Directrice des Investissements de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA. Elle est co-auteure du livre blanc \"Optimisation Énergétique des Datacenters Européens\" (SSRN, Abstract ID 6597918, 2026)." : "is Co-Founder and Chief Investment Officer of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure. She is co-author of the white paper \"European Datacenter Energy Optimization\" (SSRN, Abstract ID 6597918, 2026)."}
              </p>
              <p className="text-slate-500 text-xs mt-4">
                {language === 'fr' ? "Ce contenu est fourni à titre informatif uniquement. Il ne constitue pas un conseil en investissement." : "This content is provided for informational purposes only. It does not constitute investment advice."}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
