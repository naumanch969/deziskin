import {
    person1, person2, person3, person4, person5, person6, person7, person8, person9, person10,
    product1, product2, product3, product4, product5, product6, product7, product8, product9, product10,
} from '../assets'

export const userStats = [
    { name: 'Jan', "Active User": 4000, },
    { name: 'Feb', "Active User": 1000, },
    { name: 'Mar', "Active User": 6600, },
    { name: 'Apr', "Active User": 4200, },
    { name: 'May', "Active User": 4600, },
    { name: 'Jun', "Active User": 3000, },
    { name: 'Jul', "Active User": 2000, },
    { name: 'Aug', "Active User": 8000, },
    { name: 'Sep', "Active User": 100, },
    { name: 'Oct', "Active User": 4000, },
    { name: 'Jan', "Active User": 4000, },
    { name: 'Nov', "Active User": 3000, },
    { name: 'Dec', "Active User": 4000, },
]
export const productData = [
    { name: 'Jan', sales: 4000, },
    { name: 'Feb', sales: 1000, },
    { name: 'Mar', sales: 6600, },
    { name: 'Apr', sales: 4200, },
]


export const rawUsers = [
    { _id: 1, username: 'Jon Snow', avatar: person1, email: 'person1@gmail.com', status: 'active', transaction: '$230,00' },
    { _id: 2, username: 'Carl Snow', avatar: person2, email: 'person2@gmail.com', status: 'active', transaction: '$230,00' },
    { _id: 3, username: 'Jon Snow', avatar: person3, email: 'person3@gmail.com', status: 'active', transaction: '$230,00' },
    { _id: 4, username: 'Jon Snow', avatar: person4, email: 'person4@gmail.com', status: 'active', transaction: '$230,00' },
    { _id: 5, username: 'Kim Smith', avatar: person5, email: 'person5@gmail.com', status: 'active', transaction: '$230,00' },
    { _id: 6, username: 'Jon Snow', avatar: person6, email: 'person6@gmail.com', status: 'active', transaction: '$230,00' },
    { _id: 7, username: 'Jon Snow', avatar: person7, email: 'person7@gmail.com', status: 'active', transaction: '$230,00' },
    { _id: 8, username: 'Jon Snow', avatar: person8, email: 'person8@gmail.com', status: 'active', transaction: '$230,00' },
    { _id: 9, username: 'Jon Snow', avatar: person9, email: 'person9@gmail.com', status: 'active', transaction: '$230,00' },
    { _id: 10, username: 'Jon Snow', avatar: person10, email: 'person10@gmail.com', status: 'active', transaction: '$230,00' },
]
export const rawProducts = [
    { _id: 1, image: product1, categories: ['category 1', 'category 11'], title: 'Air pods', inStock: false, price: '$38', createdAt: 'Sun Jun 1 2023 15:50:31' },
    { _id: 2, image: product2, categories: ['category 2', 'category 22'], title: 'Bottle', inStock: true, price: '$3', createdAt: 'Mon Jul 10 2023 15:50:31' },
    { _id: 3, image: product3, categories: ['category 3', 'category 33'], title: 'Headset', inStock: true, price: '$200', createdAt: 'Mon Sep 10 2023 15:50:31' },
    { _id: 4, image: product4, categories: ['category 4', 'category 44'], title: 'Headset', inStock: true, price: '$300', createdAt: 'Mon Jul 10 2023 15:50:31' },
    { _id: 5, image: product5, categories: ['category 5', 'category 55'], title: 'Camera', inStock: true, price: '$13', createdAt: 'Mon Jul 10 2023 15:50:31' },
    { _id: 6, image: product6, categories: ['category 6', 'category 66'], title: 'Air pods', inStock: true, price: '$243', createdAt: 'Mon Aug 10 2023 15:50:31' },
    { _id: 7, image: product7, categories: ['category 7', 'category 77'], title: 'Camera', inStock: false, price: '$103', createdAt: 'Tue Jan 10 2023 15:50:31' },
    { _id: 8, image: product8, categories: ['category 8', 'category 88'], title: 'Chair', inStock: true, price: '$243', createdAt: 'Mon Dec 3 2023 15:50:31' },
    { _id: 9, image: product9, categories: ['category 9', 'category 99'], title: 'Air pods', inStock: true, price: '$203', createdAt: 'Mon Mar 10 2022 15:50:31' },
    { _id: 10, image: product10, categories: ['category 1', 'category 11'], title: 'Hand free', inStock: true, price: '$23', createdAt: 'Mon May 20 2023 15:50:31' },
]

export const rawOrders = [
    {
        user: 'Ali Abbas',
        amount: '$453',
        status: 'pending',
        createdAt: 'Mon Jul 21 2023 15:50:31',
    },
    {
        user: 'Bisma',
        amount: '$453',
        status: 'active',
        createdAt: 'Sat Dec 13 2023 15:50:31',
    },
    {
        user: 'Daood',
        amount: '$453',
        status: 'active',
        createdAt: 'Tue Nov 10 2023 15:50:31',
    },
    {
        user: 'Faisal',
        amount: '$453',
        status: 'active',
        createdAt: 'Mon Jul 17 2023 15:50:31',
    },
    {
        user: 'Gwen',
        amount: '$40',
        status: 'active',
        createdAt: 'Wed Jan 30 2023 15:50:31',
    },
    {
        user: 'Hania',
        amount: '$202',
        status: 'active',
        createdAt: 'Tue Aug 10 2023 15:50:31',
    },
    {
        user: 'John',
        amount: '$453',
        status: 'active',
        createdAt: 'Sun Mar 10 2023 15:50:31',
    },
    {
        user: 'Qasim',
        amount: '$103',
        status: 'active',
        createdAt: 'Sat Oct 28 2023 15:50:31',
    },
    {
        user: 'Zahoor',
        amount: '$43',
        status: 'delivered',
        createdAt: 'Mon Jun 1 2023 15:50:31',
    },
    {
        user: 'Tony',
        amount: '$63',
        status: 'pending',
        createdAt: 'Tue May 10 2023 15:50:31',
    },
]