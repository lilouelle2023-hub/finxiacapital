import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/strategies', label: t('nav.strategies') },
    { to: '/risk-management', label: t('nav.riskManagement') },
    { to: '/european-approach', label: t('nav.europeanApproach') },
    { to: '/investors', label: t('nav.investors') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-slate-900 text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_silly-mcclintock-1/artifacts/fd5q9ulh_image.png" 
              alt="FINXIA CAPITAL" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              {t('footer.description')}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{t('contact.addressLine1')}, {t('contact.addressLine2')}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@finxiacapital.com" className="text-sm hover:text-white transition-colors">
                  contact@finxiacapital.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-slate-400 text-sm hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#terms" className="text-slate-400 text-sm hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-slate-400 text-sm hover:text-white transition-colors">
                  {t('footer.disclaimer')}
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-slate-400 text-sm hover:text-white transition-colors">
                  {t('footer.cookies')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">{t('footer.copyright')}</p>
            <p className="text-slate-500 text-xs text-center md:text-right max-w-2xl">
              {t('footer.disclaimerText')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
