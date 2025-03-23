import React from 'react';

import { Link } from 'react-router-dom';


const BlogCategoryMCard = (props) => {
    return (
        <div className="col_category_blog_otr">
            <div className="col_category_blog_inr">
                <div className="img_otr">
                    <Link to="/pages/blog-detail.html" className="img_inr">
                        <img className="img" src={props.blogImg} alt="" />
                    </Link>
                </div>
                <div className="content">
                    <ul className="date_text_ul">
                        <li className="date_text_li">
                            <p className="date heading-sm">{props.datePosted}</p>
                        </li>
                        <li className="date_text_li">
                            <p className="text heading-sm">{props.field}</p>
                        </li>
                    </ul>
                    <Link to="/pages/blog-detail.html" className="heading heading-h4">{props.blogHeading}</Link>
                    <p className="desc heading-sm">{props.blogDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCategoryMCard
