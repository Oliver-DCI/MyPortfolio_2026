import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, Globe, Code2, Layout, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div className="h-screen flex items-center justify-center bg-[var(--bg-main)]">
      <h1 className="text-2xl font-bold uppercase tracking-widest opacity-20 text-[var(--text-main)]">
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
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-main)]">
            Zurück
          </span>
        </Link>
      </div>

      {/* Hero Header Section */}
      <section className="relative h-[65vh] w-full overflow-hidden border-b border-[var(--border-color)]">
        <motion.img 
          initial={{ scale: 1.1, filter: 'grayscale(100%)' }}
          animate={{ scale: 1, filter: 'grayscale(0%)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6 leading-none text-[var(--text-main)] drop-shadow-2xl">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, index) => (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    key={t} 
                    className="px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider
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
      <main className="max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-12 gap-12 md:gap-16">
        
        {/* Left Column: Description & Showcase */}
        <div className="md:col-span-8 space-y-20">
          <section className="space-y-8">
            <div className="flex items-center gap-4 opacity-30">
              <Code2 size={14} className="text-[var(--accent)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-main)]">The Concept</span>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-[var(--text-main)] opacity-70 max-w-4xl">
              {project.fullDescription}
            </p>
          </section>
          
          <section className="space-y-8">
             <div className="flex items-center gap-4 opacity-30">
                <Layout size={14} className="text-[var(--accent)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--text-main)]">Interface Design</span>
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
          <div className="p-8 md:p-10 rounded-[2.5rem] sticky top-32
                          bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl backdrop-blur-3xl 
                          overflow-hidden transition-all duration-500 hover:border-[var(--accent)]/30">
            
            <h3 className="text-[9px] font-bold mb-10 uppercase tracking-[0.5em] opacity-30 text-center text-[var(--text-main)]">
              Project Access
            </h3>
            
            <div className="space-y-4 relative z-10">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-between w-full p-5 bg-[var(--accent)] text-black font-bold rounded-2xl transition-all hover:scale-[1.02] hover:shadow-[0_15px_30px_-10px_rgba(34,197,94,0.4)]"
                >
                  <span className="tracking-[0.1em] uppercase text-[10px]">Launch Project</span>
                  <Globe size={18} strokeWidth={2.5} className="group-hover/btn:rotate-12 transition-transform" />
                </a>
              )}

              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-between w-full p-5 
                             bg-[var(--bg-main)] border border-[var(--border-color)] 
                             text-[var(--text-main)] font-bold rounded-2xl transition-all 
                             hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)]"
                >
                  <span className="tracking-[0.1em] uppercase text-[10px]">View Source</span>
                  <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
                </a>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--border-color)] space-y-5">
              <div className="flex justify-between items-center opacity-40 text-[var(--text-main)]">
                <div className="flex items-center gap-3">
                  <Calendar size={12} className="text-[var(--accent)]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Year</span>
                </div>
                <span className="text-[10px]">{project.year}</span>
              </div>
              <div className="flex justify-between items-center opacity-40 text-[var(--text-main)]">
                <div className="flex items-center gap-3">
                  <User size={12} className="text-[var(--accent)]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Type</span>
                </div>
                <span className="text-[10px]">{project.projectType}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;