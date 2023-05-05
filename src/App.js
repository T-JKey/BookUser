import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
function App() {
  return (
    <>
    <Login/>
     <Routes>
        <Route exact path="/register" element={<Register />} />

      </Routes>
    </>
  );
}

export default App;
