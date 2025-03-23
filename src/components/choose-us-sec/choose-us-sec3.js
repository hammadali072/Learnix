import React from 'react';

import { Link } from 'react-router-dom';
import { Play } from '@phosphor-icons/react';
import { industryData } from '../../Data';

import IndustryListItem from './industry-list-item';

import './choose-us-sec3.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import chooseUsImg2 from '../../assets/choose-us-img2.png'
import playShape from '../../assets/play-shape.svg';
import shape18 from '../../assets/shape18.svg';

const ChooseUsSec3 = () => {
    return (
        <section className="choose_us_section pt-136 pb-110">
            <div className="container">
                <div className="row">
                    <div className="col_content_otr">
                        <div className="col_content_inr">
                            <div className="section_title">
                                <p className="title heading-mb">Why Choose Us</p>
                                <h2 className="heading heading-h2">Your Gateway to Digital
                                    <span className="heading_inr"> Success
                                        <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                                    </span>
                                </h2>
                            </div>
                            <p className="desc heading-mb">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                            <div className='industry_otr'>
                                <ul className='industry_ul'>
                                    {
                                        industryData.map((item, index) => (
                                            <li className='industry_li' key={index}>
                                                <IndustryListItem heading={item.heading} description={item.desc} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col_img_otr">
                        <div className="col_img_inr">
                            <img className="img" src={chooseUsImg2} alt="" />
                            <div className="play_btn_otr">
                                <Link to="#" className="play_btn_inr">
                                    <Play className='icon' weight='fill' />
                                </Link>
                            </div>
                            <div className="shapes">
                                <div className="shape1_otr">
                                    <img className="shape1" src={playShape} alt="" />
                                </div>
                                <div className="shape2_otr">
                                    <img className="shape2" src={shape18} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSec3
