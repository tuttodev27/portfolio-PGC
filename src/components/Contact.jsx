import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Mismo estilo que los inputs del formulario original pero adaptado al diseño
  const inputClass =
    "w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all";

  return (
    <section id="contact" className="bg-[#0b0f14] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header — mismo patrón */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Contacto</h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.8fr] gap-10">

          {/* Left — info */}
          <div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              ¿Tienes un proyecto en mente? Estoy abierto a nuevas oportunidades —
              freelance, posiciones senior o consultoría en arquitectura Java / Spring Boot.
            </p>

            {/* Links — mismo estilo code block */}
            <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-5 font-mono text-sm">
              <p className="text-blue-300/60 text-xs mb-4">// encuéntrame en</p>
              <div className="space-y-4">

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/25 text-xs">email → </span>
                    <span className="text-white/60 text-xs">pablo@email.com</span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/25 text-xs">linkedin → </span>
                    <span className="text-white/60 text-xs">/in/pablo-gallegos</span>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/25 text-xs">github → </span>
                    <span className="text-white/60 text-xs">github.com/pablo</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right — form con mismo estilo bg-slate-900/50 border-slate-700 */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6">

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-12 h-12 bg-emerald-900/30 border border-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white/80 mb-1">¡Mensaje enviado!</h3>
                <p className="text-white/40 text-sm mb-5">Te responderé pronto.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-mono text-blue-400/60 hover:text-blue-400 transition-colors underline underline-offset-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-white/40 tracking-widest uppercase mb-2">Nombre</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/40 tracking-widest uppercase mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="tu@email.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/40 tracking-widest uppercase mb-2">Asunto</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="¿De qué trata tu proyecto?" className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/40 tracking-widest uppercase mb-2">Mensaje</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Cuéntame más..." className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`px-8 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    status === "sending"
                      ? "bg-slate-700 text-white/30 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  }`}
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
