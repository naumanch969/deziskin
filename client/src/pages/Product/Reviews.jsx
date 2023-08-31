
import { about1, product2 } from '../../assets'
import { Avatar, Rating } from '@mui/material'
import { ThumbUp, ThumbDown, Tune, RateReviewOutlined } from '@mui/icons-material'

const Reviews = ({ reviews }) => {


    return (
        <div className='p-[3rem] ' >

            <div className='border-b-[1px] border-gray w-full flex gap-[2rem] ' >
                <button className='border-b-[2px] border-gray pb-[12px] ' >Reviews 12</button>
                <button className='border-b-[2px] border-gray pb-[12px] ' >Questions</button>
            </div>

            {/* <div className='flex justify-between w-full my-[2rem] ' >
                <button className='border-[1px] border-black py-[1rem] px-[1rem] flex items-center gap-[8px] ' ><Tune/><span className=''  >Filter</span></button>
                <button className='border-[1px] border-black py-[1rem] px-[1rem] flex items-center gap-[8px] ' ><RateReviewOutlined/><span className=''  >Write A Review</span></button>
            </div> */}

            {/* <div className='py-[1rem] flex justify-between pb-[12px] border-b-[1px] border-gray ' >
                <span className='' >12 Reviews</span>
                <div className='flex gap-[1.5rem] ' >
                    <span className='' >sort</span>
                    <span className='text-[18px] ' >Photos & Videos</span>
                </div>
            </div> */}

            <div className='flex flex-col ' >
                {
                    reviews?.map((comment, index) => (
                        <div key={index} className={`flex md:flex-row flex-col gap-[1.8rem] border-b-[1px] border-gray py-[1.5rem] min-h-[12rem] font-light `} >
                            {/* user */}
                            <div className={`md:flex-[3] border-[1px] border-gray p-[1rem] `} >
                                <div className={`flex flex-col gap-[1.2rem] `} >
                                    <div className='flex gap-[1rem] '>
                                        <Avatar src={comment.userImage} className='capitalize '>{comment.username.charAt(0)}</Avatar>
                                        <div className='flex flex-col  '>
                                            <span className='font-medium ' >{comment.username}</span>
                                            <span className='text-[12px] text-green-500  '>Verified User</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-[8px] '>
                                        <ThumbUp style={{ fontSize: '16px' }} />
                                        <span className='text-[14px] ' >I recommend this product</span>
                                    </div>
                                </div>
                            </div>
                            {/* title and comment */}
                            <div className={`md:flex-[6] flex flex-col gap-[8px] `} >
                                {/* rating */}
                                <div className='flex justify-between items-center ' >
                                    <Rating value={comment.rating} />
                                    {/* <span className='' >{comment.createdAt}</span> */}
                                </div>
                                {/* title */}
                                <h4 className='text-[28px] font-medium ' >{comment.reviewTitle}</h4>
                                {/* description */}
                                <p className=' ' >{comment.reviewDetail}</p>
                                {/* was this helpful */}
                                <div className='mt-[1rem] flex items-center gap-[8px] '  >
                                    <span className='text-[12px] ' >Was this helpful?</span>
                                    <div className='flex items-center gap-[12px] ' >
                                        <button className='flex items-center gap-[4px] ' ><ThumbUp style={{ fontSize: '16px' }} /><span className='text-[14px] ' >5</span></button>
                                        <button className='flex items-center gap-[4px] ' ><ThumbDown style={{ fontSize: '16px' }} /><span className='text-[14px] ' >2</span></button>
                                    </div>
                                </div>
                            </div>
                            {/* image or video */}
                            <div className={`md:flex-[2] md:w-auto md:h-full h-[12rem] w-[12rem] `} >
                                <img src={comment.image} alt='' className='h-full w-full ' />
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Reviews;

const eviews = [
    {
        userImage: about1,
        userName: 'Carl Edwin',
        stars: '5',
        title: 'Show me more reviews',
        description: 'The dew me over face mist, helps my makeup apply so much more smoother. My skin feels refreshed when I apply it. Definitely recommend, it also sets your makeup very well!',
        createdAt: '1 month ago',
        image: product2
    },
    {
        userImage: about1,
        userName: 'Carl Edwin',
        stars: '5',
        title: 'Show me more reviews',
        description: 'The dew me over face mist, helps my makeup apply so much more smoother. My skin feels refreshed when I apply it. Definitely recommend, it also sets your makeup very well!',
        createdAt: '1 month ago',
        image: product2
    },
    {
        userImage: about1,
        userName: 'Carl Edwin',
        stars: '5',
        title: 'Show me more reviews',
        description: 'The dew me over face mist, helps my makeup apply so much more smoother. My skin feels refreshed when I apply it. Definitely recommend, it also sets your makeup very well!',
        createdAt: '1 month ago',
        image: product2
    },
    {
        userImage: about1,
        userName: 'Carl Edwin',
        stars: '5',
        title: 'Show me more reviews',
        description: 'The dew me over face mist, helps my makeup apply so much more smoother. My skin feels refreshed when I apply it. Definitely recommend, it also sets your makeup very well!',
        createdAt: '1 month ago',
        image: product2
    },
]