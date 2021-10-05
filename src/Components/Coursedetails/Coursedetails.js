import React, { useEffect, useState } from 'react';
import Singledetails from '../Singledetails/Singledetails';
import './Coursedetails.css';

const Coursedetails = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./Allcourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="detail-container">
            <div className="container mt-5 pt-5">
                <h1 className="text-danger text-center fw-bold mb-3">Course Details</h1>
                {
                    courses.map(course => <Singledetails
                        key={course.id}
                        course={course}
                    ></Singledetails>)
                }
            </div>
        </div>
    );
};

export default Coursedetails;