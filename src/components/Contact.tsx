import { useState, type FormEvent, type ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

    if (!formId) {
      console.warn("VITE_FORMSPREE_ID not set. Configure it in .env for real submissions.");
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Formspree request failed");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const inputClass =
    "w-full px-4 py-2.5 bg-[#112240] border border-[#233554] rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#64ffda]/50 focus:border-[#64ffda]/50 transition-all";

  return (
    <section className="section-base">
      <div className="container-max">

        <div className="section-header">
          
          <h2 className="section-title">Contacto</h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.8fr] gap-10">

          {/* Left — info */}
          <div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              ¿Tienes un proyecto en mente? Estoy abierto a nuevas oportunidades —
              freelance, posiciones senior o consultoría en arquitectura Java / Spring Boot.
            </p>

            <div className="bg-[#112240] border border-[#233554] rounded-xl p-5 font-mono text-sm">
              <p className="text-[#64ffda]/60 text-xs mb-4"> Encuéntrame en</p>
              <div className="space-y-4">

                {/* CV */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#112240] border border-[#233554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#64ffda]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/25 text-xs">CV → </span>
                    <a href="/Pablo_Alexis_Cristóbal_Gallegos_Celis_CV.pdf" download className="text-white/60 text-xs hover:text-[#64ffda] transition-colors">
                      Descargar CV
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#112240] border border-[#233554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#64ffda]/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/25 text-xs">linkedin → </span>
                    <a href="https://www.linkedin.com/in/pablo-alexis-gallegos-celis/" target="_blank" rel="noopener noreferrer" className="text-white/60 text-xs hover:text-[#64ffda] transition-colors">
                      /in/pablo-alexis-gallegos-celis
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#112240] border border-[#233554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#64ffda]/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/25 text-xs">github → </span>
                    <span className="text-white/60 text-xs">github.com/tuttodev27</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#112240]/50 border border-[#233554] rounded-2xl p-6">

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-12 h-12 bg-[#64ffda]/10 border border-[#64ffda]/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white/80 mb-1">¡Mensaje enviado!</h3>
                <p className="text-white/40 text-sm mb-5">Te responderé pronto.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-mono text-[#64ffda]/60 hover:text-[#64ffda] transition-colors underline underline-offset-4"
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

                {status === "error" && (
                  <p className="text-red-400 text-xs">Error al enviar. Intenta de nuevo o escríbeme directo a LinkedIn.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`px-8 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    status === "sending"
                      ? "bg-[#112240] text-white/30 cursor-not-allowed"
                      : "bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-bold shadow-lg shadow-[#64ffda]/20"
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
