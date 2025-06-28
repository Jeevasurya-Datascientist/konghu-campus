import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, TrendingUp, Users, Award, ArrowRight, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlacementSection = () => {
  const navigate = useNavigate();

  const topCompanies = [
    { name: 'TCS', logo: '🏢', color: 'bg-blue-600' },
    { name: 'Infosys', logo: '💼', color: 'bg-orange-500' },
    { name: 'Wipro', logo: '🏭', color: 'bg-green-600' },
    { name: 'Tech Mahindra', logo: '⚡', color: 'bg-red-500' },
    { name: 'HCL', logo: '🔧', color: 'bg-purple-600' },
    { name: 'Cognizant', logo: '💻', color: 'bg-indigo-600' },
  ];

  return (
    <section id="placement-cell" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Briefcase className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Placement Cell</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Excellence in <span className="text-blue-600">Placements</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our dedicated placement cell ensures that our students are well-prepared for the industry
            and secure promising career opportunities with leading companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Stats and Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">95%</div>
                    <div className="text-gray-600 text-sm">Placement Rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600 text-sm">Students Placed</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">100+</div>
                    <div className="text-gray-600 text-sm">Partner Companies</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">₹3.5L</div>
                    <div className="text-gray-600 text-sm">Avg. Package</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Placement Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Industry-oriented curriculum and training programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Regular industry visits and guest lectures</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Soft skills development and personality enhancement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Mock interviews and aptitude training sessions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Placement Achievement Image */}
          <div className="relative">
            <div className="relative bg-white p-4 rounded-2xl shadow-xl">
              <img 
                src="/lovable-uploads/b5630ac6-a28b-4821-bea3-18d36c2d437d.png" 
                alt="Placement Achievement - TEAL Company Placements" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg">
                <span className="font-bold">Latest Placements!</span>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Top Recruiting Companies */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Top Recruiting Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topCompanies.map((company, index) => (
              <div
                key={company.name}
                className="group flex flex-col items-center p-4 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${company.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{company.logo}</span>
                </div>
                <span className="text-gray-700 font-medium text-center group-hover:text-blue-600 transition-colors duration-300">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/placement-details')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group"
          >
            View Placement Records
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
