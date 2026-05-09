/**
 * prerender.mjs — WishSpark Static HTML Pre-renderer
 *
 * Run after `vite build`:
 *   node scripts/prerender.mjs
 *
 * This script creates a real HTML file for every route so that
 * Google / AdSense bots get correct <title>, <meta>, and <canonical>
 * without needing JavaScript.
 *
 * Add to package.json scripts:
 *   "build:prod": "vite build && node scripts/prerender.mjs"
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://www.wishspark.xyz";

// ── Read slugs from source ────────────────────────────────────────────────────
const readSlugs = (file, pattern) => {
  const src = readFileSync(path.join(ROOT, file), "utf8");
  return [...src.matchAll(pattern)].map((m) => m[1]);
};

const festivalSlugs = readSlugs(
  "src/data/festivals.ts",
  /slug:\s*"([^"]+)"/g
);

const blogSlugs = readSlugs(
  "src/data/blogPosts.ts",
  /slug:\s*"([^"]+)"/g
);

// ── All routes ────────────────────────────────────────────────────────────────
const STATIC_ROUTES = [
  "/",
  "/blog",
  "/about",
  "/authors",
  "/editorial-policy",
  "/how-it-works",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/sitemap",
  "/tools/birthday-wishes-generator",
  "/tools/birthday-card-maker",
  "/tools/age-calculator",
  "/tools/birthday-countdown",
  "/tools/love-calculator",
  "/tools/crush-calculator",
  "/tools/couple-name-generator",
  "/tools/friendship-calculator",
  "/tools/qr-code-generator",
  "/tools/qr-code-scanner",
  "/tools/instagram-hashtag-generator",
  "/tools/emi-calculator",
];

const FESTIVAL_ROUTES = festivalSlugs.map((s) => `/${s}`);
const BLOG_ROUTES = blogSlugs.map((s) => `/blog/${s}`);

const ALL_ROUTES = [...STATIC_ROUTES, ...FESTIVAL_ROUTES, ...BLOG_ROUTES];

// ── SEO data per route ────────────────────────────────────────────────────────
const STATIC_SEO = {
  "/": {
    title: "WishSpark | Free Festival Greeting Card Maker Online",
    description: "Create personalized festival wishes with your name for 35+ occasions including Onam, Diwali, Christmas, Eid, and birthdays. Make and share greeting links instantly.",
  },
  "/blog": {
    title: "WishSpark Blog | Festival Wishes, Greeting Ideas, and Celebration Tips",
    description: "Read WishSpark blog articles about festival traditions, greeting ideas, WhatsApp sharing tips, and celebration stories for Indian and global occasions.",
  },
  "/about": {
    title: "About WishSpark | Free Festival Greeting Card Maker",
    description: "Learn about WishSpark, the free online platform for creating personalized festival greeting cards, animated wishes, and shareable celebration links.",
  },
  "/how-it-works": {
    title: "How WishSpark Works | Create and Share Festival Greetings",
    description: "See how WishSpark works step by step. Choose a festival, add your name, generate a greeting link, and share animated wishes instantly.",
  },
  "/authors": {
    title: "WishSpark Authors | Editorial Contributors and Content Team",
    description: "Meet the WishSpark authors and contributors behind our festival, relationship, and utility content.",
  },
  "/editorial-policy": {
    title: "Editorial Policy | WishSpark Content Standards",
    description: "Read the WishSpark editorial policy covering content quality standards, fact checks, human review, updates, corrections, and advertising independence.",
  },
  "/faq": {
    title: "FAQ | WishSpark Frequently Asked Questions",
    description: "Find answers about creating greeting cards, sharing festival wishes on WhatsApp, supported festivals, privacy, and how WishSpark works.",
  },
  "/contact": {
    title: "Contact WishSpark | Festival Greeting Support and Feedback",
    description: "Contact WishSpark for support, feedback, partnerships, and festival suggestions.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | WishSpark Data and Cookie Information",
    description: "Read WishSpark privacy policy to understand how we handle names, cookies, analytics, and ad-related data while protecting user privacy.",
  },
  "/terms": {
    title: "Terms of Use | WishSpark Usage Guidelines",
    description: "Review WishSpark terms of use, website rules, and service guidelines for using festival greeting cards, tools, and shared links.",
  },
  "/disclaimer": {
    title: "Disclaimer | WishSpark Important Information",
    description: "Read the WishSpark disclaimer for website information, content usage, third-party links, and limitations.",
  },
  "/sitemap": {
    title: "Sitemap | WishSpark Pages, Festival Wishes, Blog, and Tools",
    description: "Browse the WishSpark sitemap to find all festival greeting pages, blog articles, greeting tools, and legal pages in one place.",
  },
  "/tools/birthday-wishes-generator": {
    title: "Birthday Wishes Generator Free Online | WishSpark",
    description: "Generate personalized happy birthday wishes with name online for free. Create share-ready birthday messages for WhatsApp and Instagram in seconds.",
  },
  "/tools/birthday-card-maker": {
    title: "Birthday Card Maker Free Online | Custom Cards | WishSpark",
    description: "Create birthday cards online for free with custom name and message. Design beautiful birthday greeting cards instantly.",
  },
  "/tools/age-calculator": {
    title: "Age Calculator Free | Exact Age from DOB | WishSpark",
    description: "Use our free age calculator to find exact age from date of birth in years, months, and days.",
  },
  "/tools/birthday-countdown": {
    title: "Birthday Countdown Timer Free | Days to Birthday | WishSpark",
    description: "Find out how many days are left until your birthday with a free live birthday countdown timer.",
  },
  "/tools/love-calculator": {
    title: "Love Calculator by Name | Free Love Test | WishSpark",
    description: "Try the free love calculator by name and get a fun true love percentage instantly.",
  },
  "/tools/crush-calculator": {
    title: "Crush Calculator | Does My Crush Like Me? | WishSpark",
    description: "Use our free crush calculator to check crush compatibility by name.",
  },
  "/tools/couple-name-generator": {
    title: "Couple Name Generator | Ship Name Creator | WishSpark",
    description: "Generate cute couple names and ship names online for free.",
  },
  "/tools/friendship-calculator": {
    title: "Friendship Calculator | Best Friend Test | WishSpark",
    description: "Check friendship percentage online with our free friendship calculator.",
  },
  "/tools/qr-code-generator": {
    title: "Free QR Code Generator | Download PNG | WishSpark",
    description: "Create QR codes online for free from text, links, and messages.",
  },
  "/tools/qr-code-scanner": {
    title: "QR Code Scanner Online | Scan From Image | WishSpark",
    description: "Scan QR codes online from an image or live camera without installing an app.",
  },
  "/tools/instagram-hashtag-generator": {
    title: "Instagram Hashtag Generator | Hashtags for Growth | WishSpark",
    description: "Generate Instagram hashtags for reels, creators, and business posts.",
  },
  "/tools/emi-calculator": {
    title: "EMI Calculator | Loan EMI & Interest Online | WishSpark",
    description: "Calculate monthly EMI online for home, car, education, and personal loans.",
  },
};

// Festival SEO auto-generated
const getFestivalSeo = (slug) => {
  const name = slug
    .replace(/-wishes$/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${name} Wishes with Name | Greeting Card Maker | WishSpark`,
    description: `Create free ${name} wishes with your name and share a personalized ${name} greeting card online instantly on WhatsApp.`,
  };
};

// Blog SEO auto-generated
const getBlogSeo = (slug) => {
  const name = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${name} | WishSpark Blog`,
    description: `Read about ${name.toLowerCase()} on the WishSpark blog. Festival traditions, greeting ideas, and celebration tips.`,
    type: "article",
  };
};

const getSeo = (route) => {
  if (STATIC_SEO[route]) return { ...STATIC_SEO[route], type: "website" };
  if (route.startsWith("/blog/")) return getBlogSeo(route.replace("/blog/", ""));
  return getFestivalSeo(route.slice(1));
};

// ── Template builder ──────────────────────────────────────────────────────────
const baseHtml = readFileSync(path.join(DIST, "index.html"), "utf8");

const buildHtml = (route) => {
  const seo = getSeo(route);
  const canonicalUrl = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const title = seo.title;
  const description = seo.description;
  const type = seo.type || "website";

  return baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${description}"`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${canonicalUrl}"`
    )
    .replace(
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${canonicalUrl}"`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${title}"`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${description}"`
    )
    .replace(
      /<meta property="og:type" content="[^"]*"/,
      `<meta property="og:type" content="${type}"`
    )
    .replace(
      /<meta name="twitter:url" content="[^"]*"/,
      `<meta name="twitter:url" content="${canonicalUrl}"`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"/,
      `<meta name="twitter:title" content="${title}"`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${description}"`
    );
};

// ── Write files ───────────────────────────────────────────────────────────────
let count = 0;

for (const route of ALL_ROUTES) {
  const html = buildHtml(route);

  if (route === "/") {
    writeFileSync(path.join(DIST, "index.html"), html, "utf8");
  } else {
    const dir = path.join(DIST, route.slice(1));
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, "index.html"), html, "utf8");
  }

  count++;
  console.log(`✅ ${route}`);
}

console.log(`\n🎉 Prerendered ${count} pages successfully!`);
