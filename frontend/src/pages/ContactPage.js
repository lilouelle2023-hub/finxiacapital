import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investor_type: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const investorTypes = [
    { value: 'institutional', label: t('contact.institutionalInvestor') },
    { value: 'family_office', label: t('contact.familyOffice') },
    { value: 'private', label: t('contact.privateInvestor') },
    { value: 'advisor', label: t('contact.advisor') },
    { value: 'other', label: t('contact.other') },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post(`${API}/contact`, {
        ...formData,
        language,
      });
      
      setStatus({ type: 'success', message: t('contact.successText') });
      setFormData({
        name: '',
        email: '',
        company: '',
        investor_type: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({ type: 'error', message: t('contact.errorText') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="pt-20">
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
              
              {status.type && (
                <div 
                  className={`mb-8 p-4 flex items-start gap-3 ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                  data-testid="form-status"
                >
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium">
                      {status.type === 'success' ? t('contact.successTitle') : 'Error'}
                    </p>
                    <p className="text-sm">{status.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.nameLabel')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.company}
                      onChange={handleChange}
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
                      value={formData.investor_type}
                      onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 placeholder-slate-400 transition-colors resize-none"
                    data-testid="textarea-message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="submit-button"
                >
                  {isSubmitting ? t('contact.submitting') : t('contact.submitButton')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-slate-50 p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#C45A3B]" />
                    <h3 className="font-serif text-lg">{t('contact.addressTitle')}</h3>
                  </div>
                  <p className="text-slate-600 text-sm">
                    {t('contact.addressLine1')}<br />
                    {t('contact.addressLine2')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-[#C45A3B]" />
                    <h3 className="font-serif text-lg">{t('contact.emailTitle')}</h3>
                  </div>
                  <a 
                    href="mailto:contact@finxiacapital.com" 
                    className="text-slate-600 text-sm hover:text-[#C45A3B] transition-colors"
                  >
                    {t('contact.email')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
