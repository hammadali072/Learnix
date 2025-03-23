import React from 'react';

import { Link } from 'react-router-dom';
import { EnvelopeSimple } from '@phosphor-icons/react';

import './newsletter-sec3.scss';

import newsltter1Img from '../../assets/newsletter1.webp';
import newsletter2Img from '../../assets/newsletter2.webp';
import newsltterShape from '../../assets/newsletter-shape.svg';
import udemyLogo from '../../assets/udemy-logo.png';
import shape15 from '../../assets/shape15.svg';


const NewsletterSec3 = () => {
    return (
        <section class="newsletter_sec pt-136">
            <div class="container">
                <div class="row">
                    <div class="col_img_otr">
                        <div class="col_img_inr">
                            <div class="image_one">
                                <img class="img" src={newsltter1Img} alt="" />
                                <div class="udemy_box">
                                    <ul class="udemy_ul">
                                        <li class="udemy_li">
                                            <img class="udemy_img" src={udemyLogo} alt="Udemy LOGO" />
                                        </li>
                                        <li class="udemy_li">
                                            <p class="text heading-mb">4.9</p>
                                            <i class="icon fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="image_two">
                                <img class="img" src={newsletter2Img} alt="" />
                                <div class="award_item_otr">
                                    <div class="award_item_inr">
                                        <h6 class="heading heading-mb">18+</h6>
                                        <p class="text heading-mb">Winning Award</p>
                                    </div>
                                </div>
                                <div class="award_item_two_otr">
                                    <div class="award_item_two_inr">
                                        <h6 class="heading heading-mb">100+</h6>
                                        <p class="text heading-mb">Mentors & Teachers</p>
                                    </div>
                                </div>
                            </div>
                            <div class="newsletter_shape">
                                <img class="img" src={newsltterShape} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col_content_otr">
                        <div class="col_content_inr">
                            <h2 class="heading heading-h2">Join Our Newsletter To Stay Up To Date!</h2>
                            <p class="desc heading-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                            <div class="input_main">
                                <div class="input_otr">
                                    <input class="mail_input input" type="email" name="email" id="email" placeholder="Write your email" required />
                                </div>
                                <div class="action_otr">
                                    <Link class="subscribe_btn primary_btn" to="#">
                                        <p class="button_text">Subscribe</p>
                                        <EnvelopeSimple className='button_icon' weight='fill' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shapes">
                <div class="shapes1_otr">
                    <img class="shapes1" src={shape15} alt="" />
                </div>
                <div class="shapes2_otr">
                    <div class="shapes2" />
                </div>
                <div class="shapes3_otr">
                    <div class="shapes3" />
                </div>
                <div class="shapes4_otr">
                    <div class="shapes4" />
                </div>
                <div class="shapes5_otr">
                    <div class="shapes5" />
                </div>
            </div>
        </section>
    )
}

export default NewsletterSec3
