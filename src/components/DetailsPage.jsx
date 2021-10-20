import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incrementCart, showPopup } from "../redux/reducers/manageCart";
import { addToCart } from "../utilities/addToCart";

import MoreProducts from "./MoreProducts";

function DetailsPage() {
  const inputValue = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();

  const products = useSelector((state) => {
    return state.products.value;
  });

  const product = products.filter((product) => {
    return product.id === id;
  });

  const { title, price, description, qty, url } = product[0];

  function handleAddToCart() {
    if (inputValue.current.value) {
      addToCart(title, url, id, price, inputValue.current.value);
    } else {
      addToCart(title, url, id, price);
    }
    dispatch(incrementCart());
    dispatch(showPopup(true));
    setTimeout(() => {
      dispatch(showPopup(false));
    }, 1000);
  }

  return (
    <>
      <div className="ml-8">
        <div className="flex items-end">
          <h1 className="text-3xl mt-2">{title}</h1>
          <p className="text-xs ml-4 mb-1 opacity-50">{id}</p>
        </div>
        <div className="flex mt-1">
          <img src={url} alt="shoes" className="srb" />
          <div className="flex flex-col ml-32">
            <span className="text-3xl">€{price}:-</span>
            <input
              type="number"
              className={`mt-4 w-10  srb pl-2 ${
                qty > 0 ? "bg-primary-lBeige" : "bg-gray-300"
              }`}
              disabled={`${qty > 0 ? "" : "disabled"}`}
              ref={inputValue}
              defaultValue="1"
            />

            <button
              className="myButton mt-6"
              onClick={handleAddToCart}
              disabled={`${qty > 0 ? "" : "disabled"}`}
            >
              Add To Cart
            </button>
            <p
              className={`text-xs opacity-70 mt-1 ${
                qty > 0 ? "" : "text-red-500"
              }`}
            >
              {qty > 0 ? "In Stock" : "Out of stock"}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <span className="text-xl font-bold">Description</span>
          <div className="bg-primary-green h-1 w-28"></div>
          <p className="mt-2 mb-8 ">{description}</p>
        </div>
      </div>
      <div className="h-special2 w-4 mx-10 my-10 bg-primary-green"></div>
      <div className=" w-full mr-10">
        <h1
          className="mt-4 text-xl text-center cursor-pointer underline"
          onClick={() => {
            history.push("/");
          }}
        >
          More Products
        </h1>
        <div className=" h-special1 overflow-auto mt-2">
          {products?.map((product, index) => (
            <MoreProducts props={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
