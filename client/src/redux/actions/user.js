import { error, end, start, loginSuccess, registerSuccess, updateUserCartReducer } from "../reducers/user"
import * as api from '../api'

export const register = (user,navigate) => async (dispatch) => {
    dispatch(start())
    try {
        const data = await api.register(user)
        dispatch(registerSuccess())
        navigate(`/login`)
    } catch (err) {
        dispatch(error())
        console.log('error in register', err)
    }
    dispatch(end())
}

export const login = (user, navigate) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.login(user)
        dispatch(loginSuccess(data.result))
        navigate('/')
    } catch (err) {
        dispatch(error())
        console.log('error in login', err)
    }
    dispatch(end())
}

export const addProductToCart = (userId, { productId, quantity }) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.addProductToCart(userId, { productId, quantity })
        dispatch(updateUserCartReducer(data.result))
    } catch (err) {
        dispatch(error())
        console.log('error in addProductToCart', err)
    }
    dispatch(end())
}

export const removeProductFromCart = (userId, { productId }) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.removeProductFromCart(userId, { productId })
        dispatch(updateUserCartReducer(data.result))
    } catch (err) {
        dispatch(error())
        console.log('error in removeProductFromCart', err)
    }
    dispatch(end())
}
