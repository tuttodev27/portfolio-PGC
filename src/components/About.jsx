import { useState, useEffect } from "react";

export default function About() {
  const fullCode = `public class profile {

  private final String role =
    "Senior Backend Java Engineer";
  private final int years = 10;

  private final List<String> stack =
    List.of(
      "Java",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Kafka"
    );

  public void expertise() {
    // Sistemas financieros críticos
    // APIs escalables
    // Microservicios en producción
  }

}`;

  const impactCode = `$ impact --summary

// Migré microservicios a Java 21
// → mejor rendimiento y seguridad

// Optimicé servicios backend
// → ~30% mejora en tiempos de respuesta

// Resolví incidentes en producción
// → logs + Dynatrace

// Aumenté cobertura de testing ★
// → +90% con JUnit y Mockito`;

  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullCode.length) {
        setDisplayedCode(fullCode.substring(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre-mi" className="scroll-mt-24 section-base">
      <div className="container-max">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 text-xs rounded-md bg-slate-800/80 border border-slate-700 text-blue-400 font-mono mb-4">
            // sobre mí
          </span>
          <h2 className="section-title">Sobre mí</h2>
        </div>

        {/* Terminales — apiladas en móvil, lado a lado en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.9fr] gap-6 items-stretch">

          {/* Terminal animada */}
          <div className="bg-[#000000] rounded-xl border border-slate-700 shadow-lg overflow-hidden">
            <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-white/40 text-xs font-mono ml-auto">Pablo.java</span>
            </div>
            <div className="p-5 font-mono text-sm text-green-400 min-h-[260px] md:min-h-[320px]">
              <pre className="whitespace-pre-wrap break-words leading-7 text-xs md:text-sm">
                {displayedCode}
                {displayedCode.length < fullCode.length && (
                  <span className="cursor-blink ml-0.5"></span>
                )}
              </pre>
              {displayedCode.length >= fullCode.length && (
                <div className="mt-4 flex items-center">
                  <span className="text-green-400 font-mono">$</span>
                  <span className="cursor-blink ml-2"></span>
                </div>
              )}
            </div>
          </div>

          {/* Panel impacto */}
          <div className="bg-[#0f172a] border border-slate-700 rounded-xl shadow-lg overflow-hidden">
            <div className="px-4 py-2 flex items-center gap-2 border-b border-slate-700/60">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-slate-500 text-xs font-mono ml-auto">Impact.java</span>
            </div>
            <div className="p-5">
              <pre className="text-blue-300 whitespace-pre-wrap leading-7 text-xs md:text-[13px]">
                {impactCode}
              </pre>
            </div>
          </div>

        </div>

        {/* Cards info — 2 columnas en móvil, 4 en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "disponibilidad", value: "Remoto · Híbrido" },
            { label: "idiomas",        value: "Español · Inglés"  },
            { label: "sector",         value: "Banca · Fintech"   },
            { label: "metodología",    value: "Scrum · Kanban"    },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[#0f172a] border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors">
              <p className="text-white/30 text-xs font-mono tracking-widest uppercase mb-1">{label}</p>
              <p className="text-white/80 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
