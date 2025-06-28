
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building, TrendingUp, Users, Award, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlacementDetails = () => {
  const navigate = useNavigate();

  const placementStats = [
    { label: "Placement Rate", value: "95%", color: "text-green-600", bgColor: "bg-green-100" },
    { label: "Students Placed", value: "500+", color: "text-blue-600", bgColor: "bg-blue-100" },
    { label: "Partner Companies", value: "100+", color: "text-purple-600", bgColor: "bg-purple-100" },
    { label: "Average Package", value: "₹3.5L", color: "text-orange-600", bgColor: "bg-orange-100" },
  ];

  const topRecruiters = [
    { name: "TCS", package: "₹3.5L - ₹5L", positions: "Software Developer, System Analyst" },
    { name: "Infosys", package: "₹3.2L - ₹4.5L", positions: "Software Engineer, Consultant" },
    { name: "Wipro", package: "₹3L - ₹4L", positions: "Developer, Technical Analyst" },
    { name: "Tech Mahindra", package: "₹2.8L - ₹4.2L", positions: "Associate Engineer" },
    { name: "HCL Technologies", package: "₹3.1L - ₹4.3L", positions: "Software Engineer" },
    { name: "Cognizant", package: "₹3.3L - ₹4.6L", positions: "Programmer Analyst" },
  ];

  const placementProcess = [
    { step: 1, title: "Registration", description: "Students register for placement assistance" },
    { step: 2, title: "Training", description: "Aptitude, technical, and soft skills training" },
    { step: 3, title: "Pre-placement", description: "Company presentations and job profiles" },
    { step: 4, title: "Selection", description: "Written tests, technical rounds, HR interviews" },
    { step: 5, title: "Offer", description: "Job offers and salary negotiations" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
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
              <h1 className="text-4xl font-bold text-blue-900 mb-4">Placement Details</h1>
              <p className="text-gray-600 text-lg">Comprehensive placement statistics and company partnerships</p>
            </div>
          </div>

          {/* Placement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {placementStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <TrendingUp className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Top Recruiters */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Top Recruiting Companies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRecruiters.map((company, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-green-600">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{company.package}</span>
                    </div>
                    <div className="text-gray-600 text-sm">{company.positions}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placement Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Placement Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {placementProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Image */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Placement Achievement</h2>
            <img 
              src="/lovable-uploads/b5630ac6-a28b-4821-bea3-18d36c2d437d.png" 
              alt="TEAL Company Placements Achievement" 
              className="max-w-full h-auto rounded-xl mx-auto shadow-lg"
            />
            <p className="text-gray-600 mt-4">Our students continue to excel in top companies across various industries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementDetails;
