import React from 'react';

import { Link } from 'react-router-dom';
import { Users, Heart, ArrowRight } from '@phosphor-icons/react';

const CourseCardGrid = (props) => {
    return (
        <div className="col_course_grid_otr">
            <div className="col_course_grid_inr">
                <div className="img_main">
                    <Link className="img_otr" to="/pages/course-detail.html">
                        <img className="img" src={props.courseImg} alt="Course 1" />
                    </Link>
                    <div className="hover_text_otr">
                        <p className="hover_text heading-mm">{props.coursePrice}</p>
                    </div>
                </div>
                <div className="content_otr">
                    <div className="beginner_icon_main">
                        <div className="beginner_btn_otr">
                            <Link className="beginner_btn card_btn" to="">{props.courseLevel}</Link>
                        </div>
                        <div className="heart_icon_otr">
                            <Heart className='heart_icon' />
                        </div>
                    </div>
                    <Link className="heading heading-h4" to={props.path}>{props.courseHeading}</Link>
                    <div className="rating_main">
                        <p className="rating_text heading-sm">({`${props.rating} rating`})</p>
                        <ul className="star_ul">
                            {
                                props.ratingStar.map((item, index) => (
                                    <li className="star_li" key={index}>
                                        <item.icon className='star_icon' weight={item.style} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="profile_main">
                        <Link className="profile_otr" to="/">
                            <img className="profile" src={props.instructorImg} alt="Profile" />
                        </Link>
                        <p className="profile_text heading-sm">{props.instructorName}</p>
                    </div>
                    <div className="card_footer">
                        <div className="student_otr">
                            <div className="icon_otr">
                                <Users className='icon' />
                            </div>
                            <p className="text heading-sm">{`${props.enrollStrength} Students`}</p>
                        </div>
                        <div className="action_otr">
                            <Link className="enroll_btn" to="/">
                                <p className="btn_text">Enroll Now</p>
                                <ArrowRight className='arrow_icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCardGrid
