import React from 'react'
import logo from './img/logo2.png'
import app from './img/pay/app.jpg'
import play from './img/pay/play.jpg'
import pay from './img/pay/pay.png'
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <div>
        <footer className="section-p1">
    <div className="col">
        <img className="logo" src={logo} alt=""/>
        <h4>Contact</h4>
        <p><strong> Address: </strong> VIT Bhopal </p>
        <p><strong> Phone: </strong>+91/0 75 6025 4500 / 501 / 502 </p>
        <p><strong> Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
    
        <div className="follow">
             <h4>Follow us</h4>
             <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-youtube"></i>

             </div>
        </div>
    </div>

    <div className="col">
        <h4>About</h4>
        <Link to="/about">About us</Link>
        <Link to="/cart">Delivery Information</Link>
        <Link to="/shop">Privacy Policy</Link>
        <Link to="/">Terms & Conditions</Link>
        <Link to="/contact">Contact Us</Link>

    </div>

    <div className="col">
        <h4>My Account</h4>
        <Link to="/cart">Sign In</Link>
        <Link to="/cart">View Cart</Link>
        <Link to="/cart">My Wishlist</Link>
        <Link to="/cart">Track My Order</Link>
        <Link to="/shop">Help</Link>

    </div>


    <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
            <img src={app} alt=""/>
            <img src={play} alt=""/>
        </div>
        <p>Secured Payment Gateways</p>
        <img src={pay} alt=""/>

    </div>

    <div className="copyright">
        <p>@ Since 2022, Keshav Somani The E - Commerce Platform</p>
    </div>


</footer>
    </div>
  )
}
