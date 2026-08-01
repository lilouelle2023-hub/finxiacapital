import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read blog posts data
const blogPosts = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/blogPosts.json'), 'utf-8'));

const SITE_URL = 'https://finxiacapital.com';
const FEED_PATH = path.join(__dirname, '../public/feed.xml');

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatRFC822Date(dateStr) {
  const date = new Date(dateStr);
  return date.toUTCString();
}

// Generate RSS feed
const rssItems = blogPosts.map(post => {
  const frUrl = `${SITE_URL}/blog/${post.frSlug}/`;
  const enUrl = post.enSlug ? `${SITE_URL}/en/blog/${post.enSlug}/` : null;
  const title = escapeXml(post.title.fr);
  const description = escapeXml(post.excerpt.fr);
  const pubDate = formatRFC822Date(post.date);
  const category = escapeXml(post.category);
  
  let enclosure = '';
  if (post.heroImage) {
    enclosure = `<enclosure url="${escapeXml(post.heroImage)}" type="image/jpeg" />`;
  }
  
  let alternateLinks = '';
  if (enUrl) {
    alternateLinks = `
      <link rel="alternate" hreflang="en" href="${escapeXml(enUrl)}" />`;
  }

  return `    <item>
      <title>${title}</title>
      <link>${escapeXml(frUrl)}</link>
      <guid isPermaLink="true">${escapeXml(frUrl)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
      <category>${category}</category>${alternateLinks}
      ${enclosure}
    </item>`;
}).join('\n');

const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>FINXIA Capital — Blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>Investissement en infrastructure datacenter IA en Europe. Analyses stratégiques, réglementation EED, et opportunités brown-to-green.</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/logo-finxia.png</url>
      <title>FINXIA Capital</title>
      <link>${SITE_URL}/</link>
    </image>
${rssItems}
  </channel>
</rss>`;

// Write feed
fs.writeFileSync(FEED_PATH, rssFeed, 'utf-8');
console.log(`✅ RSS feed generated: ${FEED_PATH}`);
console.log(`   ${blogPosts.length} articles included`);
