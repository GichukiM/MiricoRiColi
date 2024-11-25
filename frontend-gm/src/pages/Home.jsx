// import React from 'react'

import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import NewProducts from "../components/NewProducts";
import Newsletter from "../components/Newsletter";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <>
      <Hero />
      <NewProducts />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </>
  );
};

export default Home;
