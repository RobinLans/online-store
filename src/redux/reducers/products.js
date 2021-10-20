import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: { value: [] },
  reducers: {
    populateProductsList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { populateProductsList } = productsSlice.actions;

export default productsSlice.reducer;
