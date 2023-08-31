import { ArrowRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Announcement = () => {

    return (
        <Link className='w-full font-ibm bg-light-brown flex justify-center items-center md:h-[36px] h-[3rem] p-[4px] ' >

            <span className='w-full text-center text-darker-brown md:text-[16px] text-[12px]  ' >
                Free Shipping for MOTHERS'S DAY - For orders over $100 (Automatic at Checkout) <ArrowRight />
            </span>

        </Link>
    )
}

export default Announcement;