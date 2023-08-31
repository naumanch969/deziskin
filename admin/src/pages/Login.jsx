import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import { login } from "../redux/actions/user"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    ///////////////////////////////////////  Variables  /////////////////////////////////////////////
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({ name: '', username: '', email: '', password: '', confirmPassword: '' })
    const { error } = useSelector(state => state.user)
    const navigate = useNavigate()

    ///////////////////////////////////////  States   /////////////////////////////////////////////

    ///////////////////////////////////////  useEffect   /////////////////////////////////////////////

    ///////////////////////////////////////  Functions  /////////////////////////////////////////////
    // 1)
    const handleLogin = (e) => {
        e.preventDefault()
        // dispatch(login(userData, navigate))
    }
    // 2)
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <div className="w-full h-screen min-h-[30rem] bg-light-teal pt-[3rem] flex justify-center items-center relative">

            <div className="flex flex-col gap-[1rem] p-[20px] md:w-[40%] sm:w-[70%] w-[90%] bg-white " >
                <h2 className="title capitalize text-[24px] font-light " >Sign in</h2>
                <form className="form flex flex-wrap md:flex-row flex-col gap-[1rem] " >
                    <input onChange={handleChange} type="text" name="email" placeholder="email" className="input outline-teal flex-1 min-w-full border-[1px] rounded-[4px] border-light-gray500 p-[10px] " />
                    <input onChange={handleChange} type="password" name="password" placeholder="password" className="input outline-teal flex-1 min-w-[40%] border-[1px] rounded-[4px] border-light-gray500 p-[10px] " />
                    <div className="flex justify-end w-full " >
                        <button onClick={handleLogin} className="w-fit border-none py-[16px] px-[2rem] bg-teal text-white rounded-[2px] cursor-pointer " >Login</button>
                    </div>
                    <Link to={``} className="my-[6px] text-[14px] underline cursor-pointer " >Forget Password</Link>
                </form>
                {error && <p className='text-red-500 ' >something went wrong</p>}
                <p className='w-full text-center capitalize' >don't have account? <Link to='/register' className='text-teal' >Register here</Link> </p>
            </div>

        </div>
    )
}

export default Login;