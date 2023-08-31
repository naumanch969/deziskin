import { useSelector, useDispatch } from 'react-redux'
import { register } from '../redux/actions/user'
import { useState, useRef, useEffect } from 'react'
import { Publish, Clear } from '@mui/icons-material'
import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom'

const NewUser = ({ users, setUsers }) => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const dispatch = useDispatch()
    const fileBase64Ref = useRef(null)
    // const {isFetching} = useSelector(state=>state.user)
    const navigate = useNavigate()

    //////////////////////////////////////// States ////////////////////////////////////////
    const initialUserState = { name: '', username: '', email: '', password: '', avatar: '', status: true }
    const [userData, setUserData] = useState(initialUserState)

    //////////////////////////////////////// UseEffects ////////////////////////////////////////

    
    //////////////////////////////////////// Functions ////////////////////////////////////////
    const handleCreateUser = (e) => {
        e.preventDefault()
        // dispatch(register({ ...userData, categories: userData.categories.split(',') }))
        setUsers([...users, { ...userData, _id: users.length + 1 }])
        navigate('/users')
        // setUserData(initialUserState)
    }
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleImageButtonClick = () => {
        fileBase64Ref.current.querySelector('input[type="file"]').click();
    }
    const addImageFunc = (files) => {
        setUserData({ ...userData, avatar: files[0].base64 })
    }
    const deleteTestimonialImageFunc = () => {
        setUserData({ ...userData, avatar: '' })
    }

    return (
        <div className='w-full md:flex-[4] h-full overflow-y-scroll ' >

            <div className="w-full px-[2rem] pt-[12px] pb-[2rem] " >
                <h1 className="userTitle font-bold text-[32px] mb-[1rem]  ">New User</h1>

                <form className="newUserForm flex flex-wrap gap-[20px] " >
                    {/* image */}
                    <div className="newUserItem w-[25rem] w-full flex justify-center md:items-start items-center flex-col">
                        {
                            userData.avatar
                                ?
                                <div
                                    className="relative w-[7rem] h-[7rem] p-[8px] rounded-full flex justify-center items-center  " >
                                    <img src={userData.avatar} alt="" className="rounded-full " />
                                    <button onClick={() => deleteTestimonialImageFunc()} className="absolute top-[0px] right-[0px] text-white   " ><Clear /></button>
                                </div>
                                :
                                <div ref={fileBase64Ref} id="filebase_image" className=" w-[7rem] h-[7rem] p-[8px] rounded-full bg-lightGray  flex justify-center items-center " >
                                    <button onClick={() => handleImageButtonClick()} className="flex flex-col justify-center items-center text-textGray  " >
                                        <Publish /> Add Photo
                                    </button>
                                    <FileBase type="file" onDone={(filesArr) => { addImageFunc(filesArr) }} />                                </div>
                        }
                    </div>
                    {/* name */}
                    <div className="newUserItem w-[25rem] flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >name</label>
                        <input onChange={handleChange} value={userData.name} name='name' className="h-[20px] px-[12px] py-[20px] border-[1px] border-gray-500 rounded-[4px] " type="text" placeholder="Title" />
                    </div>
                    {/* username */}
                    <div className="newUserItem w-[25rem] flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >username</label>
                        <input onChange={handleChange} value={userData.username} name='username' className="h-[20px] px-[12px] py-[20px] border-[1px] border-gray-500 rounded-[4px] " type="text" placeholder="Description" />
                    </div>
                    {/* status */}
                    <div className="w-full md:w-[25rem] flex flex-col ">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >status</label>
                        <select multiple={false} onChange={handleChange} value={userData.status} className="newProductSelect h-[40px] px-[12px] w-full rounded-[6px] border-[1px] border-gray-500 " name="inStock" id="active" >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    {/* email */}
                    <div className="newUserItem w-[25rem] flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >email</label>
                        <input onChange={handleChange} value={userData.email} name='email' className="h-[20px] px-[12px] py-[20px] border-[1px] border-gray-500 rounded-[4px] " type="text" placeholder="Price" />
                    </div>
                    {/* password */}
                    <div className="newUserItem w-[25rem] flex flex-col">
                        <label className="mb-[10px] text-[16px] font-semibold text-lightGray " >password</label>
                        <input onChange={handleChange} value={userData.password} name='categories' className="h-[20px] px-[12px] py-[20px] border-[1px] border-gray-500 rounded-[4px] " type="text" placeholder="jeans,skirts,etc..." />
                    </div>

                    {/* buttons */}
                    <div className=" w-full flex justify-start " >
                        <button onClick={handleCreateUser} className="w-[200px] border-none bg-darkBlue text-white px-[12px] py-[8px] rounded-[8px] font-semibold cursor-pointer mt-[32px] ">
                            {'Create'}
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default NewUser;