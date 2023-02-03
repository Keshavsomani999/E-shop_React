import './App.css';
import script from './script.js';
import Navbar from "./components/Navbar";
import React from 'react'
import Index from './components/Index';
import Footer from './components/Footer';
import Singleproduct from './components/Singleproduct';
import {Helmet} from "react-helmet";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact'
import Cart from './components/Cart';
import Newsletter from './components/Newsletter';




function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route exact path='/E-shop_React' element={<Index/>} />
        <Route exact path='/shop' element={<Shop/>} />
        <Route exact path='/contact' element={<Contact/>} />  
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/sproduct' element={<Singleproduct/>} />
        
      </Routes>
      <Newsletter/>
      <Footer/>
      </Router>
      <Helmet>
   
      <script src="./script.js" type="text/javascript" />
      
      </Helmet>
    </div>
  );
}


export default App;
