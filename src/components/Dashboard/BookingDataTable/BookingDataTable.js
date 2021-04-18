import React from 'react';

const BookingDataTable = ({bookings}) => {
    
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Gender</th>
                <th className="text-secondary" scope="col">Age</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  bookings.map((booking, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{booking.name}</td>
                        <td>{booking.gender}</td>
                        <td>{booking.age}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookingDataTable;