
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Get In Touch</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-12"></div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
            <a
              href="mailto:arvinep@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white hover:text-gray-300 transition-all duration-300 p-4 hover:bg-white/10 rounded-xl group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/arvinep"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white hover:text-gray-300 transition-all duration-300 p-4 hover:bg-white/10 rounded-xl group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden md:inline">linkedin.com/in/arvinep</span>
            </a>
            <a
              href="https://github.com/arvinep"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white hover:text-gray-300 transition-all duration-300 p-4 hover:bg-white/10 rounded-xl group"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden md:inline">github.com/arvinep</span>
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm font-light">
              © 2025 Arvin Ebrahimpour. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
