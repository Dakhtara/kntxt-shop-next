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
            product.payload.quantity = 1;
            console.log(state);
            const existingProduct = state.products.find((item) => item.id === product.payload.id);
            if (existingProduct) {
                //@ts-ignore
                const products = state.products.map((item) =>
                    item.id === product.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                console.log(products);
                state.products = products;
                return;
            }
            state.products = [...state.products, product.payload];
        },
        removeItemFromCart: (state, product) => {
            //@ts-ignore
            state.products = state.products.filter((item) => item.id !== product.payload.id);
        }
    },
});

export const {addItemToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer