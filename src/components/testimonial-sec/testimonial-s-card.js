import React from 'react'

const TestimonialSCard = (props) => {
    return (
        <div className="col_box_otr box_s_otr">
            <div className="box_s_inr">
                <div className="icon_otr">
                    <img className="icon" src={props.quoteSvg} alt="" />
                </div>
                <h6 className="heading heading-mb">{props.heading}</h6>
                <p className="desc heading-mm">{props.description}</p>
                <div className="profile_main">
                    <div className="profile_otr">
                        <img className="profile" src={props.profileImg} alt="" />
                    </div>
                    <div className="content">
                        <h6 className="sub_heading heading-msb">{props.userName}</h6>
                        <p className="text heading-mm">{props.status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSCard
