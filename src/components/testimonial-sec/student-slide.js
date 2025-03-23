import React from 'react';

import { Link } from 'react-router-dom';

const StudentSlide = (props) => {
    return (
        <>
            <p className="desc heading-mm">{props.stdReview}</p>
            <div className="profile_main">
                <Link to="#" className="profile_otr">
                    <img className="profile" src={props.stdImg} alt="" />
                </Link>
                <div className="content">
                    <h6 className="heading heading-lm">{props.stdName}</h6>
                    <p className="text heading-sm">{props.status}</p>
                </div>
            </div>
        </>
    )
}

export default StudentSlide
