import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { footer_bg, footer_image } from '../assets'

const Footer = () => {


    return (
        <div style={{ background: `url(${footer_bg})` }} className='bg-brown text-white bg-no-repeat bg-cover ' >

            <div className='wrapper md:px-[4rem] sm:px-[2rem] px-[1rem] pt-[4rem] pb-[2rem] flex flex-col ' >



                <div className='w-full flex lg:flex-row flex-col-reverse justify-between ' >
                    {/* image and links */}
                    <div className='lg:flex-[9] w-full flex flex-wrap gap-[1rem] ' >
                        {/* image and icons*/}
                        <div className='lg:flex-[3] md:flex-[4] sm:flex-[0.7] flex-1 flex flex-col gap-[2rem] md:mt-0 mt-[1rem] ' >
                            {/* icons */}
                            <div className='flex justify-center gap-[3rem] ' >
                                <h5 className='text-[24px] ' >CONNECT</h5>
                                <div className='flex items-center gap-[1rem] ' >
                                    <Twitter />
                                    <Instagram />
                                    <Facebook />
                                </div>
                            </div>
                            {/* image */}
                            <div className='w-full h-[28rem] ' >
                                <img src={footer_image} alt='' className='w-full h-full ' />
                                {/* <div className='w-full h-full bg-light-brown ' /> */}
                            </div>

                        </div>

                        {/* links */}
                        <div className='lg:flex-[4] md:flex-[5] flex-1 flex md:p-[3rem] lg:p-0 ' >
                            {
                                footerLinks.map((footerLink, index) => (
                                    <div key={index} className='lg:pl-[3rem] flex-1 flex flex-col gap-[2rem] ' >
                                        <h5 className='text-[26px] font-semibold capitalize ' >{footerLink.title}</h5>
                                        <ul className='flex flex-col gap-[12px] ' >
                                            {
                                                footerLink.links.map((link, index) => (
                                                    <Link to={link.link} key={index} >
                                                        <li className='text-[1rem] hover:underline font-light uppercase w-fit ' >{link.name}</li>
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* email */}
                    <div className='lg:flex-[2] w-full py-[2rem] flex justify-center items-start gap-[8px]' >
                        <input type='text' placeholder='Your Email' className='px-[8px] py-[6px] rounded-[2px]  ' onChange={() => { }} />
                        <button className='bg-light-brown px-[8px] py-[6px] rounded-[2px] text-black ' >Submit</button>
                    </div>
                </div>


                <div className='flex flex-col lg:items-start items-center sm:gap-[8px] gap-[1rem]  sm: mt-[3rem] ' >
                    <p className='flex sm:flex-row flex-col justify-center items-center sm:gap-[12px] md:text-[18px] text-[14px] ' >
                        <Link to='/policies/privacy-policy' className='hover:underline ' >Privacy Policy</Link>
                        <span className='' >&</span>
                        <Link to='/policies/terms-of-service' className='hover:underline ' >Terms & Conditions</Link>
                    </p>
                    <p className='flex gap-[12px] md:text-[18px] text-[14px] ' ><span className='' >@ 2023,</span><Link to='/' className='text-white hover:text-black ' >Dezi Skin</Link></p>
                </div>

            </div>

        </div>
    )
}

export default Footer

const footerLinks = [
    {
        title: 'Help',
        links: [
            {
                name: 'contact us',
                link: '/pages/contact-us'
            },
            {
                name: 'shipping',
                link: '/policies/shipping-policy'
            },
            {
                name: 'returns',
                link: '/pages/return-policy'
            },
            {
                name: 'faq',
                link: '/pages/help-faq'
            },
            {
                name: 'join us',
                link: '/pages/job-openings'
            },
            {
                name: 'auto-replenishment-faq',
                link: '/pages/auto-replenish-faq'
            },
        ]
    },
    {
        title: 'about',
        links: [
            {
                name: 'our story',
                link: '/pages/about-the-brand'
            },
            {
                name: 'accessibility',
                link: '/pages/accessibility'
            },
            {
                name: 'e-gift cards',
                link: '/products/gift-card'
            },
        ]
    }
]