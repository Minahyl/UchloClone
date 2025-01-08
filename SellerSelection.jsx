import React from "react";

const SellerSection = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-white text-left">
      <a href="#">
        <button className="bg-yellow-500 text-white font-bold text-base py-2 px-6 rounded-full shadow-md mb-5 transition duration-300 ease-in-out hover:bg-yellow-400 hover:shadow-lg">
          EXPLORE MORE STREAMS →
        </button>
      </a>
      <div className="flex flex-col items-start w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800">UCHLO SELLERS</h1>
        <p className="text-base text-gray-600 mt-1">Best stores on uchlo sellers</p>
      </div>
    </div>
  );
};

export default SellerSection;
