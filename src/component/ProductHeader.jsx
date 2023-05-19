import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
ProductHeader.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
ProductHeader.defaultProps = {
  onPageChange: null,
};
export default function ProductHeader(props) {
  const { pagination, onPageChange, setLoad, Data } = props;
  const { page, perPage, totalRows } = pagination;
  const { load, sortType, column } = setLoad;
  const totalPages = Math.ceil(totalRows / perPage);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  function handlenormal() {
    setLoad({ ...pagination, page: 1, label: "normal" });
  }
  function handlevip() {
    setLoad({ ...pagination, page: 1, label: "vip" });
  }

  const sortAsc = () => {
    setLoad({ ...pagination, page: 1, column: "price", sortType: "asc" });
  };

  const sortDesc = () => {
    setLoad({ ...pagination, page: 1, column: "price", sortType: "desc" });
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ height: "56px", margin: "0 5%" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Sắp xếp theo
        </a>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gói sách
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <button className="dropdown-item" onClick={handlenormal}>
                    Gói: Sách Normal
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handlevip}>
                    Gói: Sách VIP
                  </button>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Giá
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <button className="dropdown-item" onClick={sortAsc}>
                    Giá: Thấp đến cao
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={sortDesc}>
                    Giá: Cao đến thấp
                  </button>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mx-2">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <nav
            aria-label="Page navigation example"
            className="d-flex align-items-center ms-auto"
          >
            <ul className="pagination m-0">
              <Button
                onClick={() => {
                  handlePageChange(page - 1);
                }}
                variant="contained"
                disabled={page === 1}
              >
                prev
              </Button>

              <Button>
                <strong>{page}</strong>
              </Button>
              <Button
                disabled={page >= totalPages}
                onClick={() => {
                  handlePageChange(page + 1);
                }}
                variant="contained"
              >
                next
              </Button>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
