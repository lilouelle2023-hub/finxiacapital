#!/usr/bin/env node
// Warn-only SEO lint for blog entries (runs in prebuild). Never fails the build.
import { readFileSync } from 'node:fs';
const posts = JSON.parse(readFileSync(new URL('../data/blogPosts.json', import.meta.url), 'utf-8'));
let warn = 0;
const seen = new Map();
for (const p of posts) {
  for (const l of ['fr', 'en']) {
    const t = p.title?.[l] || '';
    if (t.length > 70) { warn++; console.warn(`[seo-lint] title>70 (${t.length}) ${p.frSlug} [${l}]`); }
    const k = `${l}:${t.toLowerCase()}`;
    if (seen.has(k)) { warn++; console.warn(`[seo-lint] duplicate title ${p.frSlug} = ${seen.get(k)} [${l}]`); } else seen.set(k, p.frSlug);
  }
  if (!p.enSlug) { warn++; console.warn(`[seo-lint] missing enSlug ${p.frSlug}`); }
}
console.log(`[seo-lint] ${posts.length} posts checked, ${warn} warning(s). (Meta descriptions are capped to 155 chars at render time.)`);
