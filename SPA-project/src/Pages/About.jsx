import React from "react";

export default function About () {

  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
  }, []);

  return (
    <div className="container mt-5">
      {/* About Foodify Section */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://via.placeholder.com/200"
                  className="img-fluid rounded-start"
                  alt="Foodify Logo"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title text-success">About Foodify</h2>
                  <p className="card-text">
                    Foodify helps you discover delicious new recipes and save your
                    favorites effortlessly. Whether you're a home cook or a food lover, 
                    our app makes meal planning simple and enjoyable!
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Taste the world, one recipe at a time!</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Social Media Section */}
      <div className="text-center mt-5">
        <h3 className="text-success">Get in Touch</h3>
        <p>Email: support@foodify.com</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter fs-3 text-primary"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github fs-3 text-dark"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin fs-3 text-primary"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

