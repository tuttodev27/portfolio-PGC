import MiPassImg from "../assets/img/projects/mipass.png";

export default function Project() {
  const projects = [
    {
      title: "Aplicación MiPass",
      company: "Banco de Chile",
      sector: "Fintech / Security",
      description:
        "Desarrollo del sistema de autenticación digital y segundo factor de seguridad (2FA). Implementación de flujos de validación biométrica y notificaciones push para la autorización de transacciones bancarias en tiempo real, garantizando estándares de seguridad bancaria.",
      technologies: [
        "Java",
        "Spring Boot",
        "Liquidbase",
        "Redis",
        "Docker",
        "JWT",
        "JUnit",
        "Mockito",
        "Git",
        "Maven",
      ],
      image: MiPassImg,
    },
    {
      title: "Proyecto KYC",
      company: "Banco Scotiabank",
      sector: "Fintech / Security",
      description:
        "Diseño e implementación de nuevas funcionalidades en la ficha KYC a través de APIs REST, orientadas a la validación y verificación de identidad digital de clientes en procesos bancarios críticos, garantizando altos estándares de seguridad, trazabilidad y cumplimiento normativo propios del sector financiero.",
      technologies: ["Java", "Spring Boot", "Oracle", "JUnit", "Fortify", "Dynatrace", "Git", "Maven"],
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop",
    },
    {
      title: "E-Wallet",
      company: "Banco Comercial de Jamaica",
      sector: "Fintech / Digital Payments",
      description:
        "Diseño y desarrollo de una plataforma e-Wallet para pagos y transacciones digitales en tiempo real. Integración de servicios para procesamiento transaccional, gestión de saldos y autorización, con foco en seguridad, disponibilidad y resiliencia en contexto bancario.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JUnit", "Git", "Maven", "Docker", "Apache Kafka"],
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop",
    },
  ];

  return (
    <section id="projects" className="bg-slate-50">
      {/* Container único (sin duplicar max-w/px) */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Proyectos y Experiencia
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Proyectos destacados enfocados en sector financiero y seguridad digital.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold rounded-full uppercase tracking-wider">
                    {project.sector}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="text-emerald-600 text-xs font-semibold uppercase tracking-tight">
                    {project.company}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-auto">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-widest">
                    Stack Tecnológico
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* NDA (menos aire) */}
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-lg text-amber-800 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Proyectos sujetos a acuerdos de confidencialidad (NDA). Código privado por políticas de seguridad bancaria.
          </div>
        </div>
      </div>
    </section>
  );
}
