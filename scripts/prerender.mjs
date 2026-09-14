/**
 * Build-time pre-rendering.
 *
 * The site is a client-rendered SPA, so every URL served the same index.html:
 * the same <title>, the same meta description, no <h1>, and a canonical
 * pointing at the homepage. To a crawler that does not execute JavaScript -
 * and to every AI answer engine that does not - each page looked like a
 * duplicate of "/" with no content on it.
 *
 * This script runs after `vite build` and writes a real HTML file per route,
 * each with its own title, description, canonical, Open Graph tags, schema and
 * a readable content block. React replaces the content block on hydrate, so
 * visitors see exactly what they saw before.
 *
 * Deliberately dependency-free: the repo has a pnpm lockfile, and adding a
 * package that the lockfile does not contain fails a frozen-lockfile install.
 * Node built-ins only.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SITE = "https://www.maliksaadhasan.com";

/** Escape a string for use inside an HTML attribute or text node. */
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Pull the blog posts out of the data module by reading it as text.
 * The file is pure data with no imports, so this stays reliable without
 * needing a TypeScript loader.
 */
function readBlogPosts() {
  // Normalise line endings: the working tree on Windows checks out CRLF while
  // the CI checkout is LF, and the block patterns below assume LF.
  const src = readFileSync(join(ROOT, "src/app/data/blogPosts.ts"), "utf8").replace(/\r\n/g, "\n");
  const blocks = src.split(/\n {2}\{\n {4}slug: /).slice(1);
  const posts = [];

  for (const block of blocks) {
    const slug = (block.match(/^"([^"]+)"/) || [])[1];
    const title = (block.match(/\n {4}title:\s*(?:\n\s*)?"([^"]+)"/) || [])[1];
    const excerpt = (block.match(/\n {4}excerpt:\s*(?:\n\s*)?"([^"]+)"/) || [])[1];
    const category = (block.match(/\n {4}category:\s*"([^"]+)"/) || [])[1];
    const date = (block.match(/\n {4}date:\s*"([^"]+)"/) || [])[1];
    if (!slug || !title) continue;

    // "?? Question | Answer" blocks become FAQPage entries, matching what the
    // React component emits at runtime.
    const faqs = [];
    const faqRe = /"\?\? ([^"]*?) \| ([^"]*?)",/g;
    let m;
    while ((m = faqRe.exec(block)) !== null) {
      faqs.push({ q: m[1], a: m[2] });
    }

    posts.push({ slug, title, excerpt: excerpt || "", category, date, faqs });
  }
  return posts;
}

/** Read the metadata a page declares through usePageMeta, so it stays single-sourced. */
function readPageMeta(file) {
  const path = join(ROOT, "src/app/pages", file);
  if (!existsSync(path)) return null;
  const src = readFileSync(path, "utf8").replace(/\r\n/g, "\n");

  // Pages declare metadata one of two ways: a usePageMeta call, or props on
  // the shared SectionPage wrapper. Both are read so neither pattern is
  // silently skipped.
  let title = (src.match(/usePageMeta\(\{[\s\S]{0,400}?title:\s*"([^"]+)"/) || [])[1];
  let description = (src.match(/usePageMeta\(\{[\s\S]{0,800}?description:\s*"([^"]+)"/) || [])[1];
  let canonical = (src.match(/usePageMeta\(\{[\s\S]{0,1200}?canonical:\s*"([^"]+)"/) || [])[1];

  if (!title) {
    title = (src.match(/<SectionPage[\s\S]{0,600}?\stitle="([^"]+)"/) || [])[1];
    description = (src.match(/<SectionPage[\s\S]{0,900}?\sdescription="([^"]+)"/) || [])[1];
    canonical = (src.match(/<SectionPage[\s\S]{0,1200}?\scanonical="([^"]+)"/) || [])[1];
  }

  if (!title) return null;
  return { title, description: description || "", canonical };
}

const STATIC_PAGES = [
  { route: "/", file: "Home.tsx" },
  { route: "/about", file: "About.tsx" },
  { route: "/services", file: "Services.tsx" },
  { route: "/process", file: "Process.tsx" },
  { route: "/faq", file: "FAQ.tsx" },
  { route: "/case-studies", file: "CaseStudies.tsx" },
  { route: "/gallery", file: "WorkGallery.tsx" },
  { route: "/blog", file: "Blog.tsx" },
  { route: "/thank-you", file: "ThankYou.tsx", noindex: true },
];

/** Replace a tag if present, otherwise insert it before </head>. */
function upsert(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `  ${replacement}\n  </head>`);
}

function buildPage(shell, page) {
  let html = shell;
  const canonical = page.canonical || SITE + page.route;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`);
  html = upsert(
    html,
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${esc(page.description)}" />`
  );
  html = upsert(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${esc(canonical)}" />`
  );
  html = upsert(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${esc(canonical)}" />`
  );
  html = upsert(
    html,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${esc(page.title)}" />`
  );
  html = upsert(
    html,
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${esc(page.description)}" />`
  );
  html = upsert(
    html,
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="${page.ogType || "website"}" />`
  );
  html = upsert(
    html,
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${esc(page.title)}" />`
  );
  html = upsert(
    html,
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${esc(page.description)}" />`
  );

  if (page.noindex) {
    html = html.replace(
      /<meta name="robots" content="[^"]*" \/>/,
      '<meta name="robots" content="noindex, nofollow" />'
    );
  }

  if (page.jsonLd) {
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>\n  </head>`
    );
  }

  // Readable content for crawlers. React clears #root on mount, so this is
  // never visible to a visitor with JavaScript enabled.
  if (page.body) {
    html = html.replace('<div id="root"></div>', `<div id="root">${page.body}</div>`);
  }

  return html;
}

function writeRoute(route, html) {
  const dir = route === "/" ? DIST : join(DIST, route.replace(/^\//, ""));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf8");
}

function main() {
  const shellPath = join(DIST, "index.html");
  if (!existsSync(shellPath)) {
    console.error("[prerender] dist/index.html not found - run vite build first");
    process.exit(1);
  }
  const shell = readFileSync(shellPath, "utf8");
  const pages = [];

  for (const p of STATIC_PAGES) {
    const meta = readPageMeta(p.file);
    if (!meta) {
      // Failing loudly is deliberate. A skipped page silently falls back to
      // the SPA shell, which serves the homepage title and a canonical
      // pointing at "/" - exactly the bug this script exists to fix.
      throw new Error(
        `[prerender] could not read metadata from ${p.file}. ` +
          `Expected a usePageMeta call or SectionPage title/description/canonical props.`
      );
    }
    pages.push({
      route: p.route,
      title: meta.title,
      description: meta.description,
      canonical: meta.canonical || SITE + p.route,
      noindex: p.noindex,
      body: `<h1>${esc(meta.title)}</h1><p>${esc(meta.description)}</p>`,
    });
  }

  const posts = readBlogPosts();
  for (const post of posts) {
    const url = `${SITE}/blog/${post.slug}`;
    const graph = [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: "Malik Saad Hasan",
          jobTitle: "Performance Marketer",
          url: `${SITE}/about`,
        },
        publisher: { "@type": "Person", name: "Malik Saad Hasan" },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: post.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ];
    if (post.faqs.length > 0) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }

    const faqBody = post.faqs
      .map((f) => `<h2>${esc(f.q)}</h2><p>${esc(f.a)}</p>`)
      .join("");

    pages.push({
      route: `/blog/${post.slug}`,
      title: `${post.title} | Saad Hasan`,
      description: post.excerpt,
      canonical: url,
      ogType: "article",
      jsonLd: { "@context": "https://schema.org", "@graph": graph },
      body: `<article><h1>${esc(post.title)}</h1><p>${esc(post.excerpt)}</p>${faqBody}</article>`,
    });
  }

  for (const page of pages) {
    writeRoute(page.route, buildPage(shell, page));
  }

  console.log(
    `[prerender] wrote ${pages.length} routes (${posts.length} blog posts, ${pages.length - posts.length} static)`
  );
}

main();
