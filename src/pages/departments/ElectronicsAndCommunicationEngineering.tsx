import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RadioTower, Waves, Router, Satellite, Signal, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ElectronicsAndCommunicationEngineering = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      name: "Dr. Kavita Iyer",
      designation: "Head of Department",
      qualification: "Ph.D in Communication Systems",
      experience: "21 years",
      image: "/lovable-uploads/87274ead-3670-4b43-91fe-3dc4e1ff893a.png"
    },
    {
      name: "Prof. Rohan Patil",
      designation: "Professor",
      qualification: "M.Tech in Embedded Systems",
      experience: "16 years",
      image: "/lovable-uploads/87274ead-3670-4b43-91fe-3dc4e1ff893a.png"
    },
    {
      name: "Dr. Sneha Chen",
      designation: "Associate Professor",
      qualification: "Ph.D in Signal Processing",
      experience: "12 years",
      image: "/lovable-uploads/87274ead-3670-4b43-91fe-3dc4e1ff893a.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cpu className="absolute top-20 left-10 h-8 w-8 text-purple-400 opacity-30 animate-spin" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Waves className="absolute top-40 right-20 h-10 w-10 text-violet-500 opacity-25 animate-float" style={{ animationDelay: '1s' }} />
        <Router className="absolute bottom-40 left-20 h-9 w-9 text-indigo-500 opacity-40 animate-float" style={{ animationDelay: '2s' }} />
        <Satellite className="absolute bottom-60 right-10 h-7 w-7 text-purple-600 opacity-35 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }} />
        <Signal className="absolute top-60 right-40 h-9 w-9 text-violet-400 opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
        <RadioTower className="absolute top-80 left-40 h-8 w-8 text-gray-400 opacity-25 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => navigate('/')} className="mb-4 hover:bg-purple-100 text-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-700 mb-4">Electronics & Communication Engineering (ECE)</h1>
              <p className="text-gray-600 text-lg">Connecting the World, One Signal at a Time</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Department</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Electronic Engineering deals with research, design, integration and application of circuits and devices used in transmission and processing of information, with a focus on 5G and IoT.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-violet-50 rounded-lg"><div className="text-2xl font-bold text-violet-600">200</div><div className="text-gray-600">Students</div></div>
                  <div className="text-center p-4 bg-green-50 rounded-lg"><div className="text-2xl font-bold text-green-600">96%</div><div className="text-gray-600">Placement Rate</div></div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/PASTE_ECE_LAB_FILENAME_HERE.png" 
                  alt="Communication Lab"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Faculty</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {facultyMembers.map((faculty, index) => (<div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"><img src={faculty.image} alt={faculty.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" /><h3 className="font-bold text-lg text-gray-900 mb-2">{faculty.name}</h3><p className="text-violet-600 font-medium mb-1">{faculty.designation}</p><p className="text-gray-600 text-sm mb-1">{faculty.qualification}</p><p className="text-gray-500 text-sm">{faculty.experience} Experience</p></div>))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-6">Key Subjects</h3><ul className="space-y-3"><li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div><span>Analog & Digital Communication</span></li><li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div><span>Digital Signal Processing</span></li><li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div><span>Microwave & Antenna Engineering</span></li><li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div><span>Embedded Systems</span></li><li className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div><span>VLSI & Computer Networks</span></li></ul></div>
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Facilities</h3><ul className="space-y-3"><li className="flex items-center"><div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div><span>Communication Systems Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div><span>Signal Processing Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div><span>Microwave & RF Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div><span>Embedded Systems Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div><span>VLSI Design Lab</span></li></ul></div>
          </div>
        </div>
      </div>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.animate-float{animation:float 3s ease-in-out infinite}`}</style>
    </div>
  );
};
export default ElectronicsAndCommunicationEngineering;