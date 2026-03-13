import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdBanner from "@/components/AdBanner";
import JsonLd from "@/components/JsonLd";

const BirthdayCountdown = () => {
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    document.title = "Birthday Countdown Timer Online Free | How Many Days Until My Birthday | WishSpark";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Free birthday countdown timer online. Find out how many days until your next birthday with our live countdown clock. Birthday countdown in days, hours, minutes & seconds!");
  }, []);

  const start = () => {
    if (!dob) return;
    setStarted(true);
  };

  useEffect(() => {
    if (!started || !dob) return;
    const interval = setInterval(() => {
      const now = new Date();
      const birth = new Date(dob);
      const next = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
      if (next <= now) next.setFullYear(next.getFullYear() + 1);
      const diff = next.getTime() - now.getTime();
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [started, dob]);

  useEffect(() => {
    document.title = "Birthday Countdown Timer Online Free | How Many Days Until My Birthday | WishSpark";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Free birthday countdown timer online. Find out how many days until your next birthday with our live countdown clock. Birthday countdown in days, hours, minutes & seconds!");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", "name": "Birthday Countdown Timer", "url": "https://wishspark.xyz/tools/birthday-countdown", "description": "Free birthday countdown timer online. Find out how many days, hours, minutes until your next birthday with live countdown.", "applicationCategory": "UtilityApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }, "publisher": { "@type": "Organization", "name": "WishSpark" } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How many days until my birthday?", "acceptedAnswer": { "@type": "Answer", "text": "Enter your date of birth in our birthday countdown timer to see exactly how many days, hours, minutes, and seconds remain until your next birthday — updated live in real time!" }}, { "@type": "Question", "name": "Does the birthday countdown update in real time?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our birthday countdown timer updates every second, showing a live countdown with days, hours, minutes, and seconds until your next birthday." }}, { "@type": "Question", "name": "Can I share my birthday countdown?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! You can share your birthday countdown via WhatsApp to let friends and family know how many days are left until your special day." }}] }} />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-8">
          <motion.div className="text-6xl mb-4" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>⏳</motion.div>
          <h1 className="text-4xl font-display font-bold text-gold-gradient mb-3">Birthday Countdown Timer — How Many Days Until My Birthday</h1>
          <p className="text-muted-foreground">Free birthday countdown online — find out how many days, hours, minutes until your next birthday!</p>
        </div>

        {!started ? (
          <div className="bg-glass rounded-2xl p-6 border border-gold/20 shadow-gold space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Your Name (optional)</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Priya" maxLength={30} className="bg-secondary/50 border-gold/20" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Date of Birth</label>
              <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="bg-secondary/50 border-gold/20" />
            </div>
            <Button onClick={start} className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90">
              <Clock className="w-4 h-4 mr-2" /> Start Countdown
            </Button>
          </div>
        ) : countdown ? (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
            <div className="bg-glass rounded-2xl p-8 border border-gold/20 shadow-gold">
              <p className="text-lg text-muted-foreground mb-2">
                {name ? `${name}'s` : "Your"} next birthday is in
              </p>
              <div className="flex justify-center gap-3 md:gap-6 my-6">
                {[
                  { val: countdown.days, label: "Days" },
                  { val: countdown.hours, label: "Hours" },
                  { val: countdown.minutes, label: "Minutes" },
                  { val: countdown.seconds, label: "Seconds" },
                ].map((item, i) => (
                  <motion.div key={i} className="bg-primary/10 rounded-xl p-3 md:p-5 min-w-[65px] md:min-w-[90px]"
                    animate={{ scale: item.label === "Seconds" ? [1, 1.05, 1] : 1 }}
                    transition={{ repeat: Infinity, duration: 1 }}>
                    <p className="text-2xl md:text-4xl font-bold text-primary font-mono">{String(item.val).padStart(2, "0")}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">🎂 Get ready to celebrate!</p>
            </div>
            <Button variant="outline" onClick={() => setStarted(false)} className="border-gold/20">Reset</Button>
          </motion.div>
        ) : null}

        <AdBanner adSlot="TOOL_BOTTOM" adFormat="horizontal" className="mt-8" />

        <section className="mt-16 space-y-6">
          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Free Birthday Countdown Timer — How Many Days Until My Birthday?</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>There's something magical about counting down to your birthday. It builds anticipation, gets you excited, and gives you something to look forward to. Our free birthday countdown timer makes it easy to see exactly how long you have to wait — right down to the second.</p>
              <p>Unlike simple "days until" calculators, our countdown is a live, real-time experience. Once you enter your date of birth, the timer starts ticking immediately. You can watch the seconds count down, see the minutes change, and track the days as they slowly (or quickly!) decrease. It turns waiting for your birthday into an engaging visual experience.</p>
              <p>The countdown timer is also a wonderful way to share excitement with friends and family. Imagine sending your countdown to a group chat — "Only 47 days until my birthday!" — and watching everyone get excited. It's a subtle (or not-so-subtle) way to remind people that your special day is approaching. The optional name field makes it personal, displaying "Your Name's next birthday is in..." for that extra touch.</p>
              <p>Whether you're a kid counting down to their first double-digit birthday, a teenager eagerly awaiting their 18th, or an adult who never lost that birthday excitement — this countdown timer is for you. It's free, it's instant, and it works on any device. Start your countdown now and let the anticipation build!</p>
            </div>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">How to Use the Birthday Countdown Timer</h2>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</span><span><strong className="text-foreground">Enter your name (optional)</strong> — Add your name for a personalized countdown display. This step is optional but makes the countdown feel special.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</span><span><strong className="text-foreground">Select your date of birth</strong> — Use the date picker to enter your birthday. The tool uses this to calculate when your next birthday falls.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">3</span><span><strong className="text-foreground">Start the countdown</strong> — Click "Start Countdown" and watch the live timer begin! Days, hours, minutes, and seconds tick away in real time.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">4</span><span><strong className="text-foreground">Reset anytime</strong> — Want to check a different birthday? Hit the Reset button and enter a new date. Great for checking friends' and family members' birthdays too.</span></li>
            </ol>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Birthday Countdown FAQ</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div><p className="font-medium text-foreground">What happens when my birthday arrives?</p><p>When the countdown reaches zero, you'll see all values at 00 — it's your birthday! Time to celebrate! You can then reset and start counting down to your next birthday.</p></div>
              <div><p className="font-medium text-foreground">Does the countdown work across time zones?</p><p>Yes. The countdown uses your device's local time, so it automatically adjusts to your time zone. The countdown is always accurate for where you are.</p></div>
              <div><p className="font-medium text-foreground">Can I use this for someone else's birthday?</p><p>Absolutely! Enter anyone's date of birth and their name to create a personalized birthday countdown for friends, family, or even celebrities.</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BirthdayCountdown;
