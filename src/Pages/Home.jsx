import React from "react";
import welcomeImage from "../assets/Rooibos-honey-Basque-cheesecake.jpg"; 
import image1 from "../assets/Crispy-fried-eggs-and-chakalaka-bean-salad-on-toast-1.jpg";
import image2 from "../assets/Spicy-Clemonada.jpg";
import image3 from "../assets/Hake-curry.jpg";




export default function Home() {
  

return (
 
    <div className="homepage">
      {/* Main Welcome Image */}
      <div className="hero">
      <div className="image-container">
      <img src={welcomeImage} alt="Rooibos Honey Cheesecake" className="welcome-image" />
      <div className="overlay"></div>
        <div className="hero-text">
          <h1 className="display-1">Feel Like Cooking Today?</h1>
          <p className="display-6">Foodify has recipes that turn out great every time!</p>
        </div>
      </div>
     </div>
    

      {/* Recipe Categories */}
       <div className="bottom-container">
        <img src={image1} alt="Crispy fried eggs and chakalaka bean salad on toast" className="bottom-image"/>
        <img src={image2} alt="Spicy clemonada" className="bottom-image"/>
        <img src={image3} alt="Hake curry" className="bottom-image"/>
         
      </div> 
    </div>


 
  );



};


