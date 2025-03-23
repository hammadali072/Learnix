import React from 'react'
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from '@phosphor-icons/react';
import { userProfileData } from '../../Data';

import './hero-sec.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import heroImg from '../../assets/hero-img.webp';
import udemyLogo from '../../assets/udemy-logo.png';
import heroUserIcon from '../../assets/hero-user-icon.svg';
import chatIcon from '../../assets/chat-icon.svg';
import heroShape1 from '../../assets/hero-shape1.webp';
import heroShape4 from '../../assets/hero-shape4.webp';
import heroShape5 from '../../assets/hero-shape5.webp';
import heroShape6 from '../../assets/hero-shape6.webp';
import heroShape7 from '../../assets/hero-shape7.webp';
import heroShape8 from '../../assets/hero-shape8.webp';

const HeroSec = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col_content_otr">
                        <div className="col_content_inr">
                            <div className="section_title">
                                <p className="title heading-mb">Online Education Website</p>
                                <h1 className="heading heading-h1">
                                    Empower Your Future, Learn Digital
                                    <span className="heading_inr"> Skills
                                        <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                                    </span>
                                </h1>
                            </div>
                            <p className="desc heading-lm">Embark on Link Journey of Digital Discovery: Expert-Led Courses Designed to Equip</p>
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
                                    <Link to="#" className="play_btn">
                                        <Play className='icon' weight='fill' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col_img_otr">
                        <div className="col_img_inr">
                            <img className="img" src={heroImg} alt="Hero" />
                            <div className="udemy_box">
                                <ul className="udemy_ul">
                                    <li className="udemy_li">
                                        <img className="udemy_img" src={udemyLogo} alt="Udemy LOGO" />
                                    </li>
                                    <li className="udemy_li">
                                        <p className="text heading-mb">4.9</p>
                                        <i className="icon fa-solid fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="user_info_box">
                                <div className="user_info_box_inr">
                                    <div className="icon_otr">
                                        <img className="icon" src={heroUserIcon} alt="User Icon" />
                                    </div>
                                    <p className="text heading-lm">Students</p>
                                    <h4 className="heading heading-h4">10K+</h4>
                                    <ul className="user_ul">
                                        {
                                            userProfileData.map((item, index) => (
                                                <li className="user_li" key={index}>
                                                    <img className="user_img" src={item.img} alt={item.text} />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="mentor_box">
                                <div className="content">
                                    <p className="heading heading-lm">Chat with Link mentor</p>
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
            <div className="banner_shape1_otr">
                <img className="banner_shape1" src={heroShape1} alt="Banner Shape 1" />
            </div>
            <div className="banner_shape2_otr">
                <div className="banner_shape2" />
            </div>
            <div className="banner_shape3_otr">
                <div className="banner_shape3" />
            </div>
            <div className="banner_shape4_otr">
                <img className="banner_shape4" src={heroShape4} alt="Banner Shape 4" />
            </div>
            <div className="banner_shape5_otr">
                <img className="banner_shape5" src={heroShape5} alt="Banner Shape 5" />
            </div>
            <div className="banner_shape6_otr">
                <img className="banner_shape6" src={heroShape6} alt="Banner Shape 6" />
            </div>
            <div className="banner_shape7_otr">
                <img className="banner_shape7" src={heroShape7} alt="Banner Shape 7" />
            </div>
            <div className="banner_shape8_otr">
                <img className="banner_shape7" src={heroShape8} alt="Banner Shape 8" />
            </div>
        </div>
    )
}

export default HeroSec
