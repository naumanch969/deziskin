import { start, end, error, getOrders as getOrdersReducer, getIncome as getIncomeReducer } from "../reducers/order"
import * as api from '../api'

export const getOrders = () => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getOrders()
        dispatch(getOrdersReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const getIncome = () => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getIncome()
        dispatch(getIncomeReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};