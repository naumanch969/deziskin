// import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, BrokenImage } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { format } from 'timeago.js';

const Users = ({users, setUsers}) => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    // const { users } = useSelector(state => state.user)
    const navigate = useNavigate()

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////


    //////////////////////////////////////// Functions ////////////////////////////////////////
    const handleDelete = (id) => {
        setUsers(users.filter(user => user._id != id))
        navigate('/users')
    }


    const userColumns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
            field: 'product', headerName: 'User', width: 200, renderCell: (params) => (
                <div className='flex items-center gap-[12px] ' >
                    {params.row.avatar ? <img src={params.row.avatar} alt='' className='w-[40px] h-[40px] rounded-full object-cover ' /> : <BrokenImage />}
                    <span className=' ' > {params.row.username}</span>
                </div>)
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'createdAt', headerName: 'Price', width: 150, renderCell: (params) => (
                <>
                    {format(params.row.createdAt)}
                </>
            )
        },
        {
            field: "action", headerName: "Action", width: 150, renderCell: (params) => (
                <>
                    <Link to={`/user/${params.row._id}`}>
                        <button className="border-none rounded-[8px] py-[4px] px-[10px] bg-green text-white cursor-pointer mr-[20px]">
                            Edit
                        </button>
                    </Link>
                    <IconButton className="" onClick={() => handleDelete(params.row._id)}>
                        <DeleteOutline style={{ color: "red", cursor: "pointer" }} />
                    </IconButton>
                </>
            ),
        },
    ]

    return (
        <div className='w-full md:flex-[4] h-full overflow-y-scroll ' >
            <div className="px-[2rem] pt-[12px] pb-[2rem] flex flex-col gap-[1rem] ">


                {/* title */}
                <div className="flex items-center justify-between ">
                    <h1 className="font-bold text-[32px]  ">Users</h1>
                    <Link to='/newUser' >
                        <button className="border-none py-[4px] px-[1rem] bg-darkBlue rounded-[4px] cursor-pointer text-white text-[16px]  ">Create</button>
                    </Link>
                </div>

                <div className="lg:w-[60rem]  " >
                    <DataGrid
                        rows={users}
                        columns={userColumns}
                        initialState={{
                            pagination: { paginationModel: { page: users.length % 10, pageSize: 10 }, },
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

export default Users