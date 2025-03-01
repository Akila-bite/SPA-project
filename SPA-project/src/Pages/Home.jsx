import React from "react";
// import Header from "../Components/Header";
import welcomeImage from "../assets/Rooibos-honey-Basque-cheesecake.jpg"; 
import category1 from "../assets/Asian-style-crunchy-stir-fry-wrap.jpg";
import category2 from "../assets/Boerewors-Meatball-Pasta-Bake-1-1.jpg";
import category3 from "../assets/Homemade-cinnamon-rolls.webp";

export default function Home() {


return (
 
    <div className="homepage">
       {/* <Header /> */}
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
      </div>
    </div>

 
  );



}


