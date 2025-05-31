import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.cartItems = action.payload;
    },
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cartItems.splice(action.payload, 1);
    },
  },
});

export const { setCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
