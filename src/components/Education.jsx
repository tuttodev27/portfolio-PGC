export default function Education() {
  return (
    <section id="educacion" className="py-20 scroll-mt-24 bg-[#020817]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="section-header">
          <h2 className="section-title">Educación</h2>
        </div>

        <div className="space-y-12">

          {/* Ingeniería */}
          <div className="relative border-l border-white/10 pl-8">
            <span className="absolute -left-[6px] top-2 w-3 h-3 bg-accent rounded-full"></span>

            <h3 className="text-xl font-semibold text-white">
              Ingeniería en Informática
            </h3>

            <p className="text-sm text-white/60 mt-1">
              DUOC UC · 2014 - 2017
            </p>
          </div>

          {/* Certificaciones */}
          <div className="relative border-l border-white/10 pl-8">
            <span className="absolute -left-[6px] top-2 w-3 h-3 bg-accent rounded-full"></span>

            <h3 className="text-xl font-semibold text-white">
              Certificaciones
            </h3>

            <p className="text-sm text-white/60 mt-1">
              Formación continua
            </p>

            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              He complementado mi experiencia profesional con certificaciones enfocadas en
              desarrollo backend, prácticas DevOps, cloud y metodologías ágiles, fortaleciendo
              mi trabajo en sistemas escalables y entornos productivos.
            </p>

            <ul className="mt-4 space-y-3 text-white/70 text-sm leading-relaxed">
              
              <li>
                <span className="text-white font-medium">DevOps & Infra:</span>{" "}
                Docker · Jenkins · Certificate DevOps · DevOps Essentials Professional Certificate
              </li>

              <li>
                <span className="text-white font-medium">Cloud:</span>{" "}
                Google Cloud Fundamentals: Core Infrastructure
              </li>

              <li>
                <span className="text-white font-medium">Metodologías:</span>{" "}
                Scrum Master Certificate
              </li>

              <li>
                <span className="text-white font-medium">Base técnica:</span>{" "}
                Fundamentos de Linux · MS-SQL Server · Python 3
              </li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}