import "devicon/devicon.min.css";

export default function About() {
  const experience = [
    {
      title: "Senior Java Backend Engineer",
      company: "Qintess",
      period: "Mayo 2025 - Octubre 2025",
      bullets: [
        "Desarrollo y mantenimiento de microservicios backend en Java y Spring Boot para plataformas bancarias de alta disponibilidad y criticidad.",
        "Análisis y resolución de incidentes productivos complejos, identificando fallas intermitentes en flujos críticos de negocio.",
        "Investigación de logs centralizados en ElasticSearch, detectando configuraciones faltantes a nivel de pods en Kubernetes que impactaban la estabilidad del sistema.",
        "Corrección y estandarización de configuraciones de despliegue, logrando estabilizar los flujos de negocio y mejorar la confiabilidad del sistema,",
        "Implementación de testing unitario con JUnit y Mockito, alcanzando una cobertura cercana al 90%.",
      ],
    },
    {
      title: "Ingeniero de Software",
      company: "ImageMakers",
      period: "Septiembre 2023 - Septiembre 2024",
      bullets: [
        "Diseño e implementación de APIs REST para procesos KYC (Know Your Customer), orientados a la validación y verificación de identidad digital de clientes.",
        "Desarrollo de nuevas funcionalidades en la ficha KYC, asegurando seguridad, trazabilidad y cumplimiento normativo en procesos bancarios críticos.",
        "Optimización de flujos backend, logrando mejoras cercanas al 30% en performance.",
        "Desarrollo de pruebas unitarias e integraciones utilizando JUnit, Mockito y Postman.",
        "Trabajo colaborativo con equipos de QA, negocio y seguridad, bajo metodologías ágiles.",
      ],
    },
    {
      title: "Desarrollador Backend Java",
      company: "The bridge Social",
      period: "Febrero 2021 - Mayo 2021",
      bullets: [
        "Diseño e implementación desde cero de una plataforma e-Wallet para la gestión de pagos y transacciones digitales, orientada a transacciones financieras seguras, alta disponibilidad y escalabilidad.",
        "Aplicación de patrones de diseño (FACADE, DAO, MVC) mejorando la mantenibilidad y escalabilidad del código.",
        "Implementación de alta cobertura de testing unitario con JUnit y Mockito (>90%).",
        "Integración de servicios de mensajería con Apache Kafka para procesamiento asíncrono de transacciones.",
        "Colaboración en equipos ágiles utilizando Scrum y herramientas como Jira y Confluence.",
        "Uso de Docker para contenerización y despliegue en entornos de desarrollo y producción",
      ],
    },
  ];

  const techIcons = {
    Java: { icon: "devicon-java-plain colored", bgColor: "bg-orange-50 hover:bg-orange-100" },
    SQL: { icon: "devicon-mysql-plain colored", bgColor: "bg-blue-50 hover:bg-blue-100" },

    "Spring Boot": { icon: "devicon-spring-plain colored", bgColor: "bg-green-50 hover:bg-green-100" },
    "Spring Framework": { icon: "devicon-spring-plain colored", bgColor: "bg-green-50 hover:bg-green-100" },
    "Spring Security": { icon: "devicon-spring-plain colored", bgColor: "bg-green-50 hover:bg-green-100" },

    PostgreSQL: { icon: "devicon-postgresql-plain colored", bgColor: "bg-blue-50 hover:bg-blue-100" },
    MySQL: { icon: "devicon-mysql-plain colored", bgColor: "bg-cyan-50 hover:bg-cyan-100" },
    "SQL Server": { icon: "devicon-microsoftsqlserver-plain colored", bgColor: "bg-red-50 hover:bg-red-100" },
    MongoDB: { icon: "devicon-mongodb-plain colored", bgColor: "bg-green-50 hover:bg-green-100" },
    Redis: { icon: "devicon-redis-plain colored", bgColor: "bg-red-50 hover:bg-red-100" },
    Oracle: { icon: "devicon-oracle-original colored", bgColor: "bg-orange-50 hover:bg-orange-100" },

    "CI/CD": { icon: "devicon-githubactions-original", bgColor: "bg-purple-50 hover:bg-purple-100" },
    Docker: { icon: "devicon-docker-plain colored", bgColor: "bg-blue-50 hover:bg-blue-100" },
    Jenkins: { icon: "devicon-jenkins-plain colored", bgColor: "bg-red-50 hover:bg-red-100" },
    Kubernetes: { icon: "devicon-kubernetes-plain colored", bgColor: "bg-blue-50 hover:bg-blue-100" },
    "Azure DevOps": { icon: "devicon-azuredevops-plain colored", bgColor: "bg-blue-50 hover:bg-blue-100" },

    Prometheus: { icon: "devicon-prometheus-original colored", bgColor: "bg-orange-50 hover:bg-orange-100" },
    Dynatrace: { icon: "devicon-dynatrace-plain colored", bgColor: "bg-blue-50 hover:bg-blue-100" },
    Grafana: { icon: "devicon-grafana-plain colored", bgColor: "bg-orange-50 hover:bg-orange-100" },
    Elasticsearch: { icon: "devicon-elasticsearch-plain colored", bgColor: "bg-yellow-50 hover:bg-yellow-100" },

    Kafka: { icon: "devicon-apachekafka-original colored", bgColor: "bg-gray-100 hover:bg-gray-200" },
    RabbitMQ: { icon: "devicon-rabbitmq-original colored", bgColor: "bg-amber-50 hover:bg-amber-100" },

    JUnit: { icon: "devicon-junit-plain colored", bgColor: "bg-green-50 hover:bg-green-100" },
    Mockito: { icon: "devicon-java-plain colored", bgColor: "bg-red-50 hover:bg-red-100" },
    SonarQube: { icon: "devicon-sonarqube-original colored", bgColor: "bg-cyan-50 hover:bg-cyan-100" },

    Git: { icon: "devicon-git-plain colored", bgColor: "bg-orange-50 hover:bg-orange-100" },
    Maven: { icon: "devicon-apachemaven-original colored", bgColor: "bg-red-50 hover:bg-red-100" },
    Gradle: { icon: "devicon-gradle-plain colored", bgColor: "bg-green-50 hover:bg-green-100" },
    Postman: { icon: "devicon-postman-plain colored", bgColor: "bg-orange-50 hover:bg-orange-100" },
    Swagger: { icon: "devicon-swagger-plain colored", bgColor: "bg-green-50 hover:bg-green-100" },

    Agile: { icon: "devicon-devicon-plain", bgColor: "bg-blue-50 hover:bg-blue-100" },
    Scrum: { icon: "devicon-devicon-plain", bgColor: "bg-purple-50 hover:bg-purple-100" },
  };

  const skills = {
    Lenguajes: ["Java", "SQL"],
    Frameworks: ["Spring Boot", "Spring Framework", "Spring Security"],
    Bases_de_datos: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "Oracle"],
    DevOps: ["CI/CD", "Docker", "Jenkins", "Kubernetes", "Azure DevOps"],
    Observabilidad: ["Prometheus", "Dynatrace", "Grafana", "Elasticsearch"],
    Mensajería: ["Kafka", "RabbitMQ"],
    Testing_y_Calidad: ["JUnit", "Mockito", "SonarQube"],
    Herramientas: ["Git", "Maven", "Gradle", "Postman", "Swagger"],
    Metodologías: ["Agile", "Scrum"],
  };

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", institution: "IT College", year: "2023" },
    { name: "DevOps Essentials Professional Certificate - DEPC", institution: "CertiProf", year: "2021" },
    { name: "Scrum Master Professional Certificate - SMPC", institution: "CertiProf", year: "2021" },
    { name: "Google Cloud Fundamentals: Core Infrastructure", institution: "Google Cloud / Coursera", year: "2021" },
    { name: "Microsoft Azure Fundamentals", institution: "CertiProf", year: "2020" },
  ];

  const education = [{ degree: "Ingeniería en Informática", school: "DUOC UC", year: "2017" }];

  return (
    <section id="about" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre Mí</h2>

      {/* About + Quick Summary */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-3">
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            Ingeniero de Software Backend con más de 10 años de experiencia en el sector
            tecnológico, y con una trayectoria de 5 
          </p>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            Especialista en arquitecturas escalables y desarrollo de APIs REST con Java, Spring Boot
            y Spring Framework, con énfasis en calidad de código, rendimiento y resiliencia.
          </p>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            Experiencia en sistemas de alta criticidad, incidentes productivos, optimización continua,
            CI/CD y entornos contenerizados con Docker y Kubernetes.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h3 className="text-base font-semibold text-slate-900 mb-2">Quick summary</h3>
          <ul className="text-slate-700 space-y-1">
            <li>• Microservicios con Spring Boot</li>
            <li>• Clean Architecture y buenas prácticas</li>
            <li>• Sistemas financieros de alta criticidad</li>
            <li>• CI/CD, Docker y Kubernetes</li>
            <li>• APIs RESTful y SOAP</li>
            <li>• Testing automatizado (JUnit, Mockito)</li>
            <li>• Resolución de incidentes productivos</li>
            <li>• Trabajo colaborativo en equipos ágiles (Scrum)</li>
          </ul>
        </div>
      </div>

      {/* Experiencia */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Experiencia</h3>

        {experience.map((exp, index) => (
          <div key={index} className="border-l-4 border-emerald-500 pl-5 py-3 mb-4">
            <h4 className="text-lg md:text-xl font-semibold text-slate-900">{exp.title}</h4>
            <p className="text-slate-600 text-sm md:text-base">
              {exp.company} · {exp.period}
            </p>

            <ul className="mt-2 space-y-1 text-slate-600 list-disc pl-5">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certificaciones */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Certificaciones</h3>

        <div className="grid md:grid-cols-2 gap-3">
          {certifications.map((c, i) => (
            <div key={i} className="bg-white border p-5 rounded-xl">
              <h4 className="font-semibold text-slate-900">{c.name}</h4>
              <p className="text-slate-700">{c.institution}</p>
              <p className="text-sm text-slate-500">{c.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Educación */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Educación</h3>

        {education.map((edu, i) => (
          <div key={i} className="bg-white border p-5 rounded-xl mb-3">
            <h4 className="font-semibold text-slate-900">{edu.degree}</h4>
            <p className="text-slate-700">{edu.school}</p>
            <p className="text-sm text-slate-500">{edu.year}</p>
          </div>
        ))}
      </div>

      {/* Habilidades */}
      <div className="mb-2">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Habilidades Técnicas</h3>

        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-50 p-5 rounded-xl">
              <h4 className="font-semibold mb-3 text-slate-900">
                {category.replaceAll("_", " ")}
              </h4>

              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => {
                  const techData = techIcons[item];
                  if (techData) {
                    return (
                      <button
                        key={i}
                        className={`
                          inline-flex items-center gap-2 px-3 py-1.5
                          rounded-xl border border-slate-200
                          transition-all duration-200 ease-out
                          hover:shadow-md hover:-translate-y-0.5 active:scale-95
                          ${techData.bgColor}
                        `}
                        title={item}
                      >
                        <i className={`${techData.icon} text-xl`}></i>
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                      </button>
                    );
                  }

                  return (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border rounded-lg text-sm"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
