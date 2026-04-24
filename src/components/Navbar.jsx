import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "sobre mi",    href: "#sobre-mi"   },
    { label: "proyectos",   href: "#projects"   },
    { label: "experiencia", href: "#experience" },
    { label: "educación",   href: "#educacion"  },
    { label: "contacto",    href: "#contact"    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || menuOpen
        ? "bg-[#0b0f14]/95 backdrop-blur-md border-b border-white/8 shadow-xl shadow-black/40"
        : "bg-[#0b0f14] border-b border-white/8"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="nav-brand">
          pablo<span className="text-accent">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav-link">{label}</a>
            </li>
          ))}
          <li className="ml-3">
            <a href="#contact" className="btn-cta">contrátame</a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-5 h-0.5 bg-white/60 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white/60 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white/60 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="border-t border-white/6 px-6 py-4 flex flex-col gap-1">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="py-3 text-sm font-mono text-white/50 hover:text-white border-b border-white/5 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 text-center py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            contrátame
          </a>
        </div>
      </div>
    </nav>
  );
}
