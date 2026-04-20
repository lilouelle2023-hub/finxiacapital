import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

export default function Article6Page() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "EED Article 12 : Guide Complet pour la Déclaration Obligatoire des Datacenters avant le 15 Mai 2026",
      description: "Le 15 mai 2026 est la première échéance de déclaration obligatoire imposée par l'EED Article 12. Guide complet pour les opérateurs de datacenters européens.",
      tag: "Regulatory Compliance",
      date: "Avril 2026",
      readTime: "10 min de lecture",
      backToBlog: "Retour au blog",
      author: "Lila Benhammou, Co-Fondatrice & CIO"
    },
    en: {
      title: "EED Article 12: Complete Guide for Mandatory Datacenter Declaration before May 15, 2026",
      description: "May 15, 2026 is the first mandatory declaration deadline imposed by EED Article 12. Complete guide for European datacenter operators.",
      tag: "Regulatory Compliance",
      date: "April 2026",
      readTime: "10 min read",
      backToBlog: "Back to blog",
      author: "Lila Benhammou, Co-Founder & CIO"
    }
  };
  const t = content[language];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-04-15T09:00:00+01:00",
    "dateModified": "2026-04-15T09:00:00+01:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "worksFor": {"@type": "Organization", "name": "FINXIA Capital"}
    },
    "publisher": {
      "@type": "Organization",
      "name": "FINXIA Capital",
      "logo": {"@type": "ImageObject", "url": "https://finxiacapital.com/logo-finxia.png"}
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": language === 'fr' ? "Accueil" : "Home", "item": language === 'fr' ? "https://finxiacapital.com" : "https://finxiacapital.com/en/"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": language === 'fr' ? "https://finxiacapital.com/blog" : "https://finxiacapital.com/en/blog"},
      {"@type": "ListItem", "position": 3, "name": t.title, "item": language === 'fr' ? "https://finxiacapital.com/blog/eed-article-12-declaration-datacenter-guide-2026" : "https://finxiacapital.com/en/blog/eed-article-12-datacenter-declaration-guide-2026"}
    ]
  };
  return (
    <div data-testid="article-6-page" className="pt-20">
      <SEO title={t.title} description={t.description} canonical={language === 'fr' ? "https://finxiacapital.com/blog/eed-article-12-declaration-datacenter-guide-2026/" : "https://finxiacapital.com/en/blog/eed-article-12-datacenter-declaration-guide-2026/"} keywords={language === 'fr' ? "EED Article 12, datacenter déclaration obligatoire, 15 mai 2026, PUE WUE REF, conformité EED, sanctions datacenter" : "EED Article 12, mandatory datacenter declaration, May 15 2026, PUE WUE REF, EED compliance, datacenter sanctions"} structuredData={articleSchema} breadcrumbSchema={breadcrumbSchema} language={language} ogLocale={language === 'fr' ? "fr_FR" : "en_US"} hreflangFr="https://finxiacapital.com/blog/eed-article-12-declaration-datacenter-guide-2026/" hreflangEn="https://finxiacapital.com/en/blog/eed-article-12-datacenter-declaration-guide-2026/" hreflangDefault="https://finxiacapital.com/blog/eed-article-12-declaration-datacenter-guide-2026/" />
      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? "/blog" : "/en/blog"} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8"><ArrowLeft className="w-4 h-4" />{t.backToBlog}</Link>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider"><Tag className="w-4 h-4" />{t.tag}</span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-04-15"><Calendar className="w-4 h-4" />{t.date}</time>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">{t.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">{t.title}</h1>
            <p className="text-slate-500 text-sm">{t.author} | Finxia Capital</p>
          </div>
        </header>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                {language === 'fr' ? "Le 15 mai 2026 est la première échéance de déclaration obligatoire imposée par l'Article 12 de la Directive sur l'Efficacité Énergétique. Tout datacenter dépassant 500 kW de puissance installée dans l'UE doit déclarer cinq indicateurs de performance énergétique." : "May 15, 2026 is the first mandatory declaration deadline imposed by Article 12 of the Energy Efficiency Directive. Every datacenter exceeding 500 kW of installed capacity in the EU must declare five energy performance indicators."}
              </p>
              <p>{language === 'fr' ? "FINXIA Capital accompagne les opérateurs de datacenters dans leur mise en conformité EED via sa stratégie TITAN DC AI." : "FINXIA Capital supports datacenter operators in their EED compliance via its TITAN DC AI strategy."}</p>
              <p className="text-slate-600 text-sm mt-8 p-4 bg-slate-50 border-l-4 border-[#C45A3B]">Contact : contact@finxiacapital.com</p>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-slate-900">Finxia Capital</strong> {language === 'fr' ? "est un gestionnaire d'actifs alternatifs." : "is an alternative asset manager."}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
