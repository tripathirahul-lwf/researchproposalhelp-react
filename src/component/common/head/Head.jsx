import React, { useState, useEffect } from 'react';
import './head.css'
import logoWhite from '../../images/logo/logo.png'

const Head = () => {
    const closeNav = () => {
        let a = document.getElementById('navButton')
        a.classList.add('collapsed')
        let b = document.getElementById('navbarSupportedContent')
        b.classList.remove('show')
      };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerNavbar = document.querySelector(".navbar-area");
            const sticky = headerNavbar.offsetTop;
            if (window.pageYOffset > sticky) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`navbar-area ${isSticky ? 'sticky' : 'header'}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="nav-inner">
                                <nav className="navbar navbar-expand-lg" >
                                    <a className="navbar-brand" href="#">
                                        <img src={logoWhite} alt="logo" loading='lazy'/>
                                    </a>
                                    <button button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation" id= "navButton">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <a href="#home"  onClick={closeNav}>Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#services"  
                                                     onClick={closeNav}>Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#review"   onClick={closeNav}>Review</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#FAQs"  onClick={closeNav}>FAQs</a>
                                            </li>

                                            <li className="nav-item">
                                                <a href="#footer"  onClick={closeNav}>Contact us</a>
                                            </li>

                                        </ul>
                                    </div>

                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Head
