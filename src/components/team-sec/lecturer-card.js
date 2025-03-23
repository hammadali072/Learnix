import React from 'react';

import { Link } from 'react-router-dom';
import { socialData } from '../../Data';

const LecturerCard = (props) => {
  return (
    <div className="col_lecturer_otr">
      <div className="col_lecturer_inr">
        <div className="img_otr">
          <img className="img" src={props.lecturerImg} alt="Team" />
        </div>
        <div className="content">
          <Link className="heading heading-mb" to={props.path}>{props.lecturerName}</Link>
          <p className="text heading-sm">{props.designation}</p>
          <ul className="social_ul">
            {
              socialData.map((item, index) => (
                index !== socialData.length - 1 && (
                  <li className="social_li" key={index}>
                    <Link to={item.path} className="social_a">
                      <item.icon className='icon' />
                    </Link>
                  </li>
                )
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LecturerCard
