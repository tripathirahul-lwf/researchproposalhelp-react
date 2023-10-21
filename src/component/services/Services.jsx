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
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Get Quality Research Proposals with Exclusive
                                    Features
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
                            <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                                <i>
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671V12.5Zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171ZM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5Zm9-7.5c2.123 0 4.086-.415 5.47-1.107C18.539 8.358 19 7.813 19 7.5c0-.313-.461-.858-1.53-1.393C16.086 5.415 14.123 5 12 5c-2.123 0-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5c0 .313.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10Z">
                                        </path>
                                    </svg>
                                </i>
                                <h3>Database Backups</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of
                                    a page at its layout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
