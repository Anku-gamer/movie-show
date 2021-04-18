import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import BookingHeader from '../BookingHeader/BookingHeader';
import BookTicket from '../BookTicket/BookTicket';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <BookingHeader handleDateChange={handleDateChange}></BookingHeader>
            <BookTicket date={selectedDate}></BookTicket>
            <Footer></Footer>
        </div>
    );
};

export default Booking;