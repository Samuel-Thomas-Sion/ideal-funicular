import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-4 pt-16 pb-24 overflow-hidden">
      
      {/* Top HUD decoration */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-8 left-8 flex items-center space-x-3 text-cyan-500 font-mono text-xs tracking-widest uppercase opacity-70"
      >
        <Terminal size={14} />
        <span>System . Online</span>
      </motion.div>
      {/* TimeCards component handles the right side decorative elements */}

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative inline-block"
        >
          {/* Logo/Icon shape backplate */}
          <div className="absolute inset-0 blur-3xl rounded-full bg-cyan-900/30 scale-150 animate-pulse" />
          
          <h1 className="relative font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-800 pb-4">
            Welcome to the Codex
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl font-light text-cyan-200 tracking-wide text-glow"
        >
          This is not just another chess club.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 mb-12 flex flex-col items-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8" />
          <p className="text-gray-400 font-mono tracking-tight text-sm md:text-base leading-relaxed">
            Most clubs gather players.<br/>
            <span className="text-white mt-1 block font-medium">The Codex builds systems.</span>
          </p>
        </motion.div>

        <motion.a
          href="https://www.chess.com/club/the-codex"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold tracking-wider text-sm uppercase text-white transition-all duration-300"
        >
          <div className="absolute inset-0 w-full h-full border border-cyan-500/50 bg-cyan-950/30 glass-panel group-hover:glass-panel-glow transition-all duration-300 transform skew-x-[-10deg]" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform skew-x-[-10deg]" />
          
          <span className="relative flex items-center gap-3">
             <span className="text-cyan-400">⚔️</span> Enter the Codex
          </span>
          
          {/* Decorative corners */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 transform -translate-x-1 -translate-y-1" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 transform translate-x-1 translate-y-1" />
        </motion.a>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest">Initialize Sequence</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
