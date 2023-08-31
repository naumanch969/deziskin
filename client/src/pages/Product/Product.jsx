import { product1, product3 } from '../../assets'
import { Products, Footer, AuthModal } from '../../components'
import { getProduct } from '../../redux/actions/product'
import { addProductToCart } from '../../redux/actions/user'
import { payment } from '../../redux/actions/order'
import { Rating } from '@mui/material'
// import Review from './Review'
import Reviews from './Reviews'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Remove, Add } from '@mui/icons-material'



const Product = () => {

    const dispatch = useDispatch()
    const { currentProduct: product, isFetching: paymentIsFetching } = useSelector(state => state.product)
    const { loggedUser: user, cartProducts, isFetching: userIsFetching } = useSelector(state => state.user)
    const { id } = useParams()

    const [quantity, setQuantity] = useState(1)
    const [openAuthModal, setOpenAuthModal] = useState(false)

    useEffect(() => {
        dispatch(getProduct(id))
    }, [id])

    const handleQuantity = (type) => {
        type == 'increase' ?
            setQuantity(pre => pre + 1)
            :
            quantity > 0 && setQuantity(pre => pre - 1)
    }

    const handleRadioInput = () => {

    }

    const addToCart = () => {
        if (user) {
            // console.log(user._id, { productId: product._id, quantity })
            dispatch(addProductToCart(user._id, { productId: product._id, quantity }))
        }
        else {
            setOpenAuthModal(true)
        }
    }

    const handleCheckout = () => {
        dispatch(payment(cartProducts))
    }

    return (
        <div className='flex flex-col '  >

            <div className='flex justify-between ' >

                <AuthModal open={openAuthModal} setOpen={setOpenAuthModal} type='login' />

                <div className='flex-[5] ' >
                    <img src={product?.images[0]} alt='' className='w-full h-[40rem] ' />
                    <img src={product?.images[1]} alt='' className='w-full h-[40rem] ' />
                </div>

                <div className='flex-[4.5] sticky top-[8rem] h-fit' >

                    <div className='flex flex-col gap-[1rem] p-[2rem]  ' >

                        {/* title */}
                        <div className='flex flex-col ' >
                            <h2 className='uppercase text-[36px] ' >{product?.title}</h2>
                            <p className='text-[22px] font-light ' >{product?.subTitle}</p>
                        </div>

                        {/* rating */}
                        <div className='w-full flex justify-start items-center gap-[1rem] ' >
                            <Rating value={4.5} />
                            <span className='text-[18px] ' >{product?.reviews.length} reviews</span>
                        </div>

                        {/* price */}
                        <span className='font-light text-[32px] ' >${product?.price}</span>

                        {/* description */}
                        <p className='font-light ' >{product?.description}</p>

                        <div className='flex flex-col gap-[1rem] my-[1rem] ' >
                            {/* incrment decrement button */}
                            <div className='border-[1px] border-darker-brown p-[1rem] w-fit flex gap-[2rem] ' >
                                <button onClick={() => handleQuantity('decrease')} className='' ><Remove /></button>
                                <span className='w-full h-full ' >{quantity}</span>
                                <button onClick={() => handleQuantity('increase')} className='' ><Add /></button>
                            </div>

                            {/* radio - type of payment */}
                            <div className='flex flex-col bg-white rounded-[12px] border-[1px] border-darker-brown '  >
                                <div className='h-[3rem] flex items-center gap-[1rem] px-[1rem] bg-white rounded-t-[12px] '  >
                                    <input type='radio' id='first' value='' onClick={handleRadioInput} className='' />
                                    <label htmlFor='first' className=''  >
                                        <span className=''  >$12</span>
                                        <span className='' >one-time purcase</span>
                                    </label>
                                </div>
                                <div className='h-[3rem] flex items-center gap-[1rem] px-[1rem] bg-light-brown rounded-b-[12px] '  >
                                    <input type='radio' id='second' value='' onClick={handleRadioInput} className='' />
                                    <label htmlFor='second' className=''  >
                                        <span className=''  >$12</span>
                                        <span className='' >subscribe & save $10</span>
                                    </label>
                                </div>
                            </div>

                            {/* payment buttons  */}
                            <div className='flex flex-col gap-[8px] w-full ' >
                                <button onClick={addToCart} className='w-full p-[1rem] border-[1px] border-black bg-white text-black rounded-[4px] ' >
                                    {userIsFetching ? 'Loading...' : 'Add to Cart'}
                                </button>
                                <button onClick={handleCheckout} className='cursor-pointer w-full p-[1rem] bg-black text-white rounded-[4px] ' >
                                    {paymentIsFetching ? `Loading...` : `Checkout`}
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {product?.reviews.length && <Reviews reviews={product.reviews} />}
            <Footer />

        </div>
    )
}
export default Product;