import React from 'react'
import './feature.css'
import customer from "../images/icons/customer-service.png";
import authentic from "../images/icons/authentic.png"
import secure from "../images/icons/handshake.png"

const Feature = () => {
    return (
        <>
            <section className="content section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">Features</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">How Do We Provide the Best Help with Research
                                    Proposal?
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Our research proposal writing service promises you
                                    three things that ensure we turn out
                                    the best every time we deliver an order!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="feature_box">

                            <div className="single-feature-box wow fadeInUp" data-wow-delay=".2s">
                                <i>
                                    <img src={customer} alt="" />
                                </i>
                                <h3>24/7 Availability</h3>
                                <p>No matter when you wish to reach out to us, our research proposal experts are here to
                                    assist you 24/7. Even if you are seeking research proposal writing help from across borders, we are
                                    round the clock available to listen to your queries.</p>
                            </div>



                            <div className="single-feature-box wow fadeInUp" data-wow-delay=".4s">
                                <i>
                                    <img src={authentic} alt="" />
                                </i>
                                <h3>100% Authenticity </h3>
                                <p>If you need research proposal writing help and choose us for assistance, our Ph.D. research
                                    proposal experts will ensure to deliver the content that is 100% plagiarism free. To ensure
                                    authenticity, we run your research proposals through multiple plagiarism and AI detection
                                    tools and manual quality checks. </p>
                            </div>



                            <div className="single-feature-box wow fadeInUp" data-wow-delay=".6s">
                                <i>
                                    <img src={secure} alt="" />
                                </i>
                                <h3>200% Reliability</h3>
                                <p>Offering a transparent ordering process along with the option to make a payment through
                                    the payment mode you are comfortable with, we ensure that you feel at home when
                                    seeking professional research proposal help from our services. If there is anything you need
                                    to know, we offer you a live chat session with our research proposal helper so that you can
                                    get all your doubts cleared before seeking help from us!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
