import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/reducers/manageCart";

function PlacedOrder(props) {
  const dispatch = useDispatch();
  console.log(props);

  return (
    <>
      <p className="mt-36 text-sm opacity-70">Your order number:</p>
      <h1 className="text-3xl">{Math.floor(Math.random() * 1000000)}</h1>
      <button
        className="myButtonRed absolute bottom-4"
        onClick={() => {
          localStorage.clear();
          props.cancelOrder(false);
          dispatch(clearCart());
        }}
      >
        Cancel Order
      </button>
    </>
  );
}

export default PlacedOrder;
