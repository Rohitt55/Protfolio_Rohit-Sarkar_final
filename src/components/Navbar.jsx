import React, { useState } from 'react';
import { MdMailOutline } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='border-b border-gray-600'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-6 relative'>
        {/* Left: Mail */}
        <div className='flex items-center gap-2'>
          <span className='p-2 bg-gray-800 rounded-full'>
            <MdMailOutline className='text-white' />
          </span>
          <span className={`${isMenuOpen ? "hidden" : "block"}`}>
            hello@Rohit.com
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div
          className='md:hidden z-50 cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-300 my-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <ul className='flex space-x-6'>
            <li>
              <a
                href="https://www.linkedin.com/in/rohit-sarkar-878697275/"
                className='text-gray-300 hover:text-white'
              >
                LinkedIn
              </a>
              <span className='ml-2 text-gray-300'>/</span>
            </li>
            <li>
              <a
                href="#"
                className='text-gray-300 hover:text-white'
              >
                Github
              </a>
              <span className='ml-2 text-gray-300'>/</span>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1CgCZRa1b3/?mibextid=wwXIfr"
                className='text-gray-300 hover:text-white'
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex items-center justify-center z-40`}
        >
          <ul className='flex flex-col space-y-8 text-center'>
            <li>
              <a
                onClick={() => setIsMenuOpen(true)}
                href="https://www.linkedin.com/in/rohit-sarkar-878697275/"
                className='text-gray-300 hover:text-white'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMenuOpen(false)}
                href="#"
                className='text-gray-300 hover:text-white'
              >
                Github
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMenuOpen(true)}
                href="https://www.facebook.com/share/1CgCZRa1b3/?mibextid=wwXIfr"
                className='text-gray-300 hover:text-white'
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className='fixed inset-0 bg-black/50 z-30 md:hidden'
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
