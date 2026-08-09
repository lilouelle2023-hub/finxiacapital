import Head from 'next/head';

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FINXIA Capital",
  "legalName": "FINXIA Capital S.à r.l.",
  "url": "https://finxiacapital.com",
  "logo": "https://finxiacapital.com/logo-finxia.png",
  "sameAs": [
    "https://linkedin.com/company/finxiacapital"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "LU"
  },
  "founder": [
    { "@type": "Person", "name": "Jean-Pierre Véron" },
    { "@type": "Person", "name": "Lila Benhammou" }
  ]
};

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  language?: 'fr' | 'en';
  ogLocale?: string;
  hreflangFr?: string;
  hreflangEn?: string;
  hreflangDefault?: string;
  structuredData?: any;
  faqSchema?: any;
  breadcrumbSchema?: any;
}

// Clean breadcrumb URLs: ensure trailing slash and correct EN localization
const cleanBreadcrumbSchema = (schema: any, lang: 'fr' | 'en', canonicalUrl?: string) => {
  // Auto-detect EN from canonical URL when page hardcodes FR
  const effectiveLang = (lang === 'fr' && canonicalUrl && canonicalUrl.includes('/en/')) ? 'en' : lang;
  
  if (!schema || !Array.isArray(schema.itemListElement)) return schema;
  
  const cleaned = {
    ...schema,
    itemListElement: schema.itemListElement.map((item: any) => {
      if (!item.item || typeof item.item !== 'string') return item;
      
      let url = item.item;
      
      // Ensure trailing slash
      if (!url.endsWith('/')) {
        url = url + '/';
      }
      
      // For EN pages, ensure non-home URLs use /en/ prefix
      if (effectiveLang === 'en' && url !== 'https://finxiacapital.com/') {
        const path = url.replace('https://finxiacapital.com/', '');
        if (!path.startsWith('en/')) {
          url = 'https://finxiacapital.com/en/' + path;
        }
      }
      
      return { ...item, item: url };
    })
  };
  
  return cleaned;
};

export default function SEO({ 
  title, 
  description, 
  canonical = 'https://finxiacapital.com',
  ogImage = 'https://finxiacapital.com/og-image.jpg',
  keywords,
  language = 'fr',
  ogLocale = 'fr_FR',
  hreflangFr,
  hreflangEn,
  hreflangDefault,
  structuredData,
  faqSchema,
  breadcrumbSchema
}: SEOProps) {
  // Translate page name "Accueil" -> "Home" for EN pages
  const translateTitle = (t: string, lang: string) => {
    if (lang === 'en') {
      return t.replace(/^Accueil/, 'Home');
    }
    return t;
  };
  
  const translatedTitle = translateTitle(title, language);

  // Build the full <title>, avoiding duplication when the page-supplied
  // title already ends with "| FINXIA Capital" (a common pattern across the site).
  const brandSuffixFr = "FINXIA Capital - Gestion d'Actifs Alternatifs Luxembourg";
  const brandSuffixEn = 'FINXIA Capital - Alternative Asset Management Luxembourg';
  const brandSuffix = language === 'fr' ? brandSuffixFr : brandSuffixEn;

  const fullTitle = /\|\s*FINXIA Capital\s*$/i.test(translatedTitle)
    // Replace the trailing "| FINXIA Capital" by the descriptive variant.
    ? translatedTitle.replace(/\|\s*FINXIA Capital\s*$/i, `| ${brandSuffix}`)
    // No brand suffix yet — append the full descriptive one.
    : `${translatedTitle} | ${brandSuffix}`;
  
  // Default keywords if not provided
  const defaultKeywordsFr = "Finxia Capital, SCSp Luxembourg, Datacenter AI, Hôtellerie Premium, Résidentiel Flex Living, Gestion Actifs Alternatifs, Green Bond ESG, Intelligence Artificielle";
  const defaultKeywordsEn = "Finxia Capital, Luxembourg SCSp, Datacenter AI, Premium Hospitality, Flex Living Residential, Alternative Asset Management, Green Bond ESG, Artificial Intelligence";
  const finalKeywords = keywords || (language === 'fr' ? defaultKeywordsFr : defaultKeywordsEn);
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="msvalidate.01" content="6794AC65382D0A98594B01BC1432995A" />
      {/* Google Search Console verification — set via NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION env var. */}
      {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      )}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="FINXIA Capital" />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="FINXIA Capital" />
      <meta name="language" content={language === 'fr' ? 'fr-FR' : 'en-US'} />
      
      {/* Hreflang for bilingual support */}
      {hreflangFr && <link rel="alternate" hrefLang="fr" href={hreflangFr} />}
      {hreflangEn && <link rel="alternate" hrefLang="en" href={hreflangEn} />}
      {hreflangDefault && <link rel="alternate" hrefLang="x-default" href={hreflangDefault} />}
      
      {/* Structured Data - Organization/Website */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* FAQ Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanBreadcrumbSchema(breadcrumbSchema, language, canonical)) }}
        />
      )}
      
      {/* Organization Schema - always present */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
    </Head>
  );
}
