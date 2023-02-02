import React from 'react'
import { useState } from 'react';
import f1 from "./products/f1.jpg";
import f2 from "./products/f2.jpg";
import f3 from "./products/f3.jpg";
import f4 from "./products/f4.jpg";



export default function Prodetails() {
    const [srclist, setSrclist] = useState(f1);


    
  return (
    <div>
        <section id="prodetails" className="section-p1">
    <div className="single-pro-image">
        <img src={srclist} width="100%" id="MainImg" alt=""/>
        <div className="small-img-group">
            <div className="smaill-img-col" onClick={(e)=>setSrclist(f1)}>
                <img src={f1} width="100%" className="small-img" alt=""/>
            </div>
            <div className="smaill-img-col" onClick={(e)=>setSrclist(f2)}>
                <img src={f2} width="100%" className="small-img" alt=""/>   
            </div>
            <div className="smaill-img-col" onClick={(e)=>setSrclist(f3)}>
                <img src={f3} width="100%" className="small-img" alt=""/>
            </div>
            <div className="smaill-img-col" onClick={(e)=>setSrclist(f4)}>
                <img src={f4} width="100%" className="small-img" alt=""/>
            </div>
        </div>
    </div>
    
    <div className="single-pro-details">
        <h6>Home / T-Shirt</h6>
        <h4>Men's Fashion T Shirt</h4>
        <h2>$139</h2>
        <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
        </select>
        <input type="number" value="1" readOnly />
        <button className="normal">Add To Cart</button>
        <h4>Product Details</h4>
        <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.</span>
    </div>

</section>

    </div>
  )
}
