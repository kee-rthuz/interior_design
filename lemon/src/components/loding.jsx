import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="loader relative w-12 h-12 border-4 border-t-4 border-blue-400 rounded-full mb-4 animate-spin">
          <div className="beating-point absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-beat"></div>
        </div>
        {/* <h2 className="text-gray-700 text-xl font-semibold ">Loading...</h2> */}
      </div>
    </div>
  );
};

export default LoadingPage;
