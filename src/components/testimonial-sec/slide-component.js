import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';
import { testimonialData } from '../../Data';

import "swiper/swiper-bundle.css";

import StudentSlide from './student-slide';

const SliderComponenet = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            className='mySwiper'
        >
            {
                testimonialData.map((item, index) => (
                    <SwiperSlide className='swiper_slide' key={index}>
                        <StudentSlide stdReview={item.stdReview} stdImg={item.stdImg} stdName={item.stdName} status={item.status} />
                    </SwiperSlide>
                ))
            }

            <div className="swiper_button_main">
                <div className="swiper-button-next">
                    <ArrowRight className='icon' weight='bold' />
                </div>
                <div className="swiper-button-prev">
                    <ArrowLeft className='icon' weight='bold' />
                </div>
            </div>
        </Swiper>
    )
}

export default SliderComponenet
