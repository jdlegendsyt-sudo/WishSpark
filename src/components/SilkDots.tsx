import { motion } from "framer-motion";
import { useMemo } from "react";

const SilkDots = () => {
  const whiteDots = useMemo(() => 
    Array.from({ length: 60 }).map(() => ({
      size: 2 + Math.random() * 3,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 5,
      drift: (Math.random() - 0.5) * 50,
      opacity: 0.2 + Math.random() * 0.4,
    })), []
  );

  const giltParticles = useMemo(() =>
    Array.from({ length: 40 }).map(() => ({
      size: 1.5 + Math.random() * 3,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      drift: (Math.random() - 0.5) * 70,
      opacity: 0.3 + Math.random() * 0.5,
      hue: 38 + Math.random() * 15,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden" style={{ width: "100vw", height: "100vh" }}>
      {whiteDots.map((dot, i) => (
        <motion.div
          key={`w-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${dot.left}%`,
            top: -10,
            width: dot.size,
            height: dot.size,
            background: `rgba(255,255,255,${dot.opacity})`,
            boxShadow: `0 0 ${dot.size + 1}px rgba(255,255,255,${dot.opacity * 0.4})`,
          }}
          animate={{ y: [0, window.innerHeight + 40], x: [0, dot.drift] }}
          transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay, ease: "linear" }}
        />
      ))}
      {giltParticles.map((p, i) => (
        <motion.div
          key={`g-${i}`}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: -10,
            width: p.size,
            height: p.size * (1 + Math.random() * 0.8),
            borderRadius: i % 3 === 0 ? "50%" : "1px",
            background: `hsla(${p.hue}, 85%, 58%, ${p.opacity})`,
            boxShadow: `0 0 ${p.size + 3}px hsla(${p.hue}, 90%, 55%, ${p.opacity * 0.6})`,
          }}
          animate={{
            y: [0, window.innerHeight + 40],
            x: [0, p.drift],
            opacity: [p.opacity, p.opacity * 0.6, p.opacity],
            rotate: [0, 360],
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default SilkDots;
