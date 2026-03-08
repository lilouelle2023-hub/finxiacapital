import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export const Navigation = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/strategies', label: t('nav.strategies') },
    { to: '/governance', label: t('nav.governance') },
    { to: '/european-approach', label: t('nav.europeanApproach') },
    { to: '/investors', label: t('nav.investors') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_silly-mcclintock-1/artifacts/wllq2664_finxia_LOGO_DEFINITIF.png" 
              alt="FINXIA CAPITAL" 
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-link-${link.to.slice(1)}`}
                className={`text-sm font-medium tracking-wide transition-colors link-hover ${
                  isScrolled || !isHomePage
                    ? 'text-slate-700 hover:text-[#C45A3B]'
                    : 'text-white/90 hover:text-white'
                } ${location.pathname === link.to ? 'text-[#C45A3B]' : ''}`}
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
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
              className={`lg:hidden p-2 rounded transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
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
                key={link.to}
                to={link.to}
                data-testid={`mobile-nav-link-${link.to.slice(1)}`}
                className={`block py-2 text-base font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-amber-700'
                    : 'text-slate-700 hover:text-amber-700'
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
};
