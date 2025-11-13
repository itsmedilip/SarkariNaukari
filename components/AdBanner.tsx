
import React from 'react';

const AdBanner: React.FC = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
      <h4 className="font-semibold text-gray-700">Advertisement</h4>
      <p className="text-sm text-gray-500 mt-2">Your ad banner here. (e.g., 300x250)</p>
      <div className="bg-gray-300 w-full h-48 mt-4 flex items-center justify-center">
        <span className="text-gray-500">Ad Space</span>
      </div>
    </div>
  );
};

export default AdBanner;
