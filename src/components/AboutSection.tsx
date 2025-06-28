
import React from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Institution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            18 ஆண்டுகளாக தொடர்ந்து சாதனை - 18 Years of Continuous Excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-900">
              Excellence in Technical Education
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Konghu Velalar Polytechnic College, established in 2007, has been a beacon of 
              technical education excellence. Approved by AICTE and affiliated to DOTE Tamil Nadu 
              (Registration: TN/Dip 2007-2008/023/11686), we are committed to providing 
              world-class technical education.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our institution is managed by the Konghu Velalar Educational Trust, dedicated to 
              fostering innovation, creativity, and professional competence among our students. 
              We prepare our graduates to meet the challenges of the modern technological world.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Our Mission</h4>
              <p className="text-gray-700">
                To provide quality technical education that transforms students into competent 
                professionals, contributing to the technological advancement of society while 
                maintaining ethical values and social responsibility.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">AICTE Approved</h4>
              <p className="text-gray-600">
                Recognized by All India Council for Technical Education
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h4>
              <p className="text-gray-600">
                Highly qualified and experienced teaching professionals
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">9 Departments</h4>
              <p className="text-gray-600">
                Comprehensive technical programs across multiple disciplines
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Industry Focus</h4>
              <p className="text-gray-600">
                Curriculum aligned with industry requirements and trends
              </p>
            </div>
          </div>
        </div>

        {/* Accreditation Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Accreditation & Affiliations
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">AICTE Approval</h4>
              <p className="text-gray-600">
                All India Council for Technical Education Recognition
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">DOTE Affiliation</h4>
              <p className="text-gray-600">
                Directorate of Technical Education, Tamil Nadu
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Registration</h4>
              <p className="text-gray-600">
                TN/Dip 2007-2008/023/11686
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
