import React from 'react'
import './services.css'
import graduate from "../images/icons/graduate.png"
import seo from "../images/icons/seo.png"
import badge from "../images/icons/badge.png"
import revision from "../images/icons/revision.png"
import delivery from "../images/icons/deliver.png"





const Services = () => {
    return (
        <>
            <section id="features" className="features section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">Services</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">How Do We Provide the Best Research Proposal Writing Service?
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Our research proposal writing services offer five
                                    exclusive features that no one else can
                                    guarantee you!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="box_container">

                            <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                                <i>
                                    <img src={graduate} alt="img" />
                                </i>
                                <h3>Ph.D. Experts</h3>
                                <p>If you are wondering how to write a research proposal and can't get past the thought of
                                    it,
                                    we are here to help you with Ph.D. experts. </p>
                            </div>
                            <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                                <i>
                                    <img src={seo} alt="" />
                                </i>
                                <h3>Custom Research Proposals</h3>
                                <p>Our custom research proposals are meticulously crafted to align with the unique
                                    specifications and objectives of each client, ensuring a tailored approach that
                                    precisely
                                    addresses their research needs. </p>
                            </div>
                            <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                                <i>
                                    <img src={badge} alt="" />
                                </i>
                                <h3>7-Step Quality Check</h3>
                                <p>Our research proposal experts believe in providing 100% accuracy and ensure to follow a
                                    7-
                                    step quality check process in order to deliver you an immaculate research proposal!
                                </p>
                            </div>
                            <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                                <i>
                                    <img src={revision} alt="" />
                                </i>
                                <h3>Free Unlimited Revisions</h3>
                                <p>Although we ensure to assign you the best Ph.D. research proposal writers, mistakes can
                                    happen to anyone! To submit a perfect document to your professor, we provide all our
                                    customers with free unlimited revisions.</p>
                            </div>
                            <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                                <i>
                                    <img src={delivery} alt="" />
                                </i>
                                <h3>Instant Research Proposal Delivery</h3>
                                <p>Have fewer days to submit your final research proposal? We can help you by creating a
                                    custom research proposal as quickly as possible!</p>
                            </div>
                            {/* <div className="single-feature chatBtn" data-wow-delay=".6s">
                                <h3 className='text-center'>If you want to any Help regarding your Assignment</h3>
                                <div className="button chat wow fadeInLeft" data-wow-delay=".8s">
                                    <a href="https://api.whatsapp.com/send?phone=61488896118&text=I%20Need%20Help!!" className="btn chat">Click Here</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
