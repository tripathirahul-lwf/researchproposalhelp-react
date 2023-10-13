import React from 'react'
import './cta.css'

const Cta = () => {
    return (
        <>
            <section className="our-achievement section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
                            <div className="title">
                                <h2>Trusted by developers from over 80 planets</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
                                        <h3 className="counter"><span id="secondo1" className="countup" cup-end="100">100</span>%</h3>
                                        <p>satisfaction</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                                        <h3 className="counter"><span id="secondo2" className="countup" cup-end="120">120</span>K</h3>
                                        <p>Happy Users</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                                        <h3 className="counter"><span id="secondo3" className="countup" cup-end="125">125</span>k+</h3>
                                        <p>Downloads</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta
