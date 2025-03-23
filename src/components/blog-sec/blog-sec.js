import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import NewsCards from './news-cards';
import BlogCards from './blog-cards';

import './blog-sec.scss';

import underlineSvg from '../../assets/heading-underline.svg';

const BlogSec = () => {
    const location = useLocation();
    return (
        <section className="blog pt-136 pb-110">
            <div className="container">
                <div className="wrapper">
                    <div className="section_title">
                        <p className="title heading-mb">Our Blog</p>
                        <h2 className="heading heading-h2">Read Our Latest
                            <span className="heading_inr"> {location.pathname === '/homepage3' ? "Blog & News" : "Blog"}
                                <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                            </span>
                        </h2>
                    </div>
                    <div className="action_otr">
                        <Link className="category_btn primary_btn" to="/">
                            <p className="button_text">View All Blog</p>
                            <ArrowRight className='button_icon' weight='bold' />
                        </Link>
                    </div>
                </div>
                {location.pathname === '/homepage3' ? <NewsCards /> : <BlogCards />}
            </div>
        </section>
    )
}

export default BlogSec;
