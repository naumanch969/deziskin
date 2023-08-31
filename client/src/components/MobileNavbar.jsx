import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';
import { Dehaze, Clear, PersonOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

const MobileNavbar = () => {
     const { pathname } = useLocation();

    const { loggedUser, cartProducts } = useSelector(state => state.user)
    const quantity = cartProducts?.length

    const [openModal, setOpenModal] = useState(false)
    const [openNavbar, setOpenNavbar] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [search, setSearch] = useState('')


    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' }
    ];

    return (
        <nav className='w-20rem h-[4rem] lg:hidden flex '>
            <div className='w-full px-[1rem] h-full flex items-center justify-between'>
                <div className='flex'>
                    <IconButton className='' onClick={() => setOpenNavbar(true)}>
                        <Dehaze />
                    </IconButton>
                    <motion.div
                        initial={{ x: '-106%' }}
                        animate={{ x: openNavbar ? '-6%' : '-106%' }}
                        transition={{ duration: 0.4 }}
                        style={{ zIndex: 100000 }}
                        className='z-[10000] absolute left-0 top-0 bottom-0 flex justify-center w-[16rem] h-screen bg-lighter-brown'
                    >
                        <div className='flex flex-col justify-start items-start gap-[2rem] w-full h-full px-[1rem] py-[2rem]'>
                            <div className='flex justify-between items-center w-full'>
                                <Link to='/' className='flex-[3] flex flex-col items-center'>
                                    <span className='font-semibold text-[40px] leading-[26px]'>DEZI</span>
                                    <span className='font-medium text-[20px]'>SKIN</span>
                                </Link>
                                <IconButton className='' onClick={() => setOpenNavbar(false)}>
                                    <Clear />
                                </IconButton>
                            </div>
                            <ul className='flex flex-col gap-[1rem]'>
                                {navLinks.map((link, index) => (
                                    <Link key={index} to={link.link} className='w-max' onClick={() => setOpenNavbar(false)}>
                                        <li className={`uppercase text-[16px] hover:underline ${pathname === link.link && 'underline'}`} key={index}>
                                            {link.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <div className='flex justify-end items-start gap-[1.2rem]'>
                    <span className='capitalize text-[16px] font-medium'>{loggedUser?.name}</span>
                    <Link to='/account/login' className=''>
                        <PersonOutlined style={{ fontSize: '30px' }} />
                    </Link>
                    <button onClick={() => setOpenModal(prev => !prev)} className=''>
                        <Search />
                    </button>
                    <button onClick={() => setOpenCart(prev => !prev)} className='relative'>
                        <ShoppingCartOutlined />
                        <span className='absolute bottom-[-6px] left-[-6px] w-[1rem] h-[1rem] bg-darker-brown text-white rounded-full text-[12px] flex items-center justify-center'>
                            {quantity}
                        </span>
                    </button>
                </div>
            </div>
            <></>
        </nav>
    );
};


export default MobileNavbar