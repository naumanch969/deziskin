import { createSlice } from '@reduxjs/toolkit'


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        isFetching: false,
        error: false,
        currentOrder: null,
        orders: [],
        incomeStats: [],
        incomeChange: 0,
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
        getOrders: (state, action) => {
            state.orders = action.payload
        },
        getIncome: (state, action) => {
            const incomeStats = action.payload
            state.incomeStats = incomeStats
            state.incomeChange = ((incomeStats[0].total / incomeStats[1].total) * 100).toFixed(2)
        },
    }
})

export const { start, end, error, getOrders, getIncome } = orderSlice.actions;
export default orderSlice.reducer;