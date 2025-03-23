import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, Play } from '@phosphor-icons/react';
import { userProfileData } from '../../Data';

import './hero-sec3.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import banner2 from '../../assets/banner2.webp';
import bannerWrapBg from '../../assets/banner-warp-bg-shape.webp';
import bannerWrapLineShape from '../../assets/banner-warp-line-shape.svg';
import bannerWrapLineRound from '../../assets/banner-warp-line-round.webp';

const HeroSec3 = () => {
    return (
        <section className="hero_section">
            <div className="hero_inr">
                <div className="container">
                    <div className="row">
                        <div className="col_content_otr">
                            <div className="col_content_inr">
                                <div className="section_title">
                                    <p className="title heading-mb">Online Education Website</p>
                                    <h1 className="heading heading-h1">Empower Your Future, Learn Digital
                                        <span className="heading_inr"> Skills
                                            <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                                        </span>
                                    </h1>
                                </div>
                                <p className="desc heading-lm">Embark on a Journey of Digital Discovery: Expert-Led Courses Designed to Equip</p>
                                <div className="action_main">
                                    <div className="action_otr">
                                        <Link className="enroll_btn secondary_btn2" to="#">
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
                                <div className="user_img">
                                    <img className="img" src={banner2} alt="" />
                                </div>
                                <div className="bg_shape">
                                    <img className="img" src={bannerWrapBg} alt="" />
                                </div>
                                <div className="line_shape">
                                    <img className="img" src={bannerWrapLineShape} alt="" />
                                </div>
                                <div className="round_shape">
                                    <img className="img" src={bannerWrapLineRound} alt="" />
                                </div>
                                <div className="user_info_otr">
                                    <div className="user_info_inr">
                                        <div className="user_otr">
                                            <ul className="user_ul">
                                                {
                                                    userProfileData.slice(0, 3).map((item, index) => (
                                                        <li className="user_li" key={index}>
                                                            <img className="user" src={item.img} alt={item.text} />
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <h4 className="heading heading-h4">5,000+</h4>
                                            <p className="text heading-sm">Happy Students</p>
                                        </div>
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

export default HeroSec3
