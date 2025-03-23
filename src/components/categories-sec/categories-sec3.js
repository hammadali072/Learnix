import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react';
import { CategoryData } from '../../Data';

import CategoryCard from './category-card';

import './categories-sec3.scss';

const CategoriesSec3 = () => {
    return (
        <section className="category">
            <div className="container">
                <div className="category_inr">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            575: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1199: {
                                slidesPerView: 4,
                            },

                        }}
                        className='swiper_3'
                    >
                        {
                            (CategoryData.filter(item => !(item.heading.length >= 20))).map((item, index) => (
                                <SwiperSlide className='swiper-slide' key={index}>
                                    <CategoryCard CategoryImg={item.image} CategoryName={item.heading} CourseQuantity={item.course} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="button_main">
                        <div className="swiper-button-next">
                            <ArrowRight className='icon' weight='bold' />
                        </div>
                        <div className="swiper-button-prev">
                            <ArrowLeft className='icon' weight='bold' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoriesSec3
