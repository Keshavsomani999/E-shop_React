import React from 'react'
import Items from './Items';

import f1 from "./products/f1.jpg";
import f2 from "./products/f2.jpg";
import f3 from "./products/f3.jpg";
import f4 from "./products/f4.jpg";
import f5 from "./products/f5.jpg";
import f6 from "./products/f6.jpg";
import f7 from "./products/f7.jpg";
import f8 from "./products/f8.jpg";
import n1 from "./products/n1.jpg";
import n2 from "./products/n2.jpg";
import n3 from "./products/n3.jpg";
import n4 from "./products/n4.jpg";
import n5 from "./products/n5.jpg";
import n6 from "./products/n6.jpg";
import n7 from "./products/n7.jpg";
import n8 from "./products/n8.jpg";



const items = [
    {subTitle: 'Adidas',title:'Cartoon Astronaut T-Shirts',price:'$78',img:f1,id:0},
    {subTitle: 'Adidas',title:'White Astronaut T-Shirts',price:'$98',img:f2,id:1},
    {subTitle: 'Adidas',title:'Black Astronaut T-Shirts',price:'$18',img:f3,id:2},
    {subTitle: 'Adidas',title:'Green Astronaut T-Shirts',price:'$78',img:f4,id:3},   
    {subTitle: 'Adidas',title:'Cartoon Astronaut T-Shirts',price:'$78',img:f5,id:4},
    {subTitle: 'Adidas',title:'White Astronaut T-Shirts',price:'$98',img:f6,id:5},
    {subTitle: 'Adidas',title:'Black Astronaut T-Shirts',price:'$18',img:f7,id:6},
    {subTitle: 'Adidas',title:'Green Astronaut T-Shirts',price:'$78',img:f8,id:7},
    {subTitle: 'Adidas',title:'Cartoon Astronaut T-Shirts',price:'$78',img:n1,id:8},
    {subTitle: 'Adidas',title:'White Astronaut T-Shirts',price:'$98',img:n2,id:9},
    {subTitle: 'Adidas',title:'Black Astronaut T-Shirts',price:'$18',img:n3,id:10},
    {subTitle: 'Adidas',title:'Green Astronaut T-Shirts',price:'$78',img:n4,id:11},   
    {subTitle: 'Adidas',title:'Cartoon Astronaut T-Shirts',price:'$78',img:n5,id:12},
    {subTitle: 'Adidas',title:'White Astronaut T-Shirts',price:'$98',img:n6,id:13},
    {subTitle: 'Adidas',title:'Black Astronaut T-Shirts',price:'$18',img:n7,id:14},
    {subTitle: 'Adidas',title:'Green Astronaut T-Shirts',price:'$78',img:n8,id:15},
  ];

export default function Product() {
  return (
    <div><section id="product1" className="section-p1">
    <h2>Feature Products</h2>
    <p>Summer Collection New Morden Design</p>
    <div className="pro-container">
        {
            items.map((item) => <Items key={item.id} subTitle={item.subTitle} title={item.title} price={item.price} img={item.img}/>)
        }
    
    </div>
</section></div>
  )
}
