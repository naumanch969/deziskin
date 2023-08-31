// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { IconButton } from '@mui/material';
// import { Clear, Delete } from '@mui/icons-material';
// import { useSelector, useDispatch } from 'react-redux';
// import { product3, product6 } from '../assets';
// import { removeProductFromCart } from '../redux/actions/user';
// import { payment } from '../redux/actions/order';
// import { increment, decrement } from '../redux/reducers/cart';
// import StripeCheckout from 'react-stripe-checkout';
// import { Link, useNavigate } from 'react-router-dom';

// const KEY = "pk_test_51N2ehTKyJJyI8xUVOD0iDOb8akox3lDByNCVUlC6CV8BDYtXgbGVjpEqbYQs0o8kZyizx706IjF5YSHZ8JF7M1Vr00SMqgTM10";

// const Cart = ({ open, setOpen }) => {
//     const dispatch = useDispatch();
//     const { products: allProducts } = useSelector((state) => state.product);
//     const { loggedUser: user, cartProducts } = useSelector((state) => state.user);
//     const detailedCartProducts = allProducts
//         ?.filter((product) => cartProducts.find((cartProduct) => cartProduct.productId === product._id))
//         .map((product) => {
//             const cartProduct = cartProducts?.find((cp) => cp.productId === product._id);
//             return { ...product, quantity: cartProduct.quantity };
//         });
//     const total = detailedCartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
//     const navigate = useNavigate();

//     const onToken = (token) => {
//         if (!cartProducts.length) {
//             alert('Cart should not be empty!');
//         }
//         dispatch(payment(token.id, cartProducts, navigate));
//     };

//     const handleChange = (type, product) => {
//         if (type === 'increase') {
//             dispatch(increment(product));
//         } else {
//             dispatch(decrement(product));
//         }
//     };

//     const removeFromCart = (product) => {
//         dispatch(removeProductFromCart(user._id, { productId: product._id }));
//     };

//     const handleCheckout = () => {
//         if (!cartProducts.length) {
//             alert('Cart should not be empty!');
//         }
//         dispatch(payment(cartProducts));
//     };

//     return (
//         <motion.div
//             initial={{ x: '-100%' }}
//             animate={{ x: open ? 0 : '-100%' }}
//             transition={{ duration: 0.4 }}
//             className="bg-lighter-brown transition-all h-screen px-[1rem] sm:w-[25rem] w-[22rem] overflow-y-scroll fixed top-0 right-0"
//         >
//             <div style={{ zIndex: '100' }} className="sticky top-0 py-[1rem] flex justify-between items-center bg-lighter-brown z-[100]">
//                 <h3 className="text-[22px] font-medium">Your Cart</h3>
//                 <IconButton onClick={() => setOpen(false)}>
//                     <Clear style={{ fontSize: '2rem' }} />
//                 </IconButton>
//             </div>

//             <div className="flex flex-col">
//                 <div className="w-full flex justify-between items-center">
//                     <h6 className="font-light">Product</h6>
//                     <h6 className="font-light">Total</h6>
//                 </div>

//         <hr className={`h-[1px] bg-darker-brown my-[1rem] `} />
//                 {detailedCartProducts.map((product, index) => (
//                     <div key={index} className="flex gap-[1rem] py-[1rem]">
//                         {/* image */}
//                         <div className="flex-[1]">
//                             <img src={product.images[0]} alt="" className="w-full h-full object-cover" />
//                         </div>
//                         {/* product detail */}
//                         <div className="flex-[2] flex flex-col gap-[1rem]">
//                             {/* title */}
//                             <div className="flex justify-between">
//                                 <Link to={`/product/${product.title}`} className="text-[20px] font-medium hover:underline">
//                                     {product.title}
//                                 </Link>
//                                 <span className="font-light">${product.price}</span>
//                             </div>
//                             {/* price */}
//                             <span className="text-[14px] font-light">${product.price * product.quantity}</span>
//                             {/* increment decrement */}
//                             <div className="w-full flex justify-start gap-[1rem]">
//                                 <div className="border-[1px] border-darker-brown p-[12px] w-fit flex gap-[2rem]">
//                                     <button onClick={() => handleChange('decrease', product)} className="text-[16px]">
//                                         -
//                                     </button>
//                                     <span>{product.quantity}</span>
//                                     <button onClick={() => handleChange('increase', product)} className="text-[16px]">
//                                         +
//                                     </button>
//                                 </div>
//                                 <IconButton className="" onClick={() => removeFromCart(product)}>
//                                     <Delete />
//                                 </IconButton>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="flex flex-col gap-[1rem] sticky bottom-0 bg-lighter-brown py-[1rem]">
//                 <div className="flex justify-between items-center text-[18px]">
//                     <h5>Subtotal</h5>
//                     <span className="font-light">${total} USD</span>
//                 </div>

//                 <span>Taxes and shipping calculated at checkout</span>
//                 <StripeCheckout
//                     name="NANO."
//                     image="img"
//                     billingAddress
//                     shippingAddress
//                     description={`Your total is ${total}`}
//                     amount={total * 100}
//                     token={onToken}
//                     stripeKey={KEY}
//                 >
//                     <button className="p-[1rem] w-full bg-black text-white">Checkout</button>
//                 </StripeCheckout>
//             </div>
//         </motion.div>
//     );
// };

// export default Cart;































































































































































































