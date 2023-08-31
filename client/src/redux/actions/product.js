import { error, end, start, getProductReducer, getProductsReducer } from "../reducers/product"
import * as api from '../api'

export const getProduct = (product) => async (dispatch) => {
    dispatch(start())
    try {
        const {data} = await api.getProduct(product)
        dispatch(getProductReducer(data.result))
    } catch (err) {
        dispatch(error())
        console.log('error in getProduct', err)
    }
    dispatch(end())
}

export const getProducts = () => async (dispatch) => {
    dispatch(start())
    try {
        const {data} = await api.getProducts()
        dispatch(getProductsReducer(data.result))
    } catch (err) {
        dispatch(error())
        console.log('error in getProducts', err)
    }
    dispatch(end())
}