import { header } from '../../assets'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div className='w-full relative bg-cover bg-no-repeat bg-lighter-brown h-screen flex justify-center items-center ' >
            <img src={header} alt={``} className={`absolute top-0 right-0 h-full w-full object-cover `} />

            <div style={{ zIndex: `500` }} className='lg:min-w-[28rem] md:min-w-[26rem] sm:w-[22rem] w-[18rem] z-[100] rounded-[4px] py-[4rem] bg-lighter-brown lg:px-[3.5rem] md:px-[3rem] sm:px-[2.5rem] px-[2rem] flex flex-col justify-between items-center gap-[1rem] ' >
                <h2 className='capitalize font-semibold text-[2rem] ' >Masque On</h2>
                <p className='capitalize font-light ' >Overnight Mosture Night</p>
                <Link to={`/collections/frontpage`}  className='capitalize px-[2rem] py-[12px] bg-darker-brown text-white  ' >Shop Now</Link>
            </div>

        </div>
    )
}

export default Header;