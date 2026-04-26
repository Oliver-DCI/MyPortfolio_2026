import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, Globe, Code2, Layout, Calendar, User } from 'lucide-react';
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

      {/* Hero Header Section */}
      <section className="relative h-[70vh] w-full overflow-hidden border-b border-[var(--border-color)]">
        <motion.img 
          initial={{ scale: 1.2, filter: 'blur(10px)' }}
          animate={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.8] text-[var(--text-main)]">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, index) => (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    key={t} 
                    className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest
                               bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-main)] backdrop-blur-md"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 mt-24 grid md:grid-cols-12 gap-16">
        
        {/* Left Column: Description & Showcase */}
        <div className="md:col-span-8 space-y-24">
          <section className="space-y-10">
            <div className="flex items-center gap-4 opacity-40">
              <Code2 size={16} className="text-[var(--accent)]" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[var(--text-main)]">The Concept</span>
            </div>
            
            <p className="text-xl md:text-2xl leading-[1.7] font-light text-[var(--text-main)] opacity-80 max-w-4xl">
              {project.fullDescription}
            </p>
          </section>
          
          {/* Showcase Preview Image */}
          <section className="space-y-10">
             <div className="flex items-center gap-4 opacity-40">
                <Layout size={16} className="text-[var(--accent)]" />
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[var(--text-main)]">Interface Design</span>
             </div>
             
             <div className="group relative aspect-video rounded-[2rem] overflow-hidden bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl transition-all hover:border-[var(--accent)]/40">
                <img 
                  src={project.image} 
                  alt="Showcase" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-main)]/20 to-transparent pointer-events-none" />
             </div>
          </section>
        </div>

        {/* Right Column: Sidebar Actions */}
        <div className="md:col-span-4">
          <div className="group p-10 rounded-[2.5rem] sticky top-32
                          bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl backdrop-blur-3xl 
                          overflow-hidden transition-all duration-500 hover:border-[var(--accent)]/30">
            
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center shadow-[4px_0_15px_var(--accent)]" />

            <h3 className="text-[10px] font-black mb-12 uppercase tracking-[0.6em] opacity-30 text-center text-[var(--text-main)]">
              Project Access
            </h3>
            
            <div className="space-y-5 relative z-10">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-between w-full p-6 bg-[var(--accent)] text-black font-black rounded-2xl transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.4)]"
                >
                  <span className="tracking-[0.2em] uppercase text-[11px]">Launch Project</span>
                  <Globe size={20} strokeWidth={3} className="group-hover/btn:rotate-12 transition-transform" />
                </a>
              )}

              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-between w-full p-6 
                             bg-[var(--bg-main)] border border-[var(--border-color)] 
                             text-[var(--text-main)] font-black rounded-2xl transition-all 
                             hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)]"
                >
                  <span className="tracking-[0.2em] uppercase text-[11px]">View Source</span>
                  <Github size={20} className="group-hover/btn:scale-110 transition-transform" />
                </a>
              )}
            </div>

            {/* Project Meta Data - DYNAMISCH */}
            <div className="mt-16 pt-10 border-t border-[var(--border-color)] space-y-6">
              <div className="flex justify-between items-center opacity-50 text-[var(--text-main)]">
                <div className="flex items-center gap-3">
                  <Calendar size={12} className="text-[var(--accent)]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Year</span>
                </div>
                <span className="text-[10px] font-bold">{project.year}</span>
              </div>
              <div className="flex justify-between items-center opacity-50 text-[var(--text-main)]">
                <div className="flex items-center gap-3">
                  <User size={12} className="text-[var(--accent)]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Type</span>
                </div>
                <span className="text-[10px] font-bold">{project.projectType}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;