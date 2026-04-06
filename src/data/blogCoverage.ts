import { getBlogPostBySlug } from "@/data/blogPosts";
import { festivals } from "@/data/festivals";

export type CoverageReference = {
  label: string;
  url: string;
};

export const toolBlogSlugByPath: Record<string, string> = {
  "/tools/birthday-wishes-generator": "birthday-wishes-generator-personalized-messages-relationships",
  "/tools/birthday-card-maker": "birthday-card-maker-personalized-greetings-free-online",
  "/tools/age-calculator": "how-to-calculate-your-exact-age-in-days-hours-milestones",
  "/tools/birthday-countdown": "birthday-countdown-building-anticipation-and-celebration-planning",
  "/tools/love-calculator": "do-love-calculators-actually-work-science-and-fun",
  "/tools/crush-calculator": "crush-calculator-fun-vs-real-signals",
  "/tools/couple-name-generator": "couple-name-generator-creative-ship-name-guide",
  "/tools/friendship-calculator": "friendship-calculator-meaningful-friendship-signs",
  "/tools/qr-code-generator": "how-to-create-qr-codes-for-free-complete-guide",
  "/tools/qr-code-scanner": "how-to-scan-qr-codes-online-without-apps",
  "/tools/instagram-hashtag-generator": "best-instagram-hashtags-for-growth-in-2026",
  "/tools/emi-calculator": "how-to-calculate-emi-easily-full-guide",
};

export const festivalBlogSlugByFestivalSlug: Record<string, string> = {
  "onam-wishes": "onam-traditions-you-didnt-know",
  "vishu-wishes": "vishu-kani-kerala-new-year-traditions",
  "christmas-wishes": "christmas-vs-new-year-greetings",
  "new-year-wishes": "new-year-resolutions-actually-keep",
  "diwali-wishes": "diwali-around-the-world",
  "eid-mubarak-wishes": "eid-mubarak-greeting-guide",
  "holi-wishes": "holi-beyond-colors-tradition-and-safety",
  "raksha-bandhan-wishes": "raksha-bandhan-long-distance",
  "independence-day-wishes": "independence-day-india-celebration-traditions",
  "republic-day-wishes": "republic-day-constitution-indian-democracy",
  "valentines-day-wishes": "valentines-day-love-beyond-romance",
  "mothers-day-wishes": "mothers-day-beyond-flowers",
  "fathers-day-wishes": "fathers-day-beyond-gifts-gratitude",
  "birthday-wishes": "birthday-wishes-that-dont-suck",
  "anniversary-wishes": "anniversary-milestones-relationships-lasting",
  "thanksgiving-wishes": "thanksgiving-gratitude-practice",
  "easter-wishes": "easter-resurrection-renewal-traditions",
  "pongal-wishes": "pongal-harvest-traditions-and-modern-celebration",
  "makar-sankranti-wishes": "makar-sankranti-kites-season-and-significance",
  "navratri-wishes": "navratri-nine-nights-meaning-and-celebration-guide",
  "durga-puja-wishes": "durga-puja-culture-art-and-devotion-explained",
  "ganesh-chaturthi-wishes": "ganesh-chaturthi-home-celebration-and-eco-friendly-tips",
  "janmashtami-wishes": "janmashtami-krishna-birth-traditions-and-family-rituals",
  "baisakhi-wishes": "baisakhi-harvest-new-year-and-community-spirit",
  "lohri-wishes": "lohri-bonfire-traditions-and-winter-festival-guide",
  "ugadi-wishes": "ugadi-new-year-rituals-and-food-symbolism",
  "bihu-wishes": "bihu-assam-celebration-dance-music-and-harvest",
  "ramadan-wishes": "ramadan-reflection-fasting-and-respectful-greetings",
  "friendship-day-wishes": "friendship-day-how-to-appreciate-friends-meaningfully",
  "teachers-day-wishes": "teachers-day-gratitude-and-mentor-impact",
  "childrens-day-wishes": "childrens-day-joy-rights-and-celebration",
  "womens-day-wishes": "womens-day-progress-equality-and-everyday-respect",
  "wedding-wishes": "wedding-wishes-etiquette-and-meaningful-blessings",
  "baby-shower-wishes": "baby-shower-wishes-and-celebration-ideas",
  "graduation-wishes": "graduation-milestones-messages-and-next-chapter",
};

export const getToolBlogPost = (toolPath: string) => {
  const slug = toolBlogSlugByPath[toolPath];
  return slug ? getBlogPostBySlug(slug) : undefined;
};

export const getFestivalBlogPost = (festivalSlug: string) => {
  const slug = festivalBlogSlugByFestivalSlug[festivalSlug];
  return slug ? getBlogPostBySlug(slug) : undefined;
};

