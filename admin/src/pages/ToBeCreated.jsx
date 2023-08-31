import { useLocation } from "react-router-dom";


const ToBeCreated = () => {

    const location = useLocation()
    const route = location.pathname.split('/')[1]

    return (
        <div className='flex-[4] md:flex-[3] sm:flex-1 flex-1 ' >

            <div className="w-full h-full flex flex-col gap-[1rem] justify-center items-center px-[2rem] pt-[12px] pb-[2rem] " >
                <h3 className="font-bold text-[32px] capitalize" >{route} Page</h3>
                <p className="text-gray text-[20px] " >This page is not available right now.</p>
            </div>

        </div>
    )
}

export default ToBeCreated;