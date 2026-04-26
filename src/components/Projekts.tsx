"use client";

import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header-Bereich */}
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none text-[var(--text-main)]">
              Featured <br />
              <span style={{ color: 'var(--accent)' }}>Projects</span>
            </h2>
            <div className="flex items-center gap-2 opacity-50 font-mono text-sm text-[var(--text-main)]">
              <LayoutGrid size={14} />
              <span>Scroll to explore</span>
            </div>
          </div>
          
          <div className="hidden md:block text-right">
            <p className="text-sm font-bold uppercase tracking-widest opacity-30 text-[var(--text-main)]">Selection 2025/26</p>
            <div className="h-1 w-20 bg-[var(--accent)] ml-auto mt-2"></div>
          </div>
        </div>

        {/* Das optimierte Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto">
          {projects.map((project, index) => {
            // ZEILE 1: Index 0 (groß) & 1 (hoch)
            const isFirstRowLarge = index === 0;
            const isFirstRowTall = index === 1;

            // AB ZEILE 2: Alle weiteren Projekte
            const isAfterFirstRow = index >= 2;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  ${!isAfterFirstRow && isFirstRowLarge ? "md:col-span-4 h-[560px]" : ""}
                  ${!isAfterFirstRow && isFirstRowTall ? "md:col-span-2 h-[560px]" : ""}
                  ${isAfterFirstRow ? "md:col-span-3 h-[380px]" : ""}
                `}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="group relative block w-full h-full rounded-[2rem] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)]
                             transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                             /* KORREKTUR: Border wird jetzt nur noch subtil aufgehellt, nicht grün */
                             hover:border-[var(--text-main)]/20 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]"
                >
                  {/* Bild-Logik - JETZT SICHTBAR */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover 
                               /* KORREKTUR: Start-Opacity auf 90% (fast voll), Grayscale entfernt */
                               opacity-90 transition-all duration-700 ease-in-out
                               /* KORREKTUR: Hover wird jetzt subtiler: volle Opacity + Zoom */
                               group-hover:scale-105 group-hover:opacity-100"
                  />

                  {/* Content Overlay - Optimiert für helle Bilder */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end 
                                  /* KORREKTUR: Stärkerer Gradient im Normalzustand, um Textlesbarkeit zu garantieren */
                                  bg-gradient-to-t from-[var(--bg-main)]/90 via-[var(--bg-main)]/50 to-transparent
                                  /* KORREKTUR: Hover-Gradient wird subtiler, damit das Bild strahlt */
                                  group-hover:from-[var(--bg-main)]/90 group-hover:via-[var(--bg-main)]/10 transition-all duration-500">
                    
                    {/* Der Inhalt bleibt immer sichtbar, kein Hochscrollen mehr */}
                    <div className="translate-y-0 transition-transform duration-500 w-full">
                      
                      {/* Tech Tags: Immer sichtbar, aber subtil */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-bold px-2 py-1 rounded bg-[var(--bg-main)]/80 backdrop-blur-sm border border-[var(--border-color)] text-[var(--text-main)] opacity-80 group-hover:opacity-100 transition-opacity">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Projekttitel: Immer voll sichtbar */}
                      <h3 className={`font-bold uppercase leading-tight mb-2 text-[var(--text-main)] 
                        ${isFirstRowLarge || (isAfterFirstRow && !isFirstRowTall) ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                        {project.title}
                      </h3>
                      
                      {/* Kurzbeschreibung: Immer voll sichtbar */}
                      <p className="text-sm text-[var(--text-main)] opacity-80 group-hover:opacity-100 transition-opacity duration-500 w-full line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Action Button: Immer sichtbar, aber subtil */}
                    <div className="absolute top-6 right-6 p-3 rounded-full bg-[var(--accent)] text-white md:text-black
                                    scale-90 group-hover:scale-100 transition-all duration-500 rotate-0 shadow-xl opacity-70 group-hover:opacity-100">
                      <ArrowUpRight size={20} strokeWidth={3} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;