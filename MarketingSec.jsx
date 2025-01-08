import React from "react";
import Creatorimg3 from "../assets/Media/Creatorimg3.png";

const MarketingSec = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-white px-8 py-12 md:py-20">
      {/* Text Content */}
      <div className="max-w-md text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug">
          <span className="text-[#fcb900]">Marketing</span> <br />
          that matters
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Time to drop that megaphone and stop shouting offers into the black
          hole of the Internet. With Uchlo, it's like you’ve got a backstage
          pass to your customers’ favorite show. Get ready to move some maal!
        </p>
        {/* Social Icons */}
        <div className="flex items-center space-x-4 mt-6">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/TikTok_logo.svg"
              alt="TikTok"
              className="w-8 h-8"
            />
          </a>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube"
              className="w-8 h-8"
            />
          </a>
        </div>
        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-[#fcb900] text-white font-semibold text-lg rounded-md shadow-lg hover:bg-[#e5a600] transition-all">
          Go Live
        </button>
      </div>
      {/* Image */}
      <div className="relative w-full max-w-md md:max-w-lg">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#fcb900] rounded-full z-0"></div>
        <img
          src={Creatorimg3}
          alt="Marketing Illustration"
          className="relative z-10"
        />
      </div>
    </div>
  );
};

export default MarketingSec;
