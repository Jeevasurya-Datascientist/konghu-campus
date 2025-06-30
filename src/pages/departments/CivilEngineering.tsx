
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building, Hammer, Ruler, HardHat, MapPin, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CivilEngineering = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      name: "Dr. Suresh Kumar",
      designation: "Head of Department",
      qualification: "Ph.D in Civil Engineering",
      experience: "18 years",
      image: "/ovable-uploads/departments/civil.png"
    },
    {
      name: "Prof. Meera Nair",
      designation: "Associate Professor",
      qualification: "M.Tech in Structural Engineering",
      experience: "14 years",
      image: "/ovable-uploads/departments/civil.png"
    },
    {
      name: "Mr. Karthik Reddy",
      designation: "Assistant Professor",
      qualification: "M.E in Civil Engineering",
      experience: "10 years",
      image: "/ovable-uploads/departments/civil.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-100 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Building className="absolute top-20 left-10 h-8 w-8 text-gray-400 opacity-30 animate-bounce" 
                  style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <Hammer className="absolute top-40 right-20 h-10 w-10 text-stone-500 opacity-25 animate-float" 
                 style={{ animationDelay: '1s' }} />
        <Ruler className="absolute bottom-40 left-20 h-6 w-6 text-gray-600 opacity-40 animate-pulse" 
              style={{ animationDelay: '2s' }} />
        <HardHat className="absolute bottom-60 right-10 h-7 w-7 text-orange-600 opacity-35 animate-bounce" 
                  style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
        <MapPin className="absolute top-60 right-40 h-9 w-9 text-red-500 opacity-30 animate-float" 
             style={{ animationDelay: '0.5s' }} />
        <Calculator className="absolute top-80 left-40 h-8 w-8 text-blue-300 opacity-25 animate-pulse" 
               style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-4 hover:bg-gray-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Civil Engineering</h1>
              <p className="text-gray-600 text-lg">Building the Future Infrastructure</p>
            </div>
          </div>

          {/* Department Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Department</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Civil Engineering is perhaps the broadest of all the Engineering fields, for it deals with large buildings, 
                  roads, bridges, canals, rail road lines, airports, water supply systems, dams, irrigation, harbours, tunnels, 
                  and other Engineered constructions. Our department focuses on sustainable construction and modern infrastructure development.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-600">150</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">92%</div>
                    <div className="text-gray-600">Placement Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/3156b9ab-cff6-4044-ab99-a6f46f01eec6.png" 
                  alt="Civil Engineering Lab"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Faculty Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Faculty</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {facultyMembers.map((faculty, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{faculty.name}</h3>
                  <p className="text-gray-600 font-medium mb-1">{faculty.designation}</p>
                  <p className="text-gray-600 text-sm mb-1">{faculty.qualification}</p>
                  <p className="text-gray-500 text-sm">{faculty.experience} Experience</p>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum & Labs */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Subjects</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span>Engineering Mechanics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span>Structural Analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span>Concrete Technology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span>Surveying & Levelling</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                  <span>Construction Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Concrete Testing Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Surveying Equipment Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Soil Mechanics Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Highway Engineering Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>CAD Lab</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CivilEngineering;
