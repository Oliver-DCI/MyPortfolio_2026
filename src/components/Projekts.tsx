import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowUpRight, LayoutGrid } from "lucide-react";

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

        {/* Das Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[280px]">
          {projects.map((project, index) => {
            const isLarge = index === 0;
            const isTall = index === 1;

            return (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className={`
                  group relative rounded-[2rem] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)]
                  transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                  hover:border-[var(--accent)]/50 hover:shadow-[0_0_50px_-15px_var(--accent)]
                  ${isLarge ? "md:col-span-4 md:row-span-2" : "md:col-span-2"}
                  ${isTall ? "md:row-span-2" : ""}
                `}
              >
                {/* Bild-Logik: Originalfarben nur beim Hover */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 
                             grayscale-[15%] transition-all duration-700 ease-in-out
                             group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end 
                                bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/60 to-transparent
                                group-hover:from-[var(--bg-main)]/80 group-hover:via-[var(--bg-main)]/30 transition-all duration-500">
                  
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                    
                    {/* Tech Tags: Nur beim Hover */}
                    <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-bold px-2 py-1 rounded bg-[var(--text-main)]/10 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Projekttitel: Moderat und elegant */}
                    <h3 className={`font-bold uppercase leading-tight mb-2 text-[var(--text-main)] 
                      ${isLarge ? "text-2xl md:text-4xl" : "text-lg md:text-xl"}`}>
                      {project.title}
                    </h3>
                    
                    {/* Kurzbeschreibung: Nutzt jetzt die volle Breite bis zum Rand */}
                    <p className={`text-sm text-[var(--text-main)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 w-full
                      ${isLarge ? "line-clamp-2" : "line-clamp-1"}`}>
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="absolute top-6 right-6 p-3 rounded-full bg-[var(--accent)] text-white md:text-black
                                  scale-0 group-hover:scale-100 transition-all duration-500 rotate-45 group-hover:rotate-0 shadow-xl">
                    <ArrowUpRight size={20} strokeWidth={3} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;