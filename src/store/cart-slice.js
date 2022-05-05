import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemName: "test item",
    cartItem: 0,
    cartTotalPrice: 0,
    cartItemPrice: 6,
  },
  reducer: {
    incrementItem(state) {
      state.cartItem = state.cartItem++;
      state.cartTotalPrice = state.cartTotalPrice + state.cartItemPrice;
    },
    decrementItem(state) {
      if (state.cartItem > 0 && state.cartTotalPrice) {
        state.cartItem = state.cartItem--;
        state.cartTotalPrice = state.cartTotalPrice - state.cartItemPrice;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
