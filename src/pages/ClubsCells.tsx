
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Star, Trophy, Music, Camera, Code, Heart, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ClubsCells = () => {
  const navigate = useNavigate();

  const clubs = [
    {
      name: "Technical Club",
      description: "Fostering innovation and technical skills through workshops and competitions",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      members: "150+"
    },
    {
      name: "Cultural Club",
      description: "Celebrating arts, music, dance and cultural diversity",
      icon: Music,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      members: "200+"
    },
    {
      name: "Sports Club",
      description: "Promoting physical fitness and sportsmanship",
      icon: Trophy,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      members: "180+"
    },
    {
      name: "Photography Club",
      description: "Capturing moments and developing creative vision",
      icon: Camera,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      members: "80+"
    },
    {
      name: "Community Service",
      description: "Making a difference in the community through service",
      icon: Heart,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      members: "120+"
    },
    {
      name: "Innovation Cell",
      description: "Encouraging entrepreneurship and startup culture",
      icon: Target,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      members: "60+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Users className="absolute top-20 left-10 h-8 w-8 text-indigo-400 opacity-30 animate-bounce" 
               style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <Star className="absolute top-40 right-20 h-10 w-10 text-purple-500 opacity-25 animate-pulse" 
              style={{ animationDelay: '1s' }} />
        <Trophy className="absolute bottom-40 left-20 h-6 w-6 text-yellow-600 opacity-40 animate-bounce" 
                style={{ animationDelay: '2s' }} />
        <Music className="absolute bottom-60 right-10 h-7 w-7 text-purple-600 opacity-35 animate-float" 
               style={{ animationDelay: '1.5s' }} />
        <Camera className="absolute top-60 right-40 h-9 w-9 text-yellow-500 opacity-30 animate-pulse" 
                style={{ animationDelay: '0.5s' }} />
        <Heart className="absolute top-80 left-40 h-8 w-8 text-red-300 opacity-25 animate-bounce" 
               style={{ animationDelay: '2.5s' }} />
        <Zap className="absolute top-32 right-32 h-6 w-6 text-blue-400 opacity-30 animate-float" 
             style={{ animationDelay: '1.2s' }} />
        <Target className="absolute bottom-32 left-32 h-7 w-7 text-orange-400 opacity-25 animate-pulse" 
                style={{ animationDelay: '2.2s' }} />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-4 hover:bg-indigo-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-indigo-900 mb-4">Clubs & Cells</h1>
              <p className="text-gray-600 text-lg">Nurturing Talents Beyond Academics</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Life at KVPC</h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Our vibrant campus life extends far beyond classrooms. With diverse clubs and cells, 
              students explore their passions, develop leadership skills, and build lifelong friendships. 
              Join us in creating memories and making a difference!
            </p>
          </div>

          {/* Clubs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {clubs.map((club, index) => {
              const IconComponent = club.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${club.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${club.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${club.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                      {club.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {club.description}
                    </p>

                    {/* Members Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-500">
                        {club.members} Members
                      </span>
                      <Button 
                        size="sm"
                        className={`bg-gradient-to-r ${club.color} hover:opacity-90 text-white`}
                      >
                        Join Club
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Achievements Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Recent Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">State Level Winners</h3>
                <p className="text-gray-600 text-sm">Technical Symposium 2024</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">Cultural Fest Champions</h3>
                <p className="text-gray-600 text-sm">Inter-College Competition</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">Community Impact</h3>
                <p className="text-gray-600 text-sm">1000+ Lives Touched</p>
              </div>
            </div>
          </div>

          {/* Join Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join our community of passionate students and make your mark!
            </p>
            <Button 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-4"
            >
              Contact Student Council
            </Button>
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

export default ClubsCells;
