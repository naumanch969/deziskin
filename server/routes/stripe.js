import express from 'express'


import { payment } from '../controllers/stripe.js'
import { userAuthorize } from '../middleware/auth.js'

const router = express.Router()


router.post('/payment', userAuthorize, payment)


export default router;