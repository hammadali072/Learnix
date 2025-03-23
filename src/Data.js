import { FacebookLogo, GoogleLogo, XLogo, LinkedinLogo, Star, StarHalf } from '@phosphor-icons/react';

import FunFact1 from './assets/funfact1.svg';
import FunFact2 from './assets/funfact2.svg';
import FunFact3 from './assets/funfact3.svg';
import FunFact4 from './assets/funfact4.svg';
import checSvg from './assets/check.svg';
import user2 from './assets/user2.svg';
import quoteSvg1 from './assets/quote1.svg';
import quoteSvg2 from './assets/quote2.svg';
import quoteSvg3 from './assets/quote3.svg';

export const menuData = [
    {
        title: "Home",
        path: "/",
        dropdown: [
            { title: "Home Demo - 1", path: "/" },
            { title: "Home Demo - 2", path: "/homepage2" },
            { title: "Home Demo - 3", path: "/homepage3" },
        ]
    },
    {
        title: "Pages",
        path: "/pages",
        dropdown: [
            { title: "About Us", path: "/about" },
            { title: "Our Team", path: "/team" },
            { title: "Our Team Detail", path: "/team-detail" },
            { title: "Privacy Policy", path: "/privacy" },
            { title: "Terms & Condition", path: "/terms" },
        ]
    },
    {
        title: "Courses",
        path: "/courses",
        dropdown: [
            { title: "Courses List", path: "/courses-list" },
            { title: "Courses Grid", path: "/courses-grid" },
            { title: "Courses Detail", path: "/courses-detail" },
            { title: "Courses With Sidebar", path: "/courses-sidebar" },
        ]
    },
    {
        title: "Blog",
        path: "/blog",
        dropdown: [
            { title: "Blog Standard", path: "/blog-standard" },
            { title: "Blog Detail", path: "/blog-detail" },
            { title: "Blog With Sidebar", path: "/blog-with-standard" },
            { title: "Blog Without Sidebar", path: "/blog-without-standard" },
        ]
    },
    {
        title: "Contact Us",
        path: "/contact"
    }

]

export const socialData = [
    {
        icon: FacebookLogo,
        path: "/",
    },
    {
        icon: XLogo,
        path: "/",
    }, {
        icon: LinkedinLogo,
        path: "/",
    }, {
        icon: GoogleLogo,
        path: "/",
    },
]

export const awardData = [
    {
        icon: checSvg,
        text: "Digital skill empowerment"
    },
    {
        icon: checSvg,
        text: "Expert-led courses"
    },
    {
        icon: checSvg,
        text: "Career-focused education"
    },
    {
        icon: checSvg,
        text: "Supportive learning"
    },
    {
        icon: checSvg,
        text: "Life-changing digital education"
    },
]

export const userProfileData = [
    { img: require('./assets/profile2.png'), text: "img" },
    { img: require('./assets/profile3.png'), text: "img" },
    { img: require('./assets/profile1.png'), text: "img" },
    { img: require('./assets/profile4.png'), text: "img" },
    { img: require('./assets/profile5.png'), text: "img" },
]

export const footerNavigationData = [
    {
        heading: "Links",
        menu: [
            { title: "Home", path: "/" },
            { title: "About Us", path: "/about" },
            { title: "Courses", path: "/courses" },
            { title: "Courses Detail", path: "/courses-detail" },
            { title: "Contact", path: "/contact" },
        ]
    },
    {
        heading: "Legal",
        menu: [
            { title: "Terms of Uses", path: "term-use" },
            { title: "Terms & Condition", path: "terms" },
            { title: "Payment Method", path: "payment-method" },
            { title: "Privacy Policy", path: "privacy" },
            { title: "Licensencing", path: "license" },
        ]
    }
]

export const copyrightMenuData = [
    { title: "Company", path: "/" },
    { title: "Support", path: "/" },
    { title: "Privacy", path: "/" },
    { title: "Conatct", path: "/" }
]

export const CategoryData = [
    { image: require('./assets/category-icon1.png'), heading: "Web Design", course: "78 Courses" },
    { image: require('./assets/category-icon2.png'), heading: "Digital Marketing", course: "58 Courses" },
    { image: require('./assets/category-icon3.png'), heading: "Data Science", course: "24 Courses" },
    { image: require('./assets/category-icon4.png'), heading: "Software Developement", course: "48 Courses" },
    { image: require('./assets/category-icon5.png'), heading: "Graphic Design", course: "18 Courses" },
    { image: require('./assets/category-icon6.png'), heading: "Network Administration", course: "48 Courses" },
]

