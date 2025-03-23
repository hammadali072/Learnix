import React from 'react';


const FunFactCard = (props) => {
    return (
        <div className="col_box_otr">
            <div className="col_box_inr">
                <div className="icon_otr">
                    <img className="icon" src={props.funfactImg} alt="" />
                </div>
                <div className="content">
                    <h3 className="heading heading-h3">{props.strength}</h3>
                    <p className="desc heading-mm">{props.heading}</p>
                </div>
            </div>
        </div>
    )
}

export default FunFactCard
