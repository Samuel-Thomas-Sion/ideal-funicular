import { motion } from 'motion/react';

export function Arena() {
  return (
    <section id="arena" className="relative z-10 py-32 mt-12 bg-black border-y border-red-900/30 overflow-hidden">
      {/* Dramatic background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/40 via-black to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      
      {/* Vertical scan lines for tension */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative flex flex-col md:flex-row items-center gap-16">
         
         <div className="w-full md:w-1/2 relative">
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative"
            >
               <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full" />
               <h2 className="relative font-display text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-red-800 tracking-tighter uppercase leading-[0.9]">
                  Battle<br/>Beyond<br/>The Club
               </h2>
               <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
            </motion.div>
         </div>

         <div className="w-full md:w-1/2">
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="space-y-6 text-lg font-light text-gray-300 leading-relaxed"
            >
               <p>
                  The Codex regularly competes in large <span className="text-white font-medium">Multi-Club Arenas</span> against clubs from across Chess.com.
               </p>
               <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                  <p className="relative z-10 italic">
                     Even against significantly larger clubs, activity, teamwork, and coordination allow the Codex to compete far above its size.
                  </p>
               </div>
               
               <div className="pt-4 space-y-2 font-mono text-xl tracking-widest uppercase">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.0 }} className="text-gray-500">Every game matters.</motion.div>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-gray-400">Every point matters.</motion.div>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }} className="text-red-500 text-glow drop-shadow-md font-bold">Every member matters.</motion.div>
               </div>
            </motion.div>
         </div>
      </div>
    </section>
  );
}
