
const MainImage = ({ title, height,subTitle, img }) => {

    return (
        <div style={{ height }} className={`relative w-full bg-cover bg-no-repeat bg-light-gray flex flex-col justify-center items-center `} >
            <img src={img} alt='' className='absolute top-0 right-0 w-full h-full object-cover  ' />
            <h4 className='capitalize text-center z-[500] font-light text-[1rem] text-white ' >{subTitle}</h4>
            <h2 className='capitalize text-center z-[500] font-semibold md:text-[5rem] text-[4rem] text-white ' >{title}</h2>
        </div>
    )
}
export default MainImage;