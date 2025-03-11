import React, { useEffect } from "react";
import "../About.css"
import { Link } from "react-router-dom";

export default function About () {

  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
    import ("bootstrap-icons/font/bootstrap-icons.css");

  }, []);

  return (
    <div className="container mt-5 about-container">
      {/* The about section for Foodify */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 about-card">
            <div className="row g-0">
              {/* <div className="col-md-4">
             
              </div> */}
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title text-success">About Foodify</h2>
                  <p className="card-text about-text">
                    Foodify helps you discover delicious new recipes and save your
                    favorites effortlessly. Whether you're a home cook or a food lover, 
                    our app makes meal planning simple and enjoyable!
                  </p>
                  <p className="card-text">
                  <Link className="nav-link" to="/queries">
                  <p className="text">Need to know more tea? Visit our queries page! <i class="bi bi-question-circle-fill"></i></p>
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
        <h3 className="contact-text text-success">See more of your favorite recipes and creators</h3>
        <div className="d-flex justify-content-center gap-3 about-icons">
          <p>Catch all angles of these delicious meals, in HD! Follow us on Instagram.</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram fs-3 text-dark"></i>
          </a>
          <p>Watch our passionate home chefs on our Youtube channel</p>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube fs-3 text-dark"></i>
          </a>
        </div>
      </div>
    </div>
  );
};  
