import React from "react";
import { dataSet } from "./Main";
import { useContext } from "react";
import { Link } from "react-router-dom";

function TotalCalculation() {
  const { DATA, cart, makePayment } = useContext(dataSet);
  const dataMin = DATA.products;

  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-between">
          <div>SUBTOTAL :</div>
          <div>
            {cart.reduce(
              (total, product, index) =>
                total + dataMin[product.id - 1].price * product.quantity,
              0
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Shipping :</div>
          <div>Free</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Total :</div>
          <div>
            <div>
              {cart.reduce(
                (total, product, index) =>
                  total + dataMin[product.id - 1].price * product.quantity,
                0
              )}
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="d-flex justify-content-end">
          {cart.length !== 0 ? (
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => {
                makePayment();
              }}
            >
              Make Payment
            </a>
          ) : (
            ""
          )}
        </div>
      </li>
    </>
  );
}

export default TotalCalculation;
