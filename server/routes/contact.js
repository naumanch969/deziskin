import express from "express"
const router = express.Router()

import {
    formSubmit,
} from "../controllers/contact.js"


router.post('/submit', formSubmit)

export default router