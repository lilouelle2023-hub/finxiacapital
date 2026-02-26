import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  CheckCircle, Users, FileCheck, BarChart3, ShieldCheck, 
  Award, Briefcase, Lightbulb, Target, TrendingUp, 
  Building2, Shield, Layers, Globe, Zap, Brain
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const structures = [
    t('about.structure1'),
    t('about.structure2'),
    t('about.structure3'),
    t('about.structure4'),
  ];

  const governance = [
    { icon: Users, title: t('about.gov1Title'), text: t('about.gov1Text') },
    { icon: FileCheck, title: t('about.gov2Title'), text: t('about.gov2Text') },
    { icon: BarChart3, title: t('about.gov3Title'), text: t('about.gov3Text') },
    { icon: ShieldCheck, title: t('about.gov4Title'), text: t('about.gov4Text') },
  ];

  const differentiators = [
    { 
      icon: Layers, 
      title: t('about.diff1Title'), 
      text: t('about.diff1Text') 
    },
    { 
      icon: Brain, 
      title: t('about.diff2Title'), 
      text: t('about.diff2Text') 
    },
    { 
      icon: Shield, 
      title: t('about.diff3Title'), 
      text: t('about.diff3Text') 
    },
    { 
      icon: TrendingUp, 
      title: t('about.diff4Title'), 
      text: t('about.diff4Text') 
    },
  ];

  const teamMembers = [
    {
      initials: 'JPV',
      name: t('about.founder1Name'),
      role: t('about.founder1Role'),
      bio: t('about.founder1Bio'),
      highlights: [
        { icon: Award, text: t('about.founder1Highlight1') },
        { icon: Briefcase, text: t('about.founder1Highlight2') },
        { icon: CheckCircle, text: t('about.founder1Highlight3') },
      ],
    },
    {
      initials: 'LB',
      name: t('about.founder2Name'),
      role: t('about.founder2Role'),
      bio: t('about.founder2Bio'),
      highlights: [
        { icon: Lightbulb, text: t('about.founder2Highlight1') },
        { icon: BarChart3, text: t('about.founder2Highlight2') },
        { icon: CheckCircle, text: t('about.founder2Highlight3') },
      ],
    },
  ];

  const investmentTeam = [
    {
      initials: 'MD',
      name: t('about.team1Name'),
      role: t('about.team1Role'),
    },
    {
      initials: 'SC',
      name: t('about.team2Name'),
      role: t('about.team2Role'),
    },
    {
      initials: 'PL',
      name: t('about.team3Name'),
      role: t('about.team3Role'),
    },
    {
      initials: 'AR',
      name: t('about.team4Name'),
      role: t('about.team4Role'),
    },
  ];

  return (
    <div data-testid="about-page" className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">{t('nav.about')}</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">{t('about.title')}</h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Trajectory Section */}
      <section className="py-24 md:py-32 bg-slate-900 text-white" data-testid="vision-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline text-amber-500 mb-4">{t('about.visionLabel')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{t('about.visionTitle')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {t('about.visionText')}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                {t('about.visionText2')}
              </p>
            </div>
            <div>
              <p className="overline text-amber-500 mb-4">{t('about.trajectoryLabel')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{t('about.trajectoryTitle')}</h2>
              <div className="section-divider mb-8" />
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold">2025</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t('about.trajectory1')}</h4>
                    <p className="text-slate-400 text-sm">{t('about.trajectory1Text')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold">2027</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t('about.trajectory2')}</h4>
                    <p className="text-slate-400 text-sm">{t('about.trajectory2Text')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold">2029</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t('about.trajectory3')}</h4>
                    <p className="text-slate-400 text-sm">{t('about.trajectory3Text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiating Factors */}
      <section className="py-24 md:py-32 bg-white" data-testid="differentiators-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{t('about.diffTitle')}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('about.diffTitle')}</h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {t('about.diffSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 border-t-2 border-transparent hover:border-amber-700 transition-all card-hover"
                data-testid={`differentiator-${index}`}
              >
                <item.icon className="w-10 h-10 text-amber-700 mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="who-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline mb-4">{t('about.whoTitle')}</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('about.whoTitle')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {t('about.whoText1')}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t('about.whoText2')}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Modern building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-white" data-testid="philosophy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-4">{t('about.philosophyTitle')}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('about.philosophyTitle')}</h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('about.philosophyText')}
            </p>
          </div>
        </div>
      </section>

      {/* Fund Architecture */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="architecture-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-slate-900 p-8 md:p-12 text-white">
                <h3 className="font-serif text-2xl mb-8">{t('about.architectureTitle')}</h3>
                <ul className="space-y-4">
                  {structures.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="overline mb-4">{t('about.architectureTitle')}</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('about.architectureTitle')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed">
                {t('about.architectureText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 md:py-32 bg-white" data-testid="governance-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{t('about.governanceTitle')}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('about.governanceTitle')}</h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {t('about.governanceText')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governance.map((item, index) => (
              <div key={index} className="bg-slate-50 p-8 card-hover" data-testid={`governance-card-${index}`}>
                <item.icon className="w-10 h-10 text-amber-700 mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{t('about.teamTitle')}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('about.teamTitle')}</h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {t('about.teamSubtitle')}
            </p>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-8 md:p-10 shadow-sm" 
                data-testid={`founder-card-${index}`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-slate-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                    <p className="text-amber-700 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="space-y-3 border-t border-slate-200 pt-6">
                  {member.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-3">
                      <highlight.icon className="w-5 h-5 text-amber-700 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Investment Team */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl text-center mb-10">{t('about.investmentTeamTitle')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {investmentTeam.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 text-center card-hover"
                  data-testid={`team-member-${index}`}
                >
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-serif text-lg">{member.initials}</span>
                  </div>
                  <h4 className="font-medium text-slate-900">{member.name}</h4>
                  <p className="text-sm text-amber-700">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
