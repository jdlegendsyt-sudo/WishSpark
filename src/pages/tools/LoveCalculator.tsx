import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, Copy } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdBanner from "@/components/AdBanner";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { toast } from "@/hooks/use-toast";

const calcLove = (a: string, b: string) => {
  const combined = (a + "loves" + b).toLowerCase().replace(/\s/g, "");
  let hash = 0;
  for (let i = 0; i < combined.length; i++) { hash = ((hash << 5) - hash) + combined.charCodeAt(i); hash |= 0; }
  return Math.abs(hash % 61) + 40; // 40-100%
};

const getMessage = (pct: number) => {
  if (pct >= 90) return { msg: "You two are a match made in heaven! 💕 The stars have aligned perfectly for this love.", emoji: "😍" };
  if (pct >= 80) return { msg: "Wow, incredible chemistry! You two have a strong and beautiful connection. Keep nurturing it!", emoji: "🥰" };
  if (pct >= 70) return { msg: "Great compatibility! There's real potential for something wonderful here. Go for it!", emoji: "💖" };
  if (pct >= 60) return { msg: "A good match with plenty of room to grow together. Communication is the key!", emoji: "💝" };
  if (pct >= 50) return { msg: "There's a spark there! With some effort and understanding, this could blossom into something beautiful.", emoji: "💗" };
  return { msg: "Every great love story has humble beginnings! Don't give up — sometimes the best things take time.", emoji: "💫" };
};

