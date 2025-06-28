
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActionsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Quick Actions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get started with your journey at Konghu Velalar Polytechnic College
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Admissions Card */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            {/* Animated Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                {/* Animated Pulse */}
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                Admissions Open
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Apply now for the upcoming academic year. Limited seats available across all departments.
              </p>
              
              <Button 
                onClick={() => navigate('/admission')}
                className="w-full bg-green-500 hover:bg-green-600 text-white group-hover:scale-105 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Campus Tour Card */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            {/* Animated Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                {/* Animated Pulse */}
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Campus Tour
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore our modern facilities, laboratories, and infrastructure. Virtual and physical tours available.
              </p>
              
              <Button 
                onClick={() => navigate('/campus-tour')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white group-hover:scale-105 transition-all duration-300"
              >
                Book Tour
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Placement Card */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            {/* Animated Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                {/* Animated Pulse */}
                <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Placement Details
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover our excellent placement record with top companies. 95% placement rate achieved.
              </p>
              
              <Button 
                onClick={() => navigate('/placement-details')}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white group-hover:scale-105 transition-all duration-300"
              >
                View Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default QuickActionsSection;
