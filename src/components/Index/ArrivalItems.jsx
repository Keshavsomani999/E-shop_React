import React from 'react'

export default function ArrivalItems(props) {
  return (
    
        <div className="pro">
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
            
            
        </div>
    
  )
}
