import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function MentionsLegalesPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Mentions légales',
      back: 'Retour',
      sections: [
        {
          h2: 'Éditeur du site',
          p: 'FINXIA Capital S.à r.l.\nSociété en commandite simple par actions (SCSp)\nRCS Luxembourg : B123456\nSiège social : 12, rue du Commerce, L-1234 Luxembourg\nDirecteur de publication : Lila Benhammou, Co-Fondatrice & CIO'
        },
        {
          h2: 'Hébergeur',
          p: 'Netlify, Inc.\n2325 3rd Street, Suite 215\nSan Francisco, CA 94107\nÉtats-Unis\nhttps://www.netlify.com'
        },
        {
          h2: 'Propriété intellectuelle',
          p: 'L\'ensemble du contenu de ce site (textes, images, logos, charte graphique) est la propriété exclusive de FINXIA Capital S.à r.l. Toute reproduction, représentation ou diffusion, en tout ou en partie, à des fins commerciales ou non, est interdite sans l\'autorisation écrite préalable de FINXIA Capital.'
        },
        {
          h2: 'Responsabilité',
          p: 'Les informations publiées sur ce site sont fournies à titre indicatif et peuvent être modifiées sans préavis. FINXIA Capital ne saurait être tenue responsable des erreurs ou omissions qui pourraient apparaître. Ce site ne constitue pas une offre de vente de parts sociales ni une sollicitation d\'investissement au sens de la directive européenne AIFMD.'
        },
        {
          h2: 'Données personnelles',
          p: 'Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à : contact@finxiacapital.com. Pour plus de détails, consultez notre Politique de confidentialité.'
        }
      ]
    },
    en: {
      title: 'Legal Notice',
      back: 'Back',
      sections: [
        {
          h2: 'Publisher',
          p: 'FINXIA Capital S.à r.l.\nSpecial Limited Partnership (SCSp)\nLuxembourg RCS: B123456\nRegistered office: 12, rue du Commerce, L-1234 Luxembourg\nPublication director: Lila Benhammou, Co-Founder & CIO'
        },
        {
          h2: 'Hosting Provider',
          p: 'Netlify, Inc.\n2325 3rd Street, Suite 215\nSan Francisco, CA 94107\nUnited States\nhttps://www.netlify.com'
        },
        {
          h2: 'Intellectual Property',
          p: 'All content on this site (text, images, logos, graphic design) is the exclusive property of FINXIA Capital S.à r.l. Any reproduction, representation or distribution, in whole or in part, for commercial or non-commercial purposes, is prohibited without the prior written consent of FINXIA Capital.'
        },
        {
          h2: 'Liability',
          p: 'The information published on this site is provided for informational purposes only and may be modified without notice. FINXIA Capital cannot be held responsible for any errors or omissions. This site does not constitute an offer to sell shares or a solicitation for investment within the meaning of the European AIFMD directive.'
        },
        {
          h2: 'Personal Data',
          p: 'In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify and delete your personal data. To exercise these rights, contact us at: contact@finxiacapital.com. For more details, please see our Privacy Policy.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO
        title={language === 'fr' ? 'Mentions légales — FINXIA Capital' : 'Legal Notice — FINXIA Capital'}
        description={language === 'fr' ? 'Mentions légales de FINXIA Capital SCSp Luxembourg.' : 'Legal notice of FINXIA Capital SCSp Luxembourg.'}
        canonical={language === 'fr' ? 'https://finxiacapital.com/mentions-legales/' : 'https://finxiacapital.com/en/legal-notice/'}
        language={language}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl mb-12">{t.title}</h1>
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
