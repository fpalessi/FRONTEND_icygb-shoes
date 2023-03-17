import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    qty: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // this state mutation is only for react redux
      state.qty += 1; //-> cart quantity number
      // payload = new product
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.qty;
    },
    clearCart: (state) => {
      state.products = [];
      state.qty = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
