import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, CircuitBoard, Cpu, Lightbulb, Power, Waves } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ElectricalAndElectronicsEngineering = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      name: "Dr. Anjali Gupta",
      designation: "Head of Department",
      qualification: "Ph.D in Power Systems",
      experience: "19 years",
      image: "/lovable-uploads/departments/eee.png"
    },
    {
      name: "Prof. Vikram Rathod",
      designation: "Professor",
      qualification: "M.Tech in VLSI Design",
      experience: "15 years",
      image: "/lovable-uploads/departments/eee.png"
    },
    {
      name: "Mr. Sameer Ali",
      designation: "Assistant Professor",
      qualification: "M.E in Control Systems",
      experience: "9 years",
      image: "/lovable-uploads/departments/eee.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Zap className="absolute top-20 left-10 h-8 w-8 text-yellow-500 opacity-40 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
        <CircuitBoard className="absolute top-40 right-20 h-10 w-10 text-amber-500 opacity-25 animate-float" style={{ animationDelay: '1s' }} />
        <Cpu className="absolute bottom-40 left-20 h-9 w-9 text-gray-500 opacity-30 animate-spin" style={{ animationDelay: '2s', animationDuration: '3s' }} />
        <Lightbulb className="absolute bottom-60 right-10 h-7 w-7 text-yellow-400 opacity-35 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <Power className="absolute top-60 right-40 h-9 w-9 text-blue-500 opacity-30 animate-float" style={{ animationDelay: '0.5s' }} />
        <Waves className="absolute top-80 left-40 h-8 w-8 text-amber-400 opacity-25 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '4s' }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => navigate('/')} className="mb-4 hover:bg-yellow-100 text-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-700 mb-4">Electrical & Electronics Engineering (EEE)</h1>
              <p className="text-gray-600 text-lg">Innovating the Core of Modern Technology</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Department</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Electrical Engineering covering power systems, electronics, and communication technologies. We provide in-depth knowledge to drive advancements in energy, control systems, and microelectronics.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-amber-50 rounded-lg"><div className="text-2xl font-bold text-amber-600">180</div><div className="text-gray-600">Students</div></div>
                  <div className="text-center p-4 bg-green-50 rounded-lg"><div className="text-2xl font-bold text-green-600">94%</div><div className="text-gray-600">Placement Rate</div></div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/departments/eee.png" 
                  alt="Electrical Lab"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Faculty</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {facultyMembers.map((faculty, index) => (<div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"><img src={faculty.image} alt={faculty.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" /><h3 className="font-bold text-lg text-gray-900 mb-2">{faculty.name}</h3><p className="text-amber-700 font-medium mb-1">{faculty.designation}</p><p className="text-gray-600 text-sm mb-1">{faculty.qualification}</p><p className="text-gray-500 text-sm">{faculty.experience} Experience</p></div>))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-6">Key Subjects</h3><ul className="space-y-3"><li className="flex items-center"><div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div><span>Circuit Theory & Networks</span></li><li className="flex items-center"><div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div><span>Electrical Machines</span></li><li className="flex items-center"><div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div><span>Power Systems Engineering</span></li><li className="flex items-center"><div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div><span>Control Systems</span></li><li className="flex items-center"><div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div><span>Digital Electronics & VLSI</span></li></ul></div>
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Facilities</h3><ul className="space-y-3"><li className="flex items-center"><div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div><span>Electrical Machines Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div><span>Power Systems Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div><span>Control Systems Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div><span>Digital Circuits Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div><span>Microprocessor Lab</span></li></ul></div>
          </div>
        </div>
      </div>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.animate-float{animation:float 3s ease-in-out infinite}`}</style>
    </div>
  );
};
export default ElectricalAndElectronicsEngineering;