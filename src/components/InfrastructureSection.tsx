
import React from 'react';
import { Computer, Settings, BookOpen, Users, MapPin, Wifi } from 'lucide-react';

const InfrastructureSection = () => {
  const facilities = [
    {
      id: 1,
      title: 'Modern Computer Labs',
      description: 'State-of-the-art computer laboratories with latest hardware and software for comprehensive learning.',
      image: '/lovable-uploads/lovable-uploads/departments/computer.png',
      icon: Computer,
      features: ['Latest Hardware', 'High-Speed Internet', 'Modern Software', '24/7 Access']
    },
    {
      id: 2,
      title: 'Advanced CNC Machines',
      description: 'Industry-standard CNC machines and manufacturing equipment for hands-on technical training.',
      image: '/lovable-uploads/37c7b740-9152-4c97-86c6-ccaccb19dd7b.png',
      icon: Settings,
      features: ['CNC Machines', 'UTM Equipment', 'Manufacturing Tools', 'Industry Standards']
    },
    {
      id: 3,
      title: 'Comprehensive Libraries',
      description: 'Well-stocked libraries with extensive technical books, journals, and digital resources.',
      image: '/lovable-uploads/44372ccd-82f5-441a-a28c-5b02e618c2de.png',
      icon: BookOpen,
      features: ['Technical Books', 'Digital Library', 'Research Journals', 'Study Spaces']
    },
    {
      id: 4,
      title: 'Surveying Equipment',
      description: 'Professional surveying instruments and tools for civil engineering practical training.',
      image: '/lovable-uploads/f6d9ac03-2001-4e93-b085-cc2ba55dacf5.png',
      icon: MapPin,
      features: ['Total Stations', 'Theodolites', 'GPS Equipment', 'Field Training']
    },
    {
      id: 5,
      title: 'Mechanical Workshop',
      description: 'Fully equipped mechanical workshop with latest tools and machinery for practical learning.',
      image: '/lovable-uploads/ba3c4e6b-8808-48a1-a084-cd2fcfce6a09.png',
      icon: Settings,
      features: ['Modern Machinery', 'Safety Equipment', 'Tool Room', 'Project Work']
    },
    {
      id: 6,
      title: 'Spacious Campus',
      description: 'Beautiful and spacious campus providing an ideal environment for learning and growth.',
      image: '/lovable-uploads/ca820679-5f37-43f3-9650-1c0d5dc02627.png',
      icon: Users,
      features: ['Green Campus', 'Sports Facilities', 'Hostels', 'Transport']
    }
  ];

  return (
    <section id="infrastructure" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Modern facilities and equipment to provide the best technical education experience
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={facility.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {facility.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {facility.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3">
                    {facility.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Infrastructure Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Infrastructure at a Glance
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Computer className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Modern Labs</div>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">100+</div>
              <div className="text-gray-600">Equipment</div>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">25K+</div>
              <div className="text-gray-600">Books</div>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Wifi className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-gray-600">Wi-Fi Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
