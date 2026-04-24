export default function Experience() {
  const jobs = [
    {
      role: "Senior Backend Engineer",
      company: "Qintess · Banco de Chile",
      period: "2025",
      current: true,
      bullets: [
        "Participé en la migración de microservicios desde Java 11 a Java 21 en sistemas financieros de alta criticidad.",
        "Identifiqué y resolví un problema de configuración en Kubernetes que impactaba el rendimiento bajo alta carga.",
        "Refactoricé flujos de negocio aplicando patrones de diseño, mejorando mantenibilidad y escalabilidad.",
      ],
      stack: "Java · Spring Boot · Kubernetes · Elastic Stack · JMeter · Jenkins",
    },
    {
      role: "Software Engineer",
      company: "ImageMaker · Scotiabank (KYC)",
      period: "2023 – 2024",
      current: false,
      bullets: [
        "Diseñé e implementé APIs REST para procesos KYC en sistemas financieros.",
        "Optimicé consultas y lógica de negocio, mejorando el rendimiento en ~30%.",
        "Implementé pruebas unitarias e integración con JUnit y Mockito.",
      ],
      stack: "Java · Spring Boot · Oracle · JWT · JUnit · Mockito · CI/CD",
    },
    {
      role: "Software Engineer",
      company: "Genesys · Banco Consorcio",
      period: "2021 – 2022",
      current: false,
      bullets: [
        "Desarrollé APIs REST para procesos de migración de tarjetas de crédito.",
        "Mejoré la eficiencia del sistema en aproximadamente un 20% mediante optimización backend.",
        "Validé integraciones y calidad de servicios mediante pruebas funcionales.",
      ],
      stack: "Java · Spring Boot · SQL · Integración de sistemas",
    },
    {
      role: "Backend Developer",
      company: "The Bridge Social · E-Wallet",
      period: "2021",
      current: false,
      bullets: [
        "Diseñé e implementé microservicios en Java para plataforma de pagos digitales.",
        "Implementé comunicación asincrónica con Apache Kafka para procesamiento en tiempo real.",
        "Apliqué patrones de diseño para mejorar mantenibilidad del sistema.",
      ],
      stack: "Java · Spring Boot · Kafka · Microservices",
    },
    {
      role: "IT Support Engineer",
      company: "Pontificia Universidad Católica de Chile",
      period: "2011 – 2020",
      current: false,
      bullets: [
        "Soporte de segundo nivel para sistemas institucionales críticos.",
        "Participación en migraciones de aplicaciones Java y servidores Apache.",
        "Implementación de dashboards en Kibana para monitoreo de sistemas.",
      ],
      stack: "Linux · Java · Apache · Kibana · Soporte TI",
    },
  ];

  return (
    // FIX: bg consistente con el resto del sitio
    <section id="experience" className="scroll-mt-24 section-base">
      <div className="container-max">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 text-xs rounded-md bg-slate-800/80 border border-slate-700 text-blue-400 font-mono mb-4">
            // trayectoria
          </span>
          <h2 className="section-title">Experiencia</h2>
        </div>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-5 md:p-6 transition-colors ${
                job.current
                  ? "bg-slate-900/80 border-blue-500/30"
                  : "bg-slate-900/50 border-slate-700 hover:border-slate-600"
              }`}
            >
              {/* Header — apilado en móvil */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base md:text-lg font-semibold text-white">{job.role}</h3>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        actual
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/50">{job.company}</p>
                </div>
                <span className="text-sm text-white/30 font-mono shrink-0">{job.period}</span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-4">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-white/65 text-sm leading-relaxed flex gap-2">
                    <span className="text-blue-400/50 mt-0.5 shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <p className="text-xs font-mono text-blue-400/50">{job.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
