import { error, end, start, contactReducer } from "../reducers/contact"
import * as api from '../api'

const initialContactData = { name: '', email: '', subject: '', message: '', images: [] }

export const contact = (contactData, setContactData) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.contact(contactData)
        dispatch(contactReducer(data.result))
        setContactData(initialContactData)
    } catch (err) {
        dispatch(error())
        console.log('error in contact', err)
    }
    dispatch(end())
}