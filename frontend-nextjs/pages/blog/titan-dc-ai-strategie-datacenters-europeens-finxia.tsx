import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

export default function Article7Page() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "TITAN DC AI : La Transformation des Datacenters Européens Legacy par FINXIA Capital",
      description: "TITAN DC AI est la stratégie d'investissement de FINXIA Capital dédiée à l'acquisition et la transformation des datacenters européens legacy en plateformes haute efficacité pour l'IA.",
      tag: "TITAN Strategy",
      date: "Avril 2026",
      readTime: "10 min de lecture",
      backToBlog: "Retour au blog",
      author: "Lila Benhammou, Co-Fondatrice & CIO"
    },
    en: {
      title: "TITAN DC AI: Transforming European Legacy Datacenters by FINXIA Capital",
      description: "TITAN DC AI is FINXIA Capital's investment strategy dedicated to acquiring and transforming European legacy datacenters into high-efficiency AI platforms.",
      tag: "TITAN Strategy",
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
      {"@type": "ListItem", "position": 3, "name": t.title, "item": language === 'fr' ? "https://finxiacapital.com/blog/titan-dc-ai-strategie-datacenters-europeens-finxia" : "https://finxiacapital.com/en/blog/titan-dc-ai-european-datacenters-strategy-finxia"}
    ]
  };
  return (
    <div data-testid="article-7-page" className="pt-20">
      <SEO title={t.title} description={t.description} canonical={language === 'fr' ? "https://finxiacapital.com/blog/titan-dc-ai-strategie-datacenters-europeens-finxia/" : "https://finxiacapital.com/en/blog/titan-dc-ai-european-datacenters-strategy-finxia/"} keywords={language === 'fr' ? "TITAN DC AI, transformation datacenter, brown-to-green, FINXIA Capital, THERMIS, PUE optimisation, datacenter Europe" : "TITAN DC AI, datacenter transformation, brown-to-green, FINXIA Capital, THERMIS, PUE optimization, European datacenter"} structuredData={articleSchema} breadcrumbSchema={breadcrumbSchema} language={language} ogLocale={language === 'fr' ? "fr_FR" : "en_US"} hreflangFr="https://finxiacapital.com/blog/titan-dc-ai-strategie-datacenters-europeens-finxia/" hreflangEn="https://finxiacapital.com/en/blog/titan-dc-ai-european-datacenters-strategy-finxia/" hreflangDefault="https://finxiacapital.com/blog/titan-dc-ai-strategie-datacenters-europeens-finxia/" />
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
                {language === 'fr' ? "TITAN DC AI est la stratégie d'investissement de FINXIA Capital dédiée à l'acquisition et à la transformation des datacenters européens legacy en plateformes haute efficacité pour les charges de travail d'intelligence artificielle. Une stratégie brown-to-green au cœur de l'Europe du Sud." : "TITAN DC AI is FINXIA Capital's investment strategy dedicated to acquiring and transforming European legacy datacenters into high-efficiency platforms for artificial intelligence workloads. A brown-to-green strategy at the heart of Southern Europe."}
              </p>
              <p>{language === 'fr' ? "FINXIA Capital est positionné à l'intersection de la finance alternative institutionnelle et de l'infrastructure technologique — combinant la rigueur d'une SCSp luxembourgeoise avec la couche opérationnelle IA de THERMIS B.V." : "FINXIA Capital is positioned at the intersection of institutional alternative finance and technological infrastructure — combining the rigor of a Luxembourg SCSp with the AI operational layer of THERMIS B.V."}</p>
              <p className="text-slate-600 text-sm mt-8 p-4 bg-slate-50 border-l-4 border-[#C45A3B]">
                {language === 'fr' ? "Pour les investisseurs professionnels : contact@finxiacapital.com" : "For professional investors: contact@finxiacapital.com"}
              </p>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-slate-900">Finxia Capital</strong> {language === 'fr' ? "SCSp, Luxembourg. Réservé aux investisseurs professionnels au sens de MiFID II." : "SCSp, Luxembourg. Reserved for professional investors within the meaning of MiFID II."}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
