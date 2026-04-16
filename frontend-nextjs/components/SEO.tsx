import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
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
  structuredData,
  faqSchema,
  breadcrumbSchema
}: SEOProps) {
  const fullTitle = `${title} | FINXIA Capital - Gestion d'Actifs Alternatifs Luxembourg`;
  
  // Default keywords if not provided
  const defaultKeywords = "Finxia Capital, SCSp Luxembourg, Datacenter AI, Hôtellerie Premium, Résidentiel Flex Living, Gestion Actifs Alternatifs, Green Bond ESG, Intelligence Artificielle";
  const finalKeywords = keywords || defaultKeywords;
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="FINXIA Capital" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="FINXIA Capital" />
      <meta name="language" content="fr" />
      
      {/* Hreflang for bilingual support */}
      <link rel="alternate" hrefLang="fr" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical.replace('finxiacapital.com', 'finxiacapital.com/en')} />
      
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
