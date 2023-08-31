import { Footer } from '../../components'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/actions/user'

const Register = () => {

    const dispatch = useDispatch()
    const navigate= useNavigate()
    const { isFetching } = useSelector(state => state.user)
    const [userData, setUserData] = useState({ name:'',email: '', password: '' })

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(register(userData,navigate))
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <div className='bg-lighter-brown ' >

            <div className='w-full flex justify-center items-center min-h-screen py-[3rem] ' >
                <div className='lg:w-[50vw] md:w-[60vw] flex flex-col items-center gap-[2rem] '  >
                    <h2 className='capitalize text-[40px] ' >register</h2>
                    <form className='w-full flex flex-col items-center gap-[2rem] ' >
                        <div style={{ maxWidth:`30rem` }} className='w-full flex flex-col gap-[1rem] max-w-[30rem] ' >
                            <input onChange={handleChange} name='name' value={userData.name} type='text' placeholder='name' className='w-full outline-none p-[1rem] border-[1px] border-black ' />
                            <input onChange={handleChange} name='email' value={userData.email} type='email' placeholder='email' className='w-full outline-none p-[1rem] border-[1px] border-black ' />
                            <input onChange={handleChange} name='password' value={userData.password} type='password' placeholder='password' className='w-full outline-none p-[1rem] border-[1px] border-black ' />
                        </div>
                        <button onClick={handleRegister} style={{ padding:`1rem 2rem`}} className='p-[1rem] text-white bg-darker-brown w-fit ' >
                            {isFetching ? `Loading...` : `Register`}
                        </button>
                        <Link to='/account/login' className='underline ' >Login here</Link>
                    </form>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Register;