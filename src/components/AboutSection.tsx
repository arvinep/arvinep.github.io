
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
              Arvin is a Senior DevOps Engineer specializing in AWS, Kubernetes, and CI/CD tools like ArgoCD, Jenkins, and GitHub Actions to automate builds and deployments. He manages EKS clusters and creates Helm charts. Using Terraform, he builds infrastructure as code and leverages Docker to containerize apps. Proficient in CentOS and Ubuntu Linux, he sets up monitoring with Prometheus and Grafana, centralized logging with Fluentd/EFK, and scripts for database migrations and rollbacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
