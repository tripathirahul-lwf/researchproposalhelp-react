import React from 'react'
import './footer.css'

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
                                            <img src="images/logo/white-logo.svg" alt="#" />
                                        </a>
                                    </div>
                                    <p>Making the world a better place through constructing elegant hierarchies.</p>
                                    {/* <ul className="social">
                                        <li><a href="/"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="/"><i className="lni lni-twitter-original"></i></a></li>
                                        <li><a href="/"><i className="lni lni-instagram"></i></a></li>
                                        <li><a href="/"><i className="lni lni-linkedin-original"></i></a></li>
                                        <li><a href="/"><i className="lni lni-youtube"></i></a></li>
                                        <li><a href="/"><i className="lni lni-pinterest"></i></a></li>
                                    </ul> */}

                                </div>

                            </div>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-6 col-md-8 col-12">
                                <div className="single-footer f-link">
                                    <h3>Contact us</h3>
                                    <ul>
                                        <li><a href="/">Marketing</a></li>
                                        <li><a href="/">Analytics</a></li>
                                        <li><a href="/">Commerce</a></li>
                                        <li><a href="/">Insights</a></li>
                                        <li><a href="/">Promotion</a></li>
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
