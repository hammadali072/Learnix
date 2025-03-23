import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from '@phosphor-icons/react';

import './hero-sec2.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import bgImg3 from '../../assets/landingpage-3-hero-img.webp';
import chatIcon from '../../assets/chat-icon.svg';
import shape1 from '../../assets/banner-widget-shape1.webp';
import shape2 from '../../assets/banner-widget-shape2.webp';
import shape15 from '../../assets/shape15.svg';
import shap24 from '../../assets/shape24.webp';


const HeroSec2 = () => {
    return (
        <section className="hero-sec">
            <div className="container">
                <div className="row">
                    <div className="col_content_otr">
                        <div className="col_content_inr">
                            <div className="section_title">
                                <p className="title heading-mb">Online Education Website</p>
                                <h1 className="heading heading-h1">Innovate With Digital
                                    <span className="heading_inr">Expertise
                                        <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                                    </span>
                                </h1>
                            </div>
                            <p className="desc heading-lm">Embark on a Journey of Digital Discovery: Expert-Led Courses Designed to Equip</p>
                            <div className="action_main">
                                <div className="action_otr">
                                    <Link className="enroll_btn secondary_btn2" to="/">
                                        <div className='icon_otr'>
                                            <ArrowRight className='icon' weight='bold' />
                                        </div>
                                        <p className="button_text">Enroll Now</p>
                                    </Link>
                                </div>
                                <div className="action_otr">
                                    <Link to="#" className="play_btn">
                                        <Play className='icon' weight='fill' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col_img_otr">
                        <div className="col_img_inr">
                            <img className="img" src={bgImg3} alt="" />
                            <div className="mentor_box">
                                <div className="content">
                                    <p className="heading heading-lm">Chat with a mentor</p>
                                    <p className="text heading-sm">Find your mentor here</p>
                                </div>
                                <div className="icon_otr">
                                    <img className="icon" src={chatIcon} alt="Chat Icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner_widget_shape1">
                <img src={shape1} alt="" />
            </div>
            <div className="banner_widget_shape2">
                <img src={shape2} alt="" />
            </div>
            <div className="shapes">
                <div className="shapes1_otr">
                    <img className="shapes1" src={shape15} alt="" />
                </div>
                <div className="shapes2_otr">
                    <div className="shapes2" />
                </div>
                <div className="shapes3_otr">
                    <div className="shapes3" />
                </div>
                <div className="shapes4_otr">
                    <div className="shapes4" />
                </div>
                <div className="shapes5_otr">
                    <div className="shapes5" />
                </div>
                <div className="shapes6_otr">
                    <img className="shapes6" src={shap24} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HeroSec2
