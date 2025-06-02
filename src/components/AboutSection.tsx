
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">About</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 shadow-sm hover:shadow-md transition-all duration-300">
            <p className="text-xl text-gray-700 leading-relaxed text-left font-light">
            Arvin is a Senior DevOps Engineer specializing in AWS cloud infrastructure, Kubernetes orchestration, and CI/CD automation. He designs and manages scalable EKS clusters, builds custom Helm charts, and streamlines deployments using ArgoCD, Jenkins, and GitHub Actions. Arvin leverages Terraform and Docker to automate infrastructure and modernize monolithic applications into containerized microservices. He also implements end-to-end observability and monitoring with Prometheus and Grafana, centralized logging with Fluentd, and develops custom scripts to support seamless database migrations and rollbacks. His focus is on delivering secure, scalable, and production-ready DevOps solutions that accelerate development cycles and improve system reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