export const testimonialData = [
    {
        stdReview: "Choosing LEARNIX was the best decision I made for my career. The courses are informative, engaging, and industry-relevant. The instructors provide excellent support, ensuring I understood every concept. Their practical teaching approach helped me gain confidence in my abilities. I landed my dream job before course completion! The experience was incredible, and I highly recommend Edugen to anyone looking to advance their digital career with the right skills.",
        stdImg: require('./assets/profile6.png'),
        stdName: "James Wan",
        status: "Ex-Student"
    },
    {
        stdReview: "Enrolling in LEARNIX was a life-changing decision. The courses are well-structured, and the instructors are incredibly supportive. They provide step-by-step guidance, ensuring every concept is understood. Thanks to their expert mentorship, I landed a job in my desired field before completing the course. The learning process was smooth, engaging, and practical. I highly recommend Edugen to anyone looking to upskill and advance their career in the digital world.",
        stdImg: require('./assets/profile7.png'),
        stdName: "Tim Drake",
        status: "Ex-Student"
    },
    {
        stdReview: "LEARNIX courses exceeded my expectations! The instructors are knowledgeable, patient, and dedicated to student success. The curriculum is well-designed, with real-world applications. I felt confident learning new skills, and the support I received was outstanding. I secured an amazing job before finishing my course. The experience was truly rewarding, and I encourage anyone wanting to improve their digital expertise to join Edugen. It’s the best investment for your future!",
        stdImg: require('./assets/profile8.png'),
        stdName: "Krystal France",
        status: "Ex-Student"
    },
]

export const testimonial2Data = [
    {
        quoteSvg: quoteSvg1,
        heading: "The Best Online Course Provider",
        desc: "Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital",
        profileImg: require('./assets/testimonial1.webp'),
        userName: "Jean Grey",
        status: "Ex-Student"
    },
    {
        quoteSvg: quoteSvg2,
        heading: "The Best Online Course Provider",
        desc: "Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital",
        profileImg: require('./assets/testimonial3.webp'),
        userName: "Morgan Stark",
        status: "Ex-Student"
    },
    {
        quoteSvg: quoteSvg1,
        heading: "The Best Online Course Provider",
        desc: "Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital",
        profileImg: require('./assets/testimonial4.webp'),
        userName: "Erik Lansher",
        status: "Ex-Student"
    },
    {
        quoteSvg: quoteSvg3,
        heading: "The Best Online Course Provider",
        desc: "Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital",
        profileImg: require('./assets/testimonial5.webp'),
        userName: "Scott Summers",
        status: "Ex-Student"
    },
]

export const simpleBlogData = [
    {
        blogImg: require('./assets/blog-img1.png'),
        user: "Admin",
        datePosted: "Jan 29, 2022",
        heading: "5 Essential Skills Every Digital Marketer Should Master"
    },
    {
        blogImg: require('./assets/blog-img2.png'),
        user: "Admin",
        datePosted: "May 13, 2022",
        heading: "Graphic Design Trends Shaping Visual Communication"
    },
    {
        blogImg: require('./assets/blog-img3.png'),
        user: "Admin",
        datePosted: "Aug 05, 2022",
        heading: "Navigating the Data Science Job Market"
    },
]

export const newsData = [
    {
        blogImg: require('./assets/blog-img7.png'),
        user: "Admin",
        datePosted: "04 April, 2022",
        heading: "Top 10 Web Development Tools You Should Be Using in 2024",
        comment: "05"
    },
    {
        blogImg: require('./assets/blog-img8.webp'),
        user: "Admin",
        datePosted: "10 May, 2022",
        heading: "Essential Cybersecurity Practices for Protecting Your Online",
        comment: "05"
    },
]

export const categoryBlogData = [
    {
        heading: "The Ultimate Guide to Boosting Your SEO in 2024",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        blogImg: require('./assets/blog-img5.png'),
        datePosted: "September 22, 2024",
        field: "Technical"
    },
    {
        heading: "Leveraging Social Media Analytics for Business Growth",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        blogImg: require('./assets/blog-img6.png'),
        datePosted: "November 10, 2024",
        field: "Technical"
    },
]

export const coursesData = [
    {
        img: require('./assets/course-img1.png'),
        level: "Beginner",
        price: "$27.00",
        heading: "Introduction to Digital Marketing",
        path: "/courses-detail",
        rating: 4.5,
        ratingStart: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: require('./assets/profile4.png'),
        instrctorName: "Prof. Angela Bryant",
        strength: "70+",
    },
    {
        img: require('./assets/course-img2.png'),
        level: "Intermediate",
        price: "$33.00",
        heading: "Increasing Engagement with Instagagram & Facebook",
        path: "/courses-detail",
        rating: 4.5,
        ratingStart: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: require('./assets/profile2.png'),
        instrctorName: "Prof. Donnie Ball",
        strength: "1.5k+",
    },
    {
        img: require('./assets/course-img3.png'),
        level: "Beginner",
        price: "$26.00",
        heading: "Full Stack Web Development Bootcamp",
        path: "/courses-detail",
        rating: 4.5,
        ratingStart: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: require('./assets/profile3.png'),
        instrctorName: "Prof. Vivian Farney",
        strength: "5k+",
    },
    {
        img: require('./assets/course-img4.png'),
        level: "Beginner",
        price: "$47.00",
        heading: "Mastering Digital Marketing Fundamentals",
        path: "/courses-detail",
        rating: 4.5,
        ratingStart: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: require('./assets/profile1.png'),
        instrctorName: "Prof. Ralph Lyon",
        strength: "1.7k+",
    },
    {
        img: require('./assets/course-img5.png'),
        level: "Beginner",
        price: "$55.00",
        heading: "Python Programming for Beginners",
        path: "/courses-detail",
        rating: 4.5,
        ratingStart: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: require('./assets/profile5.png'),
        instrctorName: "Prof. Betty Ortegal",
        strength: "5k+",
    },
    {
        img: require('./assets/course-img6.png'),
        level: "Beginner",
        price: "$37.00",
        heading: "Graphic Design Mastery: From Concept to Creation",
        path: "/courses-detail",
        rating: 4.5,
        ratingStart: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: require('./assets/profile6.png'),
        instrctorName: "Prof. Scott Stevens",
        strength: "2.3k+",
    },

]

