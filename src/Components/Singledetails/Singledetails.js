import React from 'react';
import './Singledetails..css';
import Zoom from 'react-reveal/Zoom';

const Singledetails = (props) => {
    const { name, description, image } = props.course

    return (
        <div>
            <Zoom>
                <div className="card mb-3 my-5 border-0 rounded-3 shadow-lg">
                    <div className="row g-0">
                        <div className="col-md-4 overflow-hidden">
                            <img src={image} className="img-fluid rounded-start" alt="detail" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Singledetails;