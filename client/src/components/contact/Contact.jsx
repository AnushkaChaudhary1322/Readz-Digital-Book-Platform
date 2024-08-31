import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
    
    return (
        <div className="bg-style">
            <Header />
            <div className="banner-container contact-banner">
                <img className="banner-gif" src="/ContactBanner.gif" alt="Banner GIF" />
            </div>
            <section className='contacts'>
                <div className='container-contact'>
                    <div className='left row'>
                        <iframe src={map} className='contact-map'></iframe>
                    </div>
                    <div className='right row'>
                        <div className='contact-section-heading'>
                            <h2>Contact us</h2>
                        </div>
                        <p className='contact-para'>We're open for any suggestion or just to have a chat</p>

                        <div className="contact-info">
                            <div className="info-item">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>198 Someplace, 21th AnyStreet, Suite 721 Somewhere 10016</span>
                            </div>
                            <div className="info-item">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>info@readz.com</span>
                            </div>
                            <div className="info-item">
                                <FontAwesomeIcon icon={faPhone} />
                                <span>+91 987 654 3210</span>
                            </div>
                        </div>

                        <form>
                            <div className='contact-text-info'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                                <input type='text' placeholder='Subject' className='contact-text-info' />
                            <textarea cols='30' rows='10' placeholder='Create a message here...' className='contact-text-info'></textarea>
                            </div>
                            
                            <button className='contact-btn'>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
