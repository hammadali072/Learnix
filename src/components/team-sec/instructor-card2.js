import React from 'react';
import { Link } from 'react-router-dom';
import { ShareNetwork } from '@phosphor-icons/react';
import { socialData } from '../../Data';

const InstructorCard2 = (props) => {
    return (
        <div className="col_box_otr">
            <div className="col_box_inr">
                <div className="content">
                    <h6 className="heading heading-mb">{props.userName}</h6>
                    <p className="text heading-sm">{props.designation}</p>
                </div>
                <div className="img_main">

                    <div className="img_otr">
                        <Link to="#" className="img_inr">
                            <img className="img" src={props.profileImg} alt="" />
                        </Link>
                    </div>
                    <div className="social_otr">
                        <div className="share_otr">
                            <ShareNetwork className='icon' weight='fill' />
                        </div>
                        <ul className="social_ul">
                            {
                                socialData.slice(0, 3).map((item, index) => (
                                    <li className="social_li" key={index}>
                                        <Link to={item.path} className="social_a">
                                            <item.icon className='icon' weight='bold' />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorCard2
