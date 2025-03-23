import React from 'react';

import testimonialImg from '../../assets/testimonials-img.png';
import underlineSvg from '../../assets/heading-underline.svg';
import './testimonial-sec.scss';

import SliderComponenet from './slide-component';

const TestimonialSec = () => {
    return (
        <section className="testimonials pt-136 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col_img_otr">
                        <div className="col_img_inr">
                            <img className="img" src={testimonialImg} alt="" />
                        </div>
                    </div>
                    <div className="col_content_otr">
                        <div className="col_content_inr">
                            <div className="section_title">
                                <p className="title heading-mb">Testimonials</p>
                                <h2 className="heading heading-h2">Voices of Success: Hear from Our <span
                                    className="heading_inr"> Students <img className="heading_inr_img"
                                        src={underlineSvg} alt="Lines" /></span></h2>
                            </div>
                            <SliderComponenet />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSec
