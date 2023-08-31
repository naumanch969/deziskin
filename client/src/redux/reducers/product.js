import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        currentProduct: null,
        products:[],
        isFetching: false,
        error: false,
    },
    reducers: {
        start: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addToCart:(state,action)=>{
            state.products = state.products.map(product=> product =
                product._id == action.payload._id 
                ?
                {...product, isInCart: true, quantity:action.payload.quantity } 
                :
                product
            )
        },
        getProductReducer: (state, action) => {
            state.isFetching = false;
            state.currentProduct = action.payload
            state.error = false;
        },
        getProductsReducer: (state, action) => {
            state.isFetching = false;
            state.products = action.payload
            state.error = false;
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

export const { start, end, getProductReducer, getProductsReducer, error } = productSlice.actions;
export default productSlice.reducer;