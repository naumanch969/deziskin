import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contactUsers: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        start: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        contactReducer: (state) => {
            state.isFetching = true;
            state.contactUsers = state.contactUsers.concat(action.pyaload);
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

export const { start, end, contactReducer, error } = contactSlice.actions;
export default contactSlice.reducer;