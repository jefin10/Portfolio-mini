
"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 text-white bg-black">
      <div className="container flex items-center justify-between mx-auto">
        <div className="hidden space-x-8 md:flex">
          <div className="transition-colors cursor-pointer text-amber-500 hover:text-amber-300">Home</div>
          <div className="transition-colors cursor-pointer hover:text-amber-500">About</div>
          <div className="transition-colors cursor-pointer hover:text-amber-500">Portfolio</div>
          <div className="transition-colors cursor-pointer hover:text-amber-500">Contact</div>
          <div className="transition-colors cursor-pointer hover:text-amber-500">Blog</div>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <div className="hidden md:block">
          <span>Email: <span className="text-amber-500">jefinfrancis10@gmail.com</span></span>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="py-2 bg-black md:hidden">
          <div className="container flex flex-col mx-auto space-y-2">
            <div className="block px-4 py-2 rounded cursor-pointer text-amber-500 hover:bg-gray-800">Home</div>
            <div className="block px-4 py-2 rounded cursor-pointer hover:bg-gray-800 hover:text-amber-500">About</div>
            <div className="block px-4 py-2 rounded cursor-pointer hover:bg-gray-800 hover:text-amber-500">Portfolio</div>
            <div className="block px-4 py-2 rounded cursor-pointer hover:bg-gray-800 hover:text-amber-500">Contact</div>
            <div className="block px-4 py-2 rounded cursor-pointer hover:bg-gray-800 hover:text-amber-500">Blog</div>
            <div className="px-4 py-2 mt-2 border-t border-gray-700">
              <span>Email: <span className="text-amber-500">jefinfrancis10@gmail.com</span></span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;