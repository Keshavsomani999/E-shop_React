import "./style.css";

import logo from "./img/logo.png"
import { Link } from "react-router-dom";


export default function Button(props) {
    
    return (
      <div>
      <section id="header">
    <a href="!#"><img src={logo} className="logo" alt=""/></a>

    <div>
        <ul id="navbar">
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/shop" >Shop</Link></li>
            <li><a href="!#">Blog</a></li>
            <li><a href="!#">About</a></li>
            <li><a href="!#">Contact</a></li>
            <li id="lg-bag"><a href="!#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
            </a></li>
            <a id="close">
                <i className="fa-solid fa-xmark"></i>
            </a>
            
            
            
        </ul>
    </div>
    <div id="mobile">
        <a href="!#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
        </a>
        <i id="bar" className="fas fa-outdent"></i>

    </div>
</section>

      </div>
    )
  }

