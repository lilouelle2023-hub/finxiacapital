import React from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';
import blogPosts from '../data/blogPosts.json';

type Post = {
  frSlug: string;
  enSlug: string;
  date: string;
  category: string;
  title: { fr: string; en: string };
  sources?: { label: string; url: string }[];
};

const posts = blogPosts as unknown as Post[];
const STOP = new Set(['the','and','for','with','des','les','une','pour','dans','sur','que','qui','est','aux','par','vs','2026','2027','europe','datacenter','datacenters','de','du','la','le','en','et','au','a']);

const tokens = (s: string): Set<string> =>
  new Set(
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .split(/[^a-z0-9]+/)
      .filter((t) => t.length > 3 && !STOP.has(t))
  );

function findPost(slug: string): Post | undefined {
  return posts.find((p) => p.frSlug === slug || p.enSlug === slug);
}

function baseRelated(current: Post): Post[] {
  const sameCat = posts
    .filter((p) => p.category === current.category)
    .sort((a, b) => (a.date === b.date ? (a.frSlug < b.frSlug ? -1 : 1) : a.date < b.date ? -1 : 1));
  const out: Post[] = [];
  const add = (p?: Post) => {
    if (p && p.frSlug !== current.frSlug && !out.includes(p)) out.push(p);
  };
  const idx = sameCat.findIndex((p) => p.frSlug === current.frSlug);
  if (sameCat.length > 1 && idx >= 0) {
    add(sameCat[(idx + 1) % sameCat.length]);
    add(sameCat[(idx - 1 + sameCat.length) % sameCat.length]);
  }
  const cur = tokens(current.frSlug + ' ' + current.title.fr);
  const scored = posts
    .filter((p) => p.frSlug !== current.frSlug && !out.includes(p))
    .map((p) => {
      const t = tokens(p.frSlug + ' ' + p.title.fr);
      let s = 0;
      cur.forEach((x) => { if (t.has(x)) s += 1; });
      return { p, s };
    })
    .sort((a, b) => b.s - a.s || (a.p.date < b.p.date ? 1 : -1));
  scored.slice(0, 2).forEach(({ p }) => add(p));
  return out.slice(0, 4);
}

/** Related map for every post; any post left without an inbound link is appended to the
 *  list of its most similar article, so that no article is orphaned. */
const RELATED: Record<string, Post[]> = (() => {
  const map: Record<string, Post[]> = {};
  posts.forEach((p) => { map[p.frSlug] = baseRelated(p); });
  const inbound: Record<string, number> = {};
  posts.forEach((p) => map[p.frSlug].forEach((r) => { inbound[r.frSlug] = (inbound[r.frSlug] || 0) + 1; }));
  posts.filter((p) => !inbound[p.frSlug]).forEach((orphan) => {
    const o = tokens(orphan.frSlug + ' ' + orphan.title.fr);
    const best = posts
      .filter((p) => p.frSlug !== orphan.frSlug)
      .map((p) => {
        const t = tokens(p.frSlug + ' ' + p.title.fr);
        let s = 0;
        o.forEach((x) => { if (t.has(x)) s += 1; });
        return { p, s };
      })
      .sort((a, b) => b.s - a.s || (a.p.date < b.p.date ? 1 : -1))[0];
    if (best) map[best.p.frSlug].push(orphan);
  });
  return map;
})();

function relatedFor(current: Post): Post[] {
  return RELATED[current.frSlug] || [];
}

export default function RelatedArticles() {
  const router = useRouter();
  const { language } = useLanguage();
  const path = (router.asPath || '').split('?')[0].split('#')[0];
  const m = path.match(/^\/(?:en\/)?blog\/([^/]+)\/?$/);
  if (!m) return null;
  const current = findPost(m[1]);
  if (!current) return null;
  const related = relatedFor(current);
  const fr = language === 'fr';

  return (
    <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" data-testid="related-articles">
      {current.sources && current.sources.length > 0 && (
        <div className="mb-10 p-6 bg-slate-50 rounded-lg">
          <h2 className="font-serif text-xl mb-3">{fr ? 'Références consultées' : 'References consulted'}</h2>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            {current.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-[#C45A3B]">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {related.length > 0 && (
        <>
          <h2 className="font-serif text-2xl mb-4">{fr ? 'À lire aussi' : 'Related reading'}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((p) => (
              <a
                key={p.frSlug}
                href={fr ? `/blog/${p.frSlug}/` : `/en/blog/${p.enSlug}/`}
                className="block px-4 py-3 bg-white border border-slate-200 hover:border-[#C45A3B] text-sm text-slate-700 hover:text-[#C45A3B] transition-colors"
              >
                {fr ? p.title.fr : p.title.en}
              </a>
            ))}
          </div>
        </>
      )}
    </aside>
  );
}
