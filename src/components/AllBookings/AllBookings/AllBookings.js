import React, { useEffect, useState } from 'react';
import BookingDataTable from '../../Dashboard/BookingDataTable/BookingDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllBookings = () => {
    const [bookings, Setbookings] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-shelf-09145.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => Setbookings(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Bookings</h5>
                <BookingDataTable bookings={bookings} />
            </div>
        </div>
    );
};

export default AllBookings;