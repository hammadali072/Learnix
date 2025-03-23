import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import './partner-sec.scss';
import "swiper/swiper-bundle.css";

import partner1 from '../../assets/partner1.svg';
import partner2 from '../../assets/partner2.svg';
import partner3 from '../../assets/partner3.svg';
import partner4 from '../../assets/partner4.svg';
import partner5 from '../../assets/partner5.svg';

const PartnerSec = () => {
    return (
        <section className="partner pb-110">
            <div className="container">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={5}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 4,
                        },
                        1199: {
                            slidesPerView: 5,
                        }
                    }}
                    className='mySwiper'
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="icon_otr">
                            <img className="icon" src={partner1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="icon_otr">
                            <img className="icon" src={partner2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="icon_otr">
                            <img className="icon" src={partner3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="icon_otr">
                            <img className="icon" src={partner4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="icon_otr">
                            <img className="icon" src={partner5} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default PartnerSec