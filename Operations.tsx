import { motion } from 'motion/react';
import { Gamepad2, Swords, Building2, Radio, FileText, MonitorSmartphone } from 'lucide-react';

const modules = [
  { icon: Gamepad2, title: 'Forum Games', desc: 'Interactive community logic.' },
  { icon: Swords, title: 'Multi-Club Arenas', desc: 'External combat operations.' },
  { icon: Building2, title: 'Departments', desc: 'Specialized structural divisions.' },
  { icon: Radio, title: 'Community Operations', desc: 'Internal event broadcasting.' },
  { icon: FileText, title: 'Weekly Reports', desc: 'Data-driven transparency.' },
  { icon: MonitorSmartphone, title: 'Sidebar Development', desc: 'Continuous UX upgrades.' },
];

export function Operations() {
  return (
    <section id="operations" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-cyan-400 text-glow text-3xl mb-4">⚜️</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">Operational Systems</h2>
        <div className="mt-6 w-px h-16 bg-gradient-to-b from-cyan-500 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod, i) => (
           <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
           >
              {/* Animated border container */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-panel p-8 h-full rounded-xl overflow-hidden hover:glass-panel-glow border border-white/5 transition-all duration-500">
                 
                 {/* Top terminal styled header */}
                 <div className="absolute top-0 left-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    <span className="ml-auto font-mono text-[10px] text-gray-500 uppercase tracking-widest">Sys.Mod_{i+1}</span>
                 </div>

                 <div className="pt-8">
                    <mod.icon size={32} strokeWidth={1} className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors" />
                    <h3 className="font-display text-xl font-bold text-white mb-2 tracking-tight group-hover:text-glow transition-all">{mod.title}</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{mod.desc}</p>
                 </div>

                 {/* Corner accent */}
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl group-hover:border-cyan-400 transition-colors duration-500" />
              </div>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
