'use client';

import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/about', label: language === 'fr' ? 'À Propos' : 'About' },
    { path: '/strategies', label: language === 'fr' ? 'Stratégies' : 'Strategies' },
    { path: '/governance', label: 'Gouvernance' },
    { path: '/investors', label: language === 'fr' ? 'Investisseurs' : 'Investors' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#1E2A3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">FINXIA</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              {language === 'fr'
                ? 'Véhicule d\'investissement propriétaire structuré en SCSp luxembourgeoise, déployant des stratégies institutionnelles en datacenter AI, hôtellerie premium et résidentiel flexible.'
                : 'Proprietary investment vehicle structured as a Luxembourg SCSp, deploying institutional strategies in AI datacenters, premium hospitality, and flexible residential.'}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{language === 'fr' ? 'Navigation' : 'Quick Links'}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@finxiacapital.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@finxiacapital.com
              </a>
              <a
                href="https://linkedin.com/company/finxiacapital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs leading-relaxed">
            {language === 'fr'
              ? 'SCSp Luxembourg — Structure Propriétaire · Capital propre · Levier dette · Green Bond TITAN'
              : 'Luxembourg SCSp — Proprietary Structure · Equity Capital · Debt Leverage · TITAN Green Bond'}
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © {currentYear} FINXIA Capital S.à r.l.
          </p>
        </div>
      </div>
    </footer>
  );
}