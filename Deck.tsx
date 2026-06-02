import { motion, AnimatePresence } from 'motion/react';
import { Home, Info, BarChart2, Coins, Server, Swords, Rocket, LogIn } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', label: 'Initialization', icon: Home },
  { id: 'about', label: 'The Codex', icon: Info },
  { id: 'reasons', label: 'Metrics', icon: BarChart2 },
  { id: 'economy', label: 'Economy', icon: Coins },
  { id: 'operations', label: 'Operations', icon: Server },
  { id: 'arena', label: 'Arena', icon: Swords },
  { id: 'future', label: 'Future', icon: Rocket },
  { id: 'join', label: 'Access', icon: LogIn },
];

export function Deck() {
  const [active, setActive] = useState('hero');
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-2 xl:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:gap-4 py-8 pointer-events-none">
       {/* Connecting Line */}
       <div className="absolute left-1/2 top-8 bottom-8 w-[1px] bg-gradient-to-b from-transparent via-cyan-800/50 to-transparent -translate-x-1/2 -z-10" />

       {navItems.map((item) => (
         <div
            key={item.id}
            className="relative flex items-center pointer-events-auto"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
         >
             <motion.button
                onClick={() => scrollTo(item.id)}
                className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 backdrop-blur-md outline-none ${
                    active === item.id 
                    ? 'bg-[#030508] border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                    : 'bg-[#030508]/60 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                }`}
             >
                <item.icon 
                    size={16} 
                    strokeWidth={active === item.id ? 2 : 1.5}
                    className={`transition-colors duration-300 ${
                        active === item.id ? 'text-cyan-300' : 'text-gray-500 group-hover:text-cyan-400'
                    }`}
                />
             </motion.button>
             
             <AnimatePresence>
                 {(hovered === item.id || active === item.id) && (
                     <motion.div
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -10 }}
                         transition={{ duration: 0.2 }}
                         className="absolute left-12 flex items-center pointer-events-none"
                     >
                         <div className={`h-[1px] w-4 mr-3 transition-colors ${active === item.id ? 'bg-cyan-400' : 'bg-cyan-500/30'}`} />
                         <div className={`px-3 py-1.5 backdrop-blur-md border rounded uppercase tracking-[0.2em] font-mono text-[10px] whitespace-nowrap transition-colors ${
                             active === item.id 
                             ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-200 text-glow shadow-[0_0_10px_rgba(34,211,238,0.2)]' 
                             : 'bg-black/60 border-white/5 text-gray-400'
                         }`}>
                             {item.label}
                         </div>
                     </motion.div>
                 )}
             </AnimatePresence>
         </div>
       ))}
    </div>
  );
}
