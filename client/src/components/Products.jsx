import { product1, product2, product3, product4, product5, product6 } from '../assets'
import { Product } from './'

const Products = ({ products }) => {

    console.log(`producs`,products)

    return (
        <div className='flex justify-center items-center bg-lighter-brown ' >

            <div className='w-full flex justify-center flex-wrap gap-[1rem] lg:px-[2rem] md:px-[1.5rem] sm:px-[1.2rem] md:py-[4rem] py-[3rem]  ' >
                {
                    products?.map((product, index) => (
                        <Product product={product} key={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default Products;


const productsf = [
    {
        img: product3,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
        reviews: '145',
        stars: '4'
    },
    {
        img: product2,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
        reviews: '145',
        stars: '4'
    },
    {
        img: product6,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
        reviews: '145',
        stars: '4'
    },
    {
        img: product1,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
        reviews: '145',
        stars: '4'
    },
    {
        img: product4,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
        reviews: '145',
        stars: '4'
    },
    {
        img: product5,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
        reviews: '145',
        stars: '4'
    },
    {
        img: product1,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
        reviews: '145',
        stars: '4'
    },
    {
        img: product2,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
        reviews: '145',
        stars: '4'
    },
]