import { travel_kit } from '../../assets'
import { Products, Footer, MainImage } from '../../components'
import { useSelector } from 'react-redux'


const TravelKits = () => {

    var { products } = useSelector(state => state.product)
    products = products.filter(product=>product.categories.includes('travel_kits'))


    return (
        <div className=''  >

            <MainImage img={travel_kit} height={`70vh`} title={`travel kit`} />

            <Products products={products} />

            <Footer />

        </div>
    )
}
export default TravelKits;