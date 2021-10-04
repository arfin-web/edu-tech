import React from 'react';
import { NavLink } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
        <div>
            <div className="container mt-5 pt-5">
                <div className="mt-5 pt-5 text-center">
                    <h1 className="text-danger text-center fw-bolder">4<span className="text-dark">0</span>4</h1>
                    <h1 className="text-danger fw-bolder text-center">Not Found</h1>
                    <NavLink to="" className="text-center">
                        <button type="button" class="btn btn-outline-danger mt-4">Go To Home</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Notfound;