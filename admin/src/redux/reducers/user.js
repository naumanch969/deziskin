import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        currentUser: null,
        userStats: [],
        error: false,
        isFetching: false,
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
        getUsers: (state, action) => {
            // state.users = action.payload
        },
        getUser: (state, action) => {
            state.currentUser = action.payload
        },
        getUserStats: (state, action) => {
            const MONTHS = ['Mon', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const stats = action.payload
            state.userStats = stats.map(stat => ({ name: MONTHS[stat._id - 1], "Active User": stat.total }))
        },
        login: (state, action) => {
            state.currentUser = action.payload
        },
        updateUser: (state, action) => {
            // state.users = state.users.map(user => user = user._id == action.payload._id ? action.payload : user)
        },
        deleteUser: (state, action) => {
            // state.users = state.users.filter(user => user._id !== action.payload._id)
        },
        register: (state) => {
            return state
        },
    }
})

export const { start, end, error, getUser,getUsers, getUserStats, updateUser, deleteUser,login, register } = userSlice.actions;
export default userSlice.reducer;