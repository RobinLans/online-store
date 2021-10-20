export function addToCart(title, url, id, price, inputQty = 1) {
  let alreadyInCart = JSON.parse(localStorage.getItem("cart"));

  let toAdd = [];

  if (inputQty === 1) {
    if (alreadyInCart?.length > 0) {
      const indx = alreadyInCart.findIndex((item) => item.id === id);

      if (indx >= 0) {
        alreadyInCart[indx].qty++;
        localStorage.setItem("cart", JSON.stringify(alreadyInCart));
      } else {
        alreadyInCart.push({ title, url, id, price, qty: 1 });
        localStorage.setItem("cart", JSON.stringify(alreadyInCart));
      }
    } else {
      toAdd.push({ title, url, id, price, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(toAdd));
    }
  } else {
    if (alreadyInCart?.length > 0) {
      const indx = alreadyInCart.findIndex((item) => item.id === id);

      if (indx >= 0) {
        alreadyInCart[indx].qty =
          Number(alreadyInCart[indx].qty) + Number(inputQty);
        localStorage.setItem("cart", JSON.stringify(alreadyInCart));
      } else {
        alreadyInCart.push({ title, url, id, price, qty: Number(inputQty) });
        localStorage.setItem("cart", JSON.stringify(alreadyInCart));
      }
    } else {
      toAdd.push({ title, url, id, price, qty: Number(inputQty) });
      localStorage.setItem("cart", JSON.stringify(toAdd));
    }
  }
}
