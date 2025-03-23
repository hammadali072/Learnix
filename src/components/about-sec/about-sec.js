import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import './about-sec.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import aboutImg1 from '../../assets/about-img1.png';
import aboutImg2 from '../../assets/about-img2.png';
import aboutImg3 from '../../assets/about-img3.png';
import profile6 from '../../assets/profile6.png';
import aboutShape1 from '../../assets/about-shape1.svg';
import aboutShape2 from '../../assets/about-shape2.svg';

const AboutSec = () => {
    return (
        <section className="about pt-136 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col_img_main">
                        <div className="img_row">
                            <div className="col_img_otr">
                                <div className="col_img_inr">
                                    <div className="img_1">
                                        <img className="img" src={aboutImg1} alt="" />
                                    </div>
                                    <div className="img_2">
                                        <img className="img" src={aboutImg2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col_img_otr">
                                <div className="col_img_inr">
                                    <div className="img_3">
                                        <img className="img" src={aboutImg3} alt="" />
                                    </div>
                                    <div className="experience_box">
                                        <div className="content">
                                            <h2 className="heading heading-h2">15</h2>
                                            <p className="text heading-mm">years experience</p>
                                        </div>
                                        <div className="icon_otr">
                                            <ArrowRight className='icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape_1_otr">
                            <img className="shape_1" src={aboutShape1} alt="About Shape" />
                        </div>
                        <div className="shape_2_otr">
                            <img className="shape_2" src={aboutShape2} alt="About Shape" />
                        </div>
                    </div>
                    <div className="col_content_otr">
                        <div className="col_content_inr">
                            <div className="section_title">
                                <p className="title heading-mb">About Edugen</p>
                                <h2 className="heading heading-h2">Discover Our Vision for Digital
                                    <span className="heading_inr"> Education
                                        <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                                    </span>
                                </h2>
                            </div>
                            <p className="desc heading-mm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                            </p>
                            <h4 className="sub_heading heading-h4">OUR MISSIONS & VISIONS</h4>
                            <p className="desc heading-mm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <p className="desc heading-mm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <div className="action_profile_main">
                                <div className="action_otr">
                                    <Link className="enroll_btn secondary_btn" to="/">
                                        <div className='icon_otr'>
                                            <ArrowRight className='icon' weight='bold' />
                                        </div>
                                        <p className="button_text">Enroll Now</p>
                                    </Link>
                                </div>
                                <div className="profile_main">
                                    <Link to="/" className="profile_otr">
                                        <img className="profile" src={profile6} alt="Profile" />
                                    </Link>
                                    <div className="content">
                                        <p className="heading heading-lm">Jason S. Ellis</p>
                                        <p className="text heading-sm">CEO & Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec
