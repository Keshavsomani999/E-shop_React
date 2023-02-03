import React from 'react'
import Banner from './Index/Banner';
import Banner3 from './Index/Banner3';
import Feature from './Index/Feature'
import Hero from './Index/Hero'
import NewArrivals from './Index/NewArrivals';
import Product from './Index/Product'
import SmBanner from './Index/SmBanner';




export default function Index() {
  return (
    <div>
        <Hero/>
        <Feature/>
        <Product/>
        
        <Banner/>
        <NewArrivals/>
        <SmBanner/>
        <Banner3/>
        
        
    </div>
  )
}
