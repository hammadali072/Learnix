import React from 'react';

import { categoryBlogData } from '../../Data';

import BlogCategoryMCard from './blog-category-m-card';
import BlogCategorySCard from './blog-category-s-card';

import blogImg4 from '../../assets/blog-img4.png';

const BlogCategoryCards = () => {
    return (
        <div className='row'>
            <div className='col_category_blog_otr'>
                <BlogCategoryMCard blogImg={blogImg4} datePosted="June 4, 2024" field="Technical" blogHeading="Top 5 Programming Languages to Learn for a Thriving Tech Career" blogDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since" />
            </div>
            <div className='col_category_blog_otr'>
                {
                    categoryBlogData.map((item, index) => (
                        <BlogCategorySCard key={index} blogImg={item.blogImg} datePosted={item.datePosted} field={item.field} blogHeading={item.heading} blogDesc={item.desc} />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogCategoryCards
