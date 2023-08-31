import { error, end, start, addProductToCartReducer, removeProductFromCartReducer } from "../reducers/cart"

export const addProductToCart = (data) => async (dispatch) => {
    dispatch(start())
    try {
        dispatch(addProductToCartReducer(data))
    } catch (err) {
        dispatch(error())
        console.log('error in addProductToCart', err)
    }
    dispatch(end())
}

export const removeProductFromCart = (data) => async (dispatch) => {
    dispatch(start())
    try {
        dispatch(removeProductFromCartReducer(data))
    } catch (err) {
        dispatch(error())
        console.log('error in removeProductFromCart', err)
    }
    dispatch(end())
}