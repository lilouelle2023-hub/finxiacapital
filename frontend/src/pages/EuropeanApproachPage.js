import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Building2, TrendingUp, CheckCircle } from 'lucide-react';

export default function EuropeanApproachPage() {
  const { t } = useLanguage();

  const countries = [
    { 
      key: 'france', 
      title: t('europe.france'), 
      text: t('europe.franceText'),
      flag: '🇫🇷',
      cities: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
      focus: ['Logistique', 'Hôtellerie', 'Résidentiel']
    },
    { 
      key: 'spain', 
      title: t('europe.spain'), 
      text: t('europe.spainText'),
      flag: '🇪🇸',
      cities: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'],
      focus: ['Logistique', 'Hôtellerie']
    },
    { 
      key: 'italy', 
      title: t('europe.italy'), 
      text: t('europe.italyText'),
      flag: '🇮🇹',
      cities: ['Milano', 'Roma', 'Firenze', 'Torino'],
      focus: ['Hôtellerie', 'Résidentiel']
    },
  ];

  return (
    <div data-testid="european-approach-page" className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">{t('nav.europeanApproach')}</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">{t('europe.title')}</h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {t('europe.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            {t('europe.intro')}
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-24 md:py-32 bg-white" data-testid="countries-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{t('europe.marketsLabel') || 'Nos Marchés'}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('europe.marketsTitle') || 'Zones d\'Investissement'}</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div 
                key={country.key}
                className="bg-slate-50 p-8 card-hover border-t-4 border-amber-700"
                data-testid={`country-card-${country.key}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{country.flag}</span>
                  <div>
                    <h3 className="font-serif text-2xl">{country.title}</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {country.text}
                </p>

                <div className="border-t border-slate-200 pt-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-amber-700" />
                    <span className="text-sm font-medium text-slate-700">{t('europe.keyCities') || 'Villes Clés'}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {country.cities.map((city, i) => (
                      <span key={i} className="text-xs bg-white px-3 py-1 text-slate-600 border border-slate-200">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-amber-700" />
                    <span className="text-sm font-medium text-slate-700">{t('europe.strategyFocus') || 'Stratégies'}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {country.focus.map((f, i) => (
                      <span key={i} className="text-xs bg-amber-50 px-3 py-1 text-amber-800 border border-amber-200">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-serif text-amber-700 mb-4">3</div>
              <p className="text-slate-600 font-medium">{t('europe.statCountries') || 'Pays Cibles'}</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-serif text-amber-700 mb-4">12+</div>
              <p className="text-slate-600 font-medium">{t('europe.statCities') || 'Métropoles Européennes'}</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-serif text-amber-700 mb-4">3</div>
              <p className="text-slate-600 font-medium">{t('europe.statStrategies') || 'Stratégies Immobilières'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-24 md:py-32 bg-white" data-testid="criteria-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline mb-4">{t('europe.criteriaLabel') || 'Critères de Sélection'}</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('europe.criteriaTitle') || 'Notre Approche de Sélection'}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t('europe.criteriaText') || 'Nous sélectionnons nos marchés selon des critères stricts de liquidité, de profondeur de marché et de potentiel de création de valeur.'}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{t('europe.criteria1') || 'Marchés liquides avec profondeur institutionnelle'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{t('europe.criteria2') || 'Dynamique démographique et économique positive'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{t('europe.criteria3') || 'Cadre réglementaire stable et transparent'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{t('europe.criteria4') || 'Accès à des partenaires locaux de qualité'}</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80" 
                alt="European cityscape"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diversification Strategy */}
      <section className="py-24 md:py-32 bg-slate-900 text-white" data-testid="diversification-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline text-amber-500 mb-4">{t('europe.diversificationTitle')}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{t('europe.diversificationTitle')}</h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('europe.diversificationText')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
