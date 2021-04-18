import React from 'react';
import BookingShortList from '../BookingShortList/BookingShortList';

const BookingByDate = ({ bookings }) => {
    console.log(bookings);
    return (
        <div>
            <h2 className="text-brand text-center">Bookings</h2>
            {
                bookings.length ?
                <BookingShortList bookings={bookings}></BookingShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Bookings for this Date</h4>
                </div>
            }
        </div>
    );
};

export default BookingByDate;