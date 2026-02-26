import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EuropeMap } from '../components/EuropeMap';
import { MapPin } from 'lucide-react';

export default function EuropeanApproachPage() {
  const { t } = useLanguage();
  const [activeCountry, setActiveCountry] = useState(null);

  const countryInfo = {
    france: { title: t('europe.france'), text: t('europe.franceText') },
    germany: { title: t('europe.germany'), text: t('europe.germanyText') },
    benelux: { title: t('europe.benelux'), text: t('europe.beneluxText') },
    spain: { title: t('europe.spain'), text: t('europe.spainText') },
    italy: { title: t('europe.italy'), text: t('europe.italyText') },
  };

  const countries = [
    { key: 'france', title: t('europe.france'), text: t('europe.franceText') },
    { key: 'germany', title: t('europe.germany'), text: t('europe.germanyText') },
    { key: 'benelux', title: t('europe.benelux'), text: t('europe.beneluxText') },
    { key: 'spain', title: t('europe.spain'), text: t('europe.spainText') },
    { key: 'italy', title: t('europe.italy'), text: t('europe.italyText') },
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

      {/* Interactive Map Section */}
      <section className="py-24 md:py-32 bg-white" data-testid="map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <EuropeMap 
                onCountryHover={setActiveCountry} 
                activeCountry={activeCountry}
              />
              <p className="text-center text-sm text-slate-400 mt-4">
                Hover over countries to explore
              </p>
            </div>

            {/* Country Info */}
            <div className="order-1 lg:order-2">
              {activeCountry ? (
                <div className="animate-fade-in" data-testid="country-info">
                  <p className="overline mb-4">{countryInfo[activeCountry]?.title}</p>
                  <h2 className="font-serif text-3xl mb-6">{countryInfo[activeCountry]?.title}</h2>
                  <div className="section-divider mb-8" />
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {countryInfo[activeCountry]?.text}
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {countries.map((country) => (
                    <div 
                      key={country.key}
                      className="p-6 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors"
                      onMouseEnter={() => setActiveCountry(country.key)}
                      onMouseLeave={() => setActiveCountry(null)}
                      data-testid={`country-card-${country.key}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-5 h-5 text-amber-700" />
                        <h3 className="font-serif text-xl">{country.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm">{country.text}</p>
                    </div>
                  ))}
                </div>
              )}
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
