import React from 'react';

import './choose-us-sec.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import chooseUsImg from '../../assets/choose-us-img.png';
import chooseUsBgCircle from '../../assets/choose-us-bg-circle.svg';
import chooseUsShape1 from '../../assets/choose-us-shape.svg';
import chooseUsShape2 from '../../assets/choose-us-shape2.svg';
import ProgressLevel from './progress-level';

const ChooseUsSec = () => {
    return (
        <section className="choose_us pt-136">
            <div className="container">
                <div className="row">
                    <div className="col_content_otr">
                        <div className="col_content_inr">
                            <div className="section_title">
                                <p className="title heading-mb">Why Choose Us</p>
                                <h2 className="heading heading-h2">One Platform & Many
                                    <span className="heading_inr"> Courses
                                        <img className="heading_inr_img" src={underlineSvg} alt="" />
                                    </span>
                                    For You
                                </h2>
                            </div>
                            <p className="desc heading-mm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                            <div className="progress_main">
                                <div className="progress_otr">
                                    <div className="progress_inr">
                                        <div className="content">
                                            <h6 className="heading heading-mb">Skill Mastery Levels</h6>
                                            <p className="number heading-mb">90%</p>
                                        </div>
                                        <ProgressLevel ProgressLevel='progress_bar1' />
                                    </div>
                                </div>
                                <div className="progress_otr">
                                    <div className="progress_inr">
                                        <div className="content">
                                            <h6 className="heading heading-mb">Learning Milestones</h6>
                                            <p className="number heading-mb">92%</p>
                                        </div>
                                        <ProgressLevel ProgressLevel='progress_bar2' />
                                    </div>
                                </div>
                                <div className="progress_otr">
                                    <div className="progress_inr">
                                        <div className="content">
                                            <h6 className="heading heading-mb">Digital Proficiency Journey</h6>
                                            <p className="number heading-mb">92%</p>
                                        </div>
                                        <ProgressLevel ProgressLevel='progress_bar3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col_img_otr">
                        <div className="col_img_inr">
                            <img className="img" src={chooseUsImg} alt="Choose Us" />
                            <div className="bg_shape_otr">
                                <img className="bg_shape" src={chooseUsBgCircle} alt="" />
                            </div>
                            <div className="shape1_otr">
                                <img className="shape1" src={chooseUsShape1} alt="" />
                            </div>
                            <div className="shape2_otr">
                                <div className="shape2" />
                            </div>
                            <div className="shape3_otr">
                                <div className="shape3" />
                            </div>
                            <div className="shape4_otr">
                                <div className="shape4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="pos_img" src={chooseUsShape2} alt="" />
        </section>
    )
}

export default ChooseUsSec
