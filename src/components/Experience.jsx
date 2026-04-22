import "devicon/devicon.min.css";
export default function Experience() {
  const experience = [
    {
      period: "2022 — presente",
      role: "Senior Software Engineer",
      company: "Empresa actual",
      stack: "Java · Spring Boot · Microservicios",
      current: true,
    },
    {
      period: "2018 — 2022",
      role: "Software Engineer",
      company: "Empresa anterior",
      stack: "Java · Spring · PostgreSQL",
      current: false,
    },
    {
      period: "2014 — 2018",
      role: "Developer",
      company: "Primeros años en TI",
      stack: "Java · SQL · Backend",
      current: false,
    },
  ];

  const education = [
    {
      year: "20XX",
      title: "Ingeniería en Informática / Sistemas",
      institution: "Universidad",
    },
  ];

  return (
    <section id="experience" className="bg-[#0b0f14] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header — mismo patrón */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Experiencia</h2>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">

          {/* Timeline */}
          <div className="space-y-3">
            {experience.map((exp, i) => (
              <div
                key={i}
                className={`rounded-xl border p-5 transition-colors ${
                  exp.current
                    ? "bg-slate-900/80 border-blue-500/30"
                    : "bg-slate-900/50 border-slate-700 hover:border-slate-600"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                          actual
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <p className="text-white/50 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-white/30 whitespace-nowrap mt-1">{exp.period}</span>
                </div>
                <p className="text-xs font-mono text-blue-400/60 mt-3">{exp.stack}</p>
              </div>
            ))}
          </div>

          {/* Stats card — mismo estilo code block del Hero */}
          <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-5 font-mono text-sm w-full md:w-64">
            <p className="text-blue-300/60 text-xs mb-4">// resumen</p>
            <div className="space-y-4">
              {[
                { n: "10+", l: "años en TI" },
                { n: "8",   l: "años en Java" },
                { n: "Sr.", l: "nivel actual" },
              ].map(({ n, l }) => (
                <div key={l} className="flex items-baseline justify-between border-b border-slate-700/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-white/40 text-xs">{l}</span>
                  <span className="text-blue-400 text-xl font-bold">{n}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-700/50">
              <p className="text-blue-300/60 text-xs mb-3">// educación</p>
              {education.map((e, i) => (
                <div key={i}>
                  <p className="text-white/70 text-xs leading-relaxed">{e.title}</p>
                  <p className="text-white/30 text-xs font-mono mt-1">{e.institution} · {e.year}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
