import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Products = ({ product }) => {

    const [imageIndex, setImageIndex] = useState(0)

    return (
        <Link to={`/product/${product._id}`} className='lg:w-[23%] md:w-[30%] sm:w-[48%] w-[90%] min-w-[10rem] ' >
            <motion.div
                whileHover={{ scale: [1, 1.03] }}
                className='flex flex-col gap-[8px] font-light '
            >
                <motion.div
                    // onMouseEnter={() => setImageIndex(1)}
                    // onMouseLeave={() => setImageIndex(0)}
                    className='w-full h-[21rem] transition-all duration-[1000] '
                >
                    <img src={product.images[0]} alt='' className='w-full h-full object-cover ' />
                    {/* <img src={product.images[imageIndex]} alt='' className='w-full h-full object-cover ' /> */}
                    {/* <div className='w-full h-full bg-light-brown ' /> */}
                </motion.div>
                <div className='w-full flex justify-start items-center gap-[1rem] ' >
                    <Rating value={product.stars} />
                    <span className='' >{new Date(product.createdAt).toLocaleDateString()}</span>
                </div>
                <div className='w-full flex justify-between items-center ' >
                    <h5 className='text-[18px] font-medium capitalize ' >{product.title}</h5>
                    <span className='text-[16px] ' >${product.price}</span>
                </div>
                <hr className='w-full h-[4px] bg-gray ' />
                <p className='text-[12px] ' >{product.subTitle}</p>
            </motion.div>
        </Link>
    )
}

export default Products;