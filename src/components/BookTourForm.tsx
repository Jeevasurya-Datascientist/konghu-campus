
import React, { useEffect } from 'react';

const BookTourForm = () => {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Campus Tour</h2>
        <p className="text-gray-600 text-lg">Schedule a personalized guided tour of our campus</p>
      </div>

      {/* Tally Form Embed */}
      <div className="w-full">
        <iframe
          data-tally-src="https://tally.so/embed/3jEPvA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Campus Tour Booking Form"
          className="rounded-lg"
        ></iframe>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <p className="text-green-800 text-sm text-center">
          <strong>Note:</strong> Our team will contact you within 24 hours to confirm your tour schedule.
        </p>
      </div>
    </div>
  );
};

export default BookTourForm;
