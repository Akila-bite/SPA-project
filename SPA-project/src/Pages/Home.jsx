import React from "react";
import welcomeImage from "../assets/Rooibos-honey-Basque-cheesecake.jpg"; 
import category1 from "../assets/Clipped_muesli-with-caramel-bananas.png";
import category2 from "../assets/Clipped_stir-fry-wrap.png";
import category3 from "../assets/Clipped_meatball_pasta_bake.png";
import category4 from "../assets/Clipped_choch-chip-ice-cream-sandwiches.png";

export default function Home() {


return (
 
    <div className="homepage">
      {/* Main Welcome Image */}
      <img src={welcomeImage} alt="Rooibos Honey Cheesecake" className="welcome-image" />

      {/* Recipe Categories */}
      <div className="recipe-categories">
        <a href="/category1">
          <img src={category1} alt="Category 1" />
        </a>
        <a href="/category2">
          <img src={category2} alt="Category 2" />
        </a>
        <a href="/category3">
          <img src={category3} alt="Category 3" />
        </a>
       <a href="/category4">
        <img src={category4} alt="Category 4" />
       </a>
      </div>
    </div>

 
  );



}


