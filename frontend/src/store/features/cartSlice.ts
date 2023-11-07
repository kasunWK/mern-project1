import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const cartSlice = createSlice({
  name: "cart",
  initialState: <CartItem[]>[],
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      state.push(action.payload);
    },
    editItemFromCart(state, action: PayloadAction<CartItem>) {
      state = state.filter((item) => item.id != action.payload.id);
      state.push(action.payload);
      return state;
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      return state.filter((e) => e.id != action.payload);
    },
    clearCart(_) {
      return [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  editItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state: RootState): CartItem[] => {
  return state.cart;
};
