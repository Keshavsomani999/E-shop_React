import React from 'react'
import Product from './Shop/Product'
import Pageheader from './Shop/Pageheader'


export default function Shop() {
  return (
    <div>
   <Pageheader/>
<Product/>
<section id="pagination" className="section-p1">
    <a href="!#">1</a>
    <a href="!#">2</a>
    <a href="!#"><i className="fa-solid fa-right-long"></i></a>
</section>
    </div>
  )
}
