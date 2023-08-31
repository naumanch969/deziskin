import { about, about1, about2, about_banner_1, about_banner_2, about_mission } from '../../assets'
import { Products, Footer, MainImage } from '../../components'


const About = () => {

    return (
        <div className=''  >

            <MainImage title='' img={about} height='60vh' />

            <div className='py-[2rem] lg:px-[6rem] md:px-[4rem] sm:px-[2rem] px-[1rem] flex flex-col gap-[4rem] ' >

                <div className='flex justify-between md:flex-row flex-col-reverse gap-[3rem] py-[2rem] pb-[4rem] ' >
                    <div className='flex-1 flex flex-col gap-[2rem] ' >
                        <h5 className='uppercase text-[20px] font-semibold ' >about dezi</h5>
                        <p className='font-light ' >
                            Even though I entered into the beauty world with makeup, I have always understood the importance of skincare. As my career started to grow, it became increasingly important to be transparent and show you more of my authentic self. This meant showing you my face without makeup and also exposing you to my everyday life (not just the glamourous parts). The more I started to show my authentic self, the more I realized we all crave something more real. While I do love makeup, there is a strength in loving myself without it and I want you to experience the same love for your skin.
                        </p>
                    </div>
                    <div className='flex-1 h-[36rem] ' >
                        <img src={about1} alt='' className='w-full h-full object-cover ' />
                    </div>
                </div>


                <div className='h-[32rem] w-full md:flex hidden ' >
                    <img src={about_banner_1} alt='' className='w-full h-full ' />
                </div>


                <div className='flex flex-col w-full ' >
                    <div className='h-[16rem] w-full md:flex hidden ' >
                        <img src={about_mission} alt='' className='w-full h-full ' />
                    </div>

                    <div className='flex justify-between md:flex-row flex-col gap-[3rem] py-[2rem] pb-[4rem] ' >
                        <div className='flex-1 h-[36rem] ' >
                            <img src={about2} alt='' className='w-full h-full object-cover ' />
                        </div>
                        <div className='flex-1 flex flex-col gap-[2rem] ' >
                            <h5 className='uppercase text-[20px] font-semibold ' >FORM & FUNCTION</h5>
                            <p className='font-light ' >
                                We want you to feel confident in your own skin. We also believe you deserve powerful formulas with beautiful packaging. During the formulation process, we work closely with chemists domestically and internationally to ensure our formulas are optimized for maximum efficacy.

                                We embrace all skin types and specifically want to lift up people of color and female founders.

                                We also believe in beautifully designed packaging. We spend months crafting vessels that you will be proud to put on display. Luxury aesthetic is a priority for DEZI SKIN because we all know that it's about inner AND outer beauty.
                            </p>
                        </div>
                    </div>


                    <div className='h-[26rem] w-full ' >
                        <img src={about_banner_2} alt='' className='w-full h-full ' />
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
export default About;