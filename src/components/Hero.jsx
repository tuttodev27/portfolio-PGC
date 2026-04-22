export default function Hero() {
  return (
    <section className="bg-[#0b0f14] text-white min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-blue-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_auto] gap-16 items-center relative z-10">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-700 bg-slate-800/80 mb-6">
            <span className="text-blue-400/60 font-mono text-xs">//</span>
            <span className="text-blue-400 font-mono text-xs tracking-wide">
              Senior Software Engineer · Java · Spring Boot · 10+ años
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-5">
            Hola, soy<br />
            <span className="text-blue-400">Pablo</span>
            <span className="text-white/15">.</span>
          </h1>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-500/20 mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 text-xs font-mono">Senior Engineer · disponible</span>
          </div>

          <p className="text-white/60 text-base leading-relaxed max-w-lg mb-8">
            Más de <span className="text-white/90 font-semibold">10 años</span> construyendo software en producción.
            Especializado en backend Java y ecosistema Spring Boot —
            arquitecturas robustas, APIs escalables y sistemas de alta criticidad.
          </p>

          <div className="flex gap-8 mb-8 pb-8 border-b border-white/5">
            {[["10+","años en TI"],["8","años en Java"],["3","proyectos clave"]].map(([n,l]) => (
              <div key={l}>
                <div className="text-2xl font-black text-blue-400 tracking-tight">{n}</div>
                <div className="text-xs text-white/30 font-mono mt-0.5">{l}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-6 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 transition-colors font-semibold text-sm shadow-lg shadow-blue-500/20">
              Ver proyectos ↗
            </a>
            <a href="#contact" className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-sm font-medium text-white/60 hover:text-white">
              Contacto
            </a>
          </div>
        </div>

        {/* RIGHT — code card */}
        <div className="hidden md:block w-[320px]">
          <div className="rounded-2xl border border-slate-700 bg-[#0f172a] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-2 text-slate-500 text-xs font-mono">Pablo.java</span>
            </div>
            <pre className="p-5 text-xs font-mono leading-[1.9] overflow-x-auto">
<span className="text-blue-400">public class</span> <span className="text-emerald-400">Pablo</span>{"\n"}
{"  "}<span className="text-blue-400">implements</span> <span className="text-white/70">SeniorEngineer</span> {"{"}{"\n\n"}
{"  "}<span className="text-blue-400">private final int</span>{"\n"}
{"    "}<span className="text-white/60">yearsInTech</span> = <span className="text-orange-400">10</span>;{"\n"}
{"  "}<span className="text-blue-400">private final int</span>{"\n"}
{"    "}<span className="text-white/60">yearsInJava</span> = <span className="text-orange-400">8</span>;{"\n\n"}
{"  "}<span className="text-blue-400">private final</span> <span className="text-white/60">List</span>&lt;<span className="text-white/60">String</span>&gt; core ={"\n"}
{"    "}List.of({"\n"}
{"      "}<span className="text-emerald-300">"Java"</span>,{"\n"}
{"      "}<span className="text-emerald-300">"Spring Boot"</span>,{"\n"}
{"      "}<span className="text-emerald-300">"Microservicios"</span>{"\n"}
{"    "});{"\n\n"}
{"  "}<span className="text-slate-500">{"// building things that scale 🚀"}</span>{"\n"}
{"}"}
            </pre>
          </div>
          <div className="flex flex-wrap gap-2 mt-3 justify-center">
            {["Kafka","Redis","PostgreSQL","Docker","K8s","JWT"].map(t => (
              <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 border border-slate-700 text-slate-400">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
