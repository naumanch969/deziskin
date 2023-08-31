import { Link, useNavigate } from "react-router-dom"
import { Navbar } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { register } from "../redux/actions/user"

const Register = () => {

    ///////////////////////////////////////  Variables  /////////////////////////////////////////////
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({ name: '', username: '', email: '', password: '', confirmPassword: '' })
    const { error } = useSelector(state => state.user)
    const navigate = useNavigate()

    ///////////////////////////////////////  States   /////////////////////////////////////////////

    ///////////////////////////////////////  useEffect   /////////////////////////////////////////////

    ///////////////////////////////////////  Functions  /////////////////////////////////////////////
    // 1)
    const handleRegister = (e) => {
        e.preventDefault()
        // dispatch(register(userData, navigate))
    }
    // 2)
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Navbar />
            <div style={{ height: 'calc(100vh - 60px' }} className="w-full h-screen min-h-[30rem] bg-light-teal pt-[3rem] flex justify-center items-start relative">
                <div className="wrapper flex flex-col gap-[1rem] p-[20px] md:w-[60%] sm:w-[70%] w-[90%] bg-white " >
                    <h2 className="title capitalize text-[24px] font-light " >Create An Account</h2>
                    <form className="form flex flex-wrap md:flex-row flex-col gap-[1rem] " >
                        <input onChange={handleChange} name='name' type="text" placeholder="name" className="input outline-teal flex-1 min-w-[40%] border-[1px] rounded-[4px] border-light-gray500 p-[10px] " />
                        <input onChange={handleChange} name='username' type="text" placeholder="username" className="input outline-teal flex-1 min-w-[40%] border-[1px] rounded-[4px] border-light-gray500 p-[10px] " />
                        <input onChange={handleChange} name='email' type="email" placeholder="email" className="input outline-teal flex-1 min-w-full border-[1px] rounded-[4px] border-light-gray500 p-[10px] " />
                        <input onChange={handleChange} name='password' type="password" placeholder="password" className="input outline-teal flex-1 min-w-[40%] border-[1px] rounded-[4px] border-light-gray500 p-[10px] " />
                        <input onChange={handleChange} name='confirmPassword' type="password" placeholder="confirm password" className="input outline-teal flex-1 min-w-[40%] border-[1px] rounded-[4px] border-light-gray500 p-[10px] " />
                        <span className="aggreement text-[14px] " >By creating an account, I consent to the processing of my personal data in accordance with the <b className="" >PRIVACY POLICY</b></span>
                        <div className="flex justify-end w-full " >
                            <button onClick={handleRegister} className="w-[40%] border-none py-[16px] px-[20px] bg-teal text-white rounded-[2px] cursor-pointer " >Create</button>
                        </div>
                        {error && <p className='text-red-500 ' >something went wrong</p>}
                    </form>
                    <p className='w-full text-center capitalize ' >Already have account? <Link to='/login' className='text-teal' >login here</Link> </p>
                </div>
            </div>
        </>
    )
}

export default Register;