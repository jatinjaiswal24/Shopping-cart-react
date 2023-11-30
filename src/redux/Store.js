import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./Slices/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    ///////this was the changee //////////////////////////
  },
});
