import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, Check } from '@phosphor-icons/react';

import './about-sec2.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import aboutImg3 from '../../assets/landingpage-3-about-img.png';
import learnIcon from '../../assets/easy-learning-icon.svg';

const AboutSec2 = () => {
    return (
        <section className="about-sec pt-136 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col_img_otr">
                        <div className="col_img_inr">
                            <img className="img" src={aboutImg3} alt="" />
                        </div>
                    </div>
                    <div className="col_content_otr">
                        <div className="col_content_inr">
                            <div className="section_title">
                                <p className="title heading-mb">About Edugen</p>
                                <h2 className="heading heading-h2">Discover Our Vision for Digital <span
                                    className="heading_inr">Education
                                    <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                                </span>
                                </h2>
                            </div>
                            <p className="desc heading-mm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make</p>
                            <div className="easy_learning_otr">
                                <div className="easy_learning_inr">
                                    <div className="icon_otr">
                                        <img className="icon" src={learnIcon} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="heading heading-h4">Easy Learning</h4>
                                        <p className="text heading-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                                    </div>
                                </div>
                            </div>
                            <div className="learning_list_ul">
                                <div className="learning_list_li">
                                    <div className="icon_otr">
                                        <Check className='icon' weight='bold' />
                                    </div>
                                    <p className="heading heading-mb">Empowering Education</p>
                                </div>
                                <div className="learning_list_li">
                                    <div className="icon_otr">
                                        <Check className='icon' weight='bold' />
                                    </div>
                                    <p className="heading heading-mb">Empowering Education</p>
                                </div>
                                <div className="learning_list_li">
                                    <div className="icon_otr">
                                        <Check className='icon' weight='bold' />
                                    </div>
                                    <p className="heading heading-mb">Empowering Education</p>
                                </div>
                                <div className="learning_list_li">
                                    <div className="icon_otr">
                                        <Check className='icon' weight='bold' />
                                    </div>
                                    <p className="heading heading-mb">Empowering Education</p>
                                </div>
                            </div>
                            <div className="action_otr">
                                <Link className="trial_btn primary_btn2" to="#">
                                    <p className="button_text">Learn More</p>
                                    <ArrowRight className='button_icon' weight='bold' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSec2
