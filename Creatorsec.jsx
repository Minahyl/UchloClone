import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import CreatorImage from "../assets/Media/creatorimg1.png"; // image path


const CreatorSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // 
    });
  }, []);

  return (
    <section className="relative bg-white py-16 px-4">
      {/* Button */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <a href="#">
          <button
            className="bg-yellow-500 text-white font-bold text-base py-2 px-6 rounded-full shadow-md mb-5 transition duration-300 ease-in-out hover:bg-yellow-400 hover:shadow-lg"
            data-aos="zoom-in"
            onClick={() => (window.location.href = "https://uchlo.com/streams")}
          >
            MORE STORIES →
          </button>
        </a>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Image Section */}
        <div
          className="relative flex justify-center"
          data-aos="fade-right"
        >
          {/* Background Shape */}
         
          {/* Creator Image */}
          <img
            src={CreatorImage}
            alt="Creator"
            className="relative z-10 w-[70%] md:w-[90%] mt-10"
          />
        </div>

        {/* Right Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            The power of creators!
          </h1>
          <p className="text-2xl font-semibold text-gray-600 mt-4">
            Influence meets impact
          </p>
          <p className="text-base text-gray-500 mt-4 leading-relaxed">
            You've got an audience that would follow you to the ends of the
            earth (or at least to the end of their feed). But are you making the
            most of it? Are you rolling in dough, or just rolling out content?
            With Uchlo, you can do both—create and cash in!
          </p>

          {/* "GO LIVE" Button beneath the text */}
          <div className="mt-6">
            <a href="#">
              <button
                className="bg-yellow-500 text-white font-bold text-base py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-yellow-400 hover:shadow-lg"
                data-aos="zoom-in"

                onClick={() => (window.location.href = "https://uchlo.com/auth/login")}
              >
                GO LIVE
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
