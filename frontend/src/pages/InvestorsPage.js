import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Handshake, Target, Eye, FileText, CheckCircle, ArrowRight } from 'lucide-react';

export default function InvestorsPage() {
  const { t } = useLanguage();

  const values = [
    { icon: Handshake, title: t('investors.partnershipTitle'), text: t('investors.partnershipText') },
    { icon: Target, title: t('investors.alignmentTitle'), text: t('investors.alignmentText') },
    { icon: Eye, title: t('investors.transparencyTitle'), text: t('investors.transparencyText') },
    { icon: FileText, title: t('investors.reportingTitle'), text: t('investors.reportingText') },
  ];

  return (
    <div data-testid="investors-page" className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">{t('nav.investors')}</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">{t('investors.title')}</h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {t('investors.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            {t('investors.intro')}
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-32 bg-white" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 md:p-10 card-hover"
                data-testid={`value-card-${index}`}
              >
                <item.icon className="w-10 h-10 text-amber-700 mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ILPA Compliance */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="ilpa-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline mb-4">{t('investors.ilpaTitle')}</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">{t('investors.ilpaTitle')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t('investors.ilpaText')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Standardized reporting templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fee transparency and disclosure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Governance best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">ESG integration framework</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 p-8 md:p-12 text-white">
              <div className="text-5xl font-serif text-amber-500 mb-4">ILPA</div>
              <h3 className="text-xl mb-4">Institutional Limited Partners Association</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our commitment to ILPA standards ensures transparency, alignment, and institutional-grade governance for all investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-slate-900 text-white" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="overline text-amber-500 mb-4">{t('investors.cta')}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{t('investors.cta')}</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            {t('investors.ctaText')}
          </p>
          <Link
            to="/contact"
            data-testid="investor-contact-cta"
            className="btn-primary inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100"
          >
            {t('nav.contact')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
