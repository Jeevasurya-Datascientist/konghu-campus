import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GraduationCap, Users, BookOpen, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdmissionForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // The official Tally embed script handles finding and loading the forms.
    // It is idempotent, so it's safe to call this on every mount.
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // It's good practice to clean up the script on component unmount.
    return () => {
      // Note: If other parts of your app use Tally, you might want to manage
      // this script globally instead of removing it. For a single-page use case,
      // this cleanup is fine.
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        // You might decide to leave the script for other Tally forms.
        // For this example, we'll keep the cleanup logic.
        // document.body.removeChild(existingScript);
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
              <h1 className="text-4xl font-bold text-blue-900 mb-4">Admission Form</h1>
              <p className="text-gray-600 text-lg">Start Your Journey with KVPC</p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">9 Departments</h3>
              <p className="text-gray-600 text-sm">Choose from various engineering disciplines</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600 text-sm">Learn from industry professionals</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Modern Labs</h3>
              <p className="text-gray-600 text-sm">State-of-the-art facilities</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">95% Placement</h3>
              <p className="text-gray-600 text-sm">Excellent job opportunities</p>
            </div>
          </div>

          {/* Admission Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Admission Form</h2>
              <p className="text-gray-600">Fill out the form below to apply for admission</p>
            </div>

            {/* Tally Form Embed */}
            <div className="w-full">
              {/* FIX: Use camelCase for iframe attributes like frameBorder, marginHeight, and marginWidth */}
              <iframe
                data-tally-src="https://tally.so/embed/3x729o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="1482"
                title="Admission Form">
              </iframe>
            </div>
          </div>
          
          {/* FIX: The <script> tag was removed from here and its logic is now correctly handled in the useEffect hook. */}

          {/* Contact Info */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help with Admission?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our admission team is here to assist you throughout the process
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <span className="font-semibold">📞 +91 9876543210</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">✉️ admissions@konghuvpc.edu.in</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">⏰ Mon - Sat: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;