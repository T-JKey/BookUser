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
  const { _page, _limit, _totalRows } = pagination;
  const { load, _sort, _order } = setLoad;
  const totalPages = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  function handleold() {
    setLoad({ ...pagination, _page: 1, status: "old" });
  }
  function handlenew() {
    setLoad({ ...pagination, _page: 1, status: "new" });
  }

  const sortAsc = () => {
    setLoad({ ...pagination, _page: 1, _sort: "price", _order: "asc" });
  };

  const sortDesc = () => {
    setLoad({ ...pagination, _page: 1, _sort: "price", _order: "desc" });
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
                  <button className="dropdown-item" onClick={handleold}>
                    Gói: Sách old
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handlenew}>
                    Gói: Sách new
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
          <nav
            aria-label="Page navigation example"
            className="d-flex align-items-center ms-auto"
          >
            <ul className="pagination m-0">
              <Button
                onClick={() => {
                  handlePageChange(_page - 1);
                }}
                variant="contained"
                disabled={_page === 1}
              >
                prev
              </Button>

              <Button>
                <strong>{_page}</strong>
              </Button>
              <Button
                disabled={_page >= totalPages}
                onClick={() => {
                  handlePageChange(_page + 1);
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
