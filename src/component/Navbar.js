import React, { useState } from "react";
import { useContext } from "react";
import { dataSet } from "./Main";
import { Link } from "react-router-dom";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const { cart } = useContext(dataSet);
  return (
    <nav className="navbar navbar-expand-lg bg-warning bg-gradient sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" title="Shopping" to="/">
          <b>SHOPIFY</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Shop
              </Link>
            </li>
          </ul>
          <div className="ms-md-auto">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/checkout" className="btn ">
                  <i className="bi bi-cart2"> </i>
                  <span className="badge text-bg-dark">
                    {cart.reduce((total, product) => {
                      return total + product.quantity;
                    }, 0)}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
