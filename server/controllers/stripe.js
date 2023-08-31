import Product from '../models/product.js';
import Order from '../models/order.js'

import dotenv from 'dotenv'
import { Stripe } from 'stripe';
dotenv.config()
const stripe = new Stripe(process.env.STRIPE_KEY);

export const payment = async (req, res) => {
    try {
        const allProducts = await Product.find();
        const { tokenId, cartProducts } = req.body;

        const detailedCartProducts = allProducts
            .filter(product => cartProducts.find(cartProduct => String(cartProduct.productId) == String(product._id)))
            .map(product => {
                const cartProduct = cartProducts.find(cp => String(cp.productId) == String(product._id));
                return { ...product._doc, quantity: cartProduct.quantity };
            });


        // Calculate the total price of all selected products
        const total = detailedCartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);

        const response = await stripe.charges.create({ source: tokenId, amount: total, currency: 'usd' });
        const order = {
            amount: total,
            user: req.user.id,
            status: 'pending',
            products: cartProducts,
            address: response.billing_details
        }

        const newOrder = await Order.create(order)
        res.status(200).json({ result: newOrder, message: 'order succussful!', success: true });

    }
    catch (error) {
        console.log(`error in payment = n`, error);
        res.status(500).json({ message: 'error in payment - controllers/stripe.js', error, success: false });
    }
}

        // const products = await Product.find()
        // const { cartProducts } = req.body
        // const detailedCartProducts = products.filter(product =>
        //     cartProducts.find(cp => cp.productId == product._id)
        // )
        // const session = await stripe.checkout.sessions.create({
        //     payment_method_types: [`card`],
        //     mode: `payment`,
        //     success_url: `${process.env.SERVER_URL}/`,
        //     cancel_url: `${process.env.SERVER_URL}/error-in-payment`,
        //     line_items: detailedCartProducts.map(item => {
        //         return {
        //             price_data: { currency: `usd`, product_data: { name: item.name }, unit_amount: item.price * 100 },
        //             quantity: item.quantity
        //         }
        //     })
        // })
        // res.status(200).json({ messae: ``, session })


