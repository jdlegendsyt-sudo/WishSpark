import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getFestivalBySlug } from "@/data/festivals";
import { getBlogPostBySlug } from "@/data/blogPosts";

type SeoMeta = {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  type?: "website" | "article";
  robots?: string;
  articlePublishedTime?: string;
  articleAuthor?: string;
};

const SITE_URL = "https://wishspark.xyz";
const SITE_NAME = "WishSpark";
const DEFAULT_ROBOTS = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
const BASE_KEYWORDS = [
  "WishSpark",
  "festival greeting card maker",
  "create wishes card online",
  "personalized wishes with name",
  "festival wishes with name",
  "free greeting cards online",
  "WhatsApp greeting card",
  "animated greeting card",
  "festival wishes",
  "online greeting card maker",
];

const TOOL_SEO: Record<string, Omit<SeoMeta, "canonicalPath">> = {
  "/tools/birthday-wishes-generator": {
    title: "Birthday Wishes with Name Generator Free Online | WishSpark",
    description: "Generate personalized happy birthday wishes with name online for free. Create share-ready birthday messages for WhatsApp, Instagram, and greeting cards in seconds.",
    keywords: ["birthday wishes generator", "birthday wishes with name", "happy birthday message generator", "personalized birthday wishes", "birthday wishes for WhatsApp"],
    type: "website",
  },
  "/tools/birthday-card-maker": {
    title: "Birthday Card Maker Online Free | Create Birthday Greeting Cards | WishSpark",
    description: "Create birthday cards online for free with custom name and message. Design beautiful birthday greeting cards instantly and share them with friends and family.",
    keywords: ["birthday card maker", "online birthday card maker", "free birthday card creator", "birthday greeting card online", "custom birthday card with name"],
    type: "website",
  },
  "/tools/age-calculator": {
    title: "Age Calculator Online Free | Calculate Exact Age from Date of Birth | WishSpark",
    description: "Use our free age calculator to find exact age from date of birth in years, months, and days. Instantly calculate birthday age and next birthday countdown.",
    keywords: ["age calculator", "calculate age from date of birth", "exact age calculator", "dob age calculator", "birthday age calculator"],
    type: "website",
  },
  "/tools/birthday-countdown": {
    title: "Birthday Countdown Timer Online Free | How Many Days Until My Birthday | WishSpark",
    description: "Find out how many days are left until your birthday with a free live birthday countdown timer. Track days, hours, minutes, and seconds online.",
    keywords: ["birthday countdown", "how many days until my birthday", "birthday countdown timer", "days until birthday", "birthday timer online"],
    type: "website",
  },
  "/tools/love-calculator": {
    title: "Love Calculator by Name | True Love Percentage Test Free Online | WishSpark",
    description: "Try the free love calculator by name and get a fun true love percentage instantly. Check love compatibility and share your result with friends.",
    keywords: ["love calculator", "love calculator by name", "true love percentage", "love compatibility test", "relationship percentage calculator"],
    type: "website",
  },
  "/tools/crush-calculator": {
    title: "Crush Calculator | Does My Crush Like Me? Free Test Online | WishSpark",
    description: "Use our free crush calculator to check crush compatibility by name. Get a fun answer to does my crush like me and share the result instantly.",
    keywords: ["crush calculator", "does my crush like me", "crush compatibility test", "crush love calculator", "name compatibility crush test"],
    type: "website",
  },
  "/tools/couple-name-generator": {
    title: "Couple Name Generator | Ship Name Creator Free Online | WishSpark",
    description: "Generate cute couple names and ship names online for free. Combine two names into fun romantic name ideas for bios, captions, and hashtags.",
    keywords: ["couple name generator", "ship name generator", "couple nickname generator", "combine names generator", "romantic name generator"],
    type: "website",
  },
  "/tools/friendship-calculator": {
    title: "Friendship Calculator | Friendship Percentage Test Free Online | WishSpark",
    description: "Check friendship percentage online with our free friendship calculator. Test best friend compatibility by name and share your friendship score.",
    keywords: ["friendship calculator", "friendship percentage test", "best friend compatibility", "friendship compatibility by name", "friendship score calculator"],
    type: "website",
  },
};

