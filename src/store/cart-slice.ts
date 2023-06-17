import { createSlice } from "@reduxjs/toolkit";
interface CartState {
    products: any[];
}
const initialState: CartState = {
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
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