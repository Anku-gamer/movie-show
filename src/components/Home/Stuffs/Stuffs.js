import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Stuff from '../Stuff/Stuff';
const Stuffs = () => {
    const [tickets, settickets] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/tickets')
        .then(res => res.json())
        .then(data => settickets(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Upcoming Movies</h5>
                <div className="row">
                    {
                     tickets.map(ticket =><Stuff key={ticket._id} ticket={ticket} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Stuffs;