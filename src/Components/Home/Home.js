import React, { useEffect, useState } from 'react';
import './Home.css';
import banner from '../../Images/banner.svg'
import { NavLink } from 'react-router-dom';
import Features from '../Features/Features';
import Topcourse from '../Topcourse/Topcourse';
import Offer from '../Offer/Offer';
import Team from '../Team/Team';
import "animate.css";
import Zoom from 'react-reveal/Zoom';

const Home = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('./Feature.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div className="home">
            <div className="background">
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col p-5 mt-5 animate__animated animate__backInLeft">
                            <h1 className="text-white mt-5">Increase Your <span className="text-danger fw-bolder">Skill</span></h1>
                            <h4 className="text-white">By Enrolling Our World Class Courses</h4>
                            <NavLink to="/enroll">
                                <button type="button" className="btn btn-outline-danger mt-3">Enroll Now</button>
                            </NavLink>
                        </div>
                        <div className="col p-5">
                            <img src={banner} className="img-fluid mt-3 animate__animated animate__backInRight" alt="banner"></img>
                        </div>
                    </div>
                </div>
            </div>

            {/* feature part */}
            <div className="container mt-5">
                <Zoom>
                    <div className="row row-cols-1 row-cols-md-4 g-5">
                        {
                            features.map(feature => <Features
                                key={feature.id}
                                feature={feature}></Features>)
                        }
                    </div>
                </Zoom>
            </div>

            {/* top courses part */}
            <Topcourse></Topcourse>

            {/* offer part */}
            <Offer></Offer>

            {/* team part */}
            <Team></Team>

        </div>
    );
};

export default Home;