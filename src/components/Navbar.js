"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="p-4 text-white bg-black">
      <div className="container flex items-center justify-between mx-auto">
        <div className="hidden space-x-8 md:flex">
          <Link href="/" className={`transition-colors cursor-pointer ${isActive('/') ? 'text-amber-500' : 'hover:text-amber-500'}`}>
            Home
          </Link>
          <Link href="/about" className={`transition-colors cursor-pointer ${isActive('/about') ? 'text-amber-500' : 'hover:text-amber-500'}`}>
            About
          </Link>
          <Link href="/skills" className={`transition-colors cursor-pointer ${isActive('/skills') ? 'text-amber-500' : 'hover:text-amber-500'}`}>
            Skills
          </Link>
          <Link href="/projects" className={`transition-colors cursor-pointer ${isActive('/projects') ? 'text-amber-500' : 'hover:text-amber-500'}`}>
            Projects
          </Link>
          <Link href="/contact" className={`transition-colors cursor-pointer ${isActive('/contact') ? 'text-amber-500' : 'hover:text-amber-500'}`}>
            Contact
          </Link>
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
            <Link href="/" onClick={closeMenu} className={`block px-4 py-2 rounded cursor-pointer ${isActive('/') ? 'text-amber-500' : 'hover:text-amber-500'} hover:bg-gray-800`}>
              Home
            </Link>
            <Link href="/about" onClick={closeMenu} className={`block px-4 py-2 rounded cursor-pointer ${isActive('/about') ? 'text-amber-500' : 'hover:text-amber-500'} hover:bg-gray-800`}>
              About
            </Link>
            <Link href="/skills" onClick={closeMenu} className={`block px-4 py-2 rounded cursor-pointer ${isActive('/skills') ? 'text-amber-500' : 'hover:text-amber-500'} hover:bg-gray-800`}>
              Skills
            </Link>
            <Link href="/projects" onClick={closeMenu} className={`block px-4 py-2 rounded cursor-pointer ${isActive('/projects') ? 'text-amber-500' : 'hover:text-amber-500'} hover:bg-gray-800`}>
              Projects
            </Link>
            <Link href="/contact" onClick={closeMenu} className={`block px-4 py-2 rounded cursor-pointer ${isActive('/contact') ? 'text-amber-500' : 'hover:text-amber-500'} hover:bg-gray-800`}>
              Contact
            </Link>
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