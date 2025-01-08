import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import shop from "../assets/Media/shop.png";
import pgraphics from "../assets/Media/pgraphics.png";
import livestream from "../assets/Media/livestream.png";

const BusinessSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation occurs only once
    });
  }, []);

  const cards = [
    {
      icon: <img src={shop} alt="Shop Icon" className="w-16 h-16 mx-auto" />,
      title: "Shop Creation",
      description:
        "Quickly create a custom online shop which can be integrated into future livestreams.",
    },
    {
      icon: (
        <img src={livestream} alt="Live Stream" className="w-16 h-16 mx-auto" />
      ),
      title: "Live Streaming",
      description:
        "Ready to make some sales? Effortlessly stream direct to social media channels.",
    },
    {
      icon: (
        <img
          src={pgraphics}
          alt="Product Graphics"
          className="w-16 h-16 mx-auto"
        />
      ),
      title: "Product Graphics",
      description:
        "Create beautiful, custom on-screen product graphics that help drive eyeballs and attention.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 flex flex-col justify-start items-start text-left" >
          <h2 className="text-5xl font-bold mb-4 leading-tight text-yellow-400">
            Everything<br />you need
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-white">
            you need to build better business.
          </p>
          <button
            className="bg-yellow-400 text-black py-3 px-6 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
            data-aos="zoom-in"
          >
            START STREAMING
          </button>
        </div>

        {/* Right Cards Section */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white text-black p-8 rounded-3xl shadow-xl text-center flex flex-col items-center w-full md:w-[350px] lg:w-[400px]"
              data-aos="flip-left"
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600 text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
