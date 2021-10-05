import React from 'react';
import './About.css';
import about from '../../Images/about.svg';
import points from '../../Images/points.svg';
import "animate.css";

const About = () => {
    return (
        <div>
            <div className="about-background">
                <div className="container mt-5 pt-5 h-auto">
                    <div className="row">
                        <div className="col p-5 animate__animated animate__zoomInLeft">
                            <h1 className="text-dark mt-5">About Our <span className="text-danger fw-bolder">Academy</span></h1>
                            <h4 className="text-dark">Top Skill development academy in the world.</h4>
                            <p>Welcome to one of the top ranking skill gaining academy in the world. We have international standerd courses for you. By enrolling these courses, you can easily gain your valuable skill.</p>
                        </div>
                        <div className="col p-5">
                            <img src={about} className="img-fluid mt-5 animate__animated animate__zoomInRight" alt="about"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-background">
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col p-5">
                            <img src={points} className="img-fluid animate__animated animate__zoomInLeft" alt="about"></img>
                        </div>
                        <div className="col p-5 animate__animated animate__zoomInRight">
                            <h1 className="text-dark">Know More about our <span className="text-danger fw-bolder">Academy</span></h1>
                            <div className="accordion mt-3 border-0 rounded-3 shadow-lg" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button text-danger fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Company Details
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed text-danger fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Academy Information
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed text-danger fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Legal Information
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;