import React from "react";
import Creatorimg4 from "../assets/Media/Creatorimg4.png"; // Replace with your new image path

const Marketingsec2 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-white px-8 py-12 md:py-20">
      {/* Text Content */}
      <div className="max-w-md text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug">
          From soch to <br />
          stream to sale - <br />
          all in one place!
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Time to drop that megaphone and stop shouting offers into the black
          hole of the Internet. With Uchlo, it's like you’ve got a backstage
          pass to your customers’ favorite show. Get ready to move some maal!
        </p>
        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-[#fcb900] text-white font-semibold text-lg rounded-md shadow-lg hover:bg-[#e5a600] transition-all">
          Start Sharing
        </button>
      </div>
      {/* Image Section */}
      <div className="relative w-full max-w-md md:max-w-lg">
        {/* Background Circle */}
        <div className="absolute -top-10 -left-10 w-48 h-48 md:w-64 md:h-64 bg-[#fcb900] rounded-full z-0"></div>
        {/* Image */}
        <img
          src={Creatorimg4}
          alt="Marketing Creator"
          className="relative z-10"
        />
      </div>
    </div>
  );
};

export default Marketingsec2;
