import React, { useEffect, useState } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

// Import your images here
import abz from "../assets/Media/abz.jpg";
import ob from "../assets/Media/ob.png";
import everclean from "../assets/Media/everclean.jpg";
import maid2 from "../assets/Media/maid2.jpg";
import flowflex from "../assets/Media/flowflex.jpg";
import fitrite from "../assets/Media/fitrite.jpg";
import azaangoods from "../assets/Media/azaangoods.jpg";
import beliplastic from "../assets/Media/beliplastic.jpg";
import tig from "../assets/Media/tig.jpg";
import liniewee from "../assets/Media/liniewee.svg";

// Define brands with links and images
const brands = [
  { id: 1, name: "ABZS COLLECTION", image: abz, link: "/abzs-collection" },
  { id: 2, name: "ORGANIC BLOOM", image: ob, link: "/organic-bloom" },
  { id: 3, name: "EVER CLEAN", image: everclean, link: "/ever-clean" },
  { id: 4, name: "MAID 2 CLEAN", image: maid2, link: "/maid-2-clean" },
  { id: 5, name: "FLOW FLEX", image: flowflex, link: "/flow-flex" },
  { id: 6, name: "FITRITE", image: fitrite, link: "/fitrite" },
  { id: 7, name: "Azaan Goods", image: azaangoods, link: "/essentia-care" },
  { id: 8, name: "BELI PLASTIC", image: beliplastic, link: "/beli-plastic" },
  { id: 9, name: "THE ICON BY GILANIS", image: tig, link: "/the-icon" },
  { id: 10, name: "LENIEWEE", image: liniewee, link: "/leniewee" },
  { id: 11, name: "WAQAS STORE", image: liniewee, link: "/waqas-store" },
  { id: 12, name: "ABC NOODLES", image: liniewee, link: "/abc-noodles" },
];

const Brands = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: false });

    const handleScroll = () => {
      // Check scroll direction
      const currentScroll = window.pageYOffset;
      if (currentScroll > 0 && currentScroll > window.scrollY) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <a
              href={brand.link}
              key={brand.id}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center space-y-2 group"
              data-aos={scrollDirection === "down" ? "fade-down" : "fade-up"} // Toggle based on scroll direction
              data-aos-easing="ease"
              data-aos-duration="500"
            >
              {/* Circle Container */}
              <div className="w-24 h-24 bg-gray-700 rounded-full flex justify-center items-center hover:bg-gray-600 transition duration-300">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-20 h-20 object-contain rounded-full"
                />
              </div>
              {/* Text Below */}
              <p className="text-sm font-bold group-hover:text-yellow-500 transition duration-300">
                {brand.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
