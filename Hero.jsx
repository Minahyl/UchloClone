import React, { useState, useEffect } from 'react';
import image3 from '../assets/media/image3.png'; // Adjust the path if necessary

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Add a small delay to ensure the animation triggers

    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  return (
    <section
      className="relative bg-gray-100 bg-cover bg-center h-screen md:h-[88vh]"
      style={{ backgroundImage: `url(${image3})` }}
    >
      <div className="flex items-center justify-start h-full px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="text-left max-w-xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Unlock more revenue through streaming
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-8">
            Whether you're a content creator, a brand, or a small business – Uchlo can help supercharge your revenues. Sign up and see for yourself how you can 10x your conversion rates!
          </p>

          {/* CTA Button with Conditional Animation */}
          <a
            href="https://uchlo.com/auth/register"
            className={`bg-black text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium shadow-lg hover:bg-gray-900 transition duration-300 transform ${
              animate ? 'animate-zoom-in' : 'opacity-0 scale-0'
            }`}
          >
            <b>GET STARTED</b>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
