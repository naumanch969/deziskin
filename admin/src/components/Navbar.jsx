import { NotificationsOutlined, Language, Settings, Menu } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'

const Navbar = ({ setShowSidebar }) => {


    return (
        <div className='w-full h-[4rem] bg-white sticky top-0 z-[1000] ' >

            <div className='wrapper h-full md:px-[24px] px-[1rem] flex items-center justify-between ' >

                {/* left section */}
                <div className='left flex justify-start gap-[4px] ' >
                    <IconButton onClick={() => setShowSidebar(pre => !pre)} className='md:hidden flex cursor-pointer ' ><Menu /></IconButton>
                    <h3 className='md:text-[32px] sm:text-[28px] text-[24px] text-darkBlue font-bold ' >nanoadmin</h3>
                </div>

                {/* right section */}
                <div className='right ' >
                    <div className='iconsContainer flex items-center md:gap-[1rem] gap-[8px]  ' >
                        {/* notifications */}
                        <div className='relative' >
                            <button className='' ><NotificationsOutlined /></button>
                            <span className='w-[1rem] h-[1rem] bg-red-500 text-white text-[12px] rounded-full absolute top-[-5px] right-0 flex justify-center items-center  ' >2</span>
                        </div>
                        {/* Language */}
                        <div className='relative' >
                            <button className='' ><Language /></button>
                            <span className='w-[1rem] h-[1rem] bg-red-500 text-white text-[12px] rounded-full absolute top-[-5px] right-0 flex justify-center items-center  ' >2</span>
                        </div>
                        {/* Settings */}
                        <div className='relative' >
                            <button className='' ><Settings /></button>
                        </div>
                        <Avatar src='' className='md:w-[40px] md:h-[40px] w-[2rem] h-[2rem] rounded-full cursor-pointer ' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar;