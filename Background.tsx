import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Background() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate some random particles for a subtle sci-fi effect
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-codex-black">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Edge vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-codex-black via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-codex-black via-transparent to-transparent opacity-80" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400 opacity-20 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: ["0%", "-20%", "0%"],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Global scan line */}
      <div className="scan-line" />
    </div>
  );
}
