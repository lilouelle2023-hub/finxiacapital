import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, Check, X } from 'lucide-react';
import SEO from '@/components/SEO';

export default function CookiesPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Politique cookies',
      back: 'Retour',
      lastUpdate: 'Dernière mise à jour : 25 juillet 2026',
      intro: 'FINXIA Capital utilise des cookies et technologies similaires pour améliorer votre expérience de navigation, analyser le trafic du site et comprendre d\'où viennent nos visiteurs. Cette politique explique ce que sont les cookies, lesquels nous utilisons et comment vous pouvez les gérer.',
      sections: [
        {
          h2: '1. Qu\'est-ce qu\'un cookie ?',
          p: 'Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d\'un site web. Il permet au site de mémoriser vos actions et préférences (langue, taille de police, etc.) pendant une période donnée, afin que vous n\'ayez pas à les ressaisir à chaque visite.'
        },
        {
          h2: '2. Cookies strictement nécessaires',
          p: 'Ces cookies sont essentiels au fonctionnement du site. Sans eux, vous ne pourriez pas naviguer correctement ni utiliser certaines fonctionnalités. Ils ne nécessitent pas votre consentement.\n\nExemples : cookie de session, cookie de préférence de langue, cookie de consentement.'
        },
        {
          h2: '3. Cookies analytiques (mesure d\'audience)',
          p: 'Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d\'améliorer les performances de notre site. Toutes les informations collectées par ces cookies sont agrégées et donc anonymisées.\n\nOutils utilisés : Plausible Analytics (hébergement européen, conforme RGPD, sans recoupement avec d\'autres données).'
        },
        {
          h2: '4. Cookies de marketing',
          p: 'FINXIA Capital ne dépose actuellement aucun cookie de marketing, de publicité ciblée ou de réseaux sociaux. Nous ne partageons pas vos données de navigation avec des annonceurs tiers.\n\nSi nous devions utiliser de tels cookies à l\'avenir, nous vous demanderions un consentement explicite préalable.'
        },
        {
          h2: '5. Durée de conservation',
          p: '• Cookies strictement nécessaires : session ou 12 mois maximum\n• Cookies analytiques : 13 mois maximum (conformément aux recommandations de la CNIL)\n\nPassé ce délai, les cookies sont automatiquement supprimés de votre navigateur.'
        },
        {
          h2: '6. Comment gérer vos préférences ?',
          p: 'Vous pouvez à tout moment :\n\n• Modifier vos préférences via le bandeau de consentement cookies (accessible en bas de chaque page)\n• Configurer votre navigateur pour refuser tous les cookies ou être alerté lorsqu\'un cookie est déposé\n• Supprimer manuellement les cookies déjà déposés via les paramètres de votre navigateur\n\nAttention : le refus des cookies strictement nécessaires peut affecter le fonctionnement du site.'
        },
        {
          h2: '7. Consentement',
          p: 'Lors de votre première visite, un bandeau vous informe de l\'utilisation des cookies et vous demande votre consentement pour les cookies non essentiels. Ce consentement est enregistré pendant 6 mois. Vous pouvez le modifier à tout moment.'
        }
      ],
      table: {
        h3: 'Tableau récapitulatif des cookies',
        headers: ['Nom', 'Finalité', 'Durée', 'Type'],
        rows: [
          ['finxia-lang', 'Mémorisation de la préférence de langue', '12 mois', 'Nécessaire'],
          ['finxia-consent', 'Mémorisation du choix de consentement cookies', '6 mois', 'Nécessaire'],
          ['plausible_*', 'Mesure d\'audience anonymisée (Plausible)', '13 mois', 'Analytique']
        ]
      }
    },
    en: {
      title: 'Cookie Policy',
      back: 'Back',
      lastUpdate: 'Last updated: July 25, 2026',
      intro: 'FINXIA Capital uses cookies and similar technologies to improve your browsing experience, analyze site traffic, and understand where our visitors come from. This policy explains what cookies are, which ones we use, and how you can manage them.',
      sections: [
        {
          h2: '1. What is a cookie?',
          p: 'A cookie is a small text file placed on your device (computer, tablet, smartphone) when you visit a website. It allows the site to remember your actions and preferences (language, font size, etc.) for a given period, so you don\'t have to re-enter them on each visit.'
        },
        {
          h2: '2. Strictly Necessary Cookies',
          p: 'These cookies are essential for the site to function. Without them, you would not be able to navigate properly or use certain features. They do not require your consent.\n\nExamples: session cookie, language preference cookie, consent cookie.'
        },
        {
          h2: '3. Analytical Cookies (Audience Measurement)',
          p: 'These cookies allow us to count visits and traffic sources in order to measure and improve the performance of our site. All information collected by these cookies is aggregated and therefore anonymized.\n\nTools used: Plausible Analytics (European hosting, GDPR compliant, no cross-referencing with other data).'
        },
        {
          h2: '4. Marketing Cookies',
          p: 'FINXIA Capital currently does not place any marketing, targeted advertising, or social media cookies. We do not share your browsing data with third-party advertisers.\n\nIf we were to use such cookies in the future, we would ask for your explicit prior consent.'
        },
        {
          h2: '5. Retention Period',
          p: '• Strictly necessary cookies: session or maximum 12 months\n• Analytical cookies: maximum 13 months (in accordance with CNIL recommendations)\n\nAfter this period, cookies are automatically deleted from your browser.'
        },
        {
          h2: '6. How to Manage Your Preferences?',
          p: 'You can at any time:\n\n• Change your preferences via the cookie consent banner (accessible at the bottom of each page)\n• Configure your browser to refuse all cookies or to be alerted when a cookie is placed\n• Manually delete already placed cookies via your browser settings\n\nNote: refusing strictly necessary cookies may affect site functionality.'
        },
        {
          h2: '7. Consent',
          p: 'On your first visit, a banner informs you about the use of cookies and asks for your consent for non-essential cookies. This consent is recorded for 6 months. You can change it at any time.'
        }
      ],
      table: {
        h3: 'Summary Table of Cookies',
        headers: ['Name', 'Purpose', 'Duration', 'Type'],
        rows: [
          ['finxia-lang', 'Language preference storage', '12 months', 'Necessary'],
          ['finxia-consent', 'Cookie consent choice storage', '6 months', 'Necessary'],
          ['plausible_*', 'Anonymized audience measurement (Plausible)', '13 months', 'Analytics']
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title={language === 'fr' ? 'Politique cookies — FINXIA Capital' : 'Cookie Policy — FINXIA Capital'}
        description={language === 'fr' ? 'Politique cookies et gestion du consentement de FINXIA Capital.' : 'Cookie policy and consent management of FINXIA Capital.'}
        canonical={language === 'fr' ? 'https://finxiacapital.com/cookies/' : 'https://finxiacapital.com/en/cookies/'}
        language={language}
        hreflangFr="https://finxiacapital.com/cookies/"
        hreflangEn="https://finxiacapital.com/en/cookies/"
        hreflangDefault="https://finxiacapital.com/cookies/"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">{t.title}</h1>
        <p className="text-slate-500 text-sm mb-8">{t.lastUpdate}</p>
        <p className="text-slate-600 leading-relaxed mb-12">{t.intro}</p>
        
        <div className="space-y-10">
          {t.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif text-xl mb-4 text-[#1E2A3A]">{section.h2}</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{section.p}</p>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-lg mb-6 text-[#1E2A3A]">{t.table.h3}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  {t.table.headers.map((h, i) => (
                    <th key={i} className="text-left py-3 px-4 font-semibold text-slate-700">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 text-slate-600">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
