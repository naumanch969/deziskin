import Testimonials from './Testimonials'
import { Products, MainImage } from '../../components'
import Categories from './Categories'
// import Video from './Video'
import { Footer } from '../../components'
import { main } from '../../assets'
import { useSelector } from 'react-redux'


const FrontPage = () => {

    const { products } = useSelector(state => state.product)
 

    return (
        <div className="w-full " >
            <MainImage title={`Shop All`} subTitle={`Skin Favourites`} img={main} height={`80vh`} />
            <Testimonials />
            <Products products={products} />
            <Categories />
            {/* <Video /> */}
            <Footer />

        </div>
    )
}

export default FrontPage