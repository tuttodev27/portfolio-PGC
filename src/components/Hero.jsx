export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Pablo Gallegos
          </h1>

          <p className="mt-3 text-lg md:text-xl text-white/80">
            Senior Backend Java Engineer · Sistemas financieros · Microservicios con Spring Boot
            <span className="text-emerald-300">Spring Boot</span> · Microservices
          </p>

          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
            Especializado en diseño y desarrollo de soluciones escalables, seguras y resilientes con Java y Spring Boot.

            Experiencia en sistemas financieros de alta criticidad, optimización de rendimiento y arquitecturas de microservicios.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 font-medium transition"
            >
              Contacto
            </a>

            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg border border-white/25 hover:bg-white/10 font-medium transition"
            >
             Ver Proyectos
            </a>
          </div>

          {/* Chips compactas (opcional, pero sube percepción senior sin agregar “aire”) */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Fintech", "High Availability", "Microservices", "Observability"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex md:justify-end">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/15 bg-white/5">
            <img
              src="/profile.png"
              alt="Pablo Gallegos"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
