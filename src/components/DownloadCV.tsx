
import React from 'react';
import { Download } from 'lucide-react';

const DownloadCV = () => {
  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // You'll need to add your CV PDF to the public folder
    link.download = 'Arvin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-medium text-sm uppercase tracking-wide"
    >
      <Download size={16} />
      <span>Download CV</span>
    </button>
  );
};

export default DownloadCV;
