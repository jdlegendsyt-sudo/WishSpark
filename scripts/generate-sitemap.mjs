import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SITE_URL = "https://www.wishspark.xyz";

const FESTIVALS_FILE = path.join(ROOT, "src", "data", "festivals.ts");
const BLOG_FILE = path.join(ROOT, "src", "data", "blogPosts.ts");
const OUTPUT_FILE = path.join(ROOT, "public", "sitemap.xml");
const NOW_ISO_DATE = new Date().toISOString().split("T")[0];

const STATIC_PATHS = [
  "/",
  "/blog",
  "/about",
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

const escapeXml = (value) => value
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/\"/g, "&quot;")
  .replace(/'/g, "&apos;");

const readFestivalPaths = () => {
  const src = readFileSync(FESTIVALS_FILE, "utf8");
  const matches = src.matchAll(/slug:\s*"([^"]+)"/g);
  return [...matches].map((m) => `/${m[1]}`);
};

const readBlogPaths = () => {
  const src = readFileSync(BLOG_FILE, "utf8");
  const matches = src.matchAll(/slug:\s*"([^"]+)"/g);
  return [...matches].map((m) => `/blog/${m[1]}`);
};

const buildUrlNode = (pathname) => {
  const loc = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
  const isHome = pathname === "/";
  const isTool = pathname.startsWith("/tools/");
  const isBlogPost = pathname.startsWith("/blog/");
  const isBlogIndex = pathname === "/blog";
  const isLegal = ["/privacy-policy", "/terms", "/disclaimer"].includes(pathname);

  const changefreq = isHome
    ? "daily"
    : isBlogIndex || isBlogPost
      ? "weekly"
      : isTool
        ? "weekly"
        : isLegal
          ? "yearly"
          : "monthly";

  const priority = isHome
    ? "1.0"
    : isBlogIndex
      ? "0.9"
      : isTool || isBlogPost
        ? "0.8"
        : isLegal
          ? "0.4"
          : "0.7";

  return [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${NOW_ISO_DATE}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
};

const allPaths = [
  ...STATIC_PATHS,
  ...readBlogPaths(),
  ...readFestivalPaths(),
];

const uniquePaths = [...new Set(allPaths)];

const xml = [
  "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
  "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
  ...uniquePaths.map(buildUrlNode),
  "</urlset>",
  "",
].join("\n");

writeFileSync(OUTPUT_FILE, xml, "utf8");
console.log(`Generated sitemap with ${uniquePaths.length} URLs at ${OUTPUT_FILE}`);
