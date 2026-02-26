import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Shield, Target, Building2, Layers } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();

  const pillars = [
    { icon: Shield, title: t('home.pillar1Title'), text: t('home.pillar1Text') },
    { icon: Target, title: t('home.pillar2Title'), text: t('home.pillar2Text') },
    { icon: Building2, title: t('home.pillar3Title'), text: t('home.pillar3Text') },
    { icon: Layers, title: t('home.pillar4Title'), text: t('home.pillar4Text') },
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" data-testid="hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <p className="overline mb-6 text-amber-500 animate-fade-in">FINXIA CAPITAL</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-slide-up">
              {t('hero.headline')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 animate-slide-up stagger-1">
              {t('hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
              <Link
                to="/strategies"
                data-testid="hero-cta-strategies"
                className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100"
              >
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-cta-contact"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 md:py-32 bg-white" data-testid="who-we-are-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline mb-4">{t('home.whoWeAre')}</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('home.whoWeAre')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {t('home.whoWeAreText')}
              </p>
              <Link
                to="/about"
                data-testid="learn-more-about"
                className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-amber-700 transition-colors"
              >
                {t('home.learnMore')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Modern architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-slate-900 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach Section */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="approach-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="overline mb-4">{t('home.approachTitle')}</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('home.approachTitle')}</h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('home.approachText')}
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-24 md:py-32 bg-white" data-testid="pillars-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">{t('home.pillarsTitle')}</p>
            <h2 className="font-serif text-3xl md:text-4xl">{t('home.pillarsTitle')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 card-hover"
                data-testid={`pillar-card-${index}`}
              >
                <pillar.icon className="w-10 h-10 text-amber-700 mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-4">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Framework Section */}
      <section className="py-24 md:py-32 bg-slate-900 text-white" data-testid="framework-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline text-amber-500 mb-4">{t('home.governanceTitle')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{t('home.governanceTitle')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {t('home.governanceText')}
              </p>
              <Link
                to="/about"
                data-testid="learn-more-governance"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-amber-500 transition-colors"
              >
                {t('home.learnMore')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-3xl font-serif text-amber-500 mb-2">RAIF</div>
                <p className="text-slate-400 text-sm">Luxembourg Structure</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-3xl font-serif text-amber-500 mb-2">AIFMD</div>
                <p className="text-slate-400 text-sm">Compliant Framework</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-3xl font-serif text-amber-500 mb-2">ILPA</div>
                <p className="text-slate-400 text-sm">Reporting Standards</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="text-3xl font-serif text-amber-500 mb-2">ESG</div>
                <p className="text-slate-400 text-sm">Integrated Approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('hero.headline')}</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            {t('hero.subheadline')}
          </p>
          <Link
            to="/contact"
            data-testid="cta-contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            {t('hero.ctaSecondary')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
