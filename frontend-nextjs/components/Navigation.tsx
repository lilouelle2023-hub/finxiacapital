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
    { path: '/about', label: language === 'fr' ? 'À Propos' : 'About' },
    { path: '/strategies', label: language === 'fr' ? 'Stratégies' : 'Strategies' },
    { path: '/governance', label: language === 'fr' ? 'Gouvernance & Risques' : 'Governance & Risks' },
    { path: '/european-approach', label: language === 'fr' ? 'Approche Européenne' : 'European Approach' },
    { path: '/investors', label: language === 'fr' ? 'Investisseurs' : 'Investors' },
    { path: '/blog', label: 'Blog' },
    { path: '/press', label: language === 'fr' ? 'Presse' : 'Press' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm border-b border-slate-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/logo-finxia.png" 
              alt="FINXIA Capital - Gestion d'Actifs Alternatifs Luxembourg" 
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path + '/'}
                className={`text-sm font-medium tracking-wide transition-colors link-hover ${
                  router.pathname === link.path || router.pathname === link.path + '/'
                    ? 'text-[#C45A3B]'
                    : 'text-slate-700 hover:text-[#C45A3B]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              data-testid="language-toggle"
              className="flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-colors text-slate-700 hover:bg-slate-100"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
              className="lg:hidden p-2 rounded transition-colors text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path + '/'}
                data-testid={`mobile-nav-link-${link.path.slice(1)}`}
                className={`block py-2 text-base font-medium transition-colors ${
                  router.pathname === link.path || router.pathname === link.path + '/'
                    ? 'text-[#C45A3B]'
                    : 'text-slate-700 hover:text-[#C45A3B]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}