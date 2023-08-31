import { main } from '../../assets'
import { Products, Footer, MainImage } from '../../components'
import { useSelector } from 'react-redux'


const Accessories = () => {

    var {products} = useSelector(state=>state.product)
    products = products.filter(product => product.categories.includes('accessories'))

    return (
        <div className=''  >

            <MainImage title='Home Accessories' img={main} />
            <Products products={products} />
            <Footer />

        </div>
    )
}
export default Accessories;