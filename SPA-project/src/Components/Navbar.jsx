import React from "react";


export default function Navbar() {
 

  return (
    <nav className="navbar">
     <ul className="nav-items"> 
        <li className="nav-item">
          <Link className="nav-link" to="/"><span className="material-icons">home</span> Home</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="/recipes"><span className="material-icons">restaurant_menu</span> Recipes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorites"><span className="material-icons">favorite</span> Favorites</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about"><span className="material-icons">dinner_dining</span>About</Link>
        </li>
      </ul>
    </nav>
  );
}









