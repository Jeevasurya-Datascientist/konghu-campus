import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm">
      <img
        src="/lovable-uploads/192376b7-a3a6-4a41-8428-e34e5a4290bc.png"
        alt="Loading..."
        className="w-36 h-36 animate-pulse drop-shadow-lg"
      />
    </div>
  );
};

export default Loader;