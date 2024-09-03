import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./fetures/cartSlice"

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    },
})