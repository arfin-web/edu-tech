import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Bounce from 'react-reveal/Bounce';

const Topcourse = (props) => {
    const [topCourse, setTopCourse] = useState([]);

    useEffect(() => {
        fetch('./Topcourse.json')
            .then(res => res.json())
            .then(data => setTopCourse(data))
    }, [])

    return (
        <div>
            <div className="container mt-5 mb-3">
                <h1 className="text-danger fw-bold text-center mb-4">Top Courses</h1>
                <Bounce>
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {
                            topCourse.map(course => <Course
                                key={course.id}
                                course={course}></Course>)
                        }
                    </div>
                </Bounce>
            </div>
        </div>
    );
};

export default Topcourse;