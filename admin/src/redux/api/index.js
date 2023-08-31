import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:admin')).user).currentUser.token
    req.headers.auth_token = TOKEN
    return req;
})

// users
export const register = (userData) => API.post(`/user/register`, userData)
export const login = (userData) => API.put(`/user/login`, userData)
export const getUser = (userId) => API.get(`/user/${userId}`)
export const getUsers = () => API.get(`/user/all`)
export const getUserStats = () => API.get(`/user/stats`)
export const getNewUsers = () => API.get(`/user/all?new=true`)
export const updateUser = (userId,user) => API.get(`/user/update/${userId}`, user)
export const deleteUser = (userId) => API.get(`/user/delete/${userId}`)

// users
export const getOrders = () => API.get(`/order/all`)
export const getIncome = () => API.get(`/order/income`)

//  products
export const getProducts = () => API.get(`/product/all`)
export const getProduct = (productId) => API.get(`/product/get/${productId}`)
export const getProductStats = (productId) => API.get(`/order/income?productId=${productId}`)
export const createProduct = (product) => API.post(`/product/create`, product)
export const updateProduct = (productId, productData) => API.put(`/product/update/${productId}`, productData)
export const deleteProduct = (productId) => API.delete(`/product/delete/${productId}`)