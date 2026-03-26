import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Share2, Copy } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdBanner from "@/components/AdBanner";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { toast } from "@/hooks/use-toast";

const calcFriendship = (a: string, b: string) => {
  const s = (a + "bff" + b).toLowerCase().replace(/\s/g, "");
  let h = 7919;
  for (let i = 0; i < s.length; i++) h = ((h << 3) + h) ^ s.charCodeAt(i);
  return Math.abs(h % 41) + 60; // 60-100
};

const getLevel = (pct: number) => {
  if (pct >= 95) return { title: "BEST FRIENDS FOREVER! 👯", msg: "You two are inseparable! Your friendship is legendary and one for the ages.", emoji: "🏆" };
  if (pct >= 85) return { title: "Ride or Die! 🤝", msg: "You've got each other's back no matter what. This is friendship goals!", emoji: "⭐" };
  if (pct >= 75) return { title: "Great Friends! 🎉", msg: "Strong bond, real trust, and loads of fun together. Your friendship is awesome!", emoji: "🎊" };
  if (pct >= 65) return { title: "Good Buddies! 😊", msg: "A solid friendship with plenty of good times ahead. Keep building those memories!", emoji: "🌟" };
  return { title: "Growing Friendship! 🌱", msg: "Every amazing friendship starts somewhere. Spend more time together and watch it bloom!", emoji: "🌸" };
};

