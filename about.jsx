import React from "react";
import "../about.css";
import {Link} from "react-router-dom"

export const About=()=>{
    return(
        <div className="main-container">
            <div className="about">
              <h1>ABOUT</h1>
              <p>Welcome to Safari Adventures ,where the trill of wild awaits!
                Since 2005 ,we've been leading uforgettable safari experience
                in the heart of Africa and other parts of the world,
                immersing travellersin the breathtaking beauty and 
                awe-inspiring wildlife of the continent.
                 </p>
             </div>
                 <h1>What we offer</h1>
                 <div className="services">
                    <div className="card"> 
                   <h3>Hotel Reservations</h3>
                   <p>Unlock  A seamless and stress-lesstravel experience
                    by utilizing our hotel booking service.Enjoy personalized
                    assistance,exclusive deals and effortless reservations for unforgettable stays worldwide.
                   </p>
                   </div>
                   <div className="card">
                   <h3>Flight Booking</h3>
                    <p>Discover seamless flight booking with our service and experience your next adventure with ease.
                        From quick searches to flexible options we've got you covered.
                    </p>
                    </div>
                    <div className="card">
                    <h3>Airport Transfers</h3>
                    <p>Make your journey stress-free and enjoy comfort,
                        convinience and reliabilityas we take care of your
                        transport needs
                    </p>
                    </div>
                </div>
                <div className="contact">
                   
                    <h1>Contact Us</h1>
                    <p>Ready to embark on your own safari adventure?
                        Reach out to us today so thet we can help you! </p>
                    <ul className="contact-info">
                        <h2>Call and follow us today!</h2>
                       <Link>
                        <li>Phone: +(254)123456778</li>
                        <li>Instagram  @Safari-adventures</li>
                        <li>Facebook  @Safari_Adventures</li>
                        </Link>
                    </ul>
                    

                   

                </div>
              

                </div>
                

       
    )
}