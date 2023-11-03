import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './review.css'

const Review = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <section className="testimonials section" id="review">
                <img className="testi-patern1" src="images/testimonial/testi-patern.svg" alt="#" />
                <img className="testi-patern2" src="images/testimonial/testi-patern.svg" alt="#" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">Review</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">What 58932+ Students Have to Say About Our
                                    Academic Research Proposal Services
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <div className="post-content">
                                <p className="post-description">"My deadline to submit the research proposal was literally one
                                    week from the time I
                                    realized it was too late for me to keep on holding the writer's block. It was a Ph.D.
                                    research proposal so couldn't take the risk at all. After careful analysis and
                                    consideration, I came across this website and thought it would be the best bet! The
                                    most amazing thing I love about their research proposal services is that they
                                    constantly keep you updated and ask for every single detail instead of adding general
                                    statements."</p>
                            </div>
                        </div>
                        <div>
                            <div className="post-content">
                                <p className="post-description">"Me and my best friend Sudha had a terrible month and wanted to
                                    hire a professional
                                    research proposal writer for help as our submission date was in 2 weeks. As we had
                                    skipped so many classes, we had no idea how to write a research proposal. We
                                    found Research Proposal Help as soon as we searched can I pay someone to do my
                                    research proposal? We talked to the research proposal experts and they made
                                    everything sound so easy at affordable prices. Glad to have found them!"</p>
                            </div>
                        </div>
                        <div>
                            <div className="post-content">
                                <p className="post-description">"I used to hate sociology and one day my professor gave all of
                                    us a month to prepare
                                    research proposals. At first, I was procrastinating but then, of course, I did not want
                                    to fail so I began looking for professional writers to do my research proposal. My
                                    cousin who has used them recommended them to me and I told them everything I
                                    needed. They gave my proposal on time and it got approved on the second day of
                                    submission. So, all of them it is a must-try!!"</p>
                            </div>
                        </div>
                        <div>
                            <div className="post-content">
                                <p className="post-description">"I had been struggling to write my research proposal for quite
                                    some time and
                                    required an authentic professional to help me out. I found out about this Research
                                    Proposal Help Website from a friend and am glad to say that I got the best my first
                                    time. Will definitely recommend them to others as well."</p>
                            </div>
                        </div>

                    </Slider>
                </div>
            </section>

        </>
    )
}

export default Review
