import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const STORAGE_KEY = 'finxia-consent';
const CONSENT_DURATION_MS = 6 * 30 * 24 * 60 * 60 * 1000; // ~6 months, matches /cookies policy

type ConsentValue = 'accepted' | 'rejected';

type StoredConsent = {
  value: ConsentValue;
  timestamp: number;
};

/**
 * Reads the current stored consent, if any, and treats it as expired (and
 * therefore absent) once older than CONSENT_DURATION_MS.
 */
function readStoredConsent(): StoredConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed?.value || !parsed?.timestamp) return null;
    if (Date.now() - parsed.timestamp > CONSENT_DURATION_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Public helper other components (e.g. an analytics loader) can use to check
 * whether the visitor has accepted non-essential cookies, without needing to
 * know the storage key or expiry logic.
 */
export function hasAcceptedCookies(): boolean {
  return readStoredConsent()?.value === 'accepted';
}

export default function CookieConsent() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readStoredConsent() === null);
  }, []);

  const store = (value: ConsentValue) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, timestamp: Date.now() } satisfies StoredConsent)
      );
    } catch {
      // localStorage unavailable (private browsing, etc.) — fail silently,
      // the banner will simply reappear on the next visit.
    }
    setVisible(false);
  };

  if (!visible) return null;

  const t = {
    fr: {
      message:
        "Ce site utilise des cookies strictement nécessaires à son fonctionnement et, si vous l'acceptez, des cookies de mesure d'audience anonymisée (Plausible). Aucun cookie publicitaire ou de suivi tiers n'est utilisé.",
      link: 'En savoir plus',
      reject: 'Refuser',
      accept: 'Tout accepter',
    },
    en: {
      message:
        "This site uses cookies strictly necessary for it to function and, if you accept, anonymized audience-measurement cookies (Plausible). No advertising or third-party tracking cookies are used.",
      link: 'Learn more',
      reject: 'Reject',
      accept: 'Accept all',
    },
  }[language];

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={language === 'fr' ? 'Consentement aux cookies' : 'Cookie consent'}
      data-testid="cookie-consent-banner"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-slate-200 bg-white/98 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600 leading-relaxed">
            {t.message}{' '}
            <Link
              href={language === 'fr' ? '/cookies' : '/cookies'}
              className="text-[#C45A3B] hover:underline font-medium whitespace-nowrap"
            >
              {t.link}
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            data-testid="cookie-consent-reject"
            onClick={() => store('rejected')}
            className="px-5 py-2.5 text-sm font-medium text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
          >
            {t.reject}
          </button>
          <button
            type="button"
            data-testid="cookie-consent-accept"
            onClick={() => store('accepted')}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#C45A3B] hover:bg-[#A84A2F] transition-colors"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
