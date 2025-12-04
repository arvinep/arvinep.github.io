
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
            <div className="text-xl text-gray-700 leading-relaxed font-light space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800">Cloud & Platforms</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>AWS (EKS, EC2, RDS, ALB/NLB, S3, VPC, IAM)</li>
                  <li>Kubernetes</li>
                  <li>Docker</li>
                  <li>Linux</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Infrastructure as Code</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Terraform (modular infra, multi-env pipelines)</li>
                  <li>Helm</li>
                  <li>Helmfile</li>
                  <li>Secrets management</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">CI/CD & Automation</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>GitHub Actions</li>
                  <li>ArgoCD</li>
                  <li>Jenkins</li>
                  <li>AWS CodePipeline</li>
                  <li>GitOps</li>
                  <li>Bash/Python scripting</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Identity, Security & Access Control</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Keycloak (K8s deployment, RDS backend, Terraform automation)</li>
                  <li>Azure AD federation, SSO</li>
                  <li>OAuth2/OIDC</li>
                  <li>RBAC</li>
                  <li>Traefik + OAuth2-Proxy forward-authentication chain</li>
                  <li>TLS automation (Traefik + Let's Encrypt + DNS provider APIs)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Monitoring & Observability</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Prometheus & VictoriaMetrics</li>
                  <li>Loki Logs + Grafana Dashboards</li>
                  <li>Tempo Traces</li>
                  <li>Mimir Metrics (LGTM stack)</li>
                  <li>Alertmanager</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Databases</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>PostgreSQL (operations, migrations, rollbacks)</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillMatrixSection;
