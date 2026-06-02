import { motion } from 'motion/react';
import { Database, Shield, Zap, Target, LayoutDashboard, Globe, Activity } from 'lucide-react';

const features = [
  { icon: Globe, title: 'Multi-Club Arena Operations' },
  { icon: Target, title: 'Competitive Events' },
  { icon: Zap, title: 'Interactive Forum Activities' },
  { icon: Database, title: 'Strategy Discussions' },
  { icon: Shield, title: 'Club Departments' },
  { icon: LayoutDashboard, title: 'Advanced Sidebar Systems' },
  { icon: Activity, title: 'Operational Reports' },
];

export function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left column: Sticky description */}
        <div className="w-full md:w-1/2 md:sticky top-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-cyan-500 font-mono text-xl">🏛</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">What Is The Codex?</h2>
            </div>
            
            <div className="glass-panel p-8 relative overflow-hidden group">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-900/10 blur-3xl rounded-full group-hover:bg-cyan-800/20 transition-all duration-700" />
               <div className="relative space-y-6 text-gray-300 font-light leading-relaxed">
                  <p>
                    The Codex is a growing chess community built around activity, competition, creativity, and long-term development.
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-cyan-900/50 to-transparent" />
                  <p className="font-mono text-sm tracking-tight text-cyan-100">
                    Members do not simply join.<br/>
                    <span className="text-white">They contribute.</span><br/>
                    <span className="text-white">They compete.</span><br/>
                    <span className="text-white">They help shape the future of the club.</span>
                  </p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right column: Feature grid */}
        <div className="w-full md:w-1/2">
           <div className="grid grid-cols-1 gap-4">
             {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel p-4 flex items-center gap-4 group hover:bg-cyan-900/10 transition-colors duration-300 cursor-default border-l-2 hover:border-cyan-400 border-transparent"
                >
                   <div className="p-2 rounded bg-cyan-950/50 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-900/50 transition-colors">
                      <item.icon size={20} strokeWidth={1.5} />
                   </div>
                   <span className="font-mono text-sm tracking-wide text-gray-200 group-hover:text-white transition-colors">
                     {item.title}
                   </span>
                </motion.div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}
