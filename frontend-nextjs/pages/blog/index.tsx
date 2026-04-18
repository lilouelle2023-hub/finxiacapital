import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

export default function BlogIndexPage() {
  const { language } = useLanguage();

  const articles = [
    {
      slug: language === 'fr' ? 'titan-dc-ai-strategie-datacenters-europeens-finxia' : 'titan-dc-ai-european-datacenters-strategy-finxia',
      title: language === 'fr'
        ? "TITAN DC AI : La Transformation des Datacenters Européens Legacy"
        : "TITAN DC AI: Transforming European Legacy Datacenters",
      excerpt: language === 'fr'
        ? "La stratégie d'investissement de FINXIA Capital dédiée à l'acquisition et la transformation des datacenters européens legacy en plateformes haute efficacité pour l'IA."
        : "FINXIA Capital's investment strategy dedicated to acquiring and transforming European legacy datacenters into high-efficiency AI platforms.",
      date: '2026-04-15',
      category: 'TITAN Strategy',
      readTime: '10 min'
    },
    {
      slug: language === 'fr' ? 'eed-article-12-declaration-datacenter-guide-2026' : 'eed-article-12-datacenter-declaration-guide-2026',
      title: language === 'fr'
        ? "EED Article 12 : Guide Complet pour la Déclaration Obligatoire avant le 15 Mai 2026"
        : "EED Article 12: Complete Guide for Mandatory Declaration before May 15, 2026",
      excerpt: language === 'fr'
        ? "Le 15 mai 2026 est la première échéance de déclaration obligatoire imposée par l'EED Article 12. Guide complet pour les opérateurs de datacenters."
        : "May 15, 2026 is the first mandatory declaration deadline imposed by EED Article 12. Complete guide for datacenter operators.",
      date: '2026-04-15',
      category: 'Regulatory Compliance',
      readTime: '10 min'
    },
    {
      slug: language === 'fr' ? 'pue-optimisation-datacenters-europeens-guide-2026' : 'pue-optimization-european-datacenters-guide-2026',
      title: language === 'fr'
        ? "Optimisation PUE dans les Datacenters Européens : Guide 2026"
        : "PUE Optimization in European Datacenters: 2026 Guide",
      excerpt: language === 'fr'
        ? "Le PUE est devenu l'indicateur de performance le plus scruté de l'industrie des datacenters. Guide complet d'optimisation et de certification IPMVP."
        : "PUE has become the most scrutinized performance indicator in the datacenter industry. Complete optimization and IPMVP certification guide.",
      date: '2026-04-15',
      category: 'Technical Guide',
      readTime: '11 min'
    },
    {
      slug: language === 'fr' ? 'scsp-vs-raif-vehicule-investissement-luxembourgeois' : 'luxembourg-scsp-vs-raif-investment-vehicle',
      title: language === 'fr'
        ? "SCSp Luxembourgeoise vs RAIF : Quel Véhicule pour les Actifs Alternatifs ?"
        : "Luxembourg SCSp vs RAIF: Which Vehicle for Alternative Assets?",
      excerpt: language === 'fr'
        ? "FINXIA Capital est structurée en SCSp luxembourgeoise, et non en RAIF. Cette distinction reflète des choix stratégiques précis en matière de gouvernance."
        : "FINXIA Capital is structured as a Luxembourg SCSp, not a RAIF. This distinction reflects specific strategic choices in governance.",
      date: '2026-04-15',
      category: 'Structure & Governance',
      readTime: '10 min'
    },
    {
      slug: 'crise-energetique-datacenters-ia-europe',
      title: language === 'fr'
        ? "La prochaine crise énergétique de l'IA se joue dans les datacenters européens"
        : "AI's Next Energy Crisis is Playing Out in European Datacenters",
      excerpt: language === 'fr'
        ? "L'intelligence artificielle a un problème que personne ne veut regarder en face : elle consomme une quantité d'énergie que l'infrastructure existante ne peut pas absorber."
        : "Artificial intelligence has a problem no one wants to face: it consumes an amount of energy that existing infrastructure cannot absorb.",
      date: '2026-01-16',
      category: 'TITAN Strategy',
      readTime: '4 min'
    },
    {
      slug: 'gestion-fonds-18-agents-ia',
      title: language === 'fr'
        ? "Gérer un fonds alternatif avec 18 agents IA : ce que ça change vraiment"
        : "Managing an Alternative Fund with 18 AI Agents: What Really Changes",
      excerpt: language === 'fr'
        ? "La gestion d'actifs alternatifs a un problème de latence. Entre le signal et la décision, il se passe des semaines. L'architecture AI-native change la donne."
        : "Alternative asset management has a latency problem. Between signal and decision, weeks pass. AI-native architecture changes the game.",
      date: '2026-01-16',
      category: 'AI-Native',
      readTime: '4 min'
    },
    {
      slug: 'datacenters-europe-2026-fenetre-opportunite',
      title: language === 'fr'
        ? "Datacenters en Europe : pourquoi 2026 est l'année où les investisseurs en retard paieront le prix fort"
        : "European Datacenters: Why 2026 is the Year Late Investors Will Pay the Price",
      excerpt: language === 'fr'
        ? "Il y a deux ans, un investisseur qui regardait les datacenters européens voyait un marché de niche. Aujourd'hui, il voit l'un des marchés les plus disputés d'Europe."
        : "Two years ago, an investor looking at European datacenters saw a niche market. Today, they see one of Europe's most contested markets.",
      date: '2026-01-16',
      category: 'Market Analysis',
      readTime: '4 min'
    }
  ];

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://finxiacapital.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'fr' ? "Blog" : "Blog",
        "item": "https://finxiacapital.com/blog"
      }
    ]
  };

  return (
    <div data-testid="blog-index-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Blog — Recherche & Stratégie" : "Blog — Research & Strategy"}
        description={language === 'fr'
          ? "Analyses expertes sur les datacenters européens, optimisation PUE, réglementation EED et gestion de fonds alternative par IA — par FINXIA Capital."
          : "Expert analysis on European datacenters, PUE optimization, EED regulation and AI-driven alternative fund management — by FINXIA Capital."}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/" : "https://finxiacapital.com/en/blog/"}
        keywords="blog Finxia Capital, datacenter IA Europe, investissement alternatif, AI-native fund, thought leadership immobilier, analyse marché datacenters"
        breadcrumbSchema={breadcrumbSchema}
        language="fr"
        ogLocale="fr_FR"
        hreflangFr="https://finxiacapital.com/blog/"
        hreflangEn="https://finxiacapital.com/en/blog/"
        hreflangDefault="https://finxiacapital.com/blog/"
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">
              {language === 'fr' ? 'Blog' : 'Blog'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' ? 'Recherche & Stratégie' : 'Research & Strategy'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'Analyses approfondies sur les datacenters IA, l\'investissement alternatif et l\'architecture AI-native. Thought leadership par l\'équipe Finxia Capital.'
                : 'In-depth analysis on AI datacenters, alternative investment and AI-native architecture. Thought leadership by the Finxia Capital team.'}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-slate-50 card-hover flex flex-col"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="text-[#C45A3B] font-medium uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{article.readTime}</span>
                  </div>
                  
                  <h2 className="font-serif text-xl md:text-2xl mb-4 group-hover:text-[#C45A3B] transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C45A3B] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E2A3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            {language === 'fr' 
              ? 'Recevoir nos analyses par email'
              : 'Receive our analysis by email'}
          </h2>
          <p className="text-slate-300 mb-6">
            {language === 'fr'
              ? 'Analyses exclusives sur les actifs alternatifs et l\'IA en gestion de portefeuille.'
              : 'Exclusive analysis on alternative assets and AI in portfolio management.'}
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
