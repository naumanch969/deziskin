import { AttachMoney, BarChart, ChatBubbleOutline, Close, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

const Sidebar = ({ showSidebar, setShowSidebar }) => {

    //////////////////////////////////////// Variables ////////////////////////////////////////
    const sidebarMenuList = [
        {
            title: 'Dashboard',
            menuList: [
                { title: 'Home', icon: LineStyle },
                { title: 'Analytics', icon: Timeline },
                { title: 'Sales', icon: TrendingUp },
            ]
        },
        {
            title: 'Quick Menu',
            menuList: [
                { title: 'Users', icon: PermIdentity },
                { title: 'Products', icon: Storefront },
                { title: 'Transactions', icon: AttachMoney },
                { title: 'Reports', icon: BarChart },
            ]
        },
        {
            title: 'Notifications',
            menuList: [
                { title: 'Mail', icon: MailOutline },
                { title: 'Feedback', icon: DynamicFeed },
                { title: 'Messages', icon: ChatBubbleOutline },
            ]
        },
        {
            title: 'Staff',
            menuList: [
                { title: 'Manage', icon: WorkOutline },
                { title: 'Analytics', icon: Timeline },
                { title: 'Reports', icon: Report },
            ]
        },
    ]

    //////////////////////////////////////// States ////////////////////////////////////////

    //////////////////////////////////////// UseEffects ////////////////////////////////////////

    //////////////////////////////////////// Functions ////////////////////////////////////////

    //////////////////////////////////////// Components ////////////////////////////////////////
    const SidebarMenu = ({ menu }) => (
        <div className="sidebarMenu mb-[12px] ">
            <h3 className="sidebarTitle md:text-lightGray text-gray text-[18px] font-bold  ">{menu.title}</h3>
            <ul className="sidebarList list-none p-[4px] flex flex-col gap-[8px] ">
                {
                    menu.menuList.map((menu, index) => (
                        <Link key={index} to={`/${menu.title.toLowerCase()}`} onClick={() => setShowSidebar(false)} >
                            <li className='sidebarListItem p-[4px] cursor-pointer flex items-center gap-[8px] rounded-[8px] hover:bg-lightBlue active:bg-lightBlue ' > <menu.icon style={{ fontSize: '20px' }} /> {menu.title}</li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )


    return (
        <>

            {/* desktop sidebar */}
            <div style={{ height: 'calc(100vh - 4rem)' }} className={`${showSidebar ? 'md:flex hidden' : 'hidden'}  md:flex-1 bg-white sticky top-[4rem]`} >
                <div className='w-full p-[20px] text-gray h-full overflow-y-scroll ' >
                    {
                        sidebarMenuList.map((sidebarMenuBlock, index) => (
                            <SidebarMenu menu={sidebarMenuBlock} key={index} />
                        ))
                    }
                </div>
            </div>

            {/* mobile sidebar */}
            {
                showSidebar &&
                <div className='absolute top-0 left-0 w-[14rem] bg-lighterBlue h-screen md:hidden flex z-[1100] ' >
                    <div className='wrapper flex flex-col w-full h-full overflow-y-scroll p-[1rem] ' >

                        <div className='w-full flex justify-between items-center mb-[1rem] ' >
                            <h3 className='md:text-[32px] sm:text-[28px] text-[24px] text-darkBlue font-bold ' >nanoadmin</h3>
                            <IconButton className='' onClick={() => setShowSidebar(false)} ><Close /></IconButton>
                        </div>

                        {
                            sidebarMenuList.map((sidebarMenuBlock, index) => (
                                <SidebarMenu menu={sidebarMenuBlock} key={index} />
                            ))
                        }
                    </div>
                </div>
            }

        </>
    )
}

export default Sidebar;