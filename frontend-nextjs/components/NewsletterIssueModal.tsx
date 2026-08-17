import React, { useState, useEffect } from 'react';
import { X, Download, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface NewsletterIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NEWSLETTER_URL = '/newsletter/finxia-newsletter-t3-2026.html';
const FORM_NAME = 'newsletter-issue-download';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const PERSONAL_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com',
  'yahoo.com', 'yahoo.fr', 'yahoo.co.uk', 'yahoo.es', 'yahoo.it', 'ymail.com', 'rocketmail.com',
  'hotmail.com', 'hotmail.fr', 'hotmail.co.uk', 'hotmail.es', 'hotmail.it',
  'outlook.com', 'outlook.fr', 'live.com', 'live.fr', 'msn.com',
  'icloud.com', 'me.com', 'mac.com',
  'aol.com', 'aol.fr',
  'protonmail.com', 'proton.me', 'pm.me',
  'gmx.com', 'gmx.fr', 'gmx.de', 'gmx.net',
  'mail.com', 'tutanota.com', 'zoho.com', 'fastmail.com',
  'orange.fr', 'wanadoo.fr', 'free.fr', 'sfr.fr', 'laposte.net', 'neuf.fr', 'club-internet.fr',
  'bbox.fr', 'numericable.fr', 'aliceadsl.fr', 'noos.fr', 'cegetel.net', 'tiscali.fr',
  'web.de', 't-online.de', 'mailbox.org',
  'qq.com', '163.com', '126.com', 'sina.com', 'yandex.com', 'yandex.ru',
]);

function isCorporateEmail(email: string): boolean {
  const at = email.lastIndexOf('@');
  if (at === -1) return false;
  const domain = email.slice(at + 1).toLowerCase().trim();
  if (!domain || domain.indexOf('.') === -1) return false;
  return !PERSONAL_EMAIL_DOMAINS.has(domain);
}

export const NewsletterIssueModal: React.FC<NewsletterIssueModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setFirstName(''); setLastName(''); setCompany(''); setRole('');
        setEmail(''); setConsent(false); setSuccess(false); setError(null);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!consent) {
      setError(language === 'fr' ? 'Veuillez accepter les conditions RGPD pour continuer.' : 'Please accept the GDPR terms to continue.');
      return;
    }
    if (!isCorporateEmail(email)) {
      setError(language === 'fr'
        ? "Merci d'utiliser une adresse email professionnelle (entreprise, organisation). Les adresses personnelles (Gmail, Yahoo, Outlook, etc.) ne sont pas acceptées."
        : "Please use a professional email address (company, organization). Personal addresses (Gmail, Yahoo, Outlook, etc.) are not accepted.");
      return;
    }
    // Open the tab synchronously (inside the click handler) so popup blockers don't intercept it —
    // we navigate it to the newsletter URL once the lead is captured below.
    const newTab = window.open('', '_blank', 'noopener');
    setSubmitting(true);
    try {
      const submittedAt = new Date().toISOString();
      const payload = {
        'form-name': FORM_NAME,
        firstName, lastName, company, role, email,
        consent: 'yes',
        submittedAt,
        language,
      };
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      });
      if (newTab) {
        newTab.location.href = NEWSLETTER_URL;
      } else {
        window.location.href = NEWSLETTER_URL;
      }
      setSuccess(true);
      setTimeout(() => { onClose(); }, 3000);
    } catch (err) {
      if (newTab) newTab.close();
      setError(language === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const t = {
    title: language === 'fr' ? 'Accéder à la Note Trimestrielle' : 'Access the Quarterly Note',
    subtitle: language === 'fr' ? 'FINXIA Capital — Note Trimestrielle T3 2026' : 'FINXIA Capital — Quarterly Note Q3 2026',
    firstName: language === 'fr' ? 'Prénom' : 'First name',
    lastName: language === 'fr' ? 'Nom' : 'Last name',
    company: language === 'fr' ? 'Société / Organisation' : 'Company / Organization',
    role: language === 'fr' ? 'Fonction / Titre (optionnel)' : 'Role / Title (optional)',
    rolePlaceholder: language === 'fr' ? 'ex. Directeur Technique, CFO, Responsable Investissement' : 'e.g. CTO, CFO, Head of Investments',
    email: language === 'fr' ? 'Adresse email professionnelle (entreprise.com)' : 'Professional email address (company.com)',
    consent: language === 'fr'
      ? "J'accepte que FINXIA Capital conserve mes coordonnées pour me tenir informé de ses publications et actualités. Données traitées conformément au RGPD. Aucune cession à des tiers."
      : "I accept that FINXIA Capital retains my contact details to inform me of its publications and news. Data processed under GDPR. No third-party transfer.",
    submit: language === 'fr' ? 'Accéder à la note' : 'Access the note',
    submitting: language === 'fr' ? 'Envoi en cours…' : 'Submitting…',
    successTitle: language === 'fr' ? 'Accès accordé' : 'Access granted',
    successMsg: language === 'fr' ? 'La note trimestrielle vient de s\'ouvrir dans un nouvel onglet. Merci de votre intérêt pour nos travaux de recherche.' : 'The quarterly note just opened in a new tab. Thank you for your interest in our research.',
    required: language === 'fr' ? 'Champs obligatoires' : 'Required fields',
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
      data-testid="newsletter-issue-modal-overlay"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="font-serif text-xl md:text-2xl text-slate-900">{t.title}</h2>
            <p className="text-slate-500 text-xs mt-1">{t.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close"
            data-testid="newsletter-issue-modal-close"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {success ? (
          <div className="p-8 text-center" data-testid="newsletter-issue-success">
            <div className="w-14 h-14 bg-[#C45A3B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-7 h-7 text-[#C45A3B]" />
            </div>
            <h3 className="font-serif text-xl mb-2 text-slate-900">{t.successTitle}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{t.successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4" data-testid="newsletter-issue-form" name={FORM_NAME}>
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="text-slate-500 text-xs">* {t.required}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="ni-firstName">{t.firstName} *</label>
                <input id="ni-firstName" name="firstName" type="text" required value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                  data-testid="newsletter-issue-firstName" />
              </div>
              <div>
                <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="ni-lastName">{t.lastName} *</label>
                <input id="ni-lastName" name="lastName" type="text" required value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                  data-testid="newsletter-issue-lastName" />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="ni-company">{t.company} *</label>
              <input id="ni-company" name="company" type="text" required value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                data-testid="newsletter-issue-company" />
            </div>

            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="ni-role">{t.role}</label>
              <input id="ni-role" name="role" type="text" placeholder={t.rolePlaceholder} value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                data-testid="newsletter-issue-role" />
            </div>

            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="ni-email">{t.email} *</label>
              <input id="ni-email" name="email" type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'fr' ? 'prenom.nom@entreprise.com' : 'first.last@company.com'}
                className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                data-testid="newsletter-issue-email" />
              <p className="text-slate-500 text-xs mt-1 italic">
                {language === 'fr'
                  ? "Email professionnel requis · Gmail, Yahoo, Outlook, etc. ne sont pas acceptés."
                  : "Professional email required · Gmail, Yahoo, Outlook, etc. not accepted."}
              </p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer pt-2">
              <input type="checkbox" required checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 accent-[#C45A3B] shrink-0"
                data-testid="newsletter-issue-consent" />
              <span className="text-slate-600 text-xs leading-relaxed">{t.consent}</span>
            </label>

            {error && (
              <p className="text-red-600 text-xs" data-testid="newsletter-issue-error">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              data-testid="newsletter-issue-submit"
              className="w-full px-6 py-3 bg-[#C45A3B] text-white font-medium hover:bg-[#A04A2F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              {submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> {t.submitting}</>
              ) : (
                <>{t.submit} <Download className="w-4 h-4" /></>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterIssueModal;
