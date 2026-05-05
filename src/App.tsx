import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

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
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

/**
 * ScrollToTop - Sorgt dafür, dass bei jedem Routenwechsel 
 * die Seite wieder ganz oben startet.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
          <ScrollToTop />

          {/* Globaler Hintergrund-Effekt */}
          <VisualEffects />

          {/* Navigation */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>

          {/* --- MINIMALISTISCHER FOOTER --- */}
          <footer className="py-24 border-t border-[var(--border-color)] relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">
              
              <div className="flex flex-col items-center text-center">
                
                {/* BRANDING */}
                <div className="mb-10 text-center">
                  <h2 className="text-3xl md:text-5xl font-black tracking-[0.8em] uppercase opacity-10 text-[var(--text-main)] select-none mr-[-0.8em]">
                    VisionDesign
                  </h2>
                </div>

                {/* COPYRIGHT & STATUS */}
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

                  {/* Zentraler Akzent-Strich */}
                  <div className="mt-8 w-12 h-[1px] bg-[var(--accent)] opacity-20" />
                </div>

                {/* MOBILE RECHTLICHE LINKS (Sichtbar bis 1024px) */}
                <div className="flex lg:hidden gap-6 mt-8">
                  <Link to="/impressum" className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-20 hover:opacity-100 transition-opacity">
                    Impressum
                  </Link>
                  <Link to="/datenschutz" className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-20 hover:opacity-100 transition-opacity">
                    Datenschutz
                  </Link>
                </div>
              </div>

              {/* DESKTOP RECHTLICHE LINKS (Vertikal am rechten Rand) */}
              <div className="absolute bottom-0 right-6 hidden lg:flex flex-col gap-6 items-end pointer-events-auto">
                <Link 
                  to="/impressum" 
                  className="text-[9px] font-bold uppercase tracking-[0.5em] opacity-20 hover:opacity-100 hover:text-[var(--accent)] transition-all duration-500 [writing-mode:vertical-rl] py-2"
                >
                  Impressum
                </Link>
                <Link 
                  to="/datenschutz" 
                  className="text-[9px] font-bold uppercase tracking-[0.5em] opacity-20 hover:opacity-100 hover:text-[var(--accent)] transition-all duration-500 [writing-mode:vertical-rl] py-2"
                >
                  Datenschutz
                </Link>
              </div>

            </div>
          </footer>
          
        </Router>
      </div>
    </div>
  );
}

export default App;