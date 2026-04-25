"use client";
import { useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'projects', label: 'Projekte' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'Über mich' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--bg-main)]/70 backdrop-blur-xl border-b border-[var(--border-color)] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center relative">     
        
        {/* Logo */}
        <div 
          className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer shrink-0 transition-transform hover:scale-105 active:scale-95" 
          onClick={() => { navigate('/'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
        >
          VISION<span style={{ color: 'var(--accent)' }}>DESIGN</span>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <div 
            className="hidden md:flex items-center space-x-1 relative"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                className="relative px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 z-10"
                style={{ 
                  color: hoveredItem === item.id ? 'var(--accent)' : 'var(--text-main)' 
                }}
              >
                <span className={`transition-all duration-300 ${hoveredItem === item.id ? "opacity-100" : "opacity-60"}`}>
                  {item.label}
                </span>

                {/* Hintergrund-Pill (Kapsel) */}
                <AnimatePresence>
                  {hoveredItem === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[var(--accent)]/5 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </AnimatePresence>

                {/* DER FLIESSENDE BALKEN (Bierwirth-Effekt-Interpretation) */}
                {hoveredItem === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-[-18px] left-2 right-2 h-[2px] bg-[var(--accent)] z-20 shadow-[0_0_12px_var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Trenner */}
          <div className="hidden md:block w-[1px] h-4 bg-[var(--border-color)] opacity-50" />

          {/* Theme Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--accent)] 
                       transition-all hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)] active:scale-90"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;