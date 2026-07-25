import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Headphones, Rss, ExternalLink, Play, Clock, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';
import Link from 'next/link';

export default function PodcastPage() {
  const { language } = useLanguage();

  const episodes = [
    {
      title: {
        fr: "Épisode 1 — L'électricité, le vrai goulot d'étranglement de l'IA en France",
        en: "Episode 1 — Electricity, the Real Bottleneck of AI in France"
      },
      date: '2026-07-25',
      duration: '3 min 22 s',
      description: {
        fr: "Chaque nouvelle génération de puces NVIDIA consomme presque le double d'énergie que la précédente. Lila Benhammou explique pourquoi la France a l'énergie mais pas la vitesse de raccordement — et comment TITAN DC AI se positionne sur des sites déjà raccordés en haute tension.",
        en: "Each new generation of NVIDIA chips consumes almost twice as much energy as the previous one. Lila Benhammou explains why France has the energy but not the connection speed — and how TITAN DC AI positions itself on sites already connected to high voltage."
      },
      embedUrl: 'https://share.transistor.fm/e/a3c3b47e/dark',
      shareUrl: 'https://share.transistor.fm/s/a3c3b47e',
      mp3Url: 'https://media.transistor.fm/a3c3b47e/edb761fc.mp3'
    }
  ];

  const subscribeLinks = [
    { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/search?term=finxia+capital+insights' },
    { name: 'Spotify', url: 'https://open.spotify.com/search/finxia%20capital%20insights' },
    { name: 'RSS', url: 'https://feeds.transistor.fm/finxia-capital-insights' }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://finxiacapital.com" },
      { "@type": "ListItem", "position": 2, "name": "Podcast", "item": "https://finxiacapital.com/podcast" }
    ]
  };

  return (
    <div className="pt-20">
      <SEO
        title={language === 'fr' ? "Podcast — Finxia Capital Insights" : "Podcast — Finxia Capital Insights"}
        description={language === 'fr'
          ? "Chaque mois, Lila Benhammou décrypte l'infrastructure IA, l'énergie et les actifs réels en Europe. Le podcast de FINXIA Capital."
          : "Every month, Lila Benhammou decodes AI infrastructure, energy and real assets in Europe. The FINXIA Capital podcast."}
        canonical="https://finxiacapital.com/podcast/"
        keywords="podcast, Finxia Capital, datacenter IA, infrastructure IA, investissement alternatif, Lila Benhammou"
        breadcrumbSchema={breadcrumbSchema}
        language="fr"
        ogLocale="fr_FR"
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src="/images/finxia-podcast-cover.png"
                alt="Finxia Capital Insights Podcast Cover"
                className="w-64 h-64 md:w-72 md:h-72 rounded-2xl shadow-xl mx-auto"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <p className="overline mb-3">{language === 'fr' ? 'Podcast' : 'Podcast'}</p>
              <h1 className="font-serif text-3xl md:text-4xl mb-4">
                Finxia Capital Insights
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {language === 'fr'
                  ? "Chaque mois, Lila Benhammou, cofondatrice et directrice des investissements de FINXIA Capital, décrypte les grands mouvements de l'infrastructure IA, de l'énergie et des actifs réels en Europe. Un regard direct, chiffré et sans complaisance."
                  : "Every month, Lila Benhammou, co-founder and Investment Director of FINXIA Capital, decodes the major movements in AI infrastructure, energy and real assets in Europe. A direct, data-driven and uncompromising perspective."}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {subscribeLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-[#C45A3B] hover:text-[#C45A3B] transition-colors"
                  >
                    {link.name === 'RSS' ? <Rss className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 pb-4 border-b-2 border-[#C45A3B]">
            {language === 'fr' ? 'Épisodes' : 'Episodes'}
          </h2>

          {episodes.map((ep, idx) => (
            <div key={idx} className="mb-12 last:mb-0">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E2A3A] rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white ml-0.5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-slate-900 mb-2">
                    {ep.title[language === 'fr' ? 'fr' : 'en']}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(ep.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {ep.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {ep.description[language === 'fr' ? 'fr' : 'en']}
                  </p>
                </div>
              </div>

              {/* Transistor Embed Player */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={ep.embedUrl}
                  width="100%"
                  height="180"
                  frameBorder="0"
                  scrolling="no"
                  seamless
                  title={ep.title[language === 'fr' ? 'fr' : 'en']}
                  style={{ width: '100%', height: '180px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1E2A3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Headphones className="w-10 h-10 mx-auto mb-4 text-[#C45A3B]" />
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            {language === 'fr' ? 'Ne manquez aucun épisode' : 'Never miss an episode'}
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            {language === 'fr'
              ? "Abonnez-vous sur votre plateforme préférée pour recevoir les nouveaux épisodes dès leur publication."
              : "Subscribe on your favorite platform to receive new episodes as soon as they are published."}
          </p>
          <a
            href="https://feeds.transistor.fm/finxia-capital-insights"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Rss className="w-4 h-4" />
            {language === 'fr' ? "S'abonner au flux RSS" : 'Subscribe to RSS Feed'}
          </a>
        </div>
      </section>
    </div>
  );
}
