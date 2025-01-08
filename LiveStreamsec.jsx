import React from "react";
import liveStreamingImage from "../assets/Media/image7.png";

const LiveStreamsec = () => {
  return (
    <section className="bg-white py-16"> {/* Increased vertical padding */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UCHLO LIVESTREAMS
          </h2>
          <p className="text-4xl md:text-5xl text-[#322F2F] mb-4">
  Experience Livestreams for best shopping experience
</p>

        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
          <img
            src={liveStreamingImage}
            alt="Live Streaming"
            className="h-28 md:h-36 lg:h-40" // Increased image size
          />
        </div>
      </div>
    </section>
  );
};

export default LiveStreamsec;
