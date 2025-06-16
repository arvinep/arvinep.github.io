
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import DownloadCV from './DownloadCV';

const Navigation = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-black tracking-tight">
            Arvin EP
          </div>
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-gray-500 transition-all duration-300 font-medium text-sm uppercase tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-6">
{/*             <DownloadCV /> */}
            <a
              href="mailto:arvinep@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-500 transition-all duration-300 p-2 hover:bg-gray-50 rounded-full"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/arvinep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-500 transition-all duration-300 p-2 hover:bg-gray-50 rounded-full"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/arvinep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-500 transition-all duration-300 p-2 hover:bg-gray-50 rounded-full"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
