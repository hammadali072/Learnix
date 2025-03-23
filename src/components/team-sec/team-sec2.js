import React from 'react';

import { instructorsData } from '../../Data';

import './team-sec2.scss';

import InstructorCard from './instructor-card';

import underlineSvg from '../../assets/heading-underline.svg';


const TeamSec2 = () => {
    return (
        <section className="team_section pt-136 pb-110">
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
                        instructorsData.slice(0, 4).map((item, index) => (
                            <InstructorCard key={index} instructorImg={item.img} instructorName={item.name} designation={item.designation} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamSec2
