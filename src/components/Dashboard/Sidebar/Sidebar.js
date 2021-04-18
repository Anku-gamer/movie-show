import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/booking" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Booking</span>
                    </Link>
                </li>
                <li>
                    <Link to="/feedback" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Feedback</span>
                    </Link>
                </li>

                {isAdmin && <div>
                    <li>
                        <Link to="/allBookings" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>All Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addStuff" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Movie</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    </div>}
                    <div>

                        <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                    </div>
                
            </ul>

        </div>
    );
};

export default Sidebar;