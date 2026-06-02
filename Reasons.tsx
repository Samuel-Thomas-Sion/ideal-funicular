import { motion } from 'motion/react';
import { Activity, Trophy, TrendingUp, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Activity, title: 'Community Activity', value: 'High Yield', color: 'text-cyan-400', border: 'border-cyan-500/30' },
  { icon: Trophy, title: 'Competitive Events', value: 'Elite Level', color: 'text-orange-400', border: 'border-orange-500/30' },
  { icon: TrendingUp, title: 'Continuous Dev', value: 'Iterative', color: 'text-blue-400', border: 'border-blue-500/30' },
  { icon: Sparkles, title: 'Unique Forum Games', value: 'Custom UX', color: 'text-purple-400', border: 'border-purple-500/30' },
  { icon: MessageSquare, title: 'Active Discussion', value: 'Real-time', color: 'text-emerald-400', border: 'border-emerald-500/30' },
  { icon: ShieldCheck, title: 'Strong Club Identity', value: 'Codex Standard', color: 'text-cyan-200', border: 'border-cyan-200/30' },
];

export function Reasons() {
  return (
    <section id="reasons" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
         <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4"
         >
            System Diagnostics
         </motion.div>
         <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Why Members Join</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {stats.map((stat, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               whileHover={{ y: -5 }}
               className={`glass-panel p-6 relative overflow-hidden group border-t-2 ${stat.border}`}
            >
               {/* Background radar sweep effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
               
               <div className="flex justify-between items-start mb-8">
                  <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
                     <stat.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest text-right">
                     Metric<br/>{String(i + 1).padStart(2, '0')}
                  </span>
               </div>
               
               <div>
                  <div className="font-mono text-sm tracking-widest text-gray-400 uppercase mb-1">
                     {stat.title}
                  </div>
                  <div className={`font-display text-2xl font-bold ${stat.color} text-glow drop-shadow-md`}>
                     {stat.value}
                  </div>
               </div>
               
               {/* Decorative tech lines */}
               <div className="absolute bottom-4 right-4 flex gap-1 z-0">
                  <div className="w-1 h-3 bg-white/10" />
                  <div className="w-1 h-3 bg-white/20" />
                  <div className="w-1 h-3 bg-white/30 group-hover:bg-cyan-400 transition-colors" />
               </div>
            </motion.div>
         ))}
      </div>
    </section>
  );
}
