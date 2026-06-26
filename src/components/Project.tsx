interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export default function Projects() {
  const projects: Project[] = [
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
      stack: ["Java", "Spring Boot", "REST APIs", "JUnit", "Mockito"],
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
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="text-3xl font-bold text-white mb-12">
          Proyectos
        </h2>

        <div className="space-y-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-white/10 bg-[#112240] p-4 sm:p-6 hover:border-[#64ffda]/30 transition-colors"
            >
              
              <div className="grid lg:grid-cols-[1fr_220px] gap-6 items-start">

                {/* IZQUIERDA */}
                <div>
                  <p className="text-xs text-[#64ffda] mb-2">
                    {project.id} {project.category}
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mt-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-[#64ffda] text-xs font-mono">
                    {project.highlights.map((item, index) => (
                      <li key={index}>→ {item}</li>
                    ))}
                  </ul>
                </div>

                {/* DERECHA */}
                <div className="flex flex-wrap gap-2 justify-start lg:justify-end lg:mt-6">

                  <p className="w-full text-xs text-white/40 font-mono mb-2 text-right hidden lg:block">
                    stack
                  </p>

                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-[#112240] border border-[#233554] text-[#64ffda] hover:border-[#64ffda]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
