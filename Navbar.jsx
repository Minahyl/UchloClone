import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/Media/uchlologo.png'; // Adjust the path if necessary

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full h-20 md:h-24">
      <div className="flex justify-between items-center w-full mx-auto px-4 md:px-8 h-full">
        {/* Logo on the Left */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center h-full">
            <img
              src={logo}
              alt="Uchlo Logo"
              className="h-12 md:h-16 w-auto object-contain" // Responsive height for the logo
            />
          </div>
        </Link>

        {/* Login and Signup on the Right */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Login Button with User Icon */}
          <Link
            to="https://uchlo.com/auth/login"
            className="flex items-center space-x-1 md:space-x-2 bg-yellow-400 text-black text-sm md:text-base font-medium px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-yellow-500 transition"
          >
            <FaUser />
            <span>LOGIN</span>
          </Link>

          {/* Sign Up Button */}
          <Link
            to="https://uchlo.com/auth/register"
            className="bg-black text-white text-sm md:text-base font-medium px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-gray-900 transition"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
