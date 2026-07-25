import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Politique de confidentialité',
      back: 'Retour',
      lastUpdate: 'Dernière mise à jour : 25 juillet 2026',
      sections: [
        {
          h2: '1. Responsable du traitement',
          p: 'Le responsable du traitement des données personnelles collectées sur ce site est :\n\nFINXIA Capital S.à r.l.\n12, rue du Commerce\nL-1234 Luxembourg\nEmail : contact@finxiacapital.com\n\nLa déléguée à la protection des données (DPO) est Madame Lila Benhammou.'
        },
        {
          h2: '2. Données collectées',
          p: 'Nous collectons les données suivantes :\n\n• Données de contact (nom, prénom, email, société, fonction) via nos formulaires de contact et de téléchargement de livre blanc\n• Données de navigation (adresse IP, pages visitées, durée de visite) via des cookies analytiques\n\nNous ne collectons pas de données sensibles au sens du RGPD (origine raciale, opinions politiques, données de santé, etc.).'
        },
        {
          h2: '3. Finalités et base légale',
          p: 'Vos données sont traitées pour les finalités suivantes :\n\n• Répondre à vos demandes de contact (base légale : intérêt légitime, article 6.1.f RGPD)\n• Vous envoyer notre newsletter si vous y avez consenti (base légale : consentement, article 6.1.a RGPD)\n• Améliorer l\'expérience utilisateur du site (base légale : intérêt légitime, article 6.1.f RGPD)\n\nLe traitement est nécessaire à l\'exécution de nos obligations contractuelles et à la conformité réglementaire en tant que SCSp luxembourgeoise soumise à la CSSF.'
        },
        {
          h2: '4. Durée de conservation',
          p: '• Données de contact : 3 ans à compter du dernier contact\n• Données de navigation (cookies) : 13 mois maximum\n• Données liées à un investissement : durée de la relation contractuelle + 10 ans (obligation légale Luxembourg)\n\nPassé ce délai, vos données sont supprimées ou anonymisées.'
        },
        {
          h2: '5. Vos droits',
          p: 'Conformément au RGPD, vous disposez des droits suivants :\n\n• Droit d\'accès (article 15 RGPD)\n• Droit de rectification (article 16 RGPD)\n• Droit à l\'effacement (« droit à l\'oubli », article 17 RGPD)\n• Droit à la limitation du traitement (article 18 RGPD)\n• Droit d\'opposition (article 21 RGPD)\n• Droit à la portabilité (article 20 RGPD)\n\nPour exercer ces droits, envoyez un email à contact@finxiacapital.com avec une copie de votre pièce d\'identité. Nous répondrons dans un délai de 30 jours.'
        },
        {
          h2: '6. Cookies',
          p: 'Ce site utilise des cookies strictement nécessaires au fonctionnement du site et des cookies analytiques (Google Analytics / Plausible) pour mesurer l\'audience.\n\nVous pouvez à tout moment modifier vos préférences en matière de cookies via notre bandeau de consentement ou en cliquant sur « Politique cookies » dans le footer.\n\nPour plus d\'informations, consultez notre page Politique cookies.'
        },
        {
          h2: '7. Sécurité',
          p: 'FINXIA Capital met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction accidentelle ou illicite, la perte accidentelle, l\'altération, la diffusion ou l\'accès non autorisé.\n\nLe site est hébergé sur Netlify (certification SOC 2 Type II) et utilise le protocole HTTPS/TLS 1.3 pour toutes les communications.'
        },
        {
          h2: '8. Réclamation auprès de la CNPD',
          p: 'Si vous estimez que le traitement de vos données constitue une violation du RGPD, vous avez le droit d\'introduire une réclamation auprès de la Commission Nationale pour la Protection des Données (CNPD) du Luxembourg :\n\nCNPD\n1, avenue du Rock\'n\'Roll\nL-4361 Esch-sur-Alzette\nhttps://cnpd.public.lu'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      back: 'Back',
      lastUpdate: 'Last updated: July 25, 2026',
      sections: [
        {
          h2: '1. Data Controller',
          p: 'The data controller for personal data collected on this site is:\n\nFINXIA Capital S.à r.l.\n12, rue du Commerce\nL-1234 Luxembourg\nEmail: contact@finxiacapital.com\n\nThe Data Protection Officer (DPO) is Ms. Lila Benhammou.'
        },
        {
          h2: '2. Data Collected',
          p: 'We collect the following data:\n\n• Contact data (name, email, company, role) via our contact and whitepaper download forms\n• Navigation data (IP address, pages visited, visit duration) via analytical cookies\n\nWe do not collect sensitive data within the meaning of the GDPR (racial origin, political opinions, health data, etc.).'
        },
        {
          h2: '3. Purposes and Legal Basis',
          p: 'Your data is processed for the following purposes:\n\n• Responding to your contact requests (legal basis: legitimate interest, Article 6.1.f GDPR)\n• Sending you our newsletter if you have consented (legal basis: consent, Article 6.1.a GDPR)\n• Improving the user experience of the site (legal basis: legitimate interest, Article 6.1.f GDPR)\n\nProcessing is necessary for the performance of our contractual obligations and regulatory compliance as a Luxembourg SCSp subject to the CSSF.'
        },
        {
          h2: '4. Retention Period',
          p: '• Contact data: 3 years from the last contact\n• Navigation data (cookies): maximum 13 months\n• Investment-related data: duration of the contractual relationship + 10 years (Luxembourg legal obligation)\n\nAfter this period, your data is deleted or anonymized.'
        },
        {
          h2: '5. Your Rights',
          p: 'In accordance with the GDPR, you have the following rights:\n\n• Right of access (Article 15 GDPR)\n• Right to rectification (Article 16 GDPR)\n• Right to erasure ("right to be forgotten", Article 17 GDPR)\n• Right to restriction of processing (Article 18 GDPR)\n• Right to object (Article 21 GDPR)\n• Right to data portability (Article 20 GDPR)\n\nTo exercise these rights, send an email to contact@finxiacapital.com with a copy of your identity document. We will respond within 30 days.'
        },
        {
          h2: '6. Cookies',
          p: 'This site uses strictly necessary cookies for site operation and analytical cookies (Google Analytics / Plausible) to measure audience.\n\nYou can change your cookie preferences at any time via our consent banner or by clicking "Cookie Policy" in the footer.\n\nFor more information, please see our Cookie Policy page.'
        },
        {
          h2: '7. Security',
          p: 'FINXIA Capital implements appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, accidental loss, alteration, unauthorized disclosure or access.\n\nThe site is hosted on Netlify (SOC 2 Type II certified) and uses HTTPS/TLS 1.3 for all communications.'
        },
        {
          h2: '8. Complaint to the CNPD',
          p: 'If you believe that the processing of your data constitutes a violation of the GDPR, you have the right to lodge a complaint with the Luxembourg National Data Protection Commission (CNPD):\n\nCNPD\n1, avenue du Rock\'n\'Roll\nL-4361 Esch-sur-Alzette\nhttps://cnpd.public.lu'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title={language === 'fr' ? 'Politique de confidentialité — FINXIA Capital' : 'Privacy Policy — FINXIA Capital'}
        description={language === 'fr' ? 'Politique de confidentialité et protection des données personnelles de FINXIA Capital.' : 'Privacy policy and personal data protection of FINXIA Capital.'}
        canonical={language === 'fr' ? 'https://finxiacapital.com/privacy-policy/' : 'https://finxiacapital.com/en/privacy-policy/'}
        language={language}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">{t.title}</h1>
        <p className="text-slate-500 text-sm mb-12">{t.lastUpdate}</p>
        <div className="space-y-10">
          {t.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif text-xl mb-4 text-[#1E2A3A]">{section.h2}</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{section.p}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
