import React from 'react';

const ChooseUsCard = (props) => {
    return (
        <div className="choose_us_card_otr">
            <div className="choose_us_card_inr">
                <div className="icon_otr">
                    <img className="icon" src={props.user} alt="" />
                </div>
                <div className="content">
                    <h4 className="heading heading-h4">{props.cardHeading}</h4>
                    <p className="desc heading-sm">{props.cardDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseUsCard
