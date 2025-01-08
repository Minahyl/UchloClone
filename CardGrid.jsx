import React from "react";
import card2 from "../assets/Media/card2.png";
import card3 from "../assets/Media/card3.png";
import card4 from "../assets/Media/card4.png";

const cards = [
  {
    image: card4,
    username: "Anonymous here",
    time: "1 month(s) ago",
    id: "M",
  },
  {
    image: card3,
    username: "testing",
    time: "1 month(s) ago",
    id: "T",
  },
  {
    image: card2,
    username: "15",
    time: "6 month(s) ago",
    id: "W",
  },
  {
    image: card3,
    username: "Organic Bloom Show...",
    time: "6 month(s) ago",
    id: "X",
  },
];

const CardGrid = () => {
  return (
    <div className="bg-gray-900 py-8 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden flex flex-col items-center p-4 shadow-lg"
          >
            <img
              src={card.image}
              alt="Card"
              className="w-full h-auto rounded-md"
            />
            <div className="flex items-center justify-between w-full mt-4 bg-gray-700 p-2 rounded-md">
              <div className="w-10 h-10 bg-gray-600 text-white text-center font-bold flex items-center justify-center rounded-full shadow-md">
                {card.id}
              </div>
              <p className="text-white text-sm truncate mx-2 flex-grow">
                {card.username}
              </p>
              <div className="text-xs bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full whitespace-nowrap">
                {card.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
