import React from 'react';
import { Link } from 'react-router-dom';
import { SpeakerSimpleX, Phone, VideoCamera } from '@phosphor-icons/react';

import './live-classes-sec.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import liveClassesImg from '../../assets/live-classes-img.webp';
import receiverImg from '../../assets/live-classes-img2.webp';
import liveClassShape from '../../assets/live-class-shape.svg';
import circleShape from '../../assets/circle-shape.svg';

const LiveClassesSec = () => {
    return (
        <section className="live_class pt-136 pb-110">
            <div className="container">
                <div className="wrapper">
                    <div className="section_title">
                        <p className="title heading-mb">Live Classes</p>
                        <h2 className="heading heading-h2">It's Easy To Start
                            <span className="heading_inr"> Learning <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="video_main">
                    <div className="img_otr">
                        <img className="img" src={liveClassesImg} alt="" />
                    </div>
                    <div className="live_info">
                        <h6 className="heading heading-mm">LIVE</h6>
                        <p className="text heading-s">01:30:08</p>
                    </div>
                    <div className="control_otr">
                        <div className="control_ul">
                            <li className="control_li">
                                <Link to="#" className="control_a">
                                    <SpeakerSimpleX className='icon' weight='fill' />
                                </Link>
                            </li>
                            <li className="control_li">
                                <Link to="#" className="control_a phone_a">
                                    <Phone className='icon phone_icon' weight='fill' />
                                </Link>
                            </li>
                            <li className="control_li">
                                <Link to="#" className="control_a video_a">
                                    <VideoCamera className='icon video_icon' weight='fill' />
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="reciever_img_otr">
                        <img className="reciever_img" src={receiverImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="class_shape1_otr">
                <img className="class_shape1" src={liveClassShape} alt="" />
            </div>
            <div className="class_shape2_otr">
                <img className="class_shape2" src={circleShape} alt="" />
            </div>
        </section>
    )
}

export default LiveClassesSec
