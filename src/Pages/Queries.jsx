import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const QueriesPage = () => {
  return (
    <div
      style={{
        background: "url(src/assets/Naartjie-espresso-and-rosemary-shrub.jpg) no-repeat center center/cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        padding: "60px 20px 20px"
      }}
    >
      <div className="container bg-white p-4 rounded shadow" style={{ maxWidth: "800px" }}>
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                Are these recipes developed by professional chefs?
              </button>
            </h2>
            <div
              id="faq1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Our recipes were developed by professional chefs and home cooks who enjoy innovating and trying new things.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                How do I save a recipe?
              </button>
            </h2>
            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can save a recipe by clicking the "Add to favorites" button when viewing a recipe. Just make sure you are logged in to your account.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-white p-4 rounded shadow mt-4" style={{ maxWidth: "800px" }}>
        <h2 className="text-center mb-4">Email Us a Query</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">
              Your Query
            </label>
            <textarea className="form-control" id="query" rows="4" placeholder="Enter your query"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QueriesPage;


