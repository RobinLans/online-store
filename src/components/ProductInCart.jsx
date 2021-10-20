import React from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../utilities/addToCart";
import { incrementCart, decrementCart } from "../redux/reducers/manageCart";

function ProductInCart({ props }) {
  const dispatch = useDispatch();
  const productsInCart = JSON.parse(localStorage.getItem("cart"));

  const indx = productsInCart.findIndex((item) => item.id === props.id);

  return (
    <div className="flex relative h-20 w-4/3 ml-4 mr-10 my-4 srb bg-primary-dBeige items-center">
      <img src={props.url} alt="shoe" className="w-16 h-16 ml-2 rounded " />
      <div>
        <div className="flex items-end w-96 mr-10">
          <h4 className="ml-2 text-lg">{props.title}</h4>
          <p className="items-end ml-2 text-xs opacity-50 object-bottom mb-1">
            {props.id}
          </p>
        </div>
        <h4 className="ml-2 text-lg">€{props.price}:-</h4>
      </div>
      <div className="flex absolute right-0 top-2">
        <button
          className="text-5xl mt-1 mr-2"
          onClick={() => {
            dispatch(decrementCart(props.id));
          }}
        >
          -
        </button>
        <input
          type="number"
          value={productsInCart[indx].qty}
          className={"mt-4 w-10 h-8  srb pl-3 bg-primary-lBeige"}
        />
        <button
          className="text-4xl mt-2 mx-2"
          onClick={() => {
            addToCart(props.title, props.url, props.id, props.price);
            dispatch(incrementCart());
            setCurrentQty((prevQty) => prevQty + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductInCart;
