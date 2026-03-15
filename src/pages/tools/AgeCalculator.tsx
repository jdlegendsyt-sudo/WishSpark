import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Share2, Copy } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdBanner from "@/components/AdBanner";
import JsonLd from "@/components/JsonLd";
import { toast } from "@/hooks/use-toast";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalHours: number;
  nextBirthday: number;
  zodiac: string;
}

const getZodiac = (month: number, day: number) => {
  const signs = [
    { sign: "♑ Capricorn", end: [1, 19] }, { sign: "♒ Aquarius", end: [2, 18] },
    { sign: "♓ Pisces", end: [3, 20] }, { sign: "♈ Aries", end: [4, 19] },
    { sign: "♉ Taurus", end: [5, 20] }, { sign: "♊ Gemini", end: [6, 20] },
    { sign: "♋ Cancer", end: [7, 22] }, { sign: "♌ Leo", end: [8, 22] },
    { sign: "♍ Virgo", end: [9, 22] }, { sign: "♎ Libra", end: [10, 22] },
    { sign: "♏ Scorpio", end: [11, 21] }, { sign: "♐ Sagittarius", end: [12, 21] },
  ];
  for (const s of signs) {
    if (month < s.end[0] || (month === s.end[0] && day <= s.end[1])) return s.sign;
  }
  return "♑ Capricorn";
};

const AgeCalculator = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [isSharedView, setIsSharedView] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const now = new Date();
    if (birth > now) return;

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }

    const totalDays = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const nextBday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday <= now) nextBday.setFullYear(nextBday.getFullYear() + 1);
    const daysUntilBday = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    setResult({
      years, months, days, totalDays,
      totalWeeks: Math.floor(totalDays / 7),
      totalHours: totalDays * 24,
      nextBirthday: daysUntilBday,
      zodiac: getZodiac(birth.getMonth() + 1, birth.getDate()),
    });
    setIsSharedView(false);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const calculateFromDob = (value: string) => {
    if (!value) return;
    const birth = new Date(value);
    const now = new Date();
    if (birth > now) return;

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }

    const totalDays = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const nextBday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday <= now) nextBday.setFullYear(nextBday.getFullYear() + 1);
    const daysUntilBday = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    setResult({
      years, months, days, totalDays,
      totalWeeks: Math.floor(totalDays / 7),
      totalHours: totalDays * 24,
      nextBirthday: daysUntilBday,
      zodiac: getZodiac(birth.getMonth() + 1, birth.getDate()),
    });
  };

  const getShareLink = () => {
    const url = new URL(`${window.location.origin}/tools/age-calculator`);
    url.searchParams.set("shared", "1");
    url.searchParams.set("dob", dob);
    return url.toString();
  };

  const shareResult = () => {
    if (!result) return;
    const text = `🧮 My age is ${result.years} years, ${result.months} months, ${result.days} days.\nNext birthday in ${result.nextBirthday} days.\n\nView this result: ${getShareLink()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const copyShareLink = async () => {
    await navigator.clipboard.writeText(getShareLink());
    toast({ title: "Link copied", description: "Share link is ready to send" });
  };

  const createYourOwn = () => {
    setSearchParams({});
    setDob("");
    setResult(null);
    setIsSharedView(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.title = "Age Calculator Online Free | Calculate Exact Age from Date of Birth | WishSpark";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Free age calculator online. Calculate your exact age from date of birth in years, months, days, hours. Find zodiac sign, birthday countdown & age in days calculator.");
  }, []);

  useEffect(() => {
    const shared = searchParams.get("shared") === "1";
    const sharedDob = searchParams.get("dob") || "";
    if (!shared || !sharedDob) {
      return;
    }

    setDob(sharedDob);
    calculateFromDob(sharedDob);
    setIsSharedView(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", "name": "Age Calculator Online Free", "url": "https://wishspark.xyz/tools/age-calculator", "description": "Free age calculator online. Calculate exact age from date of birth in years, months, and days. Find how many days until your next birthday.", "applicationCategory": "UtilityApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }, "publisher": { "@type": "Organization", "name": "WishSpark" } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How to calculate my exact age from date of birth?", "acceptedAnswer": { "@type": "Answer", "text": "Enter your date of birth in our free age calculator. It instantly calculates your exact age in years, months, and days, plus total days lived and days until your next birthday." }}, { "@type": "Question", "name": "Is this age calculator accurate?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our age calculator accounts for leap years and varying month lengths to give you a precise age calculation down to the exact day." }}, { "@type": "Question", "name": "Can I find how many days until my next birthday?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! Our age calculator automatically shows the number of days remaining until your next birthday after you enter your date of birth." }}] }} />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-8">
          <motion.div className="text-6xl mb-4" animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>🧮</motion.div>
          <h1 className="text-4xl font-display font-bold text-gold-gradient mb-3">Age Calculator Online — Calculate Exact Age</h1>
          <p className="text-muted-foreground">Free age calculator from date of birth — find your exact age in years, months, days, hours & more!</p>
        </div>

        <div className="bg-glass rounded-2xl p-6 border border-gold/20 shadow-gold mb-8">
          <label className="text-sm font-medium text-foreground block mb-2">Date of Birth</label>
          <div className="flex gap-3">
            <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="bg-secondary/50 border-gold/20" />
            <Button onClick={calculate} className="bg-gold-gradient text-primary-foreground hover:opacity-90 shrink-0">
              <Calculator className="w-4 h-4 mr-2" /> Calculate
            </Button>
          </div>
        </div>

        <AdBanner adSlot="TOOL_MID" adFormat="horizontal" className="mb-8" />

        {result && (
          <motion.div ref={resultsRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="bg-glass rounded-2xl p-6 border border-gold/20 text-center">
              <h2 className="text-lg font-display font-semibold text-foreground mb-4">Your Age</h2>
              <div className="flex justify-center gap-4 mb-6">
                {[
                  { val: result.years, label: "Years" },
                  { val: result.months, label: "Months" },
                  { val: result.days, label: "Days" },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.15 }}
                    className="bg-primary/10 rounded-xl p-4 min-w-[80px]">
                    <p className="text-3xl font-bold text-primary">{item.val}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Total Days Lived", value: result.totalDays.toLocaleString(), emoji: "📅" },
                { label: "Total Weeks", value: result.totalWeeks.toLocaleString(), emoji: "📆" },
                { label: "Total Hours", value: result.totalHours.toLocaleString(), emoji: "⏰" },
                { label: "Next Birthday In", value: `${result.nextBirthday} days`, emoji: "🎂" },
                { label: "Zodiac Sign", value: result.zodiac, emoji: "⭐" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className={`bg-glass rounded-xl p-4 border border-gold/10 ${i === 4 ? "col-span-2" : ""}`}>
                  <p className="text-xs text-muted-foreground">{item.emoji} {item.label}</p>
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button variant="outline" size="sm" onClick={copyShareLink} className="border-gold/30 hover:bg-gold/10 hover:border-gold/50 transition-all"><Copy className="w-3 h-3 mr-1" /> Copy</Button>
              <Button size="sm" onClick={shareResult} className="bg-gold-gradient text-primary-foreground hover:opacity-90"><Share2 className="w-3 h-3 mr-1" /> WhatsApp</Button>
              {isSharedView && (
                <Button onClick={createYourOwn} className="bg-gold-gradient text-primary-foreground hover:opacity-90">Create Your Own</Button>
              )}
            </div>
          </motion.div>
        )}

        <section className="mt-16 space-y-6">
          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Free Age Calculator Online — How to Calculate Your Exact Age from Date of Birth</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>Have you ever wondered exactly how old you are — not just in years, but down to the very day? Our free online age calculator makes it incredibly easy to find out. Whether you need your precise age for an official document, a visa application, or you're just curious, this tool gives you the most accurate result in seconds.</p>
              <p>Calculating your age manually can get tricky. You have to account for leap years, months with different numbers of days, and whether your birthday has already passed this year. Our age calculator handles all of this automatically. Just enter your date of birth, click "Calculate," and you'll instantly see your exact age broken down into years, months, and days.</p>
              <p>But that's not all — our calculator goes beyond the basics. It also shows you interesting facts about your age that you might never have thought about:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Total days lived:</strong> Ever wondered how many days you've been alive? It's a number that puts your life into perspective. If you're 25 years old, you've lived over 9,000 days — each one a page in your story.</li>
                <li><strong className="text-foreground">Total weeks and hours:</strong> These numbers are fascinating conversation starters. Imagine telling a friend, "I've been alive for over 200,000 hours!"</li>
                <li><strong className="text-foreground">Birthday countdown:</strong> Our calculator automatically tells you how many days remain until your next birthday. This is perfect for planning celebrations or just building anticipation for your special day.</li>
                <li><strong className="text-foreground">Zodiac sign:</strong> Curious about your astrological sign? We determine it from your birth date automatically, so you can explore what the stars say about your personality.</li>
              </ul>
            </div>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Step-by-Step Guide: How to Use the Age Calculator</h2>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</span><span><strong className="text-foreground">Enter your date of birth</strong> — Click the date input field and select your birth date using the calendar picker. You can type it directly in YYYY-MM-DD format too.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</span><span><strong className="text-foreground">Click "Calculate"</strong> — Hit the Calculate button and your exact age appears instantly. No waiting, no loading screens.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">3</span><span><strong className="text-foreground">Explore your results</strong> — Browse through your age in years/months/days, total days lived, total weeks, total hours, next birthday countdown, and zodiac sign.</span></li>
              <li className="flex gap-3"><span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">4</span><span><strong className="text-foreground">Try different dates</strong> — Want to check someone else's age? Simply change the date and calculate again. Great for comparing ages with friends!</span></li>
            </ol>
          </div>

          <div className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Frequently Asked Questions About Age Calculation</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div><p className="font-medium text-foreground">Does this age calculator account for leap years?</p><p>Yes! Our calculator accurately handles leap years (years divisible by 4, except century years unless divisible by 400). This means your age calculation is precise down to the exact day, even if you were born on February 29th.</p></div>
              <div><p className="font-medium text-foreground">Can I calculate the age of someone else?</p><p>Absolutely. Just enter any valid date of birth and the calculator will show the exact age. This is useful for calculating ages of family members, friends, or historical figures.</p></div>
              <div><p className="font-medium text-foreground">Why is knowing my exact age in days useful?</p><p>Many people celebrate milestone days — like their 10,000th day alive. It's also useful for certain legal or medical calculations that require age in days rather than years. Plus, it's a fun fact to share!</p></div>
              <div><p className="font-medium text-foreground">Is my data stored anywhere?</p><p>No. All calculations happen right in your browser. We don't store your date of birth or any personal information on our servers. Your privacy is completely protected.</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgeCalculator;
