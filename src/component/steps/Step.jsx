import React from 'react'
import './step.css'

const Step = () => {
    return (
        <>
            <section className="steps section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">Steps</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Order Our Custom Research Proposal Help in Just 3
                                    Easy Steps!
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">You might have witnessed that many research
                                    proposal help websites have too many
                                    formalities to reach on to the final step to make an order. Well, our help with research
                                    proposal comes with an easy to understand 3 step ordering process which barely takes 5
                                    minutes of your time and zero effort!</p>
                            </div>
                        </div>
                    </div>

                    <div className="steps-wrapper">
                        <div className="step-body">
                            <div className="step_div">
                                <div className="l-side red">
                                    <div className="step_number">step</div>
                                    <div className="step_number">01</div>
                                </div>
                                <div className="r-side red-light">
                                    <div className="set-img">
                                        <img src="images/step/form.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="step-title text-center">Fill out the form</div>
                            <p>
                                Details are important for us to create custom research proposals. The first thing that you
                                begin with is writing your heart out and describing what you require from us. If you are
                                facing trouble jotting it down, don't worry! We will arrange a call for you to speak directly to
                                our research proposal writer.
                            </p>
                        </div>
                        <div className="step-body">
                            <div className="step_div">
                                <div className="l-side green">
                                    <div className="step_number">step</div>
                                    <div className="step_number">02</div>
                                </div>
                                <div className="r-side green-light">
                                    <div className="set-img">
                                        <img src="images/step/payment.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="step-title text-center">Make the Payment</div>
                            <p>
                                Once we have understood your requirements, we will quote you a special discounted
                                research proposal price along with multiple payment options to proceed with your
                                payment. As soon as you make the payment, we will confirm your order and begin the
                                process of assigning the best research proposal expert suitable for your work.
                            </p>
                        </div>
                        <div className="step-body">
                            <div className="step_div">
                                <div className="l-side blue">
                                    <div className="step_number">step</div>
                                    <div className="step_number">03</div>
                                </div>
                                <div className="r-side blue-light">
                                    <div className="set-img">
                                        <img src="images/step/solution.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="step-title text-center">Download your research proposal</div>
                            <p>
                                Once we process your order, we make sure to run our special 7-step quality check process
                                to ensure that the deliverables are perfect to submit. As soon as your document is ready, we
                                will provide you the research proposal via email. If there is anything you want us to change
                                then, filling out the revision form will help us understand what changes you want to receive
                                perfect research proposal help.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Step
