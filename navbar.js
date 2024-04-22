import React,{useState} from "react";
import { NavLink, Link} from "react-router-dom";
import "../components/navbar.css"
import "./home.css"



 export const Navbar=()=>{

    const [menuOpen,setMenuOpen]= useState(false);

  
   return (
      <nav className="navbar">
        <div className="navbar-container">
          <h1>SAFARI ADVENTURES</h1>
          <div className="menu" onClick={()=>
                setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>

              </div>
           <ul className={menuOpen? "open" : " "} >
                <li  className="nav-link">
                  <Link to="/">Home</Link>
               </li>
               
               <li className='nav-link'>
                  <NavLink to="/about">About</NavLink>
               </li>
               <li className='nav-link'>
                  <NavLink to="/services">Services</NavLink>
               </li>
               
            </ul>
           </div>
           
        
      </nav>
    )
};
   

