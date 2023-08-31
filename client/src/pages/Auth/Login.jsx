import { Footer } from '../../components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/user'

const Login = () => {

    const dispatch = useDispatch()
    const { isFetching } = useSelector(state => state.user)
    const [userData, setUserData] = useState({ email: '', password: '' })

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login(userData))
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <div className='bg-lighter-brown ' >

            <div className='w-full flex justify-center items-center min-h-[90vh] ' >
                <div className='lg:w-[50vw] md:w-[60vw] sm:w-[80%] w-[90%] flex flex-col items-center gap-[2rem] '  >
                    <h2 className='capitalize text-[40px] ' >login</h2>
                    <form className='w-full flex flex-col items-center gap-[2rem] ' >
                        <div style={{ maxWidth:`30rem` }} className='w-full flex flex-col gap-[1rem] max-w-[30rem] ' >
                            <input onChange={handleChange} name='email' value={userData.email} type='email' placeholder='email' className='w-full outline-none p-[1rem] border-[1px] border-black ' />
                            <input onChange={handleChange} name='password' value={userData.password} type='password' placeholder='password' className='w-full outline-none p-[1rem] border-[1px] border-black ' />
                            <Link to='' className='underline ' >Forget your password?</Link>
                        </div>
                        <button onClick={handleLogin} style={{ padding:`1rem 2rem` }} className='px-[2rem] py-[1rem] text-white bg-darker-brown w-fit ' >
                            {isFetching ? `Loading...` : `Login`}
                        </button>
                        <Link to='/account/register' className='underline ' >Create Account</Link>
                    </form>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Login;