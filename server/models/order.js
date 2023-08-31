import mongoose, { Schema, model } from 'mongoose'

const orderSchema = Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: `User`, required: true },
        products: [{ productId: { type: String, }, quantity: { type: Number, default: 1 } }],
        amount: { type: Number, required: true },
        address: { type: Object, required: true },
        status: { type: String, default: 'pending', enum: ['pending', 'delivered'] }
    },
    { timestamps: true }
)

const orderModel = new model(`Order`, orderSchema)

export default orderModel;