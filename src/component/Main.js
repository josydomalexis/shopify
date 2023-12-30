import { createContext, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DATA } from "../config/Config";
import Products from "./Products";
import CheckOut from "./CheckOut";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Orders from "./Orders";

export const dataSet = createContext(); //create

function Main() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  //   const [quantity, setQuantity] = useState([]);

  const AddToCart = (id) => {
    // console.log(
    //   cart.findIndex((value) => {
    //     return value.id === id;
    //   })
    // );

    let cartProductIndex = cart.findIndex((value) => {
      return value.id === id;
    });

    if (cartProductIndex !== -1) {
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        })
      );
    } else {
      setCart((prev) => [...prev, { id: id, quantity: 1 }]);
    }

    // console.log(cart);
  };

  const AddQuantity = (id, quantity) => {
    setCart(
      cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: parseInt(quantity),
          };
        } else {
          return product;
        }
      })
    );
    // console.log(cart);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const makePayment = () => {
    let tempCart = [...cart];
    let tempOrder = [...order];
    tempOrder.push([...tempCart]);

    // console.log(`combineOrder`);
    // console.log(tempOrder);
    setOrder([...tempOrder]);
    setCart([]);
    console.log(`order`);
    console.log(order);
    // console.log("Payment Sucessfull");
  };

  // setQuantity([...cart, { id: id, quantity: quantity }]);

  return (
    <dataSet.Provider
      value={{
        DATA,
        AddToCart,
        AddQuantity,
        removeFromCart,
        cart,
        order,
        makePayment,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/product/:productid" element={<CheckOut />} /> */}
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </dataSet.Provider>
  );
}

export default Main;