export const coursesListData = [
    {
        img: require('./assets/course-img7.webp'),
        price: "Free",
        heading: "Basic Fundamentals of Interior & Graphics Design",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        img: require('./assets/course-img8.webp'),
        price: "$24.33",
        heading: "Increasing Engagement with Instagram & Facebook",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        img: require('./assets/course-img9.webp'),
        price: "$39.99",
        heading: "Introduction to Color Theory & Basic UI/UX",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        img: require('./assets/course-img10.webp'),
        price: "$32.15",
        heading: "Financial Security Thinking and Principles Theory",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        img: require('./assets/course-img11.webp'),
        price: "$37.88",
        heading: "Logo Design: From Concept to Presentation",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        img: require('./assets/course-img12.webp'),
        price: "Free",
        heading: "Professional Ceramic Molding for Beginners",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
]

export const featuredCoursesData = [
    {
        img: require('./assets/course-img1.png'),
        heading: "Basic Fundamentals of Interior & Graphics Design",
        price: "$24.99",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        img: require('./assets/course-img2.png'),
        heading: "Increasing Engagement with Instagram & Facebook",
        price: "Free",
        category: "Marketing",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        img: require('./assets/course-img3.png'),
        heading: "Introduction to Color Theory & Basic UI/UX",
        price: "$41.25",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        img: require('./assets/course-img4.png'),
        heading: "Financial Security Thinking and Principles Theory",
        price: "$24.99",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        img: require('./assets/course-img5.png'),
        heading: "Logo Design: From Concept to Presentation",
        price: "$38.48",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        img: require('./assets/course-img6.png'),
        heading: "Professional Ceramic Molding for Beginners",
        price: "$19.48",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },

]

export const lecturersData = [
    {
        img: require('./assets/team-img1.png'),
        name: "Tim R. Moyer",
        path: "/",
        designation: "Lecturer"
    },
    {
        img: require('./assets/team-img2.png'),
        name: "Harold J. Eakes",
        path: "/",
        designation: "Lecturer"
    },
    {
        img: require('./assets/team-img1.png'),
        name: "Ruth R. Scott",
        path: "/",
        designation: "Lecturer"
    }
]

export const instructorsData = [
    {
        img: require('./assets/team-img3.png'),
        name: "Troy A. Miller",
        path: "/",
        designation: "Instructor"
    },
    {
        img: require('./assets/team-img4.png'),
        name: "Michel D. Cornelius",
        path: "/",
        designation: "Instructor"
    },
    {
        img: require('./assets/team-img5.png'),
        name: "George A. Cambell",
        path: "/",
        designation: "Instructor"
    },
    {
        img: require('./assets/team-img6.png'),
        name: "Grace R. Sandoval",
        path: "/",
        designation: "Instructor"
    },
    {
        img: require('./assets/team-img7.png'),
        name: "Karl Clarkson",
        path: "/",
        designation: "Instructor"
    },
    {
        img: require('./assets/team-img8.webp'),
        name: "Gloria Bush",
        path: "/",
        designation: "Instructor"
    },
    {
        img: require('./assets/team-img9.webp'),
        name: "Teresa Ransom",
        path: "/",
        designation: "Instructor"
    },
    {
        img: require('./assets/team-img10.webp'),
        name: "Debra Webster",
        path: "/",
        designation: "Instructor"
    }
]

export const funFactData = [
    {
        image: FunFact1,
        strength: "75 +",
        heading: "Enrolled Students"
    },
    {
        image: FunFact2,
        strength: "324 +",
        heading: "Enrolled Students"
    },
    {
        image: FunFact3,
        strength: "25 K+",
        heading: "Certified Students"
    },
    {
        image: FunFact4,
        strength: "30 +",
        heading: "Skilled Instructors"
    }
]

export const industryData = [
    {
        heading: "Industry Expertise",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    },
    {
        heading: "Practical Learning Approach",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    },
    {
        heading: "Supportive Community",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    }
]

export const chooseUsCardData = [
    {
        icon: user2,
        heading: "Expert-Led Curriculum",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
        icon: user2,
        heading: "Expert-Led Curriculum",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
    {
        icon: user2,
        heading: "Expert-Led Curriculum",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
    },
]