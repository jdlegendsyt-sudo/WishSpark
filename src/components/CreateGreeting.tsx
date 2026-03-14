import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Festival } from "@/data/festivals";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface CreateGreetingProps {
  festival: Festival;
}

// Realistic party popper effect - bursts from both sides
const PartyPopperEffect = ({ active }: { active: boolean }) => {
  const colors = [
    "hsl(43 80% 55%)", "hsl(340 70% 55%)", "hsl(200 70% 55%)",
    "hsl(120 70% 55%)", "hsl(280 70% 55%)", "hsl(30 90% 55%)",
    "hsl(0 80% 55%)", "hsl(170 70% 50%)", "hsl(60 90% 55%)",
    "hsl(310 80% 60%)", "hsl(190 75% 50%)", "hsl(50 95% 60%)"
  ];

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Massive confetti burst from center */}
      {Array.from({ length: 200 }).map((_, i) => {
        const color = colors[i % colors.length];
        const angle = (i / 200) * 360;
        const radius = 200 + Math.random() * 600;
        const endX = Math.cos((angle * Math.PI) / 180) * radius;
        const endY = Math.sin((angle * Math.PI) / 180) * radius - 100;
        const size = 4 + Math.random() * 8;
        const shapes = ["rounded-full", "rounded-sm", ""];
        const shape = shapes[i % 3];

        return (
          <motion.div
            key={i}
            className={`absolute ${shape}`}
            style={{
              left: "50%", top: "45%",
              width: size, height: i % 3 === 2 ? size * 2 : size,
              background: color,
              borderRadius: i % 3 === 2 ? "2px" : undefined,
            }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{
              x: endX,
              y: endY + Math.random() * 400,
              scale: [0, 2, 1, 0.3],
              opacity: [0, 1, 1, 0],
              rotate: Math.random() * 2000 - 1000,
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              ease: "easeOut",
              delay: Math.random() * 0.4,
            }}
          />
        );
      })}

      {/* Party popper emojis from corners */}
      {["🎉", "🎊", "✨", "🥳", "💥", "🌟", "🎆", "🎇", "🪅", "🎈", "💫", "⭐",
        "🎉", "🎊", "✨", "🥳", "💥", "🌟", "🎆", "🎇", "🪅", "🎈", "💫", "⭐"].map((emoji, i) => (
        <motion.div
          key={`emoji-${i}`}
          className="absolute text-3xl md:text-5xl"
          style={{
            left: i < 12 ? "5%" : "95%",
            top: "50%",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: (i < 12 ? 1 : -1) * (100 + Math.random() * 400),
            y: -200 + Math.random() * 400,
            opacity: [0, 1, 1, 0],
            scale: [0, 2.5, 2, 0],
            rotate: [0, Math.random() * 720],
          }}
          transition={{ duration: 2.5, delay: i * 0.05, ease: "easeOut" }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Falling streamers */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`str-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-5%",
            width: 6 + Math.random() * 6,
            height: 40 + Math.random() * 60,
            background: colors[i % colors.length],
            borderRadius: "3px",
          }}
          initial={{ y: -80, opacity: 0 }}
          animate={{
            y: [0, window.innerHeight + 50],
            opacity: [0, 1, 1, 0.3],
            rotate: [Math.random() * 30 - 15, Math.random() * 60 - 30],
          }}
          transition={{ duration: 3 + Math.random() * 2, delay: Math.random() * 0.8, ease: "easeIn" }}
        />
      ))}

      {/* Sparkle ring */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`sp-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 3,
            height: 3,
            background: colors[i % colors.length],
            boxShadow: `0 0 6px ${colors[i % colors.length]}`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 3, 0] }}
          transition={{ duration: 1.5, delay: Math.random() * 1.2, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

const CreateGreeting = ({ festival }: CreateGreetingProps) => {
  const [name, setName] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [showPartyEffect, setShowPartyEffect] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    if (!name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }

    // Use the current origin when running locally or from a custom domain.
    // Fall back to the production URL if `window` is unavailable.
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://wishspark.xyz";
    const link = `${baseUrl}/${festival.slug}?from=${encodeURIComponent(name.trim())}`;
    setGeneratedLink(link);
    setShowPartyEffect(true);
    setTimeout(() => setShowPartyEffect(false), 3000);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    toast({ title: "Link copied!" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = `${festival.greeting} ${festival.emoji}\n\n${name} sent you a special greeting! Open to see your surprise gift 🎁\n\n${generatedLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${festival.greeting} from ${name}`,
          text: `${name} sent you a special ${festival.name} greeting! 🎁`,
          url: generatedLink,
        });
      } catch {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  return (
    <>
      <PartyPopperEffect active={showPartyEffect} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto space-y-6"
      >
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-display font-bold text-foreground">
            Create Your {festival.name} Greeting
          </h3>
          <p className="text-sm text-muted-foreground">
            Enter your name and share the magic! ✨
          </p>
        </div>

        {!generatedLink ? (
          <>
            <div className="bg-glass rounded-2xl p-6 space-y-4 shadow-gold border border-gold/20">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Name</label>
                <Input
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCreate()}
                  className="bg-secondary/50 border-gold/20 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                />
              </div>
              <Button
                onClick={handleCreate}
                className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90 font-semibold shadow-gold"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Create Greeting
              </Button>
            </div>
            <Button
              onClick={() => navigate("/#choose-festival")}
              className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90 font-semibold shadow-gold"
              size="lg"
            >
              Create another greeting
            </Button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-glass rounded-2xl p-6 space-y-4 shadow-gold border border-gold/20"
          >
            <div className="text-center space-y-2">
              <motion.p
                className="text-4xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
              >
                🎉
              </motion.p>
              <h4 className="text-lg font-display font-semibold text-foreground">
                Your greeting is ready!
              </h4>
              <p className="text-sm text-muted-foreground">
                Share this link with your friends and family
              </p>
            </div>

            <div className="bg-secondary/30 rounded-lg p-3 flex items-center gap-2">
              <input
                readOnly
                value={generatedLink}
                className="flex-1 bg-transparent text-xs text-foreground outline-none truncate"
              />
              <button
                onClick={handleCopy}
                className="shrink-0 text-primary hover:text-primary/80 transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleWhatsAppShare}
                className="bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-foreground font-semibold"
                size="lg"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="border-gold/30 text-foreground hover:bg-secondary/50 font-semibold"
                size="lg"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <Button
              onClick={() => navigate("/#choose-festival")}
              className="w-full bg-gold-gradient text-primary-foreground hover:opacity-90 font-semibold shadow-gold"
              size="lg"
            >
              Create another greeting
            </Button>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default CreateGreeting;
