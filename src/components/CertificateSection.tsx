
import React from 'react';

const CertificateSection = () => {
  const certificate = [
    {
      certificate: 'Certified SAFe® 5 Product Owner/Product Manager',
      description: 'Scaled Agile, Inc., Issued Oct 2021, Credential ID 94964776-1424'
    },
    {
      certificate: 'VMware Certified Professional 5 Data Center Virtualization',
      description: 'VMware, Issued Nov 2014, Credential ID 14890844-82F5-E09850642B6E'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Certificates</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        <div className="space-y-8 max-w-4xl mx-auto">
          {certificate.map((cert, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">{cert.certificate}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