const LoveCalculator = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<{ pct: number; msg: string; emoji: string } | null>(null);
  const [isSharedView, setIsSharedView] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const calculate = () => {
    if (!name1.trim() || !name2.trim()) return;
    const pct = calcLove(name1, name2);
    const info = getMessage(pct);
    setResult({ pct, ...info });
    setIsSharedView(false);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const getShareLink = () => {
    if (!result) return "";
    const url = new URL(`${window.location.origin}/tools/love-calculator`);
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
    const text = `💕 Love Calculator Result!\n${name1} ❤️ ${name2} = ${result.pct}%\n\n${result.msg}\n\nView this result: ${getShareLink()}`;
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

    const pct = calcLove(n1, n2);
    setName1(n1);
    setName2(n2);
    setResult({ pct, ...getMessage(pct) });
    setIsSharedView(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", "name": "Love Calculator by Name", "url": "https://www.wishspark.xyz/tools/love-calculator", "description": "Free love calculator by name online. Find your true love percentage and love compatibility score instantly.", "applicationCategory": "EntertainmentApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }, "publisher": { "@type": "Organization", "name": "WishSpark" } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How does the love calculator work?", "acceptedAnswer": { "@type": "Answer", "text": "Our love calculator uses a name-based compatibility algorithm to generate a fun love percentage between two people. Enter both names and get your love score instantly!" }}, { "@type": "Question", "name": "Is the love calculator accurate?", "acceptedAnswer": { "@type": "Answer", "text": "The love calculator is a fun entertainment tool that generates a compatibility percentage based on names. It's meant for fun and sharing with your partner or crush!" }}, { "@type": "Question", "name": "Can I share my love calculator result?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! After calculating your love percentage, click the Share button to send your result directly via WhatsApp to your partner or friends." }}] }} />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-8">
          <motion.div className="text-6xl mb-4" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.2 }}>💕</motion.div>
          <h1 className="text-4xl font-display font-bold text-gold-gradient mb-3">Love Calculator — True Love Percentage Test</h1>
          <p className="text-muted-foreground">Free love calculator by name — find your true love compatibility percentage online!</p>
        </div>

        <div className="bg-glass rounded-2xl p-6 border border-gold/20 shadow-gold mb-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">Your Name</label>
            <Input value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Enter your name" maxLength={30} className="bg-secondary/50 border-gold/20" />
          </div>
          <div className="text-center text-3xl">❤️</div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">Partner's Name</label>
            <Input value={name2} onChange={(e) => setName2(e.target.value)} placeholder="Enter their name" maxLength={30} className="bg-secondary/50 border-gold/20" />
          </div>
          <Button onClick={calculate} className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90" size="lg">
            <Heart className="w-4 h-4 mr-2" /> Calculate Love
          </Button>
        </div>

        <section className="mb-8 bg-glass rounded-2xl p-6 border border-gold/10">
          <h2 className="text-lg font-display font-semibold text-foreground mb-3">Introduction</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Love calculators remain popular because they combine curiosity, entertainment, and social sharing in one quick interaction.
              Users often want a simple way to test name combinations and spark conversation with friends or partners. This page is designed
              for that exact behavior, with a straightforward input flow and a result format that is easy to share.
            </p>
            <p>
              The tool focuses on usability and consistency. After entering two names, users receive a percentage and a contextual message.
              The experience is intentionally lightweight so anyone can use it without instructions. For social use cases, sharing and copy
              actions are built in to reduce friction and make the result portable across messaging apps.
            </p>
            <p>
              This makes the page suitable for casual daily use, themed events, and campaign-style social content where people compare
              multiple results. While results are for entertainment, the clean structure and reliable flow make the experience engaging,
              repeatable, and easy to understand for first-time visitors.
            </p>
          </div>
        </section>

        <AdBanner adSlot="TOOL_MID" adFormat="horizontal" className="mb-8" />

        {result && (
          <motion.div ref={resultsRef} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="bg-glass rounded-2xl p-8 border border-gold/20 shadow-gold text-center space-y-4">
            <p className="text-muted-foreground">{name1} ❤️ {name2}</p>
            <motion.p className="text-7xl font-bold text-primary" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
              {result.pct}%
            </motion.p>
            <p className="text-4xl">{result.emoji}</p>
            <p className="text-foreground leading-relaxed max-w-md mx-auto">{result.msg}</p>
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

        <section className="mt-16 space-y-6">
          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Detailed Explanation: Interpreting Love Scores as Entertainment</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>Love calculators have stayed popular online for years because they are simple, playful, and easy to use in conversations. You enter two names, get a score, and use that result as a light social activity with a partner, crush, or friend group.</p>
              <p>This version generates a compatibility-style percentage between 40% and 100% and pairs it with a short interpretation message. The intention is not prediction; it is entertainment with a clear format that people can understand quickly.</p>
              <p>Because the output is short and visual, many users use it as a conversation starter in chats. It works well in casual situations such as date-night games, group challenges, or simple curiosity.</p>
              <p>If you share the result link, others can open the page and try their own combinations right away. That makes it a repeatable social activity instead of a one-time interaction.</p>
            </div>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">How to Use the Love Calculator</h2>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</span><span><strong className="text-foreground">Enter your name</strong> — Type your first name in the "Your Name" field.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</span><span><strong className="text-foreground">Enter your partner's name</strong> — Type the name of your partner, crush, or the person you're curious about.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">3</span><span><strong className="text-foreground">Click "Calculate Love"</strong> — Watch as your love percentage appears with a beautiful animation and a personalized compatibility message.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">4</span><span><strong className="text-foreground">Share the result</strong> — Click "Share Result" to send your love score via WhatsApp. Let them know how compatible you are!</span></li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Love Calculator FAQ</h2>
            <FaqAccordion items={[
              { question: "Is this love calculator scientifically accurate?", answer: "No. It is a fun name-based entertainment tool." },
              { question: "Will I get the same result every time?", answer: "Usually yes for the same pair of names." },
              { question: "Does name order affect score?", answer: "Yes. Reversing names can produce a different percentage." },
              { question: "Can I share my result?", answer: "Yes. You can share directly on WhatsApp or copy the result link." },
              { question: "What names work best for better readability?", answer: "Short first names usually produce cleaner and easier-to-read result cards." },
            ]} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoveCalculator;
