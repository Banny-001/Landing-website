import React from 'react';
import {Route ,Routes} from "react-router-dom";
import './App.css';
import "./components/navbar";
//import { Link } from 'react-router-dom';
import {Navbar}  from "./components/navbar";
//import { herosection } from './components/Herosection';
import { About,Services,SignUp } from './components/pages';
import {Home} from "./components/pages/home"
import "./components/home.css";
import { BrowserRouter as Router } from 'react-router-dom';




  function App () {
   return(
    <div className="website">
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/about" element={<About/>} />
        <Route path ="/services" element={<Services/>} />
        

        
         
      </Routes>
      
    
    </div>
       
   );
 };
export default App;









