import React from "react";
import CreatorImage from "../assets/Media/creatorimg1.png"; // Your image path
import BackgroundShape from "../assets/Media/creatorimg2.png"; // Your background shape path

const CreatorSection = () => {
  return (
    <section className="relative bg-white py-16 px-4">
      {/* Button */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-orange-600 transition">
          MORE STORES →
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Image Section */}
        <div className="relative flex justify-center">
          {/* Background Shape */}
          <img
            src={BackgroundShape}
            alt="Background Shape"
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[60%] z-0"
          />
          {/* Creator Image */}
          <img
            src={CreatorImage}
            alt="Creator"
            className="relative z-10 w-[70%] md:w-[90%]"
          />
        </div>

        {/* Right Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            The power of creators!
          </h1>
          <p className="text-lg font-semibold text-gray-600 mt-4">
            Influence meets impact
          </p>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            You've got an audience that would follow you to the ends of the
            earth (or at least to the end of their feed). But are you making the
            most of it? Are you rolling in dough, or just rolling out content?
            With Uchlo, you can do both—create and cash in!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
