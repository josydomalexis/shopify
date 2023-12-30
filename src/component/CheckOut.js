import { dataSet } from "./Main";
import { useContext } from "react";

import "./CheckOut.css";
import TotalCalculation from "./TotalCalculation";

function CheckOut() {
  const { DATA, cart, AddQuantity, removeFromCart } = useContext(dataSet);
  const dataMin = DATA.products;
  //   console.log(dataMin);

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <ul className="list-group list-group-flush">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item">
            <div key={index} className="d-flex justify-content-between">
              <img
                className="checkoutImage"
                alt={dataMin[item.id - 1].title}
                src={dataMin[item.id - 1].thumbnail}
              />
              <div className="checkoutProductDetail">
                <h2>{dataMin[item.id - 1].title}</h2>
                <p>{dataMin[item.id - 1].description}</p>
              </div>
              <div className="d-flex">
                <div className="checkoutProductQuantity">
                  <form>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="5"
                      step="1"
                      value={item.quantity}
                      onChange={(e) => {
                        AddQuantity(item.id, e.target.value);
                      }}
                    />
                  </form>
                </div>
                <div>{dataMin[item.id - 1].price * item.quantity}</div>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-5">
              <a
                className="btn btn-outline-danger"
                href="#"
                onClick={() => {
                  removeFromCart(item.id);
                }}
              >
                Remove
              </a>
            </div>
          </li>
        ))}
        {cart.length !== 0 ? (
          <TotalCalculation />
        ) : (
          <h3 className="text-center">Cart Empty</h3>
        )}
      </ul>
    </div>
  );
}

export default CheckOut;
