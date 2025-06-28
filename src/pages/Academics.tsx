
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Award, Users, Clock, Star, Zap, Target, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Academics = () => {
  const navigate = useNavigate();

  const programs = [
    {
      name: "Diploma Programs",
      duration: "3 Years",
      departments: "9 Departments",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Industrial Training",
      duration: "6 Months",
      departments: "All Streams",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Skill Development",
      duration: "Ongoing",
      departments: "Cross-Functional",
      icon: Target,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      title: "Industry-Ready Curriculum",
      description: "Updated syllabus aligned with industry requirements",
      icon: Star
    },
    {
      title: "Practical Learning",
      description: "70% hands-on training in modern laboratories",
      icon: Zap
    },
    {
      title: "Expert Faculty",
      description: "Experienced educators with industry background",
      icon: Award
    },
    {
      title: "Flexible Timing",
      description: "Multiple batches to accommodate student needs",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BookOpen className="absolute top-20 left-10 h-8 w-8 text-blue-400 opacity-30 animate-bounce" 
                  style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <Award className="absolute top-40 right-20 h-10 w-10 text-indigo-500 opacity-25 animate-float" 
               style={{ animationDelay: '1s' }} />
        <Users className="absolute bottom-40 left-20 h-6 w-6 text-blue-600 opacity-40 animate-pulse" 
               style={{ animationDelay: '2s' }} />
        <Clock className="absolute bottom-60 right-10 h-7 w-7 text-indigo-600 opacity-35 animate-bounce" 
               style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
        <Star className="absolute top-60 right-40 h-9 w-9 text-yellow-500 opacity-30 animate-float" 
              style={{ animationDelay: '0.5s' }} />
        <Zap className="absolute top-80 left-40 h-8 w-8 text-blue-300 opacity-25 animate-pulse" 
             style={{ animationDelay: '2.5s' }} />
        <Target className="absolute top-32 right-32 h-6 w-6 text-purple-400 opacity-30 animate-bounce" 
                style={{ animationDelay: '1.2s' }} />
        <Calendar className="absolute bottom-32 left-32 h-7 w-7 text-green-400 opacity-25 animate-float" 
                  style={{ animationDelay: '2.2s' }} />
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
              <h1 className="text-4xl font-bold text-blue-900 mb-4">Academics</h1>
              <p className="text-gray-600 text-lg">Excellence in Technical Education</p>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Excellence</h2>
              <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                At Konghu Velalar Polytechnic College, we provide comprehensive technical education 
                that combines theoretical knowledge with practical skills, preparing students for 
                successful careers in their chosen fields.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">9</div>
                <div className="text-gray-600">Departments</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-gray-600">Expert Faculty</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">5000+</div>
                <div className="text-gray-600">Alumni</div>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Academic Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{program.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-semibold">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Coverage:</span>
                        <span className="font-semibold">{program.departments}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Our Academics?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Calendar */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Academic Calendar 2024-25</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Semester I</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Admission Process</span>
                    <span className="font-semibold text-blue-600">June - July</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Classes Begin</span>
                    <span className="font-semibold text-blue-600">August</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mid-Term Exams</span>
                    <span className="font-semibold text-blue-600">October</span>
                  </li>
                  <li className="flex justify-between">
                    <span>End Semester Exams</span>
                    <span className="font-semibold text-blue-600">December</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Semester II</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Classes Begin</span>
                    <span className="font-semibold text-green-600">January</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mid-Term Exams</span>
                    <span className="font-semibold text-green-600">March</span>
                  </li>
                  <li className="flex justify-between">
                    <span>End Semester Exams</span>
                    <span className="font-semibold text-green-600">May</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Summer Break</span>
                    <span className="font-semibold text-green-600">June - July</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join us and be part of our legacy of academic excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
                onClick={() => navigate('/admission')}
              >
                Apply for Admission
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
                onClick={() => navigate('/campus-tour')}
              >
                Schedule Campus Tour
              </Button>
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

export default Academics;
