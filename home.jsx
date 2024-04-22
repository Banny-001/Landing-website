import React from "react";
import {Link} from "react-router-dom";



   export const Home=()=>{
    function handleClick (){
        alert("Log in");
    
    }
    return(
        <div className="home-container">
             <img  className="home-img"src="../assets/img-home.jpg"></img>
            <div className="text-overlay">
                 <h1 >ADVENTURE AWAITS</h1>
                 <h6>Escape, Explore,See</h6>
                 <div className="btn">  
                    
                     <button   onClick={handleClick}
                      
                          className="btn"
                          buttonStyle="btn--outline"
                           buttonSize="btn--large"
                            
                            > Get Started
                        </button>
                        
               </div>
                <div  className="text-card">
                         <h4 >Embrace exploration</h4>
                         <p>Exploration is really the essence of the human
                          spirit.You will never know until you go.
                          You have nothing to loose and a world to see.
                          </p>
              
                  </div>
          
              </div>
         </div>
    )
}
export default Home;
    