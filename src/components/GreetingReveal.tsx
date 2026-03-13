import { motion } from "framer-motion";
import { Sparkles, PartyPopper } from "lucide-react";
import type { Festival } from "@/data/festivals";
import SilkDots from "./SilkDots";

interface GreetingRevealProps {
  festival: Festival;
  senderName: string;
}

const GreetingReveal = ({ festival, senderName }: GreetingRevealProps) => {
  return (
    <>
      <SilkDots />
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center gap-3 md:gap-5 text-center px-4 relative"
      >
        {/* Celebration rings */}
        <motion.div
          className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full border-2 border-primary/20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3], rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full border border-primary/10"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.2, 0.4, 0.2], rotate: -360 }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />

        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <PartyPopper className="w-12 h-12 text-primary" />
        </motion.div>

        <div className="space-y-3 max-w-lg relative z-10">
          <motion.div
            className="text-5xl md:text-8xl"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            {festival.emoji}
          </motion.div>

          <motion.h1
            className="text-3xl md:text-6xl font-display font-bold text-gold-gradient glow-gold"
            animate={{ textShadow: ["0 0 20px rgba(218,165,32,0.3)", "0 0 40px rgba(218,165,32,0.6)", "0 0 20px rgba(218,165,32,0.3)"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {festival.greeting}
          </motion.h1>

          <motion.div
            className="bg-glass rounded-2xl p-4 md:p-8 shadow-gold border border-gold/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-base md:text-xl text-foreground font-body leading-relaxed">
              {festival.description}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <p className="text-sm text-muted-foreground">
                With love from <span className="text-primary font-semibold">{senderName}</span>
              </p>
              <motion.div animate={{ rotate: [0, -360] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-xs md:text-sm italic line-clamp-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            "{festival.longDescription.slice(0, 80)}..."
          </motion.p>
        </div>

        {/* Snowfall / glitter particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`snow-${i}`}
            className="absolute pointer-events-none rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
              width: 3 + Math.random() * 5,
              height: 3 + Math.random() * 5,
              background: i % 3 === 0
                ? "hsl(43 90% 65%)"
                : i % 3 === 1
                ? "hsl(50 100% 80%)"
                : "hsl(0 0% 95%)",
              boxShadow: "0 0 6px hsl(43 90% 65% / 0.5)",
            }}
            animate={{
              y: [0, window.innerHeight + 50],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              opacity: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 4,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating decorations - increased */}
        {["✨", "🌟", "💫", "⭐", "🎊", "🎉", "💖", "🌸", "🎆", "🪄", "✨", "🌟", "💫", "⭐", "🎊", "🎉", "🎇", "💥", "🪅", "🎈"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-lg md:text-2xl pointer-events-none"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
              opacity: [0.2, 0.9, 0.2],
              rotate: [0, 360],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5 + Math.random() * 3,
              delay: Math.random() * 2,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default GreetingReveal;
