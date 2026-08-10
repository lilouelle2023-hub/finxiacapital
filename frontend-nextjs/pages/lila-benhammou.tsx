import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { buildBreadcrumbSchema } from '@/lib/breadcrumb';
import { ExternalLink, Calendar, User, Camera, MapPin, Mail, BookOpen } from 'lucide-react';
import SEO from '@/components/SEO';

export default function LilaPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

  const breadcrumbSchema = buildBreadcrumbSchema(
    language,
    'lila-benhammou',
    'Lila Benhammou'
  );

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
      date: '3 et 4 juin 2026',
      location: 'CENTQUATRE-PARIS',
      description: language === 'fr'
        ? 'Participation à la table ronde "From digital with love" aux côtés d\'Élisabeth Moreno (Fondation Femmes@Numérique). Thèmes : impact humain dans les transformations numériques, inclusion, diversité et digital comme levier d\'émancipation.'
        : 'Panel participation "From digital with love" alongside Élisabeth Moreno (Femmes@Numérique Foundation). Topics: human impact in digital transformations, inclusion, diversity, and digital as a lever for empowerment.',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQG_cuxcArTz9Q/feedshare-shrink_800/B4DZ5qQPT9GcAc-/0/1779899102872?e=1783555200&v=beta&t=AKacdp1NCZz1307cyouwEum38LrodxafXL90eXq18FE',
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
      id: 'salon-ia-actual',
      title: language === 'fr' ? 'Salon de l\'IA' : 'AI Salon',
      subtitle: 'ACTUAL · Numeum · Grand Rex',
      date: '2025',
      location: 'Grand Rex, Paris',
      description: language === 'fr'
        ? 'Intervention au Salon de l\'IA organisé par ACTUAL au Grand Rex à Paris. Événement phare sur l\'impact de l\'intelligence artificielle pour les entreprises, en partenariat avec Numeum.'
        : 'Speaking at the AI Salon organized by ACTUAL at the Grand Rex in Paris. Flagship event on the impact of artificial intelligence for businesses, in partnership with Numeum.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
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
      id: 'women-tech-power',
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
    <div data-testid="lila-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Lila Benhammou — Presse & Médias | Finxia Capital" : "Lila Benhammou — Press & Media | Finxia Capital"}
        description={language === 'fr'
          ? "Retrouvez les articles, interviews, podcasts et événements de Lila Benhammou, co-fondatrice de Finxia Capital. Tech Boost'her, France Travail, BFM Business, Bpifrance, podcasts."
          : "Find articles, interviews, podcasts and events featuring Lila Benhammou, co-founder of Finxia Capital. Tech Boost'her, France Travail, BFM Business, Bpifrance, podcasts."}
        canonical="https://finxiacapital.com/lila-benhammou/"
        keywords="Lila Benhammou presse, Humans4help, Tech Boost'her, France Travail, Social Builder, IA intelligence artificielle, BFM Business, Bpifrance, podcast IA, hyperautomation"
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/lila-benhammou/"
        hreflangEn="https://finxiacapital.com/en/lila-benhammou/"
        hreflangDefault="https://finxiacapital.com/lila-benhammou/"
      />

      {/* Parcours / Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="overline mb-4">{language === 'fr' ? 'Parcours' : 'Career'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? '15+ ans de leadership cross-fonctionnel' : '15+ years of cross-functional leadership'}
            </h2>
            <div className="section-divider mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#C45A3B] text-sm font-bold">2005-2016</span>
              </div>
              <h3 className="font-serif text-lg mb-2">
                {language === 'fr' ? 'Carrière Télécoms & IT' : 'Telecom & IT Career'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'Etrali, Orange (France et Business Services), BT Global Services. Expertises acquises : négociation institutionnelle, gestion de comptes globaux, P&L, contrats outsourcing, transformation digitale, services cloud et ITSM. Travail avec des clients internationaux sur plusieurs continents.'
                  : 'Etrali, Orange (France and Business Services), BT Global Services. Skills acquired: institutional negotiation, global account management, P&L, outsourcing contracts, digital transformation, cloud and ITSM services. Work with international clients across multiple continents.'}
              </p>
            </div>
            <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#C45A3B] text-sm font-bold">2016-2026</span>
              </div>
              <h3 className="font-serif text-lg mb-2">
                {language === 'fr' ? 'Digital Transformation & IA' : 'Digital Transformation & AI'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'Fruition Partners (South West Europe Lead) puis fondation de Humans4Help (H4H). Expertises acquises : transformation digitale, IA, automation, machine learning, hyperautomation, services cloud, gestion de grands comptes.'
                  : 'Fruition Partners (South West Europe Lead) then foundation of Humans4Help (H4H). Skills acquired: digital transformation, AI, automation, machine learning, hyperautomation, cloud services, large account management.'}
              </p>
            </div>
            <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#C45A3B] text-sm font-bold">2023</span>
              </div>
              <h3 className="font-serif text-lg mb-2">
                {language === 'fr' ? 'Sortie Entrepreneuriale' : 'Entrepreneurial Exit'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'Sortie réussie de Humans4Help. Compétences acquises : scale-up, levée de fonds, croissance, structuration d\'équipe, culture d\'entreprise, sortie stratégique.'
                  : 'Successful exit of Humans4Help. Skills acquired: scale-up, fundraising, growth, team structuring, corporate culture, strategic exit.'}
              </p>
            </div>
            <div className="bg-slate-50 p-6 border-l-4 border-[#C45A3B] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#C45A3B] text-sm font-bold">2023</span>
              </div>
              <h3 className="font-serif text-lg mb-2">
                {language === 'fr' ? 'Co-fondation de FINXIA Capital' : 'Co-foundation of FINXIA Capital'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'CIO de FINXIA Capital. Déploiement de la stratégie TITAN DC AI et de son infrastructure opérationnelle. Lead author du livre blanc SSRN sur l\'optimisation énergétique des datacenters européens.'
                  : 'CIO of FINXIA Capital. Deployment of the TITAN DC AI strategy and its operational infrastructure. Lead author of the SSRN white paper on European datacenter energy optimization.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Auteure / Author Section — refonte */}
      <section className="py-20 md:py-28 bg-[#1E2A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <p className="text-[#C45A3B] font-medium uppercase tracking-wider text-sm mb-4">
              {language === 'fr' ? 'Auteure' : 'Author'}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
              {language === 'fr' ? 'Publications' : 'Publications'}
            </h2>
            <div className="w-24 h-1 bg-[#C45A3B]" />
          </div>

          {/* Livre phare — Power-Bound */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Couverture */}
              <div className="lg:col-span-2">
                <div className="relative group">
                  <img
                    src={language === 'fr' ? "/images/power-bound-cover-fr.jpg" : "/images/power-bound-cover-en.jpg"}
                    alt={language === 'fr' ? "Couverture Power-Bound" : "Power-Bound Cover"}
                    className="w-full max-w-sm mx-auto rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute -top-3 -right-3 md:top-4 md:right-4">
                    <span className="inline-block px-4 py-2 bg-[#C45A3B] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                      {language === 'fr' ? 'À paraître' : 'Coming Soon'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="lg:col-span-3 flex flex-col">
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-3">
                  {language === 'fr' ? 'Deuxième livre · 2026' : 'Second book · 2026'}
                </p>
                <h3 className="font-serif text-2xl md:text-4xl text-white mb-3 leading-tight">
                  {language === 'fr'
                    ? 'Power-Bound — La guerre du mégawatt'
                    : 'Power-Bound — The Megawatt War'}
                </h3>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                  {language === 'fr'
                    ? 'Comment l\'Europe joue son avenir énergétique et numérique face à l\'intelligence artificielle'
                    : 'How Europe Is Gambling Its Energy and Digital Future on Artificial Intelligence'}
                </p>

                {/* Thèmes */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    language === 'fr' ? 'Datacenter AI' : 'AI Datacenter',
                    language === 'fr' ? 'Géopolitique de l\'énergie' : 'Energy Geopolitics',
                    language === 'fr' ? 'Europe' : 'Europe',
                    language === 'fr' ? 'Régulation' : 'Regulation',
                  ].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-slate-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Citation */}
                <blockquote className="relative mb-8">
                  <span className="absolute -top-2 -left-2 text-6xl text-[#C45A3B]/30 font-serif leading-none">"</span>
                  <p className="relative pl-6 text-slate-200 italic text-lg leading-relaxed border-l-2 border-[#C45A3B]">
                    {language === 'fr'
                      ? "La question n'est pas de choisir entre l'IA et l'électricité. Elle est de savoir comment les deux peuvent coexister sans que l'une ne détruise l'autre."
                      : 'The question is not choosing between AI and electricity. It is knowing how the two can coexist without one destroying the other.'}
                  </p>
                </blockquote>

                {/* Méta */}
                <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#C45A3B]" />
                    {language === 'fr' ? 'Auto-édition' : 'Self-published'}
                  </span>
                  <span>·</span>
                  <span>© 2026 Lila Benhammou</span>
                  <span>·</span>
                  <span>{language === 'fr' ? 'Édition bilingue FR / EN' : 'Bilingual FR / EN'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Livre précédent — RPA */}
          <div className="border-t border-white/10 pt-12">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs font-medium rounded-full">2020</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-white mb-3">
                  RPA, AI, Chatbots: How to Scale with Hyperautomation
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4 max-w-2xl">
                  {language === 'fr'
                    ? "Premier ouvrage de Lila Benhammou, coécrit avec Nandan Nandan et Iaad Ben Dia. Un guide pratique sur le passage à l'échelle de l'automatisation intelligente en entreprise — né de son expérience opérationnelle chez Humans4Help."
                    : "Lila Benhammou's first book, co-authored with Nandan Nandan and Iaad Ben Dia. A practical guide on scaling intelligent automation in business — born from her operational experience at Humans4Help."}
                </p>
                <a
                  href="https://www.amazon.com/RPA-AI-Chatbots-scale-Hyperautomation-ebook/dp/B08P8X1MTP"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 text-[#C45A3B] text-sm font-medium hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {language === 'fr' ? 'Voir sur Amazon' : 'View on Amazon'}
                </a>
              </div>
              <div className="md:col-span-4 flex justify-end">
                <img
                  src="/images/rpa-book-cover.webp"
                  alt="RPA, AI, Chatbots: How to Scale with Hyperautomation"
                  className="w-24 h-auto rounded-lg shadow-md border border-white/10"
                />
              </div>
            </div>
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


      {/* CTA Section */}
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
                src="https://media.licdn.com/dms/image/v2/D4D22AQG_cuxcArTz9Q/feedshare-shrink_800/B4DZ5qQPT9GcAc-/0/1779899102872?e=1783555200&v=beta&t=AKacdp1NCZz1307cyouwEum38LrodxafXL90eXq18FE"
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

      {/* Sponsors Tech Boost'her */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-2">
            {language === 'fr' ? 'Sponsors & Partenaires' : 'Sponsors & Partners'}
          </h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            {language === 'fr'
              ? "Tech Boost'her bénéficie du soutien de grands acteurs institutionnels, publics et privés."
              : "Tech Boost'her benefits from the support of major institutional, public and private actors."}
          </p>

          {/* Co-porteurs */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6 text-center">
              {language === 'fr' ? 'Co-porteurs' : 'Co-organizers'}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/Logo_Social_Builder_avec_mention_mixit_numrique_blanche_b6cb93f6-cc9b-4f43-8a62-b87ea92aea3d.png"
                alt="Social Builder"
                className="h-12 md:h-16 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logoFT-republique-1920x1080_71d4cbce-a394-4c38-8d0c-2d1cfe428a07.png"
                alt="France Travail"
                className="h-12 md:h-16 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/Novapec--Apec--fond-transparent_cfae11df-d5b4-43e1-a56b-3a02424f5301.png"
                alt="Apec"
                className="h-12 md:h-16 object-contain"
              />
            </div>
          </div>

          {/* Partenaires institutionnels */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6 text-center">
              {language === 'fr' ? 'Partenaires Institutionnels' : 'Institutional Partners'}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/bpifranceetlafrenchlab_00d4611e-b7b9-4d07-a650-e98a29626e90.png"
                alt="Bpifrance"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/EDF_47900116-b3e4-4e4b-b4c1-bfa30ba99b22.png"
                alt="EDF"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/enedis_5be511e1-3f90-4044-82c8-6909d1d2fdf9.jpg"
                alt="Enedis"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logoSG_d44de2c6-8a8c-47a0-98d9-a5fb197052b7.png"
                alt="Société Générale"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logototal_d3d6a48c-f411-4dff-82c5-22aa99d3a35c.png"
                alt="Total"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/Logo_du_Mouvement_des_entreprises_de_France_MEDEF.svg_53f1b2e2-2c7e-4d2f-91b3-7b93e82c07c0.png"
                alt="MEDEF"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/CCIParisIDF_30097e06-5d57-4915-bb77-05bb4411082a.png"
                alt="CCI Paris IDF"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/verkor_9d4edb5f-43e6-4a7d-b1f3-19a8d5f7dc27.jpg"
                alt="Verkor"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/banque_des_territoires_e7874970-a222-484a-b05c-2c6ba6c3931d.jpg"
                alt="Banque des Territoires"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/campus_cyber_12866c58-e52f-4a6b-a3fd-2f77857fc472.jpg"
                alt="Campus Cyber"
                className="h-10 md:h-12 object-contain"
              />
            </div>
          </div>

          {/* Partenaires écosystème */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6 text-center">
              {language === 'fr' ? 'Partenaires Écosystème' : 'Ecosystem Partners'}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/cefcys_bc534635-b069-4fe6-bebe-fb693eec4a5a.png"
                alt="EFCYS"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/yeeso_45f06b73-5c9a-4a50-8a38-4e77ab5face7.png"
                alt="Yeeso"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/LaFrancesengage_ab8afdc0-e084-456c-a691-679461003def.png"
                alt="La France s'engage"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logoWIN_142e69cd-cc52-4b44-8226-3a9946a92836.png"
                alt="WIN France"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/Numeum_336e0860-48da-4c3b-9f99-5655be3a6431.png"
                alt="Numeum"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logoFemmesnumriques_f97872ae-2663-418f-a42c-65a339f45315.png"
                alt="Femmes Numérique"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/CMQ_BTP_numerique_occitanie_f3f44e23-eea9-49f4-ac7c-aa0b4ccff388.png"
                alt="Campus des Métiers BTP Occitanie"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/CMQ_industrie_idf_6f8c0591-2be8-4ce1-9b27-40e352297917.png"
                alt="Campus des Métiers Industrie IDF"
                className="h-10 md:h-12 object-contain"
              />
            </div>
          </div>

          {/* Partenaires fondations */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6 text-center">
              {language === 'fr' ? 'Fondations Partenaires' : 'Partner Foundations'}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logoFondationRandstad_bf79f488-afd5-4a1e-b4c6-9c66f47597c7.png"
                alt="Fondation Randstad"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logo_fondationcovea_bleu_long_40c2bdde-9650-4e83-96af-c125bb8255ff.png"
                alt="Fondation Covea"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logofondationedf_e75e3bc9-098e-44fd-83ca-ecfe2449ec06.png"
                alt="Fondation EDF"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logofondationRATP_436a32ff-b3b8-4981-aaa7-02edc6121d37.png"
                alt="Fondation RATP"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logosfondationAdecco_df242d88-a886-4a81-8db3-177d366e787c.png"
                alt="Fondation Adecco"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logoIBMSkillsBuild_fb7affb2-0831-4027-a40c-ceffd3dbe692.png"
                alt="IBM SkillsBuild"
                className="h-10 md:h-12 object-contain"
              />
            </div>
          </div>

          {/* Partenaires médias */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6 text-center">
              {language === 'fr' ? 'Partenaires Médias' : 'Media Partners'}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/carenews-logo_71c283f0-0e81-4110-9742-13fef92f3bef.png"
                alt="Carenews"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/maddyness-logo-vector_1f64e48f-5277-4a85-988e-f644109ec495.png"
                alt="Maddyness"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/logo-Latribune-blue_ea1470d7-1c50-4b51-a206-68a85ef0e3be.svg"
                alt="La Tribune"
                className="h-10 md:h-12 object-contain"
              />
            </div>
          </div>

          {/* Soutien public */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6 text-center">
              {language === 'fr' ? 'Soutien Public' : 'Public Support'}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/france_2030_1b665f09-581e-4273-8272-2988a442ee51.png"
                alt="France 2030"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/republique_francaise_509920ac-b390-41cc-ad7d-a305f447d804.png"
                alt="République Française"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/688383179530632f8e703a5a/assets-folder68a32d9225096d93d5604313/NextgenerationEU_71ffb7e3-c62a-4dea-80ce-f6947f3db508.png"
                alt="Next Generation EU"
                className="h-10 md:h-12 object-contain"
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
              ? 'Pour toute demande de presse, d\'intervention ou de partenariat autour de la stratégie TITAN DC AI et de l\'intelligence artificielle.'
              : 'For any press, speaking, or partnership request around the TITAN DC AI strategy and artificial intelligence.'}
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
