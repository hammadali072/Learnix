import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, User, Calendar } from '@phosphor-icons/react';

const BlogCard = (props) => {
    return (
        <div className="col_blog_otr">
            <div className="col_blog_inr">
                <div className="img_main">
                    <Link to="/" className="img_otr">
                        <img className="img" src={props.blogImg} alt="Blog" />
                    </Link>
                    <div className="info_otr">
                        <ul className="info_ul">
                            <li className="info_li">
                                <div className="icon_otr">
                                    <User className='icon' />
                                </div>
                                <p className="text heading-sm">{props.user}</p>
                            </li>
                            <li className="info_li">
                                <div className="icon_otr">
                                    <Calendar className='icon' />
                                </div>
                                <p className="text heading-sm">{props.datePosted}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <Link to="/" className="heading heading-h4">{props.blogHeading}</Link>
                    <div className="action_otr">
                        <Link className="read_btn" to="/">
                            <p className="btn_text">Read More</p>
                            <ArrowRight className='arrow_icon' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
