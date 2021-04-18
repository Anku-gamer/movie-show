import React from 'react';

const TestimonialInfo = ({ review }) => {
    return (
        <div className="card shadow-sm">
            


            <div className="card-header d-flex  align-items-center">


                    <img className="me-3" src={review.imageURL} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{review.name}</h6>

                        <p className="m-0">{review.place}</p>
                    </div>
                </div>
                <div className="card-body">
                <small>{review.review}</small>
                </div>
            </div>
    );
};

export default TestimonialInfo;