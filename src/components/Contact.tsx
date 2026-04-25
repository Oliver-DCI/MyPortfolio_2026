"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  const inputStyle = `
    w-full p-5 rounded-2xl outline-none transition-all duration-300 border
    bg-[var(--card-bg)] 
    border-[var(--border-color)] 
    text-[var(--text-main)]
    placeholder:text-slate-400 placeholder:opacity-100
    dark:placeholder:text-white/20 
    focus:border-[var(--accent)] 
    focus:ring-4 focus:ring-[var(--accent)]/10
    hover:border-[var(--accent)]/40
    font-medium
  `;

  return (
    <section id="contact" className="py-32 bg-[var(--bg-main)] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Titel-Bereich */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-main)]"
          >
            Get in <span style={{ color: 'var(--accent)' }}>Touch</span>
          </motion.h2>
          <p className="text-lg opacity-60 text-[var(--text-main)] max-w-lg mx-auto">
            Bereit für den nächsten Schritt? Lass uns gemeinsam an deiner Vision arbeiten.
          </p>
        </div>

        {/* Formular-Container im Bento-Stil */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-[var(--card-bg)] border border-[var(--border-color)] p-8 md:p-12 rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          {/* Subtiler Background Glow im Formular */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--accent)] opacity-[0.03] blur-[80px]" />

          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NAME */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-2 text-[var(--accent)]">
                  Name
                </label>
                <input 
                  type="text" 
                  placeholder="WIE DARF ICH DICH NENNEN?" 
                  className={inputStyle} 
                />
              </div>

              {/* E-MAIL */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-2 text-[var(--accent)]">
                  E-Mail
                </label>
                <input 
                  type="email" 
                  placeholder="BEISPIEL@MAIL.DE" 
                  className={inputStyle} 
                />
              </div>
            </div>

            {/* NACHRICHT */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-2 text-[var(--accent)]">
                Deine Nachricht
              </label>
              <textarea 
                placeholder="ERZÄHL MIR VON DEINER IDEE..." 
                rows={5} 
                className={`${inputStyle} resize-none`}
              ></textarea>
            </div>

            {/* BUTTON */}
            <button className="group relative w-full overflow-hidden bg-[var(--accent)] text-white dark:text-black font-black py-6 rounded-2xl 
                               transition-all duration-500 hover:shadow-[0_20px_40px_-10px_var(--accent)]
                               active:scale-[0.98] flex items-center justify-center gap-3 group">
              <span className="uppercase tracking-[0.2em]">Nachricht senden</span>
              <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;