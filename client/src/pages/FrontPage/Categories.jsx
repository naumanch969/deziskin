import { product1, product2, product3 } from '../../assets'


const Categories = () => {


    return (
        <div className='w-full flex flex-wrap ' >

            <div className='flex justify-center flex-wrap gap-[1rem] w-full px-[1rem] py-[4rem] ' >
                {
                    categories.map((category, index) => (
                        <div key={index} className='md:w-[48%] w-full flex flex-col gap-[1rem] pb-[1rem] '>
                            <div className='w-full h-[28rem] ' >
                                <img src={category.img} alt='' className='w-full h-full ' />
                                {/* <div className='w-full h-full bg-brown ' /> */}
                            </div>
                            <div className='w-full flex justify-between items-center ' >
                                <h5 className='text-[18px] ' >{category.title}</h5>
                                <span className='text-[16px] ' >${category.price}</span>
                            </div>
                            <hr className='w-full h-[4px] bg-gray ' />
                            <p className='text-[14px] ' >{category.description}</p>
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
        img: product1,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    },
    {
        img: product2,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    },
    {
        img: product3,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    },
    {
        img: product2,
        title: 'Agua Fresca',
        price: '46.00',
        description: ' Thirst Quenching Gel-Crème Moisturizer',
    }, 
]