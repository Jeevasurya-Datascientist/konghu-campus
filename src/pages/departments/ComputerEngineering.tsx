
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Computer, Monitor, Code, Database, Cpu, Cloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComputerEngineering = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Head of Department",
      qualification: "Ph.D in Computer Science",
      experience: "15 years",
      image: "/lovable-uploads/lovable-uploads/departments/computer.png"
    },
    {
      name: "Prof. Priya Sharma",
      designation: "Associate Professor",
      qualification: "M.Tech in Software Engineering",
      experience: "12 years",
      image: "/lovable-uploads/lovable-uploads/departments/computer.png"
    },
    {
      name: "Mr. Arun Krishnan",
      designation: "Assistant Professor",
      qualification: "M.E in Computer Science",
      experience: "8 years",
      image: "/lovable-uploads/lovable-uploads/departments/computer.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Computer className="absolute top-20 left-10 h-8 w-8 text-blue-400 opacity-30 animate-bounce" 
                  style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <Monitor className="absolute top-40 right-20 h-10 w-10 text-blue-500 opacity-25 animate-float" 
                 style={{ animationDelay: '1s' }} />
        <Code className="absolute bottom-40 left-20 h-6 w-6 text-indigo-400 opacity-40 animate-pulse" 
              style={{ animationDelay: '2s' }} />
        <Database className="absolute bottom-60 right-10 h-7 w-7 text-blue-600 opacity-35 animate-bounce" 
                  style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
        <Cpu className="absolute top-60 right-40 h-9 w-9 text-indigo-500 opacity-30 animate-float" 
             style={{ animationDelay: '0.5s' }} />
        <Cloud className="absolute top-80 left-40 h-8 w-8 text-blue-300 opacity-25 animate-pulse" 
               style={{ animationDelay: '2.5s' }} />
        
        {/* Binary code floating elements */}
        <div className="absolute top-32 right-32 text-2xl font-mono text-blue-400 opacity-20 animate-float" 
             style={{ animationDelay: '1s' }}>01</div>
        <div className="absolute bottom-32 left-32 text-xl font-mono text-indigo-400 opacity-25 animate-bounce" 
             style={{ animationDelay: '2s' }}>10</div>
        <div className="absolute top-72 left-72 text-lg font-mono text-blue-500 opacity-30 animate-pulse" 
             style={{ animationDelay: '0.5s' }}>X</div>
        <div className="absolute bottom-72 right-72 text-xl font-mono text-indigo-300 opacity-20 animate-float" 
             style={{ animationDelay: '1.5s' }}>O</div>
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
              <h1 className="text-4xl font-bold text-blue-900 mb-4">Computer Engineering</h1>
              <p className="text-gray-600 text-lg">Excellence in Information Technology Education</p>
            </div>
          </div>

          {/* Department Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Department</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The department is committed to contribute significantly to Information Technology and continues 
                  to grow professionally with expertise and knowledge to compete with international levels of excellence. 
                  We focus on practical learning and industry-ready skills development.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">120</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-gray-600">Placement Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/8e737f85-f2cf-4655-be31-7e112bafffef.png" 
                  alt="Computer Lab"
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
                  <p className="text-blue-600 font-medium mb-1">{faculty.designation}</p>
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
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Programming in C/C++</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Data Structures & Algorithms</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Database Management Systems</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Web Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Network Programming</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Advanced Computer Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Software Development Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Network & Hardware Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Project Development Center</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Internet & E-Learning Lab</span>
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

export default ComputerEngineering;
