"use client";

import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-[380px] group" 
              >
                <Link
                  to={`/project/${project.id}`}
                  className="relative block w-full h-full rounded-[2.5rem] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)]
                             transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                             group-hover:scale-[1.01] group-hover:border-[var(--accent)]/50
                             group-hover:shadow-[0_0_30px_-5px_var(--accent)]"
                  style={{
                    // Dieser Inline-Style erzwingt den Glow mit deiner CSS-Variable
                    boxShadow: "0 0 0 transparent"
                  }}
                >
                  {/* Projekt Hintergrundbild */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale-[0.2]
                               transition-all duration-700 ease-in-out 
                               group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />

                  {/* Dunkles Overlay unten für Text-Kontrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/40 to-transparent 
                                  opacity-80 transition-opacity duration-500 group-hover:opacity-30" />
                  
                  {/* Der sanfte innere Glow beim Hover (wie auf About-Page) */}
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 
                                    max-h-0 opacity-0 -translate-y-2 overflow-hidden
                                    group-hover:max-h-20 group-hover:opacity-100 group-hover:translate-y-0
                                    transition-all duration-500 ease-out">
                      {project.tech.map(t => (
                        <span 
                          key={t} 
                          className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full 
                                     bg-[var(--bg-main)]/60 backdrop-blur-xl border border-white/5 
                                     text-[var(--text-main)] shadow-xl"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Titel & Beschreibung */}
                    <div className="relative z-10 w-full">
                      <h3 className="font-black uppercase leading-tight mb-1 text-[var(--text-main)] transition-transform duration-500 text-lg md:text-xl">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-[var(--text-main)] opacity-60 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2 w-full">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* "Ansehen" Text - Jetzt maximal oben rechts (top-4 right-4) */}
                    <div className="absolute top-4 right-4 flex items-center gap-2
                                    text-[var(--accent)] opacity-0 translate-x-2
                                    group-hover:opacity-100 group-hover:translate-x-0 
                                    transition-all duration-500 ease-out">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        Ansehen
                      </span>
                      <ArrowRight size={14} strokeWidth={3} />
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