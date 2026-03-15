import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Copy, Share2, RefreshCw } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import AdBanner from "@/components/AdBanner";
import JsonLd from "@/components/JsonLd";

const generateNames = (a: string, b: string): string[] => {
  const results = new Set<string>();
  const al = a.trim(), bl = b.trim();
  if (!al || !bl) return [];

  // Method 1: First half + second half
  for (let i = 1; i <= Math.ceil(al.length / 2) + 1 && i < al.length; i++) {
    for (let j = Math.floor(bl.length / 2) - 1; j >= 0 && j < bl.length; j++) {
      const name = al.slice(0, i) + bl.slice(j);
      if (name.length >= 3 && name.length <= 12) results.add(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
    }
  }
  // Method 2: Reverse
  for (let i = 1; i <= Math.ceil(bl.length / 2) + 1 && i < bl.length; i++) {
    for (let j = Math.floor(al.length / 2) - 1; j >= 0 && j < al.length; j++) {
      const name = bl.slice(0, i) + al.slice(j);
      if (name.length >= 3 && name.length <= 12) results.add(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
    }
  }
  // Method 3: Initials + name
  results.add(al.charAt(0).toUpperCase() + bl.toLowerCase());
  results.add(bl.charAt(0).toUpperCase() + al.toLowerCase());
  // Hashtag style
  results.add(al.charAt(0).toUpperCase() + al.slice(1).toLowerCase() + bl.charAt(0).toUpperCase() + bl.slice(1).toLowerCase());

  return Array.from(results).slice(0, 8);
};

const CoupleNameGenerator = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [names, setNames] = useState<string[]>([]);
  const [isSharedView, setIsSharedView] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const generate = () => {
    const result = generateNames(name1, name2);
    setNames(result);
    setIsSharedView(false);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const getShareLink = () => {
    if (names.length === 0) return "";
    const url = new URL(`${window.location.origin}/tools/couple-name-generator`);
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

  const createYourOwn = () => {
    setSearchParams({});
    setName1("");
    setName2("");
    setNames([]);
    setIsSharedView(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copy = (n: string) => {
    navigator.clipboard.writeText(n);
    toast({ title: "Copied!", description: `"${n}" copied to clipboard` });
  };

  useEffect(() => {
    document.title = "Couple Name Generator — Ship Name Creator Free Online | WishSpark";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Free couple name generator online. Create the perfect ship name, couple name, or relationship name by combining two names. Best couple name combiner for Instagram bios & hashtags!");
  }, []);

  useEffect(() => {
    const shared = searchParams.get("shared") === "1";
    const n1 = searchParams.get("n1") || "";
    const n2 = searchParams.get("n2") || "";
    if (!shared || !n1 || !n2) {
      return;
    }

    setName1(n1);
    setName2(n2);
    setNames(generateNames(n1, n2));
    setIsSharedView(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", "name": "Couple Name Generator — Ship Name Creator", "url": "https://www.wishspark.xyz/tools/couple-name-generator", "description": "Free couple name generator online. Create the perfect ship name by combining two names. Best couple name combiner for Instagram bios & hashtags!", "applicationCategory": "EntertainmentApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }, "publisher": { "@type": "Organization", "name": "WishSpark" } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What is a couple name or ship name?", "acceptedAnswer": { "@type": "Answer", "text": "A couple name (or ship name) is a fun combination of two partners' names into one unique name. For example, Brad + Angelina = Brangelina. Our generator creates multiple creative combinations!" }}, { "@type": "Question", "name": "How does the couple name generator work?", "acceptedAnswer": { "@type": "Answer", "text": "Enter both partners' names and our algorithm generates up to 8 creative couple name combinations by blending syllables, initials, and name parts in different ways." }}, { "@type": "Question", "name": "Can I use the couple name for Instagram?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! Each generated couple name comes with a # hashtag format, perfect for Instagram bios, captions, and social media profiles. Copy with one click!" }}] }} />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-8">
          <motion.div className="text-6xl mb-4" animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>💑</motion.div>
          <h1 className="text-4xl font-display font-bold text-gold-gradient mb-3">Couple Name Generator — Ship Name Creator</h1>
          <p className="text-muted-foreground">Free couple name combiner online — create the perfect ship name for you and your partner!</p>
        </div>

        <div className="bg-glass rounded-2xl p-6 border border-gold/20 shadow-gold mb-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">First Person's Name</label>
            <Input value={name1} onChange={(e) => setName1(e.target.value)} placeholder="e.g. Arun" maxLength={20} className="bg-secondary/50 border-gold/20" />
          </div>
          <div className="text-center text-2xl">💕</div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">Second Person's Name</label>
            <Input value={name2} onChange={(e) => setName2(e.target.value)} placeholder="e.g. Priya" maxLength={20} className="bg-secondary/50 border-gold/20" />
          </div>
          <Button onClick={generate} className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90" size="lg">
            <Heart className="w-4 h-4 mr-2" /> Generate Couple Names
          </Button>
        </div>

        <AdBanner adSlot="TOOL_MID" adFormat="horizontal" className="mb-8" />

        {names.length > 0 && (
          <motion.div ref={resultsRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-display font-semibold text-foreground">Your Couple Names 💕</h2>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={generate}><RefreshCw className="w-4 h-4 mr-1" /> Refresh</Button>
                <Button variant="outline" size="sm" onClick={copyShareLink} className="border-gold/30 hover:bg-gold/10 hover:border-gold/50 transition-all"><Copy className="w-4 h-4 mr-1" /> Copy</Button>
                {isSharedView && (
                  <Button size="sm" onClick={createYourOwn} className="bg-gold-gradient text-primary-foreground hover:opacity-90">Create Your Own</Button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {names.map((name, i) => (
                <motion.div key={name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                  className="bg-glass rounded-xl p-4 border border-gold/10 text-center group">
                  <p className="text-lg font-display font-bold text-primary mb-2">#{name}</p>
                  <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" onClick={() => copy(name)}><Copy className="w-3 h-3" /></Button>
                    <Button variant="ghost" size="sm" onClick={() => {
                      const text = `💕 Our couple name is #${name}!\n\nView all generated names: ${getShareLink()}`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
                    }}><Share2 className="w-3 h-3" /></Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <section className="mt-16 space-y-6">
          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Free Couple Name Generator — Create Your Perfect Ship Name</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>Remember "Brangelina"? That iconic blend of Brad and Angelina's names started a global trend that's still going strong today. Couple names — also known as ship names — have become a cultural phenomenon. From celebrity couples to your best friends' relationship, everyone wants a creative combination of two names that represents their bond. Our couple name generator makes creating the perfect ship name effortless and fun.</p>
              <p>The concept behind a couple name is beautifully simple: take parts of two names and blend them into something new. But doing it well? That's where it gets tricky. Some combinations sound great, while others are... let's say, less flattering. Our algorithm takes the guesswork out by generating up to 8 creative combinations using different blending techniques — syllable mixing, initial combinations, and even hashtag-style mashups.</p>
              <p>Each generated name is displayed with a hashtag (#) format, making them instantly ready for Instagram bios, captions, and social media profiles. Whether you're looking for a cute username for a joint social media account, a wedding hashtag, or just a fun way to reference your relationship, these generated names give you plenty of options to choose from.</p>
              <p>The tool also encourages interaction — hover over any generated name to reveal Copy and Share buttons. Copy the name to your clipboard with one click, or share it directly via WhatsApp to let your partner weigh in on which combination they love most. It's a small, playful activity that couples can enjoy together.</p>
            </div>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">How to Generate Couple Names</h2>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</span><span><strong className="text-foreground">Enter the first person's name</strong> — Type the first name in the field. This could be you or your partner — the order affects the combinations generated.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</span><span><strong className="text-foreground">Enter the second person's name</strong> — Type the other person's name. Together, these two names become the ingredients for your ship name.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">3</span><span><strong className="text-foreground">Click "Generate Couple Names"</strong> — Watch as up to 8 creative couple name combinations appear in a beautiful grid layout.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">4</span><span><strong className="text-foreground">Pick your favorite</strong> — Hover over any name to reveal Copy and Share options. Copy it to your clipboard or share via WhatsApp.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">5</span><span><strong className="text-foreground">Try swapping names</strong> — Different name orders produce different combinations. Swap the names around to discover even more options!</span></li>
            </ol>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Couple Name Generator FAQ</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div><p className="font-medium text-foreground">What's the difference between a couple name and a ship name?</p><p>They're the same thing! "Ship name" comes from the word "relationship" (ship) and is commonly used in fan communities. "Couple name" is the more general term. Both refer to a creative blend of two people's names.</p></div>
              <div><p className="font-medium text-foreground">Can I use these for a wedding hashtag?</p><p>Absolutely! Many of the generated names make excellent wedding hashtags. Just add # before the name and use it across your wedding-related social media posts, invitations, and event pages.</p></div>
              <div><p className="font-medium text-foreground">Does the order of names matter?</p><p>Yes! Entering "Arun + Priya" produces different combinations than "Priya + Arun." We recommend trying both orders to get the widest variety of options. One order might produce names that sound better than the other.</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoupleNameGenerator;
