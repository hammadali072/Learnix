import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { CategoryData } from '../../Data';

import './categories-sec.scss';

import underlineSvg from '../../assets/heading-underline.svg';
import CategoryCard from './category-card';

const CategoriesSec = () => {
    return (
        <section className="category pt-136 pb-110">
            <div className="container">
                <div className="wrapper">
                    <div className="section_title">
                        <p className="title heading-mb">Course Category</p>
                        <h2 className="heading heading-h2">Explore Top
                            <span className="heading_inr"> Courses <img className="heading_inr_img" src={underlineSvg} alt="Lines" />
                            </span>
                        </h2>
                    </div>
                    <div className="action_otr">
                        <Link className="category_btn primary_btn" to="/">
                            <p className="button_text">View All Categories</p>
                            <ArrowRight className='button_icon' weight='bold' />
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    {
                        CategoryData.map((item, index) => (
                            <CategoryCard key={index} CategoryImg={item.image} CategoryName={item.heading} CourseQuantity={item.course} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CategoriesSec;
