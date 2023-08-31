import express from 'express'
import {
    getAllUsers, register, login, getUserStats, getUser, updateUser, deleteUser, deleteUserCollection, addProductToCart, removeProductFromCart
} from '../controllers/user.js'
import { userAuthorize, adminAuthorize } from '../middleware/auth.js'


const router = express.Router()

router.get('/all', adminAuthorize, getAllUsers)
router.get('/:userId', adminAuthorize, getUser)
router.get('/stats', adminAuthorize, getUserStats)

router.post('/register', register)

router.put('/login', login)
router.put('/update/:userId', userAuthorize, updateUser)
router.put('/add-product-to-cart/:userId', addProductToCart)
router.put('/remove-product-from-cart/:userId', removeProductFromCart)

router.delete('/delete/:userId', userAuthorize, deleteUser)
router.delete('/delete/collection', userAuthorize, deleteUserCollection)

export default router;