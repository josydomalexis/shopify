import Rating from "@mui/material/Rating";
import { useContext } from "react";
import { dataSet } from "./Main";
import { useNavigate } from "react-router-dom";

export function ProductListCards({ data, index }) {
  const { AddToCart } = useContext(dataSet);
  const percentageAmout = (100 * data.discountPercentage) / data.price;
  const dataPriceA = data.price - percentageAmout;
  const navigate = useNavigate();

  return (
    <div key={index} className="col mb-5">
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
            <h5 className="fw-bolder">{data.name}</h5>
            <Rating name="read-only" value={data.rating} readOnly />
            <div>
              <p>{data.description}</p>
            </div>
            <span className="text-muted">
              $<s>{data.price}</s>
              {` Offer : $${dataPriceA.toFixed(2)}`}
            </span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                AddToCart(index);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
