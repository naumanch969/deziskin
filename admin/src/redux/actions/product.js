import { start, end, error, getProducts as getProductsReducer, getProduct as getProductReducer, getProductStats as getProductStatsReducer, createProduct as createProductReducer, updateProduct as updateProductReducer, deleteProduct as deleteProductReducer } from "../reducers/product"
import * as api from '../api'

export const getProducts = () => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getProducts()
        dispatch(getProductsReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const getProduct = (id) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getProduct(id)
        dispatch(getProductReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const getProductStats = (id) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getProductStats(id)
        dispatch(getProductStatsReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const createProduct = (product) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.createProduct(product)
        dispatch(createProductReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const updateProduct = (id, product) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.updateProduct(id, product)
        dispatch(updateProductReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const deleteProduct = (id) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.deleteProduct(id)
        dispatch(deleteProductReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};