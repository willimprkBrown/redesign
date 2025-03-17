import React from 'react';
import './footer.css';
import logo from '../assets/logo.png';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="footer-grid">
                <div className="logo"> 
                    <img src={logo} alt="Logo" className='footer-img' />
                </div>
                <div className="email">
                    <p>info@autonodyne.com</p>
                </div>
                <div className="address">
                    <p>320 Congress Street, 1st Floor, Boston, MA, 02210</p>
                </div>
                <div className="social-media">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;
