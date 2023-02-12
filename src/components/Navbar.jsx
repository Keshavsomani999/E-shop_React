import "./style.css";

import logo from "./img/logo2.png"
import { Link } from "react-router-dom";


export default function Button(props) {

    const barHandle = () => {
    let nav = document.getElementById('navbar');

      nav.classList.add('active');
    }

    const closeHandle =()=>{
      let nav = document.getElementById('navbar');
      
      nav.classList.remove('active');
    }

    return (
      <div>
      <section id="header">
    <Link to="/"><img src={logo} className="logo" alt=""/></Link>

    <div>
        <ul id="navbar">
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/shop" >Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li id="lg-bag"><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
            </Link></li>
            <span id="close" onClick={closeHandle}>
                <i className="fa-solid fa-xmark"></i>
            </span>
            
                {/* <i className="fa-solid fa-xmark" onClick={}></i> */}
            
            
            
        </ul>
    </div>
    <div id="mobile">
        <Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
        </Link>
        <i id="bar" onClick={barHandle} className="fas fa-outdent"></i>

    </div>
</section>

      </div>
    )
  }

