import React from 'react';
import './Features.css';

const Features = (props) => {
    const { name, description, image } = props.feature;
    return (
        <div>
            <div className="col">
                <div className="card feature-box border-0 rounded-3 shadow-lg">
                    <img src={image} className="card-img-top img-fluid" alt="feature" />
                    <div className="card-body">
                        <h5 className="card-title text-danger fw-bold">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;