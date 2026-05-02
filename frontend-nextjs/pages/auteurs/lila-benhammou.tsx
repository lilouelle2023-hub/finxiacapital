import { ArrowLeft, BookOpen, FileText, Briefcase } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

const articles = [
  { href: "/guides/eed-directive-datacenter-2026/", title: "Guide complet EED datacenters 2026 — Articles 12 et 21", tag: "Guide de référence" },
  { href: "/blog/eed-article-12-declaration-datacenter-guide-2026/", title: "EED Article 12 : Guide complet pour la déclaration obligatoire des datacenters avant le 15 mai 2026", tag: "Regulatory" },
  { href: "/blog/pue-optimisation-datacenters-europeens-guide-2026/", title: "PUE : Guide complet d'optimisation des datacenters européens en 2026", tag: "Performance" },
  { href: "/blog/titan-dc-ai-strategie-datacenters-europeens-finxia/", title: "TITAN DC AI — Stratégie datacenters européens FINXIA Capital", tag: "Stratégie" },
  { href: "/blog/loi-pinm-statut-datacenter-brown-to-green/", title: "Loi PINM — Statut datacenter brown-to-green", tag: "Regulatory" },
  { href: "/blog/datacenters-europe-2026-fenetre-opportunite/", title: "Datacenters européens 2026 — Fenêtre d'opportunité investisseur", tag: "Marché" },
  { href: "/blog/crise-energetique-datacenters-ia-europe/", title: "Crise énergétique des datacenters IA en Europe", tag: "Marché" },
  { href: "/blog/gestion-fonds-18-agents-ia/", title: "Gestion d'un fonds alternatif avec 18 agents IA", tag: "AI-Native" },
  { href: "/blog/scsp-vs-raif-vehicule-investissement-luxembourgeois/", title: "SCSp vs RAIF — Véhicule d'investissement luxembourgeois", tag: "Structure" },
];

