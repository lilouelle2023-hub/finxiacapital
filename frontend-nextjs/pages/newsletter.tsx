import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, Mail, CheckCircle, Zap, BookOpen, BarChart3, Headphones, Download, FileText } from 'lucide-react';
import SEO from '@/components/SEO';
import NewsletterIssueModal from '@/components/NewsletterIssueModal';

export default function NewsletterPage() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [issueModalOpen, setIssueModalOpen] = useState(false);

  const content = {
    fr: {
      title: 'Newsletter FINXIA Capital',
      subtitle: 'Analyses exclusives sur les datacenters IA, l\'investissement alternatif et la réglementation européenne.',
      podcastSubtitle: 'Ou écoutez nos analyses en podcast — Finxia Capital Insights.',
      back: 'Retour',
      latestIssueLabel: 'Dernier Numéro',
      latestIssueTitle: 'Note Trimestrielle — T3 2026',
      latestIssueDesc: 'Le meilleur de nos publications de recherche du trimestre, réuni dans un document unique : TITAN DC AI, marché de l\'infrastructure numérique, réglementation énergétique et financement brown-to-green.',
      latestIssueCta: 'Télécharger la note (PDF)',
      emailLabel: 'Adresse email professionnelle',
      emailPlaceholder: 'votre.email@entreprise.com',
      firstNameLabel: 'Prénom',
      lastNameLabel: 'Nom',
      companyLabel: 'Entreprise',
      roleLabel: 'Fonction',
      consentLabel: 'J\'accepte de recevoir la newsletter de FINXIA Capital et j\'ai lu la',
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
      privacyText: 'politique de confidentialité',
      podcastCta: 'Écouter le podcast',
      investorProfile: 'Profil investisseur',
      userProfile: 'Profil utilisateur',
      bothProfiles: 'Les deux'
    },
    en: {
      title: 'FINXIA Capital Newsletter',
      subtitle: 'Exclusive analysis on AI datacenters, alternative investment and European regulation.',
      podcastSubtitle: 'Or listen to our analysis on podcast — Finxia Capital Insights.',
      back: 'Back',
      latestIssueLabel: 'Latest Issue',
      latestIssueTitle: 'Quarterly Note — Q3 2026',
      latestIssueDesc: 'The best of our quarterly research, gathered in a single document: TITAN DC AI, digital infrastructure market, energy regulation and brown-to-green financing.',
      latestIssueCta: 'Download the note (PDF)',
      emailLabel: 'Professional email address',
      emailPlaceholder: 'your.email@company.com',
      firstNameLabel: 'First name',
      lastNameLabel: 'Last name',
      companyLabel: 'Company',
      roleLabel: 'Role',
      consentLabel: 'I agree to receive FINXIA Capital\'s newsletter and have read the',
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
      privacyText: 'privacy policy',
      podcastCta: 'Listen to podcast',
      investorProfile: 'Investor profile',
      userProfile: 'User profile',
      bothProfiles: 'Both'
    }
  };

  const t = content[language];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'fr' ? "Accueil" : "Home",
        "item": language === 'fr' ? "https://finxiacapital.com/" : "https://finxiacapital.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t.title,
        "item": language === 'fr' ? "https://finxiacapital.com/newsletter/" : "https://finxiacapital.com/en/newsletter/"
      }
    ]
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title={language === 'fr' ? 'Newsletter — Analyses Datacenter IA & Investissement Alternatif' : 'Newsletter — AI Datacenter & Alternative Investment Analysis'}
        description={language === 'fr' ? 'Inscrivez-vous à la newsletter de FINXIA Capital pour recevoir nos analyses exclusives sur les datacenters IA, la réglementation EED et l\'investissement alternatif en Europe.' : 'Subscribe to FINXIA Capital\'s newsletter for exclusive analysis on AI datacenters, EED regulation and alternative investment in Europe.'}
        canonical={language === 'fr' ? 'https://finxiacapital.com/newsletter/' : 'https://finxiacapital.com/en/newsletter/'}
        breadcrumbSchema={breadcrumbSchema}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/newsletter/"
        hreflangEn="https://finxiacapital.com/en/newsletter/"
        hreflangDefault="https://finxiacapital.com/newsletter/"
        language={language}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl mb-4">{t.title}</h1>
        <p className="text-slate-600 text-lg mb-4">{t.subtitle}</p>
        <p className="text-slate-500 text-sm mb-8 flex items-center gap-2">
          <Headphones className="w-4 h-4" />
          {t.podcastSubtitle}{' '}
          <Link href="/podcast/" className="text-[#C45A3B] hover:underline">{t.podcastCta}</Link>
        </p>

        {/* Latest Issue — gated PDF download */}
        <div className="mb-12 p-6 md:p-8 bg-[#1E2A3A] text-white rounded-lg flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 w-14 h-14 bg-[#C45A3B]/20 rounded-full flex items-center justify-center">
            <FileText className="w-7 h-7 text-[#C45A3B]" />
          </div>
          <div className="flex-1">
            <p className="text-[#C45A3B] text-xs uppercase tracking-wider font-medium mb-1">{t.latestIssueLabel}</p>
            <h2 className="font-serif text-xl md:text-2xl mb-2">{t.latestIssueTitle}</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{t.latestIssueDesc}</p>
          </div>
          <button
            type="button"
            onClick={() => setIssueModalOpen(true)}
            data-testid="newsletter-issue-cta"
            className="flex-shrink-0 px-6 py-3 bg-[#C45A3B] text-white font-medium hover:bg-[#A04A2F] transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            {t.latestIssueCta}
          </button>
        </div>

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
          <form 
            name="newsletter-subscription" 
            method="POST" 
            data-netlify="true"
            action="/newsletter/?success=true"
            className="bg-slate-50 p-8 rounded-lg"
          >
            <input type="hidden" name="form-name" value="newsletter-subscription" />
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.firstNameLabel}
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C45A3B] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.lastNameLabel}
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C45A3B] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-slate-700 mb-2">
                {t.emailLabel}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C45A3B] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.companyLabel}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C45A3B] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.roleLabel}
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#C45A3B] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {language === 'fr' ? 'Votre profil' : 'Your profile'}
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="profile" value="investor" className="text-[#C45A3B]" />
                  <span className="text-sm text-slate-600">{t.investorProfile}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="profile" value="user" className="text-[#C45A3B]" />
                  <span className="text-sm text-slate-600">{t.userProfile}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="profile" value="both" defaultChecked className="text-[#C45A3B]" />
                  <span className="text-sm text-slate-600">{t.bothProfiles}</span>
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  required
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
      <NewsletterIssueModal isOpen={issueModalOpen} onClose={() => setIssueModalOpen(false)} />
    </div>
  );
}
