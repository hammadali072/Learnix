import React from 'react';

import { Link } from 'react-router-dom';
import { socialData } from '../../Data';
import { Plus } from '@phosphor-icons/react';

const InstructorCard = (props) => {
    return (
        <div className="col_instructor_otr">
            <div className="col_instructor_inr box_1">
                <Link to="#" className="img_otr">
                    <img className="img" src={props.instructorImg} alt="" />
                </Link>
                <div className="content">
                    <div className="detail">
                        <h6 className="heading heading-mb">{props.instructorName}</h6>
                        <p className="text heading-sm">{props.designation}</p>
                    </div>
                    <div className="social_main">
                        <div className="icon_otr">
                            <Plus className='icon' weight='bold' />
                        </div>
                        <div className="social_otr">
                            <ul className="social_ul">
                                {
                                    socialData.slice(0, 3).map((item, index) => (
                                        <li className="social_li" key={index}>
                                            <Link to={item.path} className="social_a">
                                                <item.icon className='icon' />
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorCard
