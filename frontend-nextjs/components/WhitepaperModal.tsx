import React, { useState, useEffect } from 'react';
import { X, Download, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PDF_URL = '/documents/FINXIA_Capital_Research_LivreBlancPUE_Avril2026.pdf';
const FORM_NAME = 'whitepaper-download';

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
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
      // Trigger download
      const a = document.createElement('a');
      a.href = PDF_URL;
      a.download = 'FINXIA_Capital_Research_LivreBlancPUE_Avril2026.pdf';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setSuccess(true);
      setTimeout(() => { onClose(); }, 3000);
    } catch (err) {
      setError(language === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const t = {
    title: language === 'fr' ? 'Accéder au Livre Blanc' : 'Access the White Paper',
    subtitle: language === 'fr' ? 'Optimisation Énergétique des Datacenters Européens — Avril 2026' : 'European Datacenter Energy Optimization — April 2026',
    firstName: language === 'fr' ? 'Prénom' : 'First name',
    lastName: language === 'fr' ? 'Nom' : 'Last name',
    company: language === 'fr' ? 'Société / Organisation' : 'Company / Organization',
    role: language === 'fr' ? 'Fonction / Titre (optionnel)' : 'Role / Title (optional)',
    rolePlaceholder: language === 'fr' ? 'ex. Directeur Technique, CFO, Responsable Investissement' : 'e.g. CTO, CFO, Head of Investments',
    email: language === 'fr' ? 'Adresse email professionnelle' : 'Professional email',
    consent: language === 'fr'
      ? "J'accepte que FINXIA Capital conserve mes coordonnées pour me tenir informé de ses publications et actualités. Données traitées conformément au RGPD. Aucune cession à des tiers."
      : "I accept that FINXIA Capital retains my contact details to inform me of its publications and news. Data processed under GDPR. No third-party transfer.",
    submit: language === 'fr' ? 'Accéder au document' : 'Access the document',
    submitting: language === 'fr' ? 'Envoi en cours…' : 'Submitting…',
    successTitle: language === 'fr' ? 'Téléchargement démarré' : 'Download started',
    successMsg: language === 'fr' ? 'Votre téléchargement a démarré. Merci de votre intérêt pour nos travaux de recherche.' : 'Your download has started. Thank you for your interest in our research.',
    required: language === 'fr' ? 'Champs obligatoires' : 'Required fields',
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
      data-testid="whitepaper-modal-overlay"
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
            data-testid="whitepaper-modal-close"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {success ? (
          <div className="p-8 text-center" data-testid="whitepaper-success">
            <div className="w-14 h-14 bg-[#C45A3B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-7 h-7 text-[#C45A3B]" />
            </div>
            <h3 className="font-serif text-xl mb-2 text-slate-900">{t.successTitle}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{t.successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4" data-testid="whitepaper-form" name={FORM_NAME}>
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="text-slate-500 text-xs">* {t.required}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="wp-firstName">{t.firstName} *</label>
                <input id="wp-firstName" name="firstName" type="text" required value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                  data-testid="whitepaper-firstName" />
              </div>
              <div>
                <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="wp-lastName">{t.lastName} *</label>
                <input id="wp-lastName" name="lastName" type="text" required value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                  data-testid="whitepaper-lastName" />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="wp-company">{t.company} *</label>
              <input id="wp-company" name="company" type="text" required value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                data-testid="whitepaper-company" />
            </div>

            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="wp-role">{t.role}</label>
              <input id="wp-role" name="role" type="text" placeholder={t.rolePlaceholder} value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                data-testid="whitepaper-role" />
            </div>

            <div>
              <label className="block text-slate-700 text-xs font-medium mb-1" htmlFor="wp-email">{t.email} *</label>
              <input id="wp-email" name="email" type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-none focus:outline-none focus:border-[#C45A3B] text-sm"
                data-testid="whitepaper-email" />
            </div>

            <label className="flex items-start gap-3 cursor-pointer pt-2">
              <input type="checkbox" required checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 accent-[#C45A3B] shrink-0"
                data-testid="whitepaper-consent" />
              <span className="text-slate-600 text-xs leading-relaxed">{t.consent}</span>
            </label>

            {error && (
              <p className="text-red-600 text-xs" data-testid="whitepaper-error">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              data-testid="whitepaper-submit"
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

export default WhitepaperModal;
