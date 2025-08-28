
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Self-employed, Stuttgart',
      period: 'Sep 2023 - Present',
      description: [
        "🗹 Provision and manage EKS clusters with auto-scaling",
        "🗹 Build custom Helm charts and use ArgoCD for automated Kubernetes deployments",
        "🗹 Develop CI/ CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline",
        "🗹 Automate AWS infra as code with Terraform modules and integrate with CI tools",
        "🗹 Containerize legacy monoliths into microservices using Docker",
        "🗹 Set up monitoring with Prometheus and Grafana; implement centralized logging with Fluentd / EFK",
        "🗹 Write scripts for database migrations, rollbacks, and deployments"
      ],
    },
    {
      title: 'Product Owner API Management',
      company: 'Porsche AG, Stuttgart',
      period: 'Oct 2020 - Aug 2023',
      description: [
        "🗹 Owned API roadmap and defined cross-team strategy",
        "🗹 Led backlog grooming, requirements gathering, and stakeholder alignment",
        "🗹 Enforced API governance, versioning, and security standards",
        "🗹 Collaborated with developers and business stakeholders across teams"
      ],
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Porsche AG, Stuttgart',
      period: 'Jul 2018 - Oct 2020',
      description: [
        "🗹 Guided cross-functional teams on AWS adoption and best practices",
        "🗹 Designed secure, scalable AWS architectures across multiple business units",
        "🗹 Led cloud migrations with minimal downtime and strong strategic alignment",
        "🗹 Built Infra as code using Terraform and CloudFormation ",
        "🗹 Containerized apps with Docker and orchestrated microservices on ECS & Kubernetes",
        "🗹 Automated CI / CD with Jenkins, GitHub Actions, and AWS CodePipeline",
        "🗹 Ensured cloud security and compliance with IAM, encryption, and network policies",
        "🗹 Improved performance and cost - efficiency by optimizing cloud workloads"
      ],
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Locafox GmbH, Berlin',
      period: 'Dec 2016 - Jun 2018',
      description: [
        "🗹 Led full migration from on-prem to AWS with a container-based, cloud-native architecture",
        "🗹 Implemented container as a service using Docker and Docker Swarm",
        "🗹 Built and maintained Infra as code with custom Terraform modules",
        "🗹 Developed CI/ CD pipelines in Jenkins(Jenkinsfile & DSL) for multi - env deployments",
        "🗹 Enabled canary, rolling, and blue / green deployments for microservices",
        "🗹 Containerized legacy J2EE apps running on Wildfly and using Keycloak",
        "🗹 Deployed HA MongoDB replica sets and upgraded Elasticsearch clusters in Docker"
      ],
    },
    {
      title: 'Site Reliability Engineer',
      company: 'Wayfair.com, Berlin',
      period: 'Jan 2016 - Dec 2016',
      description: [
        "🗹 Designed and deployed critical production systems with high availability and scalability",
        "🗹 Implemented HA and load balancing using HAProxy, Nginx, Varnish, and TwemProxy",
        "🗹 Managed caching layers(Redis, Memcached) and messaging systems(RabbitMQ, Kafka)",
        "🗹 Built distributed systems with Apache Storm, Zookeeper, and Pacemaker",
        "🗹 Automated tasks and orchestration with Celery, Jenkins, Foreman, Puppet, and Odin",
        "🗹 Set up centralized logging and monitoring using the ELK stack(Elasticsearch, Logstash, Kibana)"
      ],
    },
    {
      title: 'Linux and VMware Engineer',
      company: 'ZTE Corporation, Düsseldorf',
      period: 'May 2015 - Dec 2015',
      description: [
        "🗹 Deployed Puppet to automate and orchestrate Linux infrastructure",
        "🗹 Managed VMware vSphere 5.5 environments across multiple datacenters and clusters",
        "🗹 Maintained IBM BladeCenter servers, Storwize v3700 storage, and SAN fabrics(Broadcom, Qlogic)",
        "🗹 Led Linux hardening and infrastructure security initiatives",
        "🗹 Automated system administration tasks using shell scripting",
        "🗹 Created and maintained evergreen documentation for servers and systems",
        "🗹 Set up a local YUM repository for centralized software and patch management",
        "🗹 Contributed to storage reconfiguration project to resolve performance bottlenecks",
        "🗹 Deployed SolarWinds Orion and Log & Event Manager for infrastructure monitoring",
        "🗹 Performed vulnerability assessments using OpenVAS"
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
