import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUp } from '@phosphor-icons/react';
import { footerNavigationData, socialData, copyrightMenuData } from '../../Data';
import brandLogoLight from '../../assets/footer-brand-logo.png';
import brandLogoDark from '../../assets/brand-logo.png';
import playStore from '../../assets/play-store.svg';
import appStore from '../../assets/app-store.svg';
import footerShape1 from '../../assets/footer-shape1.svg';
import footerShape2 from '../../assets/footer-shape2.svg';
import footerShape3 from '../../assets/footer-shape3.svg';
import footerShape4 from '../../assets/footer-shape.webp';

import './footer.scss';

const Footer = () => {
    const location = useLocation();
    return (
        <>
            <footer className={`footer pt-136 pb-110 ${location.pathname === '/homepage3' ? 'footer-light' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col_logo_otr">
                            <div className="col_logo_inr">
                                <Link to="/" className="logo_otr">
                                    <img className="logo" src={`${location.pathname === '/homepage3' ? brandLogoDark : brandLogoLight}`} alt="Brand Logo" />
                                </Link>
                                <p className={`desc heading-mm ${location.pathname === '/homepage3' ? 'text_color_dark' : 'text_color_light'}`}> Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.</p>
                                <div className="email_otr">
                                    <Link to="mailto:support.edugen@email.com"
                                        className="email heading-mm">support.edugen@email.com</Link>
                                </div>
                                <ul className="social_ul">
                                    {
                                        socialData.map((item, index) => (
                                            <li className="social_li" key={index}>
                                                <Link to={item.path} className="social_a">
                                                    <item.icon className='icon' weight='bold' />
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='col_nav_otr'>
                            {
                                footerNavigationData.map((item, index) => (
                                    <div className="col_navigation_otr" key={index}>
                                        <div className="col_navigation_inr">
                                            <h4 className={`heading heading-h4 ${location.pathname === '/homepage3' ? 'text_color_dark' : 'text_color_light'}`}>{item.heading}</h4>
                                            <ul className="navigation_ul">
                                                {
                                                    item.menu.map((menuItem, subIndex) => (
                                                        <li className="navigation_li" key={subIndex}>
                                                            <Link to={menuItem.path} className={`navigation_a heading-mb ${location.pathname === '/homepage3' ? 'link_dark' : 'link_light'}`}>{menuItem.title}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col_contact_otr">
                            <div className="col_contact_inr">
                                <h4 className={`heading heading-h4 ${location.pathname === '/homepage3' ? 'text_color_dark' : 'text_color_light'}`}>Install Our App</h4>
                                <p className={`text heading-mb ${location.pathname === '/homepage3' ? 'text_color_dark' : 'text_color_light'}`}>From App Store Or Google Play</p>
                                <ul className="app_ul">
                                    <li className="app_li">
                                        <Link to="/" className="app_a">
                                            <img className="app_img" src={playStore} alt="" />
                                        </Link>
                                    </li>
                                    <li className="app_li">
                                        <Link to="/" className="app_a">
                                            <img className="app_img" src={appStore} alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_shape1_otr">
                    <img className="footer_shape1" src={footerShape1} alt="" />
                </div>
                <div className="footer_shape2_otr">
                    <img className="footer_shape2" src={footerShape2} alt="" />
                </div>
                <div className="footer_shape3_otr">
                    <img className="footer_shape3" src={footerShape3} alt="" />
                </div>
                <div className={`footer_shape4_otr ${location.pathname === "/homepage3" ? "" : "d_none"}`}>
                    <img className="footer_shape4" src={footerShape4} alt="" />
                </div>
            </footer>

            <section className="copyright">
                <div className="container">
                    <div className="copyright_inr">
                        <div className="text_otr">
                            <p className="text heading-sm">© Copyright 2024 | Edugen Template | All Rights Reserved</p>
                        </div>
                        <div className="menu_otr">
                            <ul className="menu_ul">
                                {
                                    copyrightMenuData.map((item, index) => (

                                        <li className="menu_li" key={index}>
                                            <Link to={item.path} className="menu_a heading-sm">{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="top_arrow_otr">
                    <Link to="/" className="top_arrow_inr">
                        <ArrowUp className='top_arrow' />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Footer;