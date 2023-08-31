import { Link } from 'react-router-dom'
import { Search, PersonOutlined, ShoppingCartOutlined, Clear, Dehaze } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Modal, IconButton } from '@mui/material'
import { Cart } from './'
import { useSelector } from 'react-redux'
import MobileNavbar from './MobileNavbar'
import { motion } from 'framer-motion';

const Navbar = () => {

    const { pathname } = useLocation()
    const { loggedUser, cartProducts } = useSelector(state => state.user)

    const quantity = cartProducts?.length

    const [openSearchModal, setOpenSearchModal] = useState(false)
    const [openNavbar, setOpenNavbar] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [search, setSearch] = useState('')

    //         < motion.div
    //     initial = {{ x: '-106%' }
    // }
    // animate = {{ x: openNavbar ? '-6%' : '-106%' }}
    // transition = {{ duration: 0.4 }}
    // style = {{ zIndex: 100000 }}
    // className = 'z-[10000] absolute left-0 top-0 bottom-0 flex justify-center w-[16rem] h-screen bg-lighter-brown'
    //     >

    return (
        <>
            {/* desktop navbar */}
            <nav style={{ backdropFilter: 'blur(4px)' }} className={`lg:flex hidden bg-opacity-brown w-full sticky top-0 z-[1000] `}>
                <div className='wrapper w-full flex px-[3rem] py-[2rem] ' >
                    <ul className='flex-[3] flex flex-wrap gap-[1rem] ' >
                        {
                            navLinks.map((link, index) => (
                                <Link key={index} to={link.link} className='w-max ' >
                                    <li className={`uppercase text-[14px] hover:underline ${pathname == link.link && 'underline'} `} key={index} >{link.name}</li>
                                </Link>
                            ))
                        }
                    </ul>

                    <Link to={`/`} className='flex-[3] flex flex-col items-center ' >
                        <span className='font-semibold text-[40px] leading-[26px] ' >DEZI</span>
                        <span className='font-medium text-[20px] ' >SKIN</span>
                    </Link>

                    <div className='flex-[3] flex justify-end items-start gap-[1.5rem] ' >
                        <span className='capitalize text-[18px] font-medium ' >{loggedUser?.name}</span>
                        <Link to='/account/login' className='' ><PersonOutlined style={{ fontSize: '30px' }} /></Link>

                        <button onClick={() => setOpenSearchModal(pre => !pre)} className='' ><Search /></button>
                        <button onClick={() => setOpenCart(pre => !pre)} className='relative ' >
                            <ShoppingCartOutlined />
                            <span className='absolute bottom-[-6px] left-[-6px] w-[1rem] h-[1rem] bg-darker-brown text-white rounded-full text-[12px] flex items-center justify-center ' >{quantity}</span>
                        </button>
                    </div>

                </div>

                <Modal open={openSearchModal} onClose={() => setOpenSearchModal(false)} >

                    <div className='h-[35vh] flex justify-center ' >
                        <div className='flex justify-center items-end w-full ' >

                            <div className='flex items-center md:gap-[1rem] gap-[8px]  mb-[1rem] w-[30rem] md:px-0 px-[8px] ' >
                                <div className='relative rounded-[2px] md:min-w-[30rem] w-full flex justify-between items-center bg-white pl-[16px] pr-[8px] ' >
                                    <input type='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full py-[12px] outline-none ' />
                                    <IconButton className='bg-brown text-white flex justify-center items-center ' ><Search /></IconButton>
                                </div>
                                <IconButton onClick={() => setOpenSearchModal(false)} style={{ background: `white` }} className={`bg-white `} ><Clear className='text-black ' /></IconButton>
                            </div>

                        </div>
                    </div>
                </Modal>

            </nav>


            <Cart open={openCart} setOpen={setOpenCart} />


            {/* mobile navbar */}
            <nav className='w-20rem h-[4rem] lg:hidden flex ' >
                <div className='w-full px-[1rem] h-full flex items-center justify-between ' >

                    <div className='flex ' >
                        <IconButton className=' ' onClick={() => setOpenNavbar(true)} ><Dehaze /></IconButton>
                        <Modal open={openNavbar} onClose={() => setOpenSearchModal(openNavbar)} >
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: openNavbar ? '0%' : '-100%' }}
                                transition={{ duration: 0.4 }}
                                style={{ zIndex: 100000 }}
                                className=' flex justify-center w-[16rem] h-screen bg-lighter-brown '
                            >
                                <div className='flex flex-col justify-start items-start gap-[2rem] w-full h-full px-[1rem] py-[2rem] ' >
                                    <div className={`flex justify-between items-center w-full `} >
                                        <Link to={`/`} className='flex-[3] flex flex-col items-center ' >
                                            <span className='font-semibold text-[40px] leading-[26px] ' >DEZI</span>
                                            <span className='font-medium text-[20px] ' >SKIN</span>
                                        </Link>
                                        <IconButton className={``} onClick={() => setOpenNavbar(false)} ><Clear /></IconButton>
                                    </div>
                                    <ul className='flex flex-col gap-[1rem] ' >
                                        {
                                            navLinks.map((link, index) => (
                                                <Link key={index} to={link.link} className='w-max ' onClick={() => setOpenNavbar(false)} >
                                                    <li className={`uppercase text-[16px] hover:underline ${pathname == link.link && 'underline'} `} key={index} >{link.name}</li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </motion.div>
                        </Modal>
                    </div>


                    <div className='flex justify-end items-start gap-[1.2rem] ' >
                        <span className='capitalize text-[16px] font-medium ' >{loggedUser?.name}</span>
                        <Link to='/account/login' className='' ><PersonOutlined style={{ fontSize: '30px' }} /></Link>
                        <button onClick={() => setOpenSearchModal(pre => !pre)} className='' ><Search /></button>
                        <button onClick={() => setOpenCart(pre => !pre)} className='relative ' >
                            <ShoppingCartOutlined />
                            <span className='absolute bottom-[-6px] left-[-6px] w-[1rem] h-[1rem] bg-darker-brown text-white rounded-full text-[12px] flex items-center justify-center ' >{quantity}</span>
                        </button>
                    </div>



                </div>
            </nav>
        </>
    )
}

export default Navbar

const navLinks = [
    {
        name: 'shop all',
        link: '/collections/frontpage'
    },
    {
        name: 'travel kits',
        link: '/collections/travel-kits'
    },
    {
        name: 'best sellers',
        link: '/collections/best-sellers'
    },
    {
        name: 'accessories',
        link: '/collections/home-accessories'
    },
    {
        name: 'about us',
        link: '/pages/about-the-brand'
    },
]
