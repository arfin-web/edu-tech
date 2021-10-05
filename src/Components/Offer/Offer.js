import React from 'react';
import { NavLink } from 'react-router-dom';
import offer from '../../Images/offer.svg';
import Zoom from 'react-reveal/Zoom';

const Offer = () => {
    return (
        <div className="container">
            <Zoom>
                <div className="bg-dark p-5 rounded-3 shadow-lg">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-white fw-bold mt-5 pt-5">Great Offer For <span className="text-danger">Today</span></h1>
                            <NavLink to="/enroll">
                                <button type="button" className="btn btn-outline-danger mt-3">Grab Now</button>
                            </NavLink>
                        </div>
                        <div className="col">
                            <img src={offer} className="img-fluid" alt="offer" />
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Offer;