
import React from 'react';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
// import SkillsSection from '../components/SkillsSection';
import SkillMatrixSection from '../components/SkillMatrixSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import CertificateSection from '../components/CertificateSection';
import LanguagesSection from '../components/LanguagesSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="animate-fade-in text-center lg:text-left">
              <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 tracking-tight leading-tight">
                Arvin Ebrahimpour
              </h1>
              <div className="w-24 h-1 bg-black mx-auto lg:mx-0 mb-8"></div>
              <p className="text-2xl md:text-3xl text-gray-600 mb-12 font-light">
                DevOps Engineer
                <br />
                Cloud & Kubernetes | CI/CD Automation
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light">
                Kubernetes. IAM. Automation. EKS, Keycloak, Terraform, Helm, Traefik. Production-ready by design.
              </p>
            </div>

            {/* Right side - Profile picture */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white relative">
                  <img
                    src="/profile.jpg"
                    alt="Arvin Ebrahimpour"
                    className="absolute top-[-40px] right-[-20px] scale-150 object-cover transition-transform duration-300 ease-in-out transform hover:scale-125"
                  />
                </div>
                {/* Decorative circle behind */}
                <div className="absolute -top-4 -right-4 w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full -z-10 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <SkillMatrixSection />
      <ExperienceSection />
      <EducationSection />
      <CertificateSection />
      <LanguagesSection />
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Index;
