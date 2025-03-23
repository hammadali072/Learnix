import React from 'react';

import { Link } from 'react-router-dom';

const NewsCard = (props) => {
    return (
        <div class="col_news_otr">
            <div class="col_news_inr">
                <Link to="/pages/blog-detail.html" class="img_otr">
                    <img class="img" src={props.blogImg} alt="" />
                </Link>
                <div class="content_otr">
                    <Link class="heading heading-h3" to="/pages/blog-detail.html">{props.blogHeading}</Link>
                    <ul class="list_ul">
                        <li class="list_li">
                            <i class="icon fa-regular fa-file-lines"></i>
                            <div class="text heading-sm">{props.datePosted}</div>
                        </li>
                        <li class="list_li">
                            <i class="icon fa-regular fa-comment-dots"></i>
                            <div class="text heading-sm">{`Comments (${props.comments})`}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
