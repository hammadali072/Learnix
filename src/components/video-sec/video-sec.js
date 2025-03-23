import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from '@phosphor-icons/react';

import './video-sec.scss';

import videoButtonImg from '../../assets/video-button-img.png';

const VideoSec = () => {
    return (
        <section className="video">
            <div className="container">
                <div className="video_inr">
                    <div className="row">
                        <div className="col_content_otr">
                            <div className="col_content_inr">
                                <h1 className="heading">INTRO
                                    <span className="heading_inr">VIDEO</span>
                                </h1>
                            </div>
                        </div>
                        <div className="col_action_otr">
                            <div className="col_action_inr">
                                <div className="img_otr">
                                    <img className="img" src={videoButtonImg} alt="" />
                                </div>
                                <Link to="/" className="play_btn">
                                    <Play className='icon' weight='fill' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSec
