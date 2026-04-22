export default function Project() {
  const projects = [
    {
      num: "01",
      tag: "Banca · Seguridad",
      title: "Aplicación MiPass",
      description:
        "Sistema de autenticación digital y segundo factor (2FA) con validación biométrica y notificaciones en tiempo real para autorización de transacciones bancarias.",
      impact: "Reducción de fraude transaccional en canal digital",
      tech: ["Java", "Spring Boot", "Redis", "Docker", "JWT", "JUnit", "Mockito", "Maven"],
      color: "blue",
    },
    {
      num: "02",
      tag: "Banca · Cumplimiento",
      title: "Proyecto KYC",
      description:
        "APIs REST para validación de identidad digital en procesos bancarios críticos, garantizando seguridad, trazabilidad y cumplimiento normativo.",
      impact: "Cumplimiento regulatorio y trazabilidad total de identidad",
      tech: ["Java", "Spring Boot", "Oracle", "JUnit", "Fortify", "Dynatrace"],
      color: "violet",
    },
    {
      num: "03",
      tag: "Fintech · Pagos",
      title: "E-Wallet",
      description:
        "Plataforma de pagos digitales en tiempo real con arquitectura de microservicios, integración de mensajería y enfoque en alta disponibilidad.",
      impact: "Alta disponibilidad en pagos digitales en tiempo real",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kafka", "JUnit"],
      color: "emerald",
    },
  ];

  const colorMap = {
    blue:    { tag: "text-blue-400",    pill: "bg-blue-500/10 border-blue-500/20 text-blue-300",     impact: "text-blue-400/70",    hover: "hover:border-blue-500/30" },
    violet:  { tag: "text-violet-400",  pill: "bg-violet-500/10 border-violet-500/20 text-violet-300", impact: "text-violet-400/70",  hover: "hover:border-violet-500/30" },
    emerald: { tag: "text-emerald-400", pill: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", impact: "text-emerald-400/70", hover: "hover:border-emerald-500/30" },
  };

  return (
    <section id="projects" className="bg-[#0b0f14] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header — mismo patrón */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Proyectos</h2>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const c = colorMap[project.color];
            return (
              <div
                key={project.num}
                className={`group relative rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition-all duration-300 ${c.hover} hover:bg-slate-900/80`}
              >
                {/* Arrow */}
                <div className="absolute top-6 right-6 text-white/20 group-hover:text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-lg">
                  →
                </div>

                {/* Num + tag */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-white/20">{project.num}</span>
                  <span className={`text-xs font-mono ${c.tag}`}>{project.tag}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-100 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm mb-3 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <p className={`text-xs font-mono mb-4 ${c.impact}`}>→ {project.impact}</p>

                {/* Tech — mismo estilo que las pills del About */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md border ${c.pill}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
