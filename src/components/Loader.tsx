// src/components/Loader.tsx

import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center text-center">
        <img 
          src="/192376b7-a3a6-4a41-8428-e34e5a4290bc.png" 
          alt="Loading..." 
          className="w-32 h-32 animate-pulse"
        />
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Loading Page...
        </p>
      </div>
    </div>
  );
};

export default Loader;