import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { lecturersData } from '../../Data';

import LecturerCard from './lecturer-card';

import underlineSvg from '../../assets/heading-underline.svg';

import './team-sec.scss';

const TeamSec = () => {
    return (
        <section class="team pt-136 pb-110">
            <div class="container">
                <div class="row">
                    <div class="col_content_otr">
                        <div class="col_content_inr">
                            <div class="section_title">
                                <p class="title heading-mb">Team Members</p>
                                <h2 class="heading heading-h2">Our Expert <span class="heading_inr"> Lecturer
                                    <img class="heading_inr_img" src={underlineSvg} alt="" />
                                </span>
                                </h2>
                            </div>
                            <p class="desc heading-mm">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            </p>
                            <div class="action_otr">
                                <Link class="team_btn secondary_btn" to="/">
                                    <div className='icon_otr'>
                                        <ArrowRight className='icon' weight='bold' />
                                    </div>
                                    <p class="button_text">Join Our Team</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        lecturersData.map((item, index) => (
                            <LecturerCard key={index} lecturerImg={item.img} lecturerName={item.name} path={item.path} designation={item.designation} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamSec
