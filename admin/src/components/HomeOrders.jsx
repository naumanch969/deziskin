
import { person1, person2, person3 } from '../assets'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../redux/actions/order'
import { format } from 'timeago.js'
import BasicTable from './Table'
import { rawOrders as orders } from '../data/data'

const HomeOrders = () => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const dispatch = useDispatch()
    // const { orders } = useSelector(state => state.order)

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////
    // useEffect(() => {
    //     dispatch(getOrders({ new: true }))
    // }, [])

    //////////////////////////////////////// Functions ////////////////////////////////////////

    return (
        <div className='w-full md:w-auto md:flex-[2] p-[20px] shadow-box' >

            <span className='text-[24px] font-semibold' >Latest Transactions</span>

            <BasicTable
                data={orders}
                headRow={['customer', 'amount', 'status', 'date']}
                attributes={['user', 'amount', 'status', 'createdAt']}
            />

        </div>
    )
}

export default HomeOrders;