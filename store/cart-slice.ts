import Product from "@/models/Product";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: <Product[]> [],
    },
    reducers: {
        addItemToCart: (state, product) => {
            //@ts-ignore
            state.products = [...state.products, product];
        },
        removeItemFromCart: (state, product) => {
            //@ts-ignore
            state.products = state.products.filter((item) => item.id !== product.id);
        }
    },
});

export const {addItemToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer