// ProductService.ts
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ProductService = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async (limit: number) => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();

      // Limit the products to the specified number
      const limitedProducts = data.slice(0, limit);
      setProducts(limitedProducts);
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
