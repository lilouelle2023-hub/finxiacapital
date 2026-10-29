import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { buildBreadcrumbSchema } from '@/lib/breadcrumb';
import SEO from '@/components/SEO';
import blogPosts from '../data/blogPosts.json';

const SSRN_URL = 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6597918';

const POLES = [
  { category: 'Hospitality', fr: 'Hôtellerie Premium', en: 'Premium Hospitality' },
  { category: 'Residential', fr: 'Résidentiel & Flex Living', en: 'Residential & Flex Living' },
  { category: 'C.CAPITAL', fr: 'C.CAPITAL', en: 'C.CAPITAL' },
];

export default function PublicationsPage() {
  const context = useLanguage();
  const language = (context?.language || 'fr') as 'fr' | 'en';
  const fr = language === 'fr';

  const breadcrumbSchema = buildBreadcrumbSchema(language, 'publications', fr ? 'Publications & Références' : 'Publications & References');

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: fr ? 'Publications & Références — FINXIA Capital' : 'Publications & References — FINXIA Capital',
        url: fr ? 'https://finxiacapital.com/publications/' : 'https://finxiacapital.com/en/publications/',
        publisher: { '@type': 'Organization', name: 'FINXIA Capital SCSp', url: 'https://finxiacapital.com' },
      },
      {
        '@type': 'ScholarlyArticle',
        name: fr ? 'Optimisation Énergétique des Datacenters Européens' : 'Energy Optimization of European Datacenters',
        url: SSRN_URL,
        sameAs: SSRN_URL,
        datePublished: '2026',
        author: { '@type': 'Person', name: 'Lila Benhammou', url: 'https://finxiacapital.com/lila-benhammou/' },
        publisher: { '@type': 'Organization', name: 'SSRN' },
      },
    ],
  };

  const recent = (category: string) =>
    (blogPosts as any[])
      .filter((p) => p.category === category)
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, 5);

  const topDc = (blogPosts as any[])
    .filter((p) => !['Hospitality', 'Residential', 'C.CAPITAL'].includes(p.category))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 8);

  const href = (p: any) => (fr ? `/blog/${p.frSlug}/` : `/en/blog/${p.enSlug}/`);
  const title = (p: any) => (fr ? p.title.fr : p.title.en);

  const linkCls = 'block px-4 py-3 bg-white border border-slate-200 hover:border-[#C45A3B] text-sm text-slate-700 hover:text-[#C45A3B] transition-colors';

  return (
    <div data-testid="publications-page" className="pt-20">
      <SEO
        title={fr ? 'Publications & Références — Livre blanc SSRN, guides, analyses | FINXIA Capital' : 'Publications & References — SSRN White Paper, Guides, Analysis | FINXIA Capital'}
        description={fr
          ? "Publications de FINXIA Capital SCSp : livre blanc SSRN sur l'optimisation énergétique des datacenters européens, guide EED, podcast, newsletter et analyses par pôle."
          : "FINXIA Capital SCSp publications: SSRN white paper on European datacenter energy optimization, EED guide, podcast, newsletter and analysis by strategy."}
        canonical={fr ? 'https://finxiacapital.com/publications/' : 'https://finxiacapital.com/en/publications/'}
        keywords="FINXIA Capital publications, livre blanc SSRN datacenters, Lila Benhammou, EED directive guide, TITAN DC AI"
        structuredData={structuredData}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={fr ? 'fr_FR' : 'en_US'}
        hreflangFr="https://finxiacapital.com/publications/"
        hreflangEn="https://finxiacapital.com/en/publications/"
        hreflangDefault="https://finxiacapital.com/publications/"
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="overline mb-4">{fr ? 'Publications & Références' : 'Publications & References'}</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">
            {fr ? 'Ce que FINXIA Capital publie, et sur quelles sources' : 'What FINXIA Capital publishes, and on which sources'}
          </h1>
          <div className="section-divider mb-8" />
          <p className="text-slate-600 text-xl leading-relaxed">
            {fr
              ? "Cette page référence les travaux publiés par FINXIA Capital SCSp et ses dirigeants : publication académique, guides, analyses de marché par pôle, podcast et newsletter. Les chiffres de marché cités dans nos analyses indiquent leur année de référence ; les hypothèses sont présentées comme telles."
              : "This page lists the work published by FINXIA Capital SCSp and its leaders: academic paper, guides, market analysis by strategy, podcast and newsletter. Market figures cited in our analysis state their reference year; hypotheses are labelled as such."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl mb-6">{fr ? 'Publication académique' : 'Academic publication'}</h2>
          <a href={SSRN_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
            {fr ? 'Optimisation Énergétique des Datacenters Européens — Lila Benhammou, SSRN (2026)' : 'Energy Optimization of European Datacenters — Lila Benhammou, SSRN (2026)'}
          </a>

          <h2 className="font-serif text-3xl mt-14 mb-6">{fr ? 'Guides & formats' : 'Guides & formats'}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <a href="/guides/eed-directive-datacenter-2026/" className={linkCls}>{fr ? 'Guide : directive EED et datacenters 2026' : 'Guide: EED directive and datacenters 2026'}</a>
            <a href={fr ? '/podcast/' : '/en/podcast/'} className={linkCls}>{fr ? 'Podcast Finxia Capital Insights' : 'Finxia Capital Insights podcast'}</a>
            <a href={fr ? '/newsletter/' : '/en/newsletter/'} className={linkCls}>Newsletter</a>
            <a href={fr ? '/blog/' : '/en/blog/'} className={linkCls}>{fr ? 'Tous les articles du blog' : 'All blog articles'}</a>
          </div>

          <h2 className="font-serif text-3xl mt-14 mb-6">TITAN DC AI</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {topDc.map((p) => (
              <a key={p.frSlug} href={href(p)} className={linkCls}>{title(p)}</a>
            ))}
          </div>

          {POLES.map((pole) => (
            <div key={pole.category}>
              <h2 className="font-serif text-3xl mt-14 mb-6">{fr ? pole.fr : pole.en}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {recent(pole.category).map((p) => (
                  <a key={p.frSlug} href={href(p)} className={linkCls}>{title(p)}</a>
                ))}
              </div>
            </div>
          ))}

          <h2 className="font-serif text-3xl mt-14 mb-6">{fr ? 'Auteurs' : 'Authors'}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <a href={fr ? '/lila-benhammou/' : '/en/lila-benhammou/'} className={linkCls}>Lila Benhammou — Co-Founder & CIO</a>
            <a href={fr ? '/jean-pierre-veron/' : '/en/jean-pierre-veron/'} className={linkCls}>Jean-Pierre Véron — Co-Founder & Chairman</a>
          </div>
        </div>
      </section>
    </div>
  );
}
