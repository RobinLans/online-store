import React from "react";
import { useHistory } from "react-router-dom";

function MoreProducts({ props }) {
  const { url, title, price, id } = props;
  const history = useHistory();

  function toDetails() {
    history.push("/details/" + id);
  }

  return (
    <div
      className="flex mb-4 cursor-pointer hover:bg-black hover:bg-opacity-10"
      onClick={toDetails}
    >
      <img className="w-16 h-16 rounded" src={url} alt="shoe" />
      <div className="overflow-hidden pl-2 w-full">
        <p className="text-sm truncate mt-1">{title}</p>
        <p className="text-lg mt-1">€{price}:-</p>
        <div className="bg-primary-green h-0.5 w-full mt-1"></div>
      </div>
    </div>
  );
}

export default MoreProducts;
