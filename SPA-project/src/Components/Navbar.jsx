import React from "react";


export default function Navbar() {
 

  return (
    <nav className="navbar">
     <ul className="nav-links"> 
        <li>
          <a href="#"><span className="material-icons">home</span> Home</a>
        </li>
        <li>
          <a href="#"><span className="material-icons">restaurant_menu</span> Recipes</a>
        </li>
        <li>
          <a href="#"><span className="material-icons">favorite</span> Favorites</a>
        </li>
        < a href="#"><span className="material-icons">dinner_dining</span>About</a>
      </ul>
    </nav>
  );
}









