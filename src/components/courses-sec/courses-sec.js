import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { coursesData } from '../../Data';

import CourseCardGrid from './course-card-grid';

import underlineSvg from '../../assets/heading-underline.svg';

import './courses-sec.scss';

const CoursesSec = () => {
    return (
        <section className="course-grid pt-136 pb-110">
            <div className="container">
                <div className="wrapper">
                    <div className="section_title">
                        <p className="title heading-mb">Most Featured Courses</p>
                        <h2 className="heading heading-h2">Choose Our Top <span className="heading_inr">Courses
                            <img className="heading_inr_img" src={underlineSvg} alt="" />
                        </span>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    {
                        coursesData.map((item, index) => (
                            <CourseCardGrid key={index} courseImg={item.img} coursePrice={item.price} courseLevel={item.level} courseHeading={item.heading} path={item.path} rating={item.rating} instructorName={item.instrctorName} instructorImg={item.instructorImg} enrollStrength={item.strength} ratingStar={item.ratingStart} />
                        ))
                    }
                </div>
                <div className="action_main">
                    <div className="action_otr">
                        <Link className="view_btn primary_btn" to="/">
                            <p className="button_text">View All Courses</p>
                            <ArrowRight className='button_icon' weight='bold' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesSec
