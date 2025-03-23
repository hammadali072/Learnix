import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

import './blog-sec2.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import liveClassShape from '../../assets/live-class-shape.svg';
import circleSahpe from '../../assets/circle-shape.svg';
import BlogCategoryCards from './blog-category-cards';



const BlogSec2 = () => {
    return (
        <section className="blog-grid pt-136 pb-110">
            <div className="container">
                <div className="wrapper">
                    <div className="section_title">
                        <p className="title heading-mb">Our Blog</p>
                        <h2 className="heading heading-h2">Read Our Latest
                            <span className="heading_inr"> Blog
                                <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                            </span>
                        </h2>
                    </div>
                </div>
                <BlogCategoryCards />
                <div className="action_main">
                    <div className="action_otr">
                        <Link className="trial_btn primary_btn2" to="/pages/blog-standard.html">
                            <p className="button_text">View All Blog</p>
                            <ArrowRight className='button_icon' weight='bold' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="shapes">
                <div className="shape1_otr">
                    <img className="shape1" src={liveClassShape} alt="" />
                </div>
                <div className="shape2_otr">
                    <img className="shape2" src={circleSahpe} alt="" />
                </div>
            </div>
        </section>
    )
}

export default BlogSec2
