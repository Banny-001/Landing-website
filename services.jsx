import React from "react";
import"../services.css"
import {Link} from "react-router-dom";

//import CardItem from "../CardItem.js";
export const Services =(props)=>{
    return(
        
    <div className="cards">
                <h2>Check out these EPIC Destinations!</h2>
            <div className="cards-container">
                <ul className="cards-items">
                <li className="card-wrap">
                  <Link className="card1" to={props.path} >
                    <figure className="card-wrap" data-category={
                        props.label}>
                          
                    <img  src="./assets/pingunes.jpg"
                       alt="Travel image"
                      style={{height:'400px'}}
                      Label="adventure"
                       Text="Embark on an unforgettable journey to witness the
                       charm of Madagascar's adorable penguins frolic along 
                       the rocky shores of Indian Ocean in Pristine beaches.">  
                     </img>
                            </figure>  
                
                        <div className="card-info">
                            <h5 className="card-text">Embark on an unforgettable journey to witness the
                       charm of Madagascar's adorable penguins frolic along 
                       the rocky shores of Indian Ocean in Pristine beaches."</h5>
                        </div> 
                    </Link> 
                
             </li>

             <li className="card-wrap">
              <Link className="card1" to={props.path} >
                    <figure className="card-wrap" data-category={
                        props.label}>
                          
                       <img src="./assets/lion.jpg"
                       alt="Travel image"

                        Text="Travel through the Maasai Mara in Kenya and enjoy
                        the beautiful wildlife and scenic views of the game reserve "
                         Label="adventure">
                        </img>
                    
                        </figure>  
                   
                        <div className="card-info">
                        
                            <h5 className="card-text">Travel through the Maasai Mara in Kenya and enjoy
                        the beautiful wildlife and scenic views of the game reserve. </h5>


                        </div>  
                </Link>
             </li>
             <li className="card-wrap">
              <Link className="card1" to={props.path} >
                    <figure className="card-wrap" data-category={
                        props.label}>
                          
                       <img src="./assets/img-8.jpg"
                       alt="Travel image"
                       style={{height:'400px'}}
                        Text="Explore the hidden waterfall deep inside
                        the amazon Jungle"
                         Label="adventure">
                        </img>
                    
                        </figure>  
                   
                        <div className="card-info">
                        
                            <h5 className="card-text">Travel through the Namib desert,a stunning and vast expanse
                            of sand stretching along the western coast of Namibia .
                             </h5>


                        </div>  
                </Link>
             </li>
             <li className="card-wrap">
              <Link className="card1" to={props.path} >
                    <figure className="card-wrap" data-category={
                        props.label}>
                          
                       <img className="fill-img" src="./assets/img-9.jpg"
                       alt="Travel image"
                       style={{height:'400px'}}
                        Text="Explore the hidden waterfall deep inside
                        the amazon Jungle"
                         Label="adventure">
                        </img>
                    
                        </figure>  
                   
                        <div className="card-info">
                        
                            <h5 className="card-text">Explore the hidden waterfall deep inside
                        the amazon Jungle.</h5>


                        </div>  
                </Link>
             </li>
             <li className="card-wrap">
              <Link className="card1" to={props.path} >
                    <figure className="card-wrap" data-category={
                        props.label}>
                          
                       <img  src="./assets/img-6.jpg"
                       alt="Travel image"
                       style={{height:'650px'} }
                        Text="Explore the hidden waterfall deep inside
                        the amazon Jungle"
                         Label="adventure">
                        </img>
                    
                        </figure>  
                   
                        <div className="card-info">
                        
                            <h5 className="card-text">Discover China's modern architecture and its rapid economic growth.
                        </h5>


                        </div>  
                </Link>
             </li>
             <li className="card-wrap">
              <Link className="card1" to={props.path} >
                    <figure className="card-wrap" data-category={
                        props.label}>
                          
                       <img src="./assets/img-4.jpg"
                       alt="Travel image"
                       style={{height:'400px'}}
                        Text="Explore the hidden waterfall deep inside
                        the amazon Jungle"
                         Label="adventure">
                        </img>
                    
                        </figure>  
                   
                        <div className="card-info">
                        
                            <h5 className="card-text">Explore the hidden waterfall deep inside
                        the amazon Jungle.</h5>


                        </div>  
                </Link>
             </li>
             


               

                </ul>
            
            </div>
            
            
          
     </div>

            
        
    )
};

