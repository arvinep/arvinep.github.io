
import React from 'react';

const LanguagesSection = () => {
  const languages = [
    { name: 'English', level: 'Bilingual' }
  ];

  return (
    <section className="py-24 gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Languages</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <div key={language.name} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">{language.name}</h3>
              <p className="text-gray-600 font-medium">{language.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