const STATIC_SEO: Record<string, Omit<SeoMeta, "canonicalPath">> = {
  "/": {
    title: "WishSpark | Free Festival Greeting Card Maker Online",
    description: "Create personalized festival wishes with your name for Onam, Diwali, Christmas, Eid, birthdays, anniversaries, and 35+ occasions. Share animated greeting links instantly.",
    keywords: ["festival greeting card maker", "create wishes card online", "festival wishes with name", "personalized greeting card", "free online greeting maker"],
    type: "website",
  },
  "/blog": {
    title: "WishSpark Blog | Festival Wishes, Greeting Ideas, and Celebration Tips",
    description: "Read WishSpark blog articles about festival traditions, greeting ideas, WhatsApp sharing tips, and celebration stories for Indian and global occasions.",
    keywords: ["festival blog", "greeting ideas blog", "festival wishes articles", "celebration tips", "WishSpark blog"],
    type: "website",
  },
  "/about": {
    title: "About WishSpark | Free Festival Greeting Card Maker",
    description: "Learn about WishSpark, the free online platform for creating personalized festival greeting cards, animated wishes, and shareable celebration links.",
    keywords: ["about WishSpark", "festival greeting card maker", "personalized greeting platform", "animated wishes site", "free greeting website"],
    type: "website",
  },
  "/how-it-works": {
    title: "How WishSpark Works | Create and Share Festival Greetings",
    description: "See how WishSpark works step by step. Choose a festival, add your name, generate a greeting link, and share animated wishes with friends and family.",
    keywords: ["how festival greeting maker works", "how to create greeting link", "WishSpark tutorial", "share festival wishes online", "animated greeting steps"],
    type: "website",
  },
  "/faq": {
    title: "FAQ | WishSpark Frequently Asked Questions",
    description: "Find answers about creating greeting cards, sharing festival wishes on WhatsApp, supported festivals, privacy, and how WishSpark works.",
    keywords: ["WishSpark FAQ", "festival greeting FAQ", "WhatsApp wishes help", "how to create greeting cards", "festival wishes questions"],
    type: "website",
  },
  "/contact": {
    title: "Contact WishSpark | Festival Greeting Support and Feedback",
    description: "Contact WishSpark for support, feedback, partnerships, or festival suggestions. Reach the team about greeting cards, tools, and website issues.",
    keywords: ["contact WishSpark", "festival greeting support", "WishSpark feedback", "greeting website contact", "festival suggestion contact"],
    type: "website",
  },
  "/privacy-policy": {
    title: "Privacy Policy | WishSpark Data and Cookie Information",
    description: "Read WishSpark privacy policy to understand how we handle names, cookies, analytics, and ad-related data while protecting user privacy.",
    keywords: ["WishSpark privacy policy", "festival website privacy", "cookie policy", "data protection", "AdSense privacy"],
    type: "website",
  },
  "/terms": {
    title: "Terms of Use | WishSpark Usage Guidelines",
    description: "Review WishSpark terms of use, website rules, and service guidelines for using festival greeting cards, tools, and shared links.",
    keywords: ["WishSpark terms", "terms of use", "website usage guidelines", "festival greeting terms", "service conditions"],
    type: "website",
  },
  "/disclaimer": {
    title: "Disclaimer | WishSpark Important Information",
    description: "Read the WishSpark disclaimer for website information, content usage, third-party links, and limitations related to our greeting tools and pages.",
    keywords: ["WishSpark disclaimer", "website disclaimer", "festival greeting disclaimer", "content disclaimer", "third party links disclaimer"],
    type: "website",
  },
  "/sitemap": {
    title: "Sitemap | WishSpark Pages, Festival Wishes, Blog, and Tools",
    description: "Browse the WishSpark sitemap to find all festival greeting pages, blog articles, greeting tools, and legal pages in one place.",
    keywords: ["WishSpark sitemap", "festival pages list", "greeting tools list", "blog sitemap", "all greeting pages"],
    type: "website",
  },
};

const dedupeKeywords = (keywords: string[]) => Array.from(new Set([...BASE_KEYWORDS, ...keywords]));

const ensureMetaByName = (name: string) => {
  let meta = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  return meta;
};

const ensureMetaByProperty = (property: string) => {
  let meta = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  return meta;
};

const ensureCanonicalLink = () => {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  return link;
};

