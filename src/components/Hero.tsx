"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Hero = () => {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 },
    },
  };

  const letterVars: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100 } 
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-main)]">
      
      {/* --- MAXIMALER HINTERGRUND-GLOW (DYNAMISCH) --- */}
      <div className="absolute inset-0 z-0">
        {/* Kontrast-Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-main)]/10 to-[var(--bg-main)] z-10" />
        
        {/* Die Lichtquellen-Animation */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center scale-150 md:scale-100"
        >
          {/* Haupt-Glow (Grün / var(--accent)) */}
          <div className="absolute w-[600px] h-[600px] bg-[var(--accent)] rounded-full blur-[140px] opacity-40 -translate-x-1/4 -translate-y-1/4" />
          
          {/* Sekundär-Glow (Cyan) */}
          <div className="absolute w-[500px] h-[500px] bg-[#06b6d4] rounded-full blur-[120px] opacity-30 translate-x-1/4 translate-y-1/4" />
          
          {/* Tertiär-Glow (Violett/Deep Blue) */}
          <div className="absolute w-[700px] h-[700px] bg-[#7c3aed] rounded-full blur-[160px] opacity-20 -translate-y-1/3 translate-x-1/2" />
        </motion.div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-20 text-center px-6">
        <motion.h1 
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="text-7xl md:text-9xl font-black tracking-tighter mb-4 flex justify-center flex-wrap drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex text-[var(--text-main)]">
            {"VISION".split("").map((char, index) => (
              <motion.span key={index} variants={letterVars}>{char}</motion.span>
            ))}
          </div>
          <div className="flex" style={{ color: "var(--accent)" }}>
            {"DESIGN".split("").map((char, index) => (
              <motion.span key={index} variants={letterVars}>{char}</motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-lg md:text-2xl font-bold tracking-[0.3em] uppercase text-[var(--text-main)] drop-shadow-md"
        >
          Informatik • Quality • Development
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
            className="mt-12 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs
                       border-2 border-[var(--accent)] text-[var(--accent)]
                       bg-[var(--accent)]/10 hover:bg-[var(--accent)] hover:text-white
                       transition-all duration-500 hover:shadow-[0_0_60px_var(--accent)]
                       active:scale-95"
          >
            Projekte ansehen
          </button>
        </motion.div>
      </div>

      {/* --- ELEGANTER SCROLL-INDICATOR --- */}
      <motion.div 
        animate={{ 
          y: [0, 15, 0], 
          opacity: [0.2, 0.6, 0.2] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-[var(--accent)] font-bold opacity-60">Scroll</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;