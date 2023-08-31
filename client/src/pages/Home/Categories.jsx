import { product3, product4, product6 } from '../../assets'
import { Link } from 'react-router-dom'


const Categories = () => {


    return (
        <div className='w-full flex flex-wrap ' >

            <div className='flex justify-center flex-wrap gap-[8px] py-[4rem] ' >
                {
                    categories.map((category, index) => (
                        <div key={index} className='md:w-[49%] sm:w-[96%] w-full h-[35rem] relative bg-white flex justify-center items-center flex-col gap-[1rem] pb-[1rem] '>
                            <div className='w-full h-full absolute top-0 right-0 ' >
                                <img src={category.img} alt='' className='w-full h-full ' />
                                {/* <div className='w-full h-full bg-brown ' /> */}
                            </div>
                            <div className='w-full flex flex-col justify-center items-center z-[100] text-white ' >
                                <h5 className='text-[54px] text-center ' >{category.title}</h5>
                                <Link to={`/product/${category.title}`} className={`underline text-[24px] `} >Shop now</Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Categories;

const categories = [
    {
        img: product3,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    },
    {
        img: product4,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    },
    {
        img: product6,
        title: 'Masque On',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    },
    {
        img: product4,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    },
    {
        img: product6,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    },
    {
        img: product3,
        title: 'Rino Diqaro',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    },
]