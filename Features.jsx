import React from "react";
import product from "../assets/Media/product.png";
import audience from "../assets/Media/audience.png";
import str from "../assets/Media/str.png";

const Features = () => {
  const features = [
    {
      icon: <img src={str} alt="Live Streaming" className="w-10 h-10" />,
      title: "Live Streaming",
      description: "Stream hassle-free to your socials instantly.",
    },
    {
      icon: <img src={product} alt="Customizable Product Display" className="w-10 h-10" />,
      title: "Customizable Product Display",
      description: "Make your products look irresistible.",
    },
    {
      icon: <img src={audience} alt="Audience Engagement Tools" className="w-10 h-10" />,
      title: "Audience Engagement Tools",
      description: "Leverage the power of 2-way interactions.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-12 bg-white px-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-4 text-left w-full md:w-1/3"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
