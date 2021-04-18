import React from 'react';
import hall from '../../../images/7825.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    
    {
        name: 'TENET',
        img: hall
        
    },
    {
        name: 'JUSTICE LEAGUE',
        img: hall
    },
    {
        name: '1917',
        img: hall
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>Movies</h5>
                <h2>Latest Watching</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;