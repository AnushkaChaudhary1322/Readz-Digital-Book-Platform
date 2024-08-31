import React from 'react';
import './footer.css'; 
// import logo from '../../../public/logo-nav.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Footer = () => {
  return (


        <div className="footer-about-us-container">
          <div className="footer-about-us-text">

          <div className="footer-about-secondcolumn">
              
                <div className='footer-logo-div'>
                  <img src='\logo-nav.png' alt="Readz-logo" className="logo-light" />
                </div>
                
              
              <div className="footer-follow-icons">
            <div className="footer-about-icon-container">
              <ul>
                <li className="instagram"><i className="fa-brands fa-instagram icon1 icon"></i></li>
                <li className="twitter"><i className="fa-brands fa-twitter icon2 icon"></i></li>
                <li className="youtube"><i className="fa-brands fa-youtube icon3 icon"></i></li>
                <li className="facebook"><i className="fa-brands fa-facebook icon4 icon"></i></li>
              </ul>
            </div>
              </div>

            </div>

            <div className="footer-about-firstcolumn">
              <h2>Our Facilities</h2>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Discover</li>
                <li>Library</li>
                <li>Write Your Story</li>
              </ul>
            </div>

            <div className="footer-about-thirdcolumn">
              <h2>Contact Us</h2>
              <ul>
                <li><i className="fa-solid fa-mobile"></i>&emsp;<span>Phone:</span>&emsp;+919876543210</li>
                <li><i className="fa-solid fa-phone"></i>&emsp;<span>Landline:</span>&emsp;(011)-2xxx-xxxx</li>
                <li><i className="fa-solid fa-envelope"></i>&emsp;<span>Email:</span>&emsp;info@readz.com</li>
              </ul>
            </div>
          </div>

          <div className="Terms-and-conditions">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          
        </div>
  );
};

export default Footer;
