import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Calendar, User, Camera, MapPin, Mail } from 'lucide-react';
import SEO from '@/components/SEO';

export default function PressPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

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
        "name": language === 'fr' ? "Presse & Médias" : "Press & Media",
        "item": "https://finxiacapital.com/press"
      }
    ]
  };

  const pressArticles = [
    {
      id: 'bfm-business',
      date: '2021-01-02',
      source: 'BFM Business',
      title: language === 'fr' ? 'Lila Benhammou (Humans4help) : optimisation et automatisation de processus via la data' : 'Lila Benhammou (Humans4help): process optimization and automation via data',
      url: 'https://www.bfmtv.com/economie/replay-emissions/l-hebdo-des-pme/lila-benhammou-humans4help-humans4help-offre-des-methodes-d-optimisation-et-d-automatisation-de-processus-via-de-la-data-02-01_VN-202101020145.html',
      category: language === 'fr' ? 'Télévision' : 'Television',
    },
    {
      id: 'bpifrance-big',
      date: '2022-08-04',
      source: 'Bpifrance — Big',
      title: language === 'fr' ? 'Du labo à la data, le parcours de Lila Benhammou, fondatrice de Humans4help' : 'From lab to data, the journey of Lila Benhammou, founder of Humans4help',
      url: 'https://bigmedia.bpifrance.fr/news/du-labo-a-la-data-le-parcours-de-lila-benhammou-fondatrice-de-humans4help',
      category: language === 'fr' ? 'Portrait Entrepreneur' : 'Entrepreneur Portrait',
    },
    {
      id: 'passion-patrimoine',
      date: '2024-06-11',
      source: 'Podcast Passion Patrimoine',
      title: language === 'fr' ? 'Lila Benhammou : "On aura toujours besoin des hommes pour éduquer l\'IA"' : 'Lila Benhammou: "We will always need humans to educate AI"',
      url: 'https://podcasts.audiomeans.fr/passion-patrimoine-88200bee/78-lila-benhammou-on-aura-toujours-besoin-des-hommes-pour-eduquer-lia-3b865a99',
      category: 'Podcast',
    },
    {
      id: 'trophees-pme',
      date: '2024-12-12',
      source: 'Trophées PME RMC BFM',
      title: language === 'fr' ? 'Impact PME 2024 — Atelier : PME, appropriez-vous l\'IA générative' : 'Impact PME 2024 — Workshop: SMEs, embrace generative AI',
      url: 'https://www.tropheespmermcbfm.fr/e/impact-pme-2024/speaker/c67a5423-3091-ef11-8473-6045bda07ccf/lila-benhammou',
      category: language === 'fr' ? 'Conférence' : 'Conference',
    },
  ];

  const events = [
    {
      id: 'tech-boosther',
      title: 'Tech Boost\'her',
      subtitle: language === 'fr' ? 'Social Builder · France Travail · Apec' : 'Social Builder · France Travail · Apec',
      date: '3 juin 2026',
      location: 'CENTQUATRE-PARIS',
      description: language === 'fr'
        ? 'Participation à la table ronde "From digital with love" aux côtés d\'Élisabeth Moreno (Fondation Femmes@Numérique). Thèmes : impact humain dans les transformations numériques, inclusion, diversité et digital comme levier d\'émancipation.'
        : 'Panel participation "From digital with love" alongside Élisabeth Moreno (Femmes@Numérique Foundation). Topics: human impact in digital transformations, inclusion, diversity, and digital as a lever for empowerment.',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQG_cuxcArTz9Q/feedshare-shrink_800/feedshare-shrink_800/0/1779899102871?e=1783555200&v=beta&t=PIKNHdIlt-IBLtX3FOwg5lAZMqI1i1SRvjDHgV0ZajI',
      link: 'https://www.linkedin.com/posts/techboosther-share-7465437931567022080-sXz8/',
    },
    {
      id: 'women-data-science',
      title: 'Women in Data Science',
      subtitle: 'Alteryx · EMEA Panel',
      date: '2024',
      location: 'EMEA',
      description: language === 'fr'
        ? 'Intervention sur le panel EMEA avec Libby Duane Adams. Thèmes : analytics dans l\'éducation, l\'importance de l\'upskilling et l\'IA pour la data science.'
        : 'EMEA panel speaker with Libby Duane Adams. Topics: analytics in education, the importance of upskilling, and AI for data science.',
      image: 'https://media.licdn.com/dms/image/v2/C4E22AQHn7Hn6dJ58vA/feedshare-shrink_800/feedshare-shrink_800/0/1619714825051?e=1783555200&v=beta&t=s-L_G4uZJSOeku7VRx-5dOx11dRZBvhH202Qjd1ljJc',
      link: 'https://www.linkedin.com/in/lila-benhammou/',
    },
    {
      id: 'viva-technology',
      title: 'Viva Technology',
      subtitle: 'UiPath · Partner Gold',
      date: '2019',
      location: 'Paris',
      description: language === 'fr'
        ? 'Présence de H4H Humans4Help à Viva Technology avec notre partenaire UiPath. Démonstrations de cas d\'usage RPA et rencontres avec les talents du numérique.'
        : 'H4H Humans4Help at Viva Technology with partner UiPath. RPA use case demos and meetings with digital talents.',
      image: 'https://media.licdn.com/dms/image/v2/C5622AQGpoqeKk7Q3TA/feedshare-shrink_800/feedshare-shrink_800/0/1558202237386?e=1783555200&v=beta&t=dLDOHRcRcOwD4hDe8QX9EnAqHT8E2ibJqHE5a_DAYtw',
      link: 'https://www.linkedin.com/in/lila-benhammou/',
    },
    {
      id: 'elevate24',
      title: 'Elevate24',
      subtitle: 'monday.com · Partner',
      date: '2024',
      location: 'Paris',
      description: language === 'fr'
        ? 'Participation à l\'événement Elevate24 avec notre partenaire monday.com. Contenu riche et témoignages sur la transformation digitale et l\'automatisation.'
        : 'Participation at Elevate24 with partner monday.com. Rich content and testimonials on digital transformation and automation.',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQE2l-YK72_7RQ/feedshare-shrink_800/feedshare-shrink_800/0/1726055471863?e=1783555200&v=beta&t=pABCK9rP8u5OsNjXRIbTq0u-mRRt2V6yj8Yrg018Fnk',
      link: 'https://www.linkedin.com/in/lila-benhammou/',
    },
    {
      id: 'pegasystems',
      title: 'Pegasystems',
      subtitle: language === 'fr' ? 'Podcast · Hyperautomation' : 'Podcast · Hyperautomation',
      date: '2022',
      location: 'Online',
      description: language === 'fr'
        ? 'Invitation à partager mes vues sur le marché de l\'hyperautomation et comment scaler l\'hyperautomation pour sécuriser son succès.'
        : 'Invited to share views on the hyperautomation market and how to scale hyperautomation for success.',
      image: 'https://media.licdn.com/dms/image/v2/C4D22AQECRZc-IOlzSA/feedshare-shrink_800/feedshare-shrink_800/0/1641461968863?e=1783555200&v=beta&t=kcdxOpHBPsdEAqyzOjrOehPY_VHF_D6xVWRqotQ0oxo',
      link: 'https://www.linkedin.com/in/lila-benhammou/',
    },
    {
      id: 'women-tech-power',
      title: language === 'fr' ? '#Women #Tech #Power' : '#Women #Tech #Power',
      subtitle: 'H4H Humans4Help',
      date: '2023',
      location: 'Paris',
      description: language === 'fr'
        ? 'Engagement pour la diversité et l\'inclusion dans la tech. Lila Benhammou, porte-voix des femmes dans l\'IA et l\'automatisation.'
        : 'Commitment to diversity and inclusion in tech. Lila Benhammou, advocate for women in AI and automation.',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQF-KSJhC48ABA/feedshare-shrink_800/feedshare-shrink_800/0/1681222251454?e=1783555200&v=beta&t=MiFkGIp6f9YJaUXep5WRgQDQRPpfemV30X5Bvp01Q4c',
      link: 'https://www.linkedin.com/in/lila-benhammou/',
    },
    {
      id: 'uipath-paris',
      title: 'UiPath Event',
      subtitle: 'UiPath · Partner Gold · ABBYY',
      date: '2019',
      location: 'Paris',
      description: language === 'fr'
        ? 'H4H Humans4Help partenaire Gold de l\'événement UiPath à Paris. Démonstrations de cas d\'usage RPA avec notre partenaire ABBYY.'
        : 'H4H Humans4Help Gold Partner at UiPath event in Paris. RPA use case demos with partner ABBYY.',
      image: 'https://media.licdn.com/dms/image/v2/C4D22AQFO9nfrwCmp0g/feedshare-shrink_800/feedshare-shrink_800/0/1573379063915?e=1783555200&v=beta&t=XD_NMSwwXKhJLKyv8cxdnb7H9qerpBoQHBFzzoR-_tk',
      link: 'https://www.linkedin.com/in/lila-benhammou/',
    },
  ];

  return (
    <div data-testid="press-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Presse & Médias — Lila Benhammou | Finxia Capital" : "Press & Media — Lila Benhammou | Finxia Capital"}
        description={language === 'fr'
          ? "Retrouvez les articles, interviews, podcasts et événements de Lila Benhammou, co-fondatrice de Finxia Capital. Tech Boost'her, France Travail, BFM Business, Bpifrance, podcasts."
          : "Find articles, interviews, podcasts and events featuring Lila Benhammou, co-founder of Finxia Capital. Tech Boost'her, France Travail, BFM Business, Bpifrance, podcasts."}
        canonical="https://finxiacapital.com/press/"
        keywords="Lila Benhammou presse, Humans4help, Tech Boost'her, France Travail, Social Builder, IA intelligence artificielle, BFM Business, Bpifrance, podcast IA, hyperautomation"
        breadcrumbSchema={breadcrumbSchema}
        language="fr"
        ogLocale="fr_FR"
        hreflangFr="https://finxiacapital.com/press/"
        hreflangEn="https://finxiacapital.com/en/press/"
        hreflangDefault="https://finxiacapital.com/press/"
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">
              {language === 'fr' ? 'Presse & Médias' : 'Press & Media'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr'
                ? 'Lila Benhammou dans la Presse'
                : 'Lila Benhammou in the Press'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'Co-fondatrice de Finxia Capital, Lila Benhammou est une voix reconnue dans l\'écosystème IA, l\'automatisation et l\'entrepreneuriat tech. Retrouvez ses interventions, interviews et événements.'
                : 'Co-founder of Finxia Capital, Lila Benhammou is a recognized voice in the AI ecosystem, automation, and tech entrepreneurship. Find her appearances, interviews, and events.'}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="overline mb-4">{language === 'fr' ? 'Articles & Interviews' : 'Articles & Interviews'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Mentions dans les Médias' : 'Media Mentions'}
            </h2>
            <div className="section-divider mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pressArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-slate-50 p-6 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#C45A3B] text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 text-xs">{article.source}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg mb-3 group-hover:text-[#C45A3B] transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1 text-[#C45A3B] text-sm font-medium">
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === 'fr' ? 'Lire l\'article' : 'Read article'}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="overline mb-4">{language === 'fr' ? 'Événements & Photos' : 'Events & Photos'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Interventions & Conférences' : 'Speaking & Conferences'}
            </h2>
            <div className="section-divider mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#C45A3B] text-white text-xs font-semibold px-2 py-1 rounded">
                      {event.date}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg mb-1">{event.title}</h3>
                  <p className="text-[#C45A3B] text-xs font-medium mb-2">{event.subtitle}</p>
                  <p className="text-slate-500 text-xs mb-3 flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    {event.location}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {event.description}
                  </p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#C45A3B] text-xs font-medium hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {language === 'fr' ? 'Voir sur LinkedIn' : 'View on LinkedIn'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event — Tech Boost'her */}
      <section className="py-16 bg-[#1E2A3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C45A3B] font-medium uppercase tracking-wider text-sm mb-4">
                {language === 'fr' ? 'Événement Phare' : 'Featured Event'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Tech Boost'her · Social Builder · France Travail
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Lila Benhammou a participé à la table ronde "From digital with love" lors de Tech Boost\'her, organisé par Social Builder avec France Travail et Apec. Aux côtés d\'Élisabeth Moreno (Fondation Femmes@Numérique), elle a échangé sur l\'impact humain au cœur des transformations numériques, l\'inclusion et la diversité dans la tech, et le digital comme levier d\'émancipation et d\'égalité des chances.'
                  : 'Lila Benhammou participated in the panel "From digital with love" at Tech Boost\'her, organized by Social Builder with France Travail and Apec. Alongside Élisabeth Moreno (Femmes@Numérique Foundation), she discussed human impact at the heart of digital transformations, inclusion and diversity in tech, and digital as a lever for empowerment and equal opportunity.'}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#C45A3B]" />
                  <span className="text-slate-300">3 juin 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C45A3B]" />
                  <span className="text-slate-300">CENTQUATRE-PARIS</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#C45A3B]" />
                  <span className="text-slate-300">Élisabeth Moreno · Lila Benhammou</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/posts/techboosther-share-7465437931567022080-sXz8/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-[#C45A3B] text-white px-6 py-3 text-sm font-semibold hover:bg-[#a34a2f] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {language === 'fr' ? 'Voir le post LinkedIn' : 'View LinkedIn post'}
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQG_cuxcArTz9Q/feedshare-shrink_800/feedshare-shrink_800/0/1779899102871?e=1783555200&v=beta&t=PIKNHdIlt-IBLtX3FOwg5lAZMqI1i1SRvjDHgV0ZajI"
                alt="Tech Boost'her — Lila Benhammou et Élisabeth Moreno"
                className="w-full rounded-lg shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {language === 'fr' ? 'Contacter Lila Benhammou' : 'Contact Lila Benhammou'}
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Pour toute demande de presse, d\'intervention ou de partenariat autour de l\'IA et de l\'automatisation.'
              : 'For any press, speaking, or partnership request around AI and automation.'}
          </p>
          <a
            href="mailto:contact@finxiacapital.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            contact@finxiacapital.com
          </a>
        </div>
      </section>
    </div>
  );
}
