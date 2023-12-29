import React, { useState } from "react";
import { useContext } from "react";
import { dataSet } from "./Main";
import { Link } from "react-router-dom";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const { cart } = useContext(dataSet);
  return (
    <nav className="navbar navbar-expand-lg bg-warning bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand" title="Shopping" href="#">
          Shopify
        </a>

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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
          <div className="ms-md-auto">
            <Link to="/CheckOut" class="btn btn-outline-dark">
              Cart <span class="badge text-bg-dark">{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
