// src/components/Loader.tsx

import React from 'react';

const Loader = () => {
  return (
    // 1. Changed background to a dark, semi-transparent overlay with a blur effect.
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm">
      <img 
        // 2. Using the correct path for the logo from your project.
        src="/lovable-uploads/192376b7-a3a6-4a41-8428-e34e5a4290bc.png"
        alt="Loading..." 
        // 3. Changed animation to a smooth spin. Text has been removed.
        className="w-32 h-32 animate-spin"
      />
    </div>
  );
};

export default Loader;