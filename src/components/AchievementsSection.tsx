
import React from 'react';
import { Star, Trophy, Award } from 'lucide-react';

const AchievementsSection = () => {
  const stateAchievements = [
    { name: 'P.SUBHASHINI', score: '698/700', image: '/lovable-uploads/3c9bf3cc-a2a5-4bc3-809a-fd5fa0ebd936.png' },
    { name: 'A.SELVAN', score: '696/700', image: '/lovable-uploads/3c9bf3cc-a2a5-4bc3-809a-fd5fa0ebd936.png' },
    { name: 'S.RAJALAKSHMI', score: '695/700', image: '/lovable-uploads/3c9bf3cc-a2a5-4bc3-809a-fd5fa0ebd936.png' },
    { name: 'M.BHARATH', score: '695/700', image: '/lovable-uploads/3c9bf3cc-a2a5-4bc3-809a-fd5fa0ebd936.png' },
  ];

  const toppers = [
    { name: 'MAHESH BHARTH.K', university: 'ANNA UNIVERSITY, CHENNAI' },
    { name: 'BHARATH.M', university: 'ANNA UNIVERSITY, CHENNAI' },
    { name: 'SURYA.K', university: 'ANNA UNIVERSITY, CHENNAI' },
    { name: 'MANOJKUMAR.N', university: 'ANNA UNIVERSITY, CHENNAI' },
    { name: 'SUGADEV.S', university: 'ANNA UNIVERSITY, CHENNAI' },
    { name: 'TAMILSELVAN.A', university: 'PSG, COIMBATORE' },
  ];

  const placementHighlights = [
    { name: 'GANESHKUMAR B', company: 'KMPC, Kuwait', package: '2.25Lak /Month' },
    { name: 'PRAVEENKUMAR G', company: 'Nigeria oil Corporation', package: '2 Lak /Month' },
    { name: 'GOKULANANTH S', company: 'MMP,Africa', package: '2 Lak /Month' },
    { name: 'E.BOOPATHIRAJA', company: 'Singapore', package: '2.5 Lak /Month' },
    { name: 'MUTHUSAMY A', company: 'Reliance', package: '70,000 /Month' },
    { name: 'HARIHARAN A', company: 'Qatar Gas,Qatar', package: '2.5 Lak /Month' },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Achievements
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            18 ஆண்டுகளாக தொடர்ந்து சாதனை - Continuous Excellence for 18 Years
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* State Level Achievements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              CONTINUOUS ACHIEVEMENTS AT THE STATE LEVEL
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <span className="text-xl text-gray-700">Top State Rank Holders</span>
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stateAchievements.map((student, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-yellow-400">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-600">
                            {student.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{student.name}</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{student.score}</div>
                    <div className="w-full h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">STATE TOPPER</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* University Toppers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              University Rank Holders
            </h3>
            <Award className="h-12 w-12 text-blue-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers.map((student, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{student.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{student.university}</p>
                    <div className="mt-3 px-3 py-1 bg-blue-100 rounded-full text-xs text-blue-800 font-semibold inline-block">
                      UNIVERSITY TOPPER
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Highlights */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">
              International Placement Success
            </h3>
            <div className="flex justify-center items-center space-x-2">
              <Star className="h-6 w-6 text-green-600" />
              <span className="text-lg text-gray-700">High Salary Packages</span>
              <Star className="h-6 w-6 text-green-600" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placementHighlights.map((student, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 group hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-green-700">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{student.name}</h4>
                  <p className="text-green-600 font-semibold mb-2">{student.company}</p>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {student.package}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">18 Years of Excellence</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">State Rank Holders</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">University Toppers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹8L+</div>
              <div className="text-blue-100">Highest Package</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
