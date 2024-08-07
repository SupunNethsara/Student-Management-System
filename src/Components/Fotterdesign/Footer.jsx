import React from 'react';
import './Footer.css'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <p>University of Colombo School of Computing (UCSC) is a leading computing institution in Sri Lanka.</p>
                    <img src="src/assets/ucsc-logo.png" alt="" className="imgp" />
                </div>
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About UCSC</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/admissions">Admissions</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <p>Email: info@ucsc.lk</p>
                    <p>Phone: +94 11 2581245</p>
                    <p>Address: 35 Reid Avenue, Colombo 07, Sri Lanka</p>
                </div>
                <div className="footer-column">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><TwitterIcon /></a>
                        <a href="#"><LinkedInIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 UCSC. All Rights Reserved.</p>
                
            </div>
        </footer>
    );
}

export default Footer;
