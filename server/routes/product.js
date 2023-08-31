import express from 'express'
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.js'
import {  adminAuthorize } from '../middleware/auth.js'


const router = express.Router()

router.get('/all', getProducts)
router.get('/get/:id', getProduct)

router.post('/create', adminAuthorize, createProduct)

router.put('/update/:id', adminAuthorize, updateProduct)

router.delete('/delete/:id', adminAuthorize, deleteProduct)

export default router;