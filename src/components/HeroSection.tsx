
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
  // Dynamic hero images that change every 5 seconds
  const heroImages = [
    "/lovable-uploads/lovable-uploads/departments/computer.png",
    "/lovable-uploads/9b2c1b6c-9f84-4436-95d7-6eb87d6e78b2.png",
    "/lovable-uploads/3156b9ab-cff6-4044-ab99-a6f46f01eec6.png",
    "/lovable-uploads/8a746098-32b6-4804-bc18-7d05144d63c5.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:50px_50px]" />
      </div>
      
      {/* Campus Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/lovable-uploads/ca820679-5f37-43f3-9650-1c0d5dc02627.png" 
          alt="Campus View" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Department Images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="/lovable-uploads/8e737f85-f2cf-4655-be31-7e112bafffef.png" 
          alt="Computer Lab" 
          className="absolute top-20 right-10 w-24 h-16 rounded-lg opacity-30 animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        />
        <img 
          src="/lovable-uploads/9b2c1b6c-9f84-4436-95d7-6eb87d6e78b2.png" 
          alt="CNC Machines" 
          className="absolute top-40 left-10 w-28 h-20 rounded-lg opacity-25 animate-float"
          style={{ animationDelay: '1s' }}
        />
        <img 
          src="/lovable-uploads/3156b9ab-cff6-4044-ab99-a6f46f01eec6.png" 
          alt="Surveying Equipment" 
          className="absolute bottom-40 right-20 w-32 h-24 rounded-lg opacity-20 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <img 
          src="/lovable-uploads/8a746098-32b6-4804-bc18-7d05144d63c5.png" 
          alt="Auto Workshop" 
          className="absolute bottom-20 left-20 w-36 h-24 rounded-lg opacity-30 animate-bounce"
          style={{ animationDelay: '1.5s', animationDuration: '4s' }}
        />
        <img 
          src="/lovable-uploads/dd4bbccf-4d4b-4f1b-8429-fe8f17c4dd5d.png" 
          alt="Physics Lab" 
          className="absolute top-60 right-40 w-24 h-20 rounded-lg opacity-25 animate-float"
          style={{ animationDelay: '0.5s' }}
        />
        <img 
          src="/lovable-uploads/c0875849-38a0-4fb9-b01a-953f3180b2f7.png" 
          alt="Lab Equipment" 
          className="absolute top-80 left-40 w-20 h-16 rounded-lg opacity-20 animate-pulse"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Welcome to
                <span className="block text-yellow-400">KONGHU VELALAR</span>
                <span className="block">POLYTECHNIC</span>
                <span className="block">COLLEGE</span>
              </h1>
              
              <div className="space-y-2 text-xl lg:text-2xl">
                <p className="text-blue-200">Approved by AICTE</p>
                <p className="text-blue-200">Affiliated To DOTE Chennai</p>
                <p className="text-blue-200">Established in 2007</p>
              </div>
              
              <p className="text-lg text-blue-100 max-w-2xl">
                Empowering minds with cutting-edge technical education and fostering innovation 
                for over 18 years of continuous excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg group"
                onClick={() => navigate('/admission')}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-8 py-4 text-lg"
                onClick={() => navigate('/campus-tour')}
              >
                Campus Tour
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold">18+</div>
                <div className="text-blue-200">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-blue-200">Alumni</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-blue-200">Placement Rate</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-3xl transform rotate-6"></div>
              <img 
                src={heroImages[currentImageIndex]}
                alt="Dynamic College Images" 
                className="relative rounded-3xl shadow-2xl w-full h-auto transition-opacity duration-1000"
                key={currentImageIndex}
              />
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
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
    </section>
  );
};

export default HeroSection;
