import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import Header from './Header'
import Testimonials from '../FrontPage/Testimonials'
import { Products } from '../../components'
import Categories from './Categories'
// import Video from './Video'
import { Footer } from '../../components'
import { getProducts } from '../../redux/actions/product'
import Cookie from 'js-cookie'
// remove token after 3 days

const Home = () => {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.product)

    console.log('products', products)


    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className="w-full " >
            <Header />
            <Products products={products} />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home