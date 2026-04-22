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
        ? "bg-[#0b0f14]/90 backdrop-blur-md border-b border-white/8 shadow-xl shadow-black/40"
        : "bg-[#0b0f14] border-b border-white/8"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="text-sm font-bold text-white/80 tracking-tight hover:text-white transition-colors">
          pablo<span className="text-blue-400">.</span>dev
        </a>

        <ul className="flex items-center gap-1">
          {[
            { label: "sobre mi",    href: "#about" },
            { label: "proyectos",   href: "#projects" },
            { label: "experiencia", href: "#experience" },
            { label: "contacto",    href: "#contact" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="px-3 py-1.5 rounded-md text-xs font-mono text-white/40 hover:text-white/80 hover:bg-white/5 transition-all">
                {label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a href="#contact" className="px-4 py-1.5 rounded-md bg-blue-500/15 border border-blue-500/25 text-blue-400 text-xs font-mono hover:bg-blue-500/25 transition-all">
              contrátame
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}
