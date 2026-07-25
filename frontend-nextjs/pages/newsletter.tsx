import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, Mail, CheckCircle, Zap, BookOpen, BarChart3 } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NewsletterPage() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const content = {
    fr: {
      title: 'Newsletter FINXIA Capital',
      subtitle: 'Analyses exclusives sur les datacenters IA, l\'investissement alternatif et la réglementation européenne.',
      back: 'Retour',
      emailLabel: 'Adresse email professionnelle',
      emailPlaceholder: 'votre.email@entreprise.com',
      consentLabel: 'J\'accepte de recevoir la newsletter de FINXIA Capital et j\'ai lu la politique de confidentialité.',
      submit: 'S\'inscrire',
      submitting: 'Inscription...',
      successTitle: 'Inscription confirmée',
      successText: 'Merci pour votre intérêt. Vous recevrez bientôt nos analyses sur les datacenters IA et l\'investissement alternatif en Europe.',
      benefits: [
        { icon: Zap, title: 'Veille sectorielle', desc: 'Actualités NVIDIA, réglementation EED, mouvements hyperscalers — décryptés chaque semaine.' },
        { icon: BookOpen, title: 'Guides pratiques', desc: 'PUE, certification ICPE, loi PINM, structuration Green Bond — le savoir-faire opérationnel de TITAN DC AI.' },
        { icon: BarChart3, title: 'Analyses de marché', desc: 'Tendances de raccordement RTE, prix du MW en Europe, opportunités brown-to-green identifiées.' }
      ],
      frequency: 'Fréquence : 1 à 2 emails par mois. Désinscription à tout moment.',
      privacyLink: '/privacy-policy/',
      privacyText: 'Politique de confidentialité'
    },
    en: {
      title: 'FINXIA Capital Newsletter',
      subtitle: 'Exclusive analysis on AI datacenters, alternative investment and European regulation.',
      back: 'Back',
      emailLabel: 'Professional email address',
      emailPlaceholder: 'your.email@company.com',
      consentLabel: 'I agree to receive FINXIA Capital\'s newsletter and have read the privacy policy.',
      submit: 'Subscribe',
      submitting: 'Subscribing...',
      successTitle: 'Subscription Confirmed',
      successText: 'Thank you for your interest. You will soon receive our analysis on AI datacenters and alternative investment in Europe.',
      benefits: [
        { icon: Zap, title: 'Sector Intelligence', desc: 'NVIDIA news, EED regulation, hyperscaler movements — decoded weekly.' },
        { icon: BookOpen, title: 'Practical Guides', desc: 'PUE, ICPE certification, PINM law, Green Bond structuring — TITAN DC AI operational know-how.' },
        { icon: BarChart3, title: 'Market Analysis', desc: 'RTE connection trends, MW pricing in Europe, identified brown-to-green opportunities.' }
      ],
      frequency: 'Frequency: 1-2 emails per month. Unsubscribe at any time.',
      privacyLink: '/privacy-policy/',
      privacyText: 'Privacy Policy'
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !email.includes('@')) {
      setError(language === 'fr' ? 'Veuillez saisir une adresse email valide.' : 'Please enter a valid email address.');
      return;
    }
    if (!consent) {
      setError(language === 'fr' ? 'Veuillez accepter la politique de confidentialité.' : 'Please accept the privacy policy.');
      return;
    }
    
    // Simulate submission — in production, connect to Netlify Forms, Mailchimp, Brevo, etc.
    setSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title={language === 'fr' ? 'Newsletter — Analyses Datacenter IA & Investissement Alternatif' : 'Newsletter — AI Datacenter & Alternative Investment Analysis'}
        description={language === 'fr' ? 'Inscrivez-vous à la newsletter de FINXIA Capital pour recevoir nos analyses exclusives sur les datacenters IA, la réglementation EED et l\'investissement alternatif en Europe.' : 'Subscribe to FINXIA Capital\'s newsletter for exclusive analysis on AI datacenters, EED regulation and alternative investment in Europe.'}
        canonical={language === 'fr' ? 'https://finxiacapital.com/newsletter/' : 'https://finxiacapital.com/en/newsletter/'}
        language={language}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl mb-4">{t.title}</h1>
        <p className="text-slate-600 text-lg mb-12">{t.subtitle}</p>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {t.benefits.map((b, i) => (
            <div key={i} className="bg-slate-50 p-6 border-l-4 border-[#C45A3B]">
              <b.icon className="w-6 h-6 text-[#C45A3B] mb-3" />
              <h3 className="font-medium text-slate-900 mb-2">{b.title}</h3>
              <p className="text-slate-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="font-serif text-xl mb-2">{t.successTitle}</h2>
            <p className="text-slate-600">{t.successText}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-lg">
            <div className="mb-6">
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-slate-700 mb-2">
                {t.emailLabel}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C45A3B] focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#C45A3B] rounded border-slate-300"
                />
                <span className="text-sm text-slate-600">
                  {t.consentLabel}{' '}
                  <Link href={t.privacyLink} className="text-[#C45A3B] hover:underline">
                    {t.privacyText}
                  </Link>
                </span>
              </label>
            </div>
            
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            
            <button
              type="submit"
              className="btn-primary w-full py-3"
            >
              {t.submit}
            </button>
            
            <p className="text-slate-500 text-xs mt-4 text-center">{t.frequency}</p>
          </form>
        )}
      </div>
    </div>
  );
}
