import React, { useEffect } from "react";
import "./product-grid.scss";
import ProductService from "../../services/ProductService";

const ProductGrid = () => {
  const productService = ProductService();
  
  useEffect(() => {
    productService.getAllProducts();
  }, [productService]);

  return (
    <div className="product-grid">
      <h1>kort</h1>
      {productService.products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        productService.products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductGrid;
