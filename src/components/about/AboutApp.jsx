import React from 'react'
import video from "../img/about/1.mp4"


export default function AboutApp() {
  return (
    <div>
        <section id="about-app" className="section-p1">
        <h1>Download Our <a href='https://play.google.com/store/apps'>App</a></h1>
        <div className="video">
          <video autoPlay muted loop src={video}></video>
        </div>
        </section>
    </div>
    
  )
}
