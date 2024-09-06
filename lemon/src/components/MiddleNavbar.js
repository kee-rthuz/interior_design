import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = ['All', 'Bedroom', 'Kitchen', 'Living', 'Others'];

  return (
    <nav className="flex flex-row -ml-6 justify-center space-x-2 p-4 overflow-x-auto md:justify-start md:space-x-4 md:p-0 md:static">
      {/* Navigation tabs */}
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`block px-3 py-2 text-base md:text-xl font-bold rounded-md ${
            activeTab === tab
              ? 'text-blue-400'
              : 'text-[#000] hover:text-blue-400'
          } mb-2 md:mb-0`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
