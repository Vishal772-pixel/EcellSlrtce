import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assests/img/EcellLogo.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative'>
    {/* Logo */}
    <div className='absolute top-[2.3vh] left-[6%] z-50'>
    <img
          src={logo}
          alt="Logo"
          className="h-24 sm:h-28 w-auto"
        />
    </div>
    <div className='fixed top-8 right-8 sm:top-10 sm:right-10 z-50'>
      <div className="bg-black border-2 border-white rounded-xl flex items-center justify-center">
        {!isOpen && (
          <button onClick={toggleMenu} className='w-14 h-14 pl-2'>
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        )}
        <div
          className={`flex flex-col w-[18rem] bg-black p-8 fixed inset-y-0 right-0 transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transitionDuration: '0.5s' }}
        >
          <div className="flex justify-between mb-10 mt-4">
            <h2 className="text-2xl text-white font-bold">ECELL MNNIT</h2>
            <button className="text-white" onClick={toggleMenu}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          {/* Navigation Links with Smooth Scrolling */}
          <Link to="home" smooth={true} duration={500} className="text-[#808080] my-2 hover:text-white font-bold cursor-pointer" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="stats" smooth={true} duration={500} className="text-[#808080] my-2 hover:text-white font-bold cursor-pointer" onClick={toggleMenu}>
            Stats
          </Link>
          <Link to="about" smooth={true} duration={500} className="text-[#808080] my-2 hover:text-white font-bold cursor-pointer" onClick={toggleMenu}>
            About
          </Link>
          <Link to="events" smooth={true} duration={500} className="text-[#808080] my-2 hover:text-white font-bold cursor-pointer" onClick={toggleMenu}>
            Events
          </Link>
        </div>
      </div>
    </div>
    </nav>
  );
};
