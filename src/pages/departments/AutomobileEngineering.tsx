
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Car, Wrench, Fuel, Gauge, Zap, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AutomobileEngineering = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      name: "Dr. Kiran Kumar",
      designation: "Head of Department",
      qualification: "Ph.D in Automobile Engineering",
      experience: "17 years",
      image: "/lovable-uploads/N Viswanathan_Principal.jpg"
    },
    {
      name: "Prof. Anitha Rao",
      designation: "Associate Professor",
      qualification: "M.Tech in Automotive Engineering",
      experience: "13 years",
      image: "/lovable-uploads/N Viswanathan_Principal.jpg"
    },
    {
      name: "Mr. Sanjay Reddy",
      designation: "Assistant Professor",
      qualification: "M.E in Automobile Engineering",
      experience: "9 years",
      image: "/lovable-uploads/N Viswanathan_Principal.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Car className="absolute top-20 left-10 h-8 w-8 text-red-400 opacity-30 animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <Wrench className="absolute top-40 right-20 h-10 w-10 text-orange-500 opacity-25 animate-float" 
               style={{ animationDelay: '1s' }} />
        <Fuel className="absolute bottom-40 left-20 h-6 w-6 text-red-600 opacity-40 animate-pulse" 
              style={{ animationDelay: '2s' }} />
        <Gauge className="absolute bottom-60 right-10 h-7 w-7 text-orange-600 opacity-35 animate-bounce" 
               style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
        <Zap className="absolute top-60 right-40 h-9 w-9 text-yellow-500 opacity-30 animate-float" 
             style={{ animationDelay: '0.5s' }} />
        <Settings className="absolute top-80 left-40 h-8 w-8 text-red-300 opacity-25 animate-spin" 
                  style={{ animationDelay: '2.5s', animationDuration: '3s' }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-4 hover:bg-red-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-red-900 mb-4">Automobile Engineering</h1>
              <p className="text-gray-600 text-lg">Future of Automotive Technology</p>
            </div>
          </div>

          {/* Department Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Department</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Training students with world class standards of design, automation, aesthetics and ergonomics 
                  using latest equipment like UTM, CNC Machine, and advanced software. Our department focuses on 
                  electric vehicles, hybrid technology, and sustainable automotive solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">110</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">93%</div>
                    <div className="text-gray-600">Placement Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/8a746098-32b6-4804-bc18-7d05144d63c5.png" 
                  alt="Automobile Workshop"
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
                  <p className="text-red-600 font-medium mb-1">{faculty.designation}</p>
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
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Engine Technology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Vehicle Dynamics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Automotive Electronics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Transmission Systems</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Electric Vehicle Technology</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Engine Testing Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Vehicle Maintenance Workshop</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Automotive Electronics Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Transmission Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>EV Technology Lab</span>
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

export default AutomobileEngineering;
