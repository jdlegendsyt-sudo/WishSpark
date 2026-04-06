import { getBlogPostBySlug } from "@/data/blogPosts";

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
