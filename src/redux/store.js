import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";
import manageCartReducer from "./reducers/manageCart";

export default configureStore({
  reducer: {
    products: productsReducer,
    manageCart: manageCartReducer,
  },
});
