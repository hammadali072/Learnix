import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { featuredCoursesData } from '../../Data';

import './courses-sec3.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import shape15 from '../../assets/shape15.svg';
import FeaturedCourse from './featured-course';

const CoursesSec3 = () => {
    return (
        <section className="all_courses_sec pt-136 pb-110">
            <div className="container">
                <div className="wrapper">
                    <div className="section_title">
                        <p className="title heading-mb">Most Featured Courses</p>
                        <h2 className="heading heading-h2">Choose Our Top <span className="heading_inr">Courses
                            <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                        </span>
                        </h2>
                    </div>
                    <nav className="nav_otr">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link heading-mb active" id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-see-all" type="button" role="tab" aria-controls="nav-home"
                                aria-selected="true">See All</button>
                            <button className="nav-link heading-mb" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-marketing" type="button" role="tab" aria-controls="nav-profile"
                                aria-selected="false">Marketing</button>
                            <button className="nav-link heading-mb" id="nav-contact-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-design" type="button" role="tab" aria-controls="nav-contact"
                                aria-selected="false">Design</button>
                            <button className="nav-link heading-mb" id="nav-contact-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-finance" type="button" role="tab" aria-controls="nav-contact"
                                aria-selected="false">Finance</button>
                        </div>
                    </nav>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-see-all" role="tabpanel" aria-labelledby="nav-home-tab"
                        tabindex="0">
                        <div className='row'>
                            {
                                featuredCoursesData.map((item, index) => (
                                    <FeaturedCourse key={index} courseImg={item.img} feature={item.category} price={item.price} courseHeading={item.heading} runtime={item.runtime} rating={item.rating} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-marketing" role="tabpanel" aria-labelledby="nav-profile-tab"
                        tabindex="0">
                    </div>
                    <div className="tab-pane fade" id="nav-design" role="tabpanel" aria-labelledby="nav-contact-tab"
                        tabindex="0">
                    </div>
                    <div className="tab-pane fade" id="nav-finance" role="tabpanel" aria-labelledby="nav-contact-tab"
                        tabindex="0">
                    </div>
                </div>
                <div className="action_otr">
                    <div className="action_inr">
                        <Link className="trial_btn primary_btn" to="/pages/course-grid-view.html">
                            <p className="button_text">View All Courses</p>
                            <ArrowRight className='button_icon' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="shapes">
                <div className="shapes1_otr">
                    <img className="shapes1" src={shape15} alt="" />
                </div>
                <div className="shapes2_otr">
                    <div className="shapes2" />
                </div>
                <div className="shapes3_otr">
                    <div className="shapes3" />
                </div>
                <div className="shapes4_otr">
                    <div className="shapes4" />
                </div>
                <div className="shapes5_otr">
                    <div className="shapes5" />
                </div>
            </div>
        </section>
    )
}

export default CoursesSec3
