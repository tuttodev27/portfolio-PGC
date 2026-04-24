export default function Projects() {
  const projects = [
    {
      id: "01",
      category: "Banca · Banco de Chile",
      title: "Aplicación MiPass",
      description:
        "Plataforma de autenticación digital basada en microservicios para la gestión de identidad y autorización de transacciones bancarias en entornos de alta disponibilidad.",
      highlights: [
        "Reducción del fraude transaccional mediante autenticación fuerte (MFA)",
        "Mejora en la latencia con procesamiento en tiempo real y mensajería asíncrona",
        "Alta disponibilidad en sistemas críticos de autenticación",
      ],
      stack: ["Java", "Spring Boot", "Kafka", "Redis", "Docker", "JWT"],
      color: "blue",
    },
    {
      id: "02",
      category: "Banca · Scotiabank",
      title: "KYC Platform",
      description:
        "Sistema backend para validación y verificación de identidad de clientes, enfocado en procesos KYC dentro del sector financiero.",
      highlights: [
        "Diseño e implementación de APIs REST para procesos críticos de negocio",
        "Mejora de performance cercana al 30% en servicios backend",
        "Integración con equipos de seguridad, QA y negocio",
      ],
      stack: ["Java", "Spring Boot", "Oracle", "JWT", "JUnit", "Mockito"],
      color: "violet",
    },
    {
      id: "03",
      category: "Fintech · Jamaica",
      title: "E-Wallet Platform",
      description:
        "Plataforma de pagos digitales basada en microservicios, orientada a transferencias seguras y procesamiento en tiempo casi real.",
      highlights: [
        "Integración con Kafka para mensajería asíncrona",
        "Procesamiento de eventos en tiempo real",
        "Arquitectura escalable para transacciones financieras",
      ],
      stack: ["Java", "Spring Boot", "Kafka", "Docker", "PostgreSQL"],
      color: "emerald",
    },
    {
      id: "04",
      category: "Proyecto personal",
      title: "ATS Platform",
      description:
        "Sistema de seguimiento de candidatos diseñado con arquitectura hexagonal y enfoque en seguridad, escalabilidad y buenas prácticas.",
      highlights: [
        "Implementación de Clean Architecture y DDD",
        "Autenticación y autorización con JWT",
        "Diseño modular basado en microservicios",
      ],
      stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
      color: "amber",
    },
  ];

  const colorMap = {
    blue:    { cat: "text-blue-400",    pill: "bg-blue-500/10 border-blue-500/20 text-blue-300",     hi: "text-blue-400/70",    hover: "hover:border-blue-500/25"    },
    violet:  { cat: "text-violet-400",  pill: "bg-violet-500/10 border-violet-500/20 text-violet-300", hi: "text-violet-400/70",  hover: "hover:border-violet-500/25"  },
    emerald: { cat: "text-emerald-400", pill: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", hi: "text-emerald-400/70", hover: "hover:border-emerald-500/25" },
    amber:   { cat: "text-amber-400",   pill: "bg-amber-500/10 border-amber-500/20 text-amber-300",   hi: "text-amber-400/70",   hover: "hover:border-amber-500/25"   },
  };

  return (
    // FIX: bg consistente con el resto del sitio
    <section id="projects" className="section-base">
      <div className="container-max">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 text-xs rounded-md bg-slate-800/80 border border-slate-700 text-blue-400 font-mono mb-4">
            // proyectos destacados
          </span>
          <h2 className="section-title">Proyectos</h2>
        </div>

        <div className="space-y-4">
          {projects.map((p) => {
            const c = colorMap[p.color];
            return (
              <div
                key={p.id}
                className={`group relative rounded-xl border border-slate-700 bg-slate-900/50 p-5 md:p-6 transition-all duration-300 ${c.hover} hover:bg-slate-900/80`}
              >
                {/* Arrow — oculta en móvil muy pequeño */}
                <div className="hidden sm:block absolute top-5 right-5 text-white/20 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-lg">
                  →
                </div>

                {/* id + categoría */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-white/20">{p.id}</span>
                  <span className={`text-xs font-mono ${c.cat}`}>{p.category}</span>
                </div>

                {/* Layout: descripción + stack apilados en móvil, lado a lado en lg */}
                <div className="grid lg:grid-cols-[1fr_200px] gap-5 items-start">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-blue-100 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-white/55 text-sm mb-4 leading-relaxed">{p.description}</p>
                    <div className="space-y-1.5">
                      {p.highlights.map((h, i) => (
                        <p key={i} className={`text-xs font-mono ${c.hi}`}>→ {h}</p>
                      ))}
                    </div>
                  </div>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    <p className="w-full text-xs text-white/30 font-mono mb-1 hidden lg:block text-right">stack</p>
                    {p.stack.map((t) => (
                      <span key={t} className={`px-2.5 py-1 text-xs font-mono rounded-md border ${c.pill}`}>{t}</span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
