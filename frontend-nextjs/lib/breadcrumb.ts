/**
 * Build a BreadcrumbList JSON-LD schema that is locale-aware.
 *
 * @param language - 'fr' | 'en'
 * @param path - page path without leading slash, e.g. 'governance' or 'blog/article-slug'
 * @param label - breadcrumb label, e.g. "Gouvernance" / "Governance"
 * @returns BreadcrumbList schema object
 */
export function buildBreadcrumbSchema(
  language: 'fr' | 'en',
  path: string,
  label: string
) {
  const base = 'https://finxiacapital.com';
  const homeName = language === 'fr' ? 'Accueil' : 'Home';
  const homeUrl = language === 'fr' ? `${base}/` : `${base}/en/`;
  const pageUrl = language === 'fr' ? `${base}/${path}/` : `${base}/en/${path}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeName,
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: label,
        item: pageUrl,
      },
    ],
  };
}
