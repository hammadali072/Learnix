import React from 'react';
import HeroSec from '../components/hero-sec/hero-sec';
import BlogSec from '../components/blog-sec/blog-sec';
import CategoriesSec from '../components/categories-sec/categories-sec';
import CoursesSec from '../components/courses-sec/courses-sec';
import LiveClassesSec from '../components/live-classes-sec/live-classes-sec';
import AboutSec from '../components/about-sec/about-sec';
import VideoSec from '../components/video-sec/video-sec';
import TeamSec from '../components/team-sec/team-sec';
import NewsletterSec from '../components/newsletter-sec/newsletter-sec';
import ChooseUsSec from '../components/choose-us-sec/choose-us-sec';
import TestimonialSec from '../components/testimonial-sec/testimonial-sec';

const LandingPage = () => {
    return (
        <div>
            <HeroSec />
            <CategoriesSec />
            <AboutSec />
            <VideoSec />
            <CoursesSec />
            <ChooseUsSec />
            <TeamSec />
            <NewsletterSec />
            <TestimonialSec />
            <LiveClassesSec />
            <BlogSec />
        </div>
    )
}

export default LandingPage
