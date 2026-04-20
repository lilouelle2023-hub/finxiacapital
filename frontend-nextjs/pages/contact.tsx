import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Mail } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ContactPage() {
  const { t, language } = useLanguage();

  const investorTypes = [
    { value: 'institutional', label: t('contact.institutionalInvestor') },
    { value: 'family_office', label: t('contact.familyOffice') },
    { value: 'private', label: t('contact.privateInvestor') },
    { value: 'advisor', label: t('contact.advisor') },
    { value: 'other', label: t('contact.other') },
  ];

  // Breadcrumb Schema
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
        "name": language === 'fr' ? "Contact" : "Contact",
        "item": "https://finxiacapital.com/contact"
      }
    ]
  };

  return (
    <div data-testid="contact-page" className="pt-20">
      <SEO
        title="Contact — Nous Contacter | Finxia Capital"
        description="Contactez Finxia Capital pour toute demande d'investissement institutionnel. SCSp Luxembourg. Email: contact@finxiacapital.com"
        canonical="https://finxiacapital.com/contact/"
        keywords="contact Finxia Capital Luxembourg, investissement alternatif contact, SCSp Luxembourg contact, demande investisseur institutionnel"
        breadcrumbSchema={breadcrumbSchema}
        language="fr"
        ogLocale="fr_FR"
        hreflangFr="https://finxiacapital.com/contact/"
        hreflangEn="https://finxiacapital.com/en/contact/"
        hreflangDefault="https://finxiacapital.com/contact/"
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">{t('nav.contact')}</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">{t('contact.title')}</h1>
            <div className="section-divider mb-8" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32 bg-white" data-testid="form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl mb-8">{t('contact.formTitle')}</h2>
              
              {/* Contact Form */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/contact?success=true"
                className="space-y-6" 
                data-testid="contact-form"
              >
                {/* Hidden fields for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="language" value={language} />
                
                {/* Honeypot field for spam protection */}
                <p style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.nameLabel')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 placeholder-slate-400 transition-colors"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.emailLabel')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 placeholder-slate-400 transition-colors"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.companyLabel')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder={t('contact.companyPlaceholder')}
                      className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 placeholder-slate-400 transition-colors"
                      data-testid="input-company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.investorTypeLabel')}
                    </label>
                    <select
                      name="investor_type"
                      className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 transition-colors"
                      data-testid="select-investor-type"
                    >
                      <option value="">{t('contact.investorTypePlaceholder')}</option>
                      {investorTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.messageLabel')} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 placeholder-slate-400 transition-colors resize-none"
                    data-testid="textarea-message"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  data-testid="submit-button"
                >
                  {t('contact.submitButton')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-slate-50 p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#C45A3B]" />
                    <h3 className="font-serif text-lg">
                      {language === 'fr' ? 'Adresse principale' : 'Main Address'}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <strong>Finxia Capital S.C.Sp</strong><br />
                    [Adresse Luxembourg à compléter]<br />
                    Luxembourg
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-slate-800 text-sm mb-2">
                    {language === 'fr' ? 'Bureau France' : 'France Office'}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Paris, France
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-[#C45A3B]" />
                    <h3 className="font-serif text-lg">
                      {language === 'fr' ? 'Emails' : 'Emails'}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">
                        {language === 'fr' ? 'Contact investisseurs' : 'Investor Contact'}
                      </p>
                      <a 
                        href="mailto:invest@finxiacapital.com" 
                        className="text-[#C45A3B] hover:underline"
                      >
                        invest@finxiacapital.com
                      </a>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">
                        {language === 'fr' ? 'Contact général' : 'General Contact'}
                      </p>
                      <a 
                        href="mailto:contact@finxiacapital.com" 
                        className="text-[#C45A3B] hover:underline"
                      >
                        contact@finxiacapital.com
                      </a>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Lila Benhammou, CIO</p>
                      <a 
                        href="mailto:lb@finxiacapital.com" 
                        className="text-[#C45A3B] hover:underline"
                      >
                        lb@finxiacapital.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
