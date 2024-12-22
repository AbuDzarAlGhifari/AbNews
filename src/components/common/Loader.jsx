'use client';

import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      {/* Main Loader */}
      <div className="relative w-12 h-12">
        {/* Outer Circle */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-black rounded-full animate-spin border-t-transparent"></div>
        {/* Inner Circle */}
        <div className="absolute top-1 left-1 w-[80%] h-[80%] border-4 border-grey-500 rounded-full animate-spin-slow border-t-transparent"></div>
        {/* Center Dot */}
        <div className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full top-1/2 left-1/2"></div>
      </div>
    </div>
  );
};

export default Loader;