export default function AuteurLilaPage() {
  const { language } = useLanguage();
  const title = "Lila Benhammou — Co-Fondatrice & CIO, FINXIA Capital";
  const description = "Co-Fondatrice et Chief Investment Officer de FINXIA Capital. Expertise Directive EED, EU Taxonomy 8.1, IPMVP, stratégie TITAN DC AI. Auteure SSRN Abstract ID 6597918.";
  const canonical = "https://finxiacapital.com/auteurs/lila-benhammou/";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lila Benhammou",
    "jobTitle": "Co-Founder & Chief Investment Officer",
    "worksFor": { "@type": "Organization", "name": "FINXIA Capital", "url": "https://finxiacapital.com" },
    "description": "Co-Fondatrice et Chief Investment Officer de FINXIA Capital, supervise la stratégie TITAN DC AI et l'application de la régulation EED aux actifs datacenter européens. Auteure SSRN Abstract ID 6597918.",
    "url": canonical,
    "knowsAbout": [
      "Directive EED 2023/1791",
      "EU Taxonomy 8.1",
      "PUE optimization",
      "IPMVP Option C",
      "Datacenter brownfield investment",
      "AI-native asset management",
      "Green Bond ICMA",
      "ISO/IEC 30134-2"
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://finxiacapital.com" },
      { "@type": "ListItem", "position": 2, "name": "Auteurs", "item": canonical },
      { "@type": "ListItem", "position": 3, "name": "Lila Benhammou", "item": canonical }
    ]
  };
  return (
    <div data-testid="author-lila-page" className="pt-20">
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        keywords="Lila Benhammou, FINXIA Capital CIO, auteure EED datacenter, expert PUE optimization, Humans4Help fondatrice, SSRN 6597918"
        structuredData={personSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr={canonical}
        hreflangDefault={canonical}
      />

      <header className="py-16 md:py-24 bg-gradient-to-br from-[#1E2A3A] to-[#2A3A4A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#C45A3B] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Retour à l&apos;accueil
          </Link>
          <p className="text-[#C45A3B] text-xs font-medium uppercase tracking-wider mb-4">Auteure</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">Lila Benhammou</h1>
          <p className="text-slate-300 text-lg">Co-Fondatrice &amp; Chief Investment Officer, FINXIA Capital</p>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Biographie</h2>
            <p>
              <strong>Lila Benhammou</strong> est Co-Fondatrice et Chief Investment Officer de FINXIA Capital. Elle dirige la stratégie d&apos;investissement du véhicule et supervise directement TITAN DC AI, la stratégie brownfield dédiée aux datacenters européens conformes EU Taxonomy 8.1.
            </p>
            <p>
              Avant la création de FINXIA Capital, Lila Benhammou a fondé et dirigé <strong>Humans4Help</strong>, plateforme d&apos;automatisation intelligente déployant des agents IA en environnement opérationnel. L&apos;entreprise a été cédée en 2023 dans le cadre d&apos;une sortie stratégique qui a validé l&apos;application industrielle des architectures multi-agents — socle opérationnel aujourd&apos;hui transposé au pilotage d&apos;actifs chez FINXIA Capital.
            </p>
            <p>
              Son expertise sectorielle se concentre sur trois axes complémentaires : l&apos;architecture des infrastructures datacenter (brownfield, free cooling, liquid cooling, certification IPMVP), la régulation européenne de l&apos;efficacité énergétique (Directive EED, EU Taxonomy 8.1, ICMA Green Bond Principles), et l&apos;intégration opérationnelle de l&apos;intelligence artificielle dans la gestion d&apos;actifs réels.
            </p>
            <p>
              Lila est l&apos;auteure principale de la publication académique <em>« PUE Optimization and EED Regulatory Framework for European Datacenters »</em> actuellement sous revue sur SSRN (Abstract ID 6597918) et du <em>Livre Blanc FINXIA Capital Research — Avril 2026</em>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-[#C45A3B]" /> Domaines de spécialisation
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
            <li className="bg-white p-4 border-l-4 border-[#C45A3B]">Régulation européenne des datacenters (Directive EED 2023/1791, Article 12, Article 21, Règlement délégué 2024/1364)</li>
            <li className="bg-white p-4 border-l-4 border-[#C45A3B]">Méthodes de mesure et certification énergétique (ISO/IEC 30134-2, IPMVP Option C, EN 50600)</li>
            <li className="bg-white p-4 border-l-4 border-[#C45A3B]">EU Taxonomy 8.1 et alignement des actifs datacenter avec la finance verte</li>
            <li className="bg-white p-4 border-l-4 border-[#C45A3B]">Architectures IA multi-agents appliquées au pilotage d&apos;actifs alternatifs</li>
            <li className="bg-white p-4 border-l-4 border-[#C45A3B]">Stratégies d&apos;investissement brownfield en infrastructure digitale</li>
            <li className="bg-white p-4 border-l-4 border-[#C45A3B]">Structuration Green Bond ICMA et financement d&apos;infrastructure verte</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#C45A3B]" /> Publications et contributions
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li>→ <em>PUE Optimization and EED Regulatory Framework for European Datacenters</em> — SSRN (sous revue), Abstract ID 6597918</li>
            <li>→ <em>Livre Blanc FINXIA Capital Research — Avril 2026</em> (téléchargement gated via <Link href="/about/" className="text-[#C45A3B] hover:underline">À propos</Link>)</li>
            <li>→ <em>TITAN DC AI — Thèse d&apos;investissement brownfield européenne</em> — contribution FINXIA Capital, 2026</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-[#C45A3B]" /> Articles signés Lila Benhammou
          </h2>
          <div className="grid gap-4">
            {articles.map(a => (
              <Link key={a.href} href={a.href} className="bg-white p-5 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow">
                <p className="text-[#C45A3B] text-xs font-semibold uppercase tracking-wider mb-2">{a.tag}</p>
                <h3 className="font-serif text-lg text-slate-900 hover:text-[#C45A3B] transition-colors">{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-6">Contact &amp; liens</h2>
          <p className="text-slate-700 mb-3">Pour contacter directement Lila Benhammou sur des sujets professionnels :</p>
          <ul className="space-y-2 text-slate-700">
            <li>Email : <a href="mailto:contact@finxiacapital.com" className="text-[#C45A3B] hover:underline">contact@finxiacapital.com</a> (mention « Lila Benhammou » en objet)</li>
            <li>Publications académiques : <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6597918" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">SSRN Abstract ID 6597918</a></li>
            <li>Livre Blanc : téléchargement gated via <Link href="/about/" className="text-[#C45A3B] hover:underline">la page À propos</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
