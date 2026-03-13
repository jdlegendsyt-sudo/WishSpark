import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GiftBoxProps {
  senderName: string;
  accentColor: string;
  onOpen: () => void;
}

const ConfettiBurst = ({ accentColor }: { accentColor: string }) => {
  const colors = [
    "hsl(43 80% 55%)", accentColor, "hsl(340 70% 55%)",
    "hsl(200 70% 55%)", "hsl(120 70% 55%)", "hsl(280 70% 55%)",
    "hsl(0 80% 55%)", "hsl(50 90% 60%)", "hsl(170 70% 50%)",
    "hsl(60 90% 55%)", "hsl(310 80% 60%)", "hsl(190 75% 50%)"
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 120 }).map((_, i) => {
        const color = colors[i % colors.length];
        const angle = (i / 120) * 360;
        const radius = 250 + Math.random() * 500;
        const endX = Math.cos((angle * Math.PI) / 180) * radius;
        const endY = Math.sin((angle * Math.PI) / 180) * radius - 150;
        const size = 5 + Math.random() * 10;
        const isRound = i % 3 === 0;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: "50%", top: "50%",
              width: size, height: isRound ? size : size * 2.5,
              borderRadius: isRound ? "50%" : "2px",
              background: color,
            }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{
              x: endX, y: endY + Math.random() * 300,
              scale: [0, 2, 1.5, 0.5], opacity: [0, 1, 1, 0],
              rotate: Math.random() * 2160 - 1080,
            }}
            transition={{ duration: 2.5 + Math.random() * 1.5, ease: "easeOut", delay: Math.random() * 0.3 }}
          />
        );
      })}
      {["🎉", "🎊", "✨", "🥳", "🎆", "💥", "🌟", "🎇", "🎉", "🎊", "✨", "🥳", "💫", "⭐", "🪅", "🎈"].map((emoji, i) => (
        <motion.div
          key={`emoji-${i}`}
          className="absolute text-4xl md:text-6xl"
          style={{ left: "50%", top: "50%" }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
          animate={{
            x: Math.cos((i / 16) * Math.PI * 2) * (200 + Math.random() * 300),
            y: Math.sin((i / 16) * Math.PI * 2) * (200 + Math.random() * 300) - 80,
            scale: [0, 2.5, 2, 0], opacity: [0, 1, 1, 0],
            rotate: [0, Math.random() * 540],
          }}
          transition={{ duration: 2.2, delay: 0.05 + i * 0.06, ease: "easeOut" }}
        >
          {emoji}
        </motion.div>
      ))}
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={`streamer-${i}`}
          className="absolute"
          style={{
            left: `${5 + Math.random() * 90}%`, top: "-5%",
            width: 8 + Math.random() * 8, height: 50 + Math.random() * 80,
            background: colors[i % colors.length], borderRadius: "4px",
          }}
          initial={{ y: -100, opacity: 0, scaleY: 0 }}
          animate={{
            y: [0, window.innerHeight + 100], opacity: [0, 1, 1, 0.5], scaleY: [0.5, 1, 1.5],
            rotate: [Math.random() * 40 - 20, Math.random() * 80 - 40],
          }}
          transition={{ duration: 2.5 + Math.random() * 1.5, delay: Math.random() * 0.6, ease: "easeIn" }}
        />
      ))}
    </div>
  );
};

const GiftBox = ({ senderName, accentColor, onOpen }: GiftBoxProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(onOpen, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <AnimatePresence>
        {isOpened && <ConfettiBurst accentColor={accentColor} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <p className="text-lg text-muted-foreground font-body">
          You received a special gift from
        </p>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gold-gradient glow-gold break-words">
          {senderName}
        </h2>
        <p className="text-muted-foreground">Tap the gift to open it! 🎁</p>
      </motion.div>

      <motion.div
        className="relative cursor-pointer"
        onClick={!isOpened ? handleOpen : undefined}
        whileHover={!isOpened ? { scale: 1.05 } : {}}
        whileTap={!isOpened ? { scale: 0.95 } : {}}
      >
        <motion.div
          className="relative w-44 h-44 md:w-72 md:h-72"
          animate={isOpened ? { scale: [1, 1.2, 0], opacity: [1, 1, 0] } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Box body - rich velvet look */}
          <div
            className="absolute bottom-0 w-full h-[65%] rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${accentColor}, hsl(0 0% 15%))`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/30" />
            {/* Gold vertical ribbon */}
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-600 shadow-lg" />
            {/* Fabric texture dots */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }} />
          </div>

          {/* Lid */}
          <motion.div
            className="absolute top-[12%] -left-3 -right-3 h-[23%] rounded-2xl shadow-xl overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${accentColor}, hsl(0 0% 20%))`,
            }}
            animate={isOpened ? { y: -80, rotateX: -60, opacity: 0 } : { y: [0, -5, 0] }}
            transition={isOpened ? { duration: 0.5 } : { repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
            {/* Gold horizontal ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-6 bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300" />
          </motion.div>

          {/* Luxurious bow */}
          <motion.div
            className="absolute top-[2%] left-1/2 -translate-x-1/2 z-10"
            animate={isOpened ? { y: -100, opacity: 0, scale: 2, rotate: 180 } : { scale: [1, 1.08, 1] }}
            transition={isOpened ? { duration: 0.6 } : { repeat: Infinity, duration: 2 }}
          >
            <div className="relative">
              {/* Bow loops */}
              <div className="w-16 h-10 rounded-full border-[4px] border-amber-400 absolute -left-14 -top-2 rotate-[-30deg] bg-amber-400/10" />
              <div className="w-16 h-10 rounded-full border-[4px] border-amber-400 absolute -right-14 -top-2 rotate-[30deg] bg-amber-400/10" />
              {/* Center knot */}
              <div className="w-7 h-7 rounded-full absolute left-1/2 -translate-x-1/2 -top-1 bg-gradient-to-br from-amber-300 to-yellow-600 shadow-lg border-2 border-amber-300/50" />
              {/* Ribbon tails */}
              <div className="w-3 h-12 bg-gradient-to-b from-amber-400 to-amber-600 absolute left-1/2 -translate-x-[8px] top-5 rotate-[-15deg] rounded-b-full" />
              <div className="w-3 h-12 bg-gradient-to-b from-amber-400 to-amber-600 absolute left-1/2 translate-x-[2px] top-5 rotate-[15deg] rounded-b-full" />
            </div>
          </motion.div>

          {/* Multi-layered glow */}
          <motion.div
            className="absolute -inset-4 rounded-3xl"
            style={{
              boxShadow: `0 0 60px ${accentColor}30, 0 0 120px ${accentColor}15, inset 0 0 30px ${accentColor}10`,
            }}
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />

          {/* Floating sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`sp-${i}`}
              className="absolute text-xl"
              style={{
                left: `${10 + i * 15}%`,
                top: `${-5 + (i % 3) * 10}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.4,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GiftBox;
