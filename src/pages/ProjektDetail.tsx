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
    <div className="min-h-screen pb-24 bg-[var(--bg-main)] selection:bg-[var(--accent)] selection:text-black">
      
      {/* Navigation & Back Button */}
      <div className="fixed top-12 left-6 md:left-12 z-50">
        <Link 
          to="/" 
          className="group flex items-center gap-4 p-2 pr-6 rounded-full transition-all
                     bg-white/5 border border-white/10 backdrop-blur-2xl
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
      <section className="relative h-[70vh] w-full overflow-hidden border-b border-white/5">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        {/* Overlay für bessere Lesbarkeit und Tiefe */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-[-0.05em] mb-6 leading-[0.8] text-white mix-blend-difference">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest
                                           bg-white/10 border border-white/20 text-white backdrop-blur-md">
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
        <div className="md:col-span-8 space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 opacity-30">
              <Code2 size={16} className="text-[var(--accent)]" />
              <span className="text-xs font-black uppercase tracking-[0.4em]">The Concept</span>
            </div>
            <p className="text-2xl md:text-4xl leading-[1.2] font-bold text-[var(--text-main)] tracking-tight">
              {project.fullDescription}
            </p>
          </div>
          
          {/* Bild-Platzhalter / Screenshot Box */}
          <div className="group relative aspect-video rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 transition-all hover:border-[var(--accent)]/30">
             <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                <Layout className="opacity-10 group-hover:text-[var(--accent)] group-hover:opacity-100 transition-all" size={48} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20 group-hover:opacity-100 transition-all">
                  Showcase Preview Coming Soon
                </span>
             </div>
             {/* Animierter Glow im Hintergrund der Box */}
             <div className="absolute -inset-full bg-gradient-to-tr from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>

        {/* Rechts: Sidebar */}
        <div className="md:col-span-4">
          <div className="p-10 rounded-[2.5rem] sticky top-32
                          bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl">
            
            <h3 className="text-[10px] font-black mb-10 uppercase tracking-[0.5em] opacity-30 text-center">
              Execution & Deploy
            </h3>
            
            <div className="space-y-4">
              <a 
                href={project.liveUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-6 bg-[var(--accent)] text-black font-black rounded-2xl transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.4)]"
              >
                <span className="tracking-widest uppercase text-xs">Launch Project</span>
                <Globe size={20} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
              </a>

              <a 
                href={project.githubUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl transition-all hover:bg-white/10"
              >
                <span className="tracking-widest uppercase text-xs">Source Code</span>
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center opacity-40">
                <span className="text-[9px] font-black uppercase tracking-widest">Year</span>
                <span className="text-[9px] font-bold">2026</span>
              </div>
              <div className="flex justify-between items-center opacity-40">
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