import { motion } from 'motion/react';
import { Coins, Handshake, Sword, Trophy, Zap } from 'lucide-react';

const actions = [
  { text: 'Recruiting members', icon: Handshake },
  { text: 'Participating in events', icon: Zap },
  { text: 'Winning challenges', icon: Sword },
  { text: 'Supporting club activities', icon: ActivityIcon }, // Will define local
  { text: 'Contributing to community projects', icon: Trophy },
];

function ActivityIcon(props: any) {
  return <Zap {...props} />; // Fallback
}

export function Economy() {
  return (
    <section id="economy" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
      <div className="glass-panel border-cyan-500/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
           
           {/* Text Content */}
           <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-cyan-500/20">
             <div className="flex items-center gap-3 mb-6">
                <span className="text-orange-400 font-mono text-2xl text-glow-orange">🏆</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">The Cheers Economy</h2>
             </div>
             <p className="text-lg text-gray-300 font-light mb-8 max-w-md leading-relaxed">
                The Codex operates its own internal reward system. A centralized metric for contribution and value.
             </p>
             
             <div className="space-y-4">
               <div className="font-mono text-sm tracking-widest text-cyan-400 uppercase mb-4 opacity-70">
                  Acquisition Vectors
               </div>
               {actions.map((action, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-4 text-gray-300 font-mono text-sm"
                  >
                     <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                        <action.icon size={14} />
                     </div>
                     <span>{action.text}</span>
                     <div className="ml-auto flex gap-1 h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/50" />
                  </motion.div>
               ))}
             </div>
           </div>

           {/* HUD Dashboard */}
           <div className="p-8 md:p-12 relative flex items-center justify-center min-h-[400px]">
              {/* HUD Elements */}
              <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-sm"
              >
                  {/* Central Orb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-500/5 blur-[80px]" />
                  
                  {/* Dashboard Interface */}
                  <div className="glass-panel p-6 border-orange-500/30 relative">
                     <div className="absolute top-0 right-0 p-2 text-orange-400 font-mono text-[10px] uppercase border-b border-l border-orange-500/30 bg-orange-500/10">
                        Live Tracking
                     </div>
                     
                     <div className="flex items-center gap-4 mb-8 pt-4">
                        <div className="w-12 h-12 rounded bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                           <Coins size={24} className="text-white" />
                        </div>
                        <div>
                           <div className="text-gray-400 font-mono text-xs uppercase tracking-widest">Global Reserve</div>
                           <div className="font-display text-3xl font-bold text-white text-glow-orange">24,591</div>
                        </div>
                     </div>

                     <div className="space-y-3">
                        {/* Fake data bars */}
                        {[
                           { label: "Daily Volume", val: "84%", color: "bg-orange-500" },
                           { label: "Participation", val: "92%", color: "bg-cyan-500" },
                           { label: "Recruitment", val: "61%", color: "bg-blue-500" }
                        ].map((bar, i) => (
                           <div key={i} className="text-xs font-mono">
                              <div className="flex justify-between text-gray-400 mb-1">
                                 <span>{bar.label}</span>
                                 <span>{bar.val}</span>
                              </div>
                              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: bar.val }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                                    className={`h-full ${bar.color}`} 
                                 />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
