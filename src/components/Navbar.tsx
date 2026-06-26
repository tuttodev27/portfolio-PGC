import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#0a192f]/90 backdrop-blur-md border-b border-white/8 shadow-xl shadow-black/40"
        : "bg-[#0a192f] border-b border-white/8"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="nav-brand">
          pablo<span className="text-accent">.</span>dev
        </a>

        <ul className="flex items-center gap-1">
          {[
            { label: "sobre mi",    href: "#sobre-mi" },
            { label: "proyectos",   href: "#projects" },
            { label: "experiencia", href: "#experience" },
            { label: "educación",   href: "#educacion" },
            { label: "contacto",    href: "#contact" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a href="#contact" className="btn-cta">
              contrátame
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}
