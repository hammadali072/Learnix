import React from 'react';

import { Link } from 'react-router-dom';
import { Note, Users } from '@phosphor-icons/react';

const CourseCardList = (props) => {
    return (
        <div className="col_course_list_otr">
            <div className="col_course_list_inr">
                <div className="img_main">
                    <Link to="/pages/course-detail.html" className="img_otr">
                        <img className="img" src={props.courseImg} alt="" />
                    </Link>
                </div>
                <div className="content">
                    <div className="text_star_main">
                        <p className="text heading-mb">{props.price}</p>
                        <ul className="star_ul">
                            {
                                props.ratingStar.map((item, index) => (
                                    <li className="star_li" key={index}>
                                        <item.icon className='icon' weight={item.style} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <Link to="/pages/course-detail.html" className="heading heading-h4">{props.courseName}</Link>
                    <ul className="lesson_student_ul">
                        <li className="lesson_student_li">
                            <Note className='icon' />
                            <p className="text heading-sm">{`${props.content} Lessons`}</p>
                        </li>
                        <li className="lesson_student_li">
                            <Users className='icon' />
                            <p className="text heading-sm">{`${props.totalStudents} Student`}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CourseCardList
