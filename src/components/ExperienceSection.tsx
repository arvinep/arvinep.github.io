
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Self-employed, Stuttgart',
      period: 'Sep 2023 - Present',
      description: [
        "🗹 Provision and manage Amazon EKS clusters with auto - scaling and resource limits",
        "🗹 Create custom Helm charts for deployments and rolling updates",
        "🗹 Develop ArgoCD workflows to automate continuous delivery in Kubernetes",
        "🗹 Build complete DevOps and DevSecOps CI / CD pipelines to automate and secure app deployments across dev, staging, and production",
        "🗹 Automate AWS infra provisioning using custom Terraform modules integrated with Jenkins, GitHub Actions, and AWS CodePipeline",
        "🗹 Containerize legacy monoliths into microservices using Docker",
        "🗹 Set up monitoring with Prometheus and Grafana; implement centralized logging with Fluentd",
        "🗹 Write custom scripts for database migrations, rollbacks, and deployment automation"
      ],
    },
    {
      title: 'Product Owner API Management',
      company: 'Porsche AG, Stuttgart',
      period: 'Oct 2020 - Aug 2023',
      description: [
        "🗹 Owned API product roadmap and defined strategic vision across teams",
        "🗹 Led backlog refinement, requirement gathering, and stakeholder alignment",
        "🗹 Ensured API governance, versioning, and secure design standards",
        "🗹 Collaborated cross-functionally with developers and business teams"
      ],
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Porsche AG, Stuttgart',
      period: 'Jul 2018 - Oct 2020',
      description: [
        "🗹 Acted as a cloud solutions coach, guiding cross-functional development teams across various portfolios on AWS adoption and best practices.",
        "🗹 Designed and implemented secure, scalable AWS cloud architectures for enterprise applications across multiple business units.",
        "🗹 Led cloud migration initiatives, developing strategies and best practices to transition legacy workloads to AWS with minimal downtime.",
        "🗹 Built and maintained Infrastructure as Code using Terraform and CloudFormation, enabling repeatable and version-controlled infrastructure deployments.",
        "🗹 Containerized applications using Docker and orchestrated workloads on Kubernetes to support microservices and serverless architectures.",
        "🗹 Developed and automated CI/CD pipelines using Jenkins, AWS CodePipeline, and GitHub Actions to accelerate development cycles and enforce DevSecOps practices.",
        "🗹 Ensured cloud infrastructure met enterprise security and compliance standards through IAM policies, encryption, and secure networking.",
        "🗹 Optimized system performance and cost-efficiency by monitoring resource utilization and refactoring underperforming services."
      ],
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Locafox GmbH, Berlin',
      period: 'Dec 2016 - Jun 2018',
      description: ["🗹 Led the full migration of on-prem infrastructure to AWS, transitioning to a cloud-native, container-based architecture.",
        "🗹 Implemented CaaS (Container as a Service) using Docker and Docker Swarm, enabling scalable, self-healing environments on ephemeral instances.",
        "🗹 Designed and maintained Infrastructure as Code using custom Terraform modules.",
        "🗹 Developed CI/CD pipelines with Jenkins (using Jenkinsfile and DSL jobs) to automate deployments across staging, demo, and production environments.",
        "🗹 Enabled progressive delivery through automated canary and rolling deployments for microservices.",
        "🗹 Built infrastructure blue/green deployment pipelines for zero-downtime releases.",
        "🗹 Deployed high-availability MongoDB replica sets using Docker, ensuring data redundancy and fault tolerance.",
        "🗹 Containerized legacy J2EE applications and web services, including Wildfly 10, Keycloak 2.5, and mod_cluster, to run efficiently in Docker environments.",
        "🗹 Upgraded Elasticsearch clusters from version 2.4 to 5.4 and deployed them in Docker containers for improved scalability and maintainability.",
      ],
    },
    {
      title: 'Site Reliability Engineer',
      company: 'Wayfair, Berlin',
      period: 'Jan 2016 - Dec 2016',
      description: [
        "🗹 Production Systems Architect, design and deploy critical production systems ",
        "🗹 Production Systems Design & Deployment",
        "🗹 High Availability (HA) & Load Balancing (HAProxy, Nginx, Varnish, TwemProxy)",
        "🗹 Caching & Data Storage (Redis, Memcached)",
        "🗹 Messaging & Event Streaming (RabbitMQ, Kafka)",
        "🗹 Distributed Computing & Coordination (Apache Storm, Zookeeper, Pacemaker)",
        "🗹 Task Automation & Orchestration (Celery, Jenkins, Odin, Foreman, Puppet)",
        "🗹 Log Management & Monitoring (ELK Stack – Elasticsearch, Logstash, Kibana)"
      ],
    }
  ];

  const companyLogos = [
    {
      name: 'Porsche',
      logo: '/porsche_logo.svg',
      alt: 'Porsche AG'
    },
    {
      name: 'Wayfair',
      logo: '/wayfair_logo.svg',
      alt: 'Wayfair'
    },
    {
      name: 'T-Systems',
      logo: '/t-systems_logo.svg',
      alt: 'T-Systems'
    },
    {
      name: 'Locafox',
      logo: '/locafox_logo.png',
      alt: 'Locafox GmbH'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Experience</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>

        {/* Company Logos Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex justify-center items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-w-full max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">{exp.title}</h3>
                <span className="text-sm text-gray-600 md:text-right font-medium bg-white px-3 py-1 rounded-full mt-2 md:mt-0">{exp.period}</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{exp.company}</h4>
              <ul className="text-gray-700 leading-relaxed font-light">{exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
