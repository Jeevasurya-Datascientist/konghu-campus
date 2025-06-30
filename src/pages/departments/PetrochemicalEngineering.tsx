import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Flame, Droplets, Factory, TestTube2, Settings, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PetroChemicalEngineering = () => {
  const navigate = useNavigate();

  const facultyMembers = [
    {
      name: "Dr. Alok Sharma",
      designation: "Head of Department",
      qualification: "Ph.D in Petroleum Engineering",
      experience: "20 years",
      image: "/lovable-uploads/department/petrochemical.png"},
    {
      name: "Prof. Sunita Verma",
      designation: "Professor",
      qualification: "M.Tech in Chemical Engineering",
      experience: "16 years",
      image: "/lovable-uploads/department/petrochemical.png"},
    {
      name: "Mr. Rajiv Menon",
      designation: "Assistant Professor",
      qualification: "M.E in Process Design Engineering",
      experience: "10 years",
      image: "/lovable-uploads/department/petrochemical.png"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Settings className="absolute top-20 left-10 h-8 w-8 text-orange-400 opacity-30 animate-spin" style={{ animationDelay: '0s', animationDuration: '5s' }} />
        <Droplets className="absolute top-40 right-20 h-10 w-10 text-blue-400 opacity-25 animate-bounce" style={{ animationDelay: '1s' }} />
        <Factory className="absolute bottom-40 left-20 h-9 w-9 text-gray-500 opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <Flame className="absolute bottom-60 right-10 h-7 w-7 text-orange-500 opacity-35 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }} />
        <TestTube2 className="absolute top-60 right-40 h-9 w-9 text-amber-500 opacity-30 animate-float" style={{ animationDelay: '0.5s' }} />
        <Layers className="absolute top-80 left-40 h-8 w-8 text-orange-300 opacity-25 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => navigate('/')} className="mb-4 hover:bg-orange-100 text-gray-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-700 mb-4">Petrochemical Engineering</h1>
              <p className="text-gray-600 text-lg">Powering Industries, Sustaining the Future</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Department</h2>
                <p className="text-gray-600 leading-relaxed mb-6">India with excellent refining capacity ranks sixth in the world with public/private companies like Reliance, Essar, ONGC-MRPL, HPCL, BPCL, IOC etc. Huge opportunities in this core engineering field.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-orange-50 rounded-lg"><div className="text-2xl font-bold text-orange-600">85</div><div className="text-gray-600">Students</div></div>
                  <div className="text-center p-4 bg-green-50 rounded-lg"><div className="text-2xl font-bold text-green-600">95%</div><div className="text-gray-600">Placement Rate</div></div>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/PASTE_PETROCHEMICAL_LAB_FILENAME_HERE.png" 
                  alt="Petrochemical Lab"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Faculty</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {facultyMembers.map((faculty, index) => (<div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"><img src={faculty.image} alt={faculty.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" /><h3 className="font-bold text-lg text-gray-900 mb-2">{faculty.name}</h3><p className="text-orange-600 font-medium mb-1">{faculty.designation}</p><p className="text-gray-600 text-sm mb-1">{faculty.qualification}</p><p className="text-gray-500 text-sm">{faculty.experience} Experience</p></div>))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-6">Key Subjects</h3><ul className="space-y-3"><li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span>Petroleum Refining</span></li><li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span>Polymer Science & Technology</span></li><li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span>Fluid Mechanics</span></li><li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span>Heat & Mass Transfer</span></li><li className="flex items-center"><div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div><span>Process Dynamics & Control</span></li></ul></div>
            <div className="bg-white rounded-2xl shadow-xl p-8"><h3 className="text-2xl font-bold text-gray-900 mb-6">Laboratory Facilities</h3><ul className="space-y-3"><li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div><span>Petroleum Testing Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div><span>Process Control Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div><span>Fluid Mechanics Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div><span>Heat Transfer Lab</span></li><li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div><span>Polymer Synthesis Lab</span></li></ul></div>
          </div>
        </div>
      </div>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.animate-float{animation:float 3s ease-in-out infinite}`}</style>
    </div>
  );
};
export default PetroChemicalEngineering;