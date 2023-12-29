import { dataSet } from "./Main";
import { useContext } from "react";
import "./CheckOut.css";

function CheckOut() {
  const { DATA, cart } = useContext(dataSet);
  const dataMin = DATA.products;
  console.log(dataMin);

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <ul class="list-group list-group-flush">
        {cart.map((item) => (
          <li class="list-group-item">
            <div className="d-flex justify-content-between">
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
                    <select
                      name="checkoutQuantity"
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </form>
                </div>
                <div>{dataMin[item.id - 1].price}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckOut;
