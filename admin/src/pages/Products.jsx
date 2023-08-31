import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, BrokenImage } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, deleteProduct } from '../redux/actions/product'
import { format } from 'timeago.js';

const Products = ({ products, setProducts }) => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    // const { products } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [])


    //////////////////////////////////////// Functions ////////////////////////////////////////
    const handleDelete = (id) => {
        // dispatch(deleteProduct(id))
        setProducts(products.filter(product => product._id != id))
        navigate('/products')
    }




    const productColumns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => (
                <div className='flex items-center gap-[12px] ' >
                    {params.row.image ? <img src={params.row.image} alt='' className='w-[40px] h-[40px] rounded-full object-cover ' /> : <BrokenImage />}
                    <span className=' ' > {params.row.title}</span>
                </div>)
        },
        { field: 'inStock', headerName: 'Stock', width: 200 },
        { field: 'price', headerName: 'Price', width: 150, },
        {
            field: 'createdAt', headerName: 'Price', width: 150, renderCell: (params) => (
                <>{format(params.row.createdAt)}</>
            )
        },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                <>
                    <Link to={`/product/${params.row._id}`} >
                        <button className='border-none rounded-[8px] py-[4px] px-[10px] bg-green text-white cursor-pointer mr-[20px] ' >Edit</button>
                    </Link>
                    <IconButton className='' onClick={() => handleDelete(params.row._id)} > <DeleteOutline style={{ color: 'red', cursor: 'pointer' }} /></IconButton>
                </>
            )
        },
    ]

    return (

        <div className='w-full md:flex-[4] h-full overflow-y-scroll ' >
            <div className="px-[2rem] pt-[12px] pb-[2rem] flex flex-col gap-[1rem] ">

                {/* title */}
                <div className="flex items-center justify-between ">
                    <h1 className="font-bold text-[32px]  ">Products</h1>
                    <Link to='/newProduct' >
                        <button className="border-none py-[4px] px-[1rem] bg-darkBlue rounded-[4px] cursor-pointer text-white text-[16px]  ">Create</button>
                    </Link>
                </div>

                <div className="lg:w-[60rem] overflow-x-scroll " >
                    <DataGrid
                        rows={products}
                        columns={productColumns}
                        initialState={{
                            pagination: { paginationModel: { page: products.length % 10 , pageSize: 10 }, },
                        }}
                        getRowId={row => row._id}
                        checkboxSelection
                        pageSizeOptions={[5, 10]}
                        disableSelectionOnClick={true}
                    />
                </div>


            </div>
        </div>
    )
}

export default Products