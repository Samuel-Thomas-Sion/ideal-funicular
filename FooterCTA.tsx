import { motion } from 'motion/react';

export function FooterCTA() {
  return (
    <section id="join" className="relative z-10 py-32 px-6 min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Intense core glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Concentric rings to simulate a gate or portal */}
      <motion.div 
         animate={{ rotate: 360 }} 
         transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-900/40 rounded-full border-dashed pointer-events-none" 
      />
      <motion.div 
         animate={{ rotate: -360 }} 
         transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" 
      />

      <div className="text-center relative z-10 max-w-3xl mx-auto">
        <motion.h2 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
        >
           Join The Codex
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.3 }}
           className="space-y-2 text-xl md:text-2xl text-gray-300 font-light mb-16"
        >
           <p>You are not joining a completed story.</p>
           <p className="text-white font-medium">You are helping write the next chapter.</p>
        </motion.div>

        <motion.a
          href="https://www.chess.com/club/the-codex"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center px-12 py-6 font-mono font-bold tracking-[0.2em] text-lg uppercase text-white transition-all duration-300 bg-black/50 overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full border-2 border-cyan-500 bg-cyan-950/40" />
          
          {/* Scanning light inside button */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent -translate-x-[200px] group-hover:translate-x-[400px] transition-transform duration-1000 ease-in-out skew-x-[-20deg]" />

          <span className="relative flex items-center gap-4 text-glow">
             ⚔️ ENTER THE CODEX ⚔️
          </span>
          
          {/* Precision frame corners */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white" />
        </motion.a>
      </div>

      <div className="absolute bottom-6 font-mono text-[10px] text-gray-600 uppercase tracking-widest">
         Connection Secured /// V.1.0 /// Area: Unknown
      </div>
    </section>
  );
}
