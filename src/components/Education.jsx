export default function Education() {
  const degrees = [
    {
      year: "2014 – 2017",
      title: "Ingeniería en Informática",
      institution: "Instituto Profesional Duoc UC",
      type: "Título Profesional",
    },
    {
      year: "2008",
      title: "Analista Programador Computacional",
      institution: "Instituto Profesional Duoc UC",
      type: "Título Técnico",
    },
  ];

  const certGroups = [
    {
      label: "DevOps & Infra",
      color: "blue",
      items: ["Docker", "Jenkins", "Certificate DevOps", "DevOps Essentials Professional Certificate"],
    },
    {
      label: "Cloud",
      color: "amber",
      items: ["Google Cloud Fundamentals: Core Infrastructure"],
    },
    {
      label: "Metodologías",
      color: "emerald",
      items: ["Scrum Master Certificate"],
    },
    {
      label: "Base técnica",
      color: "violet",
      items: ["Fundamentos de Linux", "MS-SQL Server", "Python 3"],
    },
  ];

  const colorMap = {
    blue:    "bg-blue-500/10 border-blue-500/20 text-blue-300",
    amber:   "bg-amber-500/10 border-amber-500/20 text-amber-300",
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    violet:  "bg-violet-500/10 border-violet-500/20 text-violet-300",
  };

  const dotMap = {
    blue: "bg-blue-400", amber: "bg-amber-400", emerald: "bg-emerald-400", violet: "bg-violet-400",
  };

  return (
    // FIX: bg consistente con el resto del sitio + id correcto
    <section id="educacion" className="scroll-mt-24 section-base">
      <div className="container-max">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 text-xs rounded-md bg-slate-800/80 border border-slate-700 text-blue-400 font-mono mb-4">
            // educación
          </span>
          <h2 className="section-title">Educación</h2>
        </div>

        {/* Títulos — 1 col en móvil, 2 en sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {degrees.map((d) => (
            <div key={d.title} className="bg-slate-900/50 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">{d.type}</span>
                <span className="text-xs font-mono text-blue-400/70 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md shrink-0">{d.year}</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1 leading-snug">{d.title}</h3>
              <p className="text-xs text-white/40 font-mono">{d.institution}</p>
            </div>
          ))}
        </div>

        {/* Certificaciones */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs rounded-md bg-slate-800/80 border border-slate-700 text-blue-400 font-mono mb-4">
            // certificaciones y formación continua
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certGroups.map((g) => (
            <div key={g.label} className="bg-slate-900/50 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-1.5 h-1.5 rounded-full ${dotMap[g.color]}`} />
                <h3 className="text-[11px] uppercase tracking-[0.25em] text-slate-400">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className={`px-2.5 py-1 text-xs font-mono rounded-lg border ${colorMap[g.color]}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
