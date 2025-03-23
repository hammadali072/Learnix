import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { CaretDown, ArrowRight, List } from '@phosphor-icons/react';
import { menuData } from '../../Data.js';

import './header.scss';

import BrandLogoDark from '../../assets/brand-logo.png';
import BrandLogoLight from '../../assets/footer-brand-logo.png';

const Header = () => {
    const location = useLocation();

    return (
        <header className={`header ${location.pathname === '/homepage3' ? 'header-relative' : ""}`}>
            <div className="container">
                <div className="header_inr">
                    <div className="logo_main">
                        <Link className="logo_otr" to="/">
                            <img className="logo" src={location.pathname === "/homepage2" ? BrandLogoLight : BrandLogoDark} alt="Brand LOGO" />
                        </Link>
                        <Link className="menu_icon_otr">
                            <List className='icon' weight='bold' />
                        </Link>
                    </div>
                    <nav className="menu_otr">
                        <ul className="menu_ul">
                            {
                                menuData.map((item, index) => (

                                    <li className="menu_li" key={index}>
                                        {
                                            item.dropdown ? (
                                                <>
                                                    <div className="menu_a">
                                                        <p className={`menu_text heading-msb ${location.pathname === "/homepage2" ? "menu-light" : ""}`}>{item.title}</p>
                                                        <CaretDown className={`menu_icon ${location.pathname === "/homepage2" ? "menu-light" : ""}`} weight='bold' />
                                                    </div>
                                                    <div className="dropdown_otr">
                                                        <ul className="dropdown_ul">
                                                            {
                                                                item.dropdown.map((subItem, subIndex) => (
                                                                    <li className="dropdown_li" key={subIndex}>
                                                                        <Link className="dropdown_a heading-ssb" to={subItem.path}>{subItem.title}</Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </>
                                            ) : (
                                                <Link className="menu_a" to={item.path}>
                                                    <p className={`menu_text heading-msb ${location.pathname === "/homepage2" ? "menu-light" : ""}`}>{item.title}</p>
                                                </Link>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="action_otr">
                        <Link className={`trial_btn primary_btn ${location.pathname === "/homepage2" ? "primary_btn2" : "primary_btn"}`} to="/">
                            <p className="button_text">Start Free Trial</p>
                            <ArrowRight className='button_icon' weight='bold' />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
