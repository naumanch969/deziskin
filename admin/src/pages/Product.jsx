import { useDispatch, useSelector } from 'react-redux'
import { Publish, Clear } from '@mui/icons-material'
import { useState, useRef, useEffect } from 'react'
import { BrokenImage } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { getProduct, getProductStats } from '../redux/actions/product'
import { updateProduct } from '../redux/actions/product'
import { person1 } from '../assets'
import FileBase from 'react-file-base64'
import { Chart } from '../components'

const Product = ({ products, setProducts }) => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const { id } = useParams()
    const dispatch = useDispatch()
    const fileBase64Ref = useRef(null)
    // const { currentProduct: product, isFetching } = useSelector(state => state.product)

    const product = products.find(product => product._id == id)

    //////////////////////////////////////// States ////////////////////////////////////////
    const [productData, setProductData] = useState({ ...product, categories: product.categories?.join(',') })

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    // useEffect(() => {
    // dispatch(getProduct(id))        // use useMemo here 
    // dispatch(getProductStats(id))
    // }, [])

    //////////////////////////////////////// Functions ////////////////////////////////////////
    const handleUpdateProduct = (e) => {
        e.preventDefault()
        // dispatch(updateProduct(product._id, { ...productData, categories: productData.categories.split(',') }))
        products = products.map(p => p = p._id == product._id ? { ...productData, categories: productData.categories.split(',') } : p)
        setProducts([...products])

    }
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }
    const handleImageButtonClick = (e) => {
        e.preventDefault();
        fileBase64Ref.current.querySelector('input[type="file"]').click();
    }
    const handleAddImage = (files) => {
        setProductData({ ...productData, image: files.base64 })
    }
    const handleDeleteImage = () => {
        setProductData({ ...productData, image: '' })
    }


    return (
        <div className='w-full md:flex-[4] h-full overflow-y-scroll ' >

            <div className="w-full px-[2rem] pt-[12px] pb-[2rem] " >

                {/* title */}
                <div className="flex items-center justify-between ">
                    <h1 className="font-bold text-[32px]  ">Product</h1>
                    <Link to='/newProduct' >
                        <button className="border-none py-[4px] px-[1rem] bg-darkBlue rounded-[4px] cursor-pointer text-white text-[16px]  ">Create</button>
                    </Link>
                </div>

                {/* chart */}
                <div className="w-full flex md:flex-row flex-col gap-[1rem] h-[24rem] my-[16px] ">
                    <div className="w-full md:flex-1 ">
                        <Chart data={productData} dataKey='sales' title='Sales Performance' />
                    </div>
                    <div className="w-full md:flex-1 flex flex-col justify-start p-[20px] shadow-box">
                        <div className='w-full flex justify-center relative ' >
                            <hr className='absolute top-[50%] text-lightGray h-[2px] w-full shadow-box ' />
                            <img src={person1} alt="image" className="w-[10rem] h-[10rem] rounded-[12px] object-cover mr-[20px] z-10 " />
                        </div>
                        <div className="mt-[12px] flex flex-col gap-[1rem] ">
                            <h3 className="font-semibold text-[28px] ">{product.title}</h3>
                            <div className="flex justify-between lg:w-[60%] w-full ">
                                <h5 className="font-medium text-[18px] ">id:</h5>
                                <p className="font-light ">{product._id}</p>
                            </div>
                            <div className="flex justify-between lg:w-[60%] w-full ">
                                <h5 className="font-medium text-[18px] ">Sales:</h5>
                                <p className="font-light ">${product.price}</p>
                            </div>
                            <div className="flex justify-between lg:w-[60%] w-full ">
                                <h5 className="font-medium text-[18px] ">in stock:</h5>
                                <p className="font-light ">{product.inStock}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* edit form */}
                <div className="w-full flex p-[20px] mt-[1rem] shadow-box ">
                    <form className="newProductForm flex flex-wrap gap-[20px] " >
                        {/* image */}
                        <div className="w-full md:w-[25rem] flex justify-center items-center flex-col">
                            {
                                productData.image && productData.image !== 'img'
                                    ?
                                    <div className="relative w-[7rem] h-[7rem] p-[8px] rounded-full flex justify-center items-center  " >
                                        <img src={productData.image} alt="" className="rounded-full w-full h-full " />
                                        <button onClick={() => handleDeleteImage()} className="absolute top-[0px] right-[0px] text-white   " ><Clear /></button>
                                    </div>
                                    :
                                    <div ref={fileBase64Ref} id="filebase_image" className=" w-[7rem] h-[7rem] p-[8px] rounded-full bg-lightGray  flex justify-center items-center " >
                                        <button onClick={handleImageButtonClick} className="flex flex-col justify-center items-center text-textGray  " >
                                            <Publish /> Add Photo
                                        </button>
                                        <FileBase type="file" onDone={(filesArr) => { handleAddImage(filesArr) }} />
                                    </div>
                            }
                        </div>
                        {/* title */}
                        <div className="w-full md:w-[25rem] flex flex-col">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >title</label>
                            <input onChange={handleChange} value={productData.title} name='title' className="h-[20px] px-[12px] py-[20px] border-[1px] border-gray-500 rounded-[4px] " type="text" placeholder="Title" />
                        </div>
                        {/* description */}
                        <div className="w-full md:w-[25rem] flex flex-col">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >Description</label>
                            <input onChange={handleChange} value={productData.description} name='description' className="h-[20px] px-[12px] py-[20px] border-[1px] border-gray-500 rounded-[4px] " type="text" placeholder="Description" />
                        </div>
                        {/* price */}
                        <div className="w-full md:w-[25rem] flex flex-col">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >price</label>
                            <input onChange={handleChange} value={productData.price} name='price' className="h-[20px] px-[12px] py-[20px] border-[1px] border-gray-500 rounded-[4px] " type="text" placeholder="Price" />
                        </div>
                        {/* categories */}
                        <div className="w-full md:w-[25rem] flex flex-col">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >categories</label>
                            <input onChange={handleChange} value={productData.categories} name='categories' className="h-[20px] px-[12px] py-[20px] border-[1px] border-gray-500 rounded-[4px] " type="text" placeholder="jeans,skirts,etc..." />
                        </div>
                        {/* inStock */}
                        <div className="w-full md:w-[25rem] flex flex-col ">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >In Stock</label>
                            <select multiple={false} onChange={handleChange} value={productData.inStock} className="newProductSelect h-[40px] px-[12px] w-full rounded-[6px] border-[1px] border-gray-500 " name="inStock" id="active" >
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        {/* color */}
                        <div className="w-full md:w-[25rem] flex flex-col ">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >color</label>
                            <select multiple={false} onChange={handleChange} value={productData.color} className="newProductSelect h-[40px] px-[12px] w-full rounded-[6px] border-[1px] border-gray-500 " name="color" id="active" >
                                <option value="#2a7ade">blue</option>
                                <option value="#d95087">red</option>
                                <option value="#3bb077">green</option>
                                <option value="#008080">teal</option>
                                <option value="#fff">white</option>
                                <option value="#000">black</option>
                            </select>
                        </div>
                        {/* size */}
                        <div className="w-full md:w-[25rem] flex flex-col ">
                            <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >size</label>
                            <select multiple={false} onChange={handleChange} value={productData.size} className="newProductSelect h-[40px] px-[12px] w-full rounded-[6px] border-[1px] border-gray-500 " name="size" id="active" >
                                <option value="xl">XL</option>
                                <option value="l">L</option>
                                <option value="m">M</option>
                                <option value="s">S</option>
                                <option value="xs">XS</option>
                            </select>
                        </div>


                        {/* buttons */}
                        <div className=" w-full flex justify-start " >
                            <button onClick={handleUpdateProduct} className="w-[200px] border-none bg-darkBlue text-white px-[12px] py-[8px] rounded-[8px] font-semibold cursor-pointer mt-[32px] ">
                                {'Update'}
                            </button>
                        </div>

                    </form>
                </div>


            </div>

        </div>
    )
}

export default Product;