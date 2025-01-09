import React from "react";
import uchlologo2 from "../assets/Media/uchlologo2.png";

const Footer = () => {
  return (
    <footer>
      {/* Upper Footer Section */}
      <div style={{ backgroundColor: "#F9B327" }} className="text-white py-8">
        <div className="container mx-auto px-4">
          {/* Flex Container */}
          <div className="flex flex-col items-center md:flex-row justify-between">
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start">
              {/* Logo Section */}
              <div className="mb-6">
                <img src={uchlologo2} alt="Uchlo Logo" className="h-12" />
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
            </div>
          </div>
        </div>
      </div>

      {/* Division Line */}
      <div className="bg-black h-px w-full opacity-50"></div> {/* Slightly black line */}

      {/* Lower Footer Section */}
      <div style={{ backgroundColor: "#F9B327" }} className="text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Media Icons (Left) */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <i className="fab fa-facebook-f text-3xl"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <i className="fab fa-instagram text-3xl"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80">
                <i className="fab fa-twitter text-3xl"></i>
              </a>
            </div>

            {/* Powered By Text (Right) */}
            <div className="text-sm text-center md:text-right">
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
