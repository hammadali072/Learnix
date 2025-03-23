import React from 'react';

import { newsData } from '../../Data';
import NewsCard from './news-card';

const NewsCards = () => {
    return (
        <div class="row">
            {
                newsData.map((item, index) => (
                    <NewsCard key={index} blogImg={item.blogImg} blogHeading={item.heading} datePosted={item.datePosted} comments={item.comment} />
                ))
            }
        </div>
    )
}

export default NewsCards
