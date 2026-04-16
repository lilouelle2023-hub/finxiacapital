import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { to: '/about', label: language === 'fr' ? 'À Propos' : 'About' },
    { to: '/strategies', label: language === 'fr' ? 'Stratégies' : 'Strategies' },
    { to: '/governance', label: language === 'fr' ? 'Gouvernance & Risques' : 'Governance & Risks' },
    { to: '/european-approach', label: language === 'fr' ? 'Approche Européenne' : 'European Approach' },
    { to: '/investors', label: language === 'fr' ? 'Investisseurs' : 'Investors' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#1E2A3A] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_silly-mcclintock-1/artifacts/wllq2664_finxia_LOGO_DEFINITIF.png" 
              alt="FINXIA CAPITAL" 
              className="h-14 w-auto mb-6"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              {language === 'fr'
                ? 'Véhicule d\'investissement propriétaire structuré en SCSp luxembourgeoise, déployant des stratégies institutionnelles en datacenter AI, hôtellerie premium et résidentiel flexible.'
                : 'Proprietary investment vehicle structured as a Luxembourg SCSp, deploying institutional strategies in AI datacenters, premium hospitality, and flexible residential.'}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Luxembourg, Grand Duchy of Luxembourg</span>
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
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
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
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              {language === 'fr' ? 'Légal' : 'Legal'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-slate-400 text-sm hover:text-white transition-colors">
                  {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="#terms" className="text-slate-400 text-sm hover:text-white transition-colors">
                  {language === 'fr' ? 'Conditions d\'Utilisation' : 'Terms of Use'}
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-slate-400 text-sm hover:text-white transition-colors">
                  {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-500 text-xs leading-relaxed mb-4">
            {language === 'fr'
              ? 'FINXIA Capital est un fonds d\'investissement alternatif réservé aux investisseurs professionnels au sens de MiFID II. Les investissements dans des fonds alternatifs comportent des risques significatifs, notamment un risque de perte en capital. Les performances passées ne préjugent pas des performances futures. Ce site ne constitue pas une offre de vente ni une sollicitation d\'achat de titres.'
              : 'FINXIA Capital is an alternative investment fund reserved for professional investors within the meaning of MiFID II. Investments in alternative funds carry significant risks, including risk of capital loss. Past performance is not indicative of future results. This website does not constitute an offer to sell or a solicitation to buy securities.'}
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            {language === 'fr'
              ? 'SCSp Luxembourg — Structure Propriétaire · Capital propre · Levier dette · Green Bond TITAN'
              : 'Luxembourg SCSp — Proprietary Structure · Equity Capital · Debt Leverage · TITAN Green Bond'}
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © 2025 FINXIA Capital S.à r.l.
          </p>
        </div>
      </div>
    </footer>
  );
};
