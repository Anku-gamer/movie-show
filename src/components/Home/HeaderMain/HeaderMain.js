import React from 'react';
import { Link } from 'react-router-dom';
import couple from '../../../images/couple.jpg';
import {useSpring, animated} from 'react-spring';

const HeaderMain = () => {
    const props = useSpring({
        to: [{opacity: 10, color: '#ffaaee'}, {opacity: 10, color: 'rgb(14,26,19)'}],
        from: {opacity: 0.1, color: 'red'}
      })
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: 'white'}}>Cinematic Experience <br/> Starts Here</h1>
                <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/booking" className="btn btn-brand"><animated.h1 style={props}>Book Now</animated.h1></Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={couple} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;