import React from 'react';
import "animate.css";

const Enroll = () => {
    return (
        <div className="enroll-container">
            <div className="container mt-5 pt-5 animate__animated animate__slideInDown">
                <h3 className="text-danger fw-bold mb-3">Fill the form to enroll our courses</h3>
                <hr />
                <form className="row g-3 mt-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label text-danger fw-bold">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label text-danger fw-bold">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label fw-bold text-danger">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label text-danger fw-bold">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label fw-bold text-danger">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label text-danger fw-bold">State</label>
                        <select id="inputState" className="form-select">
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label fw-bold text-danger">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputState" className="form-label text-danger fw-bold">Choose Course</label>
                        <select id="inputState" className="form-select">
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label text-danger fw-bold" htmlFor="gridCheck">
                                I agree
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-danger">Enroll</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Enroll;