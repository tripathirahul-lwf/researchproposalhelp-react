import React from 'react'
import './thankyou.css'
import thankyou from '../images/thankyou.png'

const Thankyou = () => {
    return (
        <>
            <section className="thank">
                <div className="thankyou_img">
                    <img src={thankyou} alt="thanyou" loading='lazy' />
                </div>

                <div className="text-center mb-4">
                    <div className="button" >
                        <a href="https://researchproposalhelp.com/" className="btn-home">GO TO HOMEPAGE</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Thankyou
