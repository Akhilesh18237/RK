
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <img 
            src="/lovable-uploads/587fb62d-9f0f-4d7d-842b-ec859b5498a3.png"
            alt="Rama Krishna Metal"
            className="w-32 h-32 mx-auto animate-pulse"
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Rama Krishna Metal</h2>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
