import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        start: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        paymentReducer: (state) => {
            state.isFetching = true;
            state.orders = state.orders.concat(action.pyaload);
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

export const { start, end, paymentReducer, error } = orderSlice.actions;
export default orderSlice.reducer;