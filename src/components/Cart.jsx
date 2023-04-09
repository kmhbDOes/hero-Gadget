import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../utils/fakeDb";

const Cart = () => {
  const pData = useLoaderData();
  let cart = [];
  const savedCart = getStoredCart();
  for (const id in savedCart) {
    const foundProduct = pData.find((product) => product.id === id);
    if (foundProduct) {
      cart.push(foundProduct);
    }
  }
  console.log(cart);
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
        laudantium.
      </h1>
    </div>
  );
};

export default Cart;
