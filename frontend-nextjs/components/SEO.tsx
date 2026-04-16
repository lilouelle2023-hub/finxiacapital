import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
}

export default function SEO({ 
  title, 
  description, 
  canonical = 'https://finxiacapital.com',
  ogImage = 'https://finxiacapital.com/og-image.jpg',
  structuredData 
}: SEOProps) {
  const fullTitle = `${title} | FINXIA Capital - Gestion d'Actifs Alternatifs Luxembourg`;
  
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
      <meta name="keywords" content="Finxia Capital, SCSp Luxembourg, Datacenter AI, Hôtellerie Premium, Résidentiel Flex Living, Gestion Actifs Alternatifs, Green Bond ESG, Intelligence Artificielle" />
      <meta name="author" content="FINXIA Capital" />
      <meta name="language" content="fr" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
