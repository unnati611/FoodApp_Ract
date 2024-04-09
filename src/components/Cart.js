import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-bold border">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1 className="text-center text-2xl font-bold m-4 p-4">
            Ohh!!🙁Your Cart is Empty🧐🧐!!Please add Some items😋😋😋
          </h1>
        )}
        <ItemList items={cartItems} />
        <button
          className="bg-black text-white m-4 p-4 rounded-lg"
          onClick={handleclearCart}
        >
          Clear Cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