import { ArrowRight } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { Modal, IconButton } from '@mui/material'
import { Clear, Delete } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { product3, product6 } from '../assets'
import { removeProductFromCart } from '../redux/actions/user'
import { payment } from '../redux/actions/order'
import { increment, decrement } from '../redux/reducers/cart'
import StripeCheckout from 'react-stripe-checkout'
import { motion } from 'framer-motion'

const KEY = "pk_test_51N2ehTKyJJyI8xUVOD0iDOb8akox3lDByNCVUlC6CV8BDYtXgbGVjpEqbYQs0o8kZyizx706IjF5YSHZ8JF7M1Vr00SMqgTM10"

const Cart = ({ open, setOpen, }) => {

    const dispatch = useDispatch()
    const { products: allProducts } = useSelector(state => state.product)
    const { loggedUser: user, cartProducts } = useSelector(state => state.user)

    const detailedCartProducts = allProducts?.filter(product => cartProducts?.find(cartProduct => cartProduct.productId === product._id))
        .map(product => {
            const cartProduct = cartProducts?.find(cp => cp.productId === product._id)
            return { ...product, quantity: cartProduct.quantity }
        })
    const total = detailedCartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0)
    console.log('allProducts', allProducts)
    console.log('detailedCartProducts', detailedCartProducts)
    console.log('total', total)

    const navigate = useNavigate()

    const onToken = (token) => {
        if (!cartProducts.length) alert('cart should not be empty!')
        dispatch(payment(token.id, cartProducts, navigate))
    }


    const handleChange = (type, product) => {
        if (type == 'increase') {
            dispatch(increment(product))
        }
        else {
            dispatch(decrement(product))
        }
    }

    const removeFromCart = (product) => {
        dispatch(removeProductFromCart(user._id, { productId: product._id }))
    }

    const handleCheckout = () => {
        if (!cartProducts.length) alert('cart should not be empty!')
        dispatch(payment(cartProducts))
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)} className={`w-screen `} >
            <motion.div
                initial={{ x: '200%' }}
                animate={{ x: open ? '0%' : '200%' }}
                transition={{ duration: 0.4 }}
                className={`bg-lighter-brown h-screen px-[1rem] sm:w-[25rem] w-[22rem] overflow-y-scroll fixed top-0 right-0`}
            >
                <div className={`sticky top-0 py-[1rem] flex justify-between items-center bg-lighter-brown z-[100] `} >
                    <h3 className={`text-[22px] font-medium `} >Your Cart</h3>
                    <IconButton onClick={() => setOpen(false)} ><Clear style={{ fontSize: `2rem` }} /></IconButton>
                </div>

                <div className={`flex flex-col`} >
                    <div className={`w-full flex justify-between items-center `} >
                        <h6 className={`font-light `} >Product</h6>
                        <h6 className={`font-light `} >Total</h6>
                    </div>

                    <hr className={`h-[1px] bg-darker-brown my-[1rem] `} />

                    {
                        detailedCartProducts.map((product, index) => (
                            <div key={index} className={`flex gap-[1rem] py-[1rem] `} >
                                {/* image */}
                                <div className={`flex-[1] `} >
                                    <img src={product.images[0]} alt={``} className={`w-full h-full object-cover `} />
                                </div>
                                {/* product detail */}
                                <div className={`flex-[2] flex flex-col gap-[1rem] `} >
                                    {/* title */}
                                    <div className={`flex justify-between  `} >
                                        <Link to={`/product/${product.title}`} className={`text-[20px] font-medium hover:underline  `} >{product.title}</Link>
                                        <span className={`font-light `} >${product.price}</span>
                                    </div>
                                    {/* price */}
                                    <span className={`text-[14px] font-light `} >${product.price * product.quantity}</span>
                                    {/* increment decrement */}
                                    <div className={`w-full flex justify-start gap-[1rem]  `} >
                                        <div className='border-[1px] border-darker-brown p-[12px] w-fit flex gap-[2rem] ' >
                                            <button onClick={() => handleChange('decrease', product)} className='text-[16px] '  >-</button>
                                            <span className=''  >{product.quantity}</span>
                                            <button onClick={() => handleChange('increase', product)} className='text-[16px] '  >+</button>
                                        </div>
                                        <IconButton className={``} onClick={() => removeFromCart(product)} ><Delete /></IconButton>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className={`flex flex-col gap-[1rem] sticky bottom-0 bg-lighter-brown py-[1rem] `} >

                    <div className={`flex justify-between items-center text-[18px] `} >
                        <h5 className={``} >Subtotal</h5>
                        <span className={`font-light `} >${total} USD</span>
                    </div>

                    <span className={``}>Taxes and shipping calculated at checkout</span>
                    <StripeCheckout
                        name='NANO.'
                        image='img'
                        billingAddress
                        shippingAddress
                        description={`Your total is ${total}`}
                        amount={total * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <button className={`p-[1rem] w-full bg-black text-white `} >Checkout</button>
                    </StripeCheckout>

                </div>

            </motion.div>
        </Modal>
    )
}

export default Cart;



const prodducts = [
    {
        img: product3,
        title: 'Agua Fresca',
        price: '46.00',
        amount: '2',
    },
    {
        img: product6,
        title: 'Agua Fresca',
        price: '46.00',
        amount: '2',
    },
    {
        img: product3,
        title: 'Agua Fresca',
        price: '46.00',
        amount: '2',
    },
]