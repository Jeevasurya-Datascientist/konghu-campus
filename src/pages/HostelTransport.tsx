import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Bus, Wifi, Utensils, Shield, MapPin, Phone, Download, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HostelTransport = () => {
  const navigate = useNavigate();

  const hostelFeatures = [
    { icon: <Wifi className="h-6 w-6" />, title: "High-Speed Internet", description: "24/7 WiFi connectivity for all residents" },
    { icon: <Utensils className="h-6 w-6" />, title: "Hygienic Mess", description: "Nutritious and balanced meals served daily" },
    { icon: <Shield className="h-6 w-6" />, title: "24/7 Security", description: "CCTV surveillance and round-the-clock security" },
    { icon: <Home className="h-6 w-6" />, title: "Comfortable Rooms", description: "Well-furnished rooms with study areas" },
  ];
  
  // FIX: This useEffect hook is required to load the Tally form embed script.
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Clean up the script if the component unmounts
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        // You might choose to leave it if other pages use Tally.
      }
    };
  }, []);

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
              <h1 className="text-4xl font-bold text-blue-900 mb-4">Hostel & Transport</h1>
              <p className="text-gray-600 text-lg">A home away from home, with seamless connectivity.</p>
            </div>
          </div>

          {/* Hostel Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Hostel Facilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {hostelFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl border group hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
             {/* Fee Details */}
            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Boys & Girls Hostel</h3>
                    <p className="text-gray-700">Separate, secure, and well-maintained hostel blocks for boys and girls.</p>
                    <p className="mt-4 text-2xl font-bold text-blue-800">₹35,000 <span className="text-sm font-normal">/ year</span></p>
                    <p className="text-sm text-gray-600">(Includes accommodation and mess charges)</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg border">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Hostel Warden</h3>
                    <p className="text-gray-600">For inquiries regarding rooms and facilities.</p>
                    <div className="mt-4 flex items-center justify-center md:justify-start text-blue-600 font-semibold">
                        <Phone className="h-5 w-5 mr-2"/>
                        <span>+91 9123456789</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Transport Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Transport Facilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* FIX: Removed timings and fares, replaced with downloadable PDF section */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 flex flex-col items-center justify-center text-center">
                <FileText className="h-16 w-16 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Detailed Bus Routes</h3>
                <p className="text-gray-600 mb-6">Download the PDF to view all bus routes, pickup points, and contact information for transport coordinators.</p>
                <a 
                  href="/lovable-uploads/BUS ROUTE FOR (23.06.25).pdf"
                  download="KVPC_Bus_Routes.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Route PDF
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center"><Shield className="h-6 w-6 text-green-600 mr-3" /> GPS tracking on all buses for safety.</li>
                  <li className="flex items-center"><Phone className="h-6 w-6 text-green-600 mr-3" /> Emergency contact system in every bus.</li>
                  <li className="flex items-center"><MapPin className="h-6 w-6 text-green-600 mr-3" /> Convenient pickup points across major areas.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* FIX: Replaced button with embedded Tally form */}
          <div id="apply-form" className="bg-white rounded-2xl shadow-xl p-8 scroll-mt-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Apply for Hostel & Transport</h2>
                <p className="text-gray-600 mt-2">Fill out the form below. Our team will get in touch with you shortly.</p>
            </div>
            <iframe
                data-tally-src="https://tally.so/embed/w4YLqd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="1050"
                
                title="Hostel and Transport Application Form">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelTransport;