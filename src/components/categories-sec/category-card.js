import React from 'react';

import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
    return (
        <div className="col_course_category_otr">
            <div className="col_course_category_inr">
                <div className="icon_otr">
                    <img className="icon" src={props.CategoryImg} alt="Category Icon" />
                </div>
                <Link to='/' className="heading heading-h4">{props.CategoryName}</Link>
                <p className="text heading-mm">{props.CourseQuantity}</p>
            </div>
        </div>
    )
}

export default CategoryCard
