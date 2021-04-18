import React from 'react';
import { Link } from 'react-router-dom';
import couple from '../../../images/couple.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: 'white'}}>Cinematic Experience <br/> Starts Here</h1>
                <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/booking" className="btn btn-brand">Book Here</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={couple} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;