import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import './testimonial-next-sec.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import testimonialNextImg from '../../assets/testimonials-next.webp'

const TestimonialNextSec = () => {
    return (
        <section className="testimonials_next">
            <div className="container">
                <div className="testimonials_next_inr pt-136 pb-110">
                    <div className="wrapper">
                        <div className="section_title">
                            <p className="title heading-mb">Testimonials</p>
                            <h2 className="heading heading-h2">Take the Next Step: Start Your Digital Journey <span
                                className="heading_inr">Today
                                <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                            </span>
                            </h2>
                        </div>
                        <p className="desc heading-msb">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                        <div className="action_main">
                            <div className="action_otr">
                                <Link className="enroll_btn secondary_btn" to="#">
                                    <div className='icon_otr'>
                                        <ArrowRight className='icon' weight='bold' />
                                    </div>
                                    <p className="button_text">Enroll Now</p>
                                </Link>
                            </div>
                            <div className="action_otr">
                                <Link className="trial_btn primary_btn" to="#">
                                    <p className="button_text">Start Free Trial</p>
                                    <ArrowRight className='button_icon' weight='bold' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg_otr">
                        <img className="bg" src={testimonialNextImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialNextSec
