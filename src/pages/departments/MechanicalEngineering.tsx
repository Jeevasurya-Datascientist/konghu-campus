
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cog, Wrench, Gauge, Zap, Settings, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MechanicalEngineering = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      name: "Dr. Ramesh Babu",
      designation: "Head of Department",
      qualification: "Ph.D in Mechanical Engineering",
      experience: "20 years",
      image: "/lovable-uploads/87274ead-3670-4b43-91fe-3dc4e1ff893a.png"
    },
    {
      name: "Prof. Lakshmi Devi",
      designation: "Associate Professor",
      qualification: "M.Tech in Production Engineering",
      experience: "16 years",
      image: "/lovable-uploads/87274ead-3670-4b43-91fe-3dc4e1ff893a.png"
    },
    {
      name: "Mr. Vijay Kumar",
      designation: "Assistant Professor",
      qualification: "M.E in Mechanical Engineering",
      experience: "12 years",
      image: "/lovable-uploads/87274ead-3670-4b43-91fe-3dc4e1ff893a.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cog className="absolute top-20 left-10 h-8 w-8 text-indigo-400 opacity-30 animate-spin" 
              style={{ animationDuration: '4s' }} />
        <Wrench className="absolute top-40 right-20 h-10 w-10 text-blue-500 opacity-25 animate-bounce" 
               style={{ animationDelay: '1s' }} />
        <Gauge className="absolute bottom-40 left-20 h-6 w-6 text-indigo-600 opacity-40 animate-pulse" 
              style={{ animationDelay: '2s' }} />
        <Settings className="absolute bottom-60 right-10 h-7 w-7 text-blue-600 opacity-35 animate-spin" 
                  style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
        <Zap className="absolute top-60 right-40 h-9 w-9 text-yellow-500 opacity-30 animate-bounce" 
             style={{ animationDelay: '0.5s' }} />
        <Cpu className="absolute top-80 left-40 h-8 w-8 text-indigo-300 opacity-25 animate-pulse" 
             style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-4 hover:bg-blue-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-indigo-900 mb-4">Mechanical Engineering</h1>
              <p className="text-gray-600 text-lg">Innovation in Manufacturing & Design</p>
            </div>
          </div>

          {/* Department Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Department</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Training with world class standards using latest equipment like UTM, CNC Machine, and advanced 
                  manufacturing technologies. Our department focuses on modern manufacturing processes, automation, 
                  and innovative design solutions for industrial applications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">140</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-gray-600">Placement Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/9b2c1b6c-9f84-4436-95d7-6eb87d6e78b2.png" 
                  alt="Mechanical Engineering Workshop"
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
                  <p className="text-indigo-600 font-medium mb-1">{faculty.designation}</p>
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
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span>Engineering Mechanics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span>Manufacturing Processes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span>Machine Design</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span>CNC Programming</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  <span>Industrial Automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>CNC Machine Shop</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Materials Testing Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Thermal Engineering Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>CAD/CAM Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Metrology Lab</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalEngineering;
