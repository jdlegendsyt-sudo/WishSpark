import { lazy, Suspense } from "react";
import { Gift, ArrowDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
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

            <div className="flex items-center justify-center gap-2 pt-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Choose a festival below to get started</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            <ArrowDown className="w-6 h-6 text-primary mx-auto" />
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
      <section className="py-16 border-t border-gold/10" style={{ contentVisibility: "auto", containIntrinsicSize: "0 800px" }}>
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
            Best Festival Greeting Card Maker — Create Wishes Card Online Free
          </h2>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              Looking for a free <strong className="text-foreground">festival greeting card maker</strong>? WishSpark lets you
              <strong className="text-foreground"> create wishes card online</strong> for any occasion — from
              <strong className="text-foreground"> Independence Day wishes with name</strong> to Diwali, Christmas, Eid, Onam,
              Birthday, and 35+ other celebrations. No downloads, no registration — just enter your name and share!
            </p>
            <p>
              Need an <strong className="text-foreground">Independence Day card maker online</strong>? WishSpark's unique animated
              gift box surprise makes your patriotic wishes extra special. When your loved ones open the link,
              they see a beautiful gift box with your name, and upon opening it, a stunning greeting is revealed
              with tricolor confetti and celebrations!
            </p>
            <p>
              Whether you want to send Republic Day greetings, Happy New Year wishes, or festival cards for any
              occasion, our platform makes it easy. Create your personalized greeting in seconds, share it via
              WhatsApp or social media, and let the chain of happiness continue. Your friends can create their
              own wishes card and share with their loved ones too — completely free!
            </p>
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
            url: "https://wishspark.xyz",
            description: "Create and share beautiful personalized festival greetings for 35+ occasions. Free animated gift box wishes!",
            publisher: {
              "@type": "Organization",
              name: "WishSpark",
              url: "https://wishspark.xyz",
              logo: {
                "@type": "ImageObject",
                url: "https://wishspark.xyz/favicon.ico",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@wishspark.xyz",
                contactType: "customer support",
              },
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://wishspark.xyz/?q={search_term_string}",
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
