import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        loggedUser: null,
        cartProducts:[],
        isFetching: false,
        error: false,
        users:[],
    },
    reducers: {
        start: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        removeProductFromCart: (state) => {
            state.loggedUser = action.payload;
        },
        loginSuccess: (state, action) => {
            state.loggedUser = action.payload;
        },
        registerSuccess: (state) => {
            return state;
        },
        updateUserCartReducer: (state, action) => {
            console.log(action.payload)
            state.users = state.users.map(user => user = user._id == action.payload._id ? action.payload : user)
            state.cartProducts = action.payload.cartProducts
            state.loggedUser = action.payload
        },
        logout: (state) => {
            state.loggedUser = null;
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

export const { start, end, loginSuccess, registerSuccess, updateUserCartReducer, logout, error } = userSlice.actions;
export default userSlice.reducer;