import { ConnectingAirportsOutlined, Visibility } from '@mui/icons-material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/user'
import { Person } from '@mui/icons-material'
import { rawUsers as users } from '../data/data'
import { Link } from 'react-router-dom'

const HomeUsers = () => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const dispatch = useDispatch()
    // const { users } = useSelector(state => state.user)

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    // useEffect(() => {
    //     dispatch(getUsers({ new: true }))
    // }, [])

    //////////////////////////////////////// Functions ////////////////////////////////////////

    return (
        <div className='w-full md:w-auto md:flex-1 p-[20px] shadow-box' >
            <span className='text-[24px] font-semibold' >New Join Members</span>
            <ul className='list-none m-0 p-0 flex flex-col gap-[20px] mt-[20px] ' >
                {
                    users.map((user, index) => (
                        <li key={index} className='flex items-center justify-between ' >
                            <div className='flex justify-between items-center gap-[2rem] ' >
                                {user.avatar ? <img src={user.avatar} alt='' className='w-[40px] h-[40px] rounded-full object-cover ' /> : <Person />}
                                <div className='flex flex-col ' >
                                    <span className='font-semibold capitalize ' >{user.username}</span>
                                    {/* <span className='font-light ' >{user.name}</span> */}
                                </div>
                            </div>
                            <Link to={`/user/${user._id}`} className='bg-lightBlue text-gray cursor-pointer flex items-center gap-[4px] py-[6px] px-[8px] border-none rounded-[4px] ' >
                                <Visibility style={{ fontSize: '18px' }} /> Display
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HomeUsers;