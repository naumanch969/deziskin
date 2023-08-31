import mongoose, { Schema, model } from 'mongoose'

const userSchema = Schema(
    {
        name: { type: String, required: true },
        image: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        cartProducts: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product' }, quantity: String }]
    },
    { timestamps: true }
)

const userModel = new model(`User`, userSchema)

export default userModel;