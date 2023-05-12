import React from "react";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Otp from "./auth/Otp";
import Membership from "./component/Membership";
import User from "./component/User";
import BuyHistory from "./component/user/BuyHistory";
import Logout from "./component/user/Logout";
import Account from "./component/user/Account";
import RentalOrder from "./component/user/RentalOrder";
function App() {
  return (
    <>
     <Routes> 
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/auth/login" element={<Login />} /> 
        <Route exact path="/auth/register" element={<Register />} /> 
        <Route exact path="/auth/otp" element={<Otp />} /> 
        <Route exact path="products" element={<Products />} /> 
        <Route exact path="/products/:id" element={<Product />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/membership" element={< Membership />} />
        <Route path="/user" element={< User />} />
        <Route path="/account" element={< Account />} />
        <Route path="/buyhistory" element={< BuyHistory />} />
        <Route path="/rentalorder" element={< RentalOrder />} />
        <Route path="/logout" element={< Logout />} />
      </Routes>
    </>
  );
}

export default App;
