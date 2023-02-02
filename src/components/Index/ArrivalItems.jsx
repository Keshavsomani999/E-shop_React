import React from 'react'

export default function ArrivalItems(props) {
  return (
    
        <div class="pro">
            <img src={props.img} alt=""/>
            <div class="des">
                <span>{props.subTitle}</span>
                <h5>{props.title}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>

                </div>
                <h4>{props.price}</h4>
            </div>
            <a href="!#">
                <i class="bi bi-cart cart"></i>
            </a>
            
            
        </div>
    
  )
}
