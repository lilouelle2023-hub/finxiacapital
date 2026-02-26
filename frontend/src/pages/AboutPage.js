import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, Users, FileCheck, BarChart3, ShieldCheck, Award, Briefcase, Lightbulb } from 'lucide-react';

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

      {/* Who We Are */}
      <section className="py-24 md:py-32 bg-white" data-testid="who-section">
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
      <section className="py-24 md:py-32 bg-slate-50" data-testid="philosophy-section">
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
      <section className="py-24 md:py-32 bg-white" data-testid="architecture-section">
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
      <section className="py-24 md:py-32 bg-slate-50" data-testid="governance-section">
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
              <div key={index} className="bg-white p-8 card-hover" data-testid={`governance-card-${index}`}>
                <item.icon className="w-10 h-10 text-amber-700 mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
