import React from 'react';

import BlogCard from './blog-card';
import { simpleBlogData } from '../../Data';

const BlogCards = () => {
    return (
        <div className="row">
            {
                simpleBlogData.map((item, index) => (
                    <BlogCard blogImg={item.blogImg} user={item.user} datePosted={item.datePosted} blogHeading={item.heading} />
                ))
            }
        </div>
    )
}

export default BlogCards
