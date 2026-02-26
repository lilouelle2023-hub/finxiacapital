import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Warehouse, Building, Home, TrendingUp, ArrowRight } from 'lucide-react';

export default function StrategiesPage() {
  const { t } = useLanguage();

  const strategies = [
    {
      icon: Warehouse,
      title: t('strategies.strategy1Title'),
      text: t('strategies.strategy1Text'),
      focus: t('strategies.strategy1Focus'),
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    },
    {
      icon: Building,
      title: t('strategies.strategy2Title'),
      text: t('strategies.strategy2Text'),
      focus: t('strategies.strategy2Focus'),
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    },
    {
      icon: Home,
      title: t('strategies.strategy3Title'),
      text: t('strategies.strategy3Text'),
      focus: t('strategies.strategy3Focus'),
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    },
    {
      icon: TrendingUp,
      title: t('strategies.strategy4Title'),
      text: t('strategies.strategy4Text'),
      focus: t('strategies.strategy4Focus'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    },
  ];

  return (
    <div data-testid="strategies-page" className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">{t('nav.strategies')}</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">{t('strategies.title')}</h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {t('strategies.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-24 md:py-32 bg-white" data-testid="strategies-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <div 
                key={index} 
                className="group bg-slate-50 overflow-hidden card-hover"
                data-testid={`strategy-card-${index}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={strategy.image}
                    alt={strategy.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <strategy.icon className="w-6 h-6 text-amber-700" strokeWidth={1.5} />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      {strategy.focus}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4">{strategy.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{strategy.text}</p>
                  
                  <div className="border-t border-slate-200 pt-6 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                          {t('strategies.philosophyLabel')}
                        </p>
                        <p className="text-sm text-slate-700">{t('strategies.methodologyText')}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                          {t('strategies.riskLabel')}
                        </p>
                        <p className="text-sm text-slate-700">{t('strategies.riskText')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24 md:py-32 bg-slate-900 text-white" data-testid="approach-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <p className="overline text-amber-500 mb-4">{t('strategies.methodologyLabel')}</p>
              <h2 className="font-serif text-3xl text-white mb-6">{t('strategies.methodologyLabel')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 leading-relaxed">
                {t('strategies.methodologyText')}
              </p>
            </div>
            <div>
              <p className="overline text-amber-500 mb-4">{t('strategies.riskLabel')}</p>
              <h2 className="font-serif text-3xl text-white mb-6">{t('strategies.riskLabel')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 leading-relaxed">
                {t('strategies.riskText')}
              </p>
            </div>
            <div>
              <p className="overline text-amber-500 mb-4">{t('strategies.horizonLabel')}</p>
              <h2 className="font-serif text-3xl text-white mb-6">{t('strategies.horizonLabel')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 leading-relaxed">
                {t('strategies.horizonText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
