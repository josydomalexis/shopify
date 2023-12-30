import React from "react";
import { dataSet } from "./Main";
import { useContext } from "react";

function Orders() {
  const { DATA, order } = useContext(dataSet);
  const dataMin = DATA.products;
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <h1>Orders</h1>
        {order.length === 0 ? (
          <span>No Order yet!</span>
        ) : (
          <ul className="list-group list-group-flush">
            {order.map((productList, index) => {
              let orderProducts = [...productList];
              // console.log(orderProducts);
              return (
                <li className="list-group-item">
                  Order {index + 1}
                  <ul className="list-group list-group-flush">
                    {orderProducts.map((product) => {
                      let productId = product.id;
                      let productDetail = dataMin[product.id - 1];
                      return (
                        <li className="list-group-item">
                          Product ID : {productDetail.id} | Product Quantity :
                          {product.quantity} | {productDetail.title}
                        </li>
                      );
                    })}
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
