import React from "react";
import { useLoaderData } from "react-router-dom";
import { addTODb } from "../utils/fakeDb";
import ProductCard from "./Cards/ProductCard";

const Shop = () => {
  const productData = useLoaderData();

  const handleAddToCart = (id) => {
    addTODb(id);
  };
  console.log(productData);
  return (
    <div className="product-container">
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
