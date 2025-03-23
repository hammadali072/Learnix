import React from 'react';

import HeroSec3 from '../components/hero-sec/hero-sec3'
import CategoriesSec3 from '../components/categories-sec/categories-sec3'
import NewsletterSec3 from '../components/newsletter-sec/newsletter-sec3'
import BlogSec from '../components/blog-sec/blog-sec'
import AboutSec3 from '../components/about-sec/about-sec3'
import FunFactSec from '../components/fun-fact-sec/fun-fact-sec'
import ChooseUsSec3 from '../components/choose-us-sec/choose-us-sec3'
import TestimonialSec3 from '../components/testimonial-sec/testimonial-sec3'
import TestimonialNextSec from '../components/testimonial-next-sec/testimonial-next-sec'
import TeamSec3 from '../components/team-sec/team-sec3'
import CoursesSec3 from '../components/courses-sec/courses-sec3';

const LandingPage3 = () => {
    return (
        <>
            <HeroSec3 />
            <CategoriesSec3 />
            <AboutSec3 />
            <CoursesSec3 />
            <FunFactSec />
            <ChooseUsSec3 />
            <TeamSec3 />
            <TestimonialSec3 />
            <TestimonialNextSec />
            <BlogSec />
            <NewsletterSec3 />
        </>
    )
}

export default LandingPage3
