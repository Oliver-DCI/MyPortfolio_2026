"use client";
import { Code, Database } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] 
  });

  // Parallax nur für den Y-Versatz
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -40]); 
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const scaleYLine = useSpring(
    useTransform(scrollYProgress, [0.3, 0.8], [0, 1]),
    { stiffness: 100, damping: 30 }
  );

  const dot2Color = useTransform(scrollYProgress, [0.55, 0.60], ["var(--border-color)", "var(--accent)"]);
  const dot3Color = useTransform(scrollYProgress, [0.75, 0.80], ["var(--border-color)", "var(--accent)"]);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 bg-[var(--bg-main)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Linke Seite: Bild-Container */}
          <div className="sticky top-32 w-full max-w-[300px] shrink-0 mx-auto md:mx-0">
            <motion.div 
              style={{ y: yImage }}
              className="relative aspect-[4/5] w-full group"
            >
              {/* Pulsierender Hintergrund-Glow */}
              <motion.div 
                style={{ scale: glowScale }}
                className="absolute inset-0 bg-[var(--accent)] blur-[80px] opacity-20 transition-opacity group-hover:opacity-40"
              />
              
              {/* DER RAHMEN - Jetzt ohne Framer-Motion-Transformationen */}
              <div className="relative z-10 w-full h-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.01] group-hover:border-[var(--accent)]/50">
                
                {/* DEIN FOTO */}
                <img 
                  src="/myfaceportfolio2026.png" 
                  alt="Oliver - VisionDesign" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Rechte Seite: Content */}
          <div className="flex-1 w-full relative">
            
            {/* DYNAMISCHE LINIE */}
            <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-[var(--border-color)] opacity-20 hidden md:block" />
            <motion.div 
              style={{ scaleY: scaleYLine }}
              className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-[var(--accent)] origin-top hidden md:block shadow-[0_0_15px_var(--accent)] z-10" 
            />

            <div className="space-y-16 pl-0 md:pl-12">
              
              {/* ÜBER MICH CONTAINER */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-10 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[2.5rem] shadow-xl overflow-hidden"
              >
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[var(--accent)] opacity-[0.03] blur-[100px] pointer-events-none" />

                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[var(--text-main)] mb-6">
                  Über <span style={{ color: 'var(--accent)' }}>Mich</span>
                </h2>
                
                <div className="text-lg leading-relaxed text-[var(--text-main)] opacity-75 space-y-6 relative z-10">
                  <p>
                    Als Informatiker aus Frankfurt am Main kombiniere ich fundiertes IT-Wissen mit über **12 Jahren Erfahrung** als Testspezialist in komplexen Softwareprojekten. 
                  </p>
                  <p>
                    Nach meiner langjährigen Tätigkeit im Quality Engineering habe ich mich in den letzten **15 Monaten** konsequent zum Full-Stack-Entwickler weitergebildet. 
                  </p>
                  <p>
                    Mein technischer Fokus liegt auf modernen Architekturen mit **Next.js, TypeScript und React**, ergänzt durch tiefgehende Interessen an Datenbanklösungen wie **PostgreSQL und MongoDB**.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                  <div className="flex items-center space-x-3 p-4 bg-[var(--bg-main)]/50 rounded-2xl border border-[var(--border-color)] group/item transition-colors hover:border-[var(--accent)]/50">
                    <Code size={20} className="text-[var(--accent)]" />
                    <span className="text-sm font-black uppercase tracking-widest text-[var(--text-main)] opacity-80">Development</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-[var(--bg-main)]/50 rounded-2xl border border-[var(--border-color)] group/item transition-colors hover:border-[var(--accent)]/50">
                    <Database size={20} className="text-[var(--accent)]" />
                    <span className="text-sm font-black uppercase tracking-widest text-[var(--text-main)] opacity-80">Architecture</span>
                  </div>
                </div>
              </motion.div>

              {/* WERDEGANG */}
              <div className="space-y-12 relative pt-4">
                {/* Status: Jetzt */}
                <div className="relative pl-12">
                  <div className="absolute left-[-49px] top-1 w-6 h-6 rounded-full bg-[var(--bg-main)] border-2 border-[var(--accent)] z-20 hidden md:flex items-center justify-center">
                     <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-ping absolute" />
                     <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] relative shadow-[0_0_10px_var(--accent)]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-[var(--accent)] uppercase tracking-[0.2em]">Status: Jetzt</span>
                    <h4 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">VisionDesign Development</h4>
                    <p className="text-base text-[var(--text-main)] opacity-60">Kombination aus Präzision und modernem Code.</p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <motion.div style={{ borderColor: dot2Color }} className="absolute left-[-49px] top-1 w-6 h-6 rounded-full bg-[var(--bg-main)] border-2 z-20 hidden md:flex items-center justify-center transition-colors duration-500">
                    <motion.div style={{ backgroundColor: dot2Color }} className="w-2 h-2 rounded-full" />
                  </motion.div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black opacity-40 text-[var(--text-main)] uppercase tracking-widest text-left">Letzte 15 Monate</span>
                    <h4 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight text-left">Full-Stack Transition</h4>
                  </div>
                </div>

                <div className="relative pl-12">
                  <motion.div style={{ borderColor: dot3Color }} className="absolute left-[-49px] top-1 w-6 h-6 rounded-full bg-[var(--bg-main)] border-2 z-20 hidden md:flex items-center justify-center transition-colors duration-500">
                    <motion.div style={{ backgroundColor: dot3Color }} className="w-2 h-2 rounded-full" />
                  </motion.div>
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-black opacity-40 text-[var(--text-main)] uppercase tracking-widest">Erfahrung</span>
                    <h4 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">12+ Jahre Quality Engineering</h4>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-[-49px] top-1 w-6 h-6 rounded-full bg-[var(--accent)] z-10 hidden md:flex items-center justify-center shadow-[0_0_15px_var(--accent)]">
                    <div className="w-2 h-2 bg-white rounded-sm rotate-45" />
                  </div>
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-black opacity-40 text-[var(--text-main)] uppercase tracking-widest">Wurzeln</span>
                    <h4 className="text-xl font-black text-[var(--text-main)] uppercase tracking-tight">Ausbildung zum Informatiker</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;