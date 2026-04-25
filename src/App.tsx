import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsCarousel from './components/Projekts';
import Skills from './components/Skills';
import About from './components/Abouts';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjektDetail';
// 1. SCHRITT: HIER DEN IMPORT HINZUFÜGEN
import VisualEffects from './components/VisualEffects'; 

const Home = () => (
  <main>
    <Hero />
    <section id="projects"><ProjectsCarousel /></section>
    <section id="skills"><Skills /></section>
    <section id="about"><About /></section>
    <section id="contact"><Contact /></section>
  </main>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 overflow-x-hidden relative">
        <Router>
          {/* 2. SCHRITT: HIER DIE KOMPONENTE AUFRUFEN */}
          {/* Sie muss ganz oben stehen, damit sie den Hintergrund füllt */}
          <VisualEffects />

          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>

          {/* --- MINIMALISTISCHER FOOTER --- */}
          <footer className="py-12 border-t border-[var(--border-color)] relative z-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 text-[var(--text-main)] text-center">
                © 2026 VISIONDESIGN  
              </p>
              <div className="flex items-center justify-center text-[9px] font-black uppercase tracking-[0.3em] opacity-30">
                <Link to="/datenschutz" className="hover:text-[var(--accent)] hover:opacity-100 transition-all duration-300">Datenschutz</Link>
                <span className="mx-4 text-[var(--text-main)] select-none">|</span>
                <Link to="/agb" className="hover:text-[var(--accent)] hover:opacity-100 transition-all duration-300">AGB</Link>
              </div>
            </div>
          </footer>
        </Router>
      </div>
    </div>
  );
}

export default App;