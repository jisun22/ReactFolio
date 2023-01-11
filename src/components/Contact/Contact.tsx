import React from 'react';
import './Contact.css';
import { contactInfo } from '../../portfolio';
import Social from '../Social/Social';

function Contact() {
    return (

        <section className="section--contact" id="contact">

            <div className="contact-title">
                <p>{contactInfo.title}</p>
            </div>
            <div className="inner">
                
                <div className="profile-img">
                    <img src={require("../../assets/your photo.png")} alt="profile" />
                </div>
                <div className="wrapper-inner">
                    <div className="contact-subtitle">
                        <p>{contactInfo.subTitle}</p>
                    </div>
                    <div className="contact-introduce">
                        <p>{contactInfo.introduce}</p>
                    </div>
                    <div className="social-links">
                        <Social />
                    </div>
                </div>
                
            </div>
        </section>
    );
}
export default Contact;