import React from 'react';

import { testimonial2Data } from '../../Data';

import quote2 from '../../assets/quote2.svg';
import profile2 from '../../assets/testimonial2.webp';
import TestimonialSCard from './testimonial-s-card';
import TestimonialMCard from './testimonal-m-card';

const TestimonialCards = () => {
    return (
        <div className='row'>
            {
                testimonial2Data.map((item, index) => (
                    <>
                        <TestimonialSCard key={index} quoteSvg={item.quoteSvg} heading={item.heading} description={item.desc} profileImg={item.profileImg} userName={item.userName} status={item.status} />
                        {/* {
                            index === 0 && (
                                <TestimonialMCard quoteSvg={quote2} description="Enrolling in courses at EDUGEN was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital" profileImg={profile2} userName="Lillie R. Cherry" status="Ex-Student" />
                            )
                        } */}
                    </>
                ))
            }
            <TestimonialMCard quoteSvg={quote2} description="Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital" profileImg={profile2} userName="Lillie R. Cherry" status="Ex-Student" />
        </div>
    )
}

export default TestimonialCards
