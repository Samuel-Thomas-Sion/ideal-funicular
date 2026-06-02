import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

export function Future() {
  return (
    <section id="future" className="relative z-10 py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 mb-8 animate-pulse">
           <Rocket size={28} />
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
           The Mission Continues
        </h2>

        <div className="space-y-4 font-mono text-lg md:text-xl text-gray-400 tracking-wide">
           <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>The Codex is still growing.</motion.p>
           <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>New systems are being developed.</motion.p>
           <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>New departments are being formed.</motion.p>
           <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>New events are being created.</motion.p>
           <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="text-cyan-400">New members are joining.</motion.p>
        </div>

        <motion.div 
           initial={{ opacity: 0 }} 
           whileInView={{ opacity: 1 }} 
           transition={{ delay: 1.5, duration: 1 }}
           className="mt-16 p-6 border border-white/10 bg-white/5 inline-block"
        >
           <p className="font-display text-2xl font-bold text-white tracking-tight">
              This is not a finished project.<br/>
              <span className="text-cyan-400">This is an evolving one.</span>
           </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
