import { Rating } from '@mui/material'
import { Star } from '@mui/icons-material'
import { product2 } from '../../assets'


const Review = () => {

    const stars = { 1: 4, 2: 23, 3: 4, 4: 3, 5: 2 }

    return (
        <div className='p-[3rem]  ' >

            <div className={`flex justify-between gap-[2rem]`} >
                <div className={`flex-[2] `} >
                    <div className={`flex flex-col gap-[1rem] `} >
                        <div className='flex justify-between items-center ' >
                            <div className='flex items-center ' >
                                <span className=' ' >5.0</span>
                                <Rating value={5} className='text-black ' />
                            </div>
                            <span className='' >based on 12 review</span>
                        </div>
                        <div className='flex flex-col gap-[1rem] ' >
                            {
                                Array(5).fill('').map((_, index) => (
                                    <div key={index} className={`flex justify-center items-center gap-[8px] `} >
                                        <div className={`flex justify-start flex-[1] gap-[4px] `} >
                                            <span className=' ' >5</span>
                                            <Star />
                                        </div>
                                        <div className='bg-white h-[8px] rounded-[4px] flex-[12] ' >
                                            <div className={`w-full h-full bg-brown rounded-full `} />
                                        </div>
                                        <span className={`flex-[1] `} >2</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={`flex-[3] px-[2rem] flex flex-col gap-[1rem] `} >
                    <h5 className=' ' ><span className=' ' >100%</span> would recomment this product </h5>
                    <div className='w-[8rem] h-[8rem] ' >
                        <img src={product2} alt=' ' className='w-full h-full object-cover ' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Review;