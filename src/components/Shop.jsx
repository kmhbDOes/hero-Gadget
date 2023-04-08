import React from "react";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const productData = useLoaderData();
  console.log(productData);
  return <div>Shop Component</div>;
};

export default Shop;
