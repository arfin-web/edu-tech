import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><h2 className="text-danger fw-bolder">Skill<span className="text-white">Pick</span></h2></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white fw-bold fs-5" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold fs-5" to="/courses">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white fw-bold fs-5" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/enroll">
                                    <button type="button" className="btn btn-danger text-white fw-bold">Enroll Now</button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;