
import React from 'react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Payame Noor University',
      period: '2003 - 2009',
      description: 'Foundation in programming, databases, and system design. Active in coding competitions. Specialized in Information Systems.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Education</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">{edu.degree}</h3>
                <span className="text-sm text-gray-600 md:text-right font-medium bg-gray-50 px-3 py-1 rounded-full mt-2 md:mt-0">{edu.period}</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{edu.school}</h4>
              <p className="text-gray-700 leading-relaxed font-light">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
