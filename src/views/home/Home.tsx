import React from "react";
import Hero from "../../components/hero/Hero";
import Category_selection from "../../components/CategorySelection/CategorySelection";
import Brands from "../../components/brands/Brands"

const Home: React.FC = () => {
  return (
    <>
    <Hero />
    <Category_selection />
    <Brands />
    </>
  );
};

export default Home;
