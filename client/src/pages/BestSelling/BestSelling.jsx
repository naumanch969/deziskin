import { about1 } from '../../assets'
import { Products, Footer, Categories, MainImage } from '../../components'
import { useSelector } from 'react-redux'

const BestSelling = () => {

    var { products } = useSelector(state => state.product)
    products = products.filter(product => product.categories.includes('travel_kits'))


    return (
        <div className=''  >

            <MainImage img={about1} height={`70vh`} title={`best selling`} />
            <Products products={products} />
            <Categories />
            <Footer />

        </div>
    )
}
export default BestSelling;