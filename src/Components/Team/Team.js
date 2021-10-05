import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import Rotate from 'react-reveal/Rotate';

const Team = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('./Members.json')
            .then(res => res.json())
            .then(data => setMembers(data))

    }, [])

    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-danger text-center fw-bold mb-5">Our Mentors</h1>
                <Rotate>
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        {
                            members.map(member => <Member
                                key={member.id}
                                member={member}
                            ></Member>)
                        }
                    </div>
                </Rotate>
            </div>
        </div>
    );
};

export default Team;