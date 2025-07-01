
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Microscope, TestTube, Activity, Stethoscope, Pill } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DMLT = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      name: "Dr. Priya Menon",
      designation: "Head of Department",
      qualification: "Ph.D in Medical Laboratory Technology",
      experience: "15 years",
      image: "/lovable-uploads/departments/dmlt.jpg"
    },
    {
      name: "Prof. Sita Ram",
      designation: "Associate Professor",
      qualification: "M.Sc in Clinical Biochemistry",
      experience: "12 years",
      image: "/lovable-uploads/departments/dmlt.jpg"
    },
    {
      name: "Ms. Kavitha Nair",
      designation: "Assistant Professor",
      qualification: "M.Sc in Medical Microbiology",
      experience: "8 years",
      image: "/lovable-uploads/departments/dmlt.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 h-8 w-8 text-pink-400 opacity-30 animate-pulse" 
              style={{ animationDelay: '0s', animationDuration: '2s' }} />
        <Microscope className="absolute top-40 right-20 h-10 w-10 text-rose-500 opacity-25 animate-bounce" 
                   style={{ animationDelay: '1s' }} />
        <TestTube className="absolute bottom-40 left-20 h-6 w-6 text-pink-600 opacity-40 animate-float" 
                  style={{ animationDelay: '2s' }} />
        <Activity className="absolute bottom-60 right-10 h-7 w-7 text-red-600 opacity-35 animate-pulse" 
                  style={{ animationDelay: '1.5s', animationDuration: '1.5s' }} />
        <Stethoscope className="absolute top-60 right-40 h-9 w-9 text-pink-500 opacity-30 animate-bounce" 
                     style={{ animationDelay: '0.5s' }} />
        <Pill className="absolute top-80 left-40 h-8 w-8 text-rose-300 opacity-25 animate-float" 
              style={{ animationDelay: '2.5s' }} />
        
        {/* Medical symbols */}
        <div className="absolute top-32 right-32 text-2xl text-red-400 opacity-20 animate-pulse" 
             style={{ animationDelay: '1s' }}>+</div>
        <div className="absolute bottom-32 left-32 text-xl text-pink-400 opacity-25 animate-bounce" 
             style={{ animationDelay: '2s' }}>⚕</div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-4 hover:bg-pink-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-pink-900 mb-4">
                Diploma in Medical Laboratory Technology (DMLT)
              </h1>
              <p className="text-gray-600 text-lg">Healthcare Excellence Through Precision</p>
            </div>
          </div>

          {/* Department Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Department</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Medical Laboratory Technology program training candidates to handle advanced lab equipment 
                  and perform accurate medical laboratory tests with practical training. Our department focuses 
                  on modern diagnostic techniques, quality control, and patient care through precise laboratory analysis.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">60</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-gray-600">Placement Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/dd4bbccf-4d4b-4f1b-8429-fe8f17c4dd5d.png" 
                  alt="Medical Lab"
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
                  <p className="text-pink-600 font-medium mb-1">{faculty.designation}</p>
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
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Clinical Biochemistry</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Hematology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Microbiology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Pathology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  <span>Immunology</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Clinical Biochemistry Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Hematology Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Microbiology Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Histopathology Lab</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Serology Lab</span>
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

export default DMLT;
