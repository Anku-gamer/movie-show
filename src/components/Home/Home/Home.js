import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Stuffs from '../Stuffs/Stuffs';
import MakeBooking from '../MakeBooking/MakeBooking';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeBooking></MakeBooking>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Stuffs></Stuffs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;