import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isFetching: false,
        error: false,
        currentProduct: null,
        productStats: 0,
        products: []
    },
    reducers: {
        start: (state) => {
            state.isFetching = true
            state.error = false
        },
        end: (state) => {
            state.isFetching = false
            state.error = false
        },
        error: (state) => {
            state.isFetching = false
            state.error = true
        },
        getProducts: (state, action) => {
            state.isFetching = true
            state.products = action.payload
            state.error = false
        },
        getProduct: (state, action) => {
            state.isFetching = true
            state.currentProduct = action.payload
            state.error = false
        },
        getProductStats: (state, action) => {
            const MONTHS = ['Mon', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const stats = action.payload
            state.productStats = stats.map(stat => ({ name: MONTHS[stat._id - 1], Sales: stat.total }))
        },
        createProduct: (state, action) => {
            state.products = state.products.concat(action.payload)
        },
        updateProduct: (state, action) => {
            state.products = state.products.map(product => product = product._id == action.payload._id ? action.payload : product)
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload._id)
        },
    }
})

export const { start, getProducts, getProduct, getProductStats, createProduct, updateProduct, deleteProduct, end, error } = productSlice.actions;
export default productSlice.reducer;