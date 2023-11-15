import React from 'react'
import './banner.css'
import Form from '../form/Form'

const Banner = () => {
    return (
        <>
            <section id="home" className="hero-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="hero-content">
                                <h1>Research Proposal Help By Ph.D. Experts</h1>
                                <p>Well-researched and well-structured Ph.D. research proposal help delivered by experts
                                    online.</p>
                                <div className="button" >
                                    <a href="https://api.whatsapp.com/send?phone=61488896118&text=I%20Need%20Help!!" className="btn">Connect with expert</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="banner_form">
                                <h2 className="form_title text-center">
                                    Get Help
                                </h2>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
