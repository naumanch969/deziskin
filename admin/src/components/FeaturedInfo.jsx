import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIncome } from '../redux/actions/order'

const FeaturedInfo = () => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const { incomeChange } = useSelector(state => state.order);
    const dispatch = useDispatch();
    const featuredArr = [
        { title: 'Revenue', money: '$2,522', change: incomeChange, subTitle: 'Compare to last month.', icon: incomeChange > 0 ? ArrowUpward : ArrowDownward, positive: incomeChange > 0 },
        { title: 'Sales', money: '$1,520', change: '-0.4', subTitle: 'Compare to last month.', icon: ArrowDownward },
        { title: 'Cost', money: '$522', change: '+3.9', subTitle: 'Compare to last month.', icon: ArrowUpward, positive: true },
    ]

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    // useEffect(() => {
    //     dispatch(getIncome())
    // }, [])

    //////////////////////////////////////// Functions ////////////////////////////////////////




    return (
        <div className="w-fit md:w-full flex flex-row flex-wrap md:justify-between justify-center gap-[24px] mt-[12px] " >
            {
                featuredArr.map((featuredProduct, index) => (
                    <div key={index} className="shadow-box w-full sm:w-fit md:flex-1 p-[32px] rounded-[8px] cursor-pointer ">
                        <span className="text-[20px] ">{featuredProduct.title}</span>
                        <div className="my-[10px] flex items-center gap-[20px] ">
                            <span className="text-[32px] font-bold ">{featuredProduct.money}</span>
                            <span className="flex items-center ">%{featuredProduct.change} <featuredProduct.icon style={{ fontSize: '14px', marginLeft: '4px', color: featuredProduct.positive ? 'green' : 'red' }} /> </span>
                        </div>
                        <span className="text-[1rem] text-gray-500 ">{featuredProduct.subTitle}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturedInfo