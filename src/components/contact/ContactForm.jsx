import React from 'react'
import people from '../img/people/1.png'
import people1 from '../img/people/2.png'
import people2 from '../img/people/3.png'


export default function ContactForm() {
  return (
    <div>
        <section id="form-details">
    <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Subject"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <button class="normal">Submit</button>
    </form>

    <div class="people">
        <div>
            <img src={people} alt=""/>
            <p><span>Keshav Somani</span> Senior Marketing Manager <br/> Phone: +91 6377954526 <br/> Email: Keshavsomani999@gmail.com</p>
        </div>
        <div>
            <img src={people1} alt=""/>
            <p><span>Mohammad Hanees</span> Senior Marketing Manager <br/> Phone: +91 6377954526 <br/> Email: MohammadHanees999@gmail.com</p>
        </div>
        <div>
            <img src={people2} alt=""/>
            <p><span>Ishaan bhardwaj</span> Senior Marketing Manager <br/> Phone: +91 6377954526 <br/> Email: Ishaanbhardwaj999@gmail.com</p>
        </div>
    </div>
</section>
    </div>
  )
}
