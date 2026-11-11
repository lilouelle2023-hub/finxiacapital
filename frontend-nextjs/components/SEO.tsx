import Head from 'next/head';
import blogPosts from '../data/blogPosts.json';

const POLE_OG: Record<string, string> = {
  Hospitality: 'og-hospitality.jpg',
  Residential: 'og-residential.jpg',
  'C.CAPITAL': 'og-ccapital.jpg',
};
const DEFAULT_OG = 'https://finxiacapital.com/og-image.jpg';
const ogForCanonical = (canonical: string): string | null => {
  const m = canonical.match(/\/blog\/([^/]+)\/?$/);
  if (!m) return null;
  const post = (blogPosts as any[]).find((p) => p.frSlug === m[1] || p.enSlug === m[1]);
  const img = post && POLE_OG[post.category];
  if (img) return `https://finxiacapital.com/${img}`;
  return post ? 'https://finxiacapital.com/og-titan-dc-ai.jpg' : null;
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FINXIA Capital",
  "legalName": "FINXIA Capital SCSp",
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
    {
      "@type": "Person",
      "name": "Jean-Pierre Véron",
      "jobTitle": "Co-Founder & Chairman",
      "url": "https://finxiacapital.com/jean-pierre-veron/",
      "sameAs": ["https://www.linkedin.com/in/jean-pierre-veron-31ab0499/"]
    },
    {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "url": "https://finxiacapital.com/lila-benhammou/",
      "sameAs": ["https://www.linkedin.com/in/lila-benhammou/", "https://twitter.com/LilaBenhammou", "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6597918"]
    }
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
  ogImage: ogImageProp,
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
  
  const ogImage = ogImageProp || ogForCanonical(canonical) || DEFAULT_OG;
  const translatedTitle = translateTitle(title, language);

  // Build the full <title>, avoiding duplication when the page-supplied
  // title already ends with "| FINXIA Capital" (a common pattern across the site).
  // Title: strip any existing brand suffix, then append the short brand only when the
  // result stays within ~70 chars (search engines truncate around 60 chars).
  const BRAND = 'FINXIA Capital';
  const baseTitle = translatedTitle
    .replace(/\s*\|\s*FINXIA Capital[^|]*$/i, '')
    .trim();
  // Over-long titles: cut at the last ' — ' / ' : ' / ' – ' separator when a meaningful lead remains.
  const shortTitle = (t: string): string => {
    if (t.length <= 62) return t;
    const cuts = [' — ', ' – ', ' : ', ': '].map((s) => t.lastIndexOf(s)).filter((i) => i >= 25 && i <= 66);
    return cuts.length ? t.slice(0, Math.max(...cuts)).trim() : t;
  };
  const titleCore = shortTitle(baseTitle);
  const fullTitle = titleCore.length + BRAND.length + 3 <= 70 ? `${titleCore} | ${BRAND}` : titleCore;

  // Meta description: cap at 155 chars, cutting on a sentence or word boundary.
  const capDescription = (text: string, max = 155): string => {
    if (!text || text.length <= max) return text;
    const slice = text.slice(0, max);
    const sentenceEnd = Math.max(slice.lastIndexOf('. '), slice.lastIndexOf('; '));
    if (sentenceEnd > 80) return slice.slice(0, sentenceEnd + 1);
    const wordEnd = slice.lastIndexOf(' ');
    return slice.slice(0, wordEnd > 80 ? wordEnd : max).replace(/[,;:\s]+$/, '') + '…';
  };
  const metaDescription = capDescription(description);

  // Default keywords if not provided
  const defaultKeywordsFr = "Finxia Capital, SCSp Luxembourg, Datacenter AI, Hôtellerie Premium, Résidentiel Flex Living, Gestion Actifs Alternatifs, Green Bond ESG, Intelligence Artificielle";
  const defaultKeywordsEn = "Finxia Capital, Luxembourg SCSp, Datacenter AI, Premium Hospitality, Flex Living Residential, Alternative Asset Management, Green Bond ESG, Artificial Intelligence";
  const finalKeywords = keywords || (language === 'fr' ? defaultKeywordsFr : defaultKeywordsEn);
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
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
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="FINXIA Capital" />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
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
