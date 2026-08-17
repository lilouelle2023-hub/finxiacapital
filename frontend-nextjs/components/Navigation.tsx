'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isPressOpen, setIsPressOpen] = useState(false);
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
    setIsResourcesOpen(false);
    setIsPressOpen(false);
  }, [router.pathname]);

  const navLinks = [
    { path: '/about', label: language === 'fr' ? 'À Propos' : 'About' },
    { path: '/strategies', label: language === 'fr' ? 'Stratégies' : 'Strategies' },
    { path: '/governance', label: language === 'fr' ? 'Gouvernance & Risques' : 'Governance & Risks' },
    { path: '/european-approach', label: language === 'fr' ? 'Approche Européenne' : 'European Approach' },
    { path: '/investors', label: language === 'fr' ? 'Partenaires Institutionnels' : 'Institutional Partners' },
  ];

  const resourcesLinks = [
    { path: '/blog/', label: 'Blog' },
    { path: '/podcast/', label: 'Podcast' },
    { path: '/newsletter/', label: 'Newsletter' },
    { path: '/guides/eed-directive-datacenter-2026/', label: language === 'fr' ? 'Guide EED Datacenters 2026' : 'EED Datacenters Guide 2026' },
  ];

  const pressLinks = [
    { path: language === 'fr' ? '/lila-benhammou' : '/en/lila-benhammou', label: 'Lila Benhammou' },
    { path: language === 'fr' ? '/jean-pierre-veron' : '/en/jean-pierre-veron', label: 'Jean-Pierre Véron' },
  ];

  const secondaryLinks = [
    { path: '/contact', label: 'Contact' },
  ];

  const isResourcesActive = router.pathname.startsWith('/guides') || router.pathname.startsWith('/blog') || router.pathname.startsWith('/auteurs') || router.pathname.startsWith('/podcast') || router.pathname.startsWith('/newsletter');
  const isPressActive = router.pathname === '/lila-benhammou' || router.pathname === '/lila-benhammou/' || router.pathname === '/jean-pierre-veron' || router.pathname === '/jean-pierre-veron/' || router.pathname === '/en/lila-benhammou' || router.pathname === '/en/lila-benhammou/' || router.pathname === '/en/jean-pierre-veron' || router.pathname === '/en/jean-pierre-veron/';

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
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path + '/'}
                className={`whitespace-nowrap flex-shrink-0 text-sm font-medium tracking-wide transition-colors link-hover ${
                  router.pathname === link.path || router.pathname === link.path + '/'
                    ? 'text-[#C45A3B]'
                    : 'text-slate-700 hover:text-[#C45A3B]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Ressources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                data-testid="nav-resources-trigger"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`whitespace-nowrap flex-shrink-0 inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors link-hover ${
                  isResourcesActive ? 'text-[#C45A3B]' : 'text-slate-700 hover:text-[#C45A3B]'
                }`}
              >
                {language === 'fr' ? 'Ressources' : 'Resources'}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isResourcesOpen && (
                <div
                  data-testid="nav-resources-dropdown"
                  className="absolute top-full left-0 pt-2 min-w-[240px]"
                >
                  <div className="bg-white border border-slate-200 shadow-lg py-2">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          router.pathname.startsWith(link.path.replace(/\/$/, ''))
                            ? 'text-[#C45A3B] bg-slate-50'
                            : 'text-slate-700 hover:text-[#C45A3B] hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Presse dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPressOpen(true)}
              onMouseLeave={() => setIsPressOpen(false)}
            >
              <button
                data-testid="nav-press-trigger"
                onClick={() => setIsPressOpen(!isPressOpen)}
                className={`whitespace-nowrap flex-shrink-0 inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors link-hover ${
                  isPressActive ? 'text-[#C45A3B]' : 'text-slate-700 hover:text-[#C45A3B]'
                }`}
              >
                {language === 'fr' ? 'Presse' : 'Press'}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isPressOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPressOpen && (
                <div
                  data-testid="nav-press-dropdown"
                  className="absolute top-full left-0 pt-2 min-w-[200px]"
                >
                  <div className="bg-white border border-slate-200 shadow-lg py-2">
                    {pressLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path + '/'}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          router.pathname === link.path || router.pathname === link.path + '/'
                            ? 'text-[#C45A3B] bg-slate-50'
                            : 'text-slate-700 hover:text-[#C45A3B] hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {secondaryLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path + '/'}
                className={`whitespace-nowrap flex-shrink-0 text-sm font-medium tracking-wide transition-colors link-hover ${
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

            {/* Mobile Ressources group */}
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                {language === 'fr' ? 'Ressources' : 'Resources'}
              </p>
              {resourcesLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block py-2 text-base font-medium text-slate-700 hover:text-[#C45A3B]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Presse group */}
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                {language === 'fr' ? 'Presse' : 'Press'}
              </p>
              {pressLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path + '/'}
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

            {secondaryLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path + '/'}
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
