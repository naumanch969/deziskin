import { useSelector, useDispatch } from 'react-redux'
import { createProduct } from '../redux/actions/product'
import { useState, useRef, useEffect } from 'react'
import { Publish, Clear } from '@mui/icons-material'
import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom'

const NewProduct = ({ products, setProducts }) => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const colors = [
        { color: 'blue', hex: '#2a7ade' },
        { color: 'red', hex: '#d95087' },
        { color: 'green', hex: '#3bb077' },
        { color: 'teal', hex: '#008080' },
        { color: 'white', hex: '#fff' },
        { color: 'black', hex: '#000' },
    ]
    const sizes = [
        { size: 'XL', value: 'XL' },
        { size: 'L', value: 'L' },
        { size: 'M', value: 'M' },
        { size: 'S', value: 'S' },
        { size: 'XS', value: 'XS' },
    ]
    const dispatch = useDispatch()
    const navigtae = useNavigate()
    const fileBase64Ref = useRef(null)
    const initialProductState = { title: '', description: '', inStock: true, categories: '', image: '', price: '', size: sizes[0].value, color: colors[0].hex }
    // const { isFetching } = useSelector(state => state.product)

    //////////////////////////////////////// States ////////////////////////////////////////
    const [productData, setProductData] = useState(initialProductState)

    //////////////////////////////////////// UseEffects ////////////////////////////////////////


    //////////////////////////////////////// Functions ////////////////////////////////////////
    const handleCreateProduct = (e) => {
        e.preventDefault()
        // dispatch(createProduct({ ...productData, categories: productData.categories.split(',') }))
        setProducts([...products, { ...productData, categories: productData.categories.split(','), _id: products.length + 1 }])
        setProductData(initialProductState)
        navigtae('/products')
    }
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }
    const handleImageButtonClick = (e) => {
        e.preventDefault();
        fileBase64Ref.current.querySelector('input[type="file"]').click();
    }
    const addImageFunc = (files) => {
        setProductData({ ...productData, image: files.base64 })
    }
    const deleteTestimonialImageFunc = () => {
        setProductData({ ...productData, image: '' })
    }


    return (
        <div className='w-full md:flex-[4] h-full overflow-y-scroll ' >

            <div className="w-full px-[2rem] pt-[12px] pb-[2rem] " >
                <h1 className="font-bold text-[32px] mb-[1rem]  ">New Product</h1>

                <form className="flex flex-wrap gap-[20px] " >
                    {/* image */}
                    <div className="w-full md:w-[25rem] flex justify-center items-center flex-col">
                        {
                            productData.image && productData.image !== 'img'
                                ?
                                <div className="relative w-[7rem] h-[7rem] p-[8px] rounded-full flex justify-center items-center  " >
                                    <img src={productData.image} alt="" className="rounded-full w-full h-full " />
                                    <button onClick={() => deleteTestimonialImageFunc()} className="absolute top-[0px] right-[0px] text-white   " ><Clear /></button>
                                </div>
                                :
                                <div ref={fileBase64Ref} id="filebase_image" className=" w-[7rem] h-[7rem] p-[8px] rounded-full bg-lightGray  flex justify-center items-center " >
                                    <button onClick={handleImageButtonClick} className="flex flex-col justify-center items-center text-textGray  " >
                                        <Publish /> Add Photo
                                    </button>
                                    <FileBase type="file" onDone={(filesArr) => { addImageFunc(filesArr) }} />
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
                        <button onClick={handleCreateProduct} className="w-[200px] border-none bg-darkBlue text-white px-[12px] py-[8px] rounded-[8px] font-semibold cursor-pointer mt-[32px] ">
                            {'Create'}
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default NewProduct;