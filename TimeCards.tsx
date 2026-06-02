import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function TimeCards() {
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date, timeZone: string) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(date);
  };

  if (!isClient) return null;

  return (
    <div className="fixed top-4 right-4 lg:top-8 lg:right-12 z-50 flex flex-col md:flex-row gap-2 md:gap-6 pointer-events-none">
      <TimeCard label="UTC" time={formatTime(time, 'UTC')} delay={0.4} />
      <TimeCard label="IST" time={formatTime(time, 'Asia/Kolkata')} delay={0.6} accent="orange" />
    </div>
  );
}

function TimeCard({ label, time, delay, accent = "cyan" }: { label: string; time: string; delay: number; accent?: "cyan" | "orange" }) {
  const accentColor = accent === 'orange' ? 'border-orange-500/50' : 'border-cyan-400/50';
  const dotColor = accent === 'orange' ? 'bg-orange-400' : 'bg-cyan-400';
  const glowClass = accent === 'orange' ? 'text-glow-orange' : 'text-glow';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className="relative group bg-[#05070a]/80 border border-white/10 px-5 py-3 overflow-hidden backdrop-blur-2xl shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className={`absolute top-0 right-0 w-16 border-t ${accentColor} shadow-[0_0_10px_currentColor]`} />
      <div className={`absolute bottom-0 left-0 w-8 border-b-2 ${accentColor}`} />
      
      <div className="relative z-10 flex flex-col items-end">
        <div className="flex items-center gap-2 mb-1">
          <div className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse shadow-[0_0_8px_currentColor]`} />
          <span className="font-sans text-[10px] text-gray-500 uppercase tracking-[0.3em] font-medium">{label} SYNC</span>
        </div>
        <span className={`font-mono text-lg lg:text-xl text-gray-100 tracking-[0.1em] ${glowClass}`}>
          {time}
        </span>
      </div>
    </motion.div>
  );
}
