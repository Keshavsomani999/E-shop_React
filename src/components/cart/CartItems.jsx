import React from 'react'
import { Link } from "react-router-dom";

import f1 from '../img/products/f1.jpg'
import f2 from '../img/products/f2.jpg'
import f3 from '../img/products/f3.jpg'


export default function CartItems() {
    
  
    
  return (
    <div>
        <section id="cart" className="section-p1">
    <table width="100%">
        <thead>
            <tr>
            <td>Remove</td>
            <td>Image</td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><Link to=""><i className="far fa-times-circle"></i></Link></td>
                <td><img src={f1} alt=""/></td>
                <td>Cartoon Astronaut T-Shirts</td>
                <td>$118.19</td>
                <td>1</td>
                <td>$118.19</td>
            </tr>
            <tr>
                <td><Link to=""><i className="far fa-times-circle"></i></Link></td>
                <td><img src={f2} alt=""/></td>
                <td>Cartoon Astronaut T-Shirts</td>
                <td>$118.19</td>
                <td>1</td>
                <td>$118.19</td>
            </tr>
            <tr>
                <td><Link to=""><i className="far fa-times-circle"></i></Link></td>
                <td><img src={f3} alt=""/></td>
                <td>Cartoon Astronaut T-Shirts</td>
                <td>$118.19</td>
                <td>1</td>
                <td>$118.19</td>
            </tr>
        </tbody>
    </table>
</section>
    </div>
  )
}
