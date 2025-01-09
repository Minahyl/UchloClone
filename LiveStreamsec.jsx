import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import the AOS styles

import liveStreamingImage from "../assets/Media/image7.png";

const LiveStreamsec = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with 'once: false' to trigger animations on both scroll up and down
  }, []);

  return (
    <section className="bg-white py-18">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div
          className="text-center md:text-left md:w-2/3"
          data-aos="fade-up" // Add fade-up animation to this element
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UCHLO LIVESTREAMS
          </h2>
          <p className="text-2xl md:text-3xl text-[#322F2F] mb-4">
            Experience Livestreams for best shopping experience
          </p>
        </div>

        {/* Right Image */}
        <div
          className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center md:justify-end"
          data-aos="fade-down" // Add fade-down animation to this element
        >
          <img
            src={liveStreamingImage}
            alt="Live Streaming"
            className="h-48 md:h-56 lg:h-64 w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveStreamsec;
