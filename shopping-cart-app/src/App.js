import React from "react";
import Axios from 'axios';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";

function App() {

  const getData = () => {
    Axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
    });
  };
  getData();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