const festivalSlugByBlogSlug = Object.fromEntries(
  Object.entries(festivalBlogSlugByFestivalSlug).map(([festivalSlug, blogSlug]) => [blogSlug, festivalSlug]),
) as Record<string, string>;

const toolPathByBlogSlug = Object.fromEntries(
  Object.entries(toolBlogSlugByPath).map(([toolPath, blogSlug]) => [blogSlug, toolPath]),
) as Record<string, string>;

const toolReferencesByPath: Record<string, CoverageReference[]> = {
  "/tools/age-calculator": [
    { label: "CDC - Growth and Age Resources", url: "https://www.cdc.gov/growthcharts/" },
    { label: "NIST - Date and Time Standards", url: "https://www.nist.gov/pml/time-and-frequency-division" },
  ],
  "/tools/birthday-wishes-generator": [
    { label: "APA - Positive Social Connection", url: "https://www.apa.org/news" },
    { label: "Pew Research - Messaging and Communication", url: "https://www.pewresearch.org/internet/" },
  ],
  "/tools/birthday-card-maker": [
    { label: "Nielsen Norman Group - Writing for Web Users", url: "https://www.nngroup.com/articles/how-users-read-on-the-web/" },
    { label: "Canva Design School - Visual Communication Basics", url: "https://www.canva.com/learn/" },
  ],
  "/tools/birthday-countdown": [
    { label: "APA - The Psychology of Anticipation", url: "https://www.apa.org/monitor" },
    { label: "timeanddate.com - Date Duration Tools", url: "https://www.timeanddate.com/date/duration.html" },
  ],
  "/tools/love-calculator": [
    { label: "Gottman Institute - Relationship Research", url: "https://www.gottman.com/blog/" },
    { label: "APA - Human Relationships and Wellbeing", url: "https://www.apa.org/topics/relationships" },
  ],
  "/tools/crush-calculator": [
    { label: "APA - Adolescent and Social Development", url: "https://www.apa.org/topics/teens" },
    { label: "Verywell Mind - Reading Social Signals", url: "https://www.verywellmind.com/" },
  ],
  "/tools/couple-name-generator": [
    { label: "Merriam-Webster - Portmanteau Definition", url: "https://www.merriam-webster.com/dictionary/portmanteau" },
    { label: "Oxford Reference - Naming and Language", url: "https://www.oxfordreference.com/" },
  ],
  "/tools/friendship-calculator": [
    { label: "Harvard Health - Social Connection", url: "https://www.health.harvard.edu/topics/mental-health" },
    { label: "APA - Friendship and Mental Health", url: "https://www.apa.org/monitor" },
  ],
  "/tools/qr-code-generator": [
    { label: "ISO/IEC 18004 QR Code Standard Overview", url: "https://www.iso.org/standard/62021.html" },
    { label: "Google - QR Codes in Chrome", url: "https://support.google.com/chrome/" },
  ],
  "/tools/qr-code-scanner": [
    { label: "OWASP - Safer Link Handling", url: "https://owasp.org/www-project-top-ten/" },
    { label: "NCSC - Phishing and Suspicious Links", url: "https://www.ncsc.gov.uk/guidance/phishing" },
  ],
  "/tools/instagram-hashtag-generator": [
    { label: "Instagram Creators - Best Practices", url: "https://creators.instagram.com/" },
    { label: "Meta Business - Content Performance", url: "https://www.facebook.com/business/learn" },
  ],
  "/tools/emi-calculator": [
    { label: "RBI - Consumer Education", url: "https://www.rbi.org.in/commonperson/English/default.aspx" },
    { label: "Investopedia - EMI and Loan Basics", url: "https://www.investopedia.com/" },
  ],
};

export const getFestivalSlugByBlogSlug = (blogSlug: string) => festivalSlugByBlogSlug[blogSlug];

export const getToolPathByBlogSlug = (blogSlug: string) => toolPathByBlogSlug[blogSlug];

export const getToolExternalReferences = (toolPath: string): CoverageReference[] =>
  toolReferencesByPath[toolPath] ?? [];

export const getAutoReferencesForBlogSlug = (blogSlug: string): CoverageReference[] => {
  const festivalSlug = getFestivalSlugByBlogSlug(blogSlug);
  if (festivalSlug) {
    const festival = festivals.find((item) => item.slug === festivalSlug);
    const festivalName = festival?.name ?? festivalSlug.replace(/-wishes$/, "").replace(/-/g, " ");
    const query = encodeURIComponent(festivalName);

    return [
      {
        label: `Wikipedia - ${festivalName}`,
        url: `https://en.wikipedia.org/wiki/Special:Search?search=${query}`,
      },
      {
        label: `timeanddate.com - ${festivalName} and related observances`,
        url: `https://www.timeanddate.com/holidays/?query=${query}`,
      },
    ];
  }

  const toolPath = getToolPathByBlogSlug(blogSlug);
  return toolPath ? getToolExternalReferences(toolPath) : [];
};
