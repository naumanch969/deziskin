import { Link } from 'react-router-dom'
import { Modal, IconButton } from '@mui/material'
import { Clear } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { login, register } from '../redux/actions/user'

const AuthModal = ({ open, setOpen, type: input_type }) => {

    const dispatch = useDispatch()
    const { isFetching } = useSelector(state => state.user)
    const [userData, setUserData] = useState({ name: '', email: '', password: '' })
    const [type, setType] = useState(input_type)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (type == 'register') {
            dispatch(register(userData))
            !isFetching && setType('login')
        }
        else {
            dispatch(login(userData))
            !isFetching && setOpen(false)
        }
        
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)} className={`flex justify-center items-center `} >
            <div className={`bg-lighter-brown px-[1rem] w-[25rem] max-h-[80vh] overflow-y-scroll  `} >

                <div className='w-full h-full flex flex-col items-center gap-[2rem] p-[1rem] rounded-[4px] overflow-hidden '  >

                    <div className={`w-full flex justify-between items-center bg-lighter-brown `} >
                        <h3 className={`text-[22px] font-medium capitalize `} >{type}</h3>
                        <IconButton onClick={() => setOpen(false)} ><Clear style={{ fontSize: `2rem` }} /></IconButton>
                    </div>

                    <form className='w-full flex flex-col items-center gap-[2rem] ' >
                        <div style={{ maxWidth: `30rem` }} className='w-full flex flex-col gap-[1rem] max-w-[30rem] ' >
                            {type == 'register' && <input onChange={handleChange} name='name' value={userData.name} type='text' placeholder='name' className='w-full outline-none p-[1rem] border-[1px] border-black ' />}
                            <input onChange={handleChange} name='email' value={userData.email} type='email' placeholder='email' className='w-full outline-none p-[1rem] border-[1px] border-black ' />
                            <input onChange={handleChange} name='password' value={userData.password} type='password' placeholder='password' className='w-full outline-none p-[1rem] border-[1px] border-black ' />
                            {type == 'login' && <Link to='' className='underline ' >Forget your password?</Link>}
                        </div>
                        <button onClick={handleSubmit} style={{ padding: `1rem 2rem` }} className='px-[2rem] py-[1rem] text-white bg-darker-brown w-fit ' >
                            {isFetching ? `Loading...` : type}
                        </button>
                    </form>
                    <button onClick={() => type == 'login' ? setType('register') : setType('login')} className='underline ' >{type == 'login' ? 'Create Account' : 'Login here'}</button>
                </div>

            </div>
        </Modal>
    )
}

export default AuthModal