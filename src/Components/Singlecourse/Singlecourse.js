import React from 'react';
import { NavLink } from 'react-router-dom';

const Singlecourse = (props) => {
    const { name, description, image } = props.singleCourse;
    return (
        <div>
            <div className="col">
                <div className="card border-0 rounded-3 shadow-lg">
                    <img src={image} className="card-img-top img-fluid" alt="feature" />
                    <div className="card-body">
                        <h5 className="card-title text-danger fw-bold">{name}</h5>
                        <p className="card-text">{description}</p>
                        <NavLink to="/enroll">
                            <button type="button" className="btn btn-outline-danger me-2">Enroll</button>
                        </NavLink>
                        <button type="button" className="btn btn-danger">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlecourse;