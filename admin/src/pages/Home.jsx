import { FeaturedInfo, Chart, HomeUsers, HomeOrders } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { getUserStats } from '../redux/actions/user'
import { useEffect } from 'react'
import { userStats } from '../data/data'


const Home = () => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    // const { userStats } = useSelector(state => state.user);
    const dispatch = useDispatch();

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    // useEffect(() => {
        // dispatch(getUserStats())
    // }, [])

    //////////////////////////////////////// Functions ////////////////////////////////////////

    return (
        <div className='w-full h-full md:w-auto md:flex-[4] overflow-y-scroll ' >
            <div className=" px-[2rem] pt-[12px] pb-[2rem] " >
                <FeaturedInfo />
                <Chart data={userStats} title='User Analytics' dataKey='Active User' grid />
                <div className='homeWidgets  flex md:flex-row flex-col gap-[20px] ' >
                    <HomeUsers />
                    <HomeOrders />
                </div>
            </div>
        </div>
    )
}

export default Home;