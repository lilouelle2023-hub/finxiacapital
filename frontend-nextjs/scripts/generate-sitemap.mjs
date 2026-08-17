#!/usr/bin/env node
/**
 * Auto-generates /public/sitemap.xml from:
 *   - a static page registry (below)
 *   - the blog posts registry in /data/blogPosts.json
 *
 * Runs automatically before `next build` via the "prebuild" npm hook.
 *
 * Output: /public/sitemap.xml (overwritten on every build).
 *
 * To add a new static page → append to `STATIC_PAGES`.
 * To add a new blog post → edit /data/blogPosts.json (single source of truth).
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DATA_PATH = resolve(ROOT, 'data/blogPosts.json');
const OUT_PATH = resolve(ROOT, 'public/sitemap.xml');

const SITE = 'https://finxiacapital.com';
const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

/**
 * Static pages (non-blog).
 * Set `bilingual: true` when both FR and /en/ mirrors exist (emits hreflang alternates).
 * Set `bilingual: false` for FR-only pages (e.g. guides, author pages).
 */
const STATIC_PAGES = [
  { path: '/',                                         priority: '1.0', changefreq: 'weekly',  bilingual: true  },
  { path: '/about/',                                   priority: '0.8', changefreq: 'monthly', bilingual: true  },
  { path: '/strategies/',                              priority: '0.9', changefreq: 'monthly', bilingual: true  },
  { path: '/european-approach/',                       priority: '0.8', changefreq: 'monthly', bilingual: true  },
  { path: '/governance/',                              priority: '0.7', changefreq: 'monthly', bilingual: true  },
  { path: '/investors/',                               priority: '0.7', changefreq: 'monthly', bilingual: true  },
  { path: '/lila-benhammou/',                         priority: '0.8', changefreq: 'monthly', bilingual: true  },
  { path: '/jean-pierre-veron/',                      priority: '0.8', changefreq: 'monthly', bilingual: true  },
  { path: '/blog/',                                    priority: '0.8', changefreq: 'weekly',  bilingual: true  },
  { path: '/podcast/',                                 priority: '0.7', changefreq: 'weekly',  bilingual: true  },
  { path: '/newsletter/',                              priority: '0.7', changefreq: 'monthly', bilingual: true  },
  { path: '/contact/',                                 priority: '0.7', changefreq: 'monthly', bilingual: true  },
  { path: '/cookies/',                                 priority: '0.3', changefreq: 'yearly',  bilingual: true  },
  { path: '/guides/eed-directive-datacenter-2026/',    priority: '0.9', changefreq: 'monthly', bilingual: false },
  { path: '/auteurs/lila-benhammou/',                  priority: '0.7', changefreq: 'monthly', bilingual: false },
];

/**
 * Locale-aware static path rewriter.
 * Homepage "/" maps to "/en/", all other paths map to "/en<path>".
 */
const enPath = (path) => (path === '/' ? '/en/' : `/en${path}`);

/** Builds an <url> entry with optional hreflang alternates. */
const buildUrl = ({ loc, lastmod, changefreq, priority, alternates }) => {
  const alt = (alternates || [])
    .map(
      ({ lang, href }) =>
        `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`,
    )
    .join('\n');
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${alt ? '\n' + alt : ''}
  </url>`;
};

// ---- build sections ---------------------------------------------------------

const staticEntries = [];
for (const page of STATIC_PAGES) {
  const frUrl = `${SITE}${page.path}`;
  if (page.bilingual) {
    const enUrl = `${SITE}${enPath(page.path)}`;
    staticEntries.push(
      buildUrl({
        loc: frUrl,
        lastmod: today,
        changefreq: page.changefreq,
        priority: page.priority,
        alternates: [
          { lang: 'fr', href: frUrl },
          { lang: 'en', href: enUrl },
        ],
      }),
    );
    staticEntries.push(
      buildUrl({
        loc: enUrl,
        lastmod: today,
        changefreq: page.changefreq,
        priority: page.priority,
        alternates: [
          { lang: 'en', href: enUrl },
          { lang: 'fr', href: frUrl },
        ],
      }),
    );
  } else {
    staticEntries.push(
      buildUrl({
        loc: frUrl,
        lastmod: today,
        changefreq: page.changefreq,
        priority: page.priority,
        alternates: [],
      }),
    );
  }
}

// Blog posts: sort by date DESC so freshest appear first in sitemap.
const blogPosts = JSON.parse(readFileSync(DATA_PATH, 'utf-8'));
blogPosts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

const blogEntries = [];
for (const post of blogPosts) {
  const frUrl = `${SITE}/blog/${post.frSlug}/`;
  if (post.enSlug) {
    const enUrl = `${SITE}/en/blog/${post.enSlug}/`;
    blogEntries.push(
      buildUrl({
        loc: frUrl,
        lastmod: post.date,
        changefreq: 'monthly',
        priority: '0.7',
        alternates: [
          { lang: 'fr', href: frUrl },
          { lang: 'en', href: enUrl },
        ],
      }),
    );
    blogEntries.push(
      buildUrl({
        loc: enUrl,
        lastmod: post.date,
        changefreq: 'monthly',
        priority: '0.7',
        alternates: [
          { lang: 'en', href: enUrl },
          { lang: 'fr', href: frUrl },
        ],
      }),
    );
  } else {
    // FR-only post (no English translation yet). Emit FR entry only.
    blogEntries.push(
      buildUrl({
        loc: frUrl,
        lastmod: post.date,
        changefreq: 'monthly',
        priority: '0.8',
        alternates: [],
      }),
    );
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- AUTO-GENERATED by scripts/generate-sitemap.mjs — do not edit manually. -->
  <!-- Source of truth: /data/blogPosts.json + STATIC_PAGES array in the script. -->
  <!-- Regenerated on: ${today} -->

${[...staticEntries, ...blogEntries].join('\n\n')}

</urlset>
`;

writeFileSync(OUT_PATH, xml, 'utf-8');
console.log(
  `[sitemap] ${STATIC_PAGES.length} static pages + ${blogPosts.length} blog posts → ${OUT_PATH}`,
);
