import React from 'react';

import { Link } from 'react-router-dom';

import { Note, Clock, Star } from '@phosphor-icons/react';

const FeaturedCourse = (props) => {
    return (
        <div className="col_box_otr">
            <div className="col_box_inr">
                <div className="img_main">
                    <Link className="img_otr" to="/pages/course-detail.html">
                        <img className="img" src={props.courseImg} alt="" />
                    </Link>
                    <div className="pos_text_otr">
                        <p className="pos_text heading-mb">{props.feature}</p>
                    </div>
                </div>
                <div className="content_otr">
                    <p className="rate heading-lm">{props.price}</p>
                    <Link className="heading heading-h4" to="/pages/course-detail.html">{props.courseHeading}</Link>
                    <ul className="list_ul">
                        <li className="list_li">
                            <div className="icon_otr">
                                <Note className='icon' />
                            </div>
                            <p className="list_text heading-mm">Lessons</p>
                        </li>
                        <li className="list_li">
                            <div className="icon_otr">
                                <Clock className='icon' />
                            </div>
                            <p className="list_text heading-mm">{props.runtime}</p>
                        </li>
                        <li className="list_li">
                            <div className="icon_otr">
                                <Star className='icon' />
                            </div>
                            <p className="list_text heading-mm">{props.rating}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourse
