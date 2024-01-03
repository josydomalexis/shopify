import React from "react";
import { dataSet } from "./Main";
import { useContext } from "react";
import "./Orders.css";

function Orders() {
  const { DATA, order } = useContext(dataSet);
  const dataMin = DATA.products;
  return (
    <section className="py-5 min-vh-100">
      <div className="container px-4 px-lg-5 mt-5">
        <h1 className="text-center">Orders</h1>
        {order.length === 0 ? (
          <span>No Order yet!</span>
        ) : (
          <ul className="list-group list-group-flush">
            {order.map((productList, index) => {
              let orderProducts = [...productList];
              // console.log(orderProducts);
              return (
                <li className="list-group-item">
                  <h3>Order {index + 1}</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="row gx-4 gx-lg-5 row-cols-md-2 row-cols-xl-4 justify-content-start">
                        {orderProducts.map((product) => {
                          let productId = product.id;
                          let productDetail = dataMin[product.id - 1];
                          return (
                            <div key={index} className="mb-3">
                              <div className="card h-100 orderItem">
                                <div>
                                  <h5 className="p-2">{productDetail.title}</h5>

                                  <img
                                    className="img-fluid "
                                    src={productDetail.thumbnail}
                                    alt={productDetail.title}
                                  />
                                  <div className="card-body">
                                    <h5 className="fw-bolder"></h5>

                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">
                                        Quantity :{product.quantity}
                                      </li>
                                      <li class="list-group-item">
                                        Total Price :{" "}
                                        {productDetail.price * product.quantity}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Orders;
