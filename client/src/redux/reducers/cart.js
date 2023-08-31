import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isFetching: false,
        error: false,
        products: [],
        total: 0,
    },
    reducers: {
        start: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        increment: (state, action) => {
            state.products = state.products.map(product =>
                product = product._id == action.payload._id ? { ...product, quantity: product.quantity + 1 } : product
            )
            state.total += action.payload.price * (action.payload.quantity + 1)
        },
        decrement: (state, action) => {
            state.products = state.products.map(product =>
                product = product._id == action.payload._id ? { ...product, quantity: product.quantity > 0 && product.quantity - 1 } : product
            )
            state.total += action.payload.price * (action.payload.quantity - 1)
        },
        addProductToCart: (state, action) => {
            const isProductAlreadyInCart = Boolean(state.products.find(product => product._id == action.payload._id) )
            if (!isProductAlreadyInCart){
                state.products = state.products.concat(action.payload)
                state.total += action.payload.price * action.payload.quantity
            }
        },
        removeProductFromCart: (state, action) => {
            state.products = state.products.filter(product=>product._id != action.payload._id)
            state.total -= action.payload.price * action.payload.quantity
        },
        error: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        end: (state) => {
            state.isFetching = false;
            state.error = false;
        },
    },
});

export const { start, end, addProductToCart, removeProductFromCart, increment, decrement, error } = productSlice.actions;
export default productSlice.reducer;