import { motion } from "framer-motion";
import { Gift, Share2, Sparkles, Heart, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Gift,
    title: "1. Choose Your Festival",
    desc: "Browse our collection of 35+ festivals and occasions. From Diwali and Christmas to Birthdays and Anniversaries — we have greetings for every celebration.",
  },
  {
    icon: Zap,
    title: "2. Enter Your Name",
    desc: "Simply type your name in the greeting form. This personalizes the greeting so the recipient knows exactly who sent it. No registration needed!",
  },
  {
    icon: Share2,
    title: "3. Share the Magic Link",
    desc: "Click 'Create Greeting' and a unique link is generated instantly. Share it via WhatsApp, Facebook, Instagram, or any messaging app with one tap.",
  },
  {
    icon: Sparkles,
    title: "4. Recipient Opens the Surprise",
    desc: "When your friend opens the link, they see a beautiful animated gift box (or special festival-themed animations) with your name. The anticipation builds!",
  },
  {
    icon: Heart,
    title: "5. Greeting is Revealed",
    desc: "Upon tapping to open, a stunning festival greeting card is revealed with celebratory confetti, sparkles, and warm wishes. Pure delight!",
  },
  {
    icon: Users,
    title: "6. Chain of Joy Continues",
    desc: "The recipient can create their own greeting and share it with their loved ones. This creates a beautiful viral chain of festive wishes spreading happiness!",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-gradient mb-4">
            How WishSpark Works
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Create and share beautiful festival greetings in just a few simple steps. It's completely free!
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-glass rounded-2xl p-6 md:p-8 border border-gold/10 flex gap-5 items-start"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">{step.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Ready to Spread Joy?</h2>
          <p className="text-muted-foreground mb-6">Choose a festival and create your first greeting now!</p>
          <Link to="/">
            <Button className="bg-gold-gradient text-primary-foreground hover:opacity-90 font-semibold shadow-gold" size="lg">
              <Sparkles className="w-4 h-4 mr-2" /> Browse Festivals
            </Button>
          </Link>
        </div>

        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-display font-bold text-foreground text-center">
            Why Choose WishSpark?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "100% Free", desc: "No hidden charges, no premium plans, no registration required." },
              { title: "35+ Festivals", desc: "Greetings for every major festival and occasion worldwide." },
              { title: "Unique Animations", desc: "Beautiful gift box, Easter egg, and Diwali lamp animations." },
              { title: "Instant Sharing", desc: "Share via WhatsApp, social media, or any messaging app." },
              { title: "Mobile Friendly", desc: "Works perfectly on all devices — phones, tablets, and desktops." },
              { title: "Viral Sharing", desc: "Recipients can create and forward their own greetings." },
            ].map((item, i) => (
              <div key={i} className="bg-glass rounded-xl p-5 border border-gold/10">
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
