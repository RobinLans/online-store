import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCart, showPopup } from "../redux/reducers/manageCart";
import { addToCart } from "../utilities/addToCart";

function ProductCard({ props }) {
  const [hoveringCard, setHoveringCard] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { id, title, price, url, description, qty } = props;

  function toDetails() {
    history.push("/details/" + id);
  }

  function handleAddToCart() {
    addToCart(title, url, id, price);
    dispatch(incrementCart());
    dispatch(showPopup(true));
    setTimeout(() => {
      dispatch(showPopup(false));
    }, 1000);
  }

  return (
    <div
      className={`relative w-56 h-80 bg-primary-beige border-2 border-primary-blue rounded-lg overflow-hidden mb-0 ${
        hoveringCard ? "shadow-lg" : "shadow"
      } transition-shadow `}
      onMouseEnter={() => {
        setHoveringCard(true);
      }}
      onMouseLeave={() => {
        setHoveringCard(false);
        setShowDesc(false);
      }}
    >
      {hoveringCard && (
        <>
          <button
            className="absolute bg-primary-blue p-1 mt-1 ml-2 rounded text-primary-lBeige z-10"
            onClick={toDetails}
          >
            View
          </button>
          <button
            className="absolute w-8 h-8 text-lg bg-primary-blue right-1 mt-1  rounded-full text-primary-lBeige z-10"
            onClick={() => setShowDesc(!showDesc)}
          >
            i
          </button>
        </>
      )}
      {showDesc && (
        <p className="absolute pt-11 px-2 h-60 text-center overflow-hidden bg-black bg-opacity-50 text-white">
          {description}
        </p>
      )}
      {qty > 0 ? (
        <></>
      ) : (
        <>
          <div className="absolute w-full h-60 bg-black opacity-20"></div>
          {!showDesc && (
            <p className="absolute bottom-20 left-16 text-red-500">
              Out Of Stock
            </p>
          )}
        </>
      )}
      <div>
        <img
          className="w-56 h-60 border-b-2 border-primary-blue"
          src={url}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="truncate w-44 text-center">{title}</p>
        <div className="flex justify-between mt-1 ">
          <p className="mr-6 p-1 text-xl ">€{price}:-</p>
          <button
            className="bg-primary-blue text-primary-lBeige ml-4 p-1 rounded"
            disabled={`${qty > 0 ? "" : "disabled"}`}
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
