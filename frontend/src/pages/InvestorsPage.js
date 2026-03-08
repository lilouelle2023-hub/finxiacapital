import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { Handshake, Target, Eye, FileText, CheckCircle, ArrowRight } from 'lucide-react';

export default function InvestorsPage() {
  const { language } = useLanguage();

  const values = [
    { 
      icon: Handshake, 
      title: language === 'fr' ? 'Partenariats Long Terme' : 'Long-term Partnerships',
      text: language === 'fr'
        ? 'Nous priorisons la construction de relations durables avec nos investisseurs, basées sur la confiance mutuelle et des objectifs d\'investissement partagés.'
        : 'We prioritize building lasting relationships with our investors, based on mutual trust and shared investment objectives.'
    },
    { 
      icon: Target, 
      title: language === 'fr' ? 'Alignement des Intérêts' : 'Alignment of Interests',
      text: language === 'fr'
        ? 'Notre structure de frais et approche d\'investissement assurent un fort alignement entre les intérêts de notre équipe et de nos investisseurs.'
        : 'Our fee structure and investment approach ensure strong alignment between the interests of our team and our investors.'
    },
    { 
      icon: Eye, 
      title: language === 'fr' ? 'Transparence' : 'Transparency',
      text: language === 'fr'
        ? 'Un reporting régulier et complet fournit aux investisseurs une visibilité complète sur la performance du portefeuille et les expositions aux risques.'
        : 'Regular and comprehensive reporting provides investors with full visibility into portfolio performance and risk exposures.'
    },
    { 
      icon: FileText, 
      title: language === 'fr' ? 'Reporting INREV' : 'INREV Reporting',
      text: language === 'fr'
        ? 'Reporting de qualité institutionnelle conforme aux standards INREV et meilleures pratiques internationales sous 45 jours.'
        : 'Institutional-grade reporting compliant with INREV standards and international best practices within 45 days.'
    },
  ];

  return (
    <div data-testid="investors-page" className="pt-20">
      <Helmet>
        <title>Espace Investisseurs · FINXIA Capital</title>
        <meta name="description" content="Espace dédié aux investisseurs institutionnels. Reporting INREV, gouvernance ILPA et transparence totale." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">
              {language === 'fr' ? 'Investisseurs' : 'Investors'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' 
                ? 'Partenariats Institutionnels'
                : 'Institutional Partnerships'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'FINXIA Capital s\'adresse exclusivement aux investisseurs professionnels au sens de MiFID II. Notre engagement : transparence, alignement et excellence opérationnelle.'
                : 'FINXIA Capital is exclusively for professional investors within the meaning of MiFID II. Our commitment: transparency, alignment and operational excellence.'}
            </p>
          </div>
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
                <item.icon className="w-10 h-10 text-[#C45A3B] mb-6" strokeWidth={1.5} />
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
              <p className="overline mb-4">
                {language === 'fr' ? 'Standards ILPA' : 'ILPA Standards'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                {language === 'fr' ? 'Gouvernance Institutionnelle' : 'Institutional Governance'}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {language === 'fr'
                  ? 'Nos cadres de reporting et gouvernance adhèrent aux directives ILPA (Institutional Limited Partners Association), garantissant les plus hauts standards de transparence et d\'alignement.'
                  : 'Our reporting and governance frameworks adhere to ILPA (Institutional Limited Partners Association) guidelines, ensuring the highest standards of transparency and alignment.'}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    {language === 'fr' ? 'Templates de reporting standardisés' : 'Standardized reporting templates'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    {language === 'fr' ? 'Transparence sur les frais' : 'Fee transparency and disclosure'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    {language === 'fr' ? 'Meilleures pratiques de gouvernance' : 'Governance best practices'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    {language === 'fr' ? 'Cadre d\'intégration ESG' : 'ESG integration framework'}
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1E2A3A] p-10 text-white">
              <div className="text-5xl font-serif text-[#C45A3B] mb-4">ILPA</div>
              <h3 className="text-xl mb-4">Institutional Limited Partners Association</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'Notre engagement envers les standards ILPA garantit transparence, alignement et gouvernance institutionnelle pour tous nos investisseurs.'
                  : 'Our commitment to ILPA standards ensures transparency, alignment, and institutional-grade governance for all investors.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#1E2A3A] text-white" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="overline text-[#C45A3B] mb-4">
            {language === 'fr' ? 'Relations Investisseurs' : 'Investor Relations'}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            {language === 'fr' ? 'Entrons en Contact' : 'Let\'s Connect'}
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Pour les demandes d\'investisseurs institutionnels, veuillez contacter notre équipe relations investisseurs.'
              : 'For institutional investor inquiries, please contact our investor relations team.'}
          </p>
          <Link
            to="/contact"
            data-testid="investor-contact-cta"
            className="btn-primary inline-flex items-center gap-2"
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
