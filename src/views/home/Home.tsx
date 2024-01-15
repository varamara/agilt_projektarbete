import React from "react";
import Hero from "../../components/hero/Hero";
import Category_selection from "../../components/CategorySelection/CategorySelection";
import ProductGrid from "../../components/productGrid/ProductGrid";

const Home: React.FC = () => {
  return (
    <>
    <Hero />
    <Category_selection />
    <ProductGrid />
    </>
  );
};

export default Home;
