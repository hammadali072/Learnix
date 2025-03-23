import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, Star } from '@phosphor-icons/react';
import { chooseUsCardData } from '../../Data';

import './choose-us-sec2.scss';

import ChooseUsCard from './choose-us-card';

import underlineSvg from '../../assets/heading-underline.svg';
import chooseUse3Img from '../../assets/choose3.webp';
import udemyLogo from '../../assets/udemy-logo.png';

const ChooseUsSec2 = () => {
    return (
        <section className="choose_us_sec pt-136 pb-110">
            <div className="container">
                <div className="choose_us_inr">
                    <div className="row">
                        <div className="col_content_otr">
                            <div className="col_content_inr">
                                <div className="section_title">
                                    <p className="title heading-mb">Why Choose Us</p>
                                    <h2 className="heading heading-h2">One Platform & Many
                                        <span className="heading_inr"> Courses
                                            <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                                        </span>
                                        For You
                                    </h2>
                                </div>
                                <p className="desc heading-mm"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when</p>
                                <div className="action_otr">
                                    <Link className="enroll_btn secondary_btn2" to="#">
                                        <div className='icon_otr'>
                                            <ArrowRight className='icon' weight='bold' />
                                        </div>
                                        <p className="button_text">Enroll Now</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col_img_otr">
                            <div className="col_img_inr">
                                <img className="img" src={chooseUse3Img} alt="" />
                                <div className="udemy_box">
                                    <ul className="udemy_ul">
                                        <li className="udemy_li">
                                            <img className="udemy_img" src={udemyLogo} alt="Udemy LOGO" />
                                        </li>
                                        <li className="udemy_li">
                                            <p className="text heading-mb">4.9</p>
                                            <Star className='icon' weight='fill' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col_box_otr'>
                            <div className='col_box_inr'>
                                {
                                    chooseUsCardData.map((item, index) => (
                                        <ChooseUsCard key={index} user={item.icon} cardHeading={item.heading} cardDesc={item.desc} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSec2
