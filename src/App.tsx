import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsCarousel from './components/Projekts';
import Skills from './components/Skills';
import About from './components/Abouts';
import Contact from './components/Contact';
import VisualEffects from './components/VisualEffects';

// Pages
import ProjectDetail from './pages/ProjektDetail';

/**
 * Home Component - Bündelt alle Sektionen der Landingpage
 */
const Home = () => (
  <main>
    <Hero />
    <section id="projects">
      <ProjectsCarousel />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </main>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 overflow-x-hidden relative">
        <Router>
          {/* Globaler Hintergrund-Effekt */}
          <VisualEffects />

          {/* Navigation */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>

          {/* --- MINIMALISTISCHER FOOTER --- */}
          <footer className="py-24 border-t border-[var(--border-color)] relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col items-center text-center">
                
                {/* BRANDING - Mit optischem Ausgleich für das weite Tracking */}
                <div className="mb-10">
                  <h2 className="text-3xl md:text-5xl font-black tracking-[0.8em] uppercase opacity-10 text-[var(--text-main)] select-none mr-[-0.8em]">
                    VisionDesign
                  </h2>
                </div>

                {/* COPYRIGHT & STATUS - Kompakt und symmetrisch zentriert */}
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 text-[var(--text-main)]">
                      © 2026 ALL RIGHTS RESERVED
                    </p>

                    <span className="hidden md:block w-1 h-1 bg-[var(--accent)] rounded-full opacity-40" />

                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 text-[var(--text-main)]">
                      BUILT WITH PASSION
                    </p>
                  </div>

                  {/* Zentraler Akzent-Strich als Fokuspunkt */}
                  <div className="mt-8 w-12 h-[1px] bg-[var(--accent)] opacity-20" />
                </div>
              </div>
            </div>
          </footer>
          
        </Router>
      </div>
    </div>
  );
}

export default App;