import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

// ProductService.js

const ProductService = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.error("Could not fetch products", error);
    }
  };

  return {
    getAllProducts,
    products,
  };
};

export default ProductService;
