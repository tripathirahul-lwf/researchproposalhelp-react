import React from 'react'
import './footer.css'
import logo from '../images/logo/logo.png'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="single-footer f-about">
                                    <div className="logo">
                                        <a href="index-2.html">
                                            <img src={logo} alt="#" />
                                        </a>
                                    </div>
                                    <ul className='social-icon'>
                                        <li><i class="fa-brands fa-facebook-f"></i></li>
                                        <li><i class="fa-brands fa-twitter"></i></li>
                                        <li><i class="fa-brands fa-instagram"></i></li>
                                        <li><i class="fa-brands fa-linkedin-in"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-6 col-md-8 col-12">
                                <div className="single-footer f-link">
                                    <h3>Contact us</h3>
                                    <ul>
                                        <li><span><i className="fa-solid fa-phone-volume"></i></span><a href="tel:+61488896118">+61 4888 96 118</a></li>
                                        <li><span><i className="fa-solid fa-envelope"></i></span><a href="mailto:help@learnwithfraternity.com">help@researchproposalhelp.com</a></li>
                                        <li><span><i className="fa-solid fa-location-dot"></i></span><a >Endeavour Hills Victoria, Australia PO Box: 3802</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="copy text-center mt-3 mb-3">
                        Copyright © 2010-{currentYear} |researchproposalhelp.com | All rights reserved.
                    </div>
                </div>
            </footer>
            <div className="disc text-center">
                <strong>Disclaimer : </strong> <span>All materials on researchproposalhelp.com, including academic assignments, essays, and papers, are intended for reference purposes. We do not endorse plagiarism. Users should use these materials solely for their own writing.</span>
            </div>
        </>
    )
}

export default Footer
