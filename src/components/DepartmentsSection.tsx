
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Computer, Building, Settings, Car, Beaker, Cpu, Zap, Cog, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DepartmentsSection = () => {
  const navigate = useNavigate();

  const departments = [
    {
      id: 1,
      name: 'Computer Engineering',
      slug: 'computer-engineering',
      icon: Computer,
      description: 'The department is committed to contribute significantly to Information Technology and continues to grow professionally with expertise and knowledge to compete with international levels of excellence.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      name: 'Civil Engineering',
      slug: 'civil-engineering',
      icon: Building,
      description: 'Civil Engineering is perhaps the broadest of all the Engineering fields, for it deals with large buildings, roads, bridges, canals, rail road lines, airports, water supply systems, dams, irrigation, harbours, tunnels, and other Engineered constructions.',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-600'
    },
    {
      id: 3,
      name: 'Petrochemical Engineering',
      slug: 'petrochemical-engineering',
      icon: Settings,
      description: 'India with excellent refining capacity ranks sixth in the world with public/private companies like Reliance, Essar, ONGC-MRPL, HPCL, BPCL, IOC etc. Huge opportunities in oil and gas industry.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 4,
      name: 'Automobile Engineering',
      slug: 'automobile-engineering',
      icon: Car,
      description: 'Training students with world class standards of design, automation, aesthetics and ergonomics using latest equipment like UTM, CNC Machine, and advanced software.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 5,
      name: 'Chemical Engineering',
      slug: 'chemical-engineering',
      icon: Beaker,
      description: 'Focused on chemical processes and manufacturing with modern laboratory facilities and industry connections.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 6,
      name: 'Electronics & Communication Engineering (ECE)',
      slug: 'ece',
      icon: Cpu,
      description: 'Electronic Engineering deals with research, design, integration and application of circuits and devices used in transmission and processing of information.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 7,
      name: 'Electrical & Electronics Engineering (EEE)',
      slug: 'eee',
      icon: Zap,
      description: 'Electrical Engineering covering power systems, electronics, and communication technologies.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      id: 8,
      name: 'Mechanical Engineering',
      slug: 'mechanical-engineering',
      icon: Cog,
      description: 'Training with world class standards using latest equipment like UTM, CNC Machine, and advanced manufacturing technologies.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 9,
      name: 'Diploma in Medical Laboratory Technology (DMLT)',
      slug: 'dmlt',
      icon: Heart,
      description: 'Medical Laboratory Technology program training candidates to handle advanced lab equipment and perform accurate medical laboratory tests with practical training.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      isNew: true
    }
  ];

  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Departments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive Technical Education Across 9 Specialized Departments
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={dept.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
              >
                {/* New Badge */}
                {dept.isNew && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-red-500 text-white font-bold animate-pulse">
                      NEW
                    </Badge>
                  </div>
                )}

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${dept.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${dept.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {dept.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                    {dept.description}
                  </p>

                  {/* Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${dept.color} hover:opacity-90 text-white font-semibold group relative overflow-hidden`}
                    onClick={() => navigate(`/departments/${dept.slug}`)}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-opacity-50 rounded-2xl transition-all duration-500 group-hover:border-current`} 
                     style={{ borderImage: `linear-gradient(135deg, ${dept.color.split(' ')[1]}, ${dept.color.split(' ')[3]}) 1` }}>
                </div>
              </div>
            );
          })}
        </div>

        {/* Department Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Department Excellence
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold text-blue-600">9</div>
              <div className="text-gray-600">Specialized Departments</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-green-600">150+</div>
              <div className="text-gray-600">Expert Faculty</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Modern Labs</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-orange-600">1000+</div>
              <div className="text-gray-600">Annual Graduates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
