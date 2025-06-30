import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Beaker, FlaskConical, Atom, Leaf, Recycle, Combine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChemicalEngineering = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      name: "Dr. Priya Desai",
      designation: "Head of Department",
      qualification: "Ph.D in Chemical Engineering",
      experience: "18 years",
      image: "/lovable-uploads/departments/chemical.png"
    },
    {
      name: "Prof. Arjun Singh",
      designation: "Professor",
      qualification: "M.Tech in Biochemical Engineering",
      experience: "14 years",
      image: "/lovable-uploads/departments/chemical.png"
    },
    {
      name: "Ms. Meera Krishnan",
      designation: "Assistant Professor",
      qualification: "M.S. in Material Science",
      experience: "8 years",
      image: "/lovable-uploads/departments/chemical.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Beaker className="absolute top-20 left-10 h-8 w-8 text-green-500 opacity-30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <FlaskConical className="absolute top-40 right-20 h-10 w-10 text-emerald-500 opacity-25 animate-float" style={{ animationDelay: '1s' }} />
        <Atom className="absolute bottom-40 left-20 h-9 w-9 text-blue-500 opacity-40 animate-spin" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <Leaf className="absolute bottom-60 right-10 h-7 w-7 text-green-600 opacity-35 animate-float" style={{ animationDelay: '1.5s' }} />
        <Recycle className="absolute top-60 right-40 h-9 w-9 text-green-700 opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <Combine className="absolute top-80 left-40 h-8 w-8 text-emerald-400 opacity-25 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => navigate('/')} className="mb-4 hover:bg-green-100 text-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-700 mb-4">Chemical Engineering</h1>
              <p className="text-gray-600 text-lg">Transforming Matter for a Better World</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Department</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Focused on chemical processes and manufacturing with modern laboratory facilities and industry connections. We cover reaction engineering, transport phenomena, and biotechnology to solve modern challenges.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg"><div className="text-2xl font-bold text-emerald-600">120</div><div className="text-gray-600">Students</div></div>
                  <div className="text-center p-4 bg-green-100 rounded-lg"><div className="text-2xl font-bold text-green-600">92%</div><div className="text-gray-600">Placement Rate</div></div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/PASTE_CHEMICAL_LAB_FILENAME_HERE.png" 
                  alt="Chemical Engineering Lab"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Faculty</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {facultyMembers.map((faculty, index) => (<div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"><img src={faculty.image} alt={faculty.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"/><h3 className="font-bold text-lg text-gray-900 mb-2">{faculty.name}</h3><p className="text-green-600 font-medium mb-1">{faculty.designation}</p><p className="text-gray-600 text-sm mb-1">{faculty.qualification}</p><p className="text-gray-500 text-sm">{faculty.experience} Experience</p></div>))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-6">Key Subjects</h3><ul className="space-y-3"><li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div><span>Chemical Reaction Engineering</span></li><li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div><span>Thermodynamics</span></li><li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div><span>Transport Phenomena</span></li><li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div><span>Process Design & Economics</span></li><li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div><span>Biochemical Engineering</span></li></ul></div>
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Facilities</h3><ul className="space-y-3"><li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div><span>Reaction Engineering Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div><span>Mass Transfer Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div><span>Instrumentation & Control Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div><span>Biotechnology Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div><span>Material Testing Lab</span></li></ul></div>
          </div>
        </div>
      </div>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.animate-float{animation:float 3s ease-in-out infinite}`}</style>
    </div>
  );
};
export default ChemicalEngineering;