import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light justify-content-center fixed-top py-2 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
          <i className="fa fa-book" aria-hidden="true"></i>
          BOOK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item " style={{marginRight: "50px"}}>
                <NavLink className="nav-link fs-3" to="/">
                <i className="fa fa-home" aria-hidden="true"></i>
                </NavLink>
              </li>
              <li className="nav-item " style={{marginRight: "50px"}}>
                <NavLink className="nav-link fs-3 " to="/products">
                <i className="fa fa-book" aria-hidden="true"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-3" to="/memberships">
                <i className="fa fa-users" aria-hidden="true"></i>
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/cart" className="btn btn-outline-dark">
                <i className=" fa fa-shopping-cart me-1"></i> Cart ({state.length})
              </NavLink>
              <NavLink to="/login" className="btn btn-outline-dark ms-4">
                <i className=" fa fa-sign-in me-1"></i> Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
