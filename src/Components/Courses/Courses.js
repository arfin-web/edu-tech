import React, { useEffect, useState } from 'react';
import Singlecourse from '../Singlecourse/Singlecourse';
import './Courses.css';

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
                <div className="row row-cols-1 row-cols-md-4 g-3 mt-2">
                    {
                        allCourse.map(singleCourse => <Singlecourse
                            key={singleCourse.id}
                            singleCourse={singleCourse}></Singlecourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;