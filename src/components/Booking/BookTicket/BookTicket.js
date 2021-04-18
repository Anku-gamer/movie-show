import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        id: 1,
        subject: 'TENET',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 100
    },
    {
        id: 2,
        subject: 'GODZILLA VS KONG',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 100
    },
    {
        id: 3,
        subject: 'EXTRACTION',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 100
    },
    {
        id: 4,
        subject: 'AQUAMAN',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 100
    },
    {
        id: 5,
        subject: 'JUSTICE LEAGUE',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 100
    },
    {
        id: 6,
        subject: 'WONDER WOMAN 84',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 100
    }
]
const BookTicket = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-black mb-5">Available Bookings on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookTicket;