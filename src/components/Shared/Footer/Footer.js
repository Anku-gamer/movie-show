import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const cinePlex = [
        {name: "FAQ" , link: "/emergency"},
        {name: "Investor Relation" , link: "/relation"},
        {name: "Privacy" , link: "/privacy"},
        {name: "Speed Test" , link: "/test"}
    ]
    const ourAddress = [
        {name: "Dhanmondi, Dhaka" , link: "//google.com/map"},
        {name: "Bangladesh" , link: "//google.com/map"}
       
    ]
    const services = [
        {name: "Help Center" , link: "/help"},
        {name: "Jobs" , link: "/jobs"},
        {name: "Term and conditions" , link: "/t&c"},
        {name: "Cineplex Bangladesh" , link: "/cineplex"}
    ]

    const social =[
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={""} menuItems={cinePlex}/>
                    <FooterCol key={2} menuTitle="" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}>
                    </FooterCol>
                    <FooterCol key={4} menuTitle="Social Link"  menuItems={social}>
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-primary">Contact Us</h6>
                            <button className="btn btn-brand">+12345678</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <p> © Copyright {(new Date()).getFullYear()} <br></br>All Rights Reserved.</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;