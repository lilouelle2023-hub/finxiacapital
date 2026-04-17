import Head from 'next/head';

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
  const fullTitle = language === 'fr' 
    ? `${title} | FINXIA Capital - Gestion d'Actifs Alternatifs Luxembourg`
    : `${title} | FINXIA Capital - Alternative Asset Management Luxembourg`;
  
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </Head>
  );
}
