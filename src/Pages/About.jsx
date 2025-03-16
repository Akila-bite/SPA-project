import React from "react";
import "../About.css"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function About () {


  return (
    <div className="container mt-5 about-container">
      {/* The about section for Foodify */}
      <div className="row justify-content-center">
  <div className="col-md-8">
    <div className="card shadow-lg border-0 about-card">
      <div className="row"> 
        <div className="col-12"> {/* ensures the about text spans the card */}
          <div className="card-body">
            <h2 className="card-title text-success">About Foodify</h2>
            <p className="card-text about-text">
              Foodify helps you discover delicious new recipes and save your
              favorites effortlessly. These recipes have ingredients inspired by one of South Africa's leading organic and fresh produce sellers, to make sure that you get the best quality meals that turn out delicious all the time.
              The options are almost unlimited, we have light and quick meals, and hearty rich ones for when you crave more of a taste of home.
              Whether you are a home cook or a food lover, our app makes meal planning simple and enjoyable!
            </p>
            <p className="query-text text-center">
  <Link className="query-link" to="/queries">
    Need to know more tea? <span className="fw-bold text-success">Visit our queries page!</span> 
    <i className="bi bi-question-circle-fill ms-1"></i>
  </Link>
</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      
  
      {/* Contact & Social Media Section */}
      <div className="text-center mt-5 about-socials">
      
      <h3 className=""><span className="material-icons">dinner_dining</span>See more of our camera-ready meals<span className="material-icons">dinner_dining</span></h3>
        
        <div className="d-flex flex-column align-items-center about-icons">
          <p className="icon-text">Catch all angles of this mouth watering food, in HD! Follow us on Instagram:</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram fs-3 text-dark"></i>
          </a>
        </div>
          <div className="d-flex flex-column align-items-center about-icons">
          <p className="icon-text">Watch our passionate home chefs on our Youtube channel:</p>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube fs-3 text-dark"></i>
          </a>
        </div>
      </div>
      </div>

    
  
  );
};  
