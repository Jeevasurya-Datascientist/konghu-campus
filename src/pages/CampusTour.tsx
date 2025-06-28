import React, { useEffect } from 'react'; // FIX: Added useEffect import
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Clock, Users, Camera, Calendar, Phone, Globe, Eye, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// FIX: Removed unused import for BookTourForm
// import BookTourForm from '../components/BookTourForm'; 

const CampusTour = () => {
  const navigate = useNavigate();

  // FIX: Added useEffect to load the Tally embed script when the component mounts.
  // This script finds all iframes with `data-tally-src` and loads them.
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // The Tally script is small and safe to leave, but if you needed
      // to clean it up, you could add logic here.
    };
  }, []);

  const tourHighlights = [
    {
      title: "Computer Labs",
      description: "State-of-the-art computer laboratories with latest software",
      image: "/lovable-uploads/d1601f37-aa37-4632-8f5f-4d627ac52a76.png",
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: "Engineering Workshops",
      description: "Modern CNC machines and manufacturing equipment",
      image: "/lovable-uploads/9ed342bb-ca6b-4bbc-a740-ab87a2bc065d.png",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Civil Engineering Lab",
      description: "Advanced surveying and testing equipment",
      image: "/lovable-uploads/ecddb56d-486a-4a64-88a0-486b5fe49b30.png",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Automobile Workshop",
      description: "Hands-on training with real automotive components",
      image: "/lovable-uploads/8eae1ff9-2fe1-46bf-a0b5-ae6915e837be.png",
      icon: <Clock className="h-6 w-6" />
    }
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
              <h1 className="text-4xl font-bold text-blue-900 mb-4">Campus Tour</h1>
              <p className="text-gray-600 text-lg">Explore our world-class facilities and infrastructure</p>
            </div>
          </div>

          {/* Tour Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual 360° Tour</h3>
              <p className="text-gray-600 mb-6">Immersive virtual reality experience of our campus</p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  How Virtual 360° Tour Works:
                </h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Click on interactive hotspots to navigate between locations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Use mouse/touch to look around in 360° view</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Click on information points for detailed facility descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Compatible with VR headsets for immersive experience</span>
                  </li>
                </ul>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Navigation className="mr-2 h-4 w-4" />
                Start Virtual Tour
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical Guided Tour</h3>
              <p className="text-gray-600 mb-6">Personal guided tour with our admission team</p>
              
              <div className="bg-green-50 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-bold text-green-900 mb-3">What's Included:</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Visit all department labs and workshops</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Meet faculty members and current students</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Campus facilities and infrastructure tour</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Admission counseling session</span>
                  </li>
                </ul>
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => {
                document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Book Physical Tour
              </Button>
            </div>
          </div>

          {/* Tour Highlights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Tour Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tourHighlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="text-blue-600 mr-2">
                        {highlight.icon}
                      </div>
                      <h3 className="font-bold text-gray-900">{highlight.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form Section */}
          <div id="booking-form" className="mb-12 bg-white rounded-2xl shadow-xl p-8">
            {/* FIX: Removed the <BookTourForm /> component to use the Tally iframe directly */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Book Your Campus Tour</h2>
            <p className="text-center text-gray-600 mb-8">Select a date and time that works for you.</p>
            
            {/* FIX: Added camelCase attributes (frameBorder, etc.) to the iframe for React compatibility */}
            <iframe 
              data-tally-src="https://tally.so/embed/mVaVDE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="1276"
              title="Campus Tour Form">
            </iframe>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h3>
            <p className="text-gray-600 mb-6">Contact our admission team for any queries about campus tours</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusTour;