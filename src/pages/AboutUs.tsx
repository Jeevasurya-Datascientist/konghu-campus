// src/pages/AboutUs.tsx (Recommended Version)

import React, { useRef, useEffect, PropsWithChildren, ReactNode } from 'react';
import { Eye, Target, ShieldCheck, Facebook, Twitter, Linkedin, Code, Zap, Cpu, Wrench, Car, HardHat, Beaker } from 'lucide-react';

// A simple utility component for scroll animations
const AnimatedSection = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) { observer.unobserve(ref.current); } };
  }, []);

  return (
    <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">
      {children}
    </div>
  );
};

// Reusable card component for Vision/Mission
const InfoCard = ({ icon, title, children }: { icon: ReactNode, title: string, children: ReactNode }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center h-full">
    <div className="flex justify-center items-center mb-5 bg-blue-100 rounded-full h-20 w-20 mx-auto">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-blue-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

const AboutUs = () => {
  const management = [
    {
      name: 'K C Muthusamy',
      title: 'Founder & Chairman',
      image: '/lovable-uploads/K C Muthusamy_Chairman.png',
      description: 'A man of success and a wide-angled ideology, our Founder and Chairman is a leading personality known for his kindness and philanthropy.',
    },
    {
      name: 'N Viswanathan',
      title: 'Principal',
      image: '/lovable-uploads/N Viswanathan_Principal.jpg',
      description: 'An exemplary academician, our Principal has motivated countless students to pursue successful careers in MNCs and abroad.',
    },
  ];
  
  const departments = [
    { name: 'Computer Engineering', icon: <Code className="h-8 w-8 text-blue-600" /> },
    { name: 'Electrical & Electronics', icon: <Zap className="h-8 w-8 text-blue-600" /> },
    { name: 'Electronics & Communication', icon: <Cpu className="h-8 w-8 text-blue-600" /> },
    { name: 'Automobile Engineering', icon: <Car className="h-8 w-8 text-blue-600" /> },
    { name: 'Mechanical Engineering', icon: <Wrench className="h-8 w-8 text-blue-600" /> },
    { name: 'Petrochemical Engineering', icon: <Beaker className="h-8 w-8 text-blue-600" /> },
    { name: 'Civil Engineering', icon: <HardHat className="h-8 w-8 text-blue-600" /> },
  ];

  return (
    <div className="bg-gray-50">
      {/* --- Hero Banner --- */}
      <section className="relative bg-blue-900 text-white py-28 md:py-36">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{ backgroundImage: "url('/lovable-uploads/Main block.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">About Our College</h1>
            <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
              Discover our history, mission, and the values that drive our commitment to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* --- About College Section --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-shrink-0">
                <img src="/lovable-uploads/kvpc logo 1.png" alt="KVPC Logo" className="w-40 h-40 md:w-52 md:h-52" />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 tracking-tight">
                  Konghu Velalar Polytechnic College
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl">
                  Established in 2007, KVPC is a premier self-financing institution approved by AICTE & DOTE. Our ISO 9001:2008 certified college is dedicated to imparting exceptional technical knowledge and practical skills. We foster holistic development through active participation in clubs, social services, and sports, preparing students to be disciplined, dedicated, and highly competent professionals.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* --- Vision, Mission, Quality Section --- */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection><InfoCard icon={<Eye className="h-10 w-10 text-blue-600" />} title="Our Vision">To evolve into a globally renowned institution, imparting professional education of the highest standards.</InfoCard></AnimatedSection>
            <AnimatedSection><InfoCard icon={<Target className="h-10 w-10 text-blue-600" />} title="Our Mission">To produce world-class professionals equipped with sound technical knowledge, strong human values, and a creative mindset.</InfoCard></AnimatedSection>
            <AnimatedSection><InfoCard icon={<ShieldCheck className="h-10 w-10 text-blue-600" />} title="Quality Policy">To achieve eminence in technical education by adapting to global challenges and fostering an environment of innovation.</InfoCard></AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* --- Management Section --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">Our Inspiring Leaders</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
            {management.map((person) => (
              <AnimatedSection key={person.name}>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden text-center max-w-sm w-full group">
                  <div className="overflow-hidden">
                    <img src={person.image} alt={person.name} className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 border-t-4 border-yellow-500">
                    <h3 className="text-2xl font-bold text-blue-900">{person.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{person.title}</p>
                    <p className="text-gray-600 text-sm mb-4">{person.description}</p>
                    <div className="flex justify-center space-x-4">
                      <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-700 transition-colors"><Facebook /></a>
                      <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-500 transition-colors"><Twitter /></a>
                      <a href="#" aria-label="Linkedin" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin /></a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- Courses Offered Section --- */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">Programmes Offered</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img src="/lovable-uploads/Campus 2.jpg" alt="KVPC Campus" className="rounded-xl shadow-2xl w-full h-full object-cover"/>
            </AnimatedSection>
            <AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departments.map(dept => (
                  <div key={dept.name} className="flex items-center p-4 bg-gray-50 rounded-lg border-2 border-transparent hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="flex-shrink-0 mr-4 text-blue-600">{dept.icon}</div>
                    <p className="font-semibold text-gray-800">{dept.name}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;