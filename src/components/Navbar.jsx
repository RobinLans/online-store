import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart } from "../redux/reducers/manageCart";

import { HiShoppingCart } from "react-icons/hi";
import Cart from "./Cart";

function Navbar() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const amountInCart = useSelector((state) => {
    return state.manageCart.value.inCart;
  });

  useEffect(() => {
    dispatch(incrementCart());
  }, []);

  function closeCart() {
    setShowModal(false);
  }

  return (
    <div className="relative bg-primary-lBeige w-2/3 xl:w-nav h-20 mt-4 mb-4 myBorder flex justify-between items-center">
      <div>
        <Link to="/" className="m-4 text-2xl">
          The Store
        </Link>
      </div>
      <nav className="flex">
        <Link to="/" className="mr-6 text-2xl pb-1">
          Products
        </Link>
        <Link to="/about" className="mr-6 text-2xl">
          About
        </Link>
        <button
          className="mr-6 text-4xl text-primary-blue "
          onClick={() => {
            setShowModal(true);
          }}
        >
          <HiShoppingCart />
        </button>
        <div className="absolute w-5 h-5 bg-primary-green top-2 right-4 rounded-full text-center text-primary-lBeige text-xs">
          <p className="mt-0.5">{amountInCart}</p>
        </div>
      </nav>
      {showModal && <Cart closeCart={closeCart} />}
    </div>
  );
}

export default Navbar;
