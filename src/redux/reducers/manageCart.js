import { createSlice } from "@reduxjs/toolkit";

export const manageCartSlice = createSlice({
  name: "manageCart",
  initialState: { value: { inCart: 0, showCart: false } },
  reducers: {
    incrementCart: (state) => {
      const itemsInCart = JSON.parse(localStorage.getItem("cart"));

      let totalQty = 0;

      itemsInCart?.forEach((item) => {
        totalQty += item.qty;
      });

      state.value.inCart = totalQty;
    },
    decrementCart: (state, action) => {
      const itemsInCart = JSON.parse(localStorage.getItem("cart"));

      const indx = itemsInCart.findIndex((item) => item.id === action.payload);

      if (itemsInCart[indx].qty === 1) {
        itemsInCart.splice(indx, indx >= 0 ? 1 : 0);
        localStorage.setItem("cart", JSON.stringify(itemsInCart));
      } else {
        itemsInCart[indx].qty--;
        localStorage.setItem("cart", JSON.stringify(itemsInCart));
      }

      let totalQty = 0;

      itemsInCart.forEach((item) => {
        totalQty += item.qty;
      });

      state.value.inCart = totalQty;
    },
    showPopup: (state, action) => {
      state.value.showCart = action.payload;
    },
    clearCart: (state) => {
      state.value.inCart = 0;
    },
  },
});

export const { incrementCart, showPopup, decrementCart, clearCart } =
  manageCartSlice.actions;

export default manageCartSlice.reducer;
