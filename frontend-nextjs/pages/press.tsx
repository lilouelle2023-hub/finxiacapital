import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FileText, ExternalLink, Calendar, Tag as TagIcon } from 'lucide-react';
import SEO from '@/components/SEO';

export default function PressPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

  const pressItems = [
    {
      id: 'ssrn-publication',
      type: language === 'fr' ? 'Publication Académique' : 'Academic Publication',
      title: language === 'fr'
        ? 'Livre blanc — Optimisation Énergétique des Datacenters Européens (2026)'
        : 'White Paper — European Datacenter Energy Optimization (2026)',
      date: language === 'fr' ? 'Avril 2026' : 'April 2026',
      tag: 'SSRN Academic Publication',
      link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6597918',
      external: true,
      description: language === 'fr'
        ? 'Publication académique sur SSRN analysant les stratégies d\'optimisation PUE pour les datacenters européens, avec focus sur la conformité EED Article 12 et les technologies de rupture (ORC, THERMIS).'
        : 'Academic publication on SSRN analyzing PUE optimization strategies for European datacenters, focusing on EED Article 12 compliance and breakthrough technologies (ORC, THERMIS).'
    },
    {
      id: 'prlog-press-release',
      type: language === 'fr' ? 'Communiqué de Presse' : 'Press Release',
      title: language === 'fr'
        ? 'FINXIA Capital publie un livre blanc sur SSRN — communiqué de presse PRLog'
        : 'FINXIA Capital Publishes White Paper on SSRN — PRLog Press Release',
      date: language === 'fr' ? 'Avril 2026' : 'April 2026',
      tag: 'Press Release',
      link: 'https://www.prlog.org',
      external: true,
      description: language === 'fr'
        ? 'Annonce officielle de la publication du livre blanc FINXIA Capital sur l\'optimisation énergétique des datacenters européens.'
        : 'Official announcement of FINXIA Capital white paper publication on European datacenter energy optimization.'
    },
    {
      id: 'blog-eed-article-12',
      type: 'Blog',
      title: language === 'fr'
        ? 'EED Article 12 — Guide complet pour les datacenters européens avant le 15 mai 2026'
        : 'EED Article 12 — Complete Guide for European Datacenters before May 15, 2026',
      date: language === 'fr' ? 'Avril 2026' : 'April 2026',
      tag: 'Blog',
      link: language === 'fr'
        ? '/blog/eed-article-12-declaration-datacenter-guide-2026'
        : '/en/blog/eed-article-12-datacenter-declaration-guide-2026',
      external: false,
      description: language === 'fr'
        ? 'Guide technique et réglementaire complet sur la déclaration obligatoire EED Article 12 pour les opérateurs de datacenters en Europe.'
        : 'Complete technical and regulatory guide on mandatory EED Article 12 declaration for datacenter operators in Europe.'
    }
  ];

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
        "name": language === 'fr' ? "Presse & Publications" : "Press & Publications",
        "item": language === 'fr' ? "https://finxiacapital.com/press" : "https://finxiacapital.com/en/press"
      }
    ]
  };

  return (
    <div data-testid="press-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Presse & Publications — FINXIA Capital" : "Press & Publications — FINXIA Capital"}
        description={language === 'fr'
          ? "Publications académiques SSRN, communiqués de presse et articles de recherche sur l'optimisation énergétique des datacenters européens par FINXIA Capital."
          : "SSRN academic publications, press releases and research articles on European datacenter energy optimization by FINXIA Capital."}
        canonical={language === 'fr' ? "https://finxiacapital.com/press/" : "https://finxiacapital.com/en/press/"}
        keywords={language === 'fr'
          ? "FINXIA Capital presse, publication SSRN datacenters, livre blanc PUE, EED Article 12, THERMIS, communiqué presse"
          : "FINXIA Capital press, SSRN datacenter publication, PUE white paper, EED Article 12, THERMIS, press release"}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/press/"
        hreflangEn="https://finxiacapital.com/en/press/"
        hreflangDefault="https://finxiacapital.com/press/"
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#C45A3B] font-medium uppercase tracking-wider text-sm mb-4">
              {language === 'fr' ? 'Presse & Publications' : 'Press & Publications'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' ? 'Presse & Publications' : 'Press & Publications'}
            </h1>
            <div className="w-16 h-1 bg-[#C45A3B] mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? "Publications académiques, communiqués de presse et analyses sur l'optimisation énergétique des datacenters européens et la stratégie TITAN DC AI."
                : "Academic publications, press releases and analysis on European datacenter energy optimization and the TITAN DC AI strategy."}
            </p>
          </div>
        </div>
      </section>

      {/* PDF Download Button */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/documents/FINXIA_LivreBlancPUE_V3_FINAL.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C45A3B] text-white font-medium rounded hover:bg-[#A04A2F] transition-colors"
          >
            <FileText className="w-5 h-5" />
            {language === 'fr' ? 'Télécharger le livre blanc (PDF)' : 'Download White Paper (PDF)'}
          </a>
        </div>
      </section>

      {/* Press Items */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {pressItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 border-l-4 border-[#C45A3B] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#C45A3B]/10 rounded">
                      <FileText className="w-5 h-5 text-[#C45A3B]" />
                    </div>
                    <div>
                      <div className="text-[#C45A3B] text-xs font-medium uppercase mb-1">{item.type}</div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs px-3 py-1 bg-slate-100 rounded-full">
                    <TagIcon className="w-3 h-3" />
                    {item.tag}
                  </div>
                </div>

                <h3 className="font-serif text-2xl mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className="inline-flex items-center gap-2 text-[#C45A3B] hover:underline font-medium"
                >
                  {language === 'fr' ? 'Lire la suite' : 'Read more'}
                  {item.external && <ExternalLink className="w-4 h-4" />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            {language === 'fr' ? 'Contact Presse' : 'Press Contact'}
          </h2>
          <p className="text-slate-600 mb-6">
            {language === 'fr'
              ? 'Pour toute demande presse ou partenariat média :'
              : 'For press inquiries or media partnerships:'}
          </p>
          <a
            href="mailto:contact@finxiacapital.com"
            className="text-[#C45A3B] hover:underline font-medium text-lg"
          >
            contact@finxiacapital.com
          </a>
        </div>
      </section>
    </div>
  );
}
