const Datenschutz = () => {
  return (
    <main className="pt-40 pb-24 px-6 max-w-4xl mx-auto min-h-screen text-[var(--text-main)]">
      {/* Background Title Decor */}
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic opacity-20 select-none">
        Datenschutz
      </h1>

      <div className="space-y-12 font-mono text-sm leading-relaxed opacity-80 border-l border-[var(--accent)]/30 pl-6 md:pl-10">
        
        {/* Sektion 1 */}
        <section className="space-y-4">
          <h2 className="text-[var(--accent)] font-black uppercase tracking-[0.2em] text-lg">
            1. Datenschutz auf einen Blick
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold uppercase opacity-60 mb-1">// Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit 
                Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              </p>
            </div>
            <div>
              <h3 className="font-bold uppercase opacity-60 mb-1">// Datenerfassung</h3>
              <ul className="list-none space-y-2">
                <li>
                  <span className="text-[var(--accent)]">→</span> <span className="font-bold">Verantwortlich:</span> Die Datenverarbeitung erfolgt durch den Websitebetreiber.
                </li>
                <li>
                  <span className="text-[var(--accent)]">→</span> <span className="font-bold">Erfassung:</span> Durch Ihre Mitteilung oder automatisch durch unsere IT-Systeme (technische Daten).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trenner */}
        <div className="w-12 h-[1px] bg-[var(--accent)] opacity-20" />

        {/* Sektion 2 */}
        <section className="space-y-4">
          <h2 className="text-[var(--accent)] font-black uppercase tracking-[0.2em] text-lg">
            2. Hosting
          </h2>
          <div className="p-6 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl">
            <p className="mb-4 italic">Wir hosten unsere Website bei:</p>
            <address className="not-italic font-bold space-y-1">
              Vercel Inc.<br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723, USA
            </address>
            <p className="mt-4 text-[10px] uppercase tracking-widest opacity-50">
              Ein Vertrag über Auftragsverarbeitung (AVV) wurde geschlossen.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Datenschutz;