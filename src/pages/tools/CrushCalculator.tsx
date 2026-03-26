import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Share2, RefreshCw, Copy } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdBanner from "@/components/AdBanner";
import JsonLd from "@/components/JsonLd";
import { toast } from "@/hooks/use-toast";

const calcCrush = (a: string, b: string) => {
  const s = (a + "crush" + b).toLowerCase().replace(/\s/g, "");
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h) + s.charCodeAt(i);
  return Math.abs(h % 51) + 50; // 50-100
};

const getVerdict = (pct: number) => {
  if (pct >= 90) return { verdict: "SOULMATES! 🔥", desc: "The universe is practically screaming that you two belong together!", color: "text-red-400" };
  if (pct >= 80) return { verdict: "Super Crush! 💘", desc: "There's a magnetic attraction here! Sparks are definitely flying.", color: "text-pink-400" };
  if (pct >= 70) return { verdict: "Strong Vibes! 💓", desc: "The connection is real and powerful. Time to make your move!", color: "text-rose-400" };
  if (pct >= 60) return { verdict: "Cute Match! 💗", desc: "There's something sweet brewing between you two. Give it time!", color: "text-pink-300" };
  return { verdict: "Slow Burn 🌸", desc: "Not every great love starts with fireworks. Give it a chance to grow!", color: "text-purple-300" };
};

const CrushCalculator = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [myName, setMyName] = useState("");
  const [crushName, setCrushName] = useState("");
  const [result, setResult] = useState<{ pct: number; verdict: string; desc: string; color: string } | null>(null);
  const [animating, setAnimating] = useState(false);
  const [isSharedView, setIsSharedView] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const calculate = () => {
    if (!myName.trim() || !crushName.trim()) return;
    setAnimating(true);
    setResult(null);
    setTimeout(() => {
      const pct = calcCrush(myName, crushName);
      setResult({ pct, ...getVerdict(pct) });
      setIsSharedView(false);
      setAnimating(false);
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }, 1500);
  };

  const getShareLink = () => {
    if (!result) return "";
    const url = new URL(`${window.location.origin}/tools/crush-calculator`);
    url.searchParams.set("shared", "1");
    url.searchParams.set("me", myName.trim());
    url.searchParams.set("crush", crushName.trim());
    return url.toString();
  };

  const copyShareLink = async () => {
    const link = getShareLink();
    if (!link) return;
    await navigator.clipboard.writeText(link);
    toast({ title: "Link copied", description: "Share link is ready to send" });
  };

  const createYourOwn = () => {
    setSearchParams({});
    setMyName("");
    setCrushName("");
    setResult(null);
    setAnimating(false);
    setIsSharedView(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const shared = searchParams.get("shared") === "1";
    const me = searchParams.get("me") || "";
    const crush = searchParams.get("crush") || "";
    if (!shared || !me || !crush) {
      return;
    }

    const pct = calcCrush(me, crush);
    setMyName(me);
    setCrushName(crush);
    setResult({ pct, ...getVerdict(pct) });
    setAnimating(false);
    setIsSharedView(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", "name": "Crush Calculator — Does My Crush Like Me?", "url": "https://www.wishspark.xyz/tools/crush-calculator", "description": "Free crush calculator online. Find out if your crush likes you back with our crush compatibility test by name.", "applicationCategory": "EntertainmentApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }, "publisher": { "@type": "Organization", "name": "WishSpark" } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How to know if my crush likes me?", "acceptedAnswer": { "@type": "Answer", "text": "Try our fun crush calculator! Enter your name and your crush's name to get a crush compatibility percentage. While it's for entertainment, it's a fun way to start a conversation!" }}, { "@type": "Question", "name": "What is a crush calculator?", "acceptedAnswer": { "@type": "Answer", "text": "A crush calculator is a fun online tool that calculates compatibility between you and your crush based on your names. It generates a percentage score with a fun message about your chances." }}, { "@type": "Question", "name": "Can I share my crush calculator result?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! You can share your crush compatibility result via WhatsApp directly from the results page. It's a fun way to tease your friends!" }}] }} />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-8">
          <motion.div className="text-6xl mb-4" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>🔥</motion.div>
          <h1 className="text-4xl font-display font-bold text-gold-gradient mb-3">Crush Calculator — Does My Crush Like Me?</h1>
          <p className="text-muted-foreground">Free crush compatibility test by name — find out if your crush likes you back with our crush meter!</p>
        </div>

        <section className="mb-8 bg-glass rounded-2xl p-6 border border-gold/10">
          <h2 className="text-lg font-display font-semibold text-foreground mb-3">Introduction</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Crush-related tools are popular because they provide a low-pressure way to express curiosity and start conversations. While no
              algorithm can determine real emotions, interactive calculators can still play a useful social role: they create shareable
              moments, reduce awkwardness, and add humor to early relationship conversations.
            </p>
            <p>
              This page is designed as entertainment with a clear user flow. You enter two names, generate a compatibility-style score, and
              receive a verdict card that can be shared privately or in groups. The experience is intentionally fast and optimistic, making
              it suitable for casual use, friend groups, and social content creation without overpromising real-world accuracy.
            </p>
            <p>
              A structured result format also helps users compare multiple entries quickly while keeping the activity light and respectful.
              Whether used for private curiosity or playful conversation among friends, the tool provides a predictable experience with
              clear output language and straightforward sharing controls.
            </p>
          </div>
        </section>

        <div className="bg-glass rounded-2xl p-6 border border-gold/20 shadow-gold mb-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">👤 Your Name</label>
            <Input value={myName} onChange={(e) => setMyName(e.target.value)} placeholder="Your name" maxLength={30} className="bg-secondary/50 border-gold/20" />
          </div>
          <div className="text-center text-2xl">🔥</div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">💘 Your Crush's Name</label>
            <Input value={crushName} onChange={(e) => setCrushName(e.target.value)} placeholder="Crush's name" maxLength={30} className="bg-secondary/50 border-gold/20" />
          </div>
          <Button onClick={calculate} disabled={animating} className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90" size="lg">
            <Flame className="w-4 h-4 mr-2" /> {animating ? "Calculating..." : "Find Out!"}
          </Button>
        </div>

        <AdBanner adSlot="TOOL_MID" adFormat="horizontal" className="mb-8" />

        <AnimatePresence>
          {animating && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
              <motion.div className="text-6xl" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>💘</motion.div>
              <p className="text-muted-foreground mt-4">Analyzing your crush compatibility...</p>
            </motion.div>
          )}

          {result && (
            <motion.div ref={resultsRef} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="bg-glass rounded-2xl p-8 border border-gold/20 shadow-gold text-center space-y-4">
              <p className="text-muted-foreground">{myName} 🔥 {crushName}</p>
              <motion.p className={`text-6xl font-bold ${result.color}`}
                initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring" }}>
                {result.pct}%
              </motion.p>
              <p className={`text-2xl font-display font-bold ${result.color}`}>{result.verdict}</p>
              <p className="text-foreground max-w-md mx-auto">{result.desc}</p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={calculate} className="border-gold/20"><RefreshCw className="w-3 h-3 mr-1" /> Try Again</Button>
                <Button size="sm" className="bg-gold-gradient text-primary-foreground hover:opacity-90" onClick={() => {
                  const text = `🔥 Crush Calculator Result!\n${myName} 💘 ${crushName} = ${result.pct}%\n${result.verdict}\n\nView this result: ${getShareLink()}`;
                  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
                }}><Share2 className="w-3 h-3 mr-1" /> WhatsApp</Button>
                <Button variant="outline" size="sm" className="border-gold/30 hover:bg-gold/10 hover:border-gold/50 transition-all" onClick={copyShareLink}><Copy className="w-3 h-3 mr-1" /> Copy</Button>
                {isSharedView && (
                  <Button className="bg-gold-gradient text-primary-foreground hover:opacity-90" onClick={createYourOwn}>Create Your Own</Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="mt-16 space-y-6">
          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Detailed Explanation: Using a Crush Calculator for Social Engagement</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>Having a crush is one of life's most thrilling experiences. That flutter in your stomach when they walk by, the way you overanalyze every text message, the constant wondering — "Do they like me back?" Our crush calculator doesn't have the real answer (nobody does, except maybe your crush), but it gives you a fun, exciting way to explore the possibility.</p>
              <p>The crush calculator works differently from a love calculator. While a love calculator measures general compatibility between two people, our crush calculator is specifically designed for that early-stage, butterflies-in-your-stomach phase. The percentage range starts at 50% because let's be honest — if you're already thinking about someone enough to use a crush calculator, there's already SOMETHING there.</p>
              <p>What makes our crush calculator extra special is the dramatic reveal. After you enter both names and click "Find Out!", there's a 1.5-second animation where a spinning heart builds suspense before your result appears. It's that brief moment of excitement that makes the experience memorable — like opening a fortune cookie or shaking a Magic 8 Ball.</p>
              <p>Each result comes with a crush verdict (from "Slow Burn" to "SOULMATES!"), a personalized message, and sharing options. The verdicts are designed to be positive and encouraging regardless of the score, because having a crush should always feel exciting, never discouraging. Share your result with friends for laughs, or send it to your crush as a bold conversation starter!</p>
            </div>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">How to Use the Crush Calculator</h2>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</span><span><strong className="text-foreground">Enter your name</strong> — Type your first name in the "Your Name" field. This is your side of the equation!</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</span><span><strong className="text-foreground">Enter your crush's name</strong> — Type the name of the person you can't stop thinking about. We promise we won't tell them!</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">3</span><span><strong className="text-foreground">Click "Find Out!"</strong> — Watch the dramatic animation as the calculator analyzes your crush compatibility. Hold your breath!</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">4</span><span><strong className="text-foreground">Read your verdict</strong> — Your crush percentage, verdict title, and personalized message reveal whether it's a "Slow Burn" or full-on "SOULMATES!" territory.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">5</span><span><strong className="text-foreground">Share or try again</strong> — Share the result via WhatsApp, or click "Try Again" to test with a different crush. No judgment here!</span></li>
            </ol>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Crush Calculator FAQ</h2>
            <div className="space-y-3 text-sm">
              <div className="rounded-xl border border-gold/10 bg-secondary/20 p-4">
                <p className="font-medium text-foreground mb-1">1. Will my crush know I used this calculator?</p>
                <p className="text-muted-foreground">No, unless you choose to share it. The tool runs in your browser and does not notify anyone.</p>
              </div>
              <div className="rounded-xl border border-gold/10 bg-secondary/20 p-4">
                <p className="font-medium text-foreground mb-1">2. Why do scores start from 50%?</p>
                <p className="text-muted-foreground">The calculator is designed as playful entertainment with a positive baseline range from 50% to 100%.</p>
              </div>
              <div className="rounded-xl border border-gold/10 bg-secondary/20 p-4">
                <p className="font-medium text-foreground mb-1">3. Should I send the result to my crush?</p>
                <p className="text-muted-foreground">That is your choice. Many users share results as a fun ice-breaker in chats.</p>
              </div>
              <div className="rounded-xl border border-gold/10 bg-secondary/20 p-4">
                <p className="font-medium text-foreground mb-1">4. Can I try with different names repeatedly?</p>
                <p className="text-muted-foreground">Yes, you can test unlimited name combinations anytime.</p>
              </div>
              <div className="rounded-xl border border-gold/10 bg-secondary/20 p-4">
                <p className="font-medium text-foreground mb-1">5. Is the crush calculator scientifically accurate?</p>
                <p className="text-muted-foreground">No. It is made for fun and social engagement, not as a real relationship prediction tool.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CrushCalculator;
