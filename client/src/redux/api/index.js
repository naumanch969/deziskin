import axios from 'axios'
import Cookie from 'js-cookie'
import { baseURL } from '../../constant'

const API = axios.create({ baseURL })

API.interceptors.request.use((req) => {
    const TOKEN = Cookie.get('profile_token')
    req.headers.auth_token = TOKEN
    return req;
})

export const register = (userData) => API.post(`/user/register`, userData)
export const login = (userData) => API.put(`/user/login`, userData)
export const addProductToCart = (userId, { productId, quantity }) => API.put(`/user/add-product-to-cart/${userId}`, { productId, quantity })
export const removeProductFromCart = (userId, { productId }) => API.put(`/user/remove-product-from-cart/${userId}`, { productId })


// products
export const getProducts = () => API.get(`/product/all`)
export const getProduct = (productId) => API.get(`/product/get/${productId}`)
export const getCategoryProducts = (category) => API.get(`/product/all?category=${category}`)

export const payment = (tokenId, cartProducts) => API.post(`/stripe/payment`, { tokenId, cartProducts })

export const contact = (data) => API.post(`/contact/submit`, data)