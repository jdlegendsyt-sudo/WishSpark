import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EasterEggProps {
  senderName: string;
  accentColor: string;
  onOpen: () => void;
}

const ColorfulParticles = () => {
  const colors = [
    "hsl(340 80% 60%)", "hsl(200 80% 60%)", "hsl(120 70% 55%)",
    "hsl(50 90% 60%)", "hsl(280 70% 60%)", "hsl(30 85% 55%)",
    "hsl(170 70% 50%)", "hsl(0 80% 55%)", "hsl(60 90% 55%)",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 80 }).map((_, i) => {
        const color = colors[i % colors.length];
        const angle = (i / 80) * 360;
        const radius = 150 + Math.random() * 400;
        const endX = Math.cos((angle * Math.PI) / 180) * radius;
        const endY = Math.sin((angle * Math.PI) / 180) * radius - 100;
        const size = 4 + Math.random() * 8;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "50%",
              width: size,
              height: size,
              background: color,
            }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{
              x: endX,
              y: endY + Math.random() * 200,
              scale: [0, 1.5, 0.5],
              opacity: [0, 1, 0],
              rotate: Math.random() * 1080,
            }}
            transition={{
              duration: 2 + Math.random(),
              ease: "easeOut",
              delay: Math.random() * 0.3,
            }}
          />
        );
      })}
      {["🐣", "🐰", "🌸", "🌷", "✨", "🥚", "🐥", "💐"].map((emoji, i) => (
        <motion.div
          key={`emoji-${i}`}
          className="absolute text-3xl md:text-5xl"
          style={{ left: "50%", top: "50%" }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
          animate={{
            x: Math.cos((i / 8) * Math.PI * 2) * (180 + Math.random() * 200),
            y: Math.sin((i / 8) * Math.PI * 2) * (180 + Math.random() * 200) - 50,
            scale: [0, 2, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2, delay: 0.1 + i * 0.08, ease: "easeOut" }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

const EasterEgg = ({ senderName, accentColor, onOpen }: EasterEggProps) => {
  const [cracked, setCracked] = useState(false);

  const handleCrack = () => {
    setCracked(true);
    setTimeout(onOpen, 2000);
  };

  const eggColors = [
    { base: "hsl(340 70% 65%)", stripe: "hsl(50 90% 70%)", dot: "hsl(200 80% 60%)" },
    { base: "hsl(200 70% 60%)", stripe: "hsl(340 80% 65%)", dot: "hsl(120 70% 55%)" },
    { base: "hsl(120 60% 55%)", stripe: "hsl(280 70% 60%)", dot: "hsl(50 90% 65%)" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8">
      <AnimatePresence>
        {cracked && <ColorfulParticles />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <p className="text-lg text-muted-foreground font-body">
          You received a special Easter gift from
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient glow-gold">
          {senderName}
        </h2>
        <p className="text-muted-foreground">Tap the egg to crack it open! 🥚</p>
      </motion.div>

      <motion.div
        className="relative cursor-pointer"
        onClick={!cracked ? handleCrack : undefined}
        whileHover={!cracked ? { scale: 1.05 } : {}}
        whileTap={!cracked ? { scale: 0.95 } : {}}
      >
        <motion.div
          className="relative w-40 h-56 md:w-52 md:h-72"
          animate={
            cracked
              ? { scale: [1, 1.3, 0], opacity: [1, 1, 0], rotate: [0, -10, 10, 0] }
              : { y: [0, -6, 0] }
          }
          transition={
            cracked
              ? { duration: 1.5, ease: "easeInOut" }
              : { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }
        >
          {/* Main egg shape */}
          <div
            className="absolute inset-0 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] shadow-2xl overflow-hidden"
            style={{
              background: `linear-gradient(160deg, ${eggColors[0].base}, ${eggColors[1].base})`,
            }}
          >
            {/* Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10" />
            {/* Horizontal stripes */}
            <div
              className="absolute left-0 right-0 h-4 top-[30%]"
              style={{ background: eggColors[0].stripe, opacity: 0.7 }}
            />
            <div
              className="absolute left-0 right-0 h-3 top-[50%]"
              style={{ background: eggColors[0].dot, opacity: 0.5 }}
            />
            <div
              className="absolute left-0 right-0 h-4 top-[65%]"
              style={{ background: eggColors[1].stripe, opacity: 0.6 }}
            />
            {/* Dots pattern */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  background: eggColors[2].dot,
                  left: `${15 + (i % 4) * 22}%`,
                  top: `${20 + Math.floor(i / 4) * 35}%`,
                  opacity: 0.6,
                }}
              />
            ))}
            {/* Zigzag crack line when cracking */}
            {cracked && (
              <motion.div
                className="absolute left-0 right-0 top-[45%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <svg viewBox="0 0 200 20" className="w-full h-6" style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.3))" }}>
                  <motion.path
                    d="M0,10 L20,3 L40,15 L60,5 L80,12 L100,2 L120,14 L140,6 L160,13 L180,4 L200,10"
                    fill="none"
                    stroke="hsl(43 80% 90%)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </svg>
              </motion.div>
            )}
          </div>

          {/* Glow */}
          <motion.div
            className="absolute inset-0 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]"
            style={{
              boxShadow: `0 0 40px ${accentColor}40, 0 0 80px ${accentColor}20`,
            }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EasterEgg;
