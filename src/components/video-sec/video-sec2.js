import React from 'react';

import { Link } from 'react-router-dom';
import { Play } from '@phosphor-icons/react';

import './video-sec2.scss';

import videoButtonImg from '../../assets/video-button-img.png';

const VideoSec2 = () => {
    return (
        <section className="video-sec">
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col_content_otr">
                            <div className="col_content_inr">
                                <h1 className="heading">INTRO</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col_action_otr">
                            <div className="col_action_inr">
                                <div className="img_otr">
                                    <img className="img" src={videoButtonImg} alt="" />
                                </div>
                                <Link to="#" className="play_btn">
                                    <Play className='icon' weight='fill' />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col_content_otr">
                            <div className="col_content_inr">
                                <h1 className="heading">Video</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSec2