const normalizePath = (pathname: string) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

const formatDate = (date: string) => {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
};

const buildSeoMeta = (pathname: string): SeoMeta => {
  const normalizedPath = normalizePath(pathname);

  if (STATIC_SEO[normalizedPath]) {
    return {
      ...STATIC_SEO[normalizedPath],
      canonicalPath: normalizedPath,
    };
  }

  if (TOOL_SEO[normalizedPath]) {
    return {
      ...TOOL_SEO[normalizedPath],
      canonicalPath: normalizedPath,
    };
  }

  if (normalizedPath.startsWith("/blog/")) {
    const slug = normalizedPath.replace("/blog/", "");
    const post = getBlogPostBySlug(slug);
    if (post) {
      return {
        title: `${post.title} | WishSpark Blog`,
        description: post.excerpt,
        keywords: [
          post.title,
          `${post.category.toLowerCase()} blog`,
          "festival blog article",
          "greeting ideas",
          "celebration tips",
        ],
        canonicalPath: normalizedPath,
        type: "article",
        articlePublishedTime: formatDate(post.date),
        articleAuthor: post.author,
      };
    }
  }

  const festivalSlug = normalizedPath.slice(1);
  const festival = getFestivalBySlug(festivalSlug);
  if (festival) {
    return {
      title: `${festival.name} Wishes with Name | Free ${festival.name} Greeting Card Maker | WishSpark`,
      description: `Create free ${festival.name} wishes with your name and share a personalized ${festival.name} greeting card online. ${festival.description}`,
      keywords: [
        ...festival.keywords,
        `${festival.name.toLowerCase()} wishes`,
        `${festival.name.toLowerCase()} greetings`,
        `${festival.name.toLowerCase()} wishes with name`,
        `${festival.name.toLowerCase()} card maker`,
        `happy ${festival.name.toLowerCase()} wishes`,
      ],
      canonicalPath: normalizedPath,
      type: "website",
    };
  }

  return {
    title: "Page Not Found | WishSpark",
    description: "The page you are looking for does not exist. Browse WishSpark festival wishes, greeting tools, blog articles, and celebration pages from the homepage.",
    keywords: ["page not found", "WishSpark", "festival wishes", "greeting card maker", "404 page"],
    canonicalPath: normalizedPath,
    type: "website",
    robots: "noindex, follow",
  };
};

const SeoManager = () => {
  const location = useLocation();

  const meta = useMemo(() => buildSeoMeta(location.pathname), [location.pathname]);

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${meta.canonicalPath === "/" ? "/" : meta.canonicalPath}`;
    const keywords = dedupeKeywords(meta.keywords).join(", ");
    const robots = meta.robots ?? DEFAULT_ROBOTS;

    document.title = meta.title;

    ensureMetaByName("description").setAttribute("content", meta.description);
    ensureMetaByName("keywords").setAttribute("content", keywords);
    ensureMetaByName("robots").setAttribute("content", robots);

    ensureMetaByProperty("og:title").setAttribute("content", meta.title);
    ensureMetaByProperty("og:description").setAttribute("content", meta.description);
    ensureMetaByProperty("og:url").setAttribute("content", canonicalUrl);
    ensureMetaByProperty("og:type").setAttribute("content", meta.type ?? "website");
    ensureMetaByProperty("og:site_name").setAttribute("content", SITE_NAME);

    ensureMetaByName("twitter:card").setAttribute("content", "summary_large_image");
    ensureMetaByName("twitter:title").setAttribute("content", meta.title);
    ensureMetaByName("twitter:description").setAttribute("content", meta.description);

    const canonicalLink = ensureCanonicalLink();
    canonicalLink.setAttribute("href", canonicalUrl);

    const articlePublishedMeta = ensureMetaByProperty("article:published_time");
    const articleAuthorMeta = ensureMetaByProperty("article:author");

    if (meta.articlePublishedTime) {
      articlePublishedMeta.setAttribute("content", meta.articlePublishedTime);
    } else {
      articlePublishedMeta.remove();
    }

    if (meta.articleAuthor) {
      articleAuthorMeta.setAttribute("content", meta.articleAuthor);
    } else {
      articleAuthorMeta.remove();
    }
  }, [meta]);

  return null;
};

export default SeoManager;