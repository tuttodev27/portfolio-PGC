import { useState, useEffect } from "react";

export default function About() {
  const fullCode = `public class profile {

  private final String role = "Senior Backend Java Engineer";
  private final int years = 10;

  private final List<String> stack = List.of(
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
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullCode.length) {
        setDisplayedCode(fullCode.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="sobre-mi" className="scroll-mt-24 bg-[#0a192f] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10 section-header">
          <h2 className="text-3xl font-bold tracking-tight section-title">
            Sobre mí
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_0.9fr] gap-8 items-stretch">

          {/* IZQUIERDA — terminal animada */}
          <div className="bg-[#000000] rounded-xl border border-[#233554] shadow-lg overflow-hidden">
            <div className="bg-[#112240] px-4 py-2 flex items-center gap-2 border-b border-[#233554]">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-[#64ffda]" />
              <span className="text-white/40 text-xs font-mono ml-auto">Pablo.java</span>
            </div>

            <div className="p-6 font-mono text-sm text-[#64ffda] min-h-[300px] md:min-h-[340px]">
              <pre className="whitespace-pre-wrap break-words leading-7">
                {displayedCode}
                {displayedCode.length < fullCode.length && (
                  <span className="cursor-blink ml-0.5"></span>
                )}
              </pre>

              {displayedCode.length >= fullCode.length && (
                <div className="mt-4 flex items-center">
                  <span className="text-[#64ffda] font-mono">$</span>
                  <span className="cursor-blink ml-2"></span>
                </div>
              )}
            </div>
          </div>

          {/* DERECHA — impacto */}
          <div className="flex justify-start lg:justify-end">
            <div className="w-full max-w-md bg-[#112240] border border-[#233554] rounded-xl shadow-lg overflow-hidden">
              <div className="px-4 py-2 flex items-center gap-2 border-b border-[#233554]/60">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-[#64ffda]/50" />
                <span className="text-[#8892b0] text-xs font-mono ml-auto">Impact.java</span>
              </div>

              <div className="p-5 font-mono text-xs md:text-[13px]">
                <pre className="text-[#64ffda] whitespace-pre-wrap leading-7 mt-1">
                  {impactCode}
                </pre>
              </div>
            </div>
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "disponibilidad", value: "Remoto · Híbrido" },
            { label: "idiomas", value: "Español · Inglés" },
            { label: "sector", value: "Banca · Fintech" },
            { label: "metodología", value: "Scrum · Kanban" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-[#112240] border border-[#233554] rounded-xl p-4 flex flex-col gap-3 hover:border-[#64ffda]/40 transition-colors"
            >
              <div>
                <p className="text-white/30 text-xs font-mono tracking-widest uppercase mb-1">{label}</p>
                <p className="text-white/80 text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
