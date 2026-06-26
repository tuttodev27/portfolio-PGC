export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-24 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white mb-12">
          Experiencia
        </h2>

        <div className="space-y-6">

          {/* Qintess */}
          <div className="rounded-2xl border border-white/10 bg-[#112240] p-6 backdrop-blur-sm">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Senior Backend Engineer
                </h3>
                <p className="text-sm text-white/60">
                  Qintess · Proyecto: Banco de Chile
                </p>
              </div>
              <span className="text-sm text-white/40">2025</span>
            </div>

            <ul className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed">
              <li>Participé en la migración de microservicios desde Java 11 a Java 21 en sistemas financieros de alta criticidad.</li>
              <li>Identifiqué y resolví un problema de configuración en Kubernetes que impactaba el rendimiento bajo alta carga.</li>
              <li>Refactoricé flujos de negocio aplicando patrones de diseño, mejorando la mantenibilidad y escalabilidad.</li>
            </ul>

            <p className="mt-4 text-xs text-white/40">
              Java · Spring Boot · Kubernetes · Elastic Stack · JMeter · Jenkins
            </p>
          </div>

          {/* Scotiabank */}
          <div className="rounded-2xl border border-white/10 bg-[#112240] p-6 backdrop-blur-sm">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Software Engineer
                </h3>
                <p className="text-sm text-white/60">
                  ImageMaker · Proyecto: Scotiabank (KYC)
                </p>
              </div>
              <span className="text-sm text-white/40">2023 – 2024</span>
            </div>

            <ul className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed">
              <li>Diseñé e implementé APIs REST para procesos KYC en sistemas financieros.</li>
              <li>Optimicé consultas y lógica de negocio, mejorando el rendimiento de microservicios en ~30%.</li>
              <li>Implementé pruebas unitarias e integración con JUnit y Mockito, elevando la calidad del código.</li>
            </ul>

            <p className="mt-4 text-xs text-white/40">
              Java · Spring Boot · Oracle · JWT · JUnit · Mockito · CI/CD
            </p>
          </div>

          {/* Genesys */}
          <div className="rounded-2xl border border-white/10 bg-[#112240] p-6 backdrop-blur-sm">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Software Engineer
                </h3>
                <p className="text-sm text-white/60">
                  Genesys · Proyecto: Banco Consorcio
                </p>
              </div>
              <span className="text-sm text-white/40">2021 – 2022</span>
            </div>

            <ul className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed">
              <li>Desarrollé APIs REST para procesos de migración de tarjetas de crédito.</li>
              <li>Mejoré la eficiencia del sistema en aproximadamente un 20% mediante optimización backend.</li>
              <li>Validé integraciones y calidad de servicios mediante pruebas funcionales.</li>
            </ul>

            <p className="mt-4 text-xs text-white/40">
              Java · Spring Boot · SQL · Integración de sistemas
            </p>
          </div>

          {/* E-wallet */}
          <div className="rounded-2xl border border-white/10 bg-[#112240] p-6 backdrop-blur-sm">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Backend Developer
                </h3>
                <p className="text-sm text-white/60">
                  The Bridge Social · Proyecto: E-Wallet
                </p>
              </div>
              <span className="text-sm text-white/40">2021</span>
            </div>

            <ul className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed">
              <li>Diseñé e implementé microservicios en Java para plataforma de pagos digitales.</li>
              <li>Implementé comunicación asincrónica con Apache Kafka para procesamiento en tiempo real.</li>
              <li>Aplicación de patrones de diseño para mejorar mantenibilidad del sistema.</li>
            </ul>

            <p className="mt-4 text-xs text-white/40">
              Java · Spring Boot · Kafka · Microservices
            </p>
          </div>

          {/* UC */}
          <div className="rounded-2xl border border-white/10 bg-[#112240] p-6 backdrop-blur-sm">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  IT Support Engineer
                </h3>
                <p className="text-sm text-white/60">
                  Pontificia Universidad Católica de Chile
                </p>
              </div>
              <span className="text-sm text-white/40">2011 – 2020</span>
            </div>

            <ul className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed">
              <li>Soporte de segundo nivel para sistemas institucionales críticos.</li>
              <li>Participación en migraciones de aplicaciones Java y servidores Apache.</li>
              <li>Implementación de dashboards en Kibana para monitoreo de sistemas.</li>
            </ul>

            <p className="mt-4 text-xs text-white/40">
              Linux · Java · Apache · Kibana · Soporte TI
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