const FriendshipCalculator = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<{ pct: number; title: string; msg: string; emoji: string } | null>(null);
  const [isSharedView, setIsSharedView] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const calculate = () => {
    if (!name1.trim() || !name2.trim()) return;
    const pct = calcFriendship(name1, name2);
    setResult({ pct, ...getLevel(pct) });
    setIsSharedView(false);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const getShareLink = () => {
    if (!result) return "";
    const url = new URL(`${window.location.origin}/tools/friendship-calculator`);
    url.searchParams.set("shared", "1");
    url.searchParams.set("n1", name1.trim());
    url.searchParams.set("n2", name2.trim());
    return url.toString();
  };

  const copyShareLink = async () => {
    const link = getShareLink();
    if (!link) return;
    await navigator.clipboard.writeText(link);
    toast({ title: "Link copied", description: "Share link is ready to send" });
  };

  const share = () => {
    if (!result) return;
    const text = `👯 Friendship Calculator!\n${name1} 🤝 ${name2} = ${result.pct}%\n${result.title}\n\nView this result: ${getShareLink()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const createYourOwn = () => {
    setSearchParams({});
    setName1("");
    setName2("");
    setResult(null);
    setIsSharedView(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const shared = searchParams.get("shared") === "1";
    const n1 = searchParams.get("n1") || "";
    const n2 = searchParams.get("n2") || "";
    if (!shared || !n1 || !n2) {
      return;
    }

    const pct = calcFriendship(n1, n2);
    setName1(n1);
    setName2(n2);
    setResult({ pct, ...getLevel(pct) });
    setIsSharedView(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", "name": "Friendship Calculator — Friendship Percentage Test", "url": "https://www.wishspark.xyz/tools/friendship-calculator", "description": "Free friendship calculator online. Test your friendship percentage and compatibility by name. Best friendship meter to check how strong your friendship is!", "applicationCategory": "EntertainmentApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }, "publisher": { "@type": "Organization", "name": "WishSpark" } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How to test friendship compatibility?", "acceptedAnswer": { "@type": "Answer", "text": "Enter your name and your friend's name in our friendship calculator. It generates a friendship percentage score with a fun compatibility message about your bond!" }}, { "@type": "Question", "name": "What is a friendship percentage calculator?", "acceptedAnswer": { "@type": "Answer", "text": "A friendship percentage calculator is a fun tool that measures the compatibility between two friends based on their names. It gives a score from 60-100% with a friendship level title." }}, { "@type": "Question", "name": "Can I share my friendship score?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Share your friendship calculator result via WhatsApp with the Share button. It's perfect for Friendship Day celebrations and group chats!" }}] }} />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-8">
          <motion.div className="text-6xl mb-4" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>👯</motion.div>
          <h1 className="text-4xl font-display font-bold text-gold-gradient mb-3">Friendship Calculator — Friendship Percentage Test</h1>
          <p className="text-muted-foreground">Free friendship compatibility test by name — find your friendship percentage online!</p>
        </div>

        <div className="bg-glass rounded-2xl p-6 border border-gold/20 shadow-gold mb-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">👤 Your Name</label>
            <Input value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Your name" maxLength={30} className="bg-secondary/50 border-gold/20" />
          </div>
          <div className="text-center text-2xl">🤝</div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">👤 Friend's Name</label>
            <Input value={name2} onChange={(e) => setName2(e.target.value)} placeholder="Friend's name" maxLength={30} className="bg-secondary/50 border-gold/20" />
          </div>
          <Button onClick={calculate} className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90" size="lg">
            <Users className="w-4 h-4 mr-2" /> Calculate Friendship
          </Button>
        </div>

        <section className="mb-8 bg-glass rounded-2xl p-6 border border-gold/10">
          <h2 className="text-lg font-display font-semibold text-foreground mb-3">Introduction</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Friendship tools are most useful when they create positive interaction rather than one-time novelty. This calculator is built
              to encourage light group participation by giving people an easy way to test, compare, and share friendship scores with clear
              labels and simple result language. It works well as an icebreaker in chats, events, and online communities.
            </p>
            <p>
              The result is intentionally framed around encouragement and social play. Users receive a percentage, a friendship level, and
              a short interpretation that is easy to understand. Because the output is consistent for the same name pair, friends can revisit
              and compare results in a repeatable way. This makes the tool more engaging over time, not just on first use.
            </p>
            <p>
              In practical terms, this tool is useful during Friendship Day campaigns, classroom activities, and social media challenges
              where users want a fast, shareable interaction that feels positive. The interface keeps the process simple so the focus stays
              on participation and conversation.
            </p>
          </div>
        </section>

        <AdBanner adSlot="TOOL_MID" adFormat="horizontal" className="mb-8" />

        <AnimatePresence>
          {result && (
            <motion.div ref={resultsRef} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-glass rounded-2xl p-8 border border-gold/20 shadow-gold text-center space-y-4">
              <p className="text-muted-foreground">{name1} 🤝 {name2}</p>
              <motion.p className="text-7xl font-bold text-primary"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                {result.pct}%
              </motion.p>
              <p className="text-4xl">{result.emoji}</p>
              <p className="text-xl font-display font-bold text-foreground">{result.title}</p>
              <p className="text-foreground max-w-md mx-auto">{result.msg}</p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button onClick={copyShareLink} variant="outline" size="sm" className="border-gold/30 hover:bg-gold/10 hover:border-gold/50 transition-all">
                  <Copy className="w-3 h-3 mr-1" /> Copy
                </Button>
                <Button onClick={share} size="sm" className="bg-gold-gradient text-primary-foreground hover:opacity-90">
                  <Share2 className="w-3 h-3 mr-1" /> WhatsApp
                </Button>
                {isSharedView && (
                  <Button onClick={createYourOwn} className="bg-gold-gradient text-primary-foreground hover:opacity-90">
                    Create Your Own
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="mt-16 space-y-6">
          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Detailed Explanation: Measuring and Sharing Friendship Scores</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>Friendships are some of the most important relationships in our lives, yet we rarely celebrate them the same way we celebrate romantic relationships. Our friendship calculator is here to change that. It's a fun, lighthearted tool that lets you and your friends test your friendship compatibility and share the results in group chats for laughs and bonding.</p>
              <p>The calculator generates friendship percentages between 60% and 100% — because every friendship has value, and our tool reflects that. Scores are categorized into friendship levels: "Growing Friendship" for newer bonds, "Good Buddies" for solid connections, "Great Friends" for the ones you can count on, "Ride or Die" for the truly loyal ones, and "BEST FRIENDS FOREVER" for that one person who knows ALL your secrets.</p>
              <p>What makes the friendship calculator especially fun is its social nature. Unlike a love calculator that you might use privately, the friendship calculator is designed to be used WITH your friends. Try it in a group setting — calculate everyone's friendship percentage with each other and see who gets the highest score. It creates playful debates, inside jokes, and memorable moments that actually strengthen your friendships.</p>
              <p>The tool is particularly popular around Friendship Day, when people want fun ways to celebrate their friends. But honestly, you don't need a special occasion to tell your friends they matter. Use the Share button to send your friendship score via WhatsApp, and brighten someone's day with a message that says, "Look, we're officially 95% compatible as friends!"</p>
            </div>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">How to Use the Friendship Calculator</h2>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</span><span><strong className="text-foreground">Enter your name</strong> — Type your first name in the "Your Name" field. Keep it simple — first names work best.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</span><span><strong className="text-foreground">Enter your friend's name</strong> — Type the name of the friend you want to test your compatibility with.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">3</span><span><strong className="text-foreground">Click "Calculate Friendship"</strong> — Your friendship percentage appears with a spring animation, along with a friendship level title and a personalized message about your bond.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">4</span><span><strong className="text-foreground">Share with your friend</strong> — Click "Share with Friends" to send your friendship score via WhatsApp. Watch your friend's reaction!</span></li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Friendship Calculator FAQ</h2>
            <FaqAccordion items={[
              { question: "Why does friendship score start from 60%?", answer: "The tool uses a positive baseline for a friendly and fun experience." },
              { question: "Can I test with multiple friends?", answer: "Yes. You can run unlimited name pairs and compare scores easily." },
              { question: "Is this scientific compatibility testing?", answer: "No. It is designed for entertainment and social interaction." },
              { question: "Can I share the friendship score?", answer: "Yes. Share directly on WhatsApp with the built-in button." },
              { question: "How can groups use this tool best?", answer: "Run pairwise checks among friends and create a fun group leaderboard." },
            ]} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FriendshipCalculator;
