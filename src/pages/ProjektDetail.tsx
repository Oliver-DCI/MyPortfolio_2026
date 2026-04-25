import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
// KORREKTUR: 'ExternalLink' wurde hier entfernt
import { ArrowLeft, Github, Globe, Code2 } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div className="h-screen flex items-center justify-center bg-[var(--bg-main)]">
      <h1 className="text-2xl opacity-50 text-[var(--text-main)]">Projekt nicht gefunden</h1>
    </div>
  );

  return (
    <div className="min-h-screen pb-24 bg-[var(--bg-main)]">
      {/* Navigation & Back Button */}
      <div className="fixed top-24 left-6 md:left-12 z-40">
        <Link 
          to="/" 
          className="group flex items-center gap-2 p-3 rounded-full transition-all
                     /* LIGHT MODE: Hellgrauer BG + dunkle Border */
                     bg-black/[0.05] border border-black/10 backdrop-blur-xl
                     /* DARK MODE: Weißer BG + helle Border */
                     dark:bg-white/5 dark:border-white/10
                     hover:border-[var(--accent)] hover:shadow-lg"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform text-[var(--text-main)]" />
          <span className="pr-2 text-sm font-bold uppercase hidden md:block text-[var(--text-main)]">Zurück</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none text-[var(--text-main)] drop-shadow-sm">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {project.tech.map(t => (
                <span key={t} className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                                         bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <main className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-12">
        
        {/* Links: Beschreibung */}
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[var(--text-main)]">
              <Code2 className="text-[var(--accent)]" /> Projektübersicht
            </h2>
            <p className="text-xl leading-relaxed font-medium text-[var(--text-main)] opacity-80">
              {project.fullDescription}
            </p>
          </div>
          
          <div className="aspect-video rounded-3xl overflow-hidden transition-colors
                          bg-black/[0.03] border border-black/10 
                          dark:bg-white/5 dark:border-white/10">
             <div className="w-full h-full flex items-center justify-center opacity-40 italic text-[var(--text-main)]">
               Zusätzlicher Screenshot oder Demo-Video hier
             </div>
          </div>
        </div>

        {/* Rechts: Sidebar */}
        <div className="space-y-8">
          <div className="p-8 rounded-3xl sticky top-32 transition-all
                          bg-black/[0.02] border border-black/10 shadow-xl shadow-black/[0.03]
                          dark:bg-white/5 dark:border-white/10 dark:shadow-none">
            
            <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-[var(--text-main)] opacity-40 text-center">
              Links & Resources
            </h3>
            
            <div className="space-y-4">
              <a 
                href={project.liveUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[var(--accent)] text-white dark:text-black font-black rounded-2xl hover:shadow-[0_10px_30px_-10px_var(--accent)] transition-all active:scale-95"
              >
                <Globe size={20} strokeWidth={3} />
                LIVE ANSEHEN
              </a>

              <a 
                href={project.githubUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 transition-all font-bold rounded-2xl
                           bg-black/5 border border-black/10 text-black hover:bg-black/10
                           dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
              >
                <Github size={20} />
                QUELLCODE
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10">
              <p className="text-[10px] opacity-40 leading-relaxed text-center text-[var(--text-main)] uppercase tracking-tighter">
                Fokus auf Skalierbarkeit & UX
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;