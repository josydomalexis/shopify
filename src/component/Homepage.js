import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="home">
      <div className="hero">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="heroSlider bg-dark">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="carousel-item">
              <div className="heroSlider bg-body-secondary">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="carousel-item">
              <div className="heroSlider bg-dark-subtle">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
