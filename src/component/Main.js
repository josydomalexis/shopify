import { createContext, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DATA } from "../config/Config";
import Products from "./Products";
import CheckOut from "./CheckOut";
import Navbar from "./Navbar";
import Homepage from "./Homepage";

export const dataSet = createContext(); //create

function Main() {
  const [cart, setCart] = useState([]);

  const AddToCart = (id) => {
    setCart([...cart, { id: id }]);
    // cart.push({ id: id });
  };

  return (
    <dataSet.Provider value={{ DATA, AddToCart, cart }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<CheckOut />} />
        <Route path="/CheckOut" element={<CheckOut />} />
      </Routes>
    </dataSet.Provider>
  );
}

export default Main;
