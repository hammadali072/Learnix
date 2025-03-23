import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { coursesListData } from '../../Data';

import './courses-sec2.scss';

import CourseCardList from './course-card-list';

import underlineSvg from '../../assets/heading-underline.svg';


const CoursesSec2 = () => {
    return (
        <section className="course-list pt-136 pb-110">
            <div className="container">
                <div className="wrapper">
                    <div className="section_title">
                        <p className="title heading-mb">Most Featured Courses</p>
                        <h2 className="heading heading-h2">Choose Our Top
                            <span className="heading_inr"> Courses
                                <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                            </span>
                        </h2>
                    </div>
                    <div className="action_otr">
                        <Link className="category_btn primary_btn2" to="/">
                            <p className="button_text">Explore All Courses</p>
                            <ArrowRight className='button_icon' weight='bold' />
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    {
                        coursesListData.map((item, index) => (
                            <CourseCardList key={index} courseImg={item.img} price={item.price} courseName={item.heading} content={item.lessons} totalStudents={item.strength} ratingStar={item.ratingStar} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CoursesSec2
