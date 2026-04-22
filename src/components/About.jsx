import "devicon/devicon.min.css";

export default function About() {
  const skills = {
    Lenguajes: {
      color: "blue",
      items: ["Java", "SQL"],
    },
    Frameworks: {
      color: "green",
      items: ["Spring Boot", "Spring Framework", "Spring Security"],
    },
    Bases_de_datos: {
      color: "violet",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    DevOps: {
      color: "amber",
      items: ["Docker", "Jenkins", "Kubernetes"],
    },
    Observabilidad: {
      color: "teal",
      items: ["Prometheus", "Grafana", "Elasticsearch"],
    },
    Mensajería: {
      color: "rose",
      items: ["Kafka", "RabbitMQ"],
    },
  };

  const icons = {
    Java: "devicon-java-plain colored",
    SQL: "devicon-mysql-plain colored",
    "Spring Boot": "devicon-spring-plain colored",
    "Spring Framework": "devicon-spring-plain colored",
    "Spring Security": "devicon-spring-plain colored",
    PostgreSQL: "devicon-postgresql-plain colored",
    MySQL: "devicon-mysql-plain colored",
    MongoDB: "devicon-mongodb-plain colored",
    Redis: "devicon-redis-plain colored",
    Docker: "devicon-docker-plain colored",
    Jenkins: "devicon-jenkins-plain colored",
    Kubernetes: "devicon-kubernetes-plain colored",
    Prometheus: "devicon-prometheus-original colored",
    Grafana: "devicon-grafana-plain colored",
    Elasticsearch: "devicon-elasticsearch-plain colored",
    Kafka: "devicon-apachekafka-original colored",
    RabbitMQ: "devicon-rabbitmq-original colored",
  };

  // Mismo estilo visual que el badge del Hero
  const colorMap = {
    blue:   { pill: "bg-blue-500/10 border-blue-500/20 text-blue-300",     dot: "bg-blue-400" },
    green:  { pill: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", dot: "bg-emerald-400" },
    violet: { pill: "bg-violet-500/10 border-violet-500/20 text-violet-300",   dot: "bg-violet-400" },
    amber:  { pill: "bg-amber-500/10 border-amber-500/20 text-amber-300",   dot: "bg-amber-400" },
    teal:   { pill: "bg-teal-500/10 border-teal-500/20 text-teal-300",      dot: "bg-teal-400" },
    rose:   { pill: "bg-rose-500/10 border-rose-500/20 text-rose-300",      dot: "bg-rose-400" },
  };

  return (
    <section id="about" className="bg-[#0b0f14] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header — mismo patrón que el badge del Hero */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Stack Técnico</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, { color, items }]) => {
            const c = colorMap[color];
            return (
              <div
                key={category}
                className="bg-slate-900/50 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                  <h3 className="text-xs font-mono text-white/40 tracking-widest uppercase">
                    {category.replaceAll("_", " ")}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border rounded-lg hover:scale-105 transition-all cursor-default ${c.pill}`}
                    >
                      {icons[item] && (
                        <i className={`${icons[item]} leading-none`} style={{ fontSize: "14px" }} />
                      )}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core expertise — mismo estilo que code block del Hero */}
        <div className="mt-6 bg-[#0f172a] border border-slate-700 rounded-xl p-5 font-mono text-sm">
          <p className="text-blue-300/60 mb-3 text-xs">// core expertise</p>
          <pre className="text-blue-300 leading-relaxed whitespace-pre-wrap font-mono text-xs">{`public String expertise() {
  return "8 años con Java + Spring Boot\\n"
       + "en entornos bancarios críticos —\\n"
       + "autenticación, pagos, KYC\\n"
       + "y microservicios observables.";
}`}</pre>
        </div>

      </div>
    </section>
  );
}
