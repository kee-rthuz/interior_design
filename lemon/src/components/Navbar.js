import React from 'react';
import { Phone, Menu } from 'lucide-react';
import Bt from '../asstes/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between shadow-lg items-center px-4 bg-white h-16 sm:h-20 md:h-24 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <img src={Bt} alt="Logo" className="h-8 sm:h-10 md:h-12 mr-4" />
      </div>
      <a href="tel:9895677008" className="flex items-center text-gray-600 ml-auto">
        <Phone size={16} className="mr-1 sm:mr-2" />
        <span className="text-sm sm:text-base md:text-lg hidden sm:block">98956 77008</span>
      </a>
    </header>
  );
};

export default Header;
