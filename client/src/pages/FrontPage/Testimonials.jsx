import { Rating, Avatar, IconButton } from '@mui/material'
import { ThumbUpOutlined, ThumbDownOutlined, ArrowLeft, ArrowRight } from '@mui/icons-material'
import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const TestimonialsSlider = () => {


    const testimonials = [
        {
            stars: '5',
            createdAt: '5 days ago',
            title: "Dezi Skin Moisturizer is the Best",
            description: "I've tried countless moisturizers before, but Dezi Skin Moisturizer is hands down the best! It leaves my skin feeling soft and supple all day long. I highly recommend it.",
            name: 'kathy alon',
        },
        {
            stars: '5',
            createdAt: '5 days ago',
            title: "Bye Bye Dry Skin",
            description: "I've struggled with dry skin for years, but since I started using Dezi Skin Moisturizer, I've noticed a huge improvement. My skin feels hydrated and healthy, and I've even gotten compliments on my complexion!",
            name: 'kathy alon',
        },
        {
            stars: '5',
            createdAt: '5 days ago',
            title: "Refreshing and Effective",
            description: "Dezi Skin Moisturizer is the perfect addition to my skincare routine. It's lightweight and absorbs quickly, so my skin doesn't feel greasy or weighed down. Plus, it has a subtle, refreshing scent that I love!",
            name: 'kathy alon',
        },
        {
            stars: '5',
            createdAt: '5 days ago',
            title: "Gentle and Non-Irritating",
            description: "I have sensitive skin, and many moisturizers cause me to break out or experience irritation. But Dezi Skin Moisturizer is gentle and non-irritating, so I can use it every day without any issues. My skin has never looked or felt better!",
            name: 'kathy alon',
        },
        {
            stars: '5',
            createdAt: '5 days ago',
            title: "Simple Skincare at its Best: A Busy Mom's Review of Dezi Skin Moisturizer",
            description: "I'm a busy mom, and I don't have time for a complicated skincare routine. Dezi Skin Moisturizer is simple, effective, and gets the job done. It's a must-have for anyone who wants healthy, glowing skin without a lot of fuss.",
            name: 'kathy alon',
        },
    ]


    return (
        <div className='h-fit bg-white py-[2rem] '>
            <div className='wrapper w-full flex justify-center items-center gap-[1rem] p-[2rem] py-[4rem] '>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false, }}
                    pagination={{ clickable: true, }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 }
                    }
                    }
                >
                    {testimonials?.map((testimonial, index) => (
                        <SwiperSlide key={index} className='bg-white p-[1rem] rounded-[4px] w-full h-full flex justify-between flex-col gap-[2rem] '>
                            <div className='w-full flex flex-col gap-[1rem]'>
                                <div className='w-full flex justify-between items-center'>
                                    <Rating value={testimonial.stars} />
                                    <span className=''>{testimonial.createdAt}</span>
                                </div>
                                <h4 className='w-full text-[20px]'>{testimonial.title}</h4>
                                <p className='font-light text-justify '>{testimonial.description}</p>
                            </div>
                            <div className='flex flex-col gap-[1rem]'>
                                <div className='flex items-center gap-[1rem]'>
                                    <Avatar className='uppercase'>{testimonial.name.split(' ').map((word) => word.charAt(0)).join('')}</Avatar>
                                    <div className='flex flex-col items-start justify-center'>
                                        <p className=''>{testimonial.name}</p>
                                        <span className='text-green-500'>verified user</span>
                                    </div>
                                </div>
                                {/* <div className='flex gap-[1rem]'>
                                    <span className=''>Was this helpful?</span>
                                    <button className=''><ThumbUpOutlined /></button>
                                    <button className=''><ThumbDownOutlined /></button>
                                </div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default TestimonialsSlider;
