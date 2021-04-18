import React from 'react';
import couple from '../../../images/couple.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingHeader.css';

const BookingHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center book-container">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: 'white' }}>Booking</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={couple} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default BookingHeader;