"use client";
import { motion } from "framer-motion";
import { Database, ShieldCheck, Layout, Zap } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend & UI",
    icon: <Layout size={20} />,
    skills: [
      { name: 'React / Next.js 15', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 100 },
    ]
  },
  {
    title: "QA & Strategy",
    icon: <ShieldCheck size={20} />,
    skills: [
      { name: 'QA Automation', level: 100 },
      { name: 'CI/CD Pipelines', level: 90 },
      { name: 'Unit & E2E Testing', level: 95 },
    ]
  },
  {
    title: "Backend & Data",
    icon: <Database size={20} />,
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'PostgreSQL / Prisma', level: 85 },
      { name: 'MongoDB', level: 80 },
    ]
  },
  {
    title: "Soft Skills & Labs",
    icon: <Zap size={20} />,
    skills: [
      { name: 'Clean Code', level: 95 },
      { name: 'Agile Methoden', level: 90 },
      { name: 'Mentoring', level: 85 },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--bg-main)]">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[var(--text-main)]">
            Tech <span style={{ color: 'var(--accent)' }}>Stack</span>
          </h2>
          <div className="h-1 w-20 bg-[var(--accent)] mt-4 shadow-[0_0_15px_var(--accent)]"></div>
        </div>

        {/* Grid auf 2 Spalten gesetzt für einheitliche Kartengrößen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, gIndex) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: gIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] 
                         hover:border-[var(--accent)]/30 transition-all duration-500 group relative overflow-hidden h-full"
            >
              {/* --- REFERENZ EFFEKT: DER LINKE AKZENT-BALKEN --- */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center shadow-[4px_0_15px_var(--accent)]" />

              {/* Subtiler Glow im Hintergrund der Karte */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] blur-[100px] transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="p-3.5 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--accent)] group-hover:border-[var(--accent)]/50 transition-colors shadow-sm">
                  {group.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-widest text-[var(--text-main)]">
                  {group.title}
                </h3>
              </div>

              <div className="space-y-8 relative z-10">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity">{skill.name}</span>
                      <span className="text-[var(--accent)] shadow-[0_0_10px_var(--accent)]/20">{skill.level}%</span>
                    </div>
                    
                    {/* Fortschrittsbalken */}
                    <div className="h-[6px] w-full rounded-full bg-[var(--text-main)]/5 overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-[var(--accent)] relative shadow-[0_0_15px_var(--accent)]"
                      >
                        {/* Glanz-Effekt auf dem Balken - Shimmer Animation via Tailwind Utility oder Global CSS falls vorhanden */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2000ms] ease-in-out" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;