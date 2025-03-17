import React, { useState } from 'react';
import './header.css';
import extendedLogo from '../assets/logoExtended.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else if (latest < previous - 50) {
            setHidden(false);
        }
    });

    return (
        <motion.header 
            className="header-container"
            initial={{ y: 0 }}
            animate={hidden ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
        >
            <div className="header-grid">
                <div className="logo">
                    <a href="#home">
                        <img src={extendedLogo} alt="Logo" className="header-img" />
                    </a>
                </div>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <ul id="navbar">
                        <li><a href="#home" onClick={() => setIsOpen(false)}>Solutions</a></li>
                        <li><a href="#career" onClick={() => setIsOpen(false)}>Careers</a></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
