import React from 'react';

import { awardData } from '../../Data';

import './about-sec3.scss'

import underlineSvg from '../../assets/heading-underline.svg';
import aboutImg4 from '../../assets/about-img4.png';
import aboutImg5 from '../../assets/about-img5.png';
import awardLogo from '../../assets/awards-logo.svg';
import videoPlaySvg from '../../assets/video-play.svg';

const AboutSec3 = () => {
    return (
        <section className="about_us pt-136 pb-110">
            <div className="container">
                <div className="row row_custom">
                    <div className="col_img_otr">
                        <div className="col_img_inr">
                            <div className="image_one">
                                <img className="img" src={aboutImg4} alt="" />
                            </div>
                            <div className="image_two">
                                <img className="img" src={aboutImg5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col_content_otr">
                        <div className="col_content_inr">
                            <div className="section_title">
                                <p className="title heading-mb">About Edugen</p>
                                <h2 className="heading heading-h2">Discover Our Vision for Digital
                                    <span className="heading_inr"> Educations
                                        <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                                    </span>
                                </h2>
                            </div>
                            <div className="award_row">
                                <div className="col-lg-7 col-sm-7 col_award_list_otr">
                                    <div className="col_award_list_inr">
                                        <ul className="award_ul">
                                            {
                                                awardData.map((item, index) => (
                                                    <li className="award_li" key={index}>
                                                        <img className="icon" src={item.icon} alt="" />
                                                        <h6 className="heading heading-msb">{item.text}</h6>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-sm-5 col_award_card_otr">
                                    <div className="col_award_card_inr">
                                        <div className="icon_otr">
                                            <img className="icon" src={awardLogo} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="heading heading-h4">25+</h4>
                                            <p className="text heading-sm">Winning Awards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video_info_otr">
                                <div className="video_info_inr">
                                    <div className="icon_otr">
                                        <img className="icon" src={videoPlaySvg} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="heading heading-msb">All Classes Video Provided</h6>
                                        <p className="desc heading-mm">There are many variations of passages of but the majority have suffered.</p>
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

export default AboutSec3
