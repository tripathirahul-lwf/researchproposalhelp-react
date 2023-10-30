import React from 'react'
import './footer.css'
import logo from '../images/logo/white-logo.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">

                                <div className="single-footer f-about">
                                    <div className="logo">
                                        <a href="index-2.html">
                                            <img src={logo} alt="#" />
                                        </a>
                                    </div>
                                    <p>Making the world a better place through constructing elegant hierarchies.</p>
                                 

                                </div>

                            </div>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-6 col-md-8 col-12">
                                <div className="single-footer f-link">
                                    <h3>Contact us</h3>
                                    <ul>
                                        <li><span><i className="fa-solid fa-phone-volume"></i></span><a href="/">+91 7054203297</a></li>
                                        <li><span><i class="fa-solid fa-envelope"></i></span><a href="/">help@researchproposalhelp@gmail.Com</a></li>
                                        <li><span><i class="fa-solid fa-location-dot"></i></span><a href="/">1,2 street xyz</a></li>                                       
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
