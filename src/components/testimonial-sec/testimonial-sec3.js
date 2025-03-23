import React from 'react';

import TestimonialCards from './testimonial-cards';

import './testimonial-sec3.scss';

import underlineSvg from '../../assets/heading-underline.svg';

const TestimonialSec3 = () => {
    return (
        <section className="testimonials_section pt-136 pb-110">
            <div className="container">
                <div className="wrapper">
                    <div className="section_title">
                        <p className="title heading-mb">Testimonials</p>
                        <h2 className="heading heading-h2">Hear What Our Learners Have
                            <span className="heading_inr"> To Say
                                <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                            </span>
                        </h2>
                    </div>
                </div>
                <TestimonialCards />
            </div>
        </section>
    )
}

export default TestimonialSec3
