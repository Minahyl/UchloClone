// src/components/HomePage.jsx
import React from 'react';
import Hero from './Hero';  
import BusinessSection from './BusinessSection';
import Footer from './Footer';
import LiveStreamsec from './LiveStreamsec';
import Features from './Features'; // Import the Features component
import CardGrid from './CardGrid';
import SellerSection from './SellerSelection';
import Brands from './Brands';
import Creatorsec from './Creatorsec';
import MarketingSec from './MarketingSec';
import Marketingsec2 from './Marketingsec2';

const HomePage = () => {
  return (
    <div>
     
      <Hero />
      <Features />
      <BusinessSection />
      <LiveStreamsec />
      <CardGrid/>
      <SellerSection/>
      <Brands/>
      <Creatorsec/>
     
      <Footer />
    </div>
  );
};

export default HomePage;
