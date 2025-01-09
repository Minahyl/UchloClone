import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const SellerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initializing AOS
  }, []);

  return (
    <div className="flex flex-col items-center p-5 bg-white text-left">
      <a href="#">
        <button
          className="bg-yellow-500 text-white font-bold text-base py-2 px-6 rounded-full shadow-md mb-5 transition duration-300 ease-in-out hover:bg-yellow-400 hover:shadow-lg"
          data-aos="zoom-in" // Zoom-in effect on scroll
          data-aos-easing="ease" // Smooth easing
          data-aos-duration="400" // Animation duration
          data-aos-delay="0" // No delay

          onClick={() => (window.location.href = "https://uchlo.com/streams")}
        >
          EXPLORE MORE STREAMS →
        </button>
      </a>
      <div
        className="flex flex-col w-full max-w-3xl pl-0 items-start"
        data-aos="fade-up" // Fade-up effect on scroll
        data-aos-easing="ease" // Smooth easing
        data-aos-duration="400" // Animation duration
        data-aos-delay="0" // No delay
      >
        <h1 className="text-4xl font-bold text-gray-800 text-left">UCHLO SELLERS</h1>
        <p className="text-4xl text-gray-600 mt-1 text-left">Best stores on uchlo sellers</p>
      </div>
    </div>
  );
};

export default SellerSection;
