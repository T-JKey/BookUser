import React from 'react';
import { NavLink } from "react-router-dom";

function User() {
  return (
    <div>
        <div className ="header__navbar-item header__navbar-user">
            <img src="https://cf.shopee.vn/file/f348352e33a40b99df2a6f3e616c1731_tn" alt="" class="header__navbar-user-img" />
            <span className="header__navbar-user-name navbar-nav">Đức Tuyến</span>
                <ul className="header__navbar-user-menu dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="header__navbar-user-item ">
                        <NavLink to ="/account">Tài khoản của tôi</NavLink>
                    </li>

                    <li className="header__navbar-user-item">
                        <NavLink to="/buyhistory">Lịch sử mua hàng</NavLink>
                    </li>

                    <li className="header__navbar-user-item">
                        <NavLink to="/rentalorder">Đơn thuê</NavLink>
                    </li>

                    <li className="header__navbar-user-item header__navbar-user-item--separate">
                        <NavLink to="/logout">Đăng xuất</NavLink>
                    </li>

                </ul>
        </div>
    </div>
  )
}

export default User