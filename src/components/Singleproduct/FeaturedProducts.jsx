import React from 'react'
import n1 from "./products/n1.jpg";
import n2 from "./products/n2.jpg";
import n3 from "./products/n3.jpg";
import n4 from "./products/n4.jpg";



export default function FeaturedProducts() {
  return (
    <div>
        <section id="product1" className="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Morden Design</p>
    <div className="pro-container">
        <div className="pro">
            <img src={n1} alt=""/>
            <div className="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>

                </div>
                <h4>$78</h4>
            </div>
            <a href="!#">
                <i className="bi bi-cart cart"></i>
            </a>
            
            
        </div>
        <div className="pro">
            <img src={n2} alt=""/>
            <div className="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>

                </div>
                <h4>$78</h4>
            </div>
            <a href="!#">
                <i className="bi bi-cart cart"></i>
            </a>
            
            
        </div>
        <div className="pro">
            <img src={n3} alt=""/>
            <div className="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>

                </div>
                <h4>$78</h4>
            </div>
            <a href="!#">
                <i className="bi bi-cart cart"></i>
            </a>
            
            
        </div>
        <div className="pro">
            <img src={n4} alt=""/>
            <div className="des">
                <span>Adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>

                </div>
                <h4>$78</h4>
            </div>
            <a href="!#">
                <i className="bi bi-cart cart"></i>
            </a>
            
            
        </div>
       
    </div>
</section>
    </div>
  )
}
