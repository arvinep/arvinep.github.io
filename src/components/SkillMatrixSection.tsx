
import React from 'react';

const SkillMatrixSection = () => {
  return (
    <section id="skillmatrix" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Skill Matrix</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 shadow-sm hover:shadow-md transition-all duration-300">
            <p className="text-xl text-gray-700 leading-relaxed text-left font-light">
              Cloud & Platforms
● AWS (EKS, EC2, RDS, ALB/NLB, S3, VPC, IAM) • Kubernetes • Docker • Linux
Infrastructure as Code
● Terraform (modular infra, multi-env pipelines) • Helm • Helmfile • Secrets management
CI/CD & Automation
● GitHub Actions • ArgoCD • Jenkins • AWS CodePipeline • GitOps • Bash/Python scripting
Identity, Security & Access Control
● Keycloak (K8s deployment, RDS backend, Terraform automation) • Azure AD federation, SSO
• OAuth2/OIDC • RBAC • Traefik + OAuth2-Proxy forward-authentication chain • TLS
automation Traefik+Letsencrypt+DNS provider APIs
Monitoring & Observability:
● Prometheus & VictoriaMetrics • Loki Logs + Grafana Dashboards + Tempo Traces + Mimir
Metrics (LGTM stack) + Alertmanager
Databases

● PostgreSQL (operations, migrations, rollbacks) • MongoDB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillMatrixSection;
