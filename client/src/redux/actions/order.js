import { error, end, start, paymentReducer } from "../reducers/order"
import * as api from '../api'

export const payment = (tokenId, cartProducts, navigate ) => async (dispatch) => {
    dispatch(start())
    try {
        const {data} = await api.payment(tokenId,cartProducts)
        dispatch(paymentReducer(data.result))
        navigate('/')
    } catch (err) {
        dispatch(error())
        console.log('error in payment', err)
    }
    dispatch(end())
}