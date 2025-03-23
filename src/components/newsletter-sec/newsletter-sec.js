import React from 'react';
import { Link } from 'react-router-dom';
import { Envelope } from '@phosphor-icons/react';

import './newsletter-sec.scss';

import newsletterIcon from '../../assets/newsletter-icon.png';

const NewsletterSec = () => {
    return (
        <section className="newsletter_ctae">
            <div className="container">
                <div className="newsletter_inr">
                    <div className="row">
                        <div className="col_content_otr">
                            <div className="col_content_inr">
                                <div className="icon_otr">
                                    <img className="icon" src={newsletterIcon} alt="NewsLetter Icon" />
                                </div>
                                <h3 className="heading heading-h3">Enter Your email To Subscribe Our Newsletter</h3>
                            </div>
                        </div>
                        <div className="col_input_otr">
                            <div className="col_input_inr">
                                <div className="input_otr">
                                    <input className="mail_input input" type="email" name="email" id="email"
                                        placeholder="Write your email" required />
                                </div>
                                <div className="action_otr">
                                    <Link className="subscribe_btn primary_btn" to="/">
                                        <p className="button_text">Subscribe</p>
                                        <Envelope className='button_icon' weight='fill' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSec
