export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-center">
        {/* Links centrados */}
        <div className="flex items-center gap-8 text-sm text-slate-700">
          <a href="#about" className="hover:text-emerald-600 transition-colors">
            Sobre mí
          </a>
          <a href="#projects" className="hover:text-emerald-600 transition-colors">
            Proyectos
          </a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}

