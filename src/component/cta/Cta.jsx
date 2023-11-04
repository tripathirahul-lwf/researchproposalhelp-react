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
                                <h2>More Than 50,000 Students Use Our Research Proposal Writing Services Annually!</h2>
                                <p>Offering a comprehensive ordering process and timely delivery, our research proposal
                                    experts make sure to keep all our customers happy. In the past year, we successfully served
                                    more than 50,000 students with a success rate of 96.84%. So, try us out today and discover
                                    why this many students took help from us in the past year!</p>
                            </div>
                        </div>
                        <div className=" chatBtn" data-wow-delay=".6s">
                            <div className="button " data-wow-delay=".8s">
                                <a href="https://api.whatsapp.com/send?phone=61488896118&text=I%20Need%20Help!!" className="btn">Get Help</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Cta
