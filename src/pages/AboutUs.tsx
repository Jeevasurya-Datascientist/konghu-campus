// src/pages/AboutUs.tsx

import React, { useRef, useEffect, ReactNode } from 'react';
import { Eye, Target, ShieldCheck, Facebook, Twitter, Linkedin, Code, Zap, Cpu, Wrench, Car, HardHat, Beaker } from 'lucide-react';

// A simple utility component for scroll animations
const AnimatedSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
      {children}
    </div>
  );
};


const AboutUs = () => {
  const management = [
    {
      name: 'K C Muthusamy',
      title: 'Founder & Chairman',
      image: '/lovable-uploads/K C Muthusamy_Chairman.png',
      description: 'A man of success and a wide-angled ideology, our Founder and Chairman is a leading personality known for his kindness and philanthropy. His far-sighted vision and progressive plans have laid a magnificent foundation for providing quality technical education to the youth.',
    },
    {
      name: 'N Viswanathan',
      title: 'Principal',
      image: '/lovable-uploads/N Viswanathan_Principal.jpg',
      description: 'An exemplary academician, our Principal has motivated countless students to pursue successful careers in MNCs and abroad. He has established an excellent rapport among the alumni, fostering a strong and supportive community.',
    },
  ];
  
  const departments = [
    { name: 'Computer Engineering', icon: <Code className="h-8 w-8 text-blue-600" /> },
    { name: 'Electrical & Electronics Engineering', icon: <Zap className="h-8 w-8 text-blue-600" /> },
    { name: 'Electronics & Communication Engineering', icon: <Cpu className="h-8 w-8 text-blue-600" /> },
    { name: 'Automobile Engineering', icon: <Car className="h-8 w-8 text-blue-600" /> },
    { name: 'Mechanical Engineering', icon: <Wrench className="h-8 w-8 text-blue-600" /> },
    { name: 'Petrochemical Engineering', icon: <Beaker className="h-8 w-8 text-blue-600" /> },
    { name: 'Civil Engineering', icon: <HardHat className="h-8 w-8 text-blue-600" /> },
  ];

  return (
    <div className="bg-gray-50">
      {/* --- Hero Banner --- */}
      <section className="relative bg-blue-900 text-white py-24 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{ backgroundImage: "url('/lovable-uploads/Main block.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">About Our College</h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Discover our history, mission, and the values that drive our commitment to excellence in education.
          </p>
        </div>
      </section>

      {/* --- About College Section --- */}
      <section className="py-16 md:py-24">
        <AnimatedSection>
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img src="/lovable-uploads/kvpc logo 1.png" alt="KVPC Logo" className="w-48 h-48 md:w-60 md:h-60" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 tracking-tight">
                Konghu Velalar Polytechnic College
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Established in 2007 by the Sree Kongunadu Educational Trust, our college is a private, self-financing, co-educational institution affiliated with AICTE and DOTE. As an ISO 9001:2008 certified college, our prime motto is to provide students with exceptional technical knowledge and practical orientation. We encourage active participation in club activities, social services, and sports, fostering well-rounded individuals. We are proud of our dedicated faculty who instill discipline and a strong work ethic in our students.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* --- Vision, Mission, Quality Section --- */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <AnimatedSection>
              <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center items-center mb-4 bg-blue-100 rounded-full h-16 w-16 mx-auto">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Vision</h3>
                <p className="text-gray-600">To develop an institution of world repute to impart professional education of the highest standards.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                 <div className="flex justify-center items-center mb-4 bg-blue-100 rounded-full h-16 w-16 mx-auto">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Mission</h3>
                <p className="text-gray-600">To produce world-class professionals with sound technical knowledge, human values, professional ethics, and creativity for the sustainable growth of the nation.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                 <div className="flex justify-center items-center mb-4 bg-blue-100 rounded-full h-16 w-16 mx-auto">
                  <ShieldCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quality Policy</h3>
                <p className="text-gray-600">To achieve eminence in technical programs and meet changing industrial needs. We adapt to global challenges and foster an environment of new thoughts and innovations.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* --- Management Section --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">Our Management</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
            {management.map((person) => (
              <AnimatedSection key={person.name}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center max-w-sm">
                  <img src={person.image} alt={person.name} className="w-full h-80 object-cover object-top" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-900">{person.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-3">{person.title}</p>
                    <p className="text-gray-600 mb-4">{person.description}</p>
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors"><Facebook /></a>
                      <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Twitter /></a>
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin /></a>
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
              <img src="/lovable-uploads/Campus 2.jpg" alt="KVPC Campus" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
            </AnimatedSection>
            <AnimatedSection>
              <div className="space-y-4">
                {departments.map(dept => (
                  <div key={dept.name} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-white transition-all duration-300">
                    <div className="flex-shrink-0 mr-4">
                      {dept.icon}
                    </div>
                    <p className="text-lg font-medium text-gray-800">{dept.name}</p>
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