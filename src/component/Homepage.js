import React from "react";
import { useContext } from "react";
import { dataSet } from "./Main";
import "./Homepage.css";

function Homepage() {
  const { cart, carosalImages } = useContext(dataSet);
  return (
    <div className="home min-vh-100">
      <div className="hero">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {carosalImages.map((img, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <div className="heroSlider">
                    <img src={img.img} className="d-block w-100" alt="..." />
                  </div>
                </div>
              );
            })}
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
