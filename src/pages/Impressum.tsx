const Impressum = () => {
  return (
    <main className="pt-40 pb-24 px-6 max-w-4xl mx-auto min-h-screen text-[var(--text-main)]">
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic opacity-20">
        Impressum
      </h1>
      <div className="space-y-8 font-mono text-sm leading-relaxed opacity-80 border-l border-[var(--accent)]/30 pl-6">
        <section>
          <h2 className="text-[var(--accent)] font-bold uppercase mb-2">Angaben gemäß § 5 TMG</h2>
          <p>Oliver Pfaff / VISIONDESIGN<br />Karl-Pfeuffer-Straße 6<br />60388 Frankfurt am Main</p>
        </section>
        <section>
          <h2 className="text-[var(--accent)] font-bold uppercase mb-2">Kontakt</h2>
          <p>Telefon: +49 1627214244<br />E-Mail: vision69design@gmail.com</p>
        </section>
      </div>
    </main>
  );
};
export default Impressum;