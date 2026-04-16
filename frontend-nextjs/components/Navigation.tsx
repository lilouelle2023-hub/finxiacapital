'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  const navLinks = [
    { path: '/', label: language === 'fr' ? 'Accueil' : 'Home' },
    { path: '/about', label: language === 'fr' ? 'À Propos' : 'About' },
    { path: '/strategies', label: language === 'fr' ? 'Stratégies' : 'Strategies' },
    { path: '/governance', label: 'Gouvernance' },
    { path: '/european-approach', label: language === 'fr' ? 'Approche Européenne' : 'European Approach' },
    { path: '/investors', label: language === 'fr' ? 'Investisseurs' : 'Investors' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-serif text-2xl font-bold text-[#1E2A3A] hover:text-[#C45A3B] transition-colors">
            FINXIA
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  router.pathname === link.path
                    ? 'text-[#C45A3B]'
                    : 'text-slate-600 hover:text-[#C45A3B]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#C45A3B] transition-colors border border-slate-200 rounded-md hover:border-[#C45A3B]"
              data-testid="language-toggle"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  router.pathname === link.path
                    ? 'bg-[#C45A3B]/10 text-[#C45A3B]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md border border-slate-200"
            >
              <Globe className="w-4 h-4" />
              {language === 'fr' ? 'English' : 'Français'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}