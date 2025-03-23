import React from 'react';

const TestimonialMCard = (props) => {
    return (
        <div className="col_box_otr box_m_otr">
            <div className="box_m_inr">
                <div className="profile_otr">
                    <img className="profile" src={props.profileImg} alt="" />
                </div>
                <div className="content_otr">
                    <div className="icon_otr">
                        <img className="icon" src={props.quoteSvg} alt="" />
                    </div>
                    <h4 className="heading heading-h4">{props.description}</h4>
                    <h6 className="sub_heading heading-msb">{props.userName}</h6>
                    <p className="text heading-mm">{props.status}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialMCard
