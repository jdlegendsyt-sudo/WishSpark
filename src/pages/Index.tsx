import { lazy, Suspense, useEffect } from "react";
import { Gift, ArrowDown, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import FestivalCard from "@/components/FestivalCard";
import { festivals } from "@/data/festivals";

const Footer = lazy(() => import("@/components/Footer"));
const AdBanner = lazy(() => import("@/components/AdBanner"));

const tools = [
  { name: "Birthday Wishes Generator", desc: "Create personalized birthday wishes with name", emoji: "🎂", path: "/tools/birthday-wishes-generator" },
  { name: "Birthday Card Maker", desc: "Design beautiful birthday greeting cards free", emoji: "🎁", path: "/tools/birthday-card-maker" },
  { name: "Age Calculator", desc: "Calculate exact age from date of birth", emoji: "🧮", path: "/tools/age-calculator" },
  { name: "Birthday Countdown", desc: "How many days until your next birthday?", emoji: "⏳", path: "/tools/birthday-countdown" },
  { name: "Love Calculator", desc: "Find your true love percentage by name", emoji: "💕", path: "/tools/love-calculator" },
  { name: "Crush Calculator", desc: "Does your crush like you back? Find out!", emoji: "🔥", path: "/tools/crush-calculator" },
  { name: "Couple Name Generator", desc: "Create the perfect ship name for couples", emoji: "💑", path: "/tools/couple-name-generator" },
  { name: "Friendship Calculator", desc: "Test your friendship percentage by name", emoji: "👯", path: "/tools/friendship-calculator" },
];

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="flex justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <Gift className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-display font-bold">
              <span className="text-gold-gradient">WishSpark</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-display">
              Free Festival Greeting Card Maker Online
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Create wishes card online with your name — Independence Day wishes, Diwali greetings,
              Christmas cards & 35+ festivals. Share personalized animated wishes instantly! ✨
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a href="#choose-festival" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-gradient text-primary-foreground text-sm font-semibold shadow-gold hover:opacity-90 transition-opacity">
                <Sparkles className="w-4 h-4" /> Festival Wishes
              </a>
              <Link to="/tools/birthday-wishes-generator" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-foreground text-sm font-semibold border border-gold/20 hover:border-gold/40 hover:bg-secondary/80 transition-all">
                🎂 Birthday Tools
              </Link>
              <Link to="/tools/love-calculator" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-foreground text-sm font-semibold border border-gold/20 hover:border-gold/40 hover:bg-secondary/80 transition-all">
                💕 Love Calculator
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-xs text-muted-foreground">100% Free · No Signup · Works on Mobile</span>
              <Sparkles className="w-3 h-3 text-primary" />
            </div>

            <ArrowDown className="w-6 h-6 text-primary mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-gold/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
            How It <span className="text-gold-gradient">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "1️⃣", title: "Choose Festival", desc: "Pick from 35+ festivals and occasions" },
              { icon: "2️⃣", title: "Enter Your Name", desc: "Personalize your greeting with your name" },
              { icon: "3️⃣", title: "Share The Magic", desc: "Send via WhatsApp and spread the joy!" },
            ].map((step, i) => (
              <div key={i} className="bg-glass rounded-2xl p-6 text-center border border-gold/10">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <Suspense fallback={null}>
          <AdBanner adSlot="HOME_MID_SLOT" adFormat="horizontal" className="max-w-4xl mx-auto" />
        </Suspense>
      </div>

      {/* Festival Grid */}
      <section id="choose-festival" className="py-16 border-t border-gold/10" style={{ contentVisibility: "auto", containIntrinsicSize: "0 800px" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            Choose Your <span className="text-gold-gradient">Festival</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Select from 35+ festivals and create wishes card online with your name — free greeting card maker!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {festivals.map((festival, i) => (
              <FestivalCard key={festival.slug} festival={festival} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Fun Tools Section */}
      <section className="py-16 border-t border-gold/10" style={{ contentVisibility: "auto", containIntrinsicSize: "0 600px" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
            Fun <span className="text-gold-gradient">Tools</span> ✨
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Free online calculators & generators — love calculator, age calculator, birthday wishes & more!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.path}
                to={tool.path}
                className="group block bg-glass rounded-2xl p-5 border border-gold/10 hover:border-gold/30 transition-colors duration-200 hover:shadow-gold"
              >
                <span className="text-3xl mb-3 block">{tool.emoji}</span>
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1 text-sm leading-tight">{tool.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from Blog - lazy loaded */}
      <Suspense fallback={null}>
        <BlogSection />
      </Suspense>

      {/* SEO Content */}
      <section className="py-16 border-t border-gold/10" style={{ contentVisibility: "auto", containIntrinsicSize: "0 300px" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            WishSpark: A Practical Platform for Greetings and Everyday Celebration Tools
          </h2>
          <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-lg font-display font-semibold text-foreground">Introduction</h3>
              <p>
                WishSpark is built for people who want to send thoughtful greetings quickly, without giving up quality or personal touch.
                Most users face the same challenge during festivals and birthdays: they want to share something meaningful, but they do not
                have time to design a card, write a message from scratch, and format it for sharing. WishSpark solves this by combining
                fast personalization, ready-to-use layouts, and simple sharing flows in one place. You can create a greeting, preview it,
                and share it in minutes from your phone or desktop.
              </p>
              <p>
                The platform is intentionally lightweight. You do not need to install anything, and you do not need an account for most
                features. This lowers friction, especially during time-sensitive moments when people are sending wishes to multiple contacts
                across WhatsApp, social media, and direct messages. Instead of repeating manual steps for each person, users can personalize
                once, generate a shareable output, and move forward confidently.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-display font-semibold text-foreground">Benefits of Using WishSpark Tools</h3>
              <p>
                The first major benefit is consistency. WishSpark helps users maintain a polished presentation even when they are creating
                many greetings in a short time. The second benefit is personalization at scale. A name, message, or theme choice instantly
                makes each greeting feel intentional rather than generic. The third benefit is device flexibility. Whether someone is on a
                low-end mobile device or a desktop browser, the same core workflow remains straightforward.
              </p>
              <p>
                WishSpark tools are also practical for users who want lightweight utility features alongside festive content. Instead of
                switching between multiple websites for calculators, countdowns, and message generators, users can stay within one ecosystem.
                This improves the overall user journey and reduces drop-off during exploration. For returning visitors, familiar navigation
                and predictable tool behavior improve trust and usability over time.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-display font-semibold text-foreground">Category Overview</h3>
              <p>
                WishSpark currently organizes content into three core categories. The first category is festival greeting creation, where
                users can produce share-ready greetings for major cultural, national, and seasonal occasions. The second category is personal
                celebration utilities, which includes birthday-focused experiences such as card making, countdown tracking, and wishes
                generation. The third category is interactive name-based tools such as love, friendship, and couple-name generators that are
                primarily used for light entertainment and social sharing.
              </p>
              <p>
                This structure helps users discover tools by intent rather than by keyword guessing. If the goal is sending a festival
                greeting, they start with occasion cards. If the goal is celebration planning, they use utility tools. If the goal is social
                engagement, they use fun generators. Clear categorization also improves internal linking, page depth, and content relevance,
                which are valuable for long-term SEO and AdSense readiness.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-display font-semibold text-foreground">Featured Tools</h3>
              <p>
                Popular tools include Birthday Wishes Generator for fast message ideas, Birthday Card Maker for visual personalization,
                Age Calculator for exact age breakdowns, and Birthday Countdown for real-time anticipation. Users who enjoy social and
                relationship-themed tools often explore Love Calculator, Crush Calculator, Friendship Calculator, and Couple Name Generator.
                Each tool is designed with a clear single-purpose interface so users can complete their goal without unnecessary steps.
              </p>
              <p>
                Featured tools are selected based on practical usefulness, shareability, and repeat usage. For example, an age calculator
                may be used for documentation needs, while a birthday wishes generator can be used repeatedly across contacts. This balance
                between utility and engagement helps WishSpark serve different user intents while keeping the experience cohesive.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-display font-semibold text-foreground">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">Is WishSpark free to use?</p>
                  <p>
                    Yes. Core features across greeting and utility pages are free. Some experiences may include advertising to support
                    hosting and development costs.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Do I need to create an account before using tools?</p>
                  <p>
                    Most tools can be used without account registration. The platform is designed for quick access and fast completion.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Can I share generated content on WhatsApp and social platforms?</p>
                  <p>
                    Yes. Many pages include direct sharing actions and copy options so users can post or send content across channels.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Is user input stored permanently?</p>
                  <p>
                    Personalization data is generally processed for immediate output. For privacy details and data handling, refer to the
                    Privacy Policy page.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Who should use WishSpark?</p>
                  <p>
                    Anyone who wants to create personalized greetings quickly, manage celebration-related mini tasks, or use lightweight
                    social tools in a clean web experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <Suspense fallback={null}>
          <AdBanner adSlot="HOME_BOTTOM_SLOT" adFormat="horizontal" className="max-w-4xl mx-auto" />
        </Suspense>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "WishSpark",
            url: "https://www.wishspark.xyz",
            description: "Create and share beautiful personalized festival greetings for 35+ occasions. Free animated gift box wishes!",
            publisher: {
              "@type": "Organization",
              name: "WishSpark",
              url: "https://www.wishspark.xyz",
              logo: {
                "@type": "ImageObject",
                url: "https://www.wishspark.xyz/favicon.svg",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@wishspark.xyz",
                contactType: "customer support",
              },
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.wishspark.xyz/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

// Lazy blog section to avoid importing blogPosts in main bundle
const BlogSection = lazy(() => import("@/components/BlogSection"));

export default Index;
