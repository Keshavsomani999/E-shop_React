import React from 'react'
import Iframe from 'react-iframe'

export default function ContactDetails() {
    const src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57694.26648910432!2d74.59671667557913!3d25.34141641016845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2368c070a55%3A0xc92f70a42dcb5294!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1672850628790!5m2!1sen!2sin"
    
    return (
    <div>
        <section id="contact-details" className="section-p1">
    
    <div className="details">
        <span>GET IN TOUCH</span>
        <h2>Visit one of our agency locations or contact us today</h2>
        <h3>Head office</h3>
        <div>
            <li>
                <i className="far fa-map"></i>
                <p>17/12 Nehru Vihar Bhilwara, Rajasthan</p>
            </li>
            <li>
                <i className="far fa-envelope"></i>
                <p>17/12 Nehru Vihar Bhilwara, Rajasthan</p>
            </li>
            <li>
                <i className="fas fa-phone-alt"></i>
                <p>17/12 Nehru Vihar Bhilwara, Rajasthan</p>
            </li>
            <li>
                <i className="far fa-clock"></i>
                <p>17/12 Nehru Vihar Bhilwara, Rajasthan</p>
            </li>
        </div>
       
    </div>
    <div className="map">
        <Iframe src={src} width="600" height="450"  />
    </div>
        </section>
</div>
  )
}
