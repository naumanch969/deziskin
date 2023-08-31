import mongoose from 'mongoose'

const ContactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    message: { type: Array, required: false },
})

const ContactUserModel = new mongoose.model('ContactUser', ContactSchema)
export default ContactUserModel