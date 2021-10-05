import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Singlecourse from '../Singlecourse/Singlecourse';
import './Courses.css';
import Zoom from 'react-reveal/Zoom';

const Courses = () => {
    const [allCourse, setAllCourse] = useState([]);

    useEffect(() => {
        fetch('./Allcourses.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])
    return (
        <div className="courses-container">
            <div className="container mt-5 pt-3">
                <h1 className="text-danger fw-bold text-center mt-5">All Courses</h1>
                <NavLink to="/course">
                    <button type="button" className="btn btn-danger">See Course Details</button>
                </NavLink>
                <Zoom>
                    <div className="row row-cols-1 row-cols-md-4 g-3 mt-2">
                        {
                            allCourse.map(singleCourse => <Singlecourse
                                key={singleCourse.id}
                                singleCourse={singleCourse}></Singlecourse>)
                        }
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Courses;