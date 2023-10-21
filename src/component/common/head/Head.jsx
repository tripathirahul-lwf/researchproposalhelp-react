import React, { useState, useEffect } from 'react';
import './head.css'
import logoBlack from '../../images/logo/logo.svg'
import logoWhite from '../../images/logo/white-logo.svg'

const Head = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerNavbar = document.querySelector(".navbar-area");
            const sticky = headerNavbar.offsetTop;

            const logo = document.getElementsByTagName('img');

            if (window.pageYOffset > sticky) {
                setIsSticky(true);
                logo[0].src=logoBlack;
            } else {
                setIsSticky(false);
                logo[0].src=logoWhite;
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
                                    <a className="navbar-brand" href="/">
                                        <img src={logoWhite} alt="logo" />
                                    </a>


                                    <button className={`navbar-toggler ${isSticky ? "active" : "mobile-menu-btn active"}`}  type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <a href="/home" className="page-scroll active"
                                                    aria-label="Toggle navigation">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/features" className="page-scroll"
                                                    aria-label="Toggle navigation">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/review" className="page-scroll" aria-label="Toggle navigation">Review</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/FAQs" className="page-scroll" aria-label="Toggle navigation">FAQs</a>
                                            </li>

                                            <li className="nav-item">
                                                <a href="/contact" aria-label="Toggle navigation">Contact</a>
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
