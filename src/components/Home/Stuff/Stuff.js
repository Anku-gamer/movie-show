import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Stuff = ({ticket}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
        {
            ticket.image ? <img style={{height: '100px'}} src={`data:image/png;base64,${ticket.image.img}`}/>
            :
            <img style={{height: '100px'}} className="img-fluid mb-3" src={`http://localhost:5000/${ticket.img}`} alt=""/>
        }
            <h4>{ticket.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio modi non eaque qui odit explicabo culpa hic aspernatur, alias nulla, amet ab voluptate, aliquid necessitatibus inventore temporibus voluptas? Saepe, nesciunt.</p>
            <div className="form-group text-center">
            <Link to="/booking" className="btn btn-brand">Book Here</Link>
                </div>
        </div>
    );
};

export default Stuff;