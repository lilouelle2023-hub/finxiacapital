'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Download, FileText, Shield, Cookie } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import WhitepaperModal from '@/components/WhitepaperModal';

export default function Footer() {
  const context = useLanguage();
  const language = context?.language || 'fr';
  const currentYear = new Date().getFullYear();
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

  const footerLinks = [
    { path: '/about', label: language === 'fr' ? 'À Propos' : 'About' },
    { path: '/strategies', label: language === 'fr' ? 'Stratégies' : 'Strategies' },
    { path: '/governance', label: language === 'fr' ? 'Gouvernance' : 'Governance' },
    { path: '/investors', label: language === 'fr' ? 'Investisseurs' : 'Investors' },
    { path: '/contact', label: 'Contact' },
  ];

  const legalLinks = [
    { path: '/mentions-legales', label: language === 'fr' ? 'Mentions légales' : 'Legal Notice', icon: FileText },
    { path: '/privacy-policy', label: language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy', icon: Shield },
    { path: language === 'fr' ? '/cookies' : '/en/cookies', label: language === 'fr' ? 'Politique cookies' : 'Cookie Policy', icon: Cookie },
  ];

  return (
    <footer className="bg-[#1E2A3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
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
            <h4 className="font-serif text-lg mb-4">{language === 'fr' ? 'Légal' : 'Legal'}</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="/newsletter/" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 mb-2">📧 Newsletter</a><a href="mailto:contact@finxiacapital.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@finxiacapital.com
              </a>
              {/* LinkedIn — à réactiver quand la page entreprise sera créée
              <a
                href="https://linkedin.com/company/finxiacapital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              */}
            </div>
          </div>
        </div>

        {/* White Paper Download */}
        <div className="border-t border-slate-700 pt-8 pb-6">
          <p className="text-slate-400 text-xs">
            {language === 'fr' ? 'Livre Blanc complet (PDF, 60+ pages) — ' : 'Complete White Paper (PDF, 60+ pages) — '}
            <button
              type="button"
              onClick={() => setWhitepaperOpen(true)}
              data-testid="whitepaper-cta-footer"
              className="text-[#C45A3B] hover:underline inline-flex items-center gap-1 font-medium"
            >
              <Download className="w-3 h-3" />
              {language === 'fr' ? 'Télécharger' : 'Download'}
            </button>
          </p>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs leading-relaxed">
            {language === 'fr'
              ? 'SCSp Luxembourg — Véhicule Propriétaire · Capital Propre · Levier Dette · Green Bond TITAN DC AI'
              : 'Luxembourg SCSp — Proprietary Vehicle · Own Capital · Debt Leverage · TITAN DC AI Green Bond'}
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © {currentYear} FINXIA Capital S.à r.l.
          </p>
        </div>
      </div>
      <WhitepaperModal isOpen={whitepaperOpen} onClose={() => setWhitepaperOpen(false)} />
    </footer>
  );
}
