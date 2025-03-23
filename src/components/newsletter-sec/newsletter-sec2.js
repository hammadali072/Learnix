import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import './newsletter-sec2.scss';

import newsletterImg1 from '../../assets/newsletter-img1.webp';
import newsletterImg2 from '../../assets/newsletter-img2.webp';
import newsletterImg3 from '../../assets/newsletter-img3.webp';
import newsletterImg4 from '../../assets/newsletter-img4.webp';

const NewlstterSec2 = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter_inr">
                    <div className="wrapper pt-136 pb-110">
                        <h2 className="heading heading-h2">Ready to Elevate Your Skills? Join Our Courses Today</h2>
                        <p className="desc heading-lm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                        <div className="action_otr">
                            <Link className="enroll_btn secondary_btn2" to="#">
                                <div className='icon_otr'>
                                    <ArrowRight className='icon' weight='bold' />
                                </div>
                                <p className="button_text">Enroll Now</p>
                            </Link>
                        </div>
                    </div>
                    <div className="img_one">
                        <img src={newsletterImg1} alt="" />
                    </div>
                    <div className="img_two">
                        <img src={newsletterImg2} alt="" />
                    </div>
                    <div className="img_three">
                        <img src={newsletterImg3} alt="" />
                    </div>
                    <div className="img_four">
                        <img src={newsletterImg4} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewlstterSec2
