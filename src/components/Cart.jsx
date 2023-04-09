import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCart } from "../utils/fakeDb";
import CartItem from "./Cards/CartItem";

const Cart = () => {
  const { cartArray } = useLoaderData();
  let total = 0;
  if (cartArray.length > 0) {
    for (const product of cartArray) {
      total = total + product.price * product.quantity;
    }
  }

  console.log(cartArray);
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {cartArray.length ? "Review Cart Items" : "Cart is empty"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartArray.map((product) => (
            <CartItem key={product.id} product={product}></CartItem>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total Amount: <span className="font-semibold">{total}$</span>
          </p>
          <p className="text-gray-500">
            Not including taxes and shipping charges
          </p>
        </div>
        <div className="flex justify-e space-x-4">
          {cartArray.length > 0 ? (
            <button className="btn-outlined">Clear Cart</button>
          ) : (
            <Link to="/shop">
              <button className="btn-outlined">Back To Shop</button>
            </Link>
          )}
          <button className="btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
