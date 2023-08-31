import { Schema, model } from 'mongoose'

const productSchema = Schema(
    {
        title: { type: String, required: true },
        subTitle: { type: String },
        description: { type: String, required: true },
        categories: { type: Array, required: true },
        images: { type: Array, required: true },
        price: { type: String, required: true },
        inStock: { type: Boolean, default: true },
        reviews: { type: Array, default: [],  timestamps: true  },
    },
    { timestamps: true }
)

const productModel = new model(`product`, productSchema)

export default productModel;