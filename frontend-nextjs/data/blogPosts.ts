/**
 * Typed wrapper around `blogPosts.json` (single source of truth).
 *
 * The raw data lives in `/app/frontend-nextjs/data/blogPosts.json` so that
 * both the React app (SSG pages) AND the sitemap generator Node script can
 * consume the exact same registry without any duplication.
 *
 * When publishing a new article:
 *   1. Add its entry to `blogPosts.json` (top of file preferred, but order is irrelevant).
 *   2. Create the page under `/pages/blog/<frSlug>.tsx` (+ optional `/pages/en/blog/<enSlug>.tsx`).
 *   3. Run `yarn build` — the homepage "Actualités" block AND `public/sitemap.xml`
 *      will be regenerated automatically.
 */

import blogPostsRaw from './blogPosts.json';

export type BlogCategory =
  | 'Investment Strategy'
  | 'Digital Infrastructure'
  | 'Regulatory Compliance'
  | 'TITAN Strategy'
  | 'Technical Guide'
  | 'Structure & Governance'
  | 'AI-Native'
  | 'Market Analysis';

export type BlogPost = {
  /** Filename slug under /pages/blog/<frSlug>.tsx — canonical link for FR (and EN fallback when no translation). */
  frSlug: string;
  /** Optional English-only slug under /pages/en/blog/<enSlug>.tsx (if a dedicated translation exists). */
  enSlug?: string;
  /** ISO date (YYYY-MM-DD). Used for sorting (most recent first) and sitemap `<lastmod>`. */
  date: string;
  /** Reading time badge (e.g. "10 min"). */
  readTime: string;
  /** Tag / category used for the coloured label on cards. */
  category: BlogCategory;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
};

export const blogPosts: BlogPost[] = blogPostsRaw as BlogPost[];

/** Posts sorted by date descending (most recent first). */
export const getSortedBlogPosts = (): BlogPost[] =>
  [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/** N most recent posts. */
export const getLatestBlogPosts = (count: number): BlogPost[] =>
  getSortedBlogPosts().slice(0, count);

/**
 * Canonical blog URL for a given language.
 * EN uses `/en/blog/<enSlug>` when a translation exists, otherwise falls back to FR slug.
 */
export const getBlogPostHref = (post: BlogPost, language: 'fr' | 'en'): string => {
  if (language === 'en' && post.enSlug) return `/en/blog/${post.enSlug}/`;
  return `/blog/${post.frSlug}/`;
};

/** Localized date for card display (e.g. "23 mai 2026" / "May 23, 2026"). */
export const formatBlogDate = (isoDate: string, language: 'fr' | 'en'): string => {
  const d = new Date(`${isoDate}T00:00:00Z`);
  return d.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
};
