export default function Hero() {
  const stack: { tech: string; level: string; progress: number }[] = [
    { tech: "Java", level: "experto", progress: 100 },
    { tech: "Spring Boot / Spring Security",  level: "avanzado", progress: 88 },
    { tech: "SQL / PostgreSQL", level: "experto", progress: 100 },
    { tech: "Docker / CI/CD / Jenkins", level: "intermedio", progress: 80 },
    { tech: "Git", level: "experto", progress: 100 },
    { tech: "JavaScript", level: "avanzado", progress: 85 },
    { tech: "REST APIs", level: "experto", progress: 95 },
    { tech: "Kafka", level: "intermedio", progress: 80 },
  ];

  const stats: [string, string][] = [
    ["10+", "años en TI"],
    ["8", "años en Java"],
    ["3", "proyectos clave"],
  ];

  return (
    <section className="section-base min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#64ffda]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max py-12 md:py-20 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center relative z-10">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#233554] bg-[#112240]/80 mb-6">
            <span className="text-[#64ffda] font-mono text-xs tracking-wide">
              Senior Software Engineer · Java · Spring Boot · JavaScript · 10+ años
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-5">
            Hola, soy<br />
            <span className="text-[#64ffda]">Pablo</span>
            <span className="text-white/15">.</span>
          </h1>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64ffda] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64ffda]"></span>
            </span>
            <span className="text-[#64ffda] text-xs font-mono">Senior Engineer · disponible</span>
          </div>

          <p className="text-white/60 text-base leading-relaxed max-w-lg mb-8">
            Más de <span className="text-white/90 font-semibold">10 años</span> construyendo software en producción.
            Especializado en backend Java y ecosistema Spring Boot —
            arquitecturas robustas, APIs escalables y sistemas de alta criticidad.
          </p>

          <div className="flex gap-5 md:gap-8 mb-6 pb-6 md:mb-8 md:pb-8 border-b border-white/5">
            {stats.map(([num, label]) => (
              <div key={label}>
                <div className="stat-number">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Ver proyectos ↗
            </a>
            <a href="#contact" className="btn-secondary">
              Contacto
            </a>
          </div>
        </div>

        {/* RIGHT — code card */}
        <div className="hidden md:block w-[320px]">
          <div className="rounded-2xl border border-[#233554] bg-[#112240] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#233554]/60">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-[#64ffda]/50" />
              <span className="ml-2 text-[#8892b0] text-xs font-mono">Pablo.java</span>
            </div>
            <pre className="p-5 text-xs font-mono leading-[1.9] overflow-x-auto">
<span className="text-[#64ffda]">public class</span> <span className="text-[#64ffda]">Pablo</span>{"\n"}
{"  "}<span className="text-[#64ffda]">implements</span> <span className="text-white/70">SeniorEngineer</span> {"{"}{"\n\n"}
{"  "}<span className="text-[#64ffda]">private final int</span>{"\n"}
{"    "}<span className="text-white/60">yearsInTech</span> = <span className="text-[#64ffda]">10</span>;{"\n"}
{"  "}<span className="text-[#64ffda]">private final int</span>{"\n"}
{"    "}<span className="text-white/60">yearsInJava</span> = <span className="text-[#64ffda]">8</span>;{"\n\n"}
{"  "}<span className="text-[#64ffda]">private final</span> <span className="text-white/60">List</span>&lt;<span className="text-white/60">String</span>&gt; core ={"\n"}
{"    "}List.of({"\n"}
{"      "}<span className="text-[#64ffda]">"Java"</span>,{"\n"}
{"      "}<span className="text-[#64ffda]">"Spring Boot"</span>,{"\n"}
{"      "}<span className="text-[#64ffda]">"Microservicios"</span>{"\n"}
{"    "});{"\n\n"}
{"  "}<span className="text-[#8892b0]">{"// building things that scale 🚀"}</span>{"\n"}
{"}"}
            </pre>
          </div>
          <div className="flex flex-wrap gap-2 mt-3 justify-center">
            {["Kafka","Redis","PostgreSQL","Docker","K8s","JWT"].map(t => (
              <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#112240] border border-[#233554] text-[#8892b0]">{t}</span>
            ))}
          </div>
        </div>

      </div>

      {/* Stack Técnico */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 md:mt-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">Stack Técnico</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map(({ tech, level, progress }) => (
            <div
              key={tech}
              className="bg-[#0a192f]/50 border border-[#233554] rounded-2xl p-5 transition-colors hover:border-[#64ffda]/40"
            >
              <div className="flex items-center justify-between mb-4 gap-3">
                <span className="text-sm font-semibold text-white">{tech}</span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8892b0]">
                  {level}
                </span>
              </div>

              <div className="h-2.5 rounded-full bg-[#112240] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#64ffda]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
