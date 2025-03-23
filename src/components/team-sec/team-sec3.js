import React from 'react';

import { instructorsData } from '../../Data';

import InstructorCard2 from './instructor-card2';

import './team-sec3.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import liveClassShape from '../../assets/live-class-shape.svg';
import circleShape from '../../assets/circle-shape.svg';

const TeamSec3 = () => {
    return (
        <section className="team_sec pt-136 pb-110">
            <div className="container">
                <div className="wrapper">
                    <div className="section_title">
                        <p className="title heading-mb">Team Members</p>
                        <h2 className="heading heading-h2">Meet Out
                            <span className="heading_inr"> Instructors
                                <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                            </span>
                        </h2>
                    </div>
                </div>
                <div className='row'>
                    {
                        instructorsData.slice(4, 8).map((item, index) => (
                            <InstructorCard2 key={index} userName={item.name} designation={item.designation} profileImg={item.img} />
                        ))
                    }
                </div>
            </div>
            <div class="shapes">
                <div class="shape1_otr">
                    <img class="shape1" src={liveClassShape} alt="" />
                </div>
                <div class="shape2_otr">
                    <img class="shape2" src={circleShape} alt="" />
                </div>
            </div>
        </section>
    )
}

export default TeamSec3
