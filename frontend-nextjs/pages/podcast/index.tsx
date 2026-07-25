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
    {
      name: 'Apple Podcasts',
      url: 'https://podcasts.apple.com/search?term=finxia+capital+insights',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.08-3.11-1.06.05-2.31.71-3.06 1.55-.68.76-1.28 1.97-1.12 3.12 1.19.09 2.4-.59 3.1-1.56z"/>
        </svg>
      )
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/search/finxia%20capital%20insights',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    },
    {
      name: 'Amazon Music',
      url: 'https://music.amazon.com/podcasts/6f4722ff-7209-452f-91d2-83383f1d6e39',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.582.084-.04.188-.01.218.066.03.077-.008.175-.09.224-2.73 1.61-5.73 2.41-8.97 2.41-4.442 0-8.484-1.17-12.1-3.51-.11-.074-.144-.15-.096-.248zm.654-.862c.079-.066.2-.054.292.031 3.48 2.88 7.716 4.32 12.693 4.32 3.06 0 6.03-.64 8.91-1.91.108-.045.24-.01.285.08.046.09.013.197-.08.245-3.01 1.47-6.27 2.21-9.78 2.21-5.186 0-9.83-1.54-13.92-4.62-.1-.08-.126-.17-.07-.26zm.773-.97c.065-.05.164-.036.23.035 3.133 2.62 7.06 3.93 11.78 3.93 3.73 0 7.29-.94 10.68-2.82.1-.055.22-.025.27.07.05.094.02.208-.08.266-3.56 2.01-7.39 3.02-11.49 3.02-4.924 0-9.32-1.44-13.18-4.32-.083-.066-.11-.147-.068-.217zm1.64-2.47c.058-.04.14-.026.19.035 2.82 2.38 6.36 3.57 10.62 3.57 4.23 0 8.26-1.16 12.09-3.49.086-.052.194-.023.246.065.052.088.022.2-.064.256-3.97 2.43-8.17 3.65-12.59 3.65-4.41 0-8.37-1.28-11.89-3.85-.075-.054-.09-.128-.04-.19zm2.58-2.69c.047-.035.118-.026.163.022 2.43 2.08 5.52 3.12 9.25 3.12 3.62 0 7.09-.99 10.39-2.97.075-.045.17-.02.218.055.048.078.022.178-.054.225-3.42 2.06-7.04 3.09-10.85 3.09-3.88 0-7.37-1.1-10.48-3.3-.06-.046-.07-.11-.04-.17zm3.1-2.33c.038-.03.095-.022.13.02 2.02 1.73 4.59 2.6 7.7 2.6 3.03 0 5.93-.83 8.69-2.48.063-.038.143-.016.183.049.04.065.017.147-.047.187-2.85 1.72-5.86 2.58-9.02 2.58-3.22 0-6.12-.92-8.69-2.76-.048-.038-.056-.09-.03-.14z"/>
        </svg>
      )
    },
    {
      name: 'Deezer',
      url: 'https://www.deezer.com/show/1003433952',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.81 4.54H21V19.5h-2.19V4.54zm-4.37 0h2.19v14.96h-2.19V4.54zm-4.37 0h2.19v14.96H10.07V4.54zm-4.37 0h2.19v14.96H5.7V4.54zm-2.18 0H6v14.96H3.5V4.54z"/>
        </svg>
      )
    },
    {
      name: 'Pocket Casts',
      url: 'https://pca.st/hvph2kcp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5h-9a1.5 1.5 0 01-1.5-1.5V9a1.5 1.5 0 011.5-1.5h9A1.5 1.5 0 0118 9v6a1.5 1.5 0 01-1.5 1.5zM12 6a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 6z"/>
        </svg>
      )
    },
    {
      name: 'Player FM',
      url: 'https://player.fm/series/series-3742425',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      )
    },
    {
      name: 'RSS',
      url: 'https://feeds.transistor.fm/finxia-capital-insights',
      icon: <Rss className="w-5 h-5" />
    }
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
    {link.icon}
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
