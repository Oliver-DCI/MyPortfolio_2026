import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, Globe, Code2, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div className="h-screen flex items-center justify-center bg-[var(--bg-main)]">
      <h1 className="text-2xl font-black uppercase tracking-[0.5em] opacity-20 text-[var(--text-main)]">
        Projekt nicht gefunden
      </h1>
    </div>
  );

  return (
    <div className="min-h-screen pb-24 bg-[var(--bg-main)] selection:bg-[var(--accent)] selection:text-black relative">
      
      {/* Navigation & Back Button */}
      <div className="fixed top-12 left-6 md:left-12 z-50">
        <Link 
          to="/" 
          className="group flex items-center gap-4 p-2 pr-6 rounded-full transition-all
                     bg-[var(--card-bg)] border border-[var(--border-color)] backdrop-blur-2xl
                     hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
        >
          <div className="bg-[var(--accent)] p-2 rounded-full text-black group-hover:scale-90 transition-transform">
            <ArrowLeft size={18} strokeWidth={3} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-main)]">
            Zurück
          </span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative h-[60vh] w-full overflow-hidden border-b border-[var(--border-color)]">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/60 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-tight text-[var(--text-main)]">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest
                                           bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-main)] opacity-80 backdrop-blur-md">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <main className="max-w-7xl mx-auto px-6 mt-24 grid md:grid-cols-12 gap-16">
        
        {/* Links: Beschreibung */}
        <div className="md:col-span-8 space-y-20">
          <div className="space-y-8">
            <div className="flex items-center gap-4 opacity-30">
              <Code2 size={14} className="text-[var(--accent)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-main)]">The Concept</span>
            </div>
            
            <p className="text-lg md:text-xl leading-[1.8] font-normal text-[var(--text-main)] opacity-70 tracking-wide max-w-3xl">
              {project.fullDescription}
            </p>
          </div>
          
          {/* Screenshot Box */}
          <div className="group relative aspect-video rounded-[1.5rem] overflow-hidden bg-[var(--card-bg)] border border-[var(--border-color)] transition-all hover:border-[var(--accent)]/20">
             <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <Layout className="opacity-10 text-[var(--text-main)] group-hover:text-[var(--accent)] group-hover:opacity-40 transition-all" size={40} />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--text-main)] opacity-20 group-hover:opacity-40 transition-all">
                  Showcase Preview
                </span>
             </div>
             <div className="absolute -inset-full bg-gradient-to-tr from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>

        {/* Rechts: Sidebar */}
        <div className="md:col-span-4">
          <div className="group relative p-10 rounded-[2.5rem] sticky top-32
                          bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl backdrop-blur-3xl 
                          overflow-hidden transition-all duration-500 hover:border-[var(--accent)]/30">
            
            {/* DER HOVER-BALKEN (Wie in Skills-Sektion) */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center shadow-[4px_0_15px_var(--accent)]" />

            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] blur-[100px] transition-opacity duration-700 pointer-events-none" />

            <h3 className="text-[9px] font-black mb-10 uppercase tracking-[0.5em] opacity-30 text-center text-[var(--text-main)] relative z-10">
              Execution & Deploy
            </h3>
            
            <div className="space-y-4 relative z-10">
              <a 
                href={project.liveUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-between w-full p-5 bg-[var(--accent)] text-black font-black rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_15px_30px_-10px_rgba(34,197,94,0.3)]"
              >
                <span className="tracking-widest uppercase text-[10px]">Launch Project</span>
                <Globe size={18} strokeWidth={3} className="group-hover/btn:rotate-12 transition-transform" />
              </a>

              <a 
                href={project.githubUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-between w-full p-5 
                           bg-[var(--bg-main)] border border-[var(--border-color)] 
                           text-[var(--text-main)] font-black rounded-xl transition-all 
                           hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)]"
              >
                <span className="tracking-widest uppercase text-[10px]">Source Code</span>
                <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--border-color)] space-y-4 relative z-10">
              <div className="flex justify-between items-center opacity-40 text-[var(--text-main)]">
                <span className="text-[9px] font-black uppercase tracking-widest">Year</span>
                <span className="text-[9px] font-bold">2026</span>
              </div>
              <div className="flex justify-between items-center opacity-40 text-[var(--text-main)]">
                <span className="text-[9px] font-black uppercase tracking-widest">Client</span>
                <span className="text-[9px] font-bold">VisionDesign Lab</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;