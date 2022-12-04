import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "/Users/Vlad/second-app/src/components/redux/cartSlicer.js";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
})