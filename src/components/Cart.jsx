import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProductInCart from "./ProductInCart";
import PlacedOrder from "./PlacedOrder";

function Cart({ closeCart }) {
  const productsInCart = JSON.parse(localStorage.getItem("cart"));
  const [orderPlaced, setOrderPlaced] = useState(false);
  const history = useHistory();

  let sum = 0;

  function totalValue() {
    productsInCart?.forEach((item) => {
      sum += item.price * item.qty;
    });
  }

  totalValue();

  function cancelOrder(ToF) {
    setOrderPlaced(ToF);
  }

  return (
    <div
      className="z-20 flex justify-between absolute h-modal w-modal top-full left-10 mt-6 bg-primary-lBeige myBorder"
      id="cart"
    >
      <div className="relative w-nav">
        <h1 className="text-2xl mt-2 ml-4">Your Cart</h1>
        <div className=" h-4/5 overflow-y-auto">
          {productsInCart?.map((product, index) => {
            return <ProductInCart props={product} key={index} />;
          })}
        </div>
        <button
          className="myButton absolute bottom-4 left-72
        "
          onClick={() => {
            closeCart(false);
            history.push("/");
          }}
        >
          More Products
        </button>
      </div>
      <div className="h-5/6 w-1 ml-10  my-10 bg-primary-green"></div>
      <div className="flex flex-col  w-72 items-center">
        <button
          className="absolute right-2 top-1 text-3xl font-bold"
          onClick={() => {
            closeCart(false);
          }}
        >
          X
        </button>
        <h1 className="text-3xl mt-20">€{sum}:-</h1>

        {orderPlaced && sum > 0 ? (
          <PlacedOrder cancelOrder={cancelOrder} />
        ) : (
          <button
            className="myButton mt-36"
            onClick={() => {
              setOrderPlaced(true);
            }}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
