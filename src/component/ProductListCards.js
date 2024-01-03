import Rating from "@mui/material/Rating";
import { useContext } from "react";
import { dataSet } from "./Main";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductListCards.css";

export function ProductListCards({ data, index }) {
  const { AddToCart } = useContext(dataSet);
  const percentageAmout = (100 * data.discountPercentage) / data.price;
  const dataPriceA = data.price - percentageAmout;
  const navigate = useNavigate();

  return (
    <div key={index} className="col mb-5 productCart">
      <a
        href="#"
        className="text-decoration-none"
        onClick={() => navigate("/")}
      >
        <div className="card h-100">
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          <img
            className="card-img-top"
            style={{ width: "100%", height: "200px" }}
            src={data.thumbnail}
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{data.title}</h5>
              <Rating name="read-only" value={data.rating} readOnly />
              <div>
                <p>{data.description}</p>
              </div>
              <span className="text-muted">
                {/* $<s>{data.price}</s> */}
                <h5>₹{dataPriceA.toFixed(2)}</h5>
              </span>
            </div>
          </div>
          <div className="card-footer p-4 pt-5 border-top-0 bg-transparent productCardFooter">
            <div className="text-center"></div>
          </div>
        </div>
      </a>
      <button
        className="btn btn-outline-dark mt-auto addToCartBtn"
        onClick={() => {
          AddToCart(index);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
