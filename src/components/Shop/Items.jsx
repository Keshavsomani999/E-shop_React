import React from 'react'
import { Link } from "react-router-dom";


export default function Items(props) {
 
  
  return (
    <div className="pro" >
      <Link to="/sproduct">
            <img src={props.img} alt=""/>
            <div className="des">
                <span>{props.subTitle}</span>
                <h5>{props.title}</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4>{props.price}</h4>
            </div>
            <a href="!#">
                <i className="bi bi-cart cart"></i>
            </a>
            </Link> 
    </div>
  )
}
