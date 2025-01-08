import React from "react";
import uchlologo2 from "../assets/Media/uchlologo2.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Flex Container */}
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start">
            {/* Logo Section */}
            <div className="mb-4">
              <img src={uchlologo2} alt="Uchlo Logo" className="h-8" />
            </div>

            {/* Horizontal Line Below Logo */}
            <div className="w-full h-px bg-yellow-400 mb-6"></div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right mt-8 md:mt-0">
            <div className="mb-4">
              <a
                href="#"
                className="text-white hover:underline mx-3 text-sm md:text-base"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:underline mx-3 text-sm md:text-base"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white hover:underline mx-3 text-sm md:text-base"
              >
                Privacy Policy
              </a>
            </div>
            <div className="text-sm">
              Powered by{" "}
              <span className="font-bold">
                METAMORPH DIGITAL (PRIVATE) LIMITED
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
