
import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'Amazon Web Services (AWS)', level: 90 },
    { name: 'Kubernetes', level: 90 },
    { name: 'Terraform', level: 85 },
    { name: 'CI/CD Automation', level: 80 },
    { name: 'Docker', level: 75 },
    { name: 'Helm', level: 85 },
    { name: 'ArgoCD', level: 85 },
    { name: 'AWS EKS', level: 85 }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Top Skills</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-black">{skill.name}</h3>
                {/* <span className="text-sm text-gray-600 font-medium">{skill.level}%</span> */}
              </div>
              {/* <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-black to-gray-700 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                ></div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
